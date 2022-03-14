import FollowersSugestionsList from "./FollowersSugestionsList";

export default function Sidebar(props) {
  const {profilePicture, userName, name} = props;
  return (
    <aside className="sidebar">
      <div className="user">
        <img src={profilePicture} />
        <div className="text">
          <strong>{userName}</strong>
          {name}
        </div>
      </div>

      <FollowersSugestionsList />

      <div className="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div className="copyright">
        © 2022 INSTAGRAM DO HENRIQUE
      </div>
    </aside>
  );
}