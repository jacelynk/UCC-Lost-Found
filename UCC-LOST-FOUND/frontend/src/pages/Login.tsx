
import '../css/Login.css';

function Login() {
  return (
    <div className="login-container">
      <h1 className="login-title">Log In</h1>
      <form className="login-form">
        <input type="email" placeholder="Email" className="login-input" />
        <input type="password" placeholder="Password" className="login-input" />
        <button type="submit" className="login-button">Log In</button>
      </form>
      <button className="facebook-login-button">Log In with Facebook</button>
    </div>
  );
}

export default Login;