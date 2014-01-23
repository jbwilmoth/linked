var listed = require('../lib/listed'),
    assert = require('assert');

describe('Stack', function(){

  describe('After initialization', function(){
    it('The stack has a size of 0', function(){
      var stack = listed.createStack();
      assert.equal(stack.size(), 0);
    });
  });

  describe('#push(item)', function(){
    it('adds a node to the top of the stack', function(){
      var stack = listed.createStack();
      stack.push(1);
      assert.equal(stack._first.item, 1);
    });

    it('increments the size of the stack', function(){
      var stack = listed.createStack();
      stack.push(1);
      assert.equal(stack.size(), 1);
    });
  });

  describe('#isEmpty', function(){

    describe('when stack is empty', function(){
      it('returns true', function(){
        var stack = listed.createStack();
        assert(stack.isEmpty());
      });
    });

    describe('when stack is not empty', function(){
      it('returns false', function(){
        var stack = listed.createStack();
        stack.push(1);
        assert(!stack.isEmpty());
      });
    });

  });

  describe('#pop', function(){

    describe('when stack is empty', function(){
      it('returns null', function(){
        var stack = listed.createStack();
        assert.equal(stack.pop(), null);
      });
    });

    describe('when stack contains items', function(){
      it('returns the item on top of the stack', function(){
        var stack = listed.createStack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        assert.equal(stack.pop(), 3);
      });
    });

  });

});

