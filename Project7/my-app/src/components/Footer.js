
import React, { Component } from 'react';
import '../App.css';


class Footer extends Component {
    render(){
  return (
<footer id="footer">
  <div className="footer-top">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6 footer-info">
          <h3>CONTRACT</h3>
          <p>
CONTRACT is a contract management system to easily manage and monitor all contracts during the contract life cycle. By doing so you will be able to reduce costs and risks</p>
        </div>
        <div className="col-lg-3 col-md-6 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><i className="ion-ios-arrow-right" /> <a href="#">Home</a></li>
            <li><i className="ion-ios-arrow-right" /> <a href="#">About us</a></li>
            <li><i className="ion-ios-arrow-right" /> <a href="#">Services</a></li>
            <li><i className="ion-ios-arrow-right" /> <a href="#">Terms of service</a></li>
            <li><i className="ion-ios-arrow-right" /> <a href="#">Team</a></li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 footer-contact">
          <h4>Contact Us</h4>
          <p>
            A108 Adam Street <br />
          Amman, NY 065858545<br />
           JORDAN <br />
            <strong>Phone:</strong> +962778585757<br />
            <strong>Email:</strong> contract@example.com<br />
          </p>
          <div className="social-links">
            <a href="#" className="twitter"><i className="fa fa-twitter" /></a>
            <a href="#" className="facebook"><i className="fa fa-facebook" /></a>
            <a href="#" className="instagram"><i className="fa fa-instagram" /></a>
            <a href="#" className="google-plus"><i className="fa fa-google-plus" /></a>
            <a href="#" className="linkedin"><i className="fa fa-linkedin" /></a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 footer-newsletter">
          <h4>Our Newsletter</h4>
          <p>We have a dedicated global enterprise sales team ready to discuss your unique business requirements, regardless of location. We also have certified Partners in Dubai, KSA .</p>
          {/* <form action method="post">
            <input type="email" name="email" /><input type="submit" defaultValue="Subscribe" />
          </form> */}
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="copyright">
    2022 © Copyright <strong>CONTRACT</strong>
    </div>
    {/* <div className="credits">
      Best <a href="https://bootstrapmade.com/">Bootstrap Templates</a> by BootstrapMade
    </div> */}
  </div>
</footer>



)
}
}

export default Footer;

