import React from 'react'
import { shallow, render, mount } from 'enzyme'

import { App } from '../../client/components/App'
App.prototype.componentDidMount = () => {}

test('runner is working', () => {
  expect(true).toBeTruthy()
})

// test('<App> root has className of app', () => {
//   const wrapper = shallow(<App photos={[]} />)
//   const root = wrapper.find('.app')
//   expect(root).toHaveLength(1)
// })
