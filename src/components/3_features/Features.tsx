import React from "react";
import { Card, CardContent } from "../ui/card";
import { CheckCircle } from "lucide-react";
import trafficServices from "@/data/features_data";

export default function Features() {
  return (
    <div id="Features" className="lg:container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
      <h1 className="text-2xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
        Features
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trafficServices.map((service, index) => (
          <FeatureCard
            key={index}
            title={service.title}
            description={service.content}
          />
        ))}
      </div>
    </div>
  );
}

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
      <CardContent className="p-6">
        <CheckCircle className="text-purple-600 mb-4 h-8 w-8" />
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
}
