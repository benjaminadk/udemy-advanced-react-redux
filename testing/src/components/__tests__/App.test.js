import React from 'react'
import App from 'components/App'
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'
import { shallow } from 'enzyme'

let component
beforeEach(() => {
  component = shallow(<App/>)
})

it('shows a comment box', () => {
  expect(component.find(CommentBox).length).toEqual(1)
})

it('shows a comment list', () => {
  expect(component.find(CommentList).length).toEqual(1)
})
