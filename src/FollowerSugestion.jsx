export default function FollowerSugestion(props) {
  const {profilePicture, userName, reason} = props;
  return (
    <li className="sugestion">
      <div className="user">
        <img src={profilePicture} />
        <div className="text">
          <div className="nome">{userName}</div>
          <div className="razao">{reason}</div>
        </div>
      </div>

      <div className="follow">Seguir</div>
    </li>
  );    
}