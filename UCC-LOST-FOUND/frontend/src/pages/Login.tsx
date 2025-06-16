import '../css/Login.css';
import logo from '../assets/img/image 16.png';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="login-full-bg">
      <div className="login-logo-center">
        <img src={logo} alt="Logo" className="login-logo-large" />
      </div>
      <h1 className="login-title" style={{ fontSize: '2.5rem', marginBottom: 30, color: '#333', fontWeight: 700, textAlign: 'center' }}>Sign in</h1>
      <form className="login-form login-form-center">
        <div style={{ textAlign: 'left', width: '100%' }}>
          <label>Email</label>
          <input type="email" className="login-input" />
        </div>
        <div style={{ textAlign: 'left', width: '100%' }}>
          <label>Password</label>
          <input type="password" className="login-input" />
        </div>
        <div style={{ textAlign: 'right', marginBottom: 10, width: '100%' }}>
          <a href="#" style={{ color: '#333', fontSize: 14, textDecoration: 'none' }}>Forgot Password</a>
        </div>
        <button type="button" className="facebook-login-button" style={{ background: '#E6A8F7', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontWeight: 700, width: '100%' }}>
          <span style={{ fontSize: 20, marginRight: 8 }}><i className="fab fa-facebook-square" /></span>
          Sign in with <span style={{ fontWeight: 700 }}>Facebook</span>
        </button>
        <button type="submit" className="login-button" style={{ background: '#E6A8F7', color: '#fff', fontWeight: 700, borderRadius: 20, marginTop: 10, width: '100%' }}>Sign in</button>
      </form>
      <div style={{ marginTop: 30, fontSize: 16, textAlign: 'center' }}>
        Don&apos;t have an account? <Link to="/signup" style={{ fontWeight: 700, fontStyle: 'italic', color: '#000' }}>Sign up</Link> instead.
      </div>
    </div>
  );
}

export default Login;