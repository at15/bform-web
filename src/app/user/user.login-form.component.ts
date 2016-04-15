/**
 * Created by at15 on 2016/4/15.
 */
// TODO: put it inside user.login.component
import {Component, EventEmitter, Output} from 'angular2/core';
// TODO: deal with ngform later, it's just UI & UE problem after all.
import {NgForm} from 'angular2/common';

@Component({
    selector: 'bform-user-login-form',
    templateUrl: './assets/user/user.login-form.html',
    styleUrls: ['./assets/user/user.login-form.css']
})
export class UserLoginFormComponent {
    // TODO: may use constant to indicate state change.
    @Output('loginSucceeded') loginSucceeded = new EventEmitter<boolean>();
    // @Output('loginFailed')

    onSubmit() {
        console.log('submit');
        // FIXME: can not emit empty value ...
        this.loginSucceeded.emit(true);
    }
}