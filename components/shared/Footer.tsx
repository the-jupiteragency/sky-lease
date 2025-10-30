"use client";

import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <footer id="contact" className="bg-[#001233] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <div className="w-12 h-0.5 bg-white mb-8"></div>
          <h2 className="text-4xl font-light mb-8 tracking-wide">FAQ</h2>
          <div className="flex flex-col gap-2">
            {/* FAQ Accordion (Leasing & Factoring) */}
            <Accordion
              type="single"
              collapsible
              aria-label="Leasing and factoring FAQ"
            >
              {/* FAQ Item 1 */}
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  What leasing and factoring services does Sky Lease provide?
                </AccordionTrigger>
                <AccordionContent>
                  Sky Lease offers tailored asset leasing solutions (operating
                  and finance leases) to help businesses acquire equipment and
                  machinery without large upfront costs. We also provide
                  factoring services that turn outstanding invoices into
                  immediate working capital by purchasing or advancing funds
                  against your receivables.
                </AccordionContent>
              </AccordionItem>

              {/* FAQ Item 2 */}
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  What is the difference between leasing and factoring?
                </AccordionTrigger>
                <AccordionContent>
                  Leasing finances the use of a physical asset (vehicles,
                  equipment) where you pay periodic rentals; ownership may
                  transfer at the end depending on the agreement. Factoring
                  converts your unpaid invoices into cash up front, improving
                  liquidity while a third party handles collections (in some
                  arrangements).
                </AccordionContent>
              </AccordionItem>

              {/* FAQ Item 3 */}
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  How can leasing benefit my business?
                </AccordionTrigger>
                <AccordionContent>
                  Leasing preserves working capital, enables predictable
                  budgeting through fixed payments, and lets you access up-to-
                  date equipment. It can also provide tax and accounting
                  advantages depending on the lease type and local regulations.
                </AccordionContent>
              </AccordionItem>

              {/* FAQ Item 4 */}
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  How does factoring improve cash flow?
                </AccordionTrigger>
                <AccordionContent>
                  Factoring accelerates cash collection by advancing a large
                  portion of an invoice value (usually 70–90%) so you
                  don&rsquo;t wait for customer payment terms. This frees up
                  capital for payroll, inventory, or growth. We offer both
                  recourse and non-recourse factoring options depending on your
                  needs.
                </AccordionContent>
              </AccordionItem>

              {/* FAQ Item 5 */}
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">
                  Who is eligible for Sky Lease's services?
                </AccordionTrigger>
                <AccordionContent>
                  Small and medium-sized enterprises, established companies, and
                  some startups with verifiable contracts or invoices are
                  typically eligible. Eligibility depends on the asset,
                  receivables quality, credit assessment, and required
                  documentation.
                </AccordionContent>
              </AccordionItem>

              {/* FAQ Item 6 */}
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left">
                  How do I apply and what documents are required?
                </AccordionTrigger>
                <AccordionContent>
                  To apply, contact our team or submit the application form.
                  Typical documents include company registration, ID for
                  directors, recent financial statements, invoices or contracts
                  for factoring, and asset quotations for leasing. After
                  application, we perform credit checks, asset appraisal (for
                  leases), and issue a formal offer with terms.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-light mb-8 tracking-wide">
            GET IN TOUCH
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="w-full bg-transparent border-b border-white/30 py-3 text-white placeholder-white/60 focus:outline-none focus:border-white transition"
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Enter Your Email *"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="w-full bg-transparent border-b border-white/30 py-3 text-white placeholder-white/60 focus:outline-none focus:border-white transition"
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Enter Your Subject"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                required
                className="w-full bg-transparent border-b border-white/30 py-3 text-white placeholder-white/60 focus:outline-none focus:border-white transition"
              />
            </div>

            <div>
              <textarea
                placeholder="Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                rows={4}
                className="w-full bg-transparent border-b border-white/30 py-3 text-white placeholder-white/60 focus:outline-none focus:border-white transition resize-none"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={status === "sending"}
                className="px-12 py-3 border border-white text-white hover:bg-white hover:text-[#001233] transition disabled:opacity-50"
              >
                {status === "sending" ? "Sending..." : "Submit"}
              </button>
            </div>

            {status === "success" && (
              <p className="text-green-400 text-sm">
                Message sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-sm">
                Failed to send message. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/20 text-center">
        <p className="text-sm text-white/60">
          © {new Date().getFullYear()} Sky Lease. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
