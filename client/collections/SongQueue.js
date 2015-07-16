// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  // model should be SONG
  initialize: function(){
    // when song sends ended, this collection will hear it
    // this.on('ended', function(song) {
    //   console.log('song queue event: ended');
    //   this.get(song).dequeue();
    // });

    /*** NOT SURE IF SHOULD PUT HERE OR IN APP MODEL ***/
    this.on('dequeue', function(song) {
      this.remove(song);
      if (this.length) {
        this.playFirst();
      }
    });

    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    });
  },

  playFirst: function() {
    this.first().play(); // song.play() will set current song on app to itself
  }

});