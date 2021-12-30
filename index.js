const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, '/views'))


app.get("/",(req,res) => {
    res.render('home')
})
app.get('/rand',(req,res) => {
    let num = Math.floor(Math.random()*10)+1
    res.render('random',{rand:num})
})
app.get('/cats',(req,res) => {
    const cats = ['monty','ricky','bobby','mike']
    res.render('cats',{cats})
})
app.get('/:subreddit',(req,res) => {
const { subreddit } = req.params;
res.render('subreddit',{subreddit})
})


app.listen(3000,() =>{
console.log('listing on port 3000')
});