
function Animal(type) {
    this.type = type;
}

Animal.prototype.say = function () {
    console.log('say');
}


console.log([] instanceof Array);