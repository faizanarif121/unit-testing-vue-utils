import AlertMessage from '@/alert-message'
import { mount } from '@vue/test-utils'
jest.useFakeTimers()

describe('Life cycle hooks', () => {
  test('should assign timer a value when mounted', () => {
    const wrapper = mount(AlertMessage)
    expect(wrapper.vm.interval).not.toBe(undefined)
  })

  test("should update timer interval's value", () => {
    const wrapper = mount(AlertMessage)
    expect(wrapper.vm.counter).toBe(0)

    jest.advanceTimersByTime(1000)
    expect(wrapper.vm.counter).toBe(1)
    jest.advanceTimersByTime(1000)
    expect(wrapper.vm.counter).toBe(2)
  })

  test('should destroy the instance', () => {
    const beforeDestroySpy = jest.spyOn(AlertMessage, 'beforeDestroy')
    const wrapper = mount(AlertMessage)
    wrapper.vm.counter = wrapper.vm.timer - 1
    jest.advanceTimersByTime(1000)
    expect(beforeDestroySpy).toHaveBeenCalled()
  })
})
