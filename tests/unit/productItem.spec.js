import { shallowMount, mount } from "@vue/test-utils";
import ProductItem from "@/components/ProductItem.vue";

// Som användare vill jag kunna se priset på produkten så att jag vet vad den kostar.

it("should show the correct price in the product component", () => {
  const wrapper = shallowMount(ProductItem, {
    propsData: {
      price: 150,
      image: 'black.jpg'
    },
  });
  let actual = wrapper.find(".price").text();
  expect(actual).toBe("150");
});

it("should show the correct name in the product component", () => {
  const wrapper = shallowMount(ProductItem, {
    propsData: {
      name: "Tshirt",
      image: 'black.jpg'
    },
  });
  let actual = wrapper.find(".name").text();
  expect(actual).toBe("Tshirt");
});

it("should show the correct image url in the product component",  () => {
  const wrapper = mount(ProductItem, {
    propsData: {
      image:
        "../assets/black.jpg",
    },
  });

  let actual = wrapper.find(".image").attributes("src");
  expect(actual).toBe(
    "../assets/black.jpg"
  );
});
