import  Link  from "next/link";

const Profile = () => {

  return (
      <div className="Profile_Page">
        <div className="Top_Bar">
          <div className="cover_photo">
            {/* <img src={cover} alt="cover_photo"></img> */}
            <div className="logo">
              {/* <img src={logo} alt="logo" /> */}
            </div>
          </div>
          <div className="TwoButton">
            <span></span>
            <button >Movies</button>
            <button >Music</button>
          </div>
          <div className="alert alert-warning" role="alert">
            This functionality didn't work at this time!
          </div>
          <div className="Slider">
            <div className="MoviesStar">
            </div>
            <div className="MusicStar"></div>
          </div>
        </div>
      </div>
  );
};

export default Profile;
