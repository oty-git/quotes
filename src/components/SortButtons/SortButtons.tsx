import React, {useEffect, useState} from 'react';
import {ToggleButton, ToggleButtonGroup, Box} from '@mui/material';
import {sortByNameText, sortByQuoteText, resetSortText} from './config/en.js';

interface ISortButtonsProps {
  setSortByValue: React.Dispatch<React.SetStateAction<string>>;
}

const SortButtons = ({setSortByValue}: ISortButtonsProps) => {
  const [alignment, setAlignment] = useState('');

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };

  useEffect(() => {
    setSortByValue(alignment);
  }, [alignment, setSortByValue]);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        p: 1,
        m: 1,
      }}
    >
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
      >
        <ToggleButton value="sortByName">{sortByNameText}</ToggleButton>
        <ToggleButton value="sortByQuote">{sortByQuoteText}</ToggleButton>
        <ToggleButton value="resetSort">{resetSortText}</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

export default SortButtons;
