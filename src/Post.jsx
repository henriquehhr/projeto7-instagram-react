export default function Post(props){
  const {profilePicture, userName, postImage, firstLikeImage, firstLikeUser, likeCount} = props;
  return (
    <li className="post">
      <div className="top">
        <div className="user">
          <img src={profilePicture} />
          {userName}
        </div>
        <div className="options">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div className="post__content">
        <img src={postImage} />
      </div>

      <div className="fundo">
        <div className="options">
          <div>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div className="likes">
          <img src={firstLikeImage} />
          <div className="texto">
            Curtido por <strong>{firstLikeUser}</strong> e <strong>outras {likeCount} pessoas</strong>
          </div>
        </div>
      </div>
    </li>
  );
}