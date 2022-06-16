import React, { useEffect, useState } from 'react'
import { CardJob } from './CardJob'

export const Main = ({jobs,filterJobs}) => {
  const jobsFiltered = []
  jobs.map(job=>{
    let check = false,
    oth=true
    filterJobs.map(el=>{
      if(Object.values(job).includes(el) || job.languages.includes(el) || job.tools.includes(el)){
        check=true
      }else{
        check=false
        oth = false
      }
    })
    return check && oth && jobsFiltered.push(job)
  })
  
  return (
    <main className='main'>
      {
        (filterJobs.length==0 ? jobs : jobsFiltered).map(job=>(
          <CardJob
            key={job.id}
            recent = {job.new} 
            {...job}
          />
        ))
      }
    </main>
  )
}
