// Base Item class, for controlling 3js objects within a scene



var Backbone = require('backbone-lodash');
var Three = require('three');
var degToRadian = require('../support/degtoradian');

var Item = Backbone.Model.extend({
  defaults:{
    scale: { x: 1, y: 1, z: 1 },
    rotation: {x: 0, y: 0, z: 0},
    position: {x: 0, y: 0, z: 0}
  },
  initialize: function(options){
    this.once('sync', createThreeObj);
    this.on({
      'change:scale': scaleObj,
      'change:rotation': rotateObj
      'change:position': translateObj
    });
  },
  createThreeObj: function(){
    var model = this.get('model');

    this.material = new Three.MeshFaceMaterial(model.materials);
    this.obj = new Three.Mesh(model.geometry, this.material);
    this.obj.scale.set(model.scale.x, model.scale.y, model.scale.z);
  },
  scaleBy: function(factor){
    var scale = this.get('scale'),
    this.set('scale',{scale.x * factor, scale.y * factor, scale.z * factor});
  },
  scaleObj: function(){
    var model = this.get('model');

    this.obj.scale.set(model.scale.x, model.scale.y, model.scale.z);
  },
  rotate: function(){
    var args = Array.prototype.slice.call(arguments);
    if(args[0] instanceof String && args[1] instanceof Number){
      var method = 'rotate' + args[0].toUpperCase();

      this[method](args[1]);
    } else if(args[0].x instanceof Number && args[0].y instanceof Number && args[0].z instanceof Number){
      this.set('rotation', args[0]);
    }
  },
  rotateX: function(x){
    var rotation = this.get('rotation');
        rotation.x = x;

    this.set('rotation', rotation);
  },
  rotateY: function(y){
    var rotation = this.get('rotation');
        rotation.y = y;

    this.set('rotation', rotation);
  },
  rotateZ: function(z){
    var rotation = this.get('rotation');
        rotation.z = z;

    this.set('rotation', rotation);
  },
  rotateObj: function(){
    this.obj.rotation.set(this.rotation.x, this.rotation.y, this.rotation.z);
  },
  translateX: function(x){
    var position = this.get('position');
        position.x = x;

    this.set('position', position);
  },
  translateY: function(y){
    var position = this.get('position');
        position.y = y;

    this.set('position', position);
  },
  translateZ: function(z){
    var position = this.get('position');
        position.z = z;

    this.set('position', position);
  },
  translateObj: function(){
    this.obj.position.set(this.get('position'));
  }

});

module.exports = Item;
