import logo from '../logo.svg';
import './App.css';
import HeaderMain from "../mainmontece/header-main/header-main";
import Header from "../header/header";
import Team from "../team/main_frame/team";
import Games from "../games/games";
import News from "../news/news";
import Contacts from "../contacts/contacts";
import {Route, Routes} from "react-router-dom";
import SinglePostsPage from "../single-posts-page/single-posts-page";
import NewsPage from "../news-page/news-page";

function App() {
  return (
    <div className="App">
        <Header/>
        <HeaderMain/>
        <Team/>
        <Games/>
        <News/>
        <Contacts/>

    </div>
  );
}

export default App;
