// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  // model should be SONG

  initialize: function(data){

    this.on('dequeue', this.dequeue, this);

    this.on('add', this.playLogic, this);

    this.on('add remove', this.saveLocalStorage, this);

  },

  playLogic: function() {
    if (this.length >= 1) {
      this.playFirst();
    }
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
  },

  saveLocalStorage: function() {
    window.localStorage.setItem('queue', this.map(function(model){
      return model.cid;
    }));
  }

});