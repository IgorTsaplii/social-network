import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import { BrowserRouter, Route } from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";


const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app_wrapper">
        <Header />
        <main>
          <Navbar />
          <Route path="/profile" render={() => <ProfileContainer />}/>
          <Route path="/dialogs" render={() => <DialogsContainer />}/>
          <Route path="/news" render={() => <News />} />
          <Route path="/settings" render={() => <Settings />} />
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
