// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  // model should be SONG
  initialize: function(){

    this.on('dequeue', this.dequeue, this);

    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    });
  },

  playFirst: function() {
    this.first().play(); // song.play() will set current song on app to itself
  },

  dequeue: function(song) {
    this.remove(song);
    if (this.length >= 1) {
      this.playFirst();
    } else {
      this.trigger('stop', this);
    }
  }

});