'use strict';

var $ = require('jquery-untouched');
var Backbone = require('backbone-lodash');
    Backbone.$ = $;
var Three = require('three');
var RenderMachine = require('render-machine-3js');

var BoxedItemView = Backbone.View.extend({
        tagName: 'li',
        className: 'boxed-item',
        events: {
            'renderRead': 'render'
        },
        initialize: function(){
            this.scene = new Three.Scene();
            this.camera = new Three.PerspectiveCamera(90, this.$el.width()/this.$el.height(), 1, 100);
            this.renderer = new Three.WebGLRenderer();
            this.renderer.setSize(this.$el.width(), this.$el.height());
            this.rendermachine = new RenderMachine({camera: this.camera, scene: this.scene, renderer: this.renderer, fps: 24});
            this.listenTo(this.model, 'sync', this.provision);
        },
        provision: function(){
            this.scene.add(this.model.obj);
            this.trigger('renderReady');
        },
        render: function(){
            this.$el.append(this.renderer.domElement);
            this.rendermachine.render();
        }
    });

module.exports = BoxedItemView;