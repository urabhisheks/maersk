let classes = ["dark-gray", "dark-blue", "light-blue", "blue"];
const cards = document.querySelectorAll(".card");
const shuffle = document.getElementById("shuffle");
const sort = document.getElementById("sort");

paint = () => {
  let colorIndex = {};
  cards.forEach((card) => {
    let random = Math.floor(Math.random() * 4);

    while (colorIndex[random]) {
      random = Math.floor(Math.random() * 4);
    }
    colorIndex[random] = true;
    if (Object.keys(colorIndex).length === 4) {
      colorIndex = {};
    }
    card.classList.add(classes[random]);
  });
};

paint();

shuffleCards = () => {
  let cardIndex = {};
  cards.forEach((card) => {
    let random = Math.ceil(Math.random() * 9);
    while (cardIndex[random]) {
      random = Math.ceil(Math.random() * 9);
    }
    cardIndex[random] = true;
    card.innerHTML = random;
  });
};
shuffle.addEventListener("click", shuffleCards);

sortCards = () => {
  let nums = [];
  cards.forEach((card) => {
    nums.push(card.innerHTML);
  });
  nums.sort((a, b) => a - b);
  cards.forEach((card, idx) => {
    card.innerHTML = nums[idx];
  });
};
sort.addEventListener("click", sortCards);
