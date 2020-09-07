const { shallowMount } = require("@vue/test-utils");
import Products from "@/components/Products.vue";
import ProductItem from "@/components/ProductItem.vue";

it("should show all the product items in the products component", () => {
  const listOfProducts = [
    {
      id: 1,
      name: "Epic cats with lazers",
      image: "black.jpg",
      price: 150,
      sizes: ["S", "M", "L"],
      color: 'black'
    },
    {
      id: 2,
      name: "Tupac print",
      image: "black_2.jpg",
      price: 200,
      sizes: ["S", "M", "L"],
      color: 'black'
    },
    {
      id: 3,
      name: "Cat with skateboard",
      image: "grey.jpg",
      price: 250,
      sizes: ["S", "M", "L"],
      color: 'grey'
    },
    {
      id: 4,
      name: "Pulp Fiction shirt",
      image: "red.jpg",
      price: 100,
      sizes: ["S", "M", "L"],
      color: 'red'
    },
    {
      id: 5,
      name: "White shirt with print",
      image: "white.jpg",
      price: 250,
      sizes: ["S", "M", "L"],
      color: 'white'
    },
    {
      id: 6,
      name: "Print of shirt",
      image: "yellow.jpg",
      price: 150,
      sizes: ["S", "M", "L"],
      color: 'yellow'
    },
  ];

  const wrapper = shallowMount(Products, {
    propsData: {
      products: listOfProducts,
      selectedSize: ""
    },
  });

  let expected = listOfProducts.length;
  let actual = wrapper.find(".productsContainer").findAllComponents(ProductItem)
    .length;
  expect(actual).toBe(expected);
});
