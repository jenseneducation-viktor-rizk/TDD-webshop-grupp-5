import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    listOfProducts: [
      {
        id: 1,
        name: "Star Wars T-shirt",
        image:
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdistributor.golding.eu%2Ft-shirt%2F120137--kariban-t-shirt-forest-green-2xl-ka356fo-5&psig=AOvVaw0i3eTjcnXkaIv4sLgV32mZ&ust=1599286778755000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNjD19TtzusCFQAAAAAdAAAAABAK",
        price: 150,
        sizes: ["S", "M", "L"],
        color: ["Black", "Blue", "White"]
      },
      {
        id: 2,
        name: "Star Wars T-shirt",
        image:
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdistributor.golding.eu%2Ft-shirt%2F120137--kariban-t-shirt-forest-green-2xl-ka356fo-5&psig=AOvVaw0i3eTjcnXkaIv4sLgV32mZ&ust=1599286778755000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNjD19TtzusCFQAAAAAdAAAAABAK",
        price: 150,
        sizes: ["S", "M", "L"],
        color: ["Black", "Blue", "White"]
      },
      {
        id: 3,
        name: "Star Wars T-shirt",
        image:
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdistributor.golding.eu%2Ft-shirt%2F120137--kariban-t-shirt-forest-green-2xl-ka356fo-5&psig=AOvVaw0i3eTjcnXkaIv4sLgV32mZ&ust=1599286778755000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNjD19TtzusCFQAAAAAdAAAAABAK",
        price: 150,
        sizes: ["S", "M", "L"],
        color: ["Black", "Blue", "White"]
      },
      {
        id: 4,
        name: "Star Wars T-shirt",
        image:
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdistributor.golding.eu%2Ft-shirt%2F120137--kariban-t-shirt-forest-green-2xl-ka356fo-5&psig=AOvVaw0i3eTjcnXkaIv4sLgV32mZ&ust=1599286778755000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNjD19TtzusCFQAAAAAdAAAAABAK",
        price: 150,
        sizes: ["S", "M", "L"],
        color: ["Black", "Blue", "White"]
      },
      {
        id: 5,
        name: "Star Wars T-shirt",
        image:
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdistributor.golding.eu%2Ft-shirt%2F120137--kariban-t-shirt-forest-green-2xl-ka356fo-5&psig=AOvVaw0i3eTjcnXkaIv4sLgV32mZ&ust=1599286778755000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNjD19TtzusCFQAAAAAdAAAAABAK",
        price: 150,
        sizes: ["S", "M", "L"],
        color: ["Black", "Blue", "White"]
      },
      {
        id: 6,
        name: "Star Wars T-shirt",
        image:
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdistributor.golding.eu%2Ft-shirt%2F120137--kariban-t-shirt-forest-green-2xl-ka356fo-5&psig=AOvVaw0i3eTjcnXkaIv4sLgV32mZ&ust=1599286778755000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNjD19TtzusCFQAAAAAdAAAAABAK",
        price: 150,
        sizes: ["S", "M", "L"],
        color: ["Black", "Blue", "White"]
      },
    ],
  },
  getters: {
    products(state) {
      return state.listOfProducts;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
