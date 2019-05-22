import { SAVE_COMMENT, FETCH_COMMENTS } from 'actions/types';
import axios from 'axios'

export const saveComment = comment => {
    return {
      type: SAVE_COMMENT,
      payload: comment
    };
};

export const fetchComments = async () => {
  const resp = await axios.get('http://jsonplaceholder.typicode.com/comments');
  const payload = formatComment(resp.data)
  
  return {
    type: FETCH_COMMENTS,
    payload: payload
  };
};

const formatComment = (data) => {
  return data.map(comment => {
    return comment.name
  });
};
