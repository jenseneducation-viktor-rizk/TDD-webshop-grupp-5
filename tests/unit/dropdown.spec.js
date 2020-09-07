import { shallowMount, mount } from "@vue/test-utils";
import Dropdown from "@/components/Dropdown";

describe("Dropdown.vue", () => {
  it("should be able to switch size in the filter", () => {
    

  })
  it("should be able to switch size of the product", async () => {
    const wrapper = mount(Dropdown, {
      propsData: {
        options: ["S", "M", "L", "XL"],
        preSelected: "S"
      }
    })
    const sizeDropdown = wrapper.find(".amount").findAll("option");
    await sizeDropdown.at(2).setSelected();
    expect(wrapper.vm.selected).toBe("L")
     
 })

  it("should be able to change amount of a product", async () => {
    const wrapper = mount(Dropdown, {
      propsData: {
        options: ["1", "2", "3", "4"],
        preSelected: "1"
      }
    });

    const amount = wrapper.find(".amount").findAll("option");
    await amount.at(0).setSelected();
    expect(wrapper.vm.selected).toBe("1");

    await amount.at(2).setSelected();
    expect(wrapper.vm.selected).toBe("3");
  });
});
