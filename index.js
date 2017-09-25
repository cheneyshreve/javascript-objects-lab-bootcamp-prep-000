
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
  Object.assign({}, obj, {[key]})
}

function destructivelyDeleteFromObjectByKey(obj, key){
  delete obj.key
  return obj
}
