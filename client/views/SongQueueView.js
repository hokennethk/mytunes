// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  // this will be associated with a collection SongQueue
  tagName: "table",

  initialize: function() {
    this.collection.on('add' , this.render, this);
    this.collection.on('remove' , this.render, this);
    this.render();
  },

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();
    console.log(this.$el);
    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song){
        // return new LibraryEntryView({model: song}).render();
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
