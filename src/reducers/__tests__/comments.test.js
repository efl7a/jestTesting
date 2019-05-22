import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

it('handles actions of type SAVE_COMMENT', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: "Best Day Ever"
  };

  const newState = commentsReducer([], action);

  expect(newState).toEqual(['Best Day Ever']);
});

it('handles action of unknown type', () => {
  const action= {
    type: 'hgjhiuoiupklhh',
    payload: 'anything I say'
  };

  const newState = commentsReducer([], action);

  expect(newState).toEqual([]);
});
