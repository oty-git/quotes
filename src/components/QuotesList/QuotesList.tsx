import React, {useCallback, useEffect, useState} from 'react';
import {List, ListItemButton, ListItemText} from '@mui/material';
import {getPosts} from '../../api/getPosts';

interface IQuotesListProps {
  sortByValue: string;
}
interface ISortParams {
  resetSort: string;
  sortByName: string;
  sortByQuote: string;
}

interface IQuotes {
  body: string;
  title: string;
  id: string;
}
// eslint-disable-next-line react-hooks/exhaustive-deps
const sortParams: ISortParams = {
  resetSort: '',
  sortByName: 'name',
  sortByQuote: 'quote',
};

const QuotesList = ({sortByValue}: IQuotesListProps) => {
  // const initialQuotesList = Quotes;
  const [initialQuotesList, setInitialQuotesList] = useState<IQuotes[]>([]);

  const [quotesList, setQuotesList] = useState<IQuotes[]>(initialQuotesList);

  useEffect(() => {
    const getData = async () => {
      const data = await getPosts();
      setInitialQuotesList(data);
      setQuotesList(data);
    };
    getData();
  }, []);

  console.log('initialQuotesList', initialQuotesList);

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
          a.body > b.title ? 1 : b.title > a.title ? -1 : 0
        );
      });
      return;
    }

    if (sortByValue && sortByValue === 'sortByQuote') {
      setQuotesList((prev) => {
        return [...prev].sort((a, b) =>
          a.body > b.body ? 1 : b.body > a.body ? -1 : 0
        );
      });
      return;
    }

    if (sortByValue && sortByValue === 'resetSort') {
      setQuotesList([...initialQuotesList]);
      return;
    }
  }, [initialQuotesList, sortByValue]);

  return (
    <>
      <List>
        {quotesList &&
          quotesList.map((quote) => (
            <ListItemButton key={quote.id}>
              <ListItemText primary={quote.body} secondary={quote.title} />
            </ListItemButton>
          ))}
      </List>
    </>
  );
};

export default QuotesList;
