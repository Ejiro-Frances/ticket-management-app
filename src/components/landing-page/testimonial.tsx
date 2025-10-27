import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "Head of Customer Success",
      company: "TechCorp",
      content:
        "TicketFlow has transformed our support operations. Response times are down 40% and customer satisfaction is at an all-time high.",
      rating: 5,
      initials: "SJ",
      color: "bg-blue-500",
    },
    {
      name: "Michael Chen",
      position: "Support Manager",
      company: "ServiceHub",
      content:
        "The automation features alone have saved us countless hours. Our team can now focus on complex issues instead of repetitive tasks.",
      rating: 5,
      initials: "MC",
      color: "bg-purple-500",
    },
    {
      name: "Emily Rodriguez",
      position: "CEO",
      company: "StartupX",
      content:
        "As a growing company, TicketFlow scaled with us perfectly. The insights from the dashboard helped us optimize our entire support strategy.",
      rating: 5,
      initials: "ER",
      color: "bg-green-500",
    },
  ];

  return (
    <section className="py-20 px-4 bg-primary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-primary">
            What Our Customers Say
          </h2>
          <p className="text-lg text-primary/70 max-w-3xl mx-auto">
            Join thousands of companies that have transformed their customer
            support with TicketFlow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-foreground rounded-lg shadow-md p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <div
                  className={`w-12 h-12 rounded-full ${testimonial.color} flex items-center justify-center text-white font-bold mr-4`}
                >
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-primary">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-primary/60">
                    {testimonial.position}, {testimonial.company}
                  </p>
                </div>
              </div>

              <Quote className="w-8 h-8 text-secondary/20 mb-4" />
              <p className="text-primary/80 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
