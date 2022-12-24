import React, {useEffect, useState} from 'react';
import {ToggleButton, ToggleButtonGroup, Box} from '@mui/material';

interface SortButtonsProps {
  setSortByValue: React.Dispatch<React.SetStateAction<string>>;
}

const SortButtons = ({setSortByValue}: SortButtonsProps) => {
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
        <ToggleButton value="sortByName">Sort by name</ToggleButton>
        <ToggleButton value="sortByQuote">Sort by quote</ToggleButton>
        <ToggleButton value="resetSort">Reset</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

export default SortButtons;
