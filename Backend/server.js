const PORT=5001

import express from 'express'
import bodyParser from 'body-parser'
import compression from 'compression'
import cors from'cors'
import helmet from 'helmet'
import { ajouterpersone,ListDesAvis } from './Controleur/Avisback.js'


const app=express();

app.use(helmet())
app.use(compression())
app.use(cors())
app.use(bodyParser.json())
//app.use(urlencoded({extended:false}))


app.get('/', (req, res) => {
    res.send('Bienvenu cher utilisateur');
})

app.listen(5001, () => console.log(`Serveur running on port ${PORT}`))

app.get('/', (req, res) => {
    res.send('Bienvenu cher utilisateur');
})

app.listen(5000, () => console.log(`Serveur running on port ${PORT}`))
app.get('/show',ListDesAvis)
app.post('/add',ajouterpersone)