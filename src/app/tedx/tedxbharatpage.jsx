"use client"
import React from "react";

const TedXBharatPage = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold flex justify-center">
            <span className="text-red-500">TEDx</span> Bharat
          </h1>
          <p className="text-lg md:text-xl mt-4">
            Inspiring ideas in innovation, national security, and technological advancement.
          </p>
        </div>
      </section>

      {/* About TED */}
      <section className="py-16 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 flex">About <span className="text-red-500">TEDx</span></h2>
          <p className="text-xl leading-relaxed text-gray-300">
            With the tagline "Ideas Worth Spreading," TEDx is a nonprofit organization devoted to promoting truly transformative ideas. TEDx began as a four-day conference in California and currently uses several programs to further its goals. The world's top intellectuals gather at Vancouver's TEDx Conferences every year to give riveting lectures that tend to be freely accessible on TED.com.
          </p>
          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            TEDx's initiatives include the Open Translation Project, TED-Ed, TEDx Prize, TEDx events, and the TEDx Fellows program. These programs seek to promote innovation and knowledge sharing in order to inspire global change.
          </p>
          <div className="mt-6">
            <p className="text-3xl font-bold text-white flex">
              Follow <span className="text-red-500">TEDx on:</span>
            </p>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="http://twitter.com/TEDTalks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#43aee2] hover:underline"
                >
                  Twitter - http://twitter.com/TEDTalks
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/TED/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#43aee2] hover:underline"
                >
                  Facebook - https://www.facebook.com/TED/
                </a>
              </li>
              <li>
                <a
                  href="https://www.ted.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#43aee2] hover:underline"
                >
                  Official website - https://www.ted.com/
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* About TEDx */}
      <section className="py-16 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 flex">About <span className="text-red-500">TEDx</span></h2>
          <p className="text-xl leading-relaxed text-gray-300">
            Inspired by TEDx's objective to convey "ideas worth spreading," TEDx is a global endeavour. These independently organized events foster the dissemination of creative ideas and ground-breaking research while delivering the spirit of TEDx to local communities across the globe.
          </p>
          <p className="mt-4 text-xl leading-relaxed text-gray-300">
            TEDx events, which numerous enthusiastic organizers lead, seek to inspire change and meaningful dialogue on a local level. With both live speakers and recorded TEDx Talks, each event follows strict curation, speaker coaching, and event planning. These individually organised TEDx events are independently functioning under a TEDx license. (Subject to rules and regulations)
          </p>
        </div>
      </section>

      {/* About TEDx Bharat */}
      <section className="py-16 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 flex">About <span className="text-red-500">TEDx Bharat</span></h2>
          <p className="text-xl leading-relaxed text-gray-300">
            TEDx Bharat brings the spirit of TEDx to India, focusing on the defence sector to highlight themes of innovation, national security, and technological advancement. Our esteemed speakers include veterans, policymakers, and tech innovators who explore the role of startups and citizens in shaping India's defence ecosystem.
          </p>
          <p className="mt-4 text-xl leading-relaxed text-gray-300">
            A core mission of TEDx Bharat is to support women entrepreneurs, encouraging their participation and leadership in defence-related startups. From discussions on AI and cybersecurity to showcasing the impact of indigenous manufacturing and defence startups, TEDx Bharat aims to inspire and mobilize the nation towards a secure, self-reliant future.
          </p>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 flex">What to <span className="text-red-500">Expect?</span></h2>
          <p className="text-xl leading-relaxed text-gray-300">
            TEDx Bharat will be offering an enriching experience that focuses on innovation and technological advancements in the defence sector. Attendees will enjoy thought-provoking talks from esteemed veterans, defence researchers, and entrepreneurs.
          </p>
          <p className="mt-4 text-xl leading-relaxed text-gray-300">
            Through engaging discussions on AI, cybersecurity, and encouraging women entrepreneurship, TEDx Bharat inspires a collective effort towards a secure, self-reliant future. Join us to celebrate the diverse and resilient contributions that define Bharat’s defence landscape!
          </p>
        </div>
      </section>
    </div>
  );
};

export default TedXBharatPage;