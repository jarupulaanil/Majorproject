export const intialState = {
  basket: [],
};

// use the reduce method to add all the items
export const gettotalvalue = (basket) => {
  basket?.reduce((amount, item) => amount + item.price, 0);
};

export const reducer = (state, action) => {
  console.log(...state.basket);
  switch (action.type) {
    case "Additem":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "remove_from_list":
      // remove the item using index when the use clicks on the particular item  or remve button
      // first create a variable to find the item index from an array
      let index = state.basket.findIndex(
        (basket) => basket.name === action.name
      );
      let newbasket = [...state.basket];
      if (index >= 0) {
        newbasket.splice(index, 1);
      } else {
        console.warn(
          `can remove the item of product name  and id:(${action.name}`
        );
      }

      return {
        ...state,
        basket: newbasket,
      };

    default:
      return state;

    case "clearcart":
      return {
        ...state,
        basket: [],
      };

    case "search":
      return {
        ...state,
        basket: [],
      };
  }
};
