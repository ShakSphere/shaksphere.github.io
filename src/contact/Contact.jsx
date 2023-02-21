import React from 'react';
import '../portfolio/Portfolio.scss';

class Contact extends React.Component {
    
    render () {
    
    return (
        <>
        <div className="Contact" >
        <article className="contact-card">
        <h1>Connect With Me</h1>
        <div className="row">
        <div className="column">
        <h3>Email</h3>
        <span className="material-symbols-outlined" >outgoing_mail</span>
        <a href={"mailto: shak@shaksphere.au"}><br /> <br />shak@shaksphere.au
        </a>
        </div>
        <div className="column">
        <h3>Phone</h3>
        <span className="material-symbols-outlined">smartphone</span>
        <a href="tel:+61405629848"><br /> <br /> 0405 629 848 
        </a>
        </div>
        <div className="column">
        <h3>Personal Website</h3>
        <span className="material-symbols-outlined" >language</span>
        <a href="https://shaksphere.au" target="_blank"><br /> <br />shaksphere.au
               
                </a>
            </div>
            </div>
        
        </article>

        </div>

        </>
             )
    }
}

export default Contact;

// ReactDOM.render(
//     <React.StrictMode>
//         <h1>Contact Shakeel</h1>
//     </React.StrictMode>,
//     document.getElementById('root')
// )












/*const emailIcon = <span className="material-symbols-outlined">outgoing_mail</span>;
const email = "shak@shaksphere.au";
const phoneIcon = <span className="material-symbols-outlined">smartphone</span>;
const mobile = '0405629848';
const contactHeading = <h1>Contact Shakeel</h1>;

export function Contact() {
    return (
        <div>
        {contactHeading}
        {emailIcon}
        <p>{email}</p>
        {phoneIcon}
        <p>{mobile}</p>
        </div>
    );
}*/