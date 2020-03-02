import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Route.extend(ApplicationRouteMixin, {
    session: service('session'),
    currentUser: service('current-user'),

    beforeModel() {
        this._super(...arguments);

        this.loadUser();
    },

   /* init() {
        this._super(...arguments);

        this.get('session').on('invalidationSucceeded', () => {
            window.location.replace('/login');
        });

        this.get('session').on('authenticationSucceeded', () => {
            this.loadUser();
        });
        
    },
    */

    sessionAuthenticated() {
        this._super(...arguments);

        this.loadUser()
    },

    sessionInvalidated() {
        window.location.replace('/login');
    },

    loadUser() {
        if (this.get('session.isAuthenticated')) {
            this.get('currentUser').load();
        }
    }
});