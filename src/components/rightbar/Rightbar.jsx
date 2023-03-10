import { Users } from "../../dummyData";
import Online from "../online/Online";
import "./rightbar.css";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="birthdayImg"
            viewBox="0 0 16 16"
          >
            <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zM1 4v2h6V4H1zm8 0v2h6V4H9zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5V7zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5H7z" />
          </svg>
          <span className="birthdayText">
            <b>Esenin Sergey </b> and <b>three other friends</b> have a birthday
            today.
          </span>
        </div>
        <img className="rightbarAd" src="/assets/img/stadio.jpg" alt="post" />
        <h4 className="rightbarTitle">Online friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Mexico</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Barselona</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src="assets/img/person/2.jpg"
              alt="person"
            />
            <span className="rightbarFollowingName">Lermontov Mikhail</span>
          </div>
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src="assets/img/person/3.jpg"
              alt="person"
            />
            <span className="rightbarFollowingName">Lermontov Mikhail</span>
          </div>
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src="assets/img/person/4.jpg"
              alt="person"
            />
            <span className="rightbarFollowingName">Lermontov Mikhail</span>
          </div>
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src="assets/img/person/5.jpg"
              alt="person"
            />
            <span className="rightbarFollowingName">Lermontov Mikhail</span>
          </div>
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src="assets/img/person/6.jpg"
              alt="person"
            />
            <span className="rightbarFollowingName">Lermontov Mikhail</span>
          </div>
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src="assets/img/person/7.jpg"
              alt="person"
            />
            <span className="rightbarFollowingName">Lermontov Mikhail</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
