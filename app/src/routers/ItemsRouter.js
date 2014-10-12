'use strict';

var $ = require('jquery-untouched');
var Backbone = require('backbone-lodash');
    Backbone.$ = $;

var ItemsCollection = require('../collections/ItemsCollection');

var ItemsRouter = Backbone.Router.extend({
    routes: {
        '/items':'showItems'
    },
    showItems: function(){
        var items = new ItemsCollection({});
        items.render();
    }
});

module.exports = ItemsRouter;