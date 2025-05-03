// components/Testimonials.tsx
import Image from "next/image";

interface Testimonial {
    id: number;
    name: string;
    role: string;
    photo: string;
    quote: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Jane Doe",
        role: "Client",
        photo: "/testimonials/jane.jpg",
        quote: "Their caregiver is so kind and attentive. I feel safe and supported at home!"
    },
    {
        id: 2,
        name: "John Smith",
        role: "Family Member",
        photo: "/testimonials/john.jpg",
        quote: "Amazing service. They took such great care of my mom and gave our family peace of mind."
    },
    {
        id: 3,
        name: "Mary Lee",
        role: "Client",
        photo: "/testimonials/mary.jpg",
        quote: "Professional, reliable, and truly caring. Highly recommend Supportive Arms."
    },
];

export default function Testimonials() {
    return (
            <div className="grid mx-auto grid-cols-1 lg:grid-cols-3 gap-8 w-10/12 p-6 border rounded-lg shadow-sm hover:shadow-md transition">
                {testimonials.map(({ id, name, role, photo, quote }) => (
                    <div key={id} className="">
                        <div className="w-40 mb-4 mx-auto xl:w-1/3">
                            <Image
                                src={photo}
                                alt={name}
                                width={500}
                                height={500}
                                className="rounded-full"
                            />
                            <div className="ml-3">
                                <p className="text-base sm:text-lg font-semibold">{name}</p>
                                <p className="text-sm sm:text-base text-gray-500">{role}</p>
                            </div>
                        </div>
                        <p className="text-sm sm:text-base md:text-lg text-gray-700 italic">
                            “{quote}”
                        </p>
                    </div>
                ))}
            </div>
    );
}
