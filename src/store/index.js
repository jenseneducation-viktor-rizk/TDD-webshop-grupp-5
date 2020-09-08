import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    listOfProducts: [
      {
        id: 1,
        name: "Epic cats with lazers",
        image: "black.jpg",
        price: 150,
        sizes: ["S", "M"],
        color: "black",
      },
      {
        id: 2,
        name: "Tupac print",
        image: "black_2.jpg",
        price: 200,
        sizes: ["S", "L"],
        color: "black",
      },
      {
        id: 3,
        name: "Cat with skateboard",
        image: "grey.jpg",
        price: 250,
        sizes: ["S", "M", "L"],
        color: "grey",
      },
      {
        id: 4,
        name: "Pulp Fiction shirt",
        image: "red.jpg",
        price: 100,
        sizes: ["S", "M", "L"],
        color: "red",
      },
      {
        id: 5,
        name: "White shirt with print",
        image: "white.jpg",
        price: 250,
        sizes: ["S", "M", "L", "XL"],
        color: "white",
      },
      {
        id: 6,
        name: "Print of shirt",
        image: "yellow.jpg",
        price: 150,
        sizes: ["L", "XL"],
        color: "yellow",
      },
    ],
    cart: [],
  },
  getters: {
    products(state) {
      return state.listOfProducts;
    },
    product: (state) => (id) => {
      return state.listOfProducts.find((item) => item.id == id);
    },
    cart(state) {
      return state.cart;
    },
  },
  mutations: {
    Add_to_cart(state, id) {
      state.cart.push(id);
    },
  },
  actions: {
    addToCart(context, id) {
      context.commit("Add_to_cart", id);
    },
  },
});
