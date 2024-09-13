class User () {
    _defoltroot = false;

    constructor(Login) {
        this.login = login; 
    }

    giveExtraRoot () {
        this._defoltroot = true;
    }
} 

auth (value: string) {
    return this.password === value;
} 