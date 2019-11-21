const express = require ('express');
const mongoose = require ('mongoose');
const bodyParser = require('body-parser');
const contacts = require('./routes/api/contacts')
const app = express();

//Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// DB config

const db = require('./config/keys').mongoURI;

// Connect to MongoDB

mongoose.connect(db, {
    useUnifiedTopology:true,
    useNewUrlParser: true,
    useFindAndModify: false
})
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Use Routes
app.use('/api/contacts', contacts);


// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
    // set static folder
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const port = process.env.PORT || 5000;
app.listen(port,() => console.log(`Server running on ${port}`));
