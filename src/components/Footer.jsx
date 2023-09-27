import { useLocation, useNavigate } from 'react-router-dom';
import gitHub from '/Users/ivanapina/React-Portfolio/src/assets/github.png';
import linkedIn from '/Users/ivanapina/React-Portfolio/src/assets/linkedin.webp';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="w-100 mt-auto text-dark p-4">
      <div className="container text-center mb-5">
        {location.pathname !== '/' && (
          <button
            className="btn btn-dark mb-3"
            onClick={() => navigate(-1)}
          >
            &larr; Go Back To Landing Page
          </button>
        )}
        <div>
        <a href="https://github.com/ivanapina"><img src={gitHub} alt="github icon" height="50"/></a>
        <a href="https://linkedin.com/ivanapina"><img src={linkedIn} alt="linkedin icon" height="50"/></a>
        </div>
        <h4>&copy; {new Date().getFullYear()} - Ivana Pina</h4>
        
      </div>
    </footer>
  );
};

export default Footer;
