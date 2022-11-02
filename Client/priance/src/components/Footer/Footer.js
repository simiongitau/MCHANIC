import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./footer.css"

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="company">
                    <h4>Company</h4>
                    <ul>
                        <li>About us</li>
                        <li>Our services</li>
                        <li>Contacts</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className="social">
                    <h4>Social links</h4>
                   <Link to="/admin"> <span > <i className="bi bi-instagram gap-3 mr-4">instagram</i>  Priance Auto</span></Link>
                    {/* <Link><span><i className="bi bi-facebook">facebook</i>  Priance Auto</span></Link>
                    <Link><span><i className="bi bi-google">google</i>   www.prianceauto.com</span></Link>
                    <Link><span><i className="bi bi-messenger">messenger</i>   Priance Auto</span></Link>
                    <Link><span><i className="bi bi-linkedin">linkedin</i>   Priance Auto</span></Link> */}
                </div>
                <div classname="Address"> 
                  <h4>Address</h4>
                  <ul>
                  <li>101 the amazing road</li>
                      <li>previour building</li>
                          <li>Nairobi  20100</li>
                         
                  </ul>
                
                </div>
                
            </div>
        );
    }
}

export default Footer;