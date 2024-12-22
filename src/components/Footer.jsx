import React from "react";
import {
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  ChevronDown,
} from "lucide-react";
import img1 from "../assets/download_android_app_us.svg";
import img2 from "../assets/download_ios_app_us.svg";
const socialLinks = [
  { name: "Instagram", href: "#", Icon: Instagram },
  { name: "Facebook", href: "#", Icon: Facebook },
  { name: "Twitter", href: "#", Icon: Twitter },
  { name: "YouTube", href: "#", Icon: Youtube },
];

const footerSections = {
  community: {
    title: "Community",
    links: [
      { label: "HOBH Community", href: "#" },
      { label: "HOBH for Schools & Teachers", href: "#" },
      { label: "HOBH for Parents", href: "#" },
      { label: "HOBH Scholarships", href: "#" },
      { label: "Honor Code", href: "#" },
      { label: "Community Guidelines", href: "#" },
      { label: "Insights: The HOBH Blog", href: "#" },
      { label: "Become a Volunteer", href: "#" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "Homework Questions & Answers", href: "#" },
      { label: "Textbook Solutions", href: "#" },
      { label: "Online Tutoring", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Advertise with us", href: "#" },
      { label: "Terms of Use", href: "#" },
      { label: "Copyright Policy", href: "#" },
      { label: "Privacy Policy", href: "#" },
    ],
  },
  help: {
    title: "Help",
    links: [
      { label: "Signup", href: "#" },
      { label: "Help Center", href: "#" },
      { label: "Safety Center", href: "#" },
      { label: "Responsible Disclosure Agreement", href: "#" },
    ],
  },
};

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brainly.com Section */}
          <div className="flex flex-col gap-6">
            {/* Social Links */}
            <div>
              <h2 className="text-white font-semibold mb-4">Connect with us</h2>
              <div className="flex gap-4">
                {socialLinks.map(({ name, href, Icon }) => (
                  <a
                    key={name}
                    href={href}
                    className="text-gray-400 hover:text-gray-300 transition-colors"
                    aria-label={name}
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* App Store Buttons */}
            <div className="flex gap-4">
              <a
                href="#"
                className="transition-opacity hover:opacity-80"
                aria-label="Download on the App Store"
              >
                <img src={img1} alt="App Store" className="h-10" />
              </a>
              <a
                href="#"
                className="transition-opacity hover:opacity-80"
                aria-label="Get it on Google Play"
              >
                <img src={img2} alt="Google Play" className="h-10" />
              </a>
            </div>
            <button className="flex items-center gap-2 bg-transparent border border-gray-700 rounded px-3 py-2 text-gray-400 w-fit">
              hboh.com
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* Footer Sections */}
          {Object.values(footerSections).map((section) => (
            <div key={section.title} className="flex flex-col gap-3">
              <h2 className="text-white font-semibold">{section.title}</h2>
              <ul className="flex flex-col gap-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-gray-300 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
