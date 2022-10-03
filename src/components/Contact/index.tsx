import ContactWrapper from "./styles";
import { FaWhatsapp, FaEnvelopeOpen, FaLinkedin } from "react-icons/fa";
import { userData } from "../../utils/userData";

const Contact = () => {
  return (
    <ContactWrapper id="Contact">
      <h3>Let's talk, exchange experiences or work together</h3>

      <ul id="contact_list">
        <li>
          <FaWhatsapp></FaWhatsapp>
          <div className="info">
            <h4>My Whatsapp</h4>
            <p>I'm available for text or voice message</p>
            <a
              href={`https://api.whatsapp.com/send?phone=+55+${userData.whatsappNumber}&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os`}
            >
              Talk now
            </a>
          </div>
        </li>

        <li>
          <FaEnvelopeOpen></FaEnvelopeOpen>
          <div className="info">
            <h4>My e-mail</h4>
            <p>Send me an email reporting feedbacks, suggestions and ideas</p>
            <a href={`mailto:${userData.emailUser}`}>Send me an e-mail</a>
          </div>
        </li>

        <li>
          <FaLinkedin></FaLinkedin>
          <div className="info">
            <h4>My Linkedin</h4>
            <p>
              We can create more constant interactions as well as a sharing
              network
            </p>
            <a href={`https://www.linkedin.com/in/${userData.linkedinUser}`}>Go to Linkedin now</a>
          </div>
        </li>
      </ul>
    </ContactWrapper>
  );
};

export default Contact;
