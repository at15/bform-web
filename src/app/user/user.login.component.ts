/**
 * Created by at15 on 2016/4/7.
 */

import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {UserLoginFormComponent} from './user.login-form.component';

@Component({
    // TODO: is it possible to put this component inside a modal
    selector: 'bform-user-login',
    styleUrls: ['./assets/user/user.login.css'],
    template: '<bform-user-login-form></bform-user-login-form>',
    directives: [UserLoginFormComponent]
})
export class UserLoginComponent {
    constructor(private _router:Router) {

    }

    onSubmit() {
        console.log('submit');
        this.goToDashBoard();
    }

    goToDashBoard() {
        this._router.navigate(['UserDashboard']);
    }

}