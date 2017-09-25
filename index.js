
function recipesObject() {
 var recipes = new Object();
}


function updateObjectWithKeyAndValue(obj, key, value){
  Object.assign({}, obj, { [key]: value})
  return obj
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj[key] = value
  return obj
}

function deleteFromObjectByKey(obj, key){
  delete obj.key
  return obj
}

function destructivelyDeleteFromObjectByKey(obj, key){

}
