import reactDom from "react-dom";
import InstaHeader from "./InstaHeader";
import InstaFooter from "./InstaFooter";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Stories from "./Stories";

function App() {
  const {profilePicture, userName, name} = getUser();
  return (
    < >
      <InstaHeader />
      <div className="content">
        <main>
          <Stories />
          <Feed />
        </main>
        <Sidebar
          profilePicture={profilePicture} 
          userName={userName}
          name={name}
        />
      </div>
      <InstaFooter />
    </>
  );
}

function getUser(){
  //get user from API, Database 
  return {
    profilePicture: "/img/catanacomics.svg",
    userName: "catanacomics",
    name: "Catana"
  };
}

reactDom.render(<App />, document.querySelector(".root"));