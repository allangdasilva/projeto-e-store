import React from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [search, setSearch] = React.useState("");
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    if (search.trim()) {
      navigate(`/search?q=${encodeURIComponent(search)}`);
      setSearch("");
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        name="search"
        placeholder="Search..."
        type="search"
        value={search}
        onChange={({ target }) => setSearch(target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
