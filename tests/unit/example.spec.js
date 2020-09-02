import { shallowMount, createLocalVue, RouterLinkStub } from "@vue/test-utils";
import Nav from "@/components/Nav.vue";
import VueRouter from "vue-router";
import routes from "@/router/index.js";

describe("Nav.vue", () => {
  it("should stay at the home page when clicking on the logo", () => {
    const localVue = createLocalVue();
    const router = new VueRouter({ routes });
    localVue.use(VueRouter);
    const $route = { path: "http://localhost:8080/" };
    const wrapper = shallowMount(Nav, {
      localVue,
    });

    wrapper.find(".logo").trigger("click");
    console.log(router, "hej");
    expect(wrapper.vm.$route.path).toBe($route.path);
  });

  it("should route from the product page to the home page when clicking on the logo", async () => {
    const localVue = createLocalVue();
    const router = new VueRouter({ routes });
    localVue.use(VueRouter);
    const $route = { path: "http://localhost:8080/" };
    const wrapper = shallowMount(Nav, {
      localVue,
    });

    await router.push("/product");
    wrapper.find(".logo").trigger("click");

    expect(wrapper.vm.$route.path).toBe($route.path);
  });
});
