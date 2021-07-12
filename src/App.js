import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import { BrowserRouter, Route } from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app_wrapper">
        <Header />
        <main>
          <Navbar />
          <Route
            path="/profile"
            render={() => (
              <Profile
                postsData={props.state.profilePage.postsData}
                newPostText={props.state.profilePage.newPostText}
                dispatch={props.dispatch}
                />
            )}
          />
          <Route
            path="/dialogs"
            render={() => (
              <Dialogs
                dialogsData={props.state.dialogsPage.dialogsData}
                messagesData={props._state.dialogsPage.messagesData}
              />
            )}
          />
          <Route path="/news" render={() => <News />} />
          <Route path="/settings" render={() => <Settings />} />
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
