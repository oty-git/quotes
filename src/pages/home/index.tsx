import React, {useState} from 'react';
import {Container} from '@mui/material';
import ListOfQuotes from '../../components/list-of-quotes';
import SortButtons from '../../components/sort-buttons';

interface HomePageProps {}

const HomePage = (props: HomePageProps) => {
  const [sortByValue, setSortByValue] = useState('');
  console.log('sortByValue', sortByValue);

  return (
    <>
      <Container maxWidth="md">
        <SortButtons setSortByValue={setSortByValue} />
        <ListOfQuotes sortByValue={sortByValue} />
      </Container>
    </>
  );
};

export default HomePage;
