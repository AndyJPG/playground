import React from 'react';

const EmojiList = (props) => {
    return (
        <div className="emoji-container">
            {props.emojiList.map((emoji) => {
                return <button onClick={() => console.log(emoji.character)} key={emoji.unicodeName}>{emoji.character}</button>
            })}
        </div>
    );
};

export default EmojiList;