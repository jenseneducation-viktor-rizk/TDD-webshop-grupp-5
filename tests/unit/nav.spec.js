import { shallowMount, createLocalVue } from "@vue/test-utils";
import Home from "@/views/Home.vue";
import Nav from "@/components/Nav.vue";
import Products from "@/components/Products.vue";
import VueRouter from "vue-router";
import routes from "@/router/default.routes.js";
import store from '@/store/index.js'

const listOfProducts = [
  {
    id: 1,
    name: "Epic cats with lazers",
    image: "black.jpg",
    price: 150,
    sizes: ["S", "M", "L"],
    color: 'black'
  },
  {
    id: 2,
    name: "Tupac print",
    image: "black_2.jpg",
    price: 200,
    sizes: ["S", "M", "L"],
    color: 'black'
  },
  {
    id: 3,
    name: "Cat with skateboard",
    image: "grey.jpg",
    price: 250,
    sizes: ["S", "M", "L"],
    color: 'grey'
  },
  {
    id: 4,
    name: "Pulp Fiction shirt",
    image: "red.jpg",
    price: 100,
    sizes: ["S", "M", "L"],
    color: 'red'
  },
  {
    id: 5,
    name: "White shirt with print",
    image: "white.jpg",
    price: 250,
    sizes: ["S", "M", "L"],
    color: 'white'
  },
  {
    id: 6,
    name: "Print of shirt",
    image: "yellow.jpg",
    price: 150,
    sizes: ["S", "M", "L"],
    color: 'yellow'
  },
];

describe("Nav.vue", () => {
  it("should route from any page to the home page when clicking on the logo", async () => {
    const localVue = createLocalVue();
    const router = new VueRouter({ routes });
    localVue.use(VueRouter);

    const wrapper = shallowMount(Nav, {
      localVue,
      router,
    });

    await router.push("/product");
    await wrapper.vm.$nextTick();
    wrapper.find("Logo-stub").vm.$emit("clicked");
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.$route.name).toBe("Home");
  });

  it("should route to '/product/4' when clicking on product with id 4", async () => {
    const localVue = createLocalVue();
    const router = new VueRouter({ routes });
    localVue.use(VueRouter);

    const wrapper = shallowMount(Products, {
      localVue,
      router,
      propsData: {
        products: listOfProducts,
        selectedSize: "",
        selectedColor: ""
      }
    });

    wrapper.find(".item-4").trigger("click");
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.$route.path).toBe('/product/4');
  });
});

describe("Cart.vue in Home", () => {
  
  it("should be invisible when rendered", async () => {
    let home = shallowMount(Home, {
      store
    });
    let cart = home.find(".cart");

    let cartVisible = cart.element.style.display !== "none";
    expect(cartVisible).toBe(false);
  });

  it("should be visible when cart-button is clicked", async () => {
    let wrapper = shallowMount(Home, {
      store
    });
    let cart = wrapper.find(".cart");

    wrapper.find("Nav-stub").vm.$emit("cart-btn-clicked");
    await wrapper.vm.$nextTick();

    let cartVisible = cart.element.style.display !== "none";
    expect(cartVisible).toBe(true);
  });
  it("should be invisible when x-button is clicked again", async () => {
    let wrapper = shallowMount(Home, {
      store
    });
    let cart = wrapper.find(".cart");

    wrapper.find("Nav-stub").vm.$emit("cart-btn-clicked");
    await wrapper.vm.$nextTick();
    wrapper.find("Cart-stub").vm.$emit("cart-btn-clicked");
    await wrapper.vm.$nextTick();

    let cartVisible = cart.element.style.display !== "none";
    expect(cartVisible).toBe(false);
  });
});

describe("Search.vue in Home", () => {
  
  it("should be invisible when rendered", async () => {
    let home = shallowMount(Home, {
      store
    });
    let search = home.find(".search");

    let searchVisible = search.element.style.display !== "none";
    expect(searchVisible).toBe(false);
  });

  it("should be visible when search-button is clicked", async () => {
    let wrapper = shallowMount(Home, {
      store
    });
    let search = wrapper.find(".search");

    wrapper.find("Nav-stub").vm.$emit("search-btn-clicked");
    await wrapper.vm.$nextTick();

    let searchVisible = search.element.style.display !== "none";
    expect(searchVisible).toBe(true);
  });

  it("should be invisible when search-button is clicked again", async () => {
    let wrapper = shallowMount(Home, {
      store
    });
    let search = wrapper.find(".search");

    wrapper.find("Nav-stub").vm.$emit("search-btn-clicked");
    await wrapper.vm.$nextTick();
    wrapper.find("Nav-stub").vm.$emit("search-btn-clicked");
    await wrapper.vm.$nextTick();

    let searchVisible = search.element.style.display !== "none";
    expect(searchVisible).toBe(false);
  });


});
