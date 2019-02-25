const express = require("express");
const hbs = require("hbs");
var app=express();
var port = process.env.PORT || 3000;
app.set('view engine','hbs');
app.use(express.static(__dirname+'/public'));
hbs.registerPartials(__dirname+'/views/partials');
hbs.registerHelper('getCurrentYear',()=>{
  return new Date().getFullYear();
});
hbs.registerHelper('screamIt',(text)=>{
  return text.toUpperCase();
});
app.get("/",(req,res)=>{
//  res.send("Hello Express");
res.render("index.hbs",{
  pageTitle:'HomePage',
  msg:"Welcome to website"
});

});

app.get("/about",(req,res)=>{
     res.render("about.hbs",{
       pageTitle:'About Page'
     });
});
app.get("/bad",(req,res)=>{
  res.send({
    error:'Unable to handle request'
  });
});

app.listen(port,()=>{
  console.log('Server is up on port 3000');
});
