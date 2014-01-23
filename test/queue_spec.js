var listed = require('../'),
    assert = require('assert');

describe('Queue', function(){

  var queue;

  beforeEach(function(){
    queue = listed.createQueue();
  });

  describe('After initialization', function(){
    it('The queue has a size of 0', function(){
      assert.equal(queue.size(), 0);
    });
  });

  describe('#enqueue(item)', function(){
    it('adds a node to the end of the queue', function(){
      queue.enqueue(1);
      assert.equal(queue._last.item, 1);
    });

    it('increments the size of the queue', function(){
      queue.enqueue(1);
      assert.equal(queue.size(), 1);
    });
  });

  describe('#isEmpty', function(){

    describe('when queue is empty', function(){
      it('returns true', function(){
        assert(queue.isEmpty());
      });
    });

    describe('when queue is not empty', function(){
      it('returns false', function(){
        queue.enqueue(1);
        assert(!queue.isEmpty());
      });
    });

  });

  describe('#dequeue', function(){

    describe('when queue is empty', function(){
      it('returns null', function(){
        assert.equal(queue.dequeue(), null);
      });
    });

    describe('when queue contains items', function(){
      it('returns the first item added to the queue', function(){
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        assert.equal(queue.dequeue(), 1);
      });
    });

  });

});
