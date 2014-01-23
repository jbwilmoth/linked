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
  return this._size === 0;
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

function Queue(){
  this._first = null;
  this._last = null;
  this._size = 0;
}

Queue.prototype.size = function(){
  return this._size;
}

Queue.prototype.enqueue = function(item){
  var oldLast = this._last;
  this._last = {item: item, next: null};

  if (this.isEmpty()) this._first = this._last
  else oldLast.next = this._last

  this._size ++;
}

Queue.prototype.isEmpty = function(){
  return this._size === 0;
}

Queue.prototype.dequeue = function(){
  if (this.isEmpty()) return null;

  var item = this._first.item;
  this._first = this._first.next;

  this._size --;
  if (this.isEmpty()) this._last = null;

  return item;
}

// EndQueue ============================================================


exports.createStack = function(){ return new Stack() };
exports.createQueue = function(){ return new Queue() };