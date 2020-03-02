import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    title: DS.attr(),
    isbn: DS.attr(),
    duration: DS.attr(),
    category: DS.attr(),
    publishDate: DS.attr(),
    username: DS.attr(),

    author: DS.belongsTo('author'),
    reviews: DS.hasMany('review')

});
