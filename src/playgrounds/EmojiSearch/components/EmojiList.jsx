import React from 'react';

const EmojiList = (props) => {
    return (
        <div className="emoji-container">
            {props.emojiList.map((emoji) => {
                if (emoji.character !== "🥲") {
                    return <button className="col-3 col-sm-3 col-md-2 col-lg-2" onClick={() => console.log(emoji.character)} key={emoji.unicodeName}>{emoji.character}</button>
                }
                return null;
            })}
        </div>
    );
};

export default EmojiList;