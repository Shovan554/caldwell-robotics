import { FaLinkedin, FaGithub } from "react-icons/fa6";

const MemberCard = (props) => {
  return (
    <div className="cardContainer relative w-[30rem] p-4 hover:scale-105 transition-all duration-200 ease-in-out">
      <div className="mainInfo bg-slate-100  shadow-xl rounded-md text-center px-[2rem] pt-[5rem] pb-[2rem] mb-[5rem]">
        <h2 className="name text-2xl font-bold">{props.name}</h2>
        <h4 className="position text-lg font-bold mt-1">{props.position}</h4>
        <p className="mt-[1rem]">{props.information}</p>
        <div className="socialMediaIcons flex justify-center items-center space-x-4 mt-[2rem]">
          <a
            href={props.linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <FaLinkedin size={25} color="#0e76a8" />
          </a>
          <a
            href={props.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <FaGithub size={25} color="black" />
          </a>
        </div>
      </div>
      <div className="profileImage absolute top-[-3rem] left-[37%]">
        <img
          className="w-[7rem] rounded-full"
          src={props.imgSrc}
          alt={`${props.name}`}
        ></img>
      </div>
    </div>
  );
};

export default MemberCard;
