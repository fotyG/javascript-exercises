const findTheOldest = function(arr) {
  const yearNow = new Date().getFullYear()
  arr.forEach((person) => {
    if(!Object.hasOwn(person, "yearOfDeath")) {
      let age = yearNow - person.yearOfBirth
      person.age = age;
    } else {
      let age = person.yearOfDeath - person.yearOfBirth;
      person.age = age;
    }
  })

  return (arr.sort((a, b) => b.age - a.age))[0]
};

const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    // yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];
findTheOldest(people)
// Do not edit below this line
module.exports = findTheOldest;
