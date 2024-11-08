import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { services_data } from "@/data/service_data";

export default function Component() {
  return (
    <div id="Services" className="lg:container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-purple-600">
        Our Services
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services_data.map((service, index) => (
          <Card
            key={index}
            className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader className="flex items-center space-x-4 pb-2">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                <service.icon className="w-6 h-6 text-purple-600" />
              </div>
              <CardTitle className="text-xl font-semibold text-purple-600">
                {service.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-center">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
