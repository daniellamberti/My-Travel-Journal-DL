import React from "react"

export default function Card(props) {
    return (
        <main className="card-layout">
            <img src={props.img} alt={props.destName}/>
            <div className="destination-info">
                <div className="location">
                    <img src="./maps-icon.jpg" className="maps-icon" alt="google maps icon" />
                    <p className="destination--country">{props.destCountry}</p>
                    <a href={props.destGoogleMaps} className='destination--google-maps'>
                        View on Google Maps
                    </a>
                </div>
                <h2 className="destination--name">{props.destName}</h2>
                <div className="destination--date"> 
                    <p className="startDate">{props.startDate} - </p>
                    <span className="endDate">{props.endDate}</span>
                </div>
                <p className="destination--description">{props.destDescription}</p>
            </div>
        </main>
    )
}

