import "./App.css";
import React from "react";
//import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import SignIn from "./components/SignIn/SignIn";
import { connect } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import { compose } from "redux";
import Preloader from "./components/common/Preloader/Preloader";
import { Suspense } from "react";

const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <BrowserRouter>
        <div className="app_wrapper">
          <HeaderContainer />
          <main>
            <Navbar />
            <Route
              path="/profile/:userId?"
              render={() => <ProfileContainer />}
            /> 
            <Suspense fallback={<Preloader />}>
              <Route path="/dialogs" render={() => <DialogsContainer />} />
            </Suspense>
            <Route path="/news" render={() => <News />} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/settings" render={() => <Settings />} />
            <Route path="/sign-in" render={() => <SignIn />} />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);
