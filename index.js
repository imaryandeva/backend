require('dotenv').config()
const express = require('express')
const app = express()
// const port = 3000

app.get('/', (req, res) => {
	res.send('Hello World! kaisan bani rauaa login... how can i help you...')
})
app.get('/kahalba', (req, res) => {
	res.send('badhiya ba dost')
})
app.get('/twitter', (req, res) => {
	res.send('imaryandeva')
})

app.listen(process.env.PORT, () => {
	// console.log(`Example app listening on port ${port}`)
	console.log(`Example app listening on port ${process.env.PORT}`)
})