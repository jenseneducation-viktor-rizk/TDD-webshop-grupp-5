const { shallowMount } = require("@vue/test-utils");
import Products from "@/components/Products.vue";
import ProductItem from "@/components/ProductItem.vue";

it("should show all the product items in the products component", () => {
  const listOfProducts = [
    {
      id: 1,
      name: "Star Wars T-shirt",
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdistributor.golding.eu%2Ft-shirt%2F120137--kariban-t-shirt-forest-green-2xl-ka356fo-5&psig=AOvVaw0i3eTjcnXkaIv4sLgV32mZ&ust=1599286778755000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNjD19TtzusCFQAAAAAdAAAAABAK",
      price: 150,
    },
    {
      id: 2,
      name: "Star Wars T-shirt",
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdistributor.golding.eu%2Ft-shirt%2F120137--kariban-t-shirt-forest-green-2xl-ka356fo-5&psig=AOvVaw0i3eTjcnXkaIv4sLgV32mZ&ust=1599286778755000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNjD19TtzusCFQAAAAAdAAAAABAK",
      price: 150,
    },
    {
      id: 3,
      name: "Star Wars T-shirt",
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdistributor.golding.eu%2Ft-shirt%2F120137--kariban-t-shirt-forest-green-2xl-ka356fo-5&psig=AOvVaw0i3eTjcnXkaIv4sLgV32mZ&ust=1599286778755000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNjD19TtzusCFQAAAAAdAAAAABAK",
      price: 150,
    },
    {
      id: 4,
      name: "Star Wars T-shirt",
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdistributor.golding.eu%2Ft-shirt%2F120137--kariban-t-shirt-forest-green-2xl-ka356fo-5&psig=AOvVaw0i3eTjcnXkaIv4sLgV32mZ&ust=1599286778755000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNjD19TtzusCFQAAAAAdAAAAABAK",
      price: 150,
    },
    {
      id: 5,
      name: "Star Wars T-shirt",
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdistributor.golding.eu%2Ft-shirt%2F120137--kariban-t-shirt-forest-green-2xl-ka356fo-5&psig=AOvVaw0i3eTjcnXkaIv4sLgV32mZ&ust=1599286778755000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNjD19TtzusCFQAAAAAdAAAAABAK",
      price: 150,
    },
    {
      id: 6,
      name: "Star Wars T-shirt",
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdistributor.golding.eu%2Ft-shirt%2F120137--kariban-t-shirt-forest-green-2xl-ka356fo-5&psig=AOvVaw0i3eTjcnXkaIv4sLgV32mZ&ust=1599286778755000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNjD19TtzusCFQAAAAAdAAAAABAK",
      price: 150,
    },
  ];

  const wrapper = shallowMount(Products, {
    propsData: {
      products: listOfProducts,
    },
  });

  let expected = listOfProducts.length;
  let actual = wrapper.find(".productsContainer").findAllComponents(ProductItem)
    .length;
  expect(actual).toBe(expected);
});
