import mongoose from 'mongoose'; 
const {Schema, model} = mongoose;

const movieSchema = new Schema({
  title: String,
  director: String,
  year: Number,
  genres: [String],
  rating: Number,
  duration: {
    hours: Number,
    minutes: Number,
  },
  reviews: [
    {
      name: String,
      text: String,
    }
  ]
});

const Movie = model("Movie", movieSchema);

export default Movie;

// const URL = 'mongodb://0.0.0.0:27017/movieBox';


// export async function connectDB() {
//   mongoose
//   .connect(URL)
//   .then(() => console.log('Connected to MongoDB'))
//   .catch((err) => console.log(`Failed to connect to MongoDB, error ${err.message || err}`))
// }