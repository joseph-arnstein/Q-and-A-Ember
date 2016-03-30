import Ember from 'ember';

export default Ember.Component.extend({
  postUpdate: false,
    actions: {
      updatePost() {
        this.set('postUpdate', true);
      },
      update(post) {
        var params = {
          author: this.get('author'),
          title: this.get('title'),
          image: this.get('image'),
          content: this.get('content')
        };
        console.log("made it to update-post.js");
        this.set('postUpdate', false);
        this.sendAction('update', post, params);
      }
    }
  });
