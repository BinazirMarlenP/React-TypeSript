import React from 'react';


const Footer = () => {
    return (
        <footer>
        <div class="container d-flex">
           
            <img src="https://cdn1.nrgedge.net/company/SGS_CL.png" style={{width: '200px'}} alt="" className='d-block' />
            <ul className='d-flex m-auto'>
                <li>
                    <i className="fa fa-desktop"></i>
                </li>
                <li>
                    <i className="fa fa-mobile">777 777 7777</i>
                </li>
                <li>
                    <i className="fa-fa-linkedin"></i>
                </li>
            </ul>
            <div className="right">
                <p>Copyright 2022 All Rights Reserved</p>
            </div>
        </div>  
      </footer>
    );
};

export default Footer;