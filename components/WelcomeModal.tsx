"use client"

import { useState, useEffect } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // const hasVisited = localStorage.getItem("hasVisited")
    // if (!hasVisited) {
      setIsOpen(true)
    //   localStorage.setItem("hasVisited", "true")
    // }
  }, [])

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Welcome to The Fernet Bar 🍸</DialogTitle>
          <DialogDescription>
            Explore our curated Fernet-Branca cocktail collection, from classic recipes to modern twists. Whether you're a seasoned bartender or just discovering this iconic amaro, you'll find inspiration in every sip.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <h4 className="text-sm font-bold mb-2" >✨ What you can do here:</h4>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>✅ Browse handcrafted Fernet cocktails</li>
            <li>✅ Learn the art of mixing bold, herbal drinks</li>
            <li>✅ Discover perfect pairings for your next night out</li>
          </ul>
          <h4 className="font-bold mt-4">🛠 Ready to shake things up? Let’s dive in!</h4>
        </div>
        <DialogFooter>
          <Button onClick={() => setIsOpen(false)}>Explore Cocktails</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

