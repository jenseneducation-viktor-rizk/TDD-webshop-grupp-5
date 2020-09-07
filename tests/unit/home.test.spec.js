const { shallowMount, createLocalVue } = require("@vue/test-utils");
import VueRouter from "vue-router";
import routes from "@/router/default.routes.js";
import Products from "@/components/Products.vue";
import Home from "@/views/Home.vue";
import store from "@/store/index.js";

it("should check if the products component is in home-view", () => {
  const localVue = createLocalVue();
  const router = new VueRouter({ routes });
  localVue.use(VueRouter);

  const wrapper = shallowMount(Home, {
    store,
    localVue,
    router,
  });
  let actual = wrapper.findComponent(Products).exists();
  let expected = true;
  expect(actual).toBe(expected);
});
