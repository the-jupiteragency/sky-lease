"use client";

import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Tagline } from "@/components/ui/tagline";

export function Feature() {
  return (
    <section className="bg-background section-padding-y" id="features">
      <div className="container-padding-x container mx-auto flex flex-col items-center gap-12 md:gap-16 lg:flex-row">
        <div className="flex flex-1 flex-col gap-8">
          <div className="section-title-gap-lg flex flex-col items-start">
            <Tagline> What we do </Tagline>
            <h2 className="heading-lg text-[#0d257b]">Financial Leasing</h2>
            <p className="text-muted-foreground text-justify max-w-lg">
              We will help you start your business without the hassle of going
              through bank loans or borrowing a large capital. With our Finance
              Lease service, you can purchase all the necessary equipment, land
              and other assets and your enterprise will take possession of the
              assets at the end of the installed payments. All transactions are
              governed by Law 176 for the year 2018.
            </p>
          </div>
        </div>
        <div className="w-full flex-1">
          <AspectRatio ratio={4 / 3}>
            <Image
              src="/feature.webp"
              alt="Feature section image"
              fill
              className="object-cover"
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  );
}
