let person = {
    name: 'Karlijn',
    age: 32,
    evaluations: [7, 10, 9],
    colors: ['green', 'blue', 'red']
};

console.log(person);

console.log(person.age)
console.log(person.name)

person.name = 'Mitchel'
console.log(person.age)
console.log(person.name)

person['name'] = 'Rosa'
console.log(person.age)
console.log(person.name)

console.log(person['name'])

console.log(person.evaluations)

console.log(person.colors[person.colors.length - 1])
person.colors[3] = 'yellow'
console.log(person.colors)
console.log(person.colors[person.colors.length - 1])

person.colors.push('orange')
console.log(person.colors)

person.colors.push(3)
console.log(person.colors)

person.colors.push({ greeting: "hi, I am an object" })
console.log(person.colors)
console.log(person.colors[person.colors.length - 1])

