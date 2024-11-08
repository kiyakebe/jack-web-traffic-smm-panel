import { StasticsTypes } from "@/types/types"
import { BarChart, DollarSign, TrendingUp, Users } from "lucide-react"

export const statistics: StasticsTypes[] = [
    { value: "70%", label: "Increase in website traffic within 3 months", icon: TrendingUp },
    { value: "60%", label: "Savings on marketing costs", icon: DollarSign },
    { value: "50%", label: "Increase in social media engagement", icon: Users },
    { value: "40%", label: "Improvement in brand awareness", icon: BarChart },
  ]