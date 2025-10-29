import { Link } from "react-router-dom";
import BgCircles from "./bgcircles";

const Hero = () => {
  return (
    <section
      test-id="test-hero-container"
      className="relative overflow-hidden bg-primary text-foreground min-h-[90vh]"
    >
      {/* SVG Wavy Background - positioned to cover hero */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        aria-hidden="true"
      >
        <svg
          className="w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1440 600"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
        >
          {/* Base background rectangle to match hero background */}
          <rect width="1440" height="600" fill="transparent" />
          {/* Wavy layer 1 */}
          <path
            d="M0,320 C200,420 400,260 720,320 C1040,380 1240,220 1440,300 L1440,600 L0,600 Z"
            fill="oklch(15% 0.03 230)"
            opacity="0.8"
          />
          {/* Wavy layer 2 (deeper, near bottom) */}
          <path
            d="M0,380 C220,460 460,280 760,360 C1060,440 1260,260 1440,320 L1440,600 L0,600 Z"
            fill="oklch(12% 0.025 230)"
            opacity="0.6"
          />
          {/* Decorative top-right svg circle*/}
          <g transform="translate(1160,90)">
            <circle r="32" fill="var(--secondary)" opacity="0.8" />
          </g>
        </svg>
      </div>

      {/* Decorative Circles */}
      <BgCircles />

      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <h1
              data-testid="test-hero-title"
              className="text-foreground text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4"
            >
              Smart, simple ticket management
            </h1>
            <p
              data-testid="test-hero-description"
              className="text-white text-lg mb-10"
            >
              Create, assign and resolve tickets faster. A modern workflow with
              useful analytics and role-based dashboards.
            </p>

            <div
              data-testid="test-hero-buttons"
              className="relative z-40 flex flex-wrap gap-5"
            >
              <button
                data-testid="test-hero-signup-button"
                className="bg-foreground text-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl hover:opacity-95 font-semibold shadow-md transition-all hover:scale-105"
              >
                <Link to="/auth/signup">Get started</Link>
              </button>

              <a
                data-testid="test-hero-learn-more-link"
                href="#features"
                className="bg-transparent inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-foreground text-foreground hover:bg-foreground/10 transition-all"
              >
                Learn more
              </a>
            </div>
          </div>

          {/* Right-hand visual */}
          <div className="relative">
            {/* Example mockup card */}
            <div className="bg-linear-to-b from-foreground to-foreground/90 rounded-3xl p-6 shadow-2xl border border-foreground/10 backdrop-blur-md text-primary transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium">Ticket #421</span>
                <div className="space-x-3">
                  <span className="text-xs px-3 py-1 rounded-full bg-green-500/20 text-green-400">
                    Open
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-amber-500/20 text-amber-400">
                    Medium
                  </span>
                </div>
              </div>

              <h4 className="font-semibold text-lg mb-2">
                User cannot connect to workspace
              </h4>
              <p className="text-sm text-primary/70 mb-3">
                The user reports sudden disconnects when joining meetings.
              </p>

              <div className="flex justify-between items-center gap-3 border-t border-primary pt-1.5">
                <div className="text-xs text-primary/60">
                  Created: 10/29/2025
                </div>

                <div className="flex gap-5">
                  <button>Edit</button>
                  <button>Delete</button>
                </div>
              </div>
            </div>

            {/* Floating feature cards overlapping hero bottom */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-foreground/10 backdrop-blur-md rounded-xl p-4 border border-foreground/20 transform hover:scale-105 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center mb-3">
                  <svg
                    className="w-6 h-6 text-secondary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                </div>
                <h5 className="font-semibold text-foreground mb-1">
                  Auto-assignment
                </h5>
                <p className="text-sm text-foreground/70">
                  Auto route tickets to the right agent based on skills and
                  workload.
                </p>
              </div>
              <div className="bg-foreground/10 backdrop-blur-md rounded-xl p-4 border border-foreground/20 transform hover:scale-105 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center mb-3">
                  <svg
                    className="w-6 h-6 text-secondary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h5 className="font-semibold text-foreground mb-1">
                  SLA Alerts
                </h5>
                <p className="text-sm text-foreground/70">
                  Get notified when tickets are near SLA deadlines so nothing
                  slips through.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
