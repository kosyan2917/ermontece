import "./news.css"
import {Component} from "react";
import APIService from "../services/APIService";
import NewsPost from "./news-post/news-post";

export default class News extends Component {

    _api_service = new APIService();

    constructor() {
        super();

    }

    state = {
        posts: []
    }

    componentDidMount() {
        this._api_service.getPosts()
            .then((posts) => {
                this.setState({
                    posts
                })
                console.log(posts)
            })
    }

    render() {
        const posts = this.state.posts;
        // console.log(posts)
        const NewsPosts = []
        if (posts.length > 2) {
            for (let i = 0; i < 2; i++) {
                NewsPosts.push(<NewsPost news_options={posts[i]}/>)
            }
        }
        else {
            for (let i in posts) {
                NewsPosts.push(<NewsPost news_options={posts[i]}/>)
            }
        }
        return <div className={"news"}>
            <div className={"news-header"}>
                <h1> НОВОСТИ </h1>
                {NewsPosts}
            </div>
            <button className={"posts-button"}>
                <span> Больше новостей </span>
            </button>
        </div>;
    }
}