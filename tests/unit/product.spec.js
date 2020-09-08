import { shallowMount, createLocalVue } from "@vue/test-utils";
import Product from '@/views/Product';
import store from "@/store/index.js";
import VueRouter from "vue-router";
import routes from "@/router/default.routes.js";
import BigButton from "@/components/BigButton.vue";



const testProduct = {
    id: 2,
    name: "Tupac print",
    image: "black_2.jpg",
    price: 200,
    sizes: ["S", "L"],
    color: "black",
    size: "S",
    quantity: 1
  }

describe("Product.vue", () => {
    
    it('should give the tupac t-shirt a size value of S and quantity 1 when created', async () => {
        
        let expected = testProduct
        
        const wrapper = shallowMount(Product, {
            store,
            mocks: {
                $route: {
                    params: { id: '2' }
                }
            }
        })
        
        expect(wrapper.vm.product).toMatchObject(expected)
    })

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
