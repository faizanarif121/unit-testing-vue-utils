import Vuex from 'vuex'
import Vue from 'vue'
import { mount, createLocalVue } from '@vue/test-utils'

import SaladBowlComponent from '@/salad-bowl'
import saladStore from '@/store/salad-store'
// Vue.use(Vuex) // This is a bad practice, we shouldn't play with global Vue object directly

// Good Practice
const VueWithVuex = createLocalVue()

VueWithVuex.use(Vuex)

describe('Vuex-store', () => {
  test('should get values from store', () => {
    const store = new Vuex.Store(saladStore)
    const wrapper = mount(SaladBowlComponent, {
      localVue: VueWithVuex,
      store,
    })

    store.state.salad.push('Tomatoo')
    expect(wrapper.vm.salad).toEqual(['Tomatoo'])
  })
  test('store should work', () => {
    const store = new Vuex.Store(saladStore)
    const wrapper = mount(SaladBowlComponent, {
      localVue: VueWithVuex,
      store,
    })

    wrapper.vm.addIngredient('Tomatoo')
    expect(wrapper.vm.salad).toEqual(['Tomatoo'])
  })
})
