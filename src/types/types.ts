import { LucideIcon } from "lucide-react";

export interface TrafficService {
  title: string;
  content: string;
}

export interface FaqTypes {
  question: string;
  answer: string;
}

export interface StepsTypes {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TrafficBenefitTypes {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ServiceTypes {
  title: string;
  description: string;
  icon: LucideIcon;
}
export interface ContriesTypes {
  name: string;
  code: string;
  content: string;
  stats: { users: string; penetration: string };
}

export interface TestimonialTypes {
  name: string;
  img: string;
  role: string;
  country: string;
  message: string;
}

export interface BuuyingTypes {
  title: string;
  content: string;
  icon: LucideIcon;
}

export interface MaximizeTypes {
  title: string;
  content: string;
  icon: LucideIcon;
}

export interface StasticsTypes {
  value: string;
  label: string;
  icon: LucideIcon;
}
