const mongoose = require('mongoose')

const connectDB = (url) => {
    return mongoose.connect(url)
        .then(() => console.log('Connected to MongoDB'))
        .catch((err) => console.error('Failed to connect to MongoDB', err));
}

module.exports = connectDB;

// mongoose
//     .connect(connectionString)
//     .then(() => console.log('Connected to MongoDB'))
//     .catch((err) => console.error('Failed to connect to MongoDB', err));