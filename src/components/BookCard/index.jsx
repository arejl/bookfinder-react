import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const BookCard = ({  title, shortDescription, longDescription, thumbnailUrl, isFav, read, onlyLiked, onlyWanted, search }) => {

  const [favorite, setFavorite] = React.useState(isFav);
  const [toRead, setToRead] = React.useState(read);

  const addToFav = () => {
    setFavorite(!favorite)
  };

  const addToRead = () => {
    setToRead(!toRead)
  };

  const displayClass = () => {
    if (search.length > 0 && !search.some((word) => (new RegExp(word).test(title.toLowerCase())))) {
      return 'd-none';
    }
    if (!onlyLiked && !onlyWanted) {
      return '';
    }
    if (onlyLiked && !onlyWanted && !favorite) {
      return 'd-none';
    }
    if (onlyWanted && !onlyLiked && !toRead) {
      return 'd-none';
    }
    if (onlyLiked && onlyWanted && !(favorite && toRead)) {
      return 'd-none';
    }
    return '';
  };

  const wantedText = toRead ? 'wanted' : 'want';
  const likedText = favorite ? 'liked' : 'like';
  const description = shortDescription
    || (longDescription ? `${longDescription.substring(0, 300)}...` : 'This book has no description');


  return (
    <Card className={`bookcard ${displayClass()}`} text='dark' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={thumbnailUrl} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <p className="buttonbar">
          <Button
            type="button"
            onClick={addToFav}
            className={`btn btn_${favorite.toString()}`}
          >
            {likedText}
          </Button>
          <Button
            type="button"
            onClick={addToRead}
            className={`btn btn_${toRead.toString()}`}
          >
            {wantedText}
          </Button>
        </p>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BookCard;