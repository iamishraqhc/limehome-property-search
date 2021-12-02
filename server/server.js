import express from 'express'
import axios from 'axios'
import cors from 'cors'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import Favourite from './models/favourite.js'
import 'dotenv/config'

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (err) => console.error(err))
db.once('open', () => console.log("Connected to the database"))

const PORT = process.env.PORT || 5000

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.get('/', async (req, res) => {
    try {
        const response = await axios.get(process.env.PROPERTY_LIST)
        res.json(response.data)
    }
    catch (err) {
        console.error(err)
    }
})

app.post('/', async (req, res) => {
    const favorite = new Favourite({
        name: req.body.name,
        image: req.body.image,
        fav: req.body.fav
    })
    try {
        let favAvailable = await Favourite.find({name: req.body.name})
        if (favAvailable == ''){
            const newFavourite = await favorite.save()
            res.json(newFavourite)

        }
        else {
            console.log('This already exists')
            Favourite.findOneAndUpdate({ name: req.body.name }, { fav: req.body.fav }, {upsert: true}, (err, result) => {
                if (err) {
                    res.send(err)
                }
                else {
                    res.json(result)
                }
            })
        }
    } catch (err) {
        console.error(err)
    }
})

app.get('/favourites', (req, res) => {
    let query = { fav: true }
    db.collection('favourites').find(query).toArray((err, result) => {
        if (err) throw err
        res.json(result)
    })
})

app.listen(PORT, () => console.log(`Server is listening to ${PORT}`))
