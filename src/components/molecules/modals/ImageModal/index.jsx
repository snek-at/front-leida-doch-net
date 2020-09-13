//#region > Imports
//> React
// Contains all the functionality necessary to define React components
import React from "react";
//> Time management
import moment from "moment";
//> Redux
// Allows React components to read data, update data and dispatch actions
// from/to a Redux store.
import { connect } from "react-redux";
//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBIcon,
  MDBFormInline,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBAlert,
  MDBView,
  MDBMask,
} from "mdbreact";
//#endregion

//#region > Components
class ImageModal extends React.Component {
  render() {
    const { selectedPicture } = this.props;

    return (
      <>
        <MDBModal
          isOpen={true}
          toggle={this.props.toggle}
          size="lg"
          centered
          animation="left"
        >
          <MDBModalBody className="p-2 text-center">
            <MDBRow>
              <MDBCol lg="8">
                <MDBView>
                  <img src={selectedPicture.mediaLink} className="img-fluid" />
                  <MDBMask />
                </MDBView>
              </MDBCol>
              <MDBCol lg="4">
                <div>Content</div>
              </MDBCol>
            </MDBRow>
          </MDBModalBody>
        </MDBModal>
      </>
    );
  }
}
//#endregion

//#region > Redux Mapping
const mapStateToProps = (state) => ({
  //loggedUser: state.auth.loggedUser,
});

const mapDispatchToProps = (dispatch) => {
  return {};
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
export default connect(mapStateToProps, mapDispatchToProps)(ImageModal);
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Simon Prast
 */
