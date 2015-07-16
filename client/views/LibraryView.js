// LibraryView.js - Defines a backbone view class for the music library.
var LibraryView = Backbone.View.extend({

  className: "center library",

  tagName: "table",

  initialize: function() {
    this.render();
  },

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<th><h2>Library</h2></th>').append(
      this.collection.map(function(song){
        return new LibraryEntryView({model: song}).render();
      })
    );
  }

});
