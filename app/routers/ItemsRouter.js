var $ = require('jquery-untouched');
var Backbone = require('backbone-lodash');
var ItemsCollection = require('../collections/ItemsCollection');

var ItemsRouter = Backbone.Router.extend({
    routes: {
        '/items':'showItems'
    },
    showItems: function(){

    }
});

module.exports = ItemsRouter;