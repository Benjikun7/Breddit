BredditApp.Models.Downvote = Backbone.Model.extend({
  intialize: function(id){
    this.id = id
  },

  url: function () {
    return '/api/posts/' + this.get('post_id') + '/dislike';
  }
});
