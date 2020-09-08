import { shallowMount, createLocalVue } from "@vue/test-utils";
import Product from "@/views/Product";
import store from "@/store/index.js";
import VueRouter from "vue-router";
import routes from "@/router/default.routes.js";
import BigButton from "@/components/BigButton.vue";
import Vuex from "vuex";

describe("Product.vue", () => {
  it("should give the tupac t-shirt a size value of S and quantity 1 when created", async () => {
    let expected = {
      id: 2,
      name: "Tupac print",
      image: "black_2.jpg",
      price: 200,
      sizes: ["S", "L"],
      color: "black",
      size: "S",
      quantity: 1,
    };

    const wrapper = shallowMount(Product, {
      store,
      mocks: {
        $route: {
          params: { id: "2" },
        },
      },
    });

    expect(wrapper.vm.product).toMatchObject(expected);
  });

  it("should change size to M in product object when M is chosen in dropdown", async () => {
    let expected = {
      id: 2,
      name: "Tupac print",
      image: "black_2.jpg",
      price: 200,
      sizes: ["S", "L"],
      color: "black",
      size: "M",
      quantity: 1,
    };

    const wrapper = shallowMount(Product, {
      store,
      mocks: {
        $route: {
          params: { id: "2" },
        },
      },
    });

    wrapper.find(".change-size").vm.$emit("selected-option", "M");
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.product).toMatchObject(expected);
  });

  it("should change the quantity to 3 in product object when 3 is chosen in dropdown", async () => {
    let expected = {
      id: 2,
      name: "Tupac print",
      image: "black_2.jpg",
      price: 200,
      sizes: ["S", "L"],
      color: "black",
      size: "S",
      quantity: 3,
    };

    const wrapper = shallowMount(Product, {
      store,
      mocks: {
        $route: {
          params: { id: "2" },
        },
      },
    });

    wrapper.find(".change-quantity").vm.$emit("selected-option", "3");
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.product).toMatchObject(expected);
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
            product() {
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
});

//////
it("should be able to add a product to cart", async () => {
  const localVue = createLocalVue();
  const router = new VueRouter({ routes });

  const expected = [{"color": "black", "id": 1, "image": "black.jpg", 
  "name": "Epic cats with lazers", "price": 150, "quantity": 1, 
  "size": "S", "sizes": ["S", "M"]}]

  const wrapper = shallowMount(Product, {
    store,
    localVue,
    router,
    mocks: {
      $route: {
        params: { id: "1" },
      },
    },
  });

  await wrapper.find(".BigButton").trigger("click");
  await wrapper.vm.$nextTick();

  expect(wrapper.vm.cart).toMatchObject(expected);
  expect(wrapper.vm.cart.length).toBe(1);
});
