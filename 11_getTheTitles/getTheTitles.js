const getTheTitles = function(arr) {
  let local = [];
  arr.forEach((item) => {
     local.push(item.title)
  })
  return local
};

const books = [
  {
    title: "Book",
    author: "Name",
  },
  {
    title: "Book2",
    author: "Name2",
  },
];

console.log(getTheTitles(books));

// Do not edit below this line
module.exports = getTheTitles;
