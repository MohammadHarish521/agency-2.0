"use client";

import { BsInfinity } from "react-icons/bs";

type FooterLink = {
  label: string;
  href: string;
};

const quickLinks: FooterLink[] = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Book a Call", href: "#contact" },
];

const industries: FooterLink[] = [
  { label: "AI", href: "#" },
  { label: "Marketing", href: "#" },
  { label: "B2B", href: "#" },
  { label: "Mobile Apps", href: "#" },
  { label: "Web3", href: "#" },
  { label: "Sales", href: "#" },
  { label: "Fintech", href: "#" },
  { label: "Ed-tech", href: "#" },
  { label: "Healthcare", href: "#" },
  { label: "Supply Chain", href: "#" },
];

const contactLinks: FooterLink[] = [
  { label: "Book a Call", href: "#contact" },
  { label: "x.com", href: "#" },
  { label: "Dribbble", href: "#" },
  { label: "LinkedIn", href: "#" },
];

const legalLinks: FooterLink[] = [
  { label: "Privacy Policy", href: "#" },
  { label: "Refund Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
];

function FooterColumn({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div>
      <div className="text-sm font-semibold text-gray-900 mb-5">{title}</div>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-gray-200 pt-20 pb-56 overflow-hidden">

      <div className="relative max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left */}
          <div className="lg:col-span-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-70" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              <span className="text-sm font-medium text-gray-800">
                Available for Work
              </span>
            </div>

            <div className="mt-7 flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center text-white shadow-sm">
                <BsInfinity className="w-6 h-6" />
              </div>
              <div>
                <div className="font-heading font-semibold text-gray-900 text-lg leading-tight">
                  Infinite Studio X
                </div>
                <div className="text-sm text-gray-500">
                  © {year}. All rights reserved.
                </div>
              </div>
            </div>

          </div>

          {/* Right */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
              <FooterColumn title="Quick Links" links={quickLinks} />
              <FooterColumn title="Industries" links={industries} />

              <div>
                <FooterColumn title="Contact" links={contactLinks} />

                <div className="mt-8">
                  <div className="text-sm font-semibold text-gray-900 mb-5">
                    Legal
                  </div>
                  <ul className="space-y-3">
                    {legalLinks.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

