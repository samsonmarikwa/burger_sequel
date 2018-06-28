var express = require('express');
var router = express.Router();

var burger = require('../models/burger');

// retrieve all burgers
router.get('/', (req, res) => {
    burger.selectAll((data) => {
        var hbsObject = {
            burgers: data
        };
        res.render('index', hbsObject);
    });
});

// create a burger
router.post('/api/burgers', (req, res) => {
    burger.insertOne(["burger_name"], [req.body.burgerName], (result) => {
        // send back the id of the new burger
        res.json({ id: result.insertId });
    });
});

// update a burger
router.put('/api/burgers/:id', (req, res) => {
    var condition = "id = " + req.params.id;

    burger.updateOne({
            devoured: req.body.devoured
        },
        condition,
        (result) => {
            if (result.changedRows === 0) {
                // if no rows were changed, then the id must not exist, so 404
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});

// export routes for server.js to use
module.exports = router;