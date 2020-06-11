import { mount, shallowMount } from '@vue/test-utils'
import TestComponent from '@/test'
import List from '@/list'

test('mount a vue component', () => {
  const wrapper = mount(TestComponent, {
    propsData: {
      value: 'Faizan Arif',
    },
  })
  expect(wrapper.html()).toMatchSnapshot()
})

test('Mount a Parent component', () => {
  const wrapperUsingMount = mount(List)

  expect(wrapperUsingMount.html()).toMatchSnapshot()
})

test('Shallow mount a Parent component', () => {
  const wrapperUsingShallowMount = shallowMount(List)

  expect(wrapperUsingShallowMount.html()).toMatchSnapshot()
})
