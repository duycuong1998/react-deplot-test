import React, { Component } from 'react';
import data from '../Portfolio/data.json'
import Iteam from '../Portfolio/Iteam';

class Portfolio extends Component {
    render() {
        return (
            <div>
                {/* Portfolio Section*/}
                <section className="page-section portfolio" id="portfolio">
                <div className="container">
                    {/* Portfolio Section Heading*/}
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
                    {/* Icon Divider*/}
                    <div className="divider-custom">
                    <div className="divider-custom-line" />
                    <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                    <div className="divider-custom-line" />
                    </div>
                    {/* Portfolio Grid Items*/}
                    <div className="row justify-content-center">
                    {/* item */}
                    {data.map((value, keyId) => (
                        <Iteam img={value.img }  key={value.id } title={value.title } id={value.id } ></Iteam>
                    ))}
                    </div>
                </div>
                </section>  
            </div>  
        );
    }
}

export default Portfolio;