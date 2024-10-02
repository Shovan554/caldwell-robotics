const MemberCard = (props) => {
  return (
    <div className="cardContainer relative w-[30rem] p-4">
      <div className="mainInfo bg-slate-100  shadow-xl rounded-md text-center px-[2rem] pt-[5rem] pb-[2rem] mb-[5rem]">
        <h2 className="name text-2xl font-bold">{props.name}</h2>
        <h4 className="position text-lg font-bold mt-1">{props.position}</h4>
        <p className="mt-[1rem]">{props.information}</p>
      </div>
      <div className="profileImage absolute top-[-3rem] left-[37%]">
        <img
          className="w-[7rem] rounded-full"
          src={props.imgSrc}
          alt={`${props.name}`}
        ></img>
      </div>
      <div className="socialMediaIcon"></div>
    </div>
  );
};

export default MemberCard;
