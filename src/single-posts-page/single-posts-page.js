import "./single-posts-page.css"
import {Link, useMatches, useParams} from "react-router-dom";
import React, {Component, Fragment} from "react";
import APIService from "../services/APIService";
import montece from "../images/MonteceLogo.png";


const withRouter = Component => props =>{
    const params = useParams()
    return (<Component {...props} params={params}/>)

}

class SinglePostsPage extends Component {

    _api_service = new APIService();

    state = {
        post: {}
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this._api_service.getPost(this.props.params.id)
            .then((post) => {
                this.setState({
                    post: post
                })
                console.log(`State = ${post.header}`)
            })
    }

    render() {
        const post = this.state.post;
        console.log(post)
        console.log(this.props.params)
        return <Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                <a className="navbar-brand" href="/">
                    <img src={montece} className={"d-inline-block logo"}/>
                </a>

                <div className="link-no-style">
                    <ul className="navbar-nav">
                        <li className="nav-item nav-el">
                            <Link to={'/'} className={"colored"}> На главную </Link>
                        </li>
                        <li className="nav-item nav-el">
                            <Link to={'/news'} className={"colored"}> Назад к новостям </Link>
                        </li>
                    </ul>
                </div>

            </nav>
            <div className={'single-post'}>
                <div className={"single-post-header"}>
                    <h1>{post.header}</h1>
                    <img src={post.image}/>
                </div>
                <h4 className={'post-date single-post-date'}>
                    {post.date}
                </h4>
                <div dangerouslySetInnerHTML={{ __html: post.text }}/>
            </div>
        </Fragment>
    }
}

export default withRouter(SinglePostsPage)