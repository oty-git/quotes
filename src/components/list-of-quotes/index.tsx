import React, {useEffect, useState} from 'react';
import {List, ListItemButton, ListItemText} from '@mui/material';
import {Quotes} from '../../mock-data';

interface ListOfQuotesProps {
  sortByValue: string;
}

const ListOfQuotes = ({sortByValue}: ListOfQuotesProps) => {
  const initialListOfQuotes = Quotes;
  const [quotesList, setQuotesList] = useState(initialListOfQuotes);

  useEffect(() => {
    if (sortByValue && sortByValue === 'sortByName') {
      setQuotesList((prev) => {
        return [...prev].sort((a, b) =>
          a.name > b.name ? 1 : b.name > a.name ? -1 : 0
        );
      });
    }

    if (sortByValue && sortByValue === 'sortByQuote') {
      setQuotesList((prev) => {
        return [...prev].sort((a, b) =>
          a.quote > b.quote ? 1 : b.quote > a.quote ? -1 : 0
        );
      });
    }

    if (sortByValue && sortByValue === 'resetSort') {
      setQuotesList([...initialListOfQuotes]);
    }
  }, [initialListOfQuotes, sortByValue]);

  return (
    <>
      <List>
        {quotesList &&
          quotesList.map((quote) => (
            <ListItemButton key={quote.id}>
              <ListItemText primary={quote.quote} secondary={quote.name} />
            </ListItemButton>
          ))}
      </List>
    </>
  );
};

export default ListOfQuotes;
