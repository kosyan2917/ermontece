import logo from '../logo.svg';
import './App.css';
import HeaderMain from "../mainmontece/header-main/header-main";
import Header from "../header/header";
import Team from "../team/main_frame/team";
import Games from "../games/games";

function App() {
  return (
    <div className="App">
        <Header/>
        <HeaderMain/>
        <Team/>
        <Games/>
    </div>
  );
}

export default App;
