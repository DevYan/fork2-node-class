var Class = function(){
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
}


module.exports = Class;
