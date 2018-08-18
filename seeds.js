var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "cloud's rest",
        image:"https://cdn.pixabay.com/photo/2013/07/25/13/01/stones-167089__340.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
     {
        name: "cloud's rest",
        image:"https://cdn.pixabay.com/photo/2016/07/07/16/46/roll-the-dice-1502706__340.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
     {
        name: "cloud's rest",
        image:"https://cdn.pixabay.com/photo/2015/07/15/11/53/woodtype-846089__340.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
]

function seedDB(){
    //remove
    Campground.remove({}, function(err){
    //   if(err){
    //       console.log(err);
    //   } else {
    //       console.log("removed everythang");
    //         data.forEach(function(seed){
    //         Campground.create(seed,function(err, campground){
    //             if(err){
    //                 console.log(err);
    //             } else {
    //                 console.log("added campground");
    //                 Comment.create(
    //                     {
    //                     text: "Lit",
    //                     author: "homer"
    //                      }, function(err, comment){
    //                          if(err){
    //                              console.log(err);
    //                          } else{
    //                          campground.comments.push(comment);
    //                          campground.save();
    //                          console.log("new comment");
    //                         }
    //                      }
    //                 );
    //             }
    //         })
    //     });
    //   }
    
    })
    //add a few campgrounds
};


module.exports = seedDB;