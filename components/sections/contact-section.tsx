"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import {
  companyProfile,
  imagery,
  serviceInterestOptions
} from "@/data/site-content";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-section__grid">
        <Reveal className="contact-section__content">
          <SectionHeading
            eyebrow="Contact"
            title="Ready to Transform Your Digital Presence?"
            description="Tell us what you need and we will help shape the right engagement, whether that starts with software, infrastructure, or digital growth."
          />

          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              <span>Name</span>
              <input type="text" name="name" placeholder="Your name" required />
            </label>

            <label>
              <span>Email</span>
              <input type="email" name="email" placeholder="you@company.com" required />
            </label>

            <label>
              <span>Service Interest</span>
              <select name="serviceInterest" defaultValue={serviceInterestOptions[0]}>
                {serviceInterestOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <button type="submit" className="button button-primary">
              Send Inquiry
            </button>

            <p className={`contact-form__message ${submitted ? "is-visible" : ""}`}>
              Thanks for reaching out. Your form flow is ready for backend wiring, and
              the current demo state confirms submission on the page.
            </p>
          </form>
        </Reveal>

        <Reveal className="contact-section__visual" delay={120}>
          <div className="contact-section__image-shell">
            <Image
              src={imagery.contact}
              alt="A collaborative planning session in a modern office"
              fill
              sizes="(max-width: 900px) 100vw, 42vw"
            />
          </div>
          <div className="contact-section__details">
            <span>Email</span>
            <strong>{companyProfile.email}</strong>
            <span>Availability</span>
            <strong>{companyProfile.hours}</strong>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
