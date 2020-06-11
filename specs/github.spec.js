import GithubCard from '@/github-card'
import { mount } from '@vue/test-utils'
import { TestScheduler } from 'jest'

describe('methods', () => {
  test('compose url', () => {
    const { composeUrl } = GithubCard.methods
    expect(composeUrl(123)).toBe('https://api.github.com/users/123')
  })

  test('fetch data From API', async () => {
    const jsonMock = jest.fn().mockResolvedValue('Github Resolved Value')
    window.fetch = jest.fn().mockResolvedValue({
      json: jsonMock,
    })

    const wrapper = mount(GithubCard, {
      methods: {
        composeUrl: () => 'url',
      },
    })
    await wrapper.vm.fetchData()
    expect(window.fetch).toHaveBeenCalledWith('url')
    expect(jsonMock).toHaveBeenCalled()
    expect(wrapper.vm.data).toBe('Github Resolved Value')
  })
})
