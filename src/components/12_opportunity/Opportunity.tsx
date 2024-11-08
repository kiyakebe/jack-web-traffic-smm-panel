import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { statistics } from "@/data/stastics_data";
import { LineChart } from "lucide-react";

export default function Opportunity() {
  return (
    <div className="lg:container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-purple-600">
        Website Traffic SMM Panel - An Opportunity for Businesses
      </h2>

      <Card className="bg-white shadow-lg mb-8">
        <CardContent className="pt-6">
          <p className="text-gray-600 mb-4">
            An SMM panel allows users to purchase social media marketing
            services at discounted rates. These services can include increasing
            website traffic, social media followers, likes, shares, views, and
            other engagement metrics.
          </p>
          <p className="text-gray-600">
            The best SMM panels for website traffic can give businesses a 70%
            increase in website traffic within the first three months. In
            addition, SMM panels are more cost effective than traditional
            marketing. Small businesses, in particular, can benefit from
            affordable packages that provide substantial returns on investment.
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {statistics.map((stat, index) => (
          <Card key={index} className="bg-white shadow-md">
            <CardHeader className="p-4">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-2">
                <stat.icon className="w-6 h-6 text-purple-600" />
              </div>
              <CardTitle className="text-2xl font-bold text-purple-600">
                {stat.value}
              </CardTitle>
            </CardHeader>
            <CardContent className="px-4 pb-4">
              <p className="text-gray-600">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="md:flex gap-8">
        <Card className="bg-white grow-0 md:w-1/2 shadow-lg mb-8">
          <CardContent className="pt-6">
            <p className="text-gray-600 mb-4">
              Furthermore, SMM panels for website traffic help increase
              interaction on social media posts. This can lead to higher website
              visits in the long run. Businesses have seen a 50% increase in
              social media engagement after integrating SMM panels into their
              marketing strategy. With more likes, shares, and followers, your
              brand becomes more recognizable. This increased visibility
              translates to more website visits and potential conversions.
            </p>
            <p className="text-gray-600">
              SMM panels for website traffic also provide real-time analytics.
              Businesses can track the performance of their campaigns. This
              data-driven approach helps in making informed decisions.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white grow-0 md:w-1/2 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center text-xl font-semibold text-purple-600">
              <LineChart className="w-6 h-6 mr-2" />
              Key Benefits
            </CardTitle>
          </CardHeader>
          <CardContent className="">
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>
                The best SMM panels for website traffic do not only send
                visitors to your websites.
              </li>
              <li>
                They can help businesses reach a targeted audience through
                locations, interests, and other demographics.
              </li>
              <li>
                They also let businesses manage their digital marketing efforts
                from a single dashboard.
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
