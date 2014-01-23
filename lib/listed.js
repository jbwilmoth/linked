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

Stack.prototype.pop = function(){
  if (this.isEmpty()) return null;

  var item = this._first.item;

  this._first = this._first.next;
  this._size --;

  return item;
}

// EndStack ============================================================

// Queue ===============================================================



// EndQueue ============================================================


exports.createStack = function(){ return new Stack() };