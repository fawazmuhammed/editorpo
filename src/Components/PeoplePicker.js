import React, { Component } from "react";
import GetCurrentUser from "./GetCurrentLoginUser";
import { Col, Row, Form } from "reactstrap";
import { NavLink } from "react-router-dom";
import GetDigest from "./GetDigest";
import CreatePO from "./CreateListItem";

function initializePeoplePicker(
  peoplePickerElementId,
  AllowMultipleValues,
  PeopleorGroup,
  GroupID
) {
  // Create a schema to store picker properties, and set the properties.
  var schema = {};
  schema["SearchPrincipalSource"] = 15;
  schema["ResolvePrincipalSource"] = 15;
  schema["MaximumEntitySuggestions"] = 50;
  schema["Width"] = "280px";
  schema["AllowMultipleValues"] = AllowMultipleValues;
  if (PeopleorGroup === "PeopleOnly") schema["PrincipalAccountType"] = "User";
  else schema["PrincipalAccountType"] = "User,DL,SecGroup,SPGroup";
  if (GroupID > 0) {
    schema["SharePointGroupID"] = GroupID;
  }
  // Render and initialize the picker.
  // Pass the ID of the DOM element that contains the picker, an array of initial
  // PickerEntity objects to set the picker value, and a schema that defines
  // picker properties.
  //console.log(this)
  window.SPClientPeoplePicker_InitStandaloneControlWrapper(
    peoplePickerElementId,
    null,
    schema
  );
}

export class PeoplePicker extends Component {
  constructor(props) {
    super();
    this.state = {
      CurrentUser: "",
      CurrentUserID: "",
    };
  }
  componentDidMount() {
    initializePeoplePicker("peoplepicker", true, "People Only", 44);
    this.RetrieveUserData();
  }
  RetrieveUserData = () => {
    GetCurrentUser().then((u) =>
      this.setState({ CurrentUserID: u.Id, CurrentUser: u.Title })
    );
  };
  render() {
    var dt = new Date();
    var year2dig = ("0" + dt.getFullYear()).slice(-2);
    var mon2dig = ("0" + (dt.getMonth() + 1)).slice(-2).toString();
    var date2dig = ("0" + dt.getDate()).slice(-2);
    var hrs2dig = ("0" + dt.getHours()).slice(-2);
    var min2dig = ("0" + dt.getMinutes()).slice(-2);
    var sec2dig = ("0" + dt.getSeconds()).slice(-2);

    let channelid =
      "/ckeditor?" +
      year2dig +
      mon2dig +
      date2dig +
      hrs2dig +
      min2dig +
      sec2dig;

    return (
      <Row className="container emp-container">
        <Form>
          <Row form>
            <Col md={9}>
              <div id="peoplepicker"></div>
            </Col>
            <Col md={3}>
              <NavLink
                className="btn btn-primary"
                onClick={this.saveinfo}
                to={channelid}
              >
                Submit
              </NavLink>
            </Col>
          </Row>
        </Form>
      </Row>
    );
  }
  saveinfo = (e) => {
    console.log("save info");

    var userDetails = {
      id: this.state.CurrentUserID,
      userName: this.state.CurrentUser,
    };
    var dt = new Date();
    var year2dig = ("0" + dt.getFullYear()).slice(-2);
    var mon2dig = ("0" + (dt.getMonth() + 1)).slice(-2).toString();
    var date2dig = ("0" + dt.getDate()).slice(-2);
    var hrs2dig = ("0" + dt.getHours()).slice(-2);
    var min2dig = ("0" + dt.getMinutes()).slice(-2);
    var sec2dig = ("0" + dt.getSeconds()).slice(-2);
    let channelid = year2dig + mon2dig + date2dig + hrs2dig + min2dig + sec2dig;
    let POData = {
      Title: channelid,
      users: JSON.stringify(userDetails),
    };

    GetDigest().then((d) => CreatePO("ckeditor", POData, d).then());
  };
}

export default PeoplePicker;
