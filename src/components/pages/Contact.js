import React, { Component } from 'react';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.input = React.createRef();
      }
    
      handleSubmit(event) {
        console.log(this.setState.email);

       
        event.preventDefault();
      }
      handleChange (event){
        
        const target = event.target;
        const value = target.value;
        const name = target.name;
        

        this.setState({
            [name]: value
          });
        
          console.log(this.state);
        

      }
    

    render() {
        return (
            <div>
                {/* Contact Section*/}
                <section className="page-section" id="contact">
                <div className="container">
                    {/* Contact Section Heading*/}
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
                    {/* Icon Divider*/}
                    <div className="divider-custom">
                    <div className="divider-custom-line" />
                    <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                    <div className="divider-custom-line" />
                    </div>
                    {/* Contact Section Form*/}
                    <div className="row justify-content-center">
                    <div className="col-lg-8 col-xl-7">
                        <form  onSubmit={this.handleSubmit}>
                            {/* Name input*/}
                            <div className="form-floating mb-3">
                                <input className="form-control" id="name" type="text" placeholder="Enter your name..." name="input-name" ref={this.input} onChange={(event) => {this.handleChange(event)}}/>
                                <label htmlFor="name">Full name</label>
                                <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                            </div>
                            {/* Email address input*/}
                            <div className="form-floating mb-3">
                                <input name="email" className="form-control" id="email" onChange={(event) => {this.handleChange(event)}}  />
                                <label htmlFor="email">Email address</label>
                                <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                            </div>

                            <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                            {/* Submit Button*/}
                            <button className="btn btn-primary btn-xl" id="submitButton" type="submit">Send</button>
                        </form>
                    </div>
                    </div>
                </div>
                </section>

            </div>
        );
    }
}

export default Contact;