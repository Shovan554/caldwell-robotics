import { FaLinkedin, FaGithub, FaInstagram, FaFilePdf } from "react-icons/fa";
import '../styles/member.css'; // Import the new CSS file

const MemberCard = (props) => {
  return (
    <div className="member-card-container">
      <div className="member-main-info">
        {/* Portfolio Link */}
        {props.portfolio ? (
          <a
            href={props.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="member-name"
          >
            {props.name}
          </a>
        ) : (
          <h2 className="member-name">{props.name}</h2>
        )}
        <h4 className="member-position">{props.position}</h4>
        <p className="member-info">{props.information}</p>

        {/* Social Media Links */}
        <div className="social-media-icons">
          {props.linkedinLink && (
            <a
              href={props.linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaLinkedin size={25} />
            </a>
          )}
          {props.githubLink && (
            <a
              href={props.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaGithub size={25} />
            </a>
          )}
          {props.instagramLink && (
            <a
              href={props.instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaInstagram size={25} />
            </a>
          )}
          {props.resumeLink && (
            <a
              href={props.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaFilePdf size={25} />
            </a>
          )}
        </div>
      </div>
      <div className="profile-image">
        <img
          className="profile-pic"
          src={props.imgSrc}
          alt={`${props.name}`}
        ></img>
      </div>
    </div>
  );
};

export default MemberCard;