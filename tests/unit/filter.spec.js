import { shallowMount } from '@vue/test-utils';
import Products from '@/components/Products.vue'

const listOfProducts = [
  {
    id: 1,
    name: "Epic cats with lazers",
    image: "black.jpg",
    price: 150,
    sizes: ["S", "M"],
    color: 'black'
  },
  {
    id: 2,
    name: "Tupac print",
    image: "black_2.jpg",
    price: 200,
    sizes: ["S", "L"],
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
    sizes: ["S", "M", "L", "XL"],
    color: 'white'
  },
  {
    id: 6,
    name: "Print of shirt",
    image: "yellow.jpg",
    price: 150,
    sizes: ["L", "XL"],
    color: 'yellow'
  },
]

describe("Products.vue", () => {
    it("should show size M t-shirts if it's filtered by M", () => {
      const wrapper = shallowMount(Products, {
        propsData: {
          products: listOfProducts,
          selectedSize: "M",
          selectedColor: "Color"
        }
      });
      const expected = [{
        id: 1,
        name: "Epic cats with lazers",
        image: "black.jpg",
        price: 150,
        sizes: ["S", "M"],
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
        sizes: ["S", "M", "L", "XL"],
        color: 'white'
      }];

      expect(wrapper.vm.filteredProducts).toMatchObject(expected)
    })

    it("should show black t-shirts only if it's filtered by black", () => {
      const wrapper = shallowMount(Products, {
        propsData: {
          products: listOfProducts,
          selectedSize: "Size",
          selectedColor: "black"
        }
      });
        const expected = [
          {
            id: 1,
            name: "Epic cats with lazers",
            image: "black.jpg",
            price: 150,
            sizes: ["S", "M"],
            color: "black",
          },
          {
            id: 2,
            name: "Tupac print",
            image: "black_2.jpg",
            price: 200,
            sizes: ["S", "L"],
            color: "black",
          }
          ];
        expect(wrapper.vm.filteredProducts).toMatchObject(expected)
    })
    // it("should be able to switch between sizes with the filtering still working", () => {
    //   const wrapper = shallowMount(Products, {
    //     propsData: {
    //       products: listOfProducts,
    //       selectedSize: "S"
    //     }
    //   });
      
    //   const expected = [{
    //     id: 1,
    //     name: "Epic cats with lazers",
    //     image: "black.jpg",
    //     price: 150,
    //     sizes: ["S", "M"],
    //     color: 'black'
    //   },
    //   {
    //     id: 3,
    //     name: "Cat with skateboard",
    //     image: "grey.jpg",
    //     price: 250,
    //     sizes: ["S", "M", "L"],
    //     color: 'grey'
    //   },
    //   {
    //     id: 4,
    //     name: "Pulp Fiction shirt",
    //     image: "red.jpg",
    //     price: 100,
    //     sizes: ["S", "M", "L"],
    //     color: 'red'
    //   },
    //   {
    //     id: 5,
    //     name: "White shirt with print",
    //     image: "white.jpg",
    //     price: 250,
    //     sizes: ["S", "M", "L", "XL"],
    //     color: 'white'
    //   }];

    //   expect(wrapper.vm.filteredProducts).toMatchObject(expected)
    // })
  })