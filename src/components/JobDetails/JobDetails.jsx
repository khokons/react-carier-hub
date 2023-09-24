import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utilities/LocalStorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const intId = parseInt(id);
    const job = jobs.find(job => job.id === intId)
    console.log(job);

    const handleApply = () => {
        saveJobApplication(intId);
toast('Apply SuccessFull');
    }

    return (
        <div>
            
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border border-black md:col-span-3">
                    <h2>Detils coming here</h2>
                    <h2>Job Details of: {job.job_title}</h2>
                </div>

                <div className="border border-black">
                    <h2>Side things</h2>
                    <button onClick={handleApply} className="btn btn-primary w-full">Apply Now</button>
                </div>
            </div>

             <ToastContainer />
        </div>
    );
};

export default JobDetails;