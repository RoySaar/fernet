export interface Cocktail {
  id: number
  name: string
  ingredients: string[]
  instructions: string
  image: string
  category: string
}

export const cocktails: Cocktail[] = [
  {
    id: 1,
    name: "Toronto",
    ingredients: [
      "2 oz Rye Whiskey",
      "1/4 oz Fernet-Branca",
      "1/4 oz Simple Syrup",
      "2 dashes Angostura Bitters",
      "Orange twist (garnish)"
    ],
    instructions: "Stir with ice, strain into a rocks glass over a large ice cube.",
    image: "https://firebasestorage.googleapis.com/v0/b/fernet-34971.firebasestorage.app/o/toronto.png?alt=media&token=88b113a6-6bcb-438d-a1d5-192e22e042b2",
    category: "Spirit-Forward"
  },
  {
    id: 2,
    name: "Hanky Panky",
    ingredients: [
      "1 1/2 oz London Dry Gin",
      "1 1/2 oz Sweet Vermouth",
      "1/4 oz Fernet-Branca",
      "Orange peel (garnish)"
    ],
    instructions: "Stir with ice, strain into a coupe glass.",
    image: "https://firebasestorage.googleapis.com/v0/b/fernet-34971.firebasestorage.app/o/hanky-panky.png?alt=media&token=55c90d52-01dc-4a35-aca2-4e4de5911d97",
    category: "Spirit-Forward"
  },
  {
    id: 3,
    name: "The Industry Sour",
    ingredients: [
      "1 oz Fernet-Branca",
      "3/4 oz Green Chartreuse",
      "3/4 oz Lime Juice",
      "3/4 oz Simple Syrup"
    ],
    instructions: "Shake with ice, strain into a coupe.",
    image: "https://firebasestorage.googleapis.com/v0/b/fernet-34971.firebasestorage.app/o/the-industry-sour.png?alt=media&token=85d26ae8-3910-4d38-a06f-8298bbef433d",
    category: "Sour"
  },
  {
    id: 4,
    name: "Fernet Buck",
    ingredients: [
      "1 1/2 oz Fernet-Branca",
      "1/2 oz Lime Juice",
      "Ginger Beer (to top)",
      "Lime wedge (garnish)"
    ],
    instructions: "Build in a highball glass over ice, top with ginger beer.",
    image: "https://firebasestorage.googleapis.com/v0/b/fernet-34971.firebasestorage.app/o/fernet-buck.png?alt=media&token=95557ba4-fde9-447b-aef8-98fbcc0eb9b0",
    category: "Refreshing"
  },
  {
    id: 5,
    name: "Smoke & Herbs",
    ingredients: [
      "1 1/2 oz Mezcal",
      "1/2 oz Fernet-Branca",
      "1/2 oz Honey Syrup",
      "2 dashes Chocolate Bitters",
      "Flamed rosemary sprig (garnish)"
    ],
    instructions: "Stir with ice, strain into a rocks glass over a large cube.",
    image: "https://firebasestorage.googleapis.com/v0/b/fernet-34971.firebasestorage.app/o/smoke-and-herbs.png?alt=media&token=01e0a78a-d900-4952-ab8c-dbfde3821708",
    category: "Spirit-Forward"
  },
  {
    id: 6,
    name: "Midnight Remedy",
    ingredients: [
      "1 oz Fernet-Branca",
      "1 oz Cold Brew Coffee",
      "1/2 oz Amaro Montenegro",
      "1/4 oz Maple Syrup",
      "Grated nutmeg (garnish)"
    ],
    instructions: "Shake with ice, strain into a coupe glass.",
    image: "https://firebasestorage.googleapis.com/v0/b/fernet-34971.firebasestorage.app/o/midnight-remedy.png?alt=media&token=dcd16326-df2b-4ec5-a307-dea41d4beea8",
    category: "Rich & Aromatic"
  },
  {
    id: 7,
    name: "Bitter Orchard",
    ingredients: [
      "1 oz Fernet-Branca",
      "3/4 oz Calvados",
      "3/4 oz Lemon Juice",
      "1/2 oz Honey Syrup",
      "2 dashes Peychaud’s Bitters",
      "Apple slice (garnish)"
    ],
    instructions: "Shake with ice, strain into a coupe glass.",
    image: "https://firebasestorage.googleapis.com/v0/b/fernet-34971.firebasestorage.app/o/bitter-orchard.png?alt=media&token=518e3c85-128f-47cb-90be-1a963aa8ed8c",
    category: "Sour"
  },
  {
    id: 8,
    name: "Alpine Spritz",
    ingredients: [
      "1 oz Fernet-Branca",
      "1 oz Dry Vermouth",
      "1/2 oz Elderflower Liqueur",
      "Soda Water (to top)",
      "Lemon wheel (garnish)"
    ],
    instructions: "Build in a wine glass over ice, stir gently.",
    image: "https://firebasestorage.googleapis.com/v0/b/fernet-34971.firebasestorage.app/o/alpine-spritz.png?alt=media&token=a294d002-9fdb-4f79-bf19-40a35775954f",
    category: "Refreshing"
  },
  {
    id: 9,
    name: "The Black Forest",
    ingredients: [
      "1 oz Fernet-Branca",
      "1 oz Kirschwasser",
      "3/4 oz Lemon Juice",
      "1/2 oz Simple Syrup",
      "2 dashes Angostura Bitters",
      "Luxardo cherry (garnish)"
    ],
    instructions: "Shake with ice, strain into a coupe.",
    image: "https://firebasestorage.googleapis.com/v0/b/fernet-34971.firebasestorage.app/o/the-black-forest.png?alt=media&token=63d3e1ea-4c6c-42cc-90d2-a85a5a8d9c83",
    category: "Fruity & Herbal"
  }
];

