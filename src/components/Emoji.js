import React from 'react';
import PropTypes from "prop-types";
import emojiData from './emoji.json'

const Emoji = (props) => {
  const {name, size} = props;
  const emojiIcon = emojiData[name];
    return (
        <span style={{fontSize: size+'px'}}>
            {emojiIcon}
        </span>  
    );
}

Emoji.propTypes = {
    name: PropTypes.string,
    size: PropTypes.string,
  };

Emoji.defaultProps = {
    name: "smile",
    size: "20"
  };
export default Emoji;