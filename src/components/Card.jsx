import React from 'react'
import Save from '../assets/save.svg'

const Card = (props) => {
    return (
        <div className="card">

            <div className="top">
                <div className="profile"><img src={props.logo} alt="" /></div>
                <div className="save">
                    <p>Save</p>
                    <img src={Save} alt="Save" />
                </div>
            </div>

            <div className="main">
                <h3 className='main1'>{props.name} &nbsp;<span>{props.time}</span></h3>
                <div className="role">{props.role}</div>
                <div className="labels">
                    <div>{props.tag1}</div>
                    <div>{props.tag2}</div>
                    <div>{props.tag3}</div>
                </div>
            </div>

            <div className="bottom">
                <div className="price">
                    <div className='p1'>{props.pay}</div>
                    <div className='p2'>{props.location}</div>
                </div>

                <button>Apply Now</button>
            </div>



        </div>
    )
}

export default Card
