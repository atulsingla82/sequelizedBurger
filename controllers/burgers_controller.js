var express = require("express");

// Import the model (burger.js) to use its database functions.
var db = require("../models");

// Create all our routes and set up logic within those routes where required.


module.exports = function(app) {

    app.get("/",function(req,res){

        db.burgers.findAll({})
            .then(function (data) {
                res.json(data);

            });

    });

    // router.post("/", function (req, res) {
    //
    //     burger.create(["burger_name"], [req.body.burger_name], function (data) {
    //
    //         res.redirect("/");
    //     });
    //
    // });
    //
    // router.put("/:id", function (req, res) {
    //
    //     var condition = "id = " + req.params.id;
    //
    //     console.log("condition", condition);
    //
    //     burger.update({"devoured": req.body.devoured}, condition, function (data) {
    //
    //
    //         res.redirect("/");
    //     });
    //
    // });
};
