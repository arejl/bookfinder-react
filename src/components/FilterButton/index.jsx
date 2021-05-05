import React, { useState } from 'react';
import './index.css';
import Button from 'react-bootstrap/Button';

const FilterButton = ({ keyword, onclick }) => {
  const [on, setOn] = useState(false);

  const toggleFilter = () => {
    setOn(!on);
  };

  return (
    <Button className={`btn`} variant="info" onClick={() => { toggleFilter(); onclick(); }}>
      {`${keyword} items`}
    </Button>
  );
};

export default FilterButton;
