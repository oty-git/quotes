import React, {useState} from 'react';
import {Container} from '@mui/material';
import QuotesList from '../../components/QuotesList';
import SortButtons from '../../components/SortButtons';

interface ICommentsPageProps {}

const CommentsPage = (props: ICommentsPageProps) => {
  const [sortByValue, setSortByValue] = useState('');
  console.log('sortByValue', sortByValue);

  return (
    <>
      <Container maxWidth="md">
        <SortButtons setSortByValue={setSortByValue} />
        <QuotesList sortByValue={sortByValue} />
      </Container>
    </>
  );
};

export default CommentsPage;
