import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { maximizationPoints } from "@/data/maximize_data";

export default function MaximizeWebTraffic() {
  return (
    <div className="bg-slate-800">
      <div className="lg:container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-purple-600">
          How to Maximize Our Website Traffic SMM Panel Services
        </h2>
        <p className="text-xl text-slate-100 mb-12 text-center max-w-3xl mx-auto">
          We are the best SMM panel for website traffic. And we know that we can
          help you reach your goals in record time. However, you can maximize
          the benefits of our services with some organic efforts too. To get the
          most out of your website traffic SMM panel, you should do the
          following:
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {maximizationPoints.map((point, index) => (
            <Card
              key={index}
              className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className="flex flex-row items-center space-x-4 pb-2">
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
    </div>
  );
}
