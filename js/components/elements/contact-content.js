class ContactContent extends React.Component {
  render() {
    return (
      <div id="contact-content">
        <div>
        <form id="theform">
              <input id="formName" type="text" placeholder="Your Name" />
              <br />
              <input id="formEmail" type="email" placeholder="Your E-mail" />
              <br />
              <textarea
                id="formMsg"
                placeholder="Your Message"
                cols="50"
                rows="5"
              />
              <br />
              <button id="contactme" type="submit">
                Contact Me Now!
              </button>
        </form>
          
            <p>Not keen on a form? Reach out to me via e-mail directly or by phone:</p>
            <p><a href="mailto:viktharien@zoho.com">viktharien@zoho.com</a></p>
            <p><a href="tel:1-682-410-8053">(682) 410-8053</a></p>
        </div>
      </div>
    );
  }
}

export default ContactContent;