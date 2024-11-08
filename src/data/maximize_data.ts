import { MaximizeTypes } from "@/types/types";
import { Zap, FileText, Share2, Link, Gift, Smartphone } from "lucide-react";

export const maximizationPoints: MaximizeTypes[] = [
  {
    title: "Optimize Your Website",
    content:
      "Firstly, optimize your website for speed. A slow-loading website can discourage visitors. Optimizing your website for faster load times can encourage the large traffic you need for your business growth. In addition, ensure your website is easy to navigate. Don't forget to make it visually appealing too.",
    icon: Zap,
  },
  {
    title: "Create High-Quality Content",
    content:
      "Produce valuable content that your intended audience will find useful. Using relevant keywords in your content can also improve your website's search engine visibility. But you should not rely on texts alone. Include images, videos, and infographics to make your content more engaging.",
    icon: FileText,
  },
  {
    title: "Use Social Media",
    content:
      "Share content that promotes your website on your social media pages. Also, interact with your followers to build relationships with them. This can spark their curiosity and lead them to find your website and interact with it.",
    icon: Share2,
  },
  {
    title: "Build Backlinks",
    content:
      "You can acquire high-quality backlinks from other relevant websites. Write guest posts on other websites and link your content to your website. This can shift the search engine on your side as it views your content as valuable to your audience.",
    icon: Link,
  },
  {
    title: "Offer Incentives",
    content:
      "Encourage visitors to take action with limited-time offers. These may include contests that excite and attract newcomers. You could also do some giveaways via the website to encourage visitors. Furthermore, loyalty programs and discounts can ensure you keep the visitors you already converted into customers.",
    icon: Gift,
  },
  {
    title: "Consider Mobile-First Websites",
    content:
      "Studies show that over 90% of users access the internet from mobile devices. You are likely to attract more visits and engagement if your website is optimized for mobile access. Your content should also be accessible on the smaller screens to encourage more visits.",
    icon: Smartphone,
  },
];
