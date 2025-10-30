"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section
      className="bg-background section-padding-y"
      aria-labelledby="hero-heading"
    >
      <div className="container-padding-x container mx-auto flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
        {/* Left Column */}
        <div className="flex flex-1 flex-col gap-6 lg:gap-8">
          <div className="section-title-gap-xl flex flex-col">
            <h1 id="hero-heading" className="heading-xl text-[#0d257b]">
              Leasing Just Got Easier
            </h1>
            {/* Description */}
            <p className="text-muted-foreground text-base lg:text-lg text-justify">
              Sky Lease Company (LLC) Registered by the Financial Regulatory
              Authority Sky Finance Lease, a member of Sky Holding, is a leading
              company offering competitive financing solutions to help our
              clients fuel growth, increase investment and resolve liquidity and
              cash flow issues. We also pride ourselves on putting our diverse
              finance portfolio at our clients’ service.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row">
            {/* <Button>Get started</Button> */}
            <Link href="#features">
              <Button variant="skylease">
                Explore
                <ArrowRight />
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full flex-1">
          <AspectRatio ratio={1 / 1}>
            <Image
              src="/hero.webp"
              alt="Hero section visual"
              fill
              priority
              className="h-full w-full object-cover"
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  );
}
