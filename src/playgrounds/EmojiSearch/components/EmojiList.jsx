import React from 'react';

const _copyClickHandler = (character) => {
    navigator.clipboard.writeText(character);
    console.log(character, "copyed");
};

const EmojiList = (props) => {
    return (
        <div className="emoji-container">
            {props.emojiList.map((emoji) => {
                if (emoji.character !== "🥲" && !/\d/.test(emoji.unicodeName)) {
                    return <div key={emoji.unicodeName}>
                        <button
                            onClick={() => _copyClickHandler(emoji.character)}
                            >{emoji.character}</button>
                        <div className="copied-badge blue">Copied</div>
                    </div>
                }
                return null;
            })}
        </div>
    );
};

export default EmojiList;