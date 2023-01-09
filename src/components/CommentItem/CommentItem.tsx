import React, {FC, useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {IQuotes} from '../../types';

interface IQuoteProps {}

interface QuoteItemPageParams {
  id: number | undefined;
}

const CommentItem: FC<IQuoteProps> = (props) => {
  const [comment, setComment] = useState<IQuotes | null>(null);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchComment();
  }, []);

  const fetchComment = async () => {
    try {
      const data = await fetch(
        'https://jsonplaceholder.typicode.com/posts/${params.id}'
      ).then((response) => response.json());
      setComment(data);
      console.log('data', data);
    } catch (error) {
      console.log('error', error);
    }
  };
  return (
    <div>
      <button onClick={() => navigate('/comments')}>Back</button>
      <h1>User name {comment?.title}</h1>
      <div>Post: {comment?.body}</div>
    </div>
  );
};

export default CommentItem;
