import mongoose from 'mongoose'

const favouriteSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    fav: {
        type: Boolean,
        required: true
    }
})

export default mongoose.model('Favourite', favouriteSchema)
