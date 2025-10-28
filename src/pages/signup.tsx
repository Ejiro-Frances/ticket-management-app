import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";
import BackButton from "../components/auth/backbutton";

type FormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Validate form data
  const validateForm = (formData: FormData) => {
    const { name, email, password, confirmPassword } = formData;
    const newErrors: FormErrors = {};

    // === Name validation ===
    if (!name.trim()) {
      newErrors.name = "Full name is required";
    } else {
      // Split the name by spaces
      const parts = name.trim().split(/\s+/);

      // Check first name length
      if (parts[0].length < 2) {
        newErrors.name = "First name must be at least 2 letters";
      }
      // Check that there’s a last name
      else if (parts.length < 2) {
        newErrors.name = "Please enter your last name too";
      }
      //  ensure both parts are alphabetic
      else if (!/^[A-Za-z]+(?:\s+[A-Za-z]+)+$/.test(name.trim())) {
        newErrors.name = "Name must contain only letters and a space";
      }
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
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
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
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = validateForm(formData);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      // save to local storage
      const userToSave = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        createdAt: new Date().toISOString(),
      };

      localStorage.setItem("user", JSON.stringify(userToSave));

      // setIsSuccess(true);
      setIsSubmitting(false);

      toast.success("Account created successfully!");

      navigate("/dashboard");
    }, 1000);

    setIsSubmitting(false);
    // setIsSuccess(true);
  };

  return (
    <main
      data-testid="test-signup-page"
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* button to go back to home page */}
      <BackButton />

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

      {/* sign up form */}
      <section
        data-testid="test-signup-form-container"
        className="w-full max-w-2xl bg-foreground/10 rounded-2xl shadow-2xl p-8 backdrop-blur-md border border-foreground/20 "
      >
        {/* heading */}
        <div data-testid="test-signup-heading" className="text-center mb-8">
          <h1
            data-testid="test-signup-heading-text"
            className="text-3xl font-bold text-foreground mb-2"
          >
            Create Account
          </h1>
          <p className="text-foreground/70">
            Sign up to get started with Ticket Zen
          </p>
        </div>

        {/* form */}
        <form
          data-testid="test-signup-form"
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Name field */}
          <div data-testid="test-name-container">
            <label
              data-testid="test-name-label"
              htmlFor="name"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Full Name
            </label>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User
                  className="h-5 w-5 text-foreground/50"
                  data-testid="test-user-icon"
                />
              </div>
              <input
                data-testid="test-name-input"
                id="name"
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                className={`w-full pl-10 pr-3 py-3 rounded-lg bg-foreground/20 border ${
                  errors.name ? "border-red-500" : "border-foreground/30"
                } text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all`}
              />
            </div>
            {errors.name && (
              <p
                data-testid="test-name-error"
                className="mt-1 text-sm text-red-400"
              >
                {errors.name}
              </p>
            )}
          </div>

          {/* Email field */}
          <div data-testid="test-email-container">
            <label
              data-testid="test-email-label"
              htmlFor="email"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Email Address
            </label>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail
                  data-testid="test-mail-icon"
                  className="h-5 w-5 text-foreground/50"
                />
              </div>
              <input
                data-testid="test-email-input"
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="johndoe@example.com"
                className={`w-full pl-10 pr-3 py-3 rounded-lg bg-foreground/20 border ${
                  errors.email ? "border-red-500" : "border-foreground/30"
                } text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all`}
              />
            </div>
            {errors.email && (
              <p
                data-testid="test-email-error"
                className="mt-1 text-sm text-red-400"
              >
                {errors.email}
              </p>
            )}
          </div>

          {/* Password field */}
          <div data-testid="test-password-container">
            <label
              data-testid="test-password-label"
              htmlFor="password"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Password
            </label>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock
                  data-testid="test-lock-icon"
                  className="h-5 w-5 text-foreground/50"
                />
              </div>

              <input
                data-testid="test-password-input"
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full pl-10 pr-10 py-3 rounded-lg bg-foreground/20 border ${
                  errors.password ? "border-red-500" : "border-foreground/30"
                } text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all`}
                placeholder="Password"
              />
              <button
                data-testid="test-show-password-button"
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff
                    data-testid="test-hide-password-icon"
                    className="h-5 w-5 text-foreground/50"
                  />
                ) : (
                  <Eye
                    data-testid="test-show-password-icon"
                    className="h-5 w-5 text-foreground/50"
                  />
                )}
              </button>
            </div>
            <div>
              {errors.password && (
                <p
                  data-testid="test-password-error"
                  className="mt-1 text-sm text-red-400"
                >
                  {errors.password}
                </p>
              )}
            </div>
          </div>

          {/* confirm password */}
          <div data-testid="test-confirm-password-container">
            <label
              data-testid="test-password-label"
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Confirm Password
            </label>

            <div
              data-testid="test-confirm-password-container"
              className="relative"
            >
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock
                  data-testid="test-lock-icon"
                  className="h-5 w-5 text-foreground/50"
                />
              </div>
              <input
                data-testid="test-confirm-password-input"
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
                placeholder="Confirm Password"
              />
              <button
                data-testid="test-show-confirm-password-button"
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <EyeOff
                    data-testid="test-hide-confirm-password-icon"
                    className="h-5 w-5 text-foreground/50"
                  />
                ) : (
                  <Eye
                    data-testid="test-show-confirm-password-icon"
                    className="h-5 w-5 text-foreground/50"
                  />
                )}
              </button>
            </div>
            {errors.confirmPassword && (
              <p
                data-testid="test-confirm-password-error"
                className="mt-1 text-sm text-red-400"
              >
                {errors.confirmPassword}
              </p>
            )}
          </div>

          {/* terms of service info */}
          <p
            data-testid="test-terms-of-service-info"
            className="mt-4 text-center text-foreground/50 text-xs"
          >
            By signing up, you agree to our Terms of Service and Privacy Policy.
          </p>

          {/* submit button */}
          <button
            type="submit"
            data-testid="test-submit-button"
            disabled={isSubmitting}
            className="w-full bg-secondary text-primary py-3 rounded-lg font-medium hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-primary transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        <div data-testid="test-login-link" className="mt-6 text-center">
          <p className="text-foreground/70">
            Already have an account?
            <Link
              to="/login"
              className="font-medium text-secondary hover:text-secondary/80 transition-colors ml-1.5"
            >
              Log in
            </Link>
          </p>
        </div>
        {/* </div> */}
      </section>
    </main>
  );
};

export default Signup;
