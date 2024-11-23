import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nebula Accelerator",
  description: "Empowering the future of technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div data-scroll-container>{children}</div>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js" strategy="beforeInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.4/dist/locomotive-scroll.min.js" strategy="beforeInteractive" />
        <Script id="locomotive-scroll">
          {`
            document.addEventListener('DOMContentLoaded', () => {
              const scroll = new LocomotiveScroll({
                el: document.querySelector('[data-scroll-container]'),
                smooth: true,
                smoothMobile: false,
                inertia: 0.75,
              });

              // GSAP ScrollTrigger integration
              scroll.on('scroll', ScrollTrigger.update);

              ScrollTrigger.scrollerProxy('[data-scroll-container]', {
                scrollTop(value) {
                  return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
                },
                getBoundingClientRect() {
                  return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
                },
                pinType: document.querySelector('[data-scroll-container]').style.transform ? "transform" : "fixed"
              });

              ScrollTrigger.addEventListener('refresh', () => scroll.update());
              ScrollTrigger.refresh();
            });
          `}
        </Script>
      </body>
    </html>
  );
}