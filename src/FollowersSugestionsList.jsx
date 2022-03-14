import FollowerSugestion from "./FollowerSugestion";

export default function FollowersSugestionsList() {
  const list = getFollowersSugestionsList();
  return (
    <ul className="sugestions">
      <div className="title">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
      {
        list.map(sugestion => {
          return <FollowerSugestion
            key = {sugestion.userName}
            profilePicture={sugestion.profilePicture}
            userName={sugestion.userName}
            reason={sugestion.reason}
          />
        })
      }   
    </ul>
  );
}

function getFollowersSugestionsList() {
  const list = [
    {
      profilePicture: "/img/bad.vibes.memes.svg",
      userName: "bad.vibes.memes",
      reason: "Segue você"
    },
    {
      profilePicture: "/img/chibirdart.svg",
      userName: "chibirdart",
      reason: "Segue você"
    },
    {
      profilePicture: "/img/razoesparaacreditar.svg",
      userName: "razoesparaacreditar",
      reason: "Novo no Instagram"
    },
    {
      profilePicture: "/img/adorable_animals.svg",
      userName: "adorable_animals",
      reason: "Segue você"
    },
    {
      profilePicture: "/img/smallcutecats.svg",
      userName: "smallcutecats",
      reason: "Segue você"
    }
  ];
  return list;
}