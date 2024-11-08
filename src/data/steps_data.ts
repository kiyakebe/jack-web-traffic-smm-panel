import { StepsTypes } from "@/types/types";
import { UserPlus, Package, ShoppingCart, BarChart } from "lucide-react";

export const steps: StepsTypes[] = [
    {
      title: "Signup",
      description:
        "Create an account with your email and a secure password. You will not have to complete a very long form to create an account with us. Submit some information about you and your needs; you are all set to begin.",
      icon: UserPlus,
    },
    {
      title: "Browse and Select a Package",
      description:
        "Website Traffic SMM Panel offers a host of packages for your traffic needs. We have amazing deals for various goals and budgets too. And you can easily browse through these options to find the right deal. We also offer assistance to those who need something different or require help in choosing the best package for their website traffic.",
      icon: Package,
    },
    {
      title: "Place Your Order",
      description:
        "It's easy to place an order once you know what package you want. We provide a user-friendly interface to guide you through the process. Select the services you desire and provide the necessary details. Then proceed to checkout.",
      icon: ShoppingCart,
    },
    {
      title: "Track Your Order",
      description:
        "Website Traffic SMM Panel lets you follow and watch your order as it manifests into explosive website traffic. Our highly efficient order tracking feature gives you real-time and accurate updates on your progress.",
      icon: BarChart,
    },
  ];