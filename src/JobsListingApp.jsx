import './JobsListingApp.css'
import { Main } from './components/Main'
import { FilterJobs } from './components/FilterJobs'
import { useEffect, useState } from 'react'

export const JobsListingApp = () => {

  const [filterJobs, setFilterJobs] = useState([])

  const [jobs, setJobs] = useState([])
  const getData = async()=>{
    const res = await fetch('./data/data.json')
    const json = await res.json()
    setJobs(json)
  }

  useEffect(() => {
    getData()
  }, [])
  return (
    <>
        <header className="header">
            <img src="./assets/images/bg-header-desktop.svg" alt="" />
            <FilterJobs 
              filterJobs={filterJobs}
              setFilterJobs={setFilterJobs}
            />
        </header>

        <Main 
          jobs={jobs}
          filterJobs={filterJobs}
        />
    </>
  )
}
