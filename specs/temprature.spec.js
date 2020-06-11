import Temprature from '@/temprature'
import { mount } from '@vue/test-utils'

describe('Computed props', () => {
  test('Celcius', () => {
    const { vm } = mount(Temprature)
    // initially the celcius value should be zero
    expect(vm.celsius).toBe(0)
    // One way of changing values
    // wrapper.setData({
    //   degrees: 10,
    // })
    vm.degrees = 10
    expect(vm.degrees).toBe(10)
  })

  test('Fahrenheit', () => {
    const { vm } = mount(Temprature)
    // initially the fahrenheit value should be 32
    expect(vm.fahrenheit).toBe(32)

    vm.degrees = 16 // Chaning the value of degrees variable should change computed props result as well
    // As dom is not getting updated right now, we're not testing DOM updates
    // So no need of async await here
    expect(vm.fahrenheit).toBe(60.8)
  })
})

test('Watchers', async () => {
  const wrapper = mount(Temprature, {
    propsData: {
      temp: 40,
    },
  })

  const { vm } = wrapper
  expect(vm.degrees).toBe(40) // As now we have changed props value to 40, so when components is being rendered the value would be 40
  expect(vm.type).toBe('celsius') // As we're not changing type, so the type by default should be celsius

  wrapper.setProps({
    temp: '50f',
  })

  await vm.$nextTick()

  expect(vm.degrees).toBe(50)
  expect(vm.type).toBe('fahrenheit')
  // The value is already in fahrenheit
  expect(vm.fahrenheit).toBe(50)
  // Calculate degrees, as we're using parse int so no need to worry about point values
  expect(vm.celsius).toBe(10)
})
