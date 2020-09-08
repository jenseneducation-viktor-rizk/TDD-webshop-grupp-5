import { shallowMount, createLocalVue } from "@vue/test-utils";
import Product from '@/views/Product';
import store from "@/store/index.js";



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
});
