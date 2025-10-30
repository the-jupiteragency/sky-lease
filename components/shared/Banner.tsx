"use client";

import { MapPin, Mail, Facebook, Linkedin, Phone } from "lucide-react";
import Link from "next/link";

export function Banner() {
  return (
    <aside
      role="banner"
      aria-label="Contact Information"
      className="relative flex items-center bg-[#EFF1F2] py-3 px-4"
    >
      <div className="flex w-full items-center justify-around flex-wrap gap-2">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-[#20303C] hidden md:block" />
            <a
              href="tel:15759"
              className="text-sm text-[#20303C] hover:underline"
            >
              <span>15759</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-[#20303C]" />
            <a
              href="https://maps.app.goo.gl/F6R4hLbtUhmG9zMq7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#20303C] hover:underline"
            >
              <span className="hidden md:block">
                One Kattameya, 215, Maadi Kattameya Ringroad - Cairo, Egypt
              </span>
              <span className="md:hidden">Location</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-[#20303C] hidden md:block" />
            <a
              href="mailto:info@skylease.net"
              className="text-sm text-[#20303C] hover:underline"
            >
              info@skylease.net
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="h-4 w-4 text-[#20303C] hover:text-blue-600" />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-4 w-4 text-[#20303C] hover:text-blue-600" />
          </Link>
        </div>
      </div>
    </aside>
  );
}
