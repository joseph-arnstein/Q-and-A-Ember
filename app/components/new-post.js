import Ember from 'ember';

export default Ember.Component.extend({
  addPost: false,
  actions: {
    showNewPostForm() {
      this.set('addPost', true);
    },
    save1() {
      var params = {
        author: this.get('author') ? this.get('author'): "",
        title: this.get('title') ? this.get('title'): "",
        image: this.get('image') ? this.get('image'): "",
        content: this.get('content') ? this.get('content'): "", //comma here?
      };
      this.set('showNewPostForm', false);
      this.sendAction('save2', params);
    }
  }
});
