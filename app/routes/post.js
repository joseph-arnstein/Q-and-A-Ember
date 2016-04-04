import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('post', params.post_id);
  },

  actions: {
    update(post, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
            post.set(key,params[key]);
        }
      });
      post.save();
      this.transitionTo('index');
    },
    destroyPost(post) {
      var comments_die = post.get('comments').map(function(comment) {
        return comment.destroyRecord();
      });
      Ember.RSVP.all(comments_die).then(function(){
        post.destroyRecord();
      });
      this.transitionTo('index');
    },
    saveComment3(params){
      var newComment = this.store.createRecord('comment', params);
      var post = params.post;
      post.get('comments').addObject(newComment);
      newComment.save().then(function() {
        return post.save();
      });
      this.transitionTo('post');
    },
    deleteComment(comment) {
      comment.destroyRecord();
      this.transitionTo('post');
    }
  }
});
