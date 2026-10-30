
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  ArrowRight,
  Coffee,
} from "lucide-react";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setError("Please enter your email and password.");
      return;
    }

    setLoading(true);

    // Demo only. Replace this with your authentication API.
    setTimeout(() => {
      setLoading(false);
      setError("Authentication is not connected yet. Please connect your backend.");
    }, 700);
  };

  return (
    <main className="login-page">
      {/* LEFT VISUAL */}
      <section className="login-visual">
        <div className="login-visual-image" />
        <div className="login-visual-overlay" />

        <Link to="/" className="login-brand">
          <span className="login-brand-icon">
            <Coffee size={23} />
          </span>
          <span>CAFEHUB</span>
        </Link>

        <div className="login-visual-content">
          <span className="login-eyebrow">
            YOUR FAVOURITE PLACE, ALWAYS
          </span>

          <h1>
            A little
            <br />
            <em>comfort.</em>
            <br />
            A lot of
            <br />
            memories.
          </h1>

          <p>
            Good coffee, familiar faces and moments worth
            coming back for. Welcome to your CafeHub.
          </p>

          <div className="login-visual-line" />

          <span className="login-visual-caption">
            MADE FOR THE LOVE OF GOOD MOMENTS
          </span>
        </div>

        <div className="login-visual-footer">
          <span>CAFEHUB EXPERIENCE</span>
          <span>EST. WITH LOVE</span>
        </div>
      </section>

      {/* RIGHT FORM */}
      <section className="login-form-section">
        <div className="login-form-top">
          <Link to="/" className="login-back-home">
            <ArrowRight size={15} />
            BACK TO HOME
          </Link>

          <span className="login-top-note">
            NEW TO CAFEHUB?
            <Link to="/register"> CREATE ACCOUNT</Link>
          </span>
        </div>

        <div className="login-form-container">
          <div className="login-mobile-brand">
            <Coffee size={25} />
            <span>CAFEHUB</span>
          </div>

          <span className="login-eyebrow">WELCOME BACK</span>

          <h2>
            Good to see
            <br />
            <em>you again.</em>
          </h2>

          <p className="login-description">
            Sign in to continue your CafeHub experience.
          </p>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="login-input-group">
              <label htmlFor="login-email">EMAIL ADDRESS</label>

              <div className="login-input-wrap">
                <Mail size={18} />
                <input
                  type="email"
                  id="login-email"
                  name="email"
                  placeholder="Enter your email address"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            <div className="login-input-group">
              <div className="login-label-row">
                <label htmlFor="login-password">PASSWORD</label>
                <Link to="/forgot-password">FORGOT PASSWORD?</Link>
              </div>

              <div className="login-input-wrap">
                <Lock size={18} />

                <input
                  type={showPassword ? "text" : "password"}
                  id="login-password"
                  name="password"
                  placeholder="Enter your password"
                  value={form.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                  required
                />

                <button
                  type="button"
                  className="login-password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>

            <label className="login-remember">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              <span>Remember me</span>
            </label>

            {error && (
              <p className="login-error" role="alert">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="login-submit"
              disabled={loading}
            >
              {loading ? "PLEASE WAIT..." : "SIGN IN"}
              {!loading && <ArrowRight size={18} />}
            </button>
          </form>

          <div className="login-divider">
            <span />
            <p>OR CONTINUE WITH</p>
            <span />
          </div>

          <button
            type="button"
            className="login-google"
            onClick={() =>
              setError("Google authentication is not connected yet.")
            }
          >
            <span className="login-google-icon">G</span>
            Continue with Google
          </button>

          <p className="login-register-note">
            Don't have an account?
            <Link to="/register"> Join CafeHub</Link>
          </p>
        </div>

        <div className="login-form-footer">
          <span>© 2026 CAFEHUB</span>
          <div>
            <Link to="/privacy">PRIVACY</Link>
            <Link to="/terms">TERMS</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Login;
