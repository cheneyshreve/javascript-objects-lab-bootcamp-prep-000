
recipes = new Object()

function obj() {
 var recipes = {}
}

function updateObjectWithKeyAndValue(obj, key, value){
  Object.assign({}, obj, { [key]: value})
  return obj
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  var obj[key] = value
  return obj
}

function deleteFromObjectByKey(obj, key){
  var obj = {key: value }
  var newObj = Object.assign({}, obj)
  newObj
  delete newObj.key
  obj = newObj
  return obj
}

function destructivelyDeleteFromObjectByKey(obj, key){
  delete obj.key
  return obj
}
