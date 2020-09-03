import { shallowMount, createLocalVue } from "@vue/test-utils";
import Home from "@/views/Home.vue";
import Nav from "@/components/Nav.vue";
import VueRouter from "vue-router";
import routes from "@/router/default.routes.js";


describe("Nav.vue", () => {
  // it("should stay at the home page when clicking on the logo", async () => {
   
  //   const $route = { path: "http://localhost:8080/" };
  //   const wrapper = shallowMount(Nav, {
  //     mocks: {
  //       $route
  //     },
  //   });

  //   wrapper.find('Logo-stub').vm.$emit('clicked');
  //   await wrapper.vm.$nextTick()

  //   expect(wrapper.vm.$route.path).toBe($route.path);
  // });

  it("should route from the product page to the home page when clicking on the logo", async () => {
    const localVue = createLocalVue();
    const router = new VueRouter({ routes });
    localVue.use(VueRouter);

    const wrapper = shallowMount(Nav, {
      localVue,
      router,
    });

    await router.push("/product");
    await wrapper.vm.$nextTick()
    wrapper.find('Logo-stub').vm.$emit('clicked');
    await wrapper.vm.$nextTick()

    expect(wrapper.vm.$route.name).toBe("Home");
  });
});

describe("Cart.vue", () => {

  it("should be invisible when rendered", async () => {
    let home = shallowMount(Home)
    let cart = home.find('.cart')

    let cartVisible = cart.element.style.display !== 'none';
		expect(cartVisible).toBe(false);
  })

  it("should be visible when cart-button is clicked", async () => {
    let wrapper = shallowMount(Home)
    let cart = wrapper.find('.cart')

    wrapper.find('Nav-stub').vm.$emit('cart-btn-clicked');
    await wrapper.vm.$nextTick()

    let cartVisible = cart.element.style.display !== 'none';
		expect(cartVisible).toBe(true);

  })
})