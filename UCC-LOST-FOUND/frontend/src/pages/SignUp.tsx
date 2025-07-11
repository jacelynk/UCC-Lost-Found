import '../css/Login.css';
import logo from '../assets/img/image 16.png';
import { Link } from 'react-router-dom';
import facebookIcon from '../assets/img/facebook.png';

function SignUp() {
  return (
    <div className="login-full-bg">
      <div className="login-logo-center">
        <img src={logo} alt="Logo" className="login-logo-large" />
      </div>
      <h1 className="login-title">Create an Account</h1>
      <form className="login-form login-form-center">
        <div style={{ textAlign: 'left', width: '100%' }}>
          <label>Name</label>
          <input type="text" className="login-input" />
        </div>
        <div style={{ textAlign: 'left', width: '100%' }}>
          <label>Program, Year and Section</label>
          <input type="text" className="login-input" />
        </div>
        <div style={{ textAlign: 'left', width: '100%' }}>
          <label>Campus</label>
          <input type="text" className="login-input" />
        </div>
        <div style={{ textAlign: 'left', width: '100%' }}>
          <label>Password</label>
          <input type="password" className="login-input" />
        </div>
        <div style={{ textAlign: 'left', width: '100%' }}>
          <label>Confirm Password</label>
          <input type="password" className="login-input" />
        </div>
        <button type="button" className="facebook-login-button">
          <img src={facebookIcon} alt="Facebook" className="fb-img" />
          Continue with <strong>Facebook</strong>
        </button>
        <button type="submit" className="login-button" style={{ background: '#E6A8F7', color: '#fff', fontWeight: 700, borderRadius: 20, marginTop: 10 }}>Sign up</button>
      </form>
      <div style={{ marginTop: 30, fontSize: 16, textAlign: 'center' }}>
        Already have an account? <Link to="/login" style={{ fontWeight: 700, fontStyle: 'italic', color: '#000' }}>Sign in</Link> instead.
      </div>
    </div>
  );
}

export default SignUp;