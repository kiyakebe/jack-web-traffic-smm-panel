'use client'

import { useState } from 'react'
import { Camera, Mail, MapPin, Pencil, User } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface UserProfile {
  name: string
  email: string
  location: string
  bio: string
  avatar: string
}

export default function Component() {
  const [profile, setProfile] = useState<UserProfile>({
    name: "Jane Doe",
    email: "jane.doe@example.com",
    location: "New York, USA",
    bio: "Product designer and developer. Passionate about creating intuitive user experiences.",
    avatar: "/placeholder.svg?height=128&width=128"
  })

  const [isEditing, setIsEditing] = useState(false)

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
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-2xl font-bold">Profile</CardTitle>
            <Button onClick={toggleEdit} variant="outline">
              {isEditing ? 'Save' : 'Edit'}
              <Pencil className="ml-2 h-4 w-4" />
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
                <Label htmlFor="location">Location</Label>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4 text-gray-500" />
                  <Input
                    id="location"
                    name="location"
                    value={profile.location}
                    onChange={handleInputChange}
                    readOnly={!isEditing}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  name="bio"
                  value={profile.bio}
                  onChange={handleInputChange}
                  readOnly={!isEditing}
                  rows={4}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Posts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">142</div>
            <p className="text-xs text-muted-foreground">+20% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Followers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,338</div>
            <p className="text-xs text-muted-foreground">+180 new followers</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Likes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12,234</div>
            <p className="text-xs text-muted-foreground">+10% from last week</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}