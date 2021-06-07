//Es6 JS Classes 
class User {
    constructor (name) {
        this.name = name;
            this.name =name;
            this.type = 'Trial User'

        };
        //Method1
        greet () {
            console.log ('Welcome back, ${this.name');
        };
        //Method2
        status () {
            console.log ( 'Current Status: $this.type}');
        };
    };

    // Instance of the class/new object
    let anonDude=new User ('Anonymouse dude');

    //we can now use the new instance and the .operator to access the 2 methos 
    anonDue.greet();
    anonDude.status();

    //Another instance of the class
    let anonLady =new User('Anonymous lady');
    anonLady.greet();
    anonLady.status;

    //Another instance of the class
    let jeff=new User('Jeff');
    jeff.greet();
    jeff.status();