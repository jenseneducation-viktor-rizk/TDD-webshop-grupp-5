import { shallowMount } from "@vue/test-utils";
import ProductItem from "@/components/ProductItem.vue";

// Som användare vill jag kunna se priset på produkten så att jag vet vad den kostar.

it("should show the correct price in the product component", () => {
  const wrapper = shallowMount(ProductItem, {
    propsData: {
      price: 150,
    },
  });
  let actual = wrapper.find(".price").text();
  expect(actual).toBe("150");
});

it("should show the correct name in the product component", () => {
  const wrapper = shallowMount(ProductItem, {
    propsData: {
      name: "Tshirt",
    },
  });
  let actual = wrapper.find(".name").text();
  expect(actual).toBe("Tshirt");
});

it("should show the correct image url in the product component", () => {
  const wrapper = shallowMount(ProductItem, {
    propsData: {
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdistributor.golding.eu%2Ft-shirt%2F120137--kariban-t-shirt-forest-green-2xl-ka356fo-5&psig=AOvVaw0i3eTjcnXkaIv4sLgV32mZ&ust=1599286778755000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNjD19TtzusCFQAAAAAdAAAAABAK",
    },
  });
  let actual = wrapper.find(".image").attributes("src");
  expect(actual).toBe(
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdistributor.golding.eu%2Ft-shirt%2F120137--kariban-t-shirt-forest-green-2xl-ka356fo-5&psig=AOvVaw0i3eTjcnXkaIv4sLgV32mZ&ust=1599286778755000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNjD19TtzusCFQAAAAAdAAAAABAK"
  );
});