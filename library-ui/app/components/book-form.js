import { inject as service } from '@ember/service';
import Component from '@ember/component';


export default Component.extend({
    store: service('store'),
    categories: ['A','B','C'],

    didReceiveAttrs() {
        this._super(...arguments);

        this.setProperties({
            title: this.get('book.title'),
            isbn: this.get('book.isbn'),
            duration: this.get('book.duration'),
            category: this.get('category'),
            publishDate: this.get('book.publishDate'),
            author: this.get('book.author'),
        });
    },

    actions: {
        searchAuthor(query) {
            return this.get('store').query('author', { filter: { query }});
        },

        selectCategory(category) {
            this.set('category', category);
        },

        submitChanges(ev) {
            ev.preventDefault();

            this.onsubmit({
                title: this.title,
                isbn: this.isbn,
                duration: this.duration,
                category: this.category,
                publishDate: this.publishDate,
                author: this.author
            });
        }
    }
});
