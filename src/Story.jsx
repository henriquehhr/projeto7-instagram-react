export default function Story(props) {
  const {profilePicture, userName} = props;
  return (
    <div className="story">
      <div className="image">
        <img src={profilePicture} />
      </div>
      <div className="user">
        {userName}
      </div>
    </div>
  );
}