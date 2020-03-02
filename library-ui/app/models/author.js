import DS from 'ember-data';
const { Model, attr } = DS;

export default Model.extend({
  first: DS.attr(),
  last: DS.attr(),
  username: DS.attr(),


  books: DS.hasMany('book')
});
