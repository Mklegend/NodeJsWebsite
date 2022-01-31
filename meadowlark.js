// Getting Express Module
const express = require('express')
// Creating Express App
const app = express()
// Setting Port number for Server
const port = process.env.PORT || 3000
// Getting HandleBars Template Engine
const { engine } = require ('express-handlebars')

// Not Important
const fortunes = [
  "Conquer your fears or they will conquer you.",
  "Rivers need springs.",
  "Do not fear what you don't know.",
  "You will have a pleasant surprise.",
  "Whenever possible, keep it simple.",
]


// configure Handlebars view engine
// Configuring Engine
app.engine('handlebars', engine())
// Setting View Engine
app.set('view engine', 'handlebars')
// Setting Views Directory
app.set('views','./views')

// Setting Route for Static Files
// Very Important !
app.use(express.static(__dirname + '/public'))

// route for Home Page
app.get('/', (req, res) => {
  res.render('home')
})

// route for About Page
app.get('/about', (req, res) => {
  const randomFortune = fortunes[Math.floor(Math.random()*fortunes.length)]
  res.render('about',{fortune : randomFortune})
})

// custom 404 page
app.use((req, res) => {
  res.status(404)
  res.render('404')
})

app.listen(port, () => console.log(
  `Express started on http://localhost:${port}; ` +
  `press Ctrl-C to terminate.`))