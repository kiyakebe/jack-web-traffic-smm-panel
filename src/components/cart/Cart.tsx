'use client'

import { useState } from 'react'
import { Minus, Plus, Trash2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  image: string
}

export default function Component() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: "Product 1", price: 19.99, quantity: 1, image: "/placeholder.svg?height=100&width=100" },
    { id: 2, name: "Product 2", price: 29.99, quantity: 2, image: "/placeholder.svg?height=100&width=100" },
    { id: 3, name: "Product 3", price: 39.99, quantity: 1, image: "/placeholder.svg?height=100&width=100" },
  ])

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity >= 0) {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ))
    }
  }

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map(item => (
            <Card key={item.id} className="mb-4">
              <CardContent className="p-4">
                <div className="flex items-center">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded mr-4" />
                  <div className="flex-grow">
                    <CardTitle>{item.name}</CardTitle>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      aria-label={`Decrease quantity of ${item.name}`}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="mx-2 min-w-[2ch] text-center">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      aria-label={`Increase quantity of ${item.name}`}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeItem(item.id)}
                      className="ml-2"
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          <Card>
            <CardHeader>
              <CardTitle>Cart Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold">Subtotal: ${subtotal.toFixed(2)}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full" size="lg">
                Proceed to Checkout
              </Button>
            </CardFooter>
          </Card>
        </>
      )}
    </div>
  )
}