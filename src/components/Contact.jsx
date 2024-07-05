import './contact.scss';

const Contact = () => {
  return (
    <div className="container contact-page">
        <div className="text-zone">
            <h1>Contact Me</h1>
            <p>If you are looking for a dedicated and innovative software developer to join your team, I would love to hear from you!</p>
            <p>With a strong background in the necessary skills and a passion for creating efficient and scalable software solutions, I am eager to bring my expertise to your projects.</p>
            <p>Please feel free to connect with me on <span style={{color: '#C80036'}}>LinkedIn</span> or reach out to me by contacting me through this form.</p>
        </div>
        {/* <div className="contact-form">
            <form>
                <ul>
                    <li className="half">
                        <input type="text" name="name" placeholder="Name" required/>
                    </li>
                    <li className="half">
                        <input type="email" name="email" placeholder="Email" required/>
                    </li>
                    <li>
                        <input type="text" name="subject" placeholder="Subject" required/>
                    </li>
                    <li>
                        <textarea placeholder="Message" name="message" required></textarea>
                    </li>
                    <li>
                        <input type="submit" className="flat-button" value='SEND'/>
                    </li>
                </ul>
            </form>
        </div> */}
    </div>
  )
}

export default Contact