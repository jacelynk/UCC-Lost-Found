import '../css/Login.css';

function Login() {
  return (
    <div className="login-container">
      <h1 className="login-title">Welcome Back</h1>
      <form className="login-form">
        <input type="email" placeholder="Enter your email" className="login-input" />
        <input type="password" placeholder="Enter your password" className="login-input" />
        <button type="submit" className="login-button">Log In</button>
      </form>
      <button className="facebook-login-button">Log In with Facebook</button>
    </div>
  );
}

export default Login;