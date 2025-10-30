"use client";

import Image from "next/image";
import { Tagline } from "@/components/ui/tagline";

export function Team() {
  const teamMembers = [
    {
      name: "Belal Khalil",
      role: "The Chairman",
      image: "/team/1.webp",
    },
    {
      name: "Mohamed Belal",
      role: "Group Chief & Executive Officer",
      image: "/team/2.webp",
    },
    {
      name: "Said El Nady",
      role: "SKY Leasing & Factoring Managing Director",
      image: "/team/3.webp",
    },
    {
      name: "Tamer Abdelshafie",
      role: "Board Member & Independent Director",
      image: "/team/4.webp",
    },
    {
      name: "Hesham Hamdy",
      role: "Board Member & Independent Director",
      image: "/team/5.webp",
    },
    {
      name: "Ibrahim Hussain",
      role: "Board Member & Independent Director",
      image: "/team/6.webp",
    },
    {
      name: "Lucy Magdy",
      role: "Board Member & Independent Director",
      image: "/team/7.webp",
    },
    {
      name: "Nehal Belal",
      role: "Board Member & Non-Executive Director",
      image: "/team/8.webp",
    },
    {
      name: "Mohab Belal",
      role: "Board Member & Non-Executive Director",
      image: "/team/10.webp",
    },
  ];

  return (
    <section className="bg-background section-padding-y" id="leadership">
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col items-center gap-10 md:gap-12">
          <div className="section-title-gap-lg flex max-w-xl flex-col items-center text-center">
            <Tagline>Our Leadership</Tagline>
            <h2 className="heading-lg text-[#0d257b]">
              Meet Our Executive Team
            </h2>
            <p className="text-muted-foreground">
              Our experienced leadership team brings decades of financial and
              leasing expertise, driving Sky Lease&apos;s commitment to
              excellence and innovation in the Egyptian market.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-5 lg:gap-x-12 lg:gap-y-12">
            {teamMembers.slice(0, 5).map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-4 text-center"
              >
                <div className="flex flex-col items-center gap-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={100}
                    height={100}
                    className="h-30 w-30 rounded-full object-cover border-2 border-[#0d257b]"
                  />
                  {/* <Avatar className="h-30 w-30 rounded-full">
                    <AvatarImage src={member.image} alt={member.name} />
                  </Avatar> */}
                  <div className="flex flex-col">
                    <p className="text-foreground text-base font-semibold">
                      {member.name}
                    </p>
                    <p className="text-muted-foreground text-base">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-12 lg:gap-y-12">
            {teamMembers.slice(5).map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-4 text-center"
              >
                <div className="flex flex-col items-center gap-4">
                  {/* <Avatar className="h-30 w-30 rounded-full">
                    <AvatarImage src={member.image} alt={member.name} />
                  </Avatar> */}
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={100}
                    height={100}
                    className="h-35 w-35 rounded-full object-contain border-2 border-[#0d257b]"
                  />
                  <div className="flex flex-col">
                    <p className="text-foreground text-base font-semibold ">
                      {member.name}
                    </p>
                    <p className="text-muted-foreground text-base w-52">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
