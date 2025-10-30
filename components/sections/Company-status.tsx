"use client";

import { Card, CardContent } from "@/components/ui/card";

export function Stats() {
  return (
    <section className="bg-background section-padding-y border-b">
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col gap-10 md:gap-12">
          <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
            <h2 className="heading-lg text-[#0d257b]">In Numbers</h2>
            <p className="text-muted-foreground">
              We are committed to delivering exceptional value and measurable
              results to our clients. Here are some key statistics that
              highlight our impact and success.
            </p>
          </div>

          <div className="flex flex-col gap-4 md:gap-6 lg:flex-row">
            <Card className="bg-secondary border-none p-6 shadow-none">
              <CardContent className="flex flex-col gap-2 p-0 md:gap-3">
                <h3 className="text-primary font-semibold">Installments</h3>
                <span className="text-[#0d257b] text-3xl font-semibold md:text-3xl">
                  24 months ~ 10 years
                </span>

                <p className="text-muted-foreground text-base">
                  Flexible repayment plans starting from 24 months up to 10
                  years, structured to match project cash flows and minimize
                  monthly burden. Terms are tailored to each credit and business
                  case.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-secondary border-none p-6 shadow-none">
              <CardContent className="flex flex-col gap-2 p-0 md:gap-3">
                <h3 className="text-primary font-semibold">Financing</h3>
                <span className="text-[#0d257b] text-3xl font-semibold md:text-3xl">
                  Up to 90%
                </span>
                <p className="text-muted-foreground text-base">
                  Finance up to 90% of the asset or project value to reduce
                  upfront capital requirements. Financing structure, rates and
                  repayment schedules are approved based on credit assessment
                  and project specifics.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-secondary border-none p-6 shadow-none">
              <CardContent className="flex flex-col gap-2 p-0 md:gap-3">
                <h3 className="text-primary font-semibold">Issued Capital</h3>
                <span className="text-[#0d257b] text-3xl font-semibold md:text-3xl">
                  200M+
                </span>
                <p className="text-muted-foreground text-base">
                  Issued capital of 200 million Egyptian Pounds provides strong
                  financial backing and ensures reliability in executing and
                  supporting financed projects.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
