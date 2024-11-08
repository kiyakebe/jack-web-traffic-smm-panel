import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { steps } from "@/data/steps_data";

export default function HowItWorks() {
  return (
    <div className="lg:container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
        How Website Traffic SMM Panel Works
      </h2>
      <p className="text-xl text-gray-600 mb-12 text-center max-w-6xl mx-auto">
        Website Traffic SMM Panel is easy to use. You do not have to endure a
        lot of rigorous steps to drive real traffic to your website. Just follow
        these simple steps to get started.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {steps.map((step, index) => (
          <Card
            key={index}
            className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <CardHeader className="flex flex-row items-center space-x-4 pb-4">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                <step.icon className="w-6 h-6 text-purple-600" />
              </div>
              <CardTitle className="text-xl font-semibold text-purple-600">
                {step.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{step.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
