import commentsReducer from 'reducers/comments'
import { SAVE_COMMENT } from 'actions/types'

it('handles action of tyle SAVE_COMMENT', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: 'test comment'
  }

  const newState = commentsReducer([], action)
  expect(newState).toEqual(['test comment'])
})

it('handles action of unknown type', () => {
const newState = commentsReducer([], { type: 'whatever' })
expect(newState).toEqual([])  
})