import "./news.css"
import {Component} from "react";
import APIService from "../services/APIService";
import NewsPost from "./news-post/news-post";
import {Link} from "react-router-dom";
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
        return <div className={"news"} id={"news"}>
            <div className={"news-header"}>
                <div className={"news-dots-right"}>
                    <div className={"news-line"}>
                    </div>
                    <div></div>
                    <div className={"news-dot"}></div>
                    <div></div>
                    <div className={"news-dot"}></div>
                    <div></div>
                    <div className={"news-dot"}></div>
                    <div></div>
                </div>
                <h1> НОВОСТИ </h1>
                <div className={"news-dots-left"}>
                    <div></div>
                    <div className={"news-dot"}></div>
                    <div></div>
                    <div className={"news-dot"}></div>
                    <div></div>
                    <div className={"news-dot"}></div>
                    <div></div>
                    <div className={"news-line"}>
                </div>
            </div>
            </div>
            {NewsPosts}
            <Link to={'news'}>
                <button className={"posts-button"}>
                    <span> Больше новостей </span>
                </button>
            </Link>
        </div>;
    }
}