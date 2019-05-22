import React from 'react';
import { mount } from 'enzyme';

import Root from 'Root';
import CommentList from 'components/CommentList';

describe('the CommentList', () => {
  let wrapped;
  const initialState = {
    comments: ['Comment 1', 'Comment 2', 'Comment 3', 'Comment 4']
  };

  beforeEach(() => {
    wrapped = mount(
      <Root initialState={initialState}>
        <CommentList />
      </Root>
    );
  });

  it('has one li element for each comment in the store', () => {
    expect(wrapped.find('li').length).toEqual(4);
  });

  it('shows the text of each comment', () => {
    expect(wrapped.render().text()).toContain('Comment 1');
    expect(wrapped.render().text()).toContain('Comment 3');
  });

});
