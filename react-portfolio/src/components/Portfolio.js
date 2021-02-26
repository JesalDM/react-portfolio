import React from 'react';
import portfolioItems from '../../src/portfolioItems.json'
import 'bootstrap/dist/css/bootstrap.min.css';


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
            {portfolioItems.map(item =>(
                <div className="row projects">  
                    <div className="col-lg-6">
                        <div className="portfolio-item animated zoomIn">
                            <div className="card text-center" style={{width: 420}}>
                                <a href="portfolioItems.gifLink" target="_blank"><img src={portfolioItems.source} className="img-fluid" alt={portfolioItems.altText}/></a>
                                <div className="card-body">
                                    <h5>{portfolioItems.projectTitle}</h5>
                                    <p className="card-text">{portfolioItems.projectBody}</p>
                                    <a href="portfolioItems.liveLink" target="_blank" className="btn btn-custom portfolio-btn btn-sm">View Live</a>
                                    <a href="portfolioItems.codeLink" target="_blank" className="btn btn-custom portfolio-btn btn-sm">View Code</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
   )
}


export default portfolio;