//#region > Imports
//> React
// Contains all the functionality necessary to define React components
import React from "react";
// DOM bindings for React Router
import { withRouter } from "react-router-dom";
//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
//> Redux
// Allows to React components read data from a Redux store, and dispatch actions
// to the store to update data.
import { connect } from "react-redux";

//> Actions
// Functions to send data from the application to the store
import { getPerson } from "../../../store/actions/personActions";
//> Components
import { PersonInfoCard, PersonTabs } from "../../organisms";
//> Style sheet
import "./person.scss";
//#endregion

//#region > Components
/**
 * @todo Add description
 */
class PersonPage extends React.Component {
  state = {};

  saveSettings = (state) => {
    this.props.saveSettings(state);
  };

  componentDidMount = () => {
    this._isMounted = true;

    const { match } = this.props;
    const username = match?.params?.username;

    if (username) {
      this.props.getPerson(username);
    }
  };

  componentDidUpdate() {}

  componentWillUnmount() {
    this._isMounted = false;
  }

  componentWillReceiveProps = (nextProps) => {
    //#TSID10
    //console.log("PROFILE PAGE NEXT PROPS", nextProps);
  };

  render() {
    const { fetchedPerson } = this.props;

    if (!fetchedPerson) {
      return (
        <div className="text-center my-5 py-5">
          <div className="spinner-grow text-success" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    } else if (fetchedPerson) {
      //#TSID11
      //console.dir("PROFILE PAGE RENDER SUCCESS", this.props.fetchedUser);

      return (
        <div id="profile">
          <MDBContainer className="py-5">
            <MDBRow>
              <MDBCol lg="3">
                <PersonInfoCard />
              </MDBCol>
              <MDBCol lg="9">
                <PersonTabs />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      );
    } else {
      return <p>Usecase not mapped</p>;
    }
  }
}
//#endregion

//#region > Redux Mapping
const mapStateToProps = (state) => ({
  loggedUser: state.user.user,
  fetchedPerson: state.person.fetchedPerson,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getPerson: (personName) => dispatch(getPerson(personName)),
  };
};
//#endregion

//#region > Exports
/**
 * Provides its connected component with the pieces of the data it needs from
 * the store, and the functions it can use to dispatch actions to the store.
 *
 * Got access to the history object’s properties and the closest
 * <Route>'s match.
 */
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PersonPage)
);
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Simon Prast
 */
