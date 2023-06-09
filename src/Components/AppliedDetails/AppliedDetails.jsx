import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDollar, faLocationDot} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const AppliedDetails = ({job}) => {
    const {companyName,jobTitle,jobType,job_place,location,salaryRange,companyLogo,id}= job;
    return (
        <div className='grid grid-cols-12  gap-2 items-center justify-center bg-slate-100  rounded-lg mx-32 my-4 py-10 border-2 '>
            <div className='col-span-4  ml-12 ps-36'> <img className='w-8/12 h-24  border-2 border-gray-500 rounded-md ' src={companyLogo} alt="logo" /></div>
 
      <div className='col-span-5 mr-10'>
      <p className='text-xl font-bold'>{jobTitle}</p>
        <p className='text-sm py-2'>{companyName}</p>
        <div className='py-2'>
            <button className='border-2 text-xs py-1 px-2 mr-1 rounded-md text-blue-900 border-blue-300'>{job_place}</button>
            <button className='border-2 text-xs py-1 px-2 mr-1 rounded-md text-blue-900 border-blue-300'>{jobType}</button>

        </div>
       <div className='flex py-2'>
       <p className='pr-5 text-sm'> <FontAwesomeIcon className='pr-1' icon={faLocationDot} />{location}</p>
        <p className='pr-3 text-sm'><FontAwesomeIcon className='pr-1' icon={faCommentDollar} />Salary: {salaryRange}</p>
       </div>
      </div>
      <div className='col-span-3'><Link to={`/jobDetails/${id}`}> <button onClick={()=>showDetails(jobinfo)} className='border-2 bg-blue-700 text-white px-3 py-2 rounded-lg text-sm'>View Details</button></Link></div>
       
            
        </div>
    );
};

export default AppliedDetails;