export default function InstaHeader(){
  return(
    <header className="navbar">
      <div className="container">
        <div className="logo">
          <ion-icon name="logo-instagram"></ion-icon>
          <div className="vertical-line"></div>
          <img src="/img/logo.png" />
        </div>

        <div className="logo-mobile">
          <ion-icon name="logo-instagram"></ion-icon>
        </div>

        <div className="instagram-mobile">
          <img src="/img/logo.png" />
        </div>

        <div className="search">
          <input type="text" placeholder="search" />
        </div>

        <div className="icons">
          <ion-icon name="paper-plane-outline"></ion-icon>
          <ion-icon name="compass-outline"></ion-icon>
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="person-outline"></ion-icon>
        </div>

        <div className="mobile-icons">
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
      </div>
    </header>
  );
}