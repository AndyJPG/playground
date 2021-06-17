import React from 'react';
import Spinner from "./Spinner";

const EmojiSearchBar = (props) => {
    return (
        <div>
            <form className="input-group mb-3">
                <input
                    value={props.value}
                    onChange={props.changed}
                    type="text"
                    className="form-control"
                    placeholder="Search emoji"
                    aria-label="Example text with button addon"
                    aria-describedby="button-addon1" />
                <button
                    onClick={props.search}
                    className="btn btn-outline-secondary"
                    type="submit"
                    id="button-addon1">🔍</button>
                {props.isLoaded ? null : <Spinner/>}
            </form>
        </div>
    );
};

export default EmojiSearchBar;