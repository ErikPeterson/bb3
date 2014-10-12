var $ = require('jquery-untouched');
var Backbone = require('backbone-lodash');
    Bacbkone.$ = $;
var _ = require('lodash');
var Three = require('three');
var Item = require('../models/Item');
var RenderMachine = require('render-machine-3js');

var BoxedItemView = Backbone.View.extend({
        tagName: "li",
        className: "boxed-item",
        events: {
            "renderReady": "render"
        },
        initialize: function(){
            this.scene = new Three.Scene();
            this.camera = new Three.PerspectiveCamera(90, $el.width()/$el.height(), 1, 100);
            this.renderer = new Three.WebGLRenderer();
            this.renderer.setSize($el.width(), $el.height());
            this.rendermachine = new RenderMachine({camera: this.camera, scene: this.scene, renderer: this.renderer, fps: 24});
            this.listenTo(this.model, 'sync', this.provision);
        },
        provision: function(){
            this.scene.add(this.model.obj);
            this.trigger("renderReady");
        },
        render: function(){
            this.$el.append(this.renderer.domElement);
            this.rendermachine.render();
        }
    });

module.exports = BoxedItemView;