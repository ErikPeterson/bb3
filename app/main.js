var $ = require('jquery-untouched');
var Backbone = require('backbone-lodash');
var ItemsRouter = require('./routers/ItemsRouter.js');

$(function(){
    var itemsrouter = new ItemsRouter();
    Backbone.history.start({pushState: true});
});