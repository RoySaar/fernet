"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { cocktails, type Cocktail } from "../data/cocktails"
import { WelcomeModal } from "../components/WelcomeModal"

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")

  const filteredCocktails = cocktails.filter(
    (cocktail) =>
      (cocktail.ingredients.join(" ").toLowerCase().includes(searchTerm.toLowerCase()) ||
      cocktail.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedCategory === "" || cocktail.category === selectedCategory),
  )

  const categories = Array.from(new Set(cocktails.map((cocktail) => cocktail.category)))

  return (
    <main className="container mx-auto px-4 py-8">
      <WelcomeModal />
      <h1 className="text-4xl font-bold mb-8 text-center">Cocktail Recipes</h1>

      <div className="mb-8 flex flex-col sm:flex-row gap-4">
        <Input
          type="text"
          placeholder="Search cocktails..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-2 border rounded-md"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {
        filteredCocktails.length === 0 && (
          <div className="w-full max-w-xs mx-auto text-center">
            <span>No matches, maybe it&apos;s time to invent your own Fernet masterpiece!</span>
          </div>
        )
      }

      {filteredCocktails.length > 0 && (
        <div className="w-full max-w-xs mx-auto">
        <Carousel>
        <CarouselContent>
          {filteredCocktails.map((cocktail) => (
            <CarouselItem key={cocktail.id}>
              <CocktailCard cocktail={cocktail} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      </div>
      )}
    </main>
  )
}

function CocktailCard({ cocktail }: { cocktail: Cocktail }) {
  return (
    <Card className="w-full">
      <CardContent className="p-4">
        <img
          src={cocktail.image || "/placeholder.svg"}
          alt={cocktail.name}
          className="w-full h-72 object-cover mb-4 rounded-md"
        />
        <h2 className="text-xl font-semibold mb-2">{cocktail.name}</h2>
        <p className="text-sm text-gray-600 mb-2">{cocktail.category}</p>
        <h3 className="font-semibold mb-1">Ingredients:</h3>
        <ul className="list-disc list-inside mb-2">
          {cocktail.ingredients.map((ingredient, index) => (
            <li key={index} className="text-sm">
              {ingredient}
            </li>
          ))}
        </ul>
        <h3 className="font-semibold mb-1">Instructions:</h3>
        <p className="text-sm">{cocktail.instructions}</p>
      </CardContent>
    </Card>
  )
}

