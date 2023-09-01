import {Route, Routes} from "react-router-dom";
import App from "../app/App";
import NewsPage from "../news-page/news-page";
import SinglePostsPage from "../single-posts-page/single-posts-page";


const Routing = () => {
    return <Routes>
        <Route path={"/"} element={<App/>}/>
        <Route path={"/news"} element={<NewsPage/>}/>
        <Route path={"/news/:id"} element={<SinglePostsPage/>}/>
    </Routes>
}

export default Routing