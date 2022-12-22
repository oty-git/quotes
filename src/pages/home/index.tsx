import * as React from 'react';
import ListOfQuotes from '../../components/list-of-quotes';

interface HomePageProps {}

const HomePage = (props: HomePageProps) => {
  return (
    <>
      <ListOfQuotes />
    </>
  );
};

export default HomePage;
