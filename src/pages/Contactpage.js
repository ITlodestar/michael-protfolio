import React from "react";
import { Image } from "react-bootstrap";
import contactimg from "../assets/img/contact.png"

import iconResume from '../assets/Icons/Resume Icon White Desktop.png';
import iconLinkedin from '../assets/Icons/linkdin Icon white Desktop.png';
import iconInstagram from '../assets/Icons/Insta Icon White Desktop.png';
function Contactpage() {
    return (
        <div className="row contactpage">
            <div className="col-12 col-md-6 text-center order-md-1" >
                <Image src={contactimg} width={348} className="mb-3 contact-img"/>
            </div>
            <div className="col-12 col-md-6 d-flex flex-column justify-content-between py-3" >
                <div className="content">
                    <p>Michael is a New York based producer, line producer and assistant director.</p>
                    <p>He started his career in college directing free ads for startups
                        and has since worked for major international brands.
                        He also has experience in Brand Management, Advertising Strategy,
                        Camera Department, Rental and G&E.
                    </p>
                    <p>Off set he enjoys writing, cooking for friends, hearing
                        people out, and watching black and white films.
                    </p>
                    <p>You can reach him at  <a href="mailto:michael@michaelbloom.tv">michael@michaelbloom.tv</a></p>
                </div>
                <div className="mt-5 d-flex" style={{ zIndex: 999 }}>
                    <a href="/Resume/Michael Bloom 2023.pdf " target="_blank" className="d-flex align-items-end"><Image src={iconResume} width={25} className="ms-2" /></a>
                    <a href="https://www.linkedin.com/in/michaelbloomny/" target="_blank" className="d-flex align-items-end"><Image src={iconLinkedin} width={25} className="ms-2" /></a>
                    <a href="https://www.instagram.com/michaelbloom__/" target="_blank" className="d-flex align-items-end"><Image src={iconInstagram} width={25} className="ms-2" /></a>
                </div>
            </div>
        </div>
    );
}

export default Contactpage;
