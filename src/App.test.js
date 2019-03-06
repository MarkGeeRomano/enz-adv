import React from 'react';
import App from './App';
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new EnzymeAdapter })

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />)
  if (state) wrapper.setState(state)
  return wrapper
}

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`)
}

it('renders an app', () => {
  const wrapper = setup()
  const appComponent = findByTestAttr(wrapper, 'component-app')
  expect(appComponent.length).toBe(1)
})
it('renders incremen btn', () => {
  const wrapper = setup()
  const btnDisplay = findByTestAttr(wrapper, 'component-btn-display')
  expect(btnDisplay.length).toBe(1)
})
it('renders counter display', () => {
  const wrapper = setup()
  const btnDisplay = findByTestAttr(wrapper, 'component-btn-display')
  expect(btnDisplay.length).toBe(1)
})
it('counter starts at 0', () => {
  const wrapper = setup()
  const counterState = wrapper.state('count')
  expect(counterState).toEqual(0)
})
it('clicking btn inc counter', () => {
  const count = 7
  const wrapper = setup(null, { count })
  const btn = findByTestAttr(wrapper, 'component-btn')
  btn.simulate('click')
  const counterState = wrapper.state('count')
  expect(counterState).toEqual(count + 1)
  const btnDisplay = findByTestAttr(wrapper, 'component-btn-display')
  expect(btnDisplay.text()).toContain(count + 1)
})
