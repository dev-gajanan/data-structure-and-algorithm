class Animal {
    static belly = [];
    eat() {
        Animal.belly.push("food");
    }
}

let a = new Animal();
a.eat();

console.log(Animal.belly[0]);

const foo = [1,2,3];
const [n] = foo;
console.log(n);