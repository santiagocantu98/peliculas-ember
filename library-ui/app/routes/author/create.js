import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
/*  session: service ('session'),

    beforeModel() {
        if (!this.get('session.isAuthenticated')) {
          this.transitionTo('login');
        }
    },
*/
      /*  resetController(controller) {
        this._super(...arguments);

        // controller.set('first', '');
        // controller.set('last, '');

        controller.reset();
    },
*/
    model() {
        return {
            first: '',
            last: ''
        };
    }
});
