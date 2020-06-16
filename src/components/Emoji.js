import React from 'react';
import EmojiConvertor from 'emoji-js';
import PropTypes from "prop-types";

const Emoji = (props) => {
var emoji = new EmojiConvertor();
  const {name, size} = props;
  var emojiIcon = emoji.replace_colons(`:${name}:`);
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