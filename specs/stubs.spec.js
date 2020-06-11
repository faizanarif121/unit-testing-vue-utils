import { shallowMount } from '@vue/test-utils'
import ListComponent from '@/list'

const ListItemComponent = {
  template: `<li>  {{movie}} </li> `,
  props: ['movie'],
}

describe('Play with Child Components', () => {
  test('shallow mount component', () => {
    const wrapper = shallowMount(ListComponent, {
      stubs: {
        ListItem: ListItemComponent,
      },
    })
    expect(wrapper).toMatchSnapshot()
  })
})
