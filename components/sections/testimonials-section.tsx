"use client";

import { useRef } from "react";
import { testimonials } from "@/data/site-content";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function TestimonialsSection() {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = (direction: "next" | "previous") => {
    const node = trackRef.current;

    if (!node) {
      return;
    }

    const amount = direction === "next" ? node.clientWidth * 0.85 : -node.clientWidth * 0.85;

    node.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="section testimonials-section" id="testimonials">
      <div className="container">
        <div className="testimonials-section__header">
          <SectionHeading
            eyebrow="Testimonials"
            title="Clients trust our effectiveness, integrity, and honesty."
            description="A few examples of how our delivery approach translates into stronger partnerships."
          />
          <div className="testimonials-section__controls">
            <button type="button" onClick={() => handleScroll("previous")}>
              Prev
            </button>
            <button type="button" onClick={() => handleScroll("next")}>
              Next
            </button>
          </div>
        </div>

        <div className="testimonial-track" ref={trackRef}>
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.author} delay={index * 90} className="testimonial-slide">
              <article className="testimonial-card">
                <p>&ldquo;{testimonial.quote}&rdquo;</p>
                <strong>{testimonial.author}</strong>
                <span>{testimonial.role}</span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

