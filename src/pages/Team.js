import MemberCard from "../components/MemberCard";
import { FaLinkedin, FaGithub } from "react-icons/fa6";

const Team = () => {
  const executiveMembers = {
    advisor: {
      name: "Dr. Vlad Veksler",
      position: "Faculty Advisor",
      information:
        "Dr. Veksler is an Assistant Professor of Computer Science at Caldwell University. His research and teaching focuses on all topics where there is interplay between humans and machines, including Artificial Intelligence, UI/UX , Human-Computer Interaction, and many more.",
      imgSrc: "./Dr. Veksler.png",
      linkedinLink: "https://linkedin.com",
      githubLink: "https://github.com",
    },

    one: {
      name: "Anish Pandey",
      position: "President",
      information:
        "Anish Pandey has been the driving force behind the annual Robotics Competition, the development of the Caldwell Makerspace, and the growth of the engineering presence at Caldwell University. His interests span app development, robotics, 3D drafting, ML, and Computer Vision.",
      imgSrc: "./anish.jpg",
      linkedinLink: "https://linkedin.com",
      githubLink: "https://github.com",
    },
    two: {
      name: "Shovan Raut",
      position: "Vice-President",
      information:
        "Shovan Raut is a Research Assistant at CogAI. Shovan is driven by a desire to innovate and make significant contributions in the field of technology. He looks forward to working on innovative projects, mentoring fellow members, and contributing to advancements in robotics and machine learning.",
      imgSrc: "./shovan.jpg",
      linkedinLink: "https://www.linkedin.com/in/shovan-raut-81537b18a/",
      githubLink: "https://github.com/Shovan554",
    },
    three: {
      name: "Saugat Subedi",
      position: "Public Relations Officer",
      information:
        "Saugat Subedi serves as the Public Relations officer for Caldwell Robotics, holding positions as Chief of Staff in the Student Government Association (SGA) and Student Ambassador for Caldwell Undergraduate Admissions. Passionate about robotics, Subedi acts as bridge between students and administration.",
      imgSrc: "./SAUGAT_SUBEDI.jpg",
      linkedinLink: "https://linkedin.com",
      githubLink: "https://github.com",
    },
    four: {
      name: "Saugat Timilsina",
      position: "Projects Manager",
      information:
        "Saugat is interested in machine learning and robotics, particularly in how these technologies can be applied to solve real-world problems. He is currently focused on expanding his robotics knowledge to other STEM major students at Caldwell University. In addition, he enjoys outdoor games, reading science fiction, and volunteering.",
      imgSrc: "./Saugat Timilsina.jpg",
      linkedinLink: "https://linkedin.com",
      githubLink: "https://github.com",
    },
    five: {
      name: "Dikshya Giri",
      position: "Chief of Logistics and Resources",
      information:
        "Dikshya is a rising sophomore at Caldwell University, majoring in Computer Science. She is the co-founder and serves as the Chief of Logistics and resources for Caldwell Robotics. With the unique fusion of technology and art, she is driven to innovate, contribute and collaborate through Caldwell Robotics, transforming abstract ideas into functional creations.",
      imgSrc: "./Dikshya.jpg",
      linkedinLink: "https://linkedin.com",
      githubLink: "https://github.com",
    },
    six: {
      name: "Dibas Dauliya",
      position: "IT",
      information:
        "Dibas serves as the Vice President of Marketing and Communications in the Student Government Association (SGA). Additionally, he is an Undergraduate Research Assistant at the icQR/CogAI lab. His unique skills and geniuses has always been a part for the success of every project at Caldwell Robotics.",
      imgSrc: "./Dibas.jpg",
      linkedinLink: "https://linkedin.com",
      githubLink: "https://github.com",
    },
    seven: {
      name: "Narayan Khanal",
      position: "IT Specialist",
      information:
        "Narayan Khanal is a junior majoring in Computer Science with a passion for building interactive and responsive websites. As an aspiring web developer and software engineer, he is eager to contribute to Caldwell Robotics, where he can further deepen his knowledge and skills.",
      imgSrc: "./narayan.jpg",
      linkedinLink: "https://www.linkedin.com/in/narayankhanal/",
      githubLink: "https://github.com/Nkhanal2002",
    },
    eight: {
      name: "Krenjila Sharma",
      position: "Secretary",
      information:
        "Krenjila Sharma is the Lab Manager and Research Assistant for the C-STEM laboratories. With a deep passion for Data Science Krenjila is dedicated to fostering an innovative and collaborative environment. Her commitment to excellence and enthusiasm for cutting-edge research drives her work.",
      imgSrc: "./krenjila.jpg",
      linkedinLink: "https://linkedin.com",
      githubLink: "https://github.com",
    },
    nine: {
      name: "Yubika Acharya",
      position: "Treasurer",
      information:
        "Yubika serves as the club treasurer for Caldwell Robotics. Majoring in Computer Science and Financial Economics, she combines her passion for robotics with a keen interest in financial management, making this role a perfect fit.",
      imgSrc: "./Yubika.jpg",
      linkedinLink: "https://linkedin.com",
      githubLink: "https://github.com",
    },
  };
  return (
    <main className="main-container">
      <div className="sub-header-one h-[30vh] sm:h-[40vh] flex flex-col items-center justify-center bg-gradient-to-r from-gray-700 to-slate-700 text-white">
        <h1 className="sm:text-[3rem] text-[1.7rem] font-extrabold">
          <span className="text-red-600 mr-4 uppercase">Robotics</span>
          TEAM
        </h1>
      </div>
      <div className="sub-header-two text-center bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-[2rem] px-2">
        <h2 className=" text-xl sm:text-[2rem] font-extrabold uppercase">
          Executive and general Members
        </h2>
      </div>
      <div className="members-card flex justify-center items-center flex-wrap mt-[5rem]">
        <MemberCard
          name={executiveMembers.one.name}
          position={executiveMembers.one.position}
          information={executiveMembers.one.information}
          imgSrc={executiveMembers.one.imgSrc}
          linkedinLink={executiveMembers.one.linkedinLink}
          githubLink={executiveMembers.one.githubLink}
        />
        <MemberCard
          name={executiveMembers.two.name}
          position={executiveMembers.two.position}
          information={executiveMembers.two.information}
          imgSrc={executiveMembers.two.imgSrc}
          linkedinLink={executiveMembers.two.linkedinLink}
          githubLink={executiveMembers.two.githubLink}
        />
        <MemberCard
          name={executiveMembers.three.name}
          position={executiveMembers.three.position}
          information={executiveMembers.three.information}
          imgSrc={executiveMembers.three.imgSrc}
          linkedinLink={executiveMembers.three.linkedinLink}
          githubLink={executiveMembers.three.githubLink}
        />
        <MemberCard
          name={executiveMembers.four.name}
          position={executiveMembers.four.position}
          information={executiveMembers.four.information}
          imgSrc={executiveMembers.four.imgSrc}
          linkedinLink={executiveMembers.four.linkedinLink}
          githubLink={executiveMembers.four.githubLink}
        />
        <MemberCard
          name={executiveMembers.five.name}
          position={executiveMembers.five.position}
          information={executiveMembers.five.information}
          imgSrc={executiveMembers.five.imgSrc}
          linkedinLink={executiveMembers.five.linkedinLink}
          githubLink={executiveMembers.five.githubLink}
        />
        <MemberCard
          name={executiveMembers.six.name}
          position={executiveMembers.six.position}
          information={executiveMembers.six.information}
          imgSrc={executiveMembers.six.imgSrc}
          linkedinLink={executiveMembers.six.linkedinLink}
          githubLink={executiveMembers.six.githubLink}
        />
        <MemberCard
          name={executiveMembers.seven.name}
          position={executiveMembers.seven.position}
          information={executiveMembers.seven.information}
          imgSrc={executiveMembers.seven.imgSrc}
          linkedinLink={executiveMembers.seven.linkedinLink}
          githubLink={executiveMembers.seven.githubLink}
        />
        <MemberCard
          name={executiveMembers.eight.name}
          position={executiveMembers.eight.position}
          information={executiveMembers.eight.information}
          imgSrc={executiveMembers.eight.imgSrc}
          linkedinLink={executiveMembers.eight.linkedinLink}
          githubLink={executiveMembers.eight.githubLink}
        />
        <MemberCard
          name={executiveMembers.nine.name}
          position={executiveMembers.nine.position}
          information={executiveMembers.nine.information}
          imgSrc={executiveMembers.nine.imgSrc}
          linkedinLink={executiveMembers.nine.linkedinLink}
          githubLink={executiveMembers.nine.githubLink}
        />
      </div>
      <div className="sub-header-three text-center bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-[1rem]">
        <h2 className=" text-xl  sm:text-[2rem] font-extrabold uppercase">
          Our Advisor
        </h2>
      </div>
      <div className="advisor-container flex justify-center items-center mt-[5rem]">
        <MemberCard
          name={executiveMembers.advisor.name}
          position={executiveMembers.advisor.position}
          information={executiveMembers.advisor.information}
          imgSrc={executiveMembers.advisor.imgSrc}
          linkedinLink={executiveMembers.advisor.linkedinLink}
          githubLink={executiveMembers.advisor.githubLink}
        />
      </div>
      <div className="sub-header-four text-center bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-[1rem]">
        <h2 className="text-xl  sm:text-[2rem] font-extrabold uppercase">
          Website Developers
        </h2>
      </div>
      <div className="website-developers flex justify-center items-center mx-auto space-x-10 sm:flex sm:justify-center sm:items-center mt-10 w-[50%] sm:space-x-[5rem] sm:mx-auto p-4">
        <section className="flex flex-col justify-center items-center">
          <img
            src="./shovan.jpg"
            alt="shovan"
            className="w-[7rem] rounded-full "
          ></img>
          <h2 className="sm:text-xl font-bold  mt-1">Shovan Raut</h2>
          <div className="socialIcons flex justify-center space-x-3 mt-2">
            <a
              href="https://www.linkedin.com/in/shovan-raut-81537b18a/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <div className="w-[20px] sm:w-[25px]">
                <FaLinkedin className=" h-full w-full" color="#0e76a8" />
              </div>
            </a>
            <a
              href="https://github.com/Shovan554"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <div className="w-[20px] sm:w-[25px]">
                <FaGithub className=" h-full w-full" color="black" />
              </div>
            </a>
          </div>
        </section>
        <section className="flex flex-col justify-center items-center">
          <img
            src="./narayan.jpg"
            alt="narayan"
            className="w-[7rem] rounded-full"
          ></img>
          <h2 className="sm:text-xl font-bold mt-1">Narayan Khanal</h2>
          <div className="socialIcons flex justify-center space-x-3 mt-2">
            <a
              href="https://www.linkedin.com/in/narayankhanal/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <div className="w-[20px] sm:w-[25px]">
                <FaLinkedin className=" h-full w-full" color="#0e76a8" />
              </div>
            </a>
            <a
              href="https://github.com/Nkhanal2002"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <div className="w-[20px] sm:w-[25px]">
                <FaGithub className=" h-full w-full" color="black" />
              </div>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Team;
