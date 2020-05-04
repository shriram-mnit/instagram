const express =require('express')
const mongoose = require('mongoose')
const {MONGOURI}= require('./keys')
const cors= require('cors')
const app =express()
const PORT =5000

app.use(cors())

mongoose.connect(MONGOURI,{
	 useNewUrlParser:true,
	useUnifiedTopology:true
})

mongoose.connection.on('connected',()=>{
	console.log("connected to mongo ")
})
mongoose.connection.on('error',(err)=>{
	console.log("err connecting",err)
})
require('./models/user')
require('./models/post')

app.use(express.json())

app.use(require('./routes/auth'))
app.use(require('./routes/post'))



app.listen(5000)