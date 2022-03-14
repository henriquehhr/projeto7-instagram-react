import Story from "./Story";

export default function Stories()  {
  const list = getStories();
  return (
      <section className="stories">
        {list.map(story => {
          return <Story
            key = {story.userName} 
            profilePicture = {story.profilePicture}
            userName = {story.userName}
          />
          })}
        <div className="arrow">
          <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
    </section>
  );
}

function getStories() {
  const list = [
    {
      profilePicture: "/img/9gag.svg",
      userName: "9gag"
    },
    {
      profilePicture: "/img/meowed.svg",
      userName: "meowed"
    },
    {
      profilePicture: "/img/barked.svg",
      userName: "barked"
    },
    {
      profilePicture: "/img/nathanwpylestrangeplanet.svg",
      userName: "nathanwpylestrangeplanet"
    },
    {
      profilePicture: "/img/wawawicomics.svg",
      userName: "wawawicomics"
    },
    {
      profilePicture: "/img/respondeai.svg",
      userName: "respondeai"
    },
    {
      profilePicture: "/img/filomoderna.svg",
      userName: "filomoderna"
    },
    {
      profilePicture: "/img/memeriagourmet.svg",
      userName: "memeriagourmet"
    },
  ];

  return list;
}