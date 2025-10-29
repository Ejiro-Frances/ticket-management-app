import { BarChart3, Workflow, Plug, Shield, Clock, Users } from "lucide-react";

const featuresData = [
  {
    title: "Dashboard",
    body: "At-a-glance metrics for tickets and agent performance.",
    icon: <BarChart3 className="w-8 h-8" />,
    color: "text-blue-500",
  },
  {
    title: "Custom Workflows",
    body: "Create triggers and automations for common ticket flows.",
    icon: <Workflow className="w-8 h-8" />,
    color: "text-green-500",
  },
  {
    title: "Integrations",
    body: "Connect with your favorite tools like Slack, Jira, and more.",
    icon: <Plug className="w-8 h-8" />,
    color: "text-purple-500",
  },
  {
    title: "Security",
    body: "Enterprise-grade security with role-based access control.",
    icon: <Shield className="w-8 h-8" />,
    color: "text-red-500",
  },
  {
    title: "24/7 Support",
    body: "Round-the-clock assistance to keep your operations running smoothly.",
    icon: <Clock className="w-8 h-8" />,
    color: "text-yellow-500",
  },
  {
    title: "Team Collaboration",
    body: "Enable seamless collaboration between support agents and teams.",
    icon: <Users className="w-8 h-8" />,
    color: "text-indigo-500",
  },
];

const Features = () => {
  return (
    <section
      data-testid="test-features-section"
      className="max-w-6xl mx-auto py-20 px-4"
      id="features"
    >
      <div className="text-center mb-16">
        <h2
          data-testid="test-features-title"
          className="text-3xl font-bold mb-4"
        >
          Powerful Features for Your Support Team
        </h2>
        <p
          data-testid="test-features-description"
          className="text-lg text-gray-600 max-w-3xl mx-auto"
        >
          Everything you need to streamline your customer support workflow and
          deliver exceptional service.
        </p>
      </div>

      <ul
        data-testid="test-features-list"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {featuresData.map((feature, index) => (
          <li
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl p-8 transition-all duration-300 hover:-translate-y-1"
          >
            <div className={`mb-4 ${feature.color}`}>{feature.icon}</div>
            <h5 className="font-semibold text-xl mb-3">{feature.title}</h5>
            <p className="text-gray-600">{feature.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Features;
