// components/ServiceCard.tsx
import Image from "next/image";

interface ServiceCardProps {
    title: string;
    description: string;
    iconSrc: string;
}

export default function ServiceCard({title, description, iconSrc}: ServiceCardProps) {
    return (
        <div className="w-10/12 p-6 border rounded-lg shadow-sm hover:shadow-md transition ">
            <div className="w-40 mb-4 mx-auto xl:w-1/3">
                <Image
                    src={iconSrc}
                    alt={title}
                    width={500}
                    height={500}
                    className="object-contain"
                />
            </div>

            <h3 className="
               text-xl md:text-2xl
               font-semibold
               mt-2        /* add top margin */
               mb-4        /* bump bottom margin for extra space */
               px-2        /* horizontal padding */
               text-black
               text-center
             ">
                {title}
            </h3>

            <p className="
               text-sm sm:text-base md:text-lg lg:text-xl text-gray-600
               px-2        /* horizontal padding to align with title */
               pb-4        /* bottom padding for breathing room */
               text-center
             ">
                {description}
            </p>


        </div>
    );
}