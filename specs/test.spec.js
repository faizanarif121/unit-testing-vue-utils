import { mount, shallowMount } from '@vue/test-utils'
import TestComponent from '@/test'
import List from '@/list'

test('mount a vue component', () => {
  const wrapper = mount(TestComponent, {
    propsData: {
      value: 'Faizan Arif',
    },
  })
  expect(wrapper).toMatchSnapshot()
})

test('Mount a Parent component', () => {
  const wrapperUsingMount = mount(List)

  expect(wrapperUsingMount).toMatchSnapshot()
})

test('Shallow mount a Parent component', () => {
  const wrapperUsingShallowMount = shallowMount(List)

  expect(wrapperUsingShallowMount).toMatchSnapshot()
})

test('Add new movie to existing ones', async () => {
  const wrapper = mount(List)
  const existingMovies = wrapper.vm.marvelMovies
  // As we're updating dom here, so we need to wait for changes
  wrapper.setData({
    marvelMovies: [...existingMovies, 'The shawshank Redemption'],
  })
  // Waiting for DOM to get updated
  await wrapper.vm.$nextTick()
  expect(wrapper).toMatchSnapshot()
})
