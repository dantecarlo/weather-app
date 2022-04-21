import { Search as SearchIcon } from '@mui/icons-material'
import { IconButton, TextField } from '@mui/material'
import { ChangeEvent, FC, KeyboardEvent, useEffect, useState } from 'react'
import { ISearchBar } from './SearchBar.types'

const SearchBar: FC<ISearchBar> = ({ onSearch, placeholder }) => {
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    if (searchValue === '') onSearch(searchValue)
  }, [searchValue])

  const handleSearchClick = () => {
    if (searchValue.trim() !== '') onSearch(searchValue)
  }

  const handleTextFieldChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSearchValue(event.currentTarget.value)
  }

  const handleKeyPress = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      if (searchValue.trim() !== '') onSearch(searchValue)
    }
  }

  return (
    <TextField
      variant="outlined"
      type="search"
      onKeyPress={handleKeyPress}
      value={searchValue}
      InputProps={{
        endAdornment: (
          <IconButton onClick={handleSearchClick}>
            <SearchIcon />
          </IconButton>
        )
      }}
      onChange={handleTextFieldChange}
      placeholder={placeholder}
      fullWidth
    />
  )
}

export default SearchBar
