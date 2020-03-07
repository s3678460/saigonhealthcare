const express = require ('express');
const mongoose = require ('mongoose');
const bodyParser = require('body-parser');
const contacts = require('./routes/api/contacts')
const path = require('path')
const app = express();

//Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client/build')));

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

//Test Server
app.get('/test', (req, res)=> {
    res.send('Hello Server')
})

//Use Routes
app.use('/api/contacts', contacts);

const port = process.env.PORT || 5001;

app.listen(port, () => {
    console.log(`Server running on ${port}`)
});
