import React, { Component } from 'react';

// Style
import './emojiSearch.css';

class EmojiSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allEmojiUrl: "https://emoji-api.com/emojis?access_key=cb3024d39c7e7ab627e8fb7f38bd40d07116e664",
            emojiCategoriesUrl: "https://emoji-api.com/categories?access_key=cb3024d39c7e7ab627e8fb7f38bd40d07116e664",
            error: null,
            isLoaded: false,
            emojiList: null,
            emojiCategoriesList: null
        };
    }

    async componentDidMount() {
        try {
            const allEmojiRes = await fetch(this.state.allEmojiUrl);
            const allEmojiresult = await allEmojiRes.json();

            const emojiCategoriesRes = await fetch(this.state.emojiCategoriesUrl);
            const emojiCategoriesResult = await emojiCategoriesRes.json();

            this.setState({
                isLoaded: true,
                emojiList: allEmojiresult,
                emojiCategoriesList: emojiCategoriesResult
            });

            console.log(allEmojiresult[0]);

        } catch (error) {
            this.setState({
                isLoaded: true,
                error
            })
        }
    }

    render() {
        const { error, isLoaded, emojiList, emojiCategoriesList } = this.state;

        if (error) {
            return <h1>Error</h1>
        } else if (!isLoaded) {
            return <h1>Loading...</h1>
        } else {

            return (
                <div className="emoji-search">
                    <h1>Emoji Search</h1>
                    <div className="emoji-container">
                        {emojiList.map((emoji) => {
                            return <div key={emoji.unicodeName}>{emoji.character}</div>
                        })}
                    </div>
                    {emojiCategoriesList ? emojiCategoriesList.map((category) => {
                        return <div key={category.slug}>
                            <h1>Slug: {category.slug}</h1>
                            <ul>
                                {category.subCategories.map((subCategory) => {
                                    return <li key={subCategory}>
                                        {subCategory}
                                    </li>
                                })}
                            </ul>
                        </div>
                    }) : null}
                </div>
            );
        }
    }
}

export default EmojiSearch;