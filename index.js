var recipes = new Object({breakfast: griddle});

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({} object, { [key]: value })
}