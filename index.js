

function object() {
 recipes = new Object();
 return recipes
}

function updateObjectWithKeyAndValue(object, key, value){
  Object.assign({}, object, { [key]: value})
  return object
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  var object['key'] = value
  return object
}

function deleteFromObjectByKey(object, key){
  var object = {key: value }
  var newObj = Object.assign({}, object)
  newObj
  delete newObj.key
  object = newObj
  return object
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object.key
  return object
}
