import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Mail, MessageSquare, Ticket } from "lucide-react";

export default function Contact() {
  return (
    <div className="lg:container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
      <Card>
        <CardHeader>
          <CardTitle>Get in Touch</CardTitle>
          <CardDescription className="text-lg">
              Are you ready for business with us, or have further questions? Our
              support team is available 24/7 to assist with your requests.
          </CardDescription>
        </CardHeader>
        <CardContent className="gap-4 lg:flex justify-between">
          <div className="flex items-center space-x-2">
            <Mail className="h-5 w-5 text-muted-foreground text-purple-600" />
            <span>support@websitetrafficsmmpanel.com</span>
          </div>

          <div className="flex items-center space-x-2">
            <MessageSquare className="h-5 w-5 text-muted-foreground text-purple-600" />
            <span>
              Live Chat: Login into your user area to use our live chat
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <Ticket className="h-5 w-5 text-muted-foreground text-purple-600" />
            <span>
              Ticket: Login into your user area and open a support ticket
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
