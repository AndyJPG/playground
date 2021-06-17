import React, {Component} from 'react';

// Style
import './emojiSearch.css';

// Components
import EmojiList from "./components/EmojiList";
import EmojiSearchBar from "./components/EmojiSearchBar";

class EmojiSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accessKey: "&access_key=cb3024d39c7e7ab627e8fb7f38bd40d07116e664",
            emojiSearchUrl: "https://emoji-api.com/emojis?search=",
            error: null,
            isLoaded: true,
            searched: false,
            keyword: '',
            searchResult: []
        };
        this._searchClickHandler = this._searchClickHandler.bind(this);
    }

    componentDidMount() {
    }

    _searchOnchangeHandler = (e) => {
        this.setState({
            keyword: e.target.value
        });
    };

    async _searchClickHandler() {
        const searchUrl = this.state.emojiSearchUrl + this.state.keyword + this.state.accessKey;

        await this.setState({
            isLoaded: false,
            searched: true
        });

        try {
            const searchRes = await fetch(searchUrl);
            const searchResult = await searchRes.json();

            this.setState({
                isLoaded: true,
                searchResult: searchResult ? searchResult : []
            })
        } catch (error) {
            this.setState({
                isLoaded: true,
                error
            })
        }
    };

    render() {
        const {error, isLoaded, searchResult, searched} = this.state;
        let result = null;
        if (searched) {
            result = searchResult.length === 0 ? <p>Emoji not found</p> :
                <EmojiList emojiList={searchResult}/>;
        }

        return (
            <div className="emoji-search">
                <EmojiSearchBar
                    value={this.state.keyword}
                    changed={this._searchOnchangeHandler}
                    search={this._searchClickHandler}/>

                {isLoaded ? result : <p>Loading...</p>}
                {error ? <p>error</p> : null}
            </div>
        );
    }
}

export default EmojiSearch;