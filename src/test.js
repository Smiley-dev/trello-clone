const state = {
  lists: [
    { id: 1, name: "1" },
    { id: 2, name: "2" },
    { id: 3, name: "3" },
    { id: 4, name: "4" },
    { id: 5, name: "5" },
    { id: 6, name: "6" },
  ],
};

const cards = {
  cards: [
    { id: 1, idList: 3, name: "1" },
    { id: 2, idList: 6, name: "1" },
    { id: 3, idList: 4, name: "1" },
    { id: 3, idList: 4, name: "1" },
  ],
};
state.lists.forEach((list) => {
  console.log(cards.cards.filter((card) => card.idList === list.id));
});

/* const newState = state.lists.map((list) => ({ ...list, cards: [] }));
newState.forEach((list, index) => {
  cards.cards.forEach((card) => {
    if (list.id === card.idList) {
      newState[index].cards.push(card);
    }
  });
});
console.log(newState); */
