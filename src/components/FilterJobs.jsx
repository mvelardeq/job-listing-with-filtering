import React from 'react'
import './FilterJobs.css'

export const FilterJobs = ({filterJobs,setFilterJobs}) => {

    const selectFilter = (e)=>{
        const filterItem = e.target.closest('.filter-item').querySelector('span').textContent
        if(filterJobs.includes(filterItem)){
            setFilterJobs(currentState =>{
                return currentState.filter(el=>{
                    return el!=filterItem
                })
            })
            e.target.closest('.filter-item').classList.toggle('active')
            return
        }
        setFilterJobs(filterJobs=>([...filterJobs,filterItem]))
        e.target.closest('.filter-item').classList.toggle('active')
    }

    const onClearFilter = (e)=>{
        setFilterJobs([])
        e.target.closest('.filter-jobs').querySelectorAll('.filter-item.active').forEach(el=>el.classList.remove('active'))
    }

  return (
    <>
        <div className="filter-jobs">
            <div className="list-filter">
                <div className="filter-item" onClick={selectFilter}>
                    <span>Frontend</span>
                    <img src="./assets/images/icon-remove.svg" alt="icon-remove" />
                </div>
                <div className="filter-item" onClick={selectFilter}>
                    <span>CSS</span>
                    <img src="./assets/images/icon-remove.svg" alt="icon-remove" />
                </div>
                <div className="filter-item" onClick={selectFilter}>
                    <span>JavaScript</span>
                    <img src="./assets/images/icon-remove.svg" alt="icon-remove" />
                </div>
            </div>
            <div className="clear-filter" onClick={onClearFilter}>
                <span>Clear</span>
            </div>
        </div>
    </>
  )
}
