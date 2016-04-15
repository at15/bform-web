/**
 * Created by at15 on 2016/4/15.
 */

export class User {
    public name:string;
    public password:string;
    
    // public loginName:string;

    // TODO: how to deal with login check? I don' want another User class
    constructor(name?:string) {
        if (name) {
            this.name = name;
        }
    }

    public getLoginName():string {
        // TODO: throw exception if no name is specified
        return '';
    }
}