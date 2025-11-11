import { NavLink } from "react-router";

const SidBer = () => {
  console.log(open);
  const links = (
    <>
      <div>
        <NavLink to="/dashbord/addcoruss">
          <button className="btn w-full">Add Course</button>
        </NavLink>
      </div>
      <div>
        <NavLink to="/dashbord/myaddcoruss">
          <button className="btn w-full">My Course Page</button>
        </NavLink>
      </div>
      <div>
        <NavLink to="/dashbord/enroll">
          <button className="btn w-full">My Enrolled Course Page</button>
        </NavLink>
      </div>
    </>
  );
  return <div className=" space-y-7">{links}</div>;
};

export default SidBer;
