import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="bg-gray-900 text-gray-300 py-12 px-4"
      data-testid="test-footer"
      role="contentinfo"
      aria-label="Footer section"
    >
      <div className="max-w-6xl mx-auto">
        {/* Grid sections */}
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8"
          data-testid="test-footer-grid"
          role="list"
        >
          {/* Brand section */}
          <div data-testid="test-footer-brand" role="listitem">
            <h3
              className="text-white font-bold text-xl mb-4"
              data-testid="test-footer-brand-title"
              role="heading"
              aria-level={3}
            >
              Ticket Zen
            </h3>
            <p
              className="mb-4"
              data-testid="test-footer-brand-description"
              aria-label="Company description"
            >
              Streamlining customer support for businesses of all sizes.
            </p>
            <div
              className="flex space-x-4"
              data-testid="test-footer-social-icons"
              role="group"
              aria-label="Social media links"
            >
              <Facebook
                className="w-5 h-5 hover:text-white cursor-pointer"
                aria-label="Facebook link"
                data-testid="test-footer-facebook"
              />
              <Twitter
                className="w-5 h-5 hover:text-white cursor-pointer"
                aria-label="Twitter link"
                data-testid="test-footer-twitter"
              />
              <Linkedin
                className="w-5 h-5 hover:text-white cursor-pointer"
                aria-label="LinkedIn link"
                data-testid="test-footer-linkedin"
              />
              <Instagram
                className="w-5 h-5 hover:text-white cursor-pointer"
                aria-label="Instagram link"
                data-testid="test-footer-instagram"
              />
            </div>
          </div>

          {/* Product section */}
          <div data-testid="test-footer-product" role="listitem">
            <h4
              className="text-white font-semibold mb-4"
              data-testid="test-footer-product-title"
              role="heading"
              aria-level={4}
            >
              Product
            </h4>
            <ul className="space-y-2" data-testid="test-footer-product-list">
              <li>
                <a
                  href="#features"
                  className="hover:text-white transition-colors"
                  data-testid="test-footer-product-features"
                  aria-label="Navigate to features section"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors"
                  data-testid="test-footer-product-pricing"
                  aria-label="View pricing"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="hover:text-white transition-colors"
                  data-testid="test-footer-product-testimonials"
                  aria-label="Read testimonials"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Company section */}
          <div data-testid="test-footer-company" role="listitem">
            <h4
              className="text-white font-semibold mb-4"
              data-testid="test-footer-company-title"
              role="heading"
              aria-level={4}
            >
              Company
            </h4>
            <ul className="space-y-2" data-testid="test-footer-company-list">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors"
                  data-testid="test-footer-about"
                  aria-label="About Ticket Zen"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors"
                  data-testid="test-footer-careers"
                  aria-label="View career opportunities"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors"
                  data-testid="test-footer-blog"
                  aria-label="Read our blog"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact section */}
          <div data-testid="test-footer-contact" role="listitem">
            <h4
              className="text-white font-semibold mb-4"
              data-testid="test-footer-contact-title"
              role="heading"
              aria-level={4}
            >
              Contact
            </h4>
            <ul className="space-y-2" data-testid="test-footer-contact-list">
              <li className="flex items-center">
                <Mail
                  className="w-4 h-4 mr-2"
                  aria-hidden="true"
                  data-testid="test-footer-mail-icon"
                />
                <a
                  href="mailto:hello@ticketzen.com"
                  className="hover:text-white transition-colors"
                  data-testid="test-footer-mail-link"
                  aria-label="Email Ticket Zen"
                >
                  hello@ticketzen.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone
                  className="w-4 h-4 mr-2"
                  aria-hidden="true"
                  data-testid="test-footer-phone-icon"
                />
                <span
                  data-testid="test-footer-phone"
                  aria-label="Company phone number"
                >
                  +1 (555) 123-4567
                </span>
              </li>
              <li className="flex items-center">
                <MapPin
                  className="w-4 h-4 mr-2"
                  aria-hidden="true"
                  data-testid="test-footer-location-icon"
                />
                <span
                  data-testid="test-footer-address"
                  aria-label="Company address"
                >
                  123 Tech Street, San Francisco, CA
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
          data-testid="test-footer-bottom"
          role="contentinfo"
        >
          <p
            data-testid="test-footer-copyright"
            aria-label="Copyright information"
          >
            &copy; {new Date().getFullYear()} Ticket Zen. All rights reserved.
          </p>
          <div
            className="flex space-x-6 mt-4 md:mt-0"
            data-testid="test-footer-legal-links"
            role="group"
            aria-label="Legal links"
          >
            <a
              href="#"
              className="hover:text-white transition-colors"
              data-testid="test-footer-privacy"
              aria-label="Privacy Policy"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors"
              data-testid="test-footer-terms"
              aria-label="Terms of Service"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
