import DS from 'ember-data';

export default DS.Model.extend({
  commentor: DS.attr(),
  post: DS.belongsTo('post', { async: true }),
  complaint: DS.attr()
});
