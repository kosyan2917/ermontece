import "./news-post.css"
import newsPost from "./news-post";
import {Link} from "react-router-dom";

const NewsPost = (news_options) => {
    console.log(news_options)
    news_options = news_options.news_options
    return <div className={"news-post"}>
        <h2 className={'post-header'}> {news_options.header}</h2>
        <h4 className={'post-date'}>
            {news_options.date}
        </h4>
        <div className={'post-description'}> {news_options.description}</div>
        <img className={'post-image'} src={news_options.image}/>
        <div className={'button-link'}>
            <Link to={`/news/${news_options.id}`} className={'link'}>
                <button className={"post-button"}>
                    <span> Читать </span>
                </button>
            </Link>
        </div>

    </div>
}

const to_post = (url) => {
    window.location.href = url
}

export default NewsPost
