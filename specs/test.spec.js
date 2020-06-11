import { mount } from '@vue/test-utils'
import TestComponent from '@/test'

test('mount a vue component', () => {
  const wrapper = mount(TestComponent, {
    propsData: {
      value: 'Faizan Arif',
    },
  })
  expect(wrapper.html()).toMatchSnapshot()
})
