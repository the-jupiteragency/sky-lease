"use client";

import { Tagline } from "@/components/ui/tagline";
import Image from "next/image";

export function Ourcompany() {
  const logos = [
    {
      id: 1,
      name: "Company A",
      url: "/logo/logo-1.svg",
      website: "https://sf.sky.eg/",
    },
    {
      id: 3,
      name: "Company C",
      url: "/logo/logo-3.svg",
      website: "https://sky-cx.net/",
    },
    {
      id: 4,
      name: "Company D",
      url: "/logo/logo-4.svg",
      website: "https://ib.sky.eg/",
    },
    {
      id: 5,
      name: "Company E",
      url: "/logo/logo-5.svg",
      website: "http://b.bauto.com/",
    },
    {
      id: 6,
      name: "Company F",
      url: "/logo/logo-6.svg",
      website: "http://brental.sky.eg/",
    },
    {
      id: 7,
      name: "Company G",
      url: "/logo/logo-7.svg",
      website: "https://www.thejupiter.agency/",
    },
    {
      id: 8,
      name: "Company H",
      url: "/logo/logo-8.svg",
      website: "https://www.strada-properties.com/",
    },
  ];
  return (
    <section className="bg-background section-padding-y" id="our-companies">
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col items-center gap-12 md:gap-16">
          <div className="section-title-gap-lg flex max-w-5xl flex-col items-center text-center ">
            <Tagline>Our Group</Tagline>
            <h1 className="heading-lg text-[#0d257b]">Sky Holding Group </h1>
            <p className="text-muted-foreground  md:hidden">
              SKY is a group of companies with annual turnover of EGP 4Bn and
              more than 600 talented people to serve our stakeholders with
              passion.
            </p>
            <p className="text-muted-foreground hidden md:block">
              <a
                href="https://www.sky.eg/"
                target="_blank"
                className=" underline text-[#0d257b]"
              >
                SKY
              </a>{" "}
              is a group of companies with annual turnover of EGP 4Bn and more
              than 600 talented people to serve our stakeholders with passion.
              SKY Holding is divided into 9 companies [ GAS Mercedes-Benz -
              B-AUTO - B-Rental - Sky Finance - Sky Leasing & Factoring - Sky
              Insurance Brokerage - Sky Business Services - Jupiter - and Strada
              Properties ] and we have presence with more than 15 branches
              across Egypt.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-8  ">
            {logos.map((logo) => (
              <a
                href={logo.website}
                target="_blank"
                key={logo.id}
                className="relative w-40 md:w-[190px] lg:w-[195px] h-[75px] bg-background rounded-lg p-4"
              >
                <Image
                  src={logo.url}
                  alt={logo.name}
                  fill
                  className="object-contain  opacity-80 hover:opacity-100 p-2 scale-90 hover:scale-130 transform-gpu transition-transform duration-300 ease-out "
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
