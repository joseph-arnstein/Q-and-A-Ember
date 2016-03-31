import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(post, params) {
      console.log("working thru post-tile.js");
      console.log(params);
      this.sendAction('update', post, params);
    },
    delete(post) {
      if (confirm('Delete this post')) {
        this.sendAction('destroyPost', post);
      }
    }
  }
});
