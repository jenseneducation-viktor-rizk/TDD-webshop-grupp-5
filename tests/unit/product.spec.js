import { shallowMount } from "@vue/test-utils";
import Product from "@/components/Product.vue";

// Som användare vill jag kunna se priset på produkten så att jag vet vad den kostar.

it("should show the price at the home page", () => {
  const wrapper = shallowMount(Product, {
    propsData: {
      price: 150,
    },
  });
  let actual = wrapper.find(".price").text();
  expect(actual).toBe("150");
});

it("should show the product name at the home page", () => {
  const wrapper = shallowMount(Product, {
    propsData: {
      name: "Tshirt",
    },
  });
  let actual = wrapper.find(".name").text();
  expect(actual).toBe("Tshirt");
});

it("should show all the products at the home page", () => {
  const wrapper = shallowMount(Product, {
    propsData: {
      name: "Tshirt",
    },
  });
  let actual = wrapper.find(".name").text();
  expect(actual).toBe("Tshirt");
});
