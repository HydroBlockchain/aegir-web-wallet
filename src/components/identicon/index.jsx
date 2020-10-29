import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import HydroIdenticon from '../../services/flakeGenerator.min';

function Identicon(props) {
  const {
    seed,
    size,
  } = props;
  const iconRef = useRef();

  const icon = HydroIdenticon.create({
    seed,
    size,
  });

  if (iconRef.current) {
    iconRef.current.innerHTML = '';
    iconRef.current.appendChild(icon);
  }

  return (
    <div ref={iconRef} />
  );
}

Identicon.propTypes = {
  seed: PropTypes.string,
  size: PropTypes.number,
};

Identicon.defaultProps = {
  seed: 'test',
  size: 100,
};

export default Identicon;
