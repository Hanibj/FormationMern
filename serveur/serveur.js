const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');

const   AuthRoutes  = require('./Routes/AuthRoutes');
const DepartementRouter = require('./Routes/DepartementsRoute');
const app = express()
const port = 4000
const URL = "mongodb+srv://hanibenjemaa:Hani1234@clustermerne.cvqmwsl.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(URL).then(() => console.log("successful connexion DB"));

app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello server');
});

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
  })

app.use('/api/Departement',DepartementRouter)
app.use('/api/Authentification',AuthRoutes)
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})