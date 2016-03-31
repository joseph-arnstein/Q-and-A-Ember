import Ember from 'ember';

export default Ember.Component.extend({
  whine: false,
  actions: {
    showCommentForm(){
      this.set('whine', true);
    },
    saveComment1() {
      // original component has option of leaving forms blank below.
      //
      // var params = {
      //   commentor: this.get('commentor') ? this.get('commentor'): "",
      //   complaint: this.get('complaint') ? this.get('complaint'): "",
      //   post: this.get('post') ? this.get('post'): "",
      // };
      var params = {
        commentor: this.get('commentor'),
        complaint: this.get('complaint'),
        post: this.get('post'),
      };
      this.set('whine', false);
      this.sendAction('saveComment2', params);
    }
  }
});
