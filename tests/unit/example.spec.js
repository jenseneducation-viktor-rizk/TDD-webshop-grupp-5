import { shallowMount, createLocalVue } from '@vue/test-utils'
import Nav from '@/components/Nav.vue'

describe('Nav.vue', () => {
  it('should reload the home page when clicking on the logo', () => {
    const $route = { path: 'http://localhost:8080/' }

    const wrapper = shallowMount(Nav, {
      mocks: {
        $route
      }
    })

    wrapper.find('.logo').trigger('click')

    expect(wrapper.vm.$route.path).toBe($route.path)
  })

  // it('should route from the product page to the home page when clicking on the logo', () => {
  //   const msg = 'new message'
  //   const wrapper = shallowMount(Product, {
  //     propsData: { msg }
  //   })
  //   expect(wrapper.text()).toMatch(msg)
  // })
})
