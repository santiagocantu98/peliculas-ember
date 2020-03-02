import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    session: service('session'),

    actions: {
        login(attrs) {
            this.get('session').authenticate('authenticator:jwt', {
                email: attrs.email,
                password: attrs.password
            }).catch(( { json } ) => {
                this.set('errors', json.errors);
            });
        }
    }
});
