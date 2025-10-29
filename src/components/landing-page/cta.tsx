import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section
      data-testid="test-cta-section"
      id="cta"
      className="relative py-20 px-4 overflow-hidden"
      aria-labelledby="cta-heading"
      role="region"
    >
      {/* Background with gradient */}
      <div
        className="absolute inset-0 bg-linear-to-br from-primary to-primary/90"
        aria-hidden="true"
        data-testid="test-cta-background"
      ></div>

      {/* SVG Decorative Elements */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        data-testid="test-cta-svg"
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
              stroke="oklch(75.236% 0.14929 235.166 / 0.1)"
              strokeWidth="1"
            />
          </pattern>

          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="oklch(75.236% 0.14929 235.166)" />
            <stop offset="100%" stopColor="oklch(58.415% 0.23329 280.771)" />
          </linearGradient>
        </defs>

        {/* Apply grid pattern */}
        <rect
          width="100%"
          height="100%"
          fill="url(#grid)"
          data-testid="test-cta-grid"
        />

        {/* Corner decorations */}
        <path
          d="M0,0 L100,0 L100,20 L20,20 L20,100 L0,100 Z"
          fill="none"
          stroke="url(#gradient1)"
          strokeWidth="2"
          opacity="0.5"
        />

        <path
          d="M1440,600 L1340,600 L1340,580 L1420,580 L1420,500 L1440,500 Z"
          fill="none"
          stroke="url(#gradient1)"
          strokeWidth="2"
          opacity="0.5"
        />

        {/* Flowing lines */}
        <path
          d="M0,300 Q360,250 720,300 T1440,300"
          fill="none"
          stroke="url(#gradient1)"
          strokeWidth="1"
          opacity="0.3"
        />
        <path
          d="M0,320 Q360,370 720,320 T1440,320"
          fill="none"
          stroke="url(#gradient1)"
          strokeWidth="1"
          opacity="0.3"
        />

        {/* Decorative circles */}
        <circle
          cx="200"
          cy="100"
          r="4"
          fill="oklch(75.236% 0.14929 235.166)"
          opacity="0.6"
        />
        <circle
          cx="220"
          cy="120"
          r="3"
          fill="oklch(75.236% 0.14929 235.166)"
          opacity="0.4"
        />
        <circle
          cx="240"
          cy="110"
          r="2"
          fill="oklch(75.236% 0.14929 235.166)"
          opacity="0.3"
        />
        <circle
          cx="1240"
          cy="500"
          r="4"
          fill="oklch(75.236% 0.14929 235.166)"
          opacity="0.6"
        />
        <circle
          cx="1220"
          cy="480"
          r="3"
          fill="oklch(75.236% 0.14929 235.166)"
          opacity="0.4"
        />
        <circle
          cx="1200"
          cy="490"
          r="2"
          fill="oklch(75.236% 0.14929 235.166)"
          opacity="0.3"
        />
      </svg>

      {/* Content */}
      <div
        className="relative z-10 max-w-4xl mx-auto text-center"
        data-testid="test-cta-content"
      >
        <div
          className="bg-foreground/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-foreground/20"
          data-testid="test-cta-container"
        >
          <h3
            id="cta-heading"
            data-testid="test-cta-title"
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
            role="heading"
            aria-level={3}
          >
            Ready to Transform Your Customer Support?
          </h3>

          <p
            data-testid="test-cta-description"
            className="text-xl text-foreground/80 mb-10 max-w-2xl mx-auto"
          >
            Join thousands of companies that have improved their support
            operations with Ticket Zen.
          </p>

          {/* CTA Button */}
          <div
            className="flex justify-center"
            data-testid="test-cta-buttons"
            role="group"
            aria-label="Call to action buttons"
          >
            <button
              data-testid="test-cta-get-started-btn"
              className="bg-foreground text-primary inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
              aria-label="Get started with Ticket Zen"
            >
              <Link to="/auth/signup" aria-label="Sign up page link">
                Get Started
              </Link>
              <ArrowRight
                className="w-5 h-5"
                aria-hidden="true"
                data-testid="test-cta-arrow-icon"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
