// components/Hero.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="py-20 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                Supportive Arms Home Care
            </h1>
            <p className="hidden">
                Compassionate, non-medical care to help you or your loved ones live safely and comfortably at home.
            </p>
            <Image
                src="/hero.jpg"
                alt="Caregiver assisting a senior at home"
                width={1200}
                height={500}
                className="w-full object-cover rounded-lg shadow-md mx-auto mb-6"
                priority
            />
            <Link
                href="/contact"
                className="inline-block bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700 transition text-base sm:text-lg"
            >
                Request a Consultation
            </Link>
        </section>
    );
}