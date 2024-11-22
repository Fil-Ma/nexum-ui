import React, { useState } from "react";
import { SearchBarContainer, Input, IconButton, ClearButton } from "./styles";
import { ISearchBarProps } from "./types";
import { default as DefaultIcon } from "@assets/icons/SearchIcon";
import { default as DefaultCloseIcon } from "@assets/icons/CloseIcon";

const SearchBar = ({
  placeholder = "Search...",
  onSearch,
  SearchIcon = <DefaultIcon />,
  CloseIcon = <DefaultCloseIcon />,
}: ISearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleClear = () => {
    setQuery("");
    onSearch?.("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(query);
  };

  return (
    <SearchBarContainer onSubmit={handleSubmit}>
      <IconButton type="submit" aria-label="Search">
        {SearchIcon}
      </IconButton>
      <Input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={handleInputChange}
      />
      {query && (
        <ClearButton onClick={handleClear} aria-label="Clear search">
          <DefaultCloseIcon />
        </ClearButton>
      )}
    </SearchBarContainer>
  );
};

export default SearchBar;
