import Post from "./Post";

export default function Feed() {
  const list = getFedd();
  return (
    <section className="feed">
      <ul className="posts">
        {
          list.map(post => {
            return <Post
              key = {JSON.stringify(post)}
              profilePicture={post.profilePicture}
              userName={post.userName}
              postImage={post.postImage}
              firstLikeImage={post.firstLikeImage}
              firstLikeUser={post.firstLikeUser}
              likeCount={post.likeCount}
            />
          })
        }
      </ul>
    </section>
  );
}

function getFedd() {
  const list = [
    {
      profilePicture: "/img/meowed.svg",
      userName: "meowed",
      postImage: "/img/gato-telefone.svg",
      firstLikeImage: "/img/respondeai.svg",
      firstLikeUser: "respondeai",
      likeCount: 101.523
    },
    {
      profilePicture: "/img/barked.svg",
      userName: "barked",
      postImage: "/img/dog.svg",
      firstLikeImage: "/img/adorable_animals.svg",
      firstLikeUser: "adorable_animals",
      likeCount: 99.159
    }
  ];
  return list;
}