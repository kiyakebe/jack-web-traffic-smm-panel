import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { guidePoints } from "@/data/buying_data";

export default function BuyingGuid() {
  return (
    <div className="lg:container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-purple-600">
        Buying Guide - How to Choose the Best SMM Panel for Website Traffic
      </h2>
      <p className="text-xl text-slate-800 mb-12 text-center max-w-3xl mx-auto">
        An SMM panel for website traffic is a reliable solution to your
        marketing needs. However, not all panels are created equal. Here are
        some key factors to consider when choosing the right SMM panel for
        website traffic:
      </p>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {guidePoints.map((point, index) => (
          <Card
            key={index}
            className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader className="flex flex-row items-center space-x-4 pb-4">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                <point.icon className="w-6 h-6 text-purple-600" />
              </div>
              <CardTitle className="text-xl font-semibold text-purple-600">
                {point.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{point.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
