/**
 * Created by at15 on 2016/4/7.
 */
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

// FIXME: index should not be used, but systemjs would require user.js which does not exists....
import {UserLoginComponent,UserDashboardComponent} from './user/index';

@Component({
    selector: 'bform-app',
    template: '<router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
    {
        path: '/user/login',
        name: 'UserLogin',
        component: UserLoginComponent,
        useAsDefault: true
    },
    {
        path: '/user/dashboard',
        name:'UserDashboard',
        component: UserDashboardComponent
    }
])
export class AppComponent {

}