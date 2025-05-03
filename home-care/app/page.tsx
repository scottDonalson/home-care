// app/page.tsx
import React from "react";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import Testimonials from "@/components/Testimonials";
import Link from "next/link";

const previewServices = [
  {
    title: "Personal Care",
    description: "Bathing, grooming, dressing and other daily living tasks.",
    iconSrc: "/icons/personal-care.jpg",
  },
  {
    title: "Meal Preparation",
    description: "Nutritious meals cooked to your needs.",
    iconSrc: "/icons/meal-prep.jpg",
  },
  {
    title: "Companionship",
    description: "Friendly conversation and emotional support.",
    iconSrc: "/icons/companionship.jpg",
  },
];

export default function HomePage() {
  return (
      <main className="w-full px-6 space-y-16">
        {/* Hero */}
        <Hero />

        {/* Services */}

        <section className="w-full bg-gray-50 py-16">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center mb-8 text-black">
            How We Can Help You
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {previewServices.map((svc) => (
                <div key={svc.title} className="flex justify-center">
                  <ServiceCard
                      title={svc.title}
                      description={svc.description}
                      iconSrc={svc.iconSrc}
                  />
                </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
                // href="/services"
                className="inline-block bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition"
            >
              View All Services
            </Link>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full bg-gray-50 py-16 text-black">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8">
            What Our Clients Say
          </h2>
          <div className="">
            <Testimonials />
          </div>
        </section>

        {/* Final CTA */}
        <section className="w-full bg-blue-600 text-white py-16 text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-6">
              Reach out today and find out how Supportive Arms can make a difference in your daily life.
            </p>
            <Link
                // href="/contact"
                className="inline-block bg-white text-blue-600 py-3 px-8 rounded font-semibold hover:bg-gray-100 transition"
            >
              Request a Consultation
            </Link>
          </div>
        </section>
      </main>
  );
}
