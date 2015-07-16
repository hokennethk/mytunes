// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('ended', function() {
      // this.remove()
      // console.log(this);
      // console.log(this.models);
    });
  },
  playFirst: function(){
    this.first().play();
  }
});