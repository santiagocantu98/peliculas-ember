import Controller from '@ember/controller';
import review from '../../../models/review';

export default Controller.extend({
    actions: {
        saveReview(attrs) {
            let review = this.store.createRecord('review', attrs);

            review.save()
                .then(() => {
                    this.transitionToRoute('book.detail', this.model.book.id)
                })
        }
    }
});
