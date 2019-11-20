var express=require('express'),
    ejs=require('ejs'),
    mongoose=require('mongoose'),
    bodyParser=require('body-parser'),
    methodOverride=require('method-override'),
    expressSession=require('express-session'),
    User=require('./models/Users.js');

var app=express();

app.get('/',function(req, res){
    res.render("Homepage.ejs");
});

User.create(
    {
    name: "Ashma",
    password: "ashmagarg",
    email:"ashmagarg@gmail.com",
    phnno: "6283991882"
}, function(err,user){
    if(err){
        console.log(err);
    }
    else{
        console.log("New User Added");
        console.log(user);
    }
});

// login page

app.get('/Home',function(req, res){
res.render("Home.ejs");
});

//Register page

app.get('/Register',function(req, res){
    res.render("Register.ejs");
    });
//main page
app.get('/main',function(req,res){
    res.render("Main.ejs");
});
app.post('/main',function(req, res){
    res.render("Main.ejs");
});

//Calling pages

app.get('/Boulevard',function(req,res){
    res.render("Boulevard.ejs");
});
app.get('/Social',function(req,res){
    res.render("Social.ejs");
});
app.get('/Beach',function(req,res){
    res.render("Beach.ejs");
});
app.get('/Molecule',function(req,res){
    res.render("Molecule.ejs");
});
app.get('/GT',function(req,res){
    res.render("GT.ejs");
});
app.get('/MOBE',function(req,res){
    res.render("MOBE.ejs");
});
app.get('/Brew',function(req,res){
    res.render("Brew.ejs");
});
app.get('/Safe',function(req,res){
    res.render("Safe.ejs");
});
app.get('/Qizo',function(req,res){
    res.render("Qizo.ejs");
});
app.get('/FLYP',function(req,res){
    res.render("FLYP.ejs");
});
app.get('/Pyramid',function(req,res){
    res.render("Pyramid.ejs");
});
app.get('/Uncle',function(req,res){
    res.render("Uncle.ejs");
});
app.get('/Petu',function(req,res){
    res.render("Petu.ejs");
});
app.get('/Wong',function(req,res){
    res.render("Wong.ejs");
});
app.get('/Smaaash',function(req,res){
    res.render("Smaaash.ejs");
});
app.get('/TBP',function(req,res){
    res.render("TBH.ejs");
});
app.get('/Gopal',function(req,res){
    res.render("Gopal.ejs");
});
app.get('/Rebelle',function(req,res){
    res.render("Rebelle.ejs");
});
app.get('/Culture',function(req,res){
    res.render("Culture.ejs");
});
app.get('/Pipe',function(req,res){
    res.render("Pipe.ejs");
});
app.get('/Boat',function(req,res){
    res.render("Boat.ejs");
});
app.get('/Great',function(req,res){
    res.render("Great.ejs");
});
app.get('/Books',function(req,res){
    res.render("Books.ejs");
});
app.get('/Paara',function(req,res){
    res.render("Paara.ejs");
});
app.get('/Tamzaraa',function(req,res){
    res.render("Tamzaraa.ejs");
});
app.get('/Poison',function(req,res){
    res.render("Poison.ejs");
});
app.get('/Horse',function(req,res){
    res.render("Horse.ejs");
});
app.get('/Escape',function(req,res){
    res.render("Escape.ejs");
});
app.get('/Nation',function(req,res){
    res.render("Nation.ejs");
});
app.get('/Urban',function(req,res){
    res.render("Urban.ejs");
});
app.get('/Golden',function(req,res){
    res.render("Golden.ejs");
});
app.get('/Katani',function(req,res){
    res.render("Katani.ejs");
});
app.get('/Queen',function(req,res){
    res.render("Queen.ejs");
});
app.get('/Nik',function(req,res){
    res.render("Nik.ejs");
});
app.get('/Churiosity',function(req,res){
    res.render("Churiosity.ejs");
});
app.get('/Desserted',function(req,res){
    res.render("Desserted.ejs");
});
app.get('/Room',function(req,res){
    res.render("Room.ejs");
});
app.get('/Daddy',function(req,res){
    res.render("Daddy.ejs");
});
app.listen(process.env.PORT || 3000, process.env.ID, function(req, res){
    console.log("Server si started.");
});