import React, {useState} from 'react';
import {List, ListItemButton, ListItemText} from '@mui/material';
import {Quotes} from '../../mock-data';

interface ListOfQuotesProps {}

const ListOfQuotes = (props: ListOfQuotesProps) => {
  const [quotes, setQuotes] = useState(Quotes);
  return (
    <>
      <List>
        {quotes &&
          quotes.map((quote) => (
            <ListItemButton>
              <ListItemText
                primary={quote.quote}
                secondary={quote.name}
              ></ListItemText>
            </ListItemButton>
          ))}
      </List>
    </>
  );
};

export default ListOfQuotes;
