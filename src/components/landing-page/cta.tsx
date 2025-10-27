import { ArrowRight, Zap, Shield, Users } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/90"></div>

      {/* SVG Decorative Elements */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Grid pattern */}
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
        <rect width="100%" height="100%" fill="url(#grid)" />

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
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="bg-foreground/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-foreground/20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Transform Your Customer Support?
          </h2>
          <p className="text-xl text-foreground/80 mb-10 max-w-2xl mx-auto">
            Join thousands of companies that have improved their support
            operations with TicketFlow.
          </p>

          {/* Feature highlights with icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-3">
                <Zap className="w-6 h-6 text-secondary" />
              </div>
              <p className="text-foreground text-sm font-medium">
                Setup in minutes
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-3">
                <Shield className="w-6 h-6 text-secondary" />
              </div>
              <p className="text-foreground text-sm font-medium">
                No credit card required
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-3">
                <Users className="w-6 h-6 text-secondary" />
              </div>
              <p className="text-foreground text-sm font-medium">
                14-day free trial
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-foreground text-primary inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105">
              Start 14-Day Free Trial
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-transparent border-2 border-foreground text-foreground inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold hover:bg-foreground/10 transition-all">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
