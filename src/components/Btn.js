import React from 'react';
import PropTypes from 'prop-types';

const Btn = ({ value }) => (
  <>
    <input className="bg-sky-500 hover:bg-sky-700 text-white p-1 rounded" type="submit" value={value} />
  </>
);

Btn.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Btn;
