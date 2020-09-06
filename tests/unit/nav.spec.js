import { shallowMount, createLocalVue } from "@vue/test-utils";
import Home from "@/views/Home.vue";
import Nav from "@/components/Nav.vue";
import VueRouter from "vue-router";
import routes from "@/router/default.routes.js";
import store from '@/store/index.js'


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
});
