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
];

const contactLinks: FooterLink[] = [
  { label: "Book a Call", href: "https://calendly.com/xharish52/30min" },
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
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
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
    <footer className="relative border-t border-gray-200 pt-20 pb-20 overflow-hidden">
      <div className="relative max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left - Brand */}
          <div className="md:col-span-5">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-70" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              <span className="text-sm font-medium text-gray-800">
                Available for Work
              </span>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center text-white shadow-sm">
                <BsInfinity className="w-6 h-6" />
              </div>
              <div>
                <div className="font-heading font-semibold text-gray-900 text-lg leading-tight">
                  Infinite Studio X
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-500 max-w-sm">
              Building pixel-perfect digital experiences for fintech, AI, and SaaS companies.
            </p>
          </div>

          {/* Right - Links */}
          <div className="md:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
              <FooterColumn title="Quick Links" links={quickLinks} />
              <FooterColumn title="Contact" links={contactLinks} />
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-500">
              © {year} Infinite Studio X. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <a
                href="https://calendly.com/xharish52/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

