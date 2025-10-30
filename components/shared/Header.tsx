"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Banner } from "./Banner";

const MENU_ITEMS = [
  // { label: "Milestone", href: "#milestones" },
  { label: "About", href: "#about" },
  { label: "Leasing", href: "#features" },
  { label: "Our Group", href: "#our-companies" },
  { label: "Leadership", href: "#leadership" },
] as const;

interface NavMenuItemsProps {
  className?: string;
  onItemClick?: () => void;
}

const NavMenuItems = ({ className, onItemClick }: NavMenuItemsProps) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = MENU_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);

    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    if (onItemClick) {
      onItemClick();
    }
  };

  return (
    <div className={`flex flex-col gap-1 md:flex-row ${className ?? ""}`}>
      {MENU_ITEMS.map(({ label, href }) => {
        const isActive = activeSection === href.substring(1);
        return (
          <a key={label} href={href} onClick={(e) => handleClick(e, href)}>
            <Button
              variant="link"
              className={`w-full md:w-auto transition-all duration-200 ${
                isActive
                  ? 'text-white font-semibold after:content-[""] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-3/4 after:h-0.5 after:bg-white after:rounded-full'
                  : "text-white/80 hover:text-white"
              }`}
            >
              {label}
            </Button>
          </a>
        );
      })}
    </div>
  );
};

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav className="bg-[#000C41] sticky top-0 isolate z-50 shadow-md">
        <Banner />
        <div className="relative container m-auto flex flex-col justify-between gap-4 px-6 md:flex-row md:items-center md:gap-6 py-3.5 md:py-4">
          <div className="flex items-center justify-between">
            <Link href="/" aria-label="Go to homepage">
              <Image src="/Logo.svg" alt="Logo" width={70} height={40} />
            </Link>
            <Button
              variant="link"
              className="flex size-9 items-center justify-center md:hidden"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X color="white" /> : <Menu color="white" />}
            </Button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden w-full flex-row justify-end gap-5 md:flex">
            <NavMenuItems />
            <Link href="#contact">
              <Button>Contact Us</Button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="flex w-full flex-col justify-end gap-5 pb-2.5 md:hidden">
              <NavMenuItems onItemClick={closeMenu} />
              <Link href="#contact">
                <Button className="w-full" onClick={closeMenu}>
                  Contact Us
                </Button>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
