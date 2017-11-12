class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div id='footer'>
        <div id='footer-info'>
          <div id='f-cards'>
            <div className='card'>
              <ul><span>OM OSS</span>
                <li>Fætøre</li>
                <li>Hoh Vi Helpper</li>
                <li>Prëser</li>
                <li>Mitter Oss</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className='card'>
              <ul><span>STOTTEN</span>
                <li>Helpper Desken</li>
                <li>API</li>
                <li>Itegradje</li>
                <li>Statøsa</li>
                <li>FAF</li>
              </ul>
            </div>
            <div className='card'>
              <ul><span>LEGALLEN</span>
                <li>Prëvaså Polëså</li>
                <li>Terme åf Øser</li>
                <li>Responsëbel Øser</li>
                <li>Optidjer Ut</li>
              </ul>
            </div>
            <div className='card'>
              <ul><span><strong>CONTACT ME</strong></span>
                <li>(682) 410-8053</li>
                <li>viktharien@zoho.com</li>
                <li>Portfolio: viktharienvolander.com</li>
              </ul>
            </div>
          </div>
          <div id='f-social'>
            <div>
              <a href='https://www.linkedin.com/in/aaron-viktharien-volander-cil-b1120514a'><i className="fa fa-linkedin fa-4x" aria-hidden="true"></i></a>
              <a href='https://www.github.com/viktharien'><i className="fa fa-github fa-4x" aria-hidden="true"></i></a><br/>
              <span>React Refactor by <strong>Viktharien Volander</strong> - this project is dedicated to Call-Em-All!</span><br/>
              <span>Interested in hearing an explanation of my approach and design choices? <strong><a href='designs.html' target='_blank'>Read here</a></strong></span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;