const getTheTitles = function(array) {
  const titles = [];
  array.forEach((value) => titles.push(value["title"]));
  return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
