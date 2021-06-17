import React from 'react';

const _copyClickHandler = (character) => {
    navigator.clipboard.writeText(character);
    console.log(character, "copyed");
};

const EmojiList = (props) => {
    return (
        <div className="emoji-container">
            {props.emojiList.map((emoji) => {
                if (emoji.character !== "🥲") {
                    return <button
                        className="col-3 col-sm-3 col-md-2 col-lg-2"
                        onClick={() => _copyClickHandler(emoji.character)}
                        key={emoji.unicodeName}>{emoji.character}</button>
                }
                return null;
            })}
        </div>
    );
};

export default EmojiList;