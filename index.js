

function object() {
 var recipes = {}
 return recipes
}

function updateObjectWithKeyAndValue(recipes, key, value){
  Object.assign({}, recipes, { [key]: value})
  return recipes
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value){
  var recipes['key'] = value
  return recipes
}

function deleteFromObjectByKey(recipes, key){
  var recipes = {key: value }
  var newObj = Object.assign({}, recipes)
  newObj
  delete newObj.key
  recipes = newObj
  return recipes
}

function destructivelyDeleteFromObjectByKey(recipes, key){
  delete recipes.key
  return recipes
}
