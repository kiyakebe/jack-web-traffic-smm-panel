import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { BarChart2, Target, Zap, Users } from "lucide-react";

const WhatWeDo = () => {
  return (
      <section className="lg:container mx-auto px-4 sm:px-6 lg:px-8 pb-24 mt-8 lg:pb-32">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-purple-600">
                <BarChart2 className="mr-2" />
                Boost SERP Ranking
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Increased traffic can boost your ranking on Search Engine Result
                Pages (SERP). Search engines rank websites with higher
                engagement metrics higher than others.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-purple-600">
                <Users className="mr-2" />
                Higher Conversion Rates
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                More website traffic can easily mean higher conversion rates.
                The more visitors you get, the more potential customers there
                are.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-purple-600">
                <Zap className="mr-2" />
                Boost Online Presence
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Our impeccable services boost your online presence with website
                visitors, YouTube views, social media engagements, and more.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-purple-600">
                <Target className="mr-2" />
                Customizable Options
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Our website traffic SMM panel features customizable options to
                reach your marketing goals quickly.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
  );
};

export default WhatWeDo;
