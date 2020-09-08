const { mount, createLocalVue } = require("@vue/test-utils");
import Vuex from "vuex";
import Home from "@/views/Home.vue";
import ProductItem from "@/components/ProductItem.vue";
import Search from "@/components/Search.vue";

const localVue = createLocalVue();
localVue.use(Vuex);
const store = new Vuex.Store({
  state: {
    listOfProducts: [
      {
        id: 1,
        name: "Fin T-shirt",
        image: "black.jpg",
        price: 150,
        sizes: ["S", "M", "L"],
        color: "black",
      },
      {
        id: 2,
        name: "Ful T-shirt",
        image: "black.jpg",
        price: 150,
        sizes: ["S", "M", "L"],
        color: "red",
      },
    ],
  },
  getters: {
    products(state) {
      return state.listOfProducts;
    },
    cart(state) {
      return state.cart;
    }
  },
});

it("should filter out products that contains the searchterm, when searching", async () => {
  const wrapper = mount(Home, {
    store,
    localVue,
  });

  await wrapper.findComponent(Search).vm.$emit("search-text-updated", "Fin");
  let actual = wrapper.findAllComponents(ProductItem).length;
  expect(actual).toBe(1);
});

it("should be upper and lowercase insensitive", async () => {
  const wrapper = mount(Home, {
    store,
    localVue,
  });

  await wrapper.findComponent(Search).vm.$emit("search-text-updated", "fin");
  let actual = wrapper.findAllComponents(ProductItem).length;
  expect(actual).toBe(1);
});
