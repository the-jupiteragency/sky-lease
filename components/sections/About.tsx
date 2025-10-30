"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function About() {
  return (
    <section className="bg-background section-padding-y" id="about">
      <div className="container-padding-x container mx-auto flex flex-col gap-10 md:gap-12">
        {/* Section Title */}
        <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
          {/* Tagline */}
          {/* Main Heading */}
          <h2 className="heading-lg text-[#0d257b]">About Sky Lease Company</h2>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 gap-3 md:gap-6 lg:grid-cols-3 lg:grid-rows-2">
          {/* Wide Feature Card - Top Left */}
          <Card className="bg-muted/80 gap-0 overflow-hidden border-none p-0 shadow-none lg:col-span-2 scale-100 hover:scale-105 transform-gpu transition-transform duration-300 ease-out">
            <Image
              src="/about/about.webp"
              alt="AI Meeting Notes"
              width={813}
              height={332}
              className="hidden h-auto w-full object-cover md:block md:h-[332px] "
            />
            <Image
              src="/about/about.webp"
              alt="AI Meeting Notes"
              width={480}
              height={332}
              className="block h-auto w-full md:hidden"
            />
            <CardContent className="flex flex-col gap-2 p-6">
              <h3 className="text-foreground text-lg font-semibold">
                About Sky Lease
              </h3>
              <p className="text-muted-foreground">
                Sky Lease is a leading financial institution specializing in
                innovative leasing solutions. With years of expertise in the
                Egyptian market, we provide flexible financing options that
                empower businesses to grow and succeed.
              </p>
            </CardContent>
          </Card>
          {/* Regular Feature Card - Top Right */}
          <Card className="bg-muted/80 gap-0 overflow-hidden  border-none p-0 shadow-none lg:col-span-1 scale-100 hover:scale-105 transform-gpu transition-transform duration-300 ease-out">
            <Image
              src="/about/mission.webp"
              alt="Universal Search"
              width={480}
              height={332}
              className="h-auto w-full object-cover md:h-[332px]"
            />
            <CardContent className="flex flex-col gap-2 p-6">
              <h3 className="text-foreground text-lg font-semibold">MISSON</h3>
              <p className="text-muted-foreground">
                To offer legally compliant and tailored financing solution to
                any project.
              </p>
            </CardContent>
          </Card>
          {/* Regular Feature Card - Bottom Left */}
          <Card className="bg-muted/80 gap-0 overflow-hidden border-none p-0 shadow-none lg:col-span-1 scale-100 hover:scale-105 transform-gpu transition-transform duration-300 ease-out">
            <Image
              src="/about/value.webp"
              alt="About Sky Lease"
              width={480}
              height={332}
              className="h-auto w-full object-cover md:h-[332px]"
            />
            <CardContent className="flex flex-col gap-2 p-6">
              <h3 className="text-foreground text-lg font-semibold">VALUES</h3>
              <p className="text-muted-foreground">
                Credibility and transparency are at the core of our partnerships
                with clients and other growth partners.
              </p>
            </CardContent>
          </Card>
          {/* Wide Feature Card - Bottom Right */}
          <Card className="bg-muted/80 gap-0 overflow-hidden border-none p-0 shadow-none lg:col-span-2 scale-100 hover:scale-105 transform-gpu transition-transform duration-300 ease-out">
            <Image
              src="/about/vision.webp"
              alt="Team Insights"
              width={813}
              height={332}
              className="hidden h-[332px] w-full object-cover md:block"
            />
            <Image
              src="/about/vision.webp"
              alt="Team Insights"
              width={480}
              height={332}
              className="block h-auto w-full object-cover md:hidden md:h-[332px]"
            />
            <CardContent className="flex flex-col gap-2 p-6">
              <h3 className="text-foreground text-lg font-semibold">VISION</h3>
              <p className="text-muted-foreground">
                To become the right arm for our clients by efficiently
                responding to their financial needs to strengthen their
                investments.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
