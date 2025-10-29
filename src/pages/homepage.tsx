import NavBar from "../components/landing-page/navbar";
import Hero from "../components/landing-page/hero";
import Footer from "../components/landing-page/footer";
import Features from "../components/landing-page/features";
import Testimonials from "../components/landing-page/testimonial";
import CTA from "../components/landing-page/cta";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <main className="max-w-[1440px] mx-auto mt-20 bg-foreground text-primary">
        <Hero />
        <Features />

        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
