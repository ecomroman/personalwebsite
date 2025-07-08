"use client"

import dynamic from "next/dynamic"

// Dynamically import to avoid SSR issues
const WorldMap = dynamic(() => import("react-svg-worldmap").then(mod => mod.WorldMap), {
  ssr: false,
})

// Define country data type locally (no need to import from the package)
type CountryDatum = {
  country: string
  value: number
}

const visitedCountries: CountryDatum[] = [
  { country: "US", value: 1 },
  { country: "CA", value: 1 },
  { country: "JM", value: 1 },
  { country: "CR", value: 1 },
  { country: "SE", value: 1 },
  { country: "PT", value: 1 },
  { country: "NL", value: 1 },
  { country: "FR", value: 1 },
  { country: "IT", value: 1 },
  { country: "PL", value: 1 },
  { country: "CZ", value: 1 },
  { country: "EG", value: 1 },
  { country: "AE", value: 1 }, // UAE for Dubai
  { country: "TR", value: 1 },
  { country: "GR", value: 1 },
  { country: "UA", value: 1 },
  { country: "SK", value: 1 },
  { country: "TH", value: 1 },
  { country: "SG", value: 1 },
  { country: "MM", value: 1 },
  { country: "LA", value: 1 },
]

export default function VisitedWorldMap() {
  return (
<div className="my-8">
<h3 className="text-lg font-bold mb-4">Countries I've Been To</h3>
      <WorldMap
        color="teal"
        title=""
        size="responsive"
        valueSuffix=" visited"
        data={visitedCountries}
        backgroundColor="#ffffff"
        borderColor="#2d3748"
      />
    </div>
  )
}
