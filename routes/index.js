var express = require("express");
var router = express.Router({mergeParams: true});
var Comment = require("../models/comment");
var Campground = require("../models/campground");
var passport = require("passport");
var User = require("../models/user");


//////////////////////////
///////////////////
router.get("/", function(req, res){
    res.render("landing");
});


///////////
// Authentication Routes
//////////

router.get("/register", function(req, res){
    res.render("register");
});
router.post("/register", function(req, res){
    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
        if(err){
            req.flash("error", err.message);
            return res.redirect("register");
        }
        passport.authenticate("local")(req, res, function(){
            req.flash("success", "Welcome to YelpCamp " + user.username);
            res.redirect("/campgrounds");
        })
        
    });
});

// show login form
router.get("/login", function(req, res){
    res.render("login");
});

router.post("/login", passport.authenticate("local", {
    successRedirect: "/campgrounds",
    failureRedirect: "/login"
}), function(req,res){
});

// logout routes

router.get("/logout", function(req, res){
    req.logout();
    req.flash("success", "Logged you out");
    res.redirect("/campgrounds");
});


module.exports = router;