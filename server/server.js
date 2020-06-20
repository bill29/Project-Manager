const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 5000;
var mysql = require('mysql');
const { spawn } = require('child_process');


var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1",
  database: 'QLDA',
  port: 3306
});

conn.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

// Where we will keep books
let books = [];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/login', (req, res) => {
  conn.query(`SELECT * FROM users WHERE username='${req.body.username}' AND password='${req.body.password}';`, (error, result) => {
    if (error) throw error;
    if (result) {
      res.json({ user: result[0], status: "success" })
      conn.query(`UPDATE users SET status=1 WHERE id=${result[0].id}`, (e, data)=>{
        if (e) throw e;
      });
      console.log("Login success!")
    } else {
      res.json({ user: {}, status: "failed" })
      console.log("Login failed!")
    }
  })
});

app.get('/api/movies/all', (req, res) => {
  const query = `
  SELECT * FROM movies ;
  `
  conn.query(query, (error, result) => {
    if (result) {
      console.log(result)
      var arr = []
      result.forEach((item, index) => {
        movie = {
          name: item.name,
          description: item.description,
          rateScore: item.rate,
          actors: item.actors,
          // releaseDate={movie.releaseDate}
          imageUrl: item.link_image,
          isLiked: (item.rate === 5),
          id: item.id
        }
        arr.push(movie)
      })
      res.json({ list: arr, status: "success" })
    } else {
      res.json({ list: [], status: "failed" })
    }
  });
})

app.get('/api/script', (req, res) => {
  var largeDataSet = [];
  // spawn new child process to call the python script
  const python = spawn("python", ['../client/src/scripts/database.py']);
  // collect data from script
  python.stdout.on('data', function (data) {
    console.log('Pipe data from python script ...');
    largeDataSet.push(data);
  });
  // in close event we are sure that stream is from child process is closed

  python.on('close', (code) => {
    console.log(`child process close all stdio with code ${code}`);
    // send data to browser
    console.log(largeDataSet.join())
    res.send(largeDataSet.join(""))
  })
})

app.get('/api/update/rate/:userId/:movieId' , (req, res) =>{
  const query = `
  UPDATE rate SET isLiked=1 WHERE id_user = ${req.params.userId} AND id_movie = ${req.params.movieId};
  `;
  conn.query(query, (error, result) => {
    if (error) throw error
    if (result) {
      console.log(result)
      res.json({status: "success" })
    } else {
      res.json({status: "failed" })
    }
  });
});
//get movie from database
app.get('/api/get/movie/:id', (req, res) => {
  const query = `
  SELECT * FROM movies WHERE id = ${req.params.id};
  `
  conn.query(query, (error, result) => {
    if (result) {
      console.log(result)
      item = result[0]
      movie = {
        name: item.name,
        description: item.description,
        rateScore: item.rate,
        actors: item.actors,
        // releaseDate={movie.releaseDate}
        imageUrl: item.link_image,
        isLiked: (item.rate === 5)
      }
      res.json({ movie: movie, status: "success" })
    } else {
      res.json({ movie: movie, status: "failed" })
    }
  });
})

app.get('/api/favorites/:id', (req, res) => {
  const query = `
  SELECT id, name, isLiked, description, movies.rate, rate.rate, actor, link_image FROM rate, movies WHERE id_user = ${req.params.id} AND movies.id = rate.id_movie AND rate.rate > 4;
  `
  conn.query(query, (error, result) => {
    if (result) {
      console.log(result)
      var arr = []
      result.forEach((item, index) => {
        movie = {
          name: item.name,
          description: item.description,
          rateScore: item.rate,
          actors: item.actors,
          // releaseDate={movie.releaseDate}
          imageUrl: item.link_image,
          isLiked: item.isLiked
        }
        arr.push(movie)
      })
      res.json({ list: arr, status: "success" })
    } else {
      res.json({ list: [], status: "succes" })
    }
  });
})

app.get('/api/logout', (req, res)=>{
  conn.query(`UPDATE  users SET status = 0 WHERE status = 1;`, (error, result) => {
    res.json({status: "success"})
  });
})

app.get('/api/logged_in', (req, res) => {
  const query = `
  SELECT * FROM users WHERE status=1;
  `;
  conn.query(query, (error, result) => {
    if (error) throw error;
    if (result.length > 0)
      res.json({ status: "LOGGED_IN" , user:result[0]})
    else res.json({status: "LOGGED_OUT", user:{}})
  })
})


app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));