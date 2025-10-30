"use client";

import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export function WeOffer() {
  return (
    <section className="bg-background section-padding-y" id="features">
      <div className="container-padding-x container mx-auto flex flex-col items-center gap-12 md:gap-16 lg:flex-row">
        <div className="w-full flex-1">
          <AspectRatio ratio={4 / 3}>
            <Image
              src="/weoffer.webp"
              alt="Feature "
              fill
              className="object-contain"
            />
          </AspectRatio>
        </div>
        <div className="flex flex-1 flex-col gap-8">
          <div className="section-title-gap-lg flex flex-col items-start">
            <h2 className="heading-lg text-[#0d257b]">WE ALSO OFFER</h2>
            <p className="text-muted-foreground text-justify max-w-lg">
              Finance percentages, repayment periods and return rates vary
              according to credit and business cases. We offer a wide range of
              leasing services to meet the diverse needs of our clients,
              including:
            </p>
            <ul className="list-disc text-foreground font-medium space-y-2 max-w-lg pl-5 marker:text-[#0d257b] marker:text-4xl">
              <li>Installments starting 24 months & up to 10 years</li>
              <li>Competitive returns</li>
              <li>Financing percentage up to 90%</li>
              <li>Least administrative costs</li>
              <li>Easiest purchase of assets</li>
              <li>Freedom of choice for source</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
