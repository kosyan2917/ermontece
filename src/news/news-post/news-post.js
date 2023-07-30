import "./news-post.css"
import newsPost from "./news-post";

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
        <button className={"post-button"} onClick={to_post.bind(this, news_options.link)}>
            <span> Читать </span>
        </button>
    </div>
}

const to_post = (url) => {
    window.location.href = url
}

export default NewsPost
