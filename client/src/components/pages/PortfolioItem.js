import React from 'react';

function PortfolioItem({item}){
    return(
        <div key={item.projectTitle} className="col-lg-6">
            <div className="portfolio-item animated zoomIn">
                <div className="card text-center" style={{width: 420}}>
                    <a href={item.gifLink} target="_blank" rel="noreferrer"><img src={item.source} className="img-fluid" alt={item.altText}/></a>
                    <div className="card-body">
                        <h5>{item.projectTitle}</h5>
                        <p className="card-text">{item.projectBody}</p>
                        <a href={item.liveLink} target="_blank" rel="noreferrer" className="btn btn-custom portfolio-btn btn-sm">View Live</a>
                        <a href={item.codeLink} target="_blank" rel="noreferrer" className="btn btn-custom portfolio-btn btn-sm">View Code</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioItem;