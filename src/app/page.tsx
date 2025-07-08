import dynamic from "next/dynamic";
import { useState } from "react";

const WorldMap = dynamic(() => import("../components/WorldMap"), { ssr: false });

export default function PersonalWebsite() {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold">Roman Terekh</h1>
      <p className="italic text-gray-600 mt-2">
        Never bet against an Eastern European kid from NYC whose parents came from communism.
      </p>
      <p className="italic mt-2">I like building cool shit</p>

      <section className="mt-6">
        <h2 className="font-bold">Links:</h2>
        <ul className="list-disc list-inside text-blue-600">
          <li><a href="https://twitter.com/">Twitter</a></li>
          <li><a href="https://instagram.com/">Instagram</a></li>
          <li><a href="https://linkedin.com/">LinkedIn</a></li>
        </ul>
      </section>

      <section className="mt-6">
        <p><strong>Early life:</strong> Born in New York, raised in Lviv, Ukraine until 5...</p>
      </section>

      <section className="mt-6">
        <h2 className="font-bold text-lg">Places I've been:</h2>
        <WorldMap />
      </section>

      <section className="mt-6">
        <h2 className="font-bold">Contact:</h2>
        <p>Want to connect? Email me: <a href="mailto:romanterekh@yahoo.com" className="text-blue-600">romanterekh@yahoo.com</a></p>
      </section>
    </main>
  );
}
