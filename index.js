var pro_Name = 'initialize';

var extend = function(child,parent) {
  if(typeof parent === 'undefined'){
    parent = Object;
  }

  child.__super__ = parent;
  child.prototype.__proto__ == parent.prototype;

  var currentClass = child;
  child.prototype.super = function(methodName){
    var args = [].splice.call(arguments,1);
    currentClass = currentClass.__super__;
    var result = currentClass.prototype[methodName].apply(this,args);
    currentClass = child;
    return result;
  }
}

var Class = function( args , parent){
  function ctor() {
    if (args.hasOwnProperty(pro_Name)){
      args[pro_Name].apply(this,arguments);
    }
  }

  for (var key in args){
    if(!args.hasOwnProperty(key)){
      continue;
    }
    if(key === pro_Name){
      continue;
    }
    ctor.prototype[key] = args[key];
  }

  extend(ctor,parent);

  return ctor;
}


/*var Class = function(){
  var result = function result(){};
  var len = arguments.length;
  
  for(var i = 0; i < len; i++){
    for(var key in arguments[i]){
        if(key=="initialize"){
          result = arguments[i].initialize;
        }
	else{
	  result.prototype[key] = arguments[i][key];
	}
      }
  }

  return result;
}*/


module.exports = Class;
