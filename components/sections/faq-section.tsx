"use client";

import { useState } from "react";
import { faqItems } from "@/data/site-content";
import { SectionHeading } from "@/components/ui/section-heading";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section faq-section" id="faq">
      <div className="container faq-section__grid">
        <SectionHeading
          eyebrow="FAQ"
          title="Clear answers for teams planning their next technology move."
          description="We keep discovery transparent so timelines, pricing, and support models are easy to understand."
        />

        <div className="faq-list">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <article key={item.question} className={`faq-item ${isOpen ? "is-open" : ""}`}>
                <button
                  type="button"
                  className="faq-item__trigger"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span>{item.question}</span>
                  <span>{isOpen ? "-" : "+"}</span>
                </button>
                <div className="faq-item__content">
                  <p>{item.answer}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

