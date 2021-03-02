import React from 'react';
import portfolioItems from '../../../src/portfolioItems.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Portfolio.css'
import PortfolioItem from './PortfolioItem';

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
                    <a href="/">GO TO HOME</a>
                </div>
            </div>
            {/* div for displaying the projects */}
            <div className="row projects">  
                {portfolioItems.map(item =>(
                    <PortfolioItem item={item}/>
                ))}
            </div>
        </div>
    </div>
   )
}

export default portfolio;