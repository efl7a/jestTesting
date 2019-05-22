import { saveComment } from 'actions';
import { SAVE_COMMENT } from 'actions/types';

describe('saveComment', () => {
  const newComment = saveComment('New Comment')
  it('has the correct type', () => {
    expect(newComment.type).toEqual(SAVE_COMMENT);
  });

  it('has the correct payload', () => {
    expect(newComment.payload).toEqual('New Comment');
  });
});
