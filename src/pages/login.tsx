import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  AlertCircle,
  User,
  ArrowLeft,
} from "lucide-react";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState(null);

  // Check if user is already logged in
  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated");
    const currentUser = localStorage.getItem("currentUser");

    if (authStatus === "true" && currentUser) {
      setIsAuthenticated(true);
      setUserData(JSON.parse(currentUser));
    }
  }, []);

  // Validate form data
  const validateForm = () => {
    const { email, password } = formData;
    const newErrors = {};

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email";
    }

    // Password validation
    if (!password) {
      newErrors.password = "Password is required";
    }

    return newErrors;
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }

    // Clear login error when user starts typing
    if (loginError) {
      setLoginError("");
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      // Get stored user data from local storage
      const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
      const singleUser = localStorage.getItem("user");

      // Check if there's a single user (from signup page) or multiple users
      let users = [];
      if (singleUser) {
        users.push(JSON.parse(singleUser));
      }
      users = [...users, ...storedUsers];

      // Find user with matching email
      const user = users.find((u) => u.email === formData.email);

      if (user) {
        // Check if password matches
        if (user.password === formData.password) {
          // Successful login
          localStorage.setItem("isAuthenticated", "true");
          localStorage.setItem(
            "currentUser",
            JSON.stringify({
              name: user.name,
              email: user.email,
              createdAt: user.createdAt,
            })
          );

          setUserData({
            name: user.name,
            email: user.email,
            createdAt: user.createdAt,
          });
          setIsAuthenticated(true);
          setLoginError("");
        } else {
          // Password doesn't match
          setLoginError("Invalid email or password");
        }
      } else {
        // User not found
        setLoginError("Invalid email or password");
      }

      setIsSubmitting(false);
    }, 1000);
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("currentUser");
    setIsAuthenticated(false);
    setUserData(null);
    setFormData({ email: "", password: "" });
  };

  // If user is authenticated, show dashboard
  if (isAuthenticated && userData) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-primary/90 p-4">
        <div className="w-full max-w-md">
          <div className="bg-foreground/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-foreground/20">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-10 h-10 text-secondary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Welcome back!
              </h2>
              <p className="text-foreground/70">
                You're now logged in to TicketZen
              </p>
            </div>

            <div className="bg-primary/10 rounded-lg p-4 mb-6">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center mr-3">
                  <span className="text-secondary font-bold">
                    {userData.name.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground">{userData.name}</p>
                  <p className="text-sm text-foreground/70">{userData.email}</p>
                </div>
              </div>
              <p className="text-xs text-foreground/60">
                Member since:{" "}
                {new Date(userData.createdAt).toLocaleDateString()}
              </p>
            </div>

            <div className="space-y-3">
              <button className="w-full bg-secondary text-primary py-3 rounded-lg font-medium hover:bg-secondary/90 transition-colors">
                Go to Dashboard
              </button>
              <button
                onClick={handleLogout}
                className="w-full bg-foreground/20 text-foreground py-3 rounded-lg font-medium hover:bg-foreground/30 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-primary/90 p-4 relative overflow-hidden">
      <button
        onClick={() => navigate("/")}
        className="fixed top-5 left-5 z-50 bg-white rounded-md py-2 px-5 text-primary text-sm  flex items-center gap-2"
      >
        <ArrowLeft />
        Back Home
      </button>
      {/* SVG Background Pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="oklch(0.985 0 0)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <div className="w-full max-w-md relative z-10">
        <div className="bg-foreground/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-foreground/20">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Welcome Back
            </h1>
            <p className="text-foreground/70">
              Sign in to your TicketFlow account
            </p>
          </div>

          {/* Login Error Alert */}
          {loginError && (
            <div className="mb-6 p-3 bg-red-500/20 border border-red-500/30 rounded-lg flex items-start">
              <AlertCircle className="h-5 w-5 text-red-400 mr-2 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-400">{loginError}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-foreground/50" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-3 py-3 rounded-lg bg-foreground/20 border ${
                    errors.email ? "border-red-500" : "border-foreground/30"
                  } text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all`}
                  placeholder="john@example.com"
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-400">{errors.email}</p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-foreground/50" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-10 py-3 rounded-lg bg-foreground/20 border ${
                    errors.password ? "border-red-500" : "border-foreground/30"
                  } text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all`}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-foreground/50" />
                  ) : (
                    <Eye className="h-5 w-5 text-foreground/50" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-400">{errors.password}</p>
              )}
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded bg-foreground/20 border-foreground/30 text-secondary focus:ring-secondary focus:ring-offset-0"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-foreground/70"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-secondary hover:text-secondary/80 transition-colors"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-secondary text-primary py-3 rounded-lg font-medium hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Signing In..." : "Sign In"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-foreground/70">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="font-medium text-secondary hover:text-secondary/80 transition-colors"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>

        <p className="mt-4 text-center text-foreground/50 text-xs">
          By signing in, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </section>
  );
};

export default Login;
