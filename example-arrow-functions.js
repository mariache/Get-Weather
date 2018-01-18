var names = ['sam','yo','pho'];

names.forEach(function (name) {
    console.log('foreach', name)
});

names.forEach((name) => {
    console.log('arrow', name)
});

names.forEach((name) => console.log(name));

var returnMe = (name) => name +'!';
console.log(returnMe('Sam'));

var person = {
    name: 'Sam',
    greet: function(){
        names.forEach((name) => {
            console.log(this.name + ' says hi to ' + name )
        });
    }
};

person.greet();

function add (a,b) {
    return a+b;
}
console.log(add(1,3));

var addStatement = (a,b) => {
    return a+b;
}
console.log(addStatement(3,2));

var addExpression = (a,b) => a+b;
console.log(addExpression(4,600));