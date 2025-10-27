import BgCircles from "./bgcircles";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-foreground text-foreground min-h-[90vh]">
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
            fill="oklch(19.171% 0.03836 230.362)"
          />
          {/* Wavy layer 2 (deeper, near bottom) */}
          <path
            d="M0,380 C220,460 460,280 760,360 C1060,440 1260,260 1440,320 L1440,600 L0,600 Z"
            fill="oklch(58.415% 0.23329 280.771 / 0.035)"
          />
          {/* Decorative top-right svg circle*/}
          <g transform="translate(1160,90)">
            <circle r="32" fill="oklch(85.5% 0.14929 235.166)" />
          </g>
        </svg>
      </div>

      {/* Decorative Circles */}
      <BgCircles />

      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <h1 className="text-primary text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
              Smart, simple ticket management
            </h1>
            <p className="text-white bg-primary/70 text-lg mb-10">
              Create, assign and resolve tickets faster. A modern workflow with
              useful analytics and role-based dashboards.
            </p>

            <div className="relative z-40 flex flex-wrap gap-5">
              <button className="bg-foreground inline-flex items-center gap-2 px-6 py-3 rounded-xl hover:opacity-95 text-black font-semibold shadow-md">
                Get started
              </button>
              <button className="bg-transparent inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-foreground text-foreground">
                Learn more
              </button>
            </div>
          </div>

          {/* Right-hand visual */}
          <div className="relative">
            {/* Example mockup card */}
            <div className="bg-gradient-to-b bg-white rounded-3xl p-6 shadow-2xl border border-white/5 backdrop-blur-md text-primary ">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium">Ticket #421</span>
                <span className="text-xs px-3 py-1 rounded-full bg-green-500/20 text-green-400">
                  Open
                </span>
              </div>

              <h4 className="font-semibold text-lg mb-2">
                User cannot connect to workspace
              </h4>
              <p className="text-sm text-foreground/70 mb-3">
                The user reports sudden disconnects when joining meetings.
              </p>

              <div className="flex items-center gap-3">
                {/* <img
                  src="/avatar-placeholder.png"
                  alt=""
                  className="w-10 h-10 rounded-full object-cover"
                /> */}
                <div>
                  <div className="text-sm font-medium">Assigned to Ada</div>
                  <div className="text-xs text-foreground/60">2 hours ago</div>
                </div>
              </div>
            </div>

            {/* Floating feature cards overlapping hero bottom */}
            {/* <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FeatureCard
                title="Auto-assignment"
                body="Auto route tickets to the right agent based on skills and workload."
              />
              <FeatureCard
                title="SLA Alerts"
                body="Get notified when tickets are near SLA deadlines so nothing slips through."
              />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
