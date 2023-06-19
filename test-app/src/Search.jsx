import { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ providers, setFilteredProviders }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("name");
  const [ratingFilter, setRatingFilter] = useState("");

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchTypeChange = (e) => {
    setSearchType(e.target.value);
  };

  const handleRatingFilterChange = (e) => {
    setRatingFilter(e.target.value);
  };

  const filterProviders = () => {
    const filtered = providers.filter((provider) => {
      const searchMatch =
        searchType === "name" &&
        provider.name.toLowerCase().includes(searchTerm.toLowerCase());
      const locationMatch =
        searchType === "location" &&
        provider.location.toLowerCase().includes(searchTerm.toLowerCase());
      const pincodeMatch =
        searchType === "pincode" && provider.pincode.includes(searchTerm);
      const ratingMatch =
        !ratingFilter || provider.rating >= parseFloat(ratingFilter);

      return (searchMatch || locationMatch || pincodeMatch) && ratingMatch;
    });

    setFilteredProviders(filtered);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    filterProviders();
  };

  const resetSearch = () => {
    setSearchTerm("");
    setRatingFilter("");
    setFilteredProviders(providers);
  };

  return (
    <div className="mb-3">
      <form onSubmit={handleSearch}>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchTermChange}
          />
          <select
            className="form-select"
            value={searchType}
            onChange={handleSearchTypeChange}
          >
            <option value="name">Name</option>
            <option value="location">Location</option>
            <option value="pincode">Pincode</option>
          </select>
          <input
            type="number"
            className="form-control"
            placeholder="Minimum Rating"
            value={ratingFilter}
            onChange={handleRatingFilterChange}
          />
          <button type="submit" className="btn btn-primary">
            Search
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={resetSearch}
          >
            Reset Search
          </button>
        </div>
      </form>
    </div>
  );
};

Search.propTypes = {
  providers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      pincode: PropTypes.string.isRequired,
    })
  ).isRequired,
  setFilteredProviders: PropTypes.func.isRequired,
};

export default Search;
