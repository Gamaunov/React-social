import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import "./topbar.css";


function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Reactivity</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon"/>
          <input
            className="searchInput"
            placeholder="it`s gonna be legen... wait for it..."
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbatLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">3</span>
          </div>
        </div>
        <img className="topbarImg" src='/assets/img/person/1.jpg' alt="logo" />
      </div>
    </div>
  );
}

export default Topbar;
