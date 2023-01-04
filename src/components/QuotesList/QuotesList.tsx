import React, {useCallback, useEffect, useState} from 'react';
import {List, ListItemButton, ListItemText} from '@mui/material';
import {Quotes} from '../../mock-data';

interface IQuotesListProps {
  sortByValue: string;
}
interface ISortParams {
  resetSort: string;
  sortByName: string;
  sortByQuote: string;
}

interface IQuotes {
  quote: string;
  name: string;
  id: string;
}

const QuotesList = ({sortByValue}: IQuotesListProps) => {
  const initialQuotesList = Quotes;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const sortParams: ISortParams = {
    resetSort: '',
    sortByName: 'name',
    sortByQuote: 'quote',
  };

  const [quotesList, setQuotesList] = useState<IQuotes[]>(initialQuotesList);

  // const sort = useCallback(
  //   (sortByValue: string) => {
  //     Object.keys(sortParams).forEach((key: string) => {
  //       if (key === sortByValue) {
  //         setQuotesList((prev) => {
  //           return [...prev].sort((a, b) =>
  //             a.key > b[key] ? 1 : b[key] > a[key] ? -1 : 0
  //           );
  //         });
  //       }
  //     });
  //   },
  //   [sortParams]
  // );

  useEffect(() => {
    // if (sortByValue && Object.keys(sortParams).includes(sortByValue)) {
    //   sort(sortByValue);
    // }

    if (sortByValue && sortByValue === 'sortByName') {
      setQuotesList((prev) => {
        return [...prev].sort((a, b) =>
          a.name > b.name ? 1 : b.name > a.name ? -1 : 0
        );
      });
      return;
    }

    if (sortByValue && sortByValue === 'sortByQuote') {
      setQuotesList((prev) => {
        return [...prev].sort((a, b) =>
          a.quote > b.quote ? 1 : b.quote > a.quote ? -1 : 0
        );
      });
      return;
    }

    if (sortByValue && sortByValue === 'resetSort') {
      setQuotesList([...initialQuotesList]);
      return;
    }
  }, [initialQuotesList, sortByValue, sortParams]);

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

export default QuotesList;
