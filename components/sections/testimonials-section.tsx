"use client";

import { useEffect, useRef, useState } from "react";
import { testimonials } from "@/data/site-content";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

function ArrowLeft() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M11 14L6 9l5-5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M7 14l5-5-5-5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function TestimonialsSection() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const node = trackRef.current;
    if (!node) return;
    const onScroll = () => {
      const slideW = node.scrollWidth / testimonials.length;
      setActiveIndex(Math.min(Math.round(node.scrollLeft / slideW), testimonials.length - 1));
    };
    node.addEventListener("scroll", onScroll, { passive: true });
    return () => node.removeEventListener("scroll", onScroll);
  }, []);

  const handleScroll = (direction: "next" | "previous") => {
    const node = trackRef.current;
    if (!node) return;
    node.scrollBy({ left: direction === "next" ? node.clientWidth * 0.85 : -node.clientWidth * 0.85, behavior: "smooth" });
  };

  const scrollToIndex = (index: number) => {
    const node = trackRef.current;
    if (!node) return;
    const slides = node.querySelectorAll<HTMLElement>(".testimonial-slide");
    if (slides[index]) node.scrollTo({ left: slides[index].offsetLeft, behavior: "smooth" });
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
            <button type="button" aria-label="Previous testimonial" onClick={() => handleScroll("previous")}>
              <ArrowLeft />
            </button>
            <button type="button" aria-label="Next testimonial" onClick={() => handleScroll("next")}>
              <ArrowRight />
            </button>
          </div>
        </div>

        <div className="testimonial-track" ref={trackRef}>
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.author} delay={index * 90} className="testimonial-slide">
              <article className="testimonial-card">
                <span className="testimonial-card__quote-mark" aria-hidden="true">&ldquo;</span>
                <p>&ldquo;{testimonial.quote}&rdquo;</p>
                <strong>{testimonial.author}</strong>
                <span>{testimonial.role}</span>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="testimonial-dots" role="tablist" aria-label="Testimonial navigation">
          {testimonials.map((t, index) => (
            <button
              key={t.author}
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`Go to testimonial ${index + 1}`}
              className={`testimonial-dot${index === activeIndex ? " is-active" : ""}`}
              onClick={() => scrollToIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
