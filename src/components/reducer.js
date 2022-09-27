export const initialState = {
  basket: [],
  user: null,
};

// Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };

    case "REMOVE_FROM_BASKET":
        

      const index = state.basket.findIndex(
        (basketItem) => basketItem.title === action.id
        // (basketItem) => {
        //   // if you ever wanna confirm the action, do-it makes 100% sense now action.id is the item clicked on, baskteItem is the item in the basket? Yea! :DDD Bingooo!! ^^
        //   console.log("Item in the Basket");
        //   console.log(basketItem);
        //   console.log("The item clicked on");
        //   console.log(action.id);
        // }
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
