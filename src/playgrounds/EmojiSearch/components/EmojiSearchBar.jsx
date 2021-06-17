import React from 'react';

const EmojiSearchBar = (props) => {
    return (
        <div>
            <form className="form-inline my-2 my-lg-0">
                <input
                    value={props.value}
                    onChange={props.changed}
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search Emoji"
                    aria-label="Search" />
                    <button
                        onClick={props.search}
                        className="btn btn-outline-success my-2 my-sm-0"
                        type="submit"
                        >Search</button>
            </form>
        </div>
    );
};

export default EmojiSearchBar;