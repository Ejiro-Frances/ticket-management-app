import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  CheckCircle,
  ArrowLeft,
} from "lucide-react";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Check if user is already logged in (in local storage)
  useEffect(() => {
    const existingUser = localStorage.getItem("user");
    if (existingUser) {
      setIsSuccess(true);
    }
  }, []);

  // Validate form data
  const validateForm = () => {
    const { name, email, password, confirmPassword } = formData;
    const newErrors = {};

    // Name validation
    if (!name.trim()) {
      newErrors.name = "Name is required";
    } else if (name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

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
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
      newErrors.password =
        "Password must contain at least one uppercase letter, one lowercase letter, and one number";
    }

    // Confirm password validation
    if (!confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
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
      // Save to local storage
      const userToSave = {
        name: formData.name,
        email: formData.email,
        // Note: In a real app, never store passwords in plain text
        // This is just for demonstration purposes
        password: formData.password,
        createdAt: new Date().toISOString(),
      };

      localStorage.setItem("user", JSON.stringify(userToSave));
      setIsSuccess(true);
      setIsSubmitting(false);
    }, 1000);
  };

  // If user is successfully signed up
  if (isSuccess) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-primary/90 p-4">
        <div className="w-full max-w-md">
          <div className="bg-foreground rounded-2xl shadow-2xl p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-primary mb-2">
              Account Created!
            </h2>
            <p className="text-primary/70 mb-6">
              Your account has been successfully created. Your data has been
              saved to local storage.
            </p>
            <div className="bg-primary/10 rounded-lg p-4 mb-6 text-left">
              <p className="text-sm font-medium text-primary mb-2">
                Saved Information:
              </p>
              <p className="text-sm text-primary/70">
                Name: {JSON.parse(localStorage.getItem("user")).name}
              </p>
              <p className="text-sm text-primary/70">
                Email: {JSON.parse(localStorage.getItem("user")).email}
              </p>
            </div>
            <button
              onClick={() => {
                localStorage.removeItem("user");
                setIsSuccess(false);
                setFormData({
                  name: "",
                  email: "",
                  password: "",
                  confirmPassword: "",
                });
              }}
              className="w-full bg-primary text-foreground py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Create Another Account
            </button>
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
              Create Account
            </h1>
            <p className="text-foreground/70">
              Sign up to get started with TicketFlow
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-foreground/50" />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-3 py-3 rounded-lg bg-foreground/20 border ${
                    errors.name ? "border-red-500" : "border-foreground/30"
                  } text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all`}
                  placeholder="John Doe"
                />
              </div>
              {errors.name && (
                <p className="mt-1 text-sm text-red-400">{errors.name}</p>
              )}
            </div>

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

            {/* Confirm Password Field */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-foreground/50" />
                </div>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-10 py-3 rounded-lg bg-foreground/20 border ${
                    errors.confirmPassword
                      ? "border-red-500"
                      : "border-foreground/30"
                  } text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all`}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5 text-foreground/50" />
                  ) : (
                    <Eye className="h-5 w-5 text-foreground/50" />
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-secondary text-primary py-3 rounded-lg font-medium hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Creating Account..." : "Sign Up"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-foreground/70">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-secondary hover:text-secondary/80 transition-colors"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>

        <p className="mt-4 text-center text-foreground/50 text-xs">
          By signing up, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </section>
  );
};

export default Signup;
