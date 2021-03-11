export default class UserModel {

    public displayName: string;
    public uid: string;
    public email: string;
    public emailVerified: string
    public photoURL: string;
    public refreshToken: string;

    constructor(user) {
        this.displayName = user.displayName;
        this.uid = user.uid;
        this.email = user.email;
        this.emailVerified = user.emailVerified;
        this.photoURL = user.photoURL;
        this.refreshToken = user.refreshToken
    }

    toData() {
        return {
            uid: this.uid,
            email: this.email,
            displayName: this.displayName,
            photoURL: this.photoURL,
            emailVerified: this.emailVerified
        }
    }



}
