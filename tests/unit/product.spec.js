import { shallowMount, mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import VueRouter from "vue-router";
import routes from "@/router/default.routes.js";
import Product from "@/views/Product";
import Size from "@/components/Size.vue";
import Color from "@/components/Color.vue";
import BigButton from "@/components/BigButton.vue";
// import store from "@/store/index.js";

const testProduct = {
  id: 2,
  name: "Star Wars T-shirt",
  image:
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdistributor.golding.eu%2Ft-shirt%2F120137--kariban-t-shirt-forest-green-2xl-ka356fo-5&psig=AOvVaw0i3eTjcnXkaIv4sLgV32mZ&ust=1599286778755000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNjD19TtzusCFQAAAAAdAAAAABAK",
  price: 150,
  sizes: ["S", "M", "L", "XL"],
  color: "black",
};

describe("Color.vue", () => {
  const wrapper = mount(Color, {
    propsData: {
      color: testProduct.color,
    },
  });
  it("should be able to see which colors are available", () => {
    const color = wrapper.find(".color");
    expect(color.text("black")).toBe("black");
  });
});
describe("Size.vue", () => {
  const wrapper = mount(Size, {
    propsData: {
      myProduct: testProduct,
    },
  });

  it("should be able to see which sizes are available", () => {
    const size = wrapper.find(".size").exists();
    expect(size).toBe(true);
  });

  // it("should be able to switch size of the product", async () => {
  //     const sizeDropdown = wrapper.find(".amount").findAll("option");
  //     await sizeDropdown.at(2).setSelected();
  //     expect(wrapper.vm.selected).toBe("L")

  // })
});

it("should show the AddToCart-button in product-view", () => {
  const localVue = createLocalVue();
  const router = new VueRouter({ routes });
  localVue.use(VueRouter);

  const $route = {
    path: "/product/1",
  };
  const wrapper = shallowMount(Product, {
    localVue,
    router,
    mocks: {
      $store: {
        getters: {
          product(id) {
            return {
              id: 1,
              name: "Epic cats with lazers",
              image: "black.jpg",
              price: 150,
              sizes: ["S", "M"],
              color: "black",
            };
          },
        },
      },
    },
  });

  let actual = wrapper.findComponent(BigButton).exists();
  expect(actual).toBe(true);
});

//////

it("should be able to add a product to cart", async () => {
  const localVue = createLocalVue();
  const router = new VueRouter({ routes });
  localVue.use(VueRouter);
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
      cart: [],
    },
    getters: {
      products(state) {
        return state.listOfProducts;
      },
      product: (state) => (id) => {
        return state.listOfProducts.find((item) => item.id == 1);
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

  const wrapper = mount(Product, {
    store,
    localVue,
    router,
  });

  await wrapper.find(".BigButton").trigger("click");
  await wrapper.vm.$nextTick();

  expect(wrapper.vm.cart).toBe([1]);
});
// await wrapper.find(".BigButton").trigger("click");
// await wrapper.vm.$nextTick();
// console.log(store.state.cart);
// const expected = store.getters.cart(state);
// expect(expected).toBe([1]);
