var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");
var middleware = require("../middleware");



//////INDEX
router.get("/campgrounds", function(req, res){
    Campground.find({},function(err, camps){
        if(err){
            console.log(err);
        } else {
        res.render("campgrounds/index", {campgrounds:camps});
        }
    });
});

///////INDEX

///////NEW
router.get("/campgrounds/new", middleware.isLoggedIn, function(req, res){
    res.render("campgrounds/new");
});
///////NEW

///////CREATE
router.post("/campgrounds", middleware.isLoggedIn, function(req, res){
    var name = req.body.name;
    var price = req.body.price;
    var image = req.body.image;
    var description = req.body.descript;
    var author = {
        id: req.user._id,
      username: req.user.username
        
    };
    var newCamp = {name: name,price: price, image: image, description: description, author: author};
    Campground.create(newCamp, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            res.redirect("campgrounds");
        }
    });
});
///////CREATE



///////SHOW
router.get("/campgrounds/:id", function(req, res) {
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
       if(err){
           req.flash("error", "Something went wrong.");
           res.redirect("back");
          console.log(err);

       } else {
           res.render("campgrounds/show", {campground: foundCampground});
       }
    });
});
///////SHOW


///////EDIT
router.get("/campgrounds/:id/edit", middleware.checkCampgroundOwnership, function(req, res){
    Campground.findById(req.params.id, function(err, foundCampground){
       if(err){
           req.flash("error", "Something went wrong.");
           res.redirect("back");
           console.log(err);
       } else {
            res.render("campgrounds/edit", {campground: foundCampground});
             }
     });

});
///////

///////UPDATE
router.put("/campgrounds/:id", middleware.checkCampgroundOwnership, function(req, res){
    var data = req.body.cg;
    Campground.findByIdAndUpdate(req.params.id, data, function(err, updatedCampground){
       if(err){
            req.flash("error", "Something went wrong.");
           res.redirect("/campgrounds");
       } else {
           res.redirect("/campgrounds/" + req.params.id);
       }
    });
});
///////


///////DESTROY
router.delete("/campgrounds/:id", middleware.checkCampgroundOwnership, function(req, res){
   Campground.findByIdAndRemove(req.params.id, function(err){
           if(err){
               res.redirect("/campgrounds");
           } else{
               res.redirect("/campgrounds");
           }
       });
});
///////



module.exports = router;