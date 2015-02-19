// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  queue: function() {
    this.trigger('queueSong', this);
  },

  dequeue: function() {
    this.trigger('dequeueSong', this);
  },

  requestNewSong: function() {
    this.trigger('requestNewSong', this);
  }

});
