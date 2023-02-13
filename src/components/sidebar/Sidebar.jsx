import "./sidebar.css";
import {
  Bookmark,
  Event,
  HelpOutline,
  RssFeed,
  School,
  WorkOutline,
} from "@material-ui/icons";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show more</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendsList">
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/img/person/2.jpg"
              alt="person"
            />
            <span className="sidebarFriendName">Pushkin Alex</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/img/person/3.jpg"
              alt="person"
            />
            <span className="sidebarFriendName">Grigoriev Apollon</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/img/person/4.jpg"
              alt="person"
            />
            <span className="sidebarFriendName">Pushkin Alex</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/img/person/5.jpg"
              alt="person"
            />
            <span className="sidebarFriendName">Fet Afonasiy</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/img/person/6.jpg"
              alt="person"
            />
            <span className="sidebarFriendName">Radishev Alexandr</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/img/person/7.jpg"
              alt="person"
            />
            <span className="sidebarFriendName">Krylov Ivan</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/img/person/8.jpg"
              alt="person"
            />
            <span className="sidebarFriendName">Karamzin Nicolay</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/img/person/9.jpg"
              alt="person"
            />
            <span className="sidebarFriendName">Gogol Nikolas</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/img/person/10.jpg"
              alt="person"
            />
            <span className="sidebarFriendName">Nekrasov Nikola</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/img/person/10.jpg"
              alt="person"
            />
            <span className="sidebarFriendName">Lermontov Mike</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
