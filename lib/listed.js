// Stack ===============================================================
function Stack() {
  this._first = null;
  this._size = 0;
}

Stack.prototype.size = function(){
  return this._size;
}

Stack.prototype.push = function(item){
  var oldFirst = this._first;
  this._first = {item: item, next: oldFirst}
  this._size ++
}

Stack.prototype.isEmpty = function(){
  return this._size == 0;
}

// EndStack ============================================================

exports.createStack = function(){ return new Stack() };