// app/layout.tsx
import "./globals.css";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
import React from "react";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className="flex flex-col ">
        {/*<Header />*/}

        <main className="flex-grow w-full px-6">
            {children}
        </main>

        {/*<Footer />*/}
        </body>
        </html>
    );
}
