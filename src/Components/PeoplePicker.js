import React, { Component } from "react";
import { Col, Row, Form, FormGroup, Label, Input } from "reactstrap";
import { NavLink } from "react-router-dom";
import $ from "jquery";

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
  }
  componentDidMount() {
    initializePeoplePicker("peoplepicker", true, "People Only", 44);
  }

  render() {
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
                to="/ckeditor"
              >
                Submit
              </NavLink>
            </Col>
          </Row>
        </Form>
      </Row>
    );
  }
  saveinfo() {
    var usersEntered = $("#peoplepicker .ms-entity-resolved").text();
    console.log("user", usersEntered);
    var item = {
      __metadata: { type: "SP.Data.CkeditorListItem" },
      Title: "updated title",
    };
    console.log(JSON.stringify(item));

    $.ajax({
      url:
        "https://resembleae.sharepoint.com/sites/DMSDemo/_api/web/lists/GetByTitle('ckeditor')/items",
      type: "POST",
      contentType: "application/json;odata=verbose",
      data: JSON.stringify(item),
      headers: {
        Accept: "application/json;odata=verbose",
        "X-RequestDigest": $("#__REQUESTDIGEST").val(),
      },
      success: function (data) {},
      error: function (data) {
        console.log(data);
      },
    });
  }
}

export default PeoplePicker;
