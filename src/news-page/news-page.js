import './news-page.css'
import montece from "../images/MonteceLogo.png";
import React from "react";
import Header from "../header/header";
import APIService from "../services/APIService";
import NewsPost from "../news/news-post/news-post";
import {Link} from "react-router-dom";



export default class NewsPage extends React.Component {

    _api_service = new APIService();
    _items_per_page = 1;

    constructor() {
        super();

    }

    state = {
        current_page: 1,
        pages: 1,
        posts: []

    }



    componentDidMount() {
        this.gotoPage(1)
    }

    gotoPage = page => {
        this._api_service.getPostsPage(page)
            .then((posts) => {
                this.setState({
                    posts: posts,
                    pages: Math.ceil(posts.count/this._items_per_page),
                    current_page: page
                })
                console.log(`State = ${posts}`)
            })
    }

    fetchPageNumbers = () => {

        const totalPages = this.state.pages;
        const currentPage = this.state.current_page;
        const pageNeighbours = 1;
        const totalNumbers = (pageNeighbours * 2) + 3;
        const totalBlocks = totalNumbers + 2;
        console.log(`Total pages = ${totalPages}, total blocks = ${totalBlocks}`)
        const range = (from, to, step = 1) => {
            let i = from;
            const range = [];

            while (i <= to) {
                range.push(i);
                i += step;
            }

            return range;
        }
        if (totalPages > totalBlocks) {
            const startPage = Math.max(2, currentPage - pageNeighbours);
            const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);
            let pages = range(startPage, endPage);
            const hasLeftSpill = startPage > 2;
            const hasRightSpill = (totalPages - endPage) > 1;
            const spillOffset = totalNumbers - (pages.length + 1);
            switch (true) {
                case (hasLeftSpill && !hasRightSpill): {
                    const extraPages = range(startPage - spillOffset, startPage - 1);
                    pages = ['LEFT', ...extraPages, ...pages];
                    break;
                }
                case (!hasLeftSpill && hasRightSpill): {
                    const extraPages = range(endPage + 1, endPage + spillOffset);
                    pages = [...pages, ...extraPages, 'RIGHT'];
                    break;
                }
                case (hasLeftSpill && hasRightSpill):
                default: {
                    pages = ['LEFT', ...pages, 'RIGHT'];
                    break;
                }
            }
            return [1, ...pages, totalPages];
        }
        return range(1, totalPages);
    }


    render() {
        const LEFT_PAGE = 'LEFT';
        const RIGHT_PAGE = 'RIGHT';
        const posts = this.state.posts;
        const currentPage = this.state.current_page;
        const pages = this.fetchPageNumbers()
        console.log(pages)
        // console.log(posts)
        const news_posts = []
        // console.log(`Страницы ${this.state.pages}`)

        for (let i in posts.results) {
            news_posts.push(<NewsPost news_options={posts.results[i]}/>)
        }

        return <div>
            {/*<Header/>*/}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                <a className="navbar-brand" href="/">
                    <img src={montece} className={"d-inline-block logo"}/>
                </a>

                <div className="container-fluid link-no-style">
                    <Link to={"/"} className={"colored"}>
                        На главную
                    </Link>
                </div>
            </nav>
            <div className={"news-page"}>
                <div className={"news-page-header-grid"}>
                    <h1 className={'colored news-page-header'}> НОВОСТИ </h1>
                    <nav className="news-pagination">
                        <ul className="news-pagination-list">
                            { pages.map((page, index) => {

                                if (page === LEFT_PAGE) return (
                                    <li key={index} className="li-dots">
                                        <a className="" href="#" aria-label="Previous">
                                            <span className="">...</span>
                                        </a>
                                    </li>
                                );

                                if (page === RIGHT_PAGE) return (
                                    <li key={index} className="li-dots">
                                        <a className="" href="#">
                                            <span className="">...</span>
                                        </a>
                                    </li>
                                );

                                return (
                                    <li key={index} className={`page-item${ currentPage === page ? ' active' : ''}`}
                                        onClick={() => this.gotoPage(page)}>
                                        <a className="" href="#" >{ page }</a>
                                    </li>
                                );

                            }) }

                        </ul>
                    </nav>
                </div>

                {news_posts}
            </div>
        </div>
    }
}
