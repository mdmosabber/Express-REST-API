const express   = require('express');
const cors      = require('cors');
 
const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(cors());


app.use('/users', require('./routes/users.route'));

app.get('/',(req, res)=> {
    res.sendFile(__dirname + '/views/index.html');
})

// Not Found Route
app.use((req, res, next)=> {
    res.status(404).json({message: '4🧡4 Not Found'});
})

// server error
app.use((err, req, res, next)=> {
    if(err.message){
        res.status(500).json({message: err.message})
    }else{
        res.status(500).json({message: 'Internal Server Error'})  
    }
})

module.exports = app;