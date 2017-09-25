
recipes = new Object()

function obj() {
 var recipes = {}
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

  var
}

function destructivelyDeleteFromObjectByKey(obj, key){
  delete obj.key
  return obj
}
