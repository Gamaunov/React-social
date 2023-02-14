import "./profile.css";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../topbar/Topbar";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/img/posts/post-6.jpg"
                alt="myPost"
              />
              <img
                className="profileUserImg"
                src="assets/img/person/1.jpg"
                alt="myAwesomeFoto"
              />
            </div>
          </div>
          <div className="profileInfo">
            <h4 className="profileInfoName">Pushkin Alex</h4>
            <span className="profileInfoDesc">Okey dokey</span>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar />
          </div>
        </div>
      </div>
    </>
  );
}
