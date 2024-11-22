/* eslint-disable react/prop-types */
const WelcomeMessage = ({ onGetPostsClick }) => {
  return (
    <center className="welcome-message">
      <h1>There is no post</h1>
      <button
        type="button"
        onClick={onGetPostsClick}
        className="btn btn-primary"
      >
        Get Post from server
      </button>
    </center>
  );
};

export default WelcomeMessage;
