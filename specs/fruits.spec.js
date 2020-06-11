import FruitBasket from '@/fruit-basket'
import { mount } from '@vue/test-utils'

describe('Fruits and DOM manipulation', () => {
  test('should add fruits to DOM', async () => {
    const wrapper = mount(FruitBasket)

    const input = wrapper.find('input')
    const button = wrapper.find('button')
    expect(wrapper.findAll('li').length).toBe(0)
    input.element.value = 'Orange'
    input.trigger('input')
    expect(wrapper.vm.fruit).toBe('Orange')

    button.trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.fruit).toBe('')
    expect(wrapper.vm.basket).toEqual(expect.arrayContaining(['Orange']))
    expect(wrapper.findAll('li').length).toBe(1)
  })
})
