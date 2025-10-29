import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, AlertCircle } from "lucide-react";
import BackButton from "../components/auth/backbutton";
import toast from "react-hot-toast";

type LoginFormData = {
  email: string;
  password: string;
};

type FormErrors = Partial<Record<keyof LoginFormData, string>>;

type UserData = {
  name: string;
  email: string;
  createdAt: string;
  password: string;
};

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const [userData, setUserData] = useState<UserData | null>(null);

  // Check if user is already logged in
  // useEffect(() => {
  //   const authStatus = localStorage.getItem("isAuthenticated");
  //   const currentUser = localStorage.getItem("currentUser");

  //   if (authStatus === "true" && currentUser) {
  //     setIsAuthenticated(true);
  //     setUserData(JSON.parse(currentUser));
  //   }
  // }, []);

  // Validate form data
  const validateForm = (formData: LoginFormData) => {
    const { email, password } = formData;
    const newErrors: FormErrors = {};

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
  // const handleChange = (
  //   e: React.ChangeEvent<
  //     HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  //   >
  // ) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({ ...prev, [name]: value }));

  //   // Clear error for this field when user starts typing
  //   if (errors[name]) {
  //     setErrors((prev) => ({ ...prev, [name]: "" }));
  //   }

  //   // Assert the key type
  //   const key = name as keyof LoginFormData;

  //   if (errors[key]) {
  //     setErrors((prev) => ({ ...prev, [key]: "" }));
  //   }
  //   // Clear login error when user starts typing
  //   if (loginError) {
  //     setLoginError("");
  //   }
  // };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    const key = name as keyof LoginFormData;

    setFormData((prev) => ({ ...prev, [key]: value }));

    // Clear error for this field when user starts typing
    setErrors((prev) => ({
      ...prev,
      [key]: "", // safely typed now
    }));

    // Clear login error when user starts typing
    if (loginError) {
      setLoginError("");
    }
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
      // Get stored user data from local storage
      const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
      const singleUser = localStorage.getItem("user");

      // Check if there's a single user (from signup page) or multiple users
      let users: UserData[] = [];
      if (singleUser) {
        users.push(JSON.parse(singleUser) as UserData);
      }
      users = [...users, ...(storedUsers as UserData[])];

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

          // setUserData({
          //   name: user.name,
          //   email: user.email,
          //   password: user.password,
          //   createdAt: user.createdAt,
          // });
          toast.success("Welcome back!");

          // setIsAuthenticated(true);
          setLoginError("");

          // Small delay before redirect
          setTimeout(() => {
            navigate("/dashboard");
          }, 1000);
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

  return (
    <section
      data-testid="test-login-page"
      className="min-h-screen flex items-center justify-center bg-linear-to-br from-primary to-primary/90 p-4 relative overflow-hidden"
    >
      {/* button to go back home */}
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

      <div className="w-full max-w-md relative z-10">
        <div className="backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-foreground/20">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Welcome Back
            </h1>
            <p className="text-foreground/70">
              Log in to your Ticket zen account
            </p>
          </div>

          {/* Login Error Alert */}
          {loginError && (
            <div className="mb-6 p-3 bg-red-500/20 border border-red-500/30 rounded-lg flex items-start">
              <AlertCircle className="h-5 w-5 text-red-400 mr-2 shrink-0 mt-0.5" />
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
                  placeholder="Password"
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
              {isSubmitting ? "Logging In..." : "Log In"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-foreground/70">
              Don't have an account?
              <Link
                to="/auth/signup"
                className="ml-1.5 font-medium text-secondary hover:text-secondary/80 transition-colors"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
