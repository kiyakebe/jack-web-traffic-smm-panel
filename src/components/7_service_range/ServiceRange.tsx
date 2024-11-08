"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Flag, Users, MapPin } from "lucide-react";

const countries = [
  {
    name: "United States",
    code: "US",
    content:
      "The US stands as one of the world's largest online markets. It has over 300 million daily users. That is why we offer businesses to tap into this goldmine with the best SMM panel for website traffic. Targeting US website traffic offers a generous ROI, and you do not want to miss it. Try our US website traffic SMM panel packages today and encounter millions of ready customers for your business.",
    stats: { users: "300M+", penetration: "90%" },
  },
  {
    name: "United Kingdom",
    code: "UK",
    content:
      "The UK has a sophisticated digital roadmap, and we can help you break into the market. Our UK-focused website traffic packages target UK customers ready to engage with your products.",
    stats: { users: "65M+", penetration: "95%" },
  },
  {
    name: "Canada",
    code: "CA",
    content:
      "With millions of internet users, Canada offers a large audience for digital marketing. Canadian businesses can generate more leads and drive sales within this lucrative market. Our high-quality Canadian website traffic helps companies gain more visitors and potential clients in Canada.",
    stats: { users: "35M+", penetration: "94%" },
  },
  {
    name: "Australia",
    code: "AU",
    content:
      "Australia has a high internet penetration rate and a thriving digital economy. Wondering how to maximize your business benefits from these? Leave your website traffic to us. Our powerful SMM panel for website traffic has its reach in Australia where we offer great prices for our packages.",
    stats: { users: "22M+", penetration: "88%" },
  },
  {
    name: "India",
    code: "IN",
    content:
      "Our India-specific website traffic packages provide businesses with a direct route to access the massive Indian market. India has a rapidly growing digital economy. Plus, its huge population of internet users is a potential gold mine for online businesses worldwide. Our SMM panel for website traffic can handle the demands of the Indian market and deliver real, targeted traffic to your website.",
    stats: { users: "700M+", penetration: "50%" },
  },
  {
    name: "Germany",
    code: "DE",
    content:
      "Germany has over 93% internet penetration rate with about 80 million active users. That is about 80 million potential customers for businesses seeking real website traffic from Germany. Our SMM panel for website traffic can lead your potential German customers to your site with the barest of fuss.",
    stats: { users: "80M+", penetration: "93%" },
  },
  {
    name: "France",
    code: "FR",
    content:
      "Wondering where you can get about 60 million potential traffic in Europe? France offers that number of active internet users and they can be your customers too. Break into the French digital market with our France website traffic SMM panel packages. With our services, you can expand your presence in France with our targeted French traffic.",
    stats: { users: "60M+", penetration: "91%" },
  },
  {
    name: "Brazil",
    code: "BR",
    content:
      "Brazil has a whopping 187 million internet users and a thriving digital landscape. We understand what this means for businesses within and outside the country. That is why we offer the best SMM panel for website traffic in Brazil. Check out our offers or ask for a curated quote to exploit the huge Brazilian market today.",
    stats: { users: "187M+", penetration: "75%" },
  },
];

export default function ServiceRange() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  return (
    <div className="lg:container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-purple-600">
        Our Service Range - Supported Countries
      </h2>
      <p className="text-lg text-gray-600 mb-12 text-center">
        We have a wide service range for local and international businesses.
        Website Traffic SMM Panel covers multiple countries, including:
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        <Card className="md:col-span-1 bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-purple-600">
              Select a Country
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {countries.map((country) => (
                <li key={country.code}>
                  <Button
                    variant="ghost"
                    className={`w-full justify-start ${
                      selectedCountry.code === country.code
                        ? "bg-purple-100 text-purple-600"
                        : ""
                    }`}
                    onClick={() => setSelectedCountry(country)}
                  >
                    <Flag className="mr-2 h-4 w-4" /> {country.name}
                  </Button>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="md:col-span-2 bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-purple-600 flex items-center">
              <Globe className="mr-2 h-6 w-6" /> {selectedCountry.name}
            </CardTitle>
          </CardHeader>
          <CardContent className="">
            <p className="text-gray-600 mb-10">{selectedCountry.content}</p>

            <div className="flex justify-between items-center bg-purple-100 p-4 rounded-lg">
              <div className="flex items-center">
                <Users className="text-purple-600 mr-2" />
                <span className="text-sm font-medium text-purple-600">
                  Active Users: {selectedCountry.stats.users}
                </span>
              </div>
              <div className="flex items-center">
                <MapPin className="text-purple-600 mr-2" />
                <span className="text-sm font-medium text-purple-600">
                  Internet Penetration: {selectedCountry.stats.penetration}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-8 bg-white shadow-lg">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-purple-600 mb-4">
            Other Countries
          </h3>
          <p className="text-gray-600 mb-6">
            Your target country is not covered? We assure you that it is. We
            also offer services for many other countries. Please contact us for
            specific inquiries.
          </p>
          <a href="https://websitetrafficsmmpanel.com/contact">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-full transition-colors duration-300">
              Contact Support
            </Button>
          </a>
        </CardContent>
      </Card>
    </div>
  );
}
