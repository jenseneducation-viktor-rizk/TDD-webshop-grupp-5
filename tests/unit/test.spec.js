import { shallowMount } from "@vue/test-utils";
import Cart from "@/components/Cart";

describe("Cart.vue", () => {
    it("should be able to change amount of a product", async () => {
        const wrapper = shallowMount(Cart);
        
        const amount = wrapper.find('.amount').findAll('option');

        await amount.at(0).setSelected();
        expect(wrapper.vm.amount).toBe("1");

        await amount.at(2).setSelected();
        expect(wrapper.vm.amount).toBe("3")
    })
})
