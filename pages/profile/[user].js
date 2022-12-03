import Image from "next/image";
import coverPhoto from "../asset/img/userCover.jpg";
import userLogo from "../asset/img/userLogo.jpg";

const Profile = () => {

  return (
      <div className="Profile_Page">
        <div className="Top_Bar">
          <div className="cover_photo">
            <Image src={coverPhoto} alt="cover_photo" />
            <div className="logo">
              <Image src={userLogo} alt="logo" />
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
