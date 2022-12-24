import React, {useEffect, useState} from 'react';
import {List, ListItemButton, ListItemText} from '@mui/material';
import {Quotes} from '../../mock-data';

interface ListOfQuotesProps {
  sortByValue: string;
}

const ListOfQuotes = ({sortByValue}: ListOfQuotesProps) => {
  const [quotes, setQuotes] = useState(Quotes);

  useEffect(() => {
    if (sortByValue === 'sortByName') {
      const sortedByNameQuotes = [
        ...quotes.sort((a, b) =>
          a.name > b.name ? 1 : b.name > a.name ? -1 : 0
        ),
      ];
      setQuotes(sortedByNameQuotes);
    }

    if (sortByValue === 'sortByQuote') {
      const sortedByQuoteQuotes = [
        ...quotes.sort((a, b) =>
          a.quote > b.quote ? 1 : b.quote > a.quote ? -1 : 0
        ),
      ];
      setQuotes(sortedByQuoteQuotes);
    }

    // if (sortByValue === 'resetSort') {
    //   const initialQutesList = [...Quotes];

    //   console.log('sortByValue', sortByValue);
    //   setQuotes([...Quotes]);
    // }
  }, [quotes, sortByValue]);

  return (
    <>
      <List>
        {quotes &&
          quotes.map((quote) => (
            <ListItemButton>
              <ListItemText primary={quote.quote} secondary={quote.name} />
            </ListItemButton>
          ))}
      </List>
    </>
  );
};

export default ListOfQuotes;
