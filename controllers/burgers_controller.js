var express = require("express");
var router = express.Router();


// Import the model (burger.js) to use its database functions.
var db = require("../models");

// Create all our routes and set up logic within those routes where required.


router.get("/", function (req, res) {

    db.Burgers.findAll({})
        .then(function (data) {
            var hbsObject = {burgers: data};

            console.log(hbsObject);

            res.render("index", hbsObject);
        });

});

router.post("/", function (req, res) {
    db.Burgers.create({
        burger_name: req.body.burger_name,
        devoured: req.body.devoured
    }).then(function (data) {
        res.redirect("/");
    });
});

router.put("/:id", function (req, res) {
    db.Burgers.update({
            devoured: true
        }, {
            where: {
                id: req.params.id
            }
        }
    ).then(function (data) {

        res.redirect("/");
    })
});


module.exports = router;