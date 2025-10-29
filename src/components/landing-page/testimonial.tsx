import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "Head of Customer Success",
      company: "TechCorp",
      content:
        "Ticket Zen has transformed our support operations. Response times are down 40% and customer satisfaction is at an all-time high.",
      rating: 5,
      initials: "SJ",
      color: "bg-secondary",
    },
    {
      name: "Michael Chen",
      position: "Support Manager",
      company: "ServiceHub",
      content:
        "The automation features alone have saved us countless hours. Our team can now focus on complex issues instead of repetitive tasks.",
      rating: 5,
      initials: "MC",
      color: "bg-amber-500",
    },
    {
      name: "Emily Rodriguez",
      position: "CEO",
      company: "StartupX",
      content:
        "As a growing company, Ticket Zen scaled with us perfectly. The insights from the dashboard helped us optimize our entire support strategy.",
      rating: 5,
      initials: "ER",
      color: "bg-green-500",
    },
  ];

  return (
    <section
      data-testid="test-testimonials-section"
      id="testimonials"
      className="py-20 px-4 bg-secondary/10"
      aria-labelledby="testimonials-heading"
      role="region"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          className="text-center mb-16"
          data-testid="test-testimonials-header"
        >
          <h2
            id="testimonials-heading"
            data-testid="test-testimonials-title"
            className="text-3xl font-bold mb-4 text-primary"
            role="heading"
            aria-level={2}
          >
            What Our Customers Say
          </h2>
          <p
            data-testid="test-testimonials-description"
            className="text-lg text-primary/70 max-w-3xl mx-auto"
          >
            Join thousands of companies that have transformed their customer
            support with Ticket Zen.
          </p>
        </div>

        {/* Testimonials List */}
        <div
          data-testid="test-testimonials-list"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          role="list"
          aria-label="Customer testimonials"
        >
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              role="listitem"
              aria-label={`Testimonial from ${testimonial.name}, ${testimonial.position} at ${testimonial.company}`}
              data-testid={`test-testimonial-${index}`}
              className="bg-foreground rounded-lg shadow-md p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* User Info */}
              <header
                className="flex items-center mb-4"
                data-testid={`test-testimonial-header-${index}`}
              >
                <div
                  className={`w-12 h-12 rounded-full ${testimonial.color} flex items-center justify-center text-white font-bold mr-4`}
                  aria-hidden="true"
                >
                  {testimonial.initials}
                </div>
                <div>
                  <p
                    className="font-semibold text-primary"
                    data-testid={`test-testimonial-name-${index}`}
                  >
                    {testimonial.name}
                  </p>
                  <p
                    className="text-sm text-primary/60"
                    data-testid={`test-testimonial-position-${index}`}
                  >
                    {testimonial.position}, {testimonial.company}
                  </p>
                </div>
              </header>

              {/* Quote & Content */}
              <Quote
                className="w-8 h-8 text-secondary mb-4"
                aria-hidden="true"
                data-testid={`test-testimonial-quoteicon-${index}`}
              />
              <p
                className="text-primary/80 italic"
                data-testid={`test-testimonial-content-${index}`}
              >
                “{testimonial.content}”
              </p>

              {/* star rating */}
              <div
                className="mt-4 flex"
                role="img"
                aria-label={`Rating: ${testimonial.rating} out of 5 stars`}
                data-testid={`test-testimonial-rating-${index}`}
              >
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} aria-hidden="true" className="text-yellow-400">
                    ★
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
