import React from 'react'
import './CardJob.css'

export const CardJob = ({id,logo,company,recent,featured,position,postedAt, contract,location,role,level,languages,tools}) => {
  return (
    <div className={`card-job ${featured && 'featured'}`}>
        <img src={`./assets/${logo}`} alt={company} className="logo" />
        <div className="info-job">
            <div className="company-labels">
                <p>{company}</p>
                {recent && <span className='label new'>New!</span>}
                {featured && <span className='label l-featured'>Featured</span>}
            </div>
            <div className="title-job">{position}</div>
            <div className="more-info">
                <span className="date">{postedAt}</span>
                <p>.</p>
                <span className="contract">{contract}</span>
                <p>.</p>
                <span className="location">{location}</span>
            </div>
        </div>
        <div className="horizontal-line"></div>
        <div className="requierements">
            <span>{role}</span>
            <span>{level}</span>
            {
                languages.map(language=>(
                    <span key={id+language}>{language}</span>
                ))
            }
            {
                tools.map(tool=>(
                    <span key={id+tool}>{tool}</span>
                ))
            }
        </div>
    </div>
  )
}
