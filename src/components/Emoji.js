import React from 'react';
import EmojiConvertor from 'emoji-js';
const Emoji = (props) => {
var emoji = new EmojiConvertor();
  const {name, size} = props;
  emoji.use_sheet = false;
  var emojiIcon = emoji.replace_colons(`:${name}:`);
    return (
        <span style={{fontSize: size+'px'}}>
            {emojiIcon}
        </span>  
    );
}
export default Emoji;