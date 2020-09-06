import { shallowMount, mount } from "@vue/test-utils";
import Product from '@/views/Product';
import Size from '@/components/Size.vue';
describe("Size.vue", () => {
    const wrapper = mount(Size, {
        propsData: {
            myProduct: {
                id: 2,
                name: "Star Wars T-shirt",
                image:
                  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdistributor.golding.eu%2Ft-shirt%2F120137--kariban-t-shirt-forest-green-2xl-ka356fo-5&psig=AOvVaw0i3eTjcnXkaIv4sLgV32mZ&ust=1599286778755000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNjD19TtzusCFQAAAAAdAAAAABAK",
                price: 150,
                sizes: ["S", "M", "L"],
                color: ["Black", "Blue", "White"]
              }
        }
    });

    
    it("should be able to see which sizes are available", () => {
        const size = wrapper.find(".size").exists();
        expect(size).toBe(true);
    })
    it("should be able to switch size of the product", () => {
        const sizeDropdown = wrapper.find(".size-dropdown").findAll("option");
    })
})