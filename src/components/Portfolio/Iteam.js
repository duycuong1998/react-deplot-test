import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
class Iteam extends Component {
    constructor(props){
        super(props);
      }
    changeUrl = (str) => {
        str = str.toLowerCase();     

        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');
        str = str.replace(/([^0-9a-z-\s])/g, '');
        str = str.replace(/(\s+)/g, '-');
        str = str.replace(/^-+/g, '');
        str = str.replace(/-+$/g, '');
        
        return str;
    }
    render() {
        return (
        <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
            <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal5">
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <Link to={'/portfolio/'+this.props.id+'.'+this.changeUrl(this.props.title)} className="portfolio-item-caption-content text-center text-white"> <div ><i className="fas fa-plus fa-3x" /></div></Link>
                </div>
                    <img className="img-fluid" src={this.props.img} alt="..." />
            </div>
            <p>{this.props.title} / {this.props.id}</p>
        </div>
        );
    }
}

export default Iteam;