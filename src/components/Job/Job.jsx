import { BiLocationPlus } from "react-icons/bi";
import { FaDollarSign } from "react-icons/fa";
import { Link } from "react-router-dom";

const Job = ({job}) => {
    const {id, logo, job_title, company_name, job_type, salary, remote_or_onsite, location} = job;

    return (

        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={logo} alt="Shoes" /></figure>

        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
          <div>
            <button className="px-5 py-2 font-extrabold border rounded mr-4 border-[#7E90fE] text-[#7E90fE]">{remote_or_onsite}</button>
            <button className="px-5 py-2 font-extrabold border rounded mr-4 border-[#7E90fE] text-[#7E90fE]">{job_type}</button>
          </div>

          <div className="flex gap-4">
    <h2 className="flex items-center mr-2"><BiLocationPlus></BiLocationPlus> {location} </h2>
    <h2 className="flex items-center mr-2"> <FaDollarSign></FaDollarSign> {salary}</h2>
          </div>

          <div className="card-actions">
           <Link to={`/job/${id}`}>
           <button className="btn btn-primary">View Details</button>
           </Link>
          </div>
        </div>
      </div>
    );
};

export default Job;