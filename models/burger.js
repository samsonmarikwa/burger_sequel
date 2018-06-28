// import functions from the ORM to interact with the database
var orm = require('../config/orm');

var burger = {
    selectAll: function(cb) {
        orm.selectAll('burgers', function(res) {
            cb(res);
        });
    },

    // the variales cols and vals are arrays.
    insertOne: function(cols, vals, cb) {
        orm.insertOne('burgers', cols, vals, function(res) {
            cb(res);
        });
    },

    updateOne: function(objColVals, condition, cb) {
        orm.updateOne('burgers', objColVals, condition, function(res) {
            cb(res);
        });
    }
};

// export the database functions for the controller
module.exports = burger;