import { Fade } from "react-reveal";

const Footer = ({ data }) => {
  const renderSocialLinks = () => {
    if (!data || !data.social || data.social.length === 0) {
      return null;
    }

    return data.social.map((network) => (
      <li key={ network.name }>
        <a href={ network.url }>
          <i className={ network.className }></i>
        </a>
      </li>
    ));
  };

  return (
    <footer>
      <div className="row">
        <Fade bottom>
          <div className="twelve columns">
            <ul className="social-links">{ renderSocialLinks() }</ul>

            <ul className="copyright">
              <li>
                <span style={ { color: "#fff" } }>2024 || Made by &copy; </span>
                <a
                  title="Kartik"
                  href="https://github.com/SINNIK1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span style={ { color: "#3d3d" } }>Kartik</span>
                </a>
              </li>
            </ul>
          </div>
        </Fade>
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
