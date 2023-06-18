const User = (props) => {
  const mapToProps = (state) => {
    return {
      user_id: state.userState,
      username: state.user,
    };
  };
};

export default User;
