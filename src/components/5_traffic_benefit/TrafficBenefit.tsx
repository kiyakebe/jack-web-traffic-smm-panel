import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { benefits } from "@/data/reason_data";

export default function TrafficBenefit() {
  return (
    <div className="bg-slate-800">
      <div className="lg:container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          Why You Should Trade With Website Traffic SMM Panel
        </h2>
        <p className="text-xl text-slate-100 mb-12 text-center max-w-3xl mx-auto">
          Still not sure why our SMM panel for website traffic services matters?
          Here is a breakdown of what your business stands to benefit from our
          packages
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="bg-slate-700 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardHeader className="flex flex-row items-center space-x-4 pb-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl font-semibold text-purple-600">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-100">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
