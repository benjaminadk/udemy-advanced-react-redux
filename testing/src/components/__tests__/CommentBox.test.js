import React from 'react'
import CommentBox from 'components/CommentBox'
import { mount } from 'enzyme'
import Root from 'Root'

let component

beforeEach(() => {
  component = mount(<Root><CommentBox/></Root>)
})

afterEach(() => {
  component.unmount()
})

it('has a textarea and two buttons', () => {
  expect(component.find('textarea').length).toEqual(1)
  expect(component.find('button').length).toEqual(2)
})

describe('the textarea', () => {

  beforeEach(() => {
    component.find('textarea').simulate('change', {
      target: { value: 'test comment' }
    })
    component.update()
  })

  it('textarea allows users input', () => {
    expect(component.find('textarea').prop('value')).toEqual('test comment')
  })

  it('textarea clears after form submit', () => {
    component.find('form').simulate('submit')
    component.update()
    expect(component.find('textarea').prop('value')).toEqual('')
  })
})
