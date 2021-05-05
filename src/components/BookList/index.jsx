import React from 'react';
import BookCard from '../BookCard';
import SearchBar from '../SearchBar';
import FilterButton from '../FilterButton';
import CardColumns from 'react-bootstrap/CardColumns';
import Container from 'react-bootstrap/Container';

const BookList = ({ books }) => {
  const [onlyLiked, setOnlyLiked] = React.useState(false);
  const [onlyWanted, setOnlyWanted] = React.useState(false);
  const [search, setSearch] = React.useState([]);

  const toggleOnlyLiked = () => {
    setOnlyLiked(!onlyLiked);
  };

  const toggleOnlyWanted = () => {
    setOnlyWanted(!onlyWanted);
  };

  const changeSearch = (e) => {
    setSearch(e.target.value.toLowerCase().split(' '));
  };

  const submitSearch = (e) => {
    e.preventDefault();
  };

  const resetSearch = (e) => {
    e.preventDefault();
    setOnlyLiked(false);
    setOnlyWanted(false);
    setSearch([]);
  }

  const list = books[0].map((book) => <BookCard {...book} search={search} onlyWanted={onlyWanted} onlyLiked={onlyLiked} key={`${book.title}_${book.isbn}`} />);

  return (
    <div className="main_content">
      <div className="search_bar">
        <SearchBar onclick={resetSearch} onchange={changeSearch} onsubmit={submitSearch} />
      </div>

      <Container className="App-content">
        <div className="control_bar">
          <p className="text_lg">Filter by: </p>
          <FilterButton {...{ keyword: 'liked' }} onclick={toggleOnlyLiked} />
          <FilterButton {...{ keyword: 'wanted' }} onclick={toggleOnlyWanted} />
        </div>
        <CardColumns>
          {list}
        </CardColumns> 
      </Container>
    </div>
  );
};

export default BookList;