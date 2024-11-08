'use client'

import { useState } from 'react'
import { Camera, Mail, MapPin, Package, User, CreditCard, Heart, Settings } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"

interface CustomerProfile {
  name: string
  email: string
  address: string
  avatar: string
}

interface Order {
  id: string
  date: string
  total: number
  status: string
}

export default function Component() {
  const [profile, setProfile] = useState<CustomerProfile>({
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    address: "123 Main St, Anytown, AN 12345",
    avatar: "/placeholder.svg?height=128&width=128"
  })

  const [isEditing, setIsEditing] = useState(false)

  const [orders] = useState<Order[]>([
    { id: "ORD-001", date: "2023-05-15", total: 129.99, status: "Delivered" },
    { id: "ORD-002", date: "2023-06-02", total: 79.95, status: "Shipped" },
    { id: "ORD-003", date: "2023-06-18", total: 199.99, status: "Processing" },
  ])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setProfile(prev => ({ ...prev, [name]: value }))
  }

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setProfile(prev => ({ ...prev, avatar: reader.result as string }))
      }
      reader.readAsDataURL(file)
    }
  }

  const toggleEdit = () => {
    setIsEditing(!isEditing)
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Customer Profile</h1>
      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
        </TabsList>
        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Personal Information</CardTitle>
                <Button onClick={toggleEdit} variant="outline">
                  {isEditing ? 'Save' : 'Edit'}
                  <Settings className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex flex-col items-center">
                  <Avatar className="w-32 h-32">
                    <AvatarImage src={profile.avatar} alt={profile.name} />
                    <AvatarFallback>{profile.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  {isEditing && (
                    <div className="mt-4">
                      <Label htmlFor="avatar" className="cursor-pointer">
                        <div className="flex items-center justify-center w-full">
                          <Button variant="outline" className="w-full">
                            <Camera className="mr-2 h-4 w-4" />
                            Change Photo
                          </Button>
                        </div>
                      </Label>
                      <Input
                        id="avatar"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleAvatarChange}
                      />
                    </div>
                  )}
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <div className="flex items-center">
                      <User className="mr-2 h-4 w-4 text-gray-500" />
                      <Input
                        id="name"
                        name="name"
                        value={profile.name}
                        onChange={handleInputChange}
                        readOnly={!isEditing}
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <div className="flex items-center">
                      <Mail className="mr-2 h-4 w-4 text-gray-500" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={profile.email}
                        onChange={handleInputChange}
                        readOnly={!isEditing}
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="address">Shipping Address</Label>
                    <div className="flex items-center">
                      <MapPin className="mr-2 h-4 w-4 text-gray-500" />
                      <Textarea
                        id="address"
                        name="address"
                        value={profile.address}
                        onChange={handleInputChange}
                        readOnly={!isEditing}
                        rows={3}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="orders">
          <Card>
            <CardHeader>
              <CardTitle>Order History</CardTitle>
              <CardDescription>Your recent purchases and their status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {orders.map(order => (
                  <Card key={order.id}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Order {order.id}</CardTitle>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="flex justify-between items-center">
                        <div className="space-y-1">
                          <p className="text-sm font-medium">Date: {order.date}</p>
                          <p className="text-sm font-medium">Total: ${order.total.toFixed(2)}</p>
                        </div>
                        <div className="flex items-center">
                          <Package className="mr-2 h-4 w-4" />
                          <span className="text-sm font-medium">{order.status}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm">View Details</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="preferences">
          <Card>
            <CardHeader>
              <CardTitle>Account Preferences</CardTitle>
              <CardDescription>Manage your account settings and preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="notifications">Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive order updates and promotions</p>
                </div>
                <Switch id="notifications" />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="newsletter">Newsletter Subscription</Label>
                  <p className="text-sm text-muted-foreground">Stay updated with our latest offers</p>
                </div>
                <Switch id="newsletter" />
              </div>
              <div className="pt-4">
                <h3 className="text-lg font-medium mb-2">Favorite Categories</h3>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm">
                    <Heart className="mr-2 h-4 w-4" />
                    Electronics
                  </Button>
                  <Button variant="outline" size="sm">
                    <Heart className="mr-2 h-4 w-4" />
                    Books
                  </Button>
                  <Button variant="outline" size="sm">
                    <Heart className="mr-2 h-4 w-4" />
                    Home & Garden
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <CreditCard className="mr-2 h-4 w-4" />
                Manage Payment Methods
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
