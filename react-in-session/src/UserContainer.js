import React from "react";
import { connect } from "react-redux";
const UserContainer = (props) => {
  return <div>User state management API.</div>;
};

const mapStateToProps = (state, ownProps) => {
  const userState = ownProps.user ? state.user.user_id : state.user.name;
};
export default connect(mapStateToProps)(UserContainer);
