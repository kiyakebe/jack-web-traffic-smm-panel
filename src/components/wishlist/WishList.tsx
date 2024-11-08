'use client'

import { useState } from 'react'
import { Heart, ShoppingCart, Trash2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface WishListItem {
  id: number
  name: string
  price: number
  image: string
}

export default function Component() {
  const [wishListItems, setWishListItems] = useState<WishListItem[]>([
    { id: 1, name: "Elegant Watch", price: 199.99, image: "/placeholder.svg?height=200&width=200" },
    { id: 2, name: "Leather Backpack", price: 89.99, image: "/placeholder.svg?height=200&width=200" },
    { id: 3, name: "Wireless Earbuds", price: 129.99, image: "/placeholder.svg?height=200&width=200" },
  ])

  const removeItem = (id: number) => {
    setWishListItems(wishListItems.filter(item => item.id !== id))
  }

  const addToCart = (item: WishListItem) => {
    // This function would typically add the item to the cart
    // For this example, we'll just log to the console
    console.log(`Added ${item.name} to cart`)
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 flex items-center">
        <Heart className="mr-2 text-primary" /> My Wish List
      </h1>
      {wishListItems.length === 0 ? (
        <div className="text-center py-12">
          <Heart className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Your wish list is empty</h2>
          <p className="text-gray-500">Add items to your wish list to keep track of what you want.</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {wishListItems.map(item => (
            <Card key={item.id} className="flex flex-col">
              <CardContent className="p-4">
                <div className="aspect-square relative mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-cover rounded-md"
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>
                <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                <p className="text-primary font-bold">${item.price.toFixed(2)}</p>
              </CardContent>
              <CardFooter className="flex justify-between mt-auto">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => removeItem(item.id)}
                  className="flex items-center"
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Remove
                </Button>
                <Button
                  size="sm"
                  onClick={() => addToCart(item)}
                  className="flex items-center"
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}