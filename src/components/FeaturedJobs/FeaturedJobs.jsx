import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4)

    useEffect(() =>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    }, [])
 

    return (
      <div>
          <div className="text-center">
            <h2 className="text-5xl">Features Jobs: {jobs.length}</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex iste porro quos ratione, repudiandae aliquam.
            </p> 
        </div>

        <div className="grid grid-cols-2 gap-6 mt-10 mb-10 gap-y-14">
            {
                jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
            }
        </div>

        <div className={dataLength === jobs.length && 'hidden'}>
            <button onClick={() => setDataLength(jobs.length)} className="btn btn-primary">Show All</button>
        </div>
      
      </div>
    );
};

export default FeaturedJobs;