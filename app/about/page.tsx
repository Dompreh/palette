"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Header from '../components/Header'

 function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    <Header page="/"/>

      <div className="max-w-3xl mx-auto space-y-8">
        <div
          className={`transform transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <p className="text-xl leading-relaxed text-gray-800">
            In ancient times, some colors were forbidden. Others were
            worshipped. Entire empires fought over a single shade.
          </p>
        </div>

        <div
          className={`transform transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <p className="text-xl leading-relaxed text-gray-800">
            Chemists risked madness to create a new pigment. Some colors killed
            and poisoned. Some healed. Some seduced.
          </p>
        </div>

        <div
          className={`transform transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <p className="text-xl leading-relaxed text-gray-800">
            At Palette, we believe color isn't just design, it's narrative. We
            created this tool to give designers, artists, and storytellers a new
            superpower: meaning.<br /> <br/>
            You don't need more colors. You need better reasons to pick them.
            Palette helps you stop winging it and start choosing colors with a
            reason.
          </p>
        </div>

        <div
          className={`transform transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "1000ms" }}
        >
          <div className="pt-8">
            <Link
              href="/"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors group"
            >
              <svg
                className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to colors
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default About


//Palette helps designers choose colors that don’t just look good they say something. Every shade has a story. Make sure your design tells the right one