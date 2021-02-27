import React from 'react';
import portfolioItems from '../../src/portfolioItems.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Portfolio.css'


function portfolio(){
    return(
    <div id="portfolio">
        <div className="container">
            <div className="row section-title">
                <div className="col-sm-9">  
                    <h2>portfolio</h2>
                </div>
                {/* Navigate to the home page link */}
                <div className="col-sm-3 pt-3 navigate-top">
                    <a href="#header">GO TO TOP</a>
                </div>
            </div>
            {/* div for displaying the projects */}
            <div className="row projects">  
                {portfolioItems.map(item =>(
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
                ))}
            </div>
        </div>
    </div>
   )
}


export default portfolio;