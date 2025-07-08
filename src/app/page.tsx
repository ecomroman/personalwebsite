'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';

const WorldMap = dynamic(() => import('@/components/WorldMap'), { ssr: false });

export default function PersonalWebsite() {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold">Roman Terekh</h1>

      <p className="italic mt-2 text-gray-600">
        Never bet against an Eastern European kid from NYC whose parents came from communism.
      </p>

      <p className="italic mt-2">I like building cool shit</p>

      <section className="mt-6">
        <h2 className="font-bold">Links:</h2>
        <ul className="list-disc list-inside text-blue-600">
          <li>
            <a href="https://x.com/RTerekh" target="_blank" rel="noopener noreferrer">Twitter</a>
          </li>
          <li>
            <a href="https://www.instagram.com/romanterekh_/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/roman-terekh-959671174/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <p className="mb-4">
          <strong>Early life:</strong> Born in New York, raised in Lviv, Ukraine until 5. Fluent in English, Russian,
          and Ukrainian. Got my first lesson in entrepreneurship from reselling sneakers, pokemon cards and silly bands.
        </p>
        <p className="mb-4">
          <strong>Slightly later life:</strong> Tried dropshipping at 15 (failed, but learned a lot), started SMMA at 15
          (first business - $500/mrr with 1 client, learned even more). Did homework for money.
        </p>
        <p className="mb-4">
          <strong>Studies:</strong> NYU Shanghai: 1 semester 2021-2022, dropped out (Shoutout QuickNode for the
          opportunity)
        </p>
        <p className="mb-4">
          Pace University: A college degree was the most important thing for my parents (soviet mentality), so finished
          up online. 2022-2025
        </p>
        <p className="mb-4">
          <strong>Work I&apos;ve done...</strong>
        </p>
        <p className="mb-4">
          <strong>QuickNode:</strong> 2021 - Present
          <br />
          Employee #10. Watched the company go from 1m ARR to a lot more now. Started in marketing, moved over to
          support, and now on customer success. Did everything from fraud prevention to lead generation to posting on
          twitter, and now managing a multi million dollar book of business and closing 7 figure deals.
        </p>
        <p className="mb-4">
          <strong>Cardsnipers:</strong>
          <br />
          2021-2022
          <br />
          First successful startup (kinda). Ran a discord group during the sports cards bubble post covid. Secured
          members thousands in profits, with probably around $200,000 in profit generated for the group. 400 paying
          members. Hired people, and made sure money came into the business. Lost everything I made to the IRS, guess
          they don&apos;t teach you these things in school. Most important, changed peoples lives.
        </p>
        <p className="mb-4">And a shit load of failed companies...</p>
        <p className="mb-4">
          <strong>Things I enjoy:</strong>
          <br />- German cars
          <br />- Tech
          <br />- European Beer
          <br />- Eastern Europe
          <br />- Traveling
        </p>
      </section>

      <section className="mt-6">
        <h2 className="font-bold text-lg">Places I&apos;ve been:</h2>
        <WorldMap />
      </section>

      <section className="mt-6">
        <h2 className="font-bold">Contact:</h2>
        <p>
          Want to connect? Email me at{' '}
          <a
            href="mailto:romanterekh@yahoo.com"
            className="text-blue-600"
          >
            romanterekh@yahoo.com
          </a>
        </p>
      </section>
    </main>
  );
}