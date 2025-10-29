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
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-xl mb-4">TicketFlow</h3>
            <p className="mb-4">
              Streamlining customer support for businesses of all sizes.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 hover:text-white cursor-pointer" />
              <Twitter className="w-5 h-5 hover:text-white cursor-pointer" />
              <Linkedin className="w-5 h-5 hover:text-white cursor-pointer" />
              <Instagram className="w-5 h-5 hover:text-white cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#features"
                  className="hover:text-white transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-white transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="hover:text-white transition-colors"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <a
                  href="mailto:hello@ticketflow.com"
                  className="hover:text-white transition-colors"
                >
                  hello@ticketzen.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>123 Tech Street, San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>
            &copy; {new Date().getFullYear()} Ticket Zen. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
