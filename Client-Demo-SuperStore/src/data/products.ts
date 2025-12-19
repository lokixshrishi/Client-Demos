export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  unit: string;
  image: string;
  badge?: string;
  category: string;
  description: string;
  inStock: boolean;
  rating: number;
  reviews: number;
}

export const products: Product[] = [
  // Fresh Produce
  { id: 1, name: "Organic Bananas, Bunch", price: 1.49, originalPrice: 1.99, unit: "bunch", image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=300&h=300&fit=crop", badge: "Sale", category: "Fresh Produce", description: "Fresh organic bananas, perfect for smoothies or snacking.", inStock: true, rating: 4.8, reviews: 234 },
  { id: 5, name: "Fresh Strawberries, 1 lb", price: 3.99, originalPrice: 4.99, unit: "lb", image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=300&h=300&fit=crop", badge: "Sale", category: "Fresh Produce", description: "Sweet and juicy strawberries, locally sourced.", inStock: true, rating: 4.7, reviews: 189 },
  { id: 9, name: "Fresh Avocados, 4 Count", price: 4.99, unit: "bag", image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=300&h=300&fit=crop", category: "Fresh Produce", description: "Ripe and ready-to-eat Hass avocados.", inStock: true, rating: 4.6, reviews: 156 },
  { id: 13, name: "Broccoli Crown, Fresh", price: 1.99, unit: "lb", image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=300&h=300&fit=crop", category: "Fresh Produce", description: "Fresh broccoli crowns, great for steaming or stir-fry.", inStock: true, rating: 4.5, reviews: 98 },
  { id: 7, name: "Baby Spinach, 5 oz", price: 3.49, unit: "bag", image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=300&h=300&fit=crop", category: "Fresh Produce", description: "Tender baby spinach leaves, pre-washed and ready to eat.", inStock: true, rating: 4.4, reviews: 167 },
  { id: 16, name: "Russet Potatoes, 5 lb Bag", price: 3.49, originalPrice: 4.49, unit: "bag", image: "https://images.unsplash.com/photo-1518977676601-b53f82ber633?w=300&h=300&fit=crop", badge: "Sale", category: "Fresh Produce", description: "Premium russet potatoes, perfect for baking or mashing.", inStock: true, rating: 4.6, reviews: 203 },
  { id: 17, name: "Red Apples, 3 lb Bag", price: 4.99, unit: "bag", image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=300&h=300&fit=crop", category: "Fresh Produce", description: "Crisp and sweet red delicious apples.", inStock: true, rating: 4.5, reviews: 145 },
  { id: 18, name: "Organic Carrots, 2 lb", price: 2.99, unit: "bag", image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=300&h=300&fit=crop", category: "Fresh Produce", description: "Sweet organic carrots, great for snacking or cooking.", inStock: true, rating: 4.7, reviews: 112 },
  { id: 19, name: "Fresh Lemons, 6 Count", price: 2.49, unit: "bag", image: "https://images.unsplash.com/photo-1590502593747-42a996133562?w=300&h=300&fit=crop", category: "Fresh Produce", description: "Bright and zesty lemons for cooking and beverages.", inStock: true, rating: 4.6, reviews: 89 },
  { id: 20, name: "Green Bell Peppers, 3 Pack", price: 2.99, unit: "pack", image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=300&h=300&fit=crop", category: "Fresh Produce", description: "Crisp green bell peppers, perfect for salads and cooking.", inStock: true, rating: 4.4, reviews: 76 },

  // Dairy & Eggs
  { id: 2, name: "Fresh Whole Milk, 1 Gallon", price: 3.99, unit: "gal", image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300&h=300&fit=crop", category: "Dairy & Eggs", description: "Farm-fresh whole milk, vitamin D fortified.", inStock: true, rating: 4.8, reviews: 312 },
  { id: 3, name: "Large White Eggs, 12 Count", price: 4.29, originalPrice: 4.99, unit: "dozen", image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=300&h=300&fit=crop", badge: "Sale", category: "Dairy & Eggs", description: "Grade A large white eggs from cage-free hens.", inStock: true, rating: 4.9, reviews: 456 },
  { id: 8, name: "Greek Yogurt, Plain, 32 oz", price: 5.49, originalPrice: 6.49, unit: "tub", image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=300&h=300&fit=crop", badge: "Sale", category: "Dairy & Eggs", description: "Creamy Greek yogurt, high in protein.", inStock: true, rating: 4.7, reviews: 278 },
  { id: 11, name: "Cheddar Cheese Block, 8 oz", price: 3.99, unit: "block", image: "https://images.unsplash.com/photo-1618164436241-4473940d1f5c?w=300&h=300&fit=crop", category: "Dairy & Eggs", description: "Sharp cheddar cheese, aged for rich flavor.", inStock: true, rating: 4.6, reviews: 189 },
  { id: 15, name: "Butter, Unsalted, 1 lb", price: 4.79, unit: "lb", image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=300&h=300&fit=crop", category: "Dairy & Eggs", description: "Premium unsalted butter for baking and cooking.", inStock: true, rating: 4.8, reviews: 234 },
  { id: 21, name: "2% Reduced Fat Milk, 1 Gallon", price: 3.79, unit: "gal", image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=300&h=300&fit=crop", category: "Dairy & Eggs", description: "Reduced fat milk with all the nutrition.", inStock: true, rating: 4.7, reviews: 198 },
  { id: 22, name: "Sour Cream, 16 oz", price: 2.49, unit: "tub", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=300&h=300&fit=crop", category: "Dairy & Eggs", description: "Rich and creamy sour cream for all your recipes.", inStock: true, rating: 4.5, reviews: 134 },
  { id: 23, name: "Mozzarella Cheese, Shredded, 8 oz", price: 3.49, unit: "bag", image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=300&h=300&fit=crop", category: "Dairy & Eggs", description: "Perfect for pizza and Italian dishes.", inStock: true, rating: 4.6, reviews: 167 },
  { id: 24, name: "Heavy Whipping Cream, 16 oz", price: 3.99, unit: "carton", image: "https://images.unsplash.com/photo-1587657565520-6c0c1c1c1c1c?w=300&h=300&fit=crop", category: "Dairy & Eggs", description: "Rich cream for whipping and cooking.", inStock: true, rating: 4.7, reviews: 89 },
  { id: 25, name: "Cottage Cheese, 16 oz", price: 3.29, unit: "tub", image: "https://images.unsplash.com/photo-1625937286074-9ca519d5d9df?w=300&h=300&fit=crop", category: "Dairy & Eggs", description: "Low-fat cottage cheese, high in protein.", inStock: true, rating: 4.4, reviews: 112 },

  // Meat & Seafood
  { id: 4, name: "Boneless Chicken Breast", price: 6.99, unit: "lb", image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=300&h=300&fit=crop", category: "Meat & Seafood", description: "Fresh boneless, skinless chicken breast.", inStock: true, rating: 4.7, reviews: 345 },
  { id: 12, name: "Ground Beef, 80/20, 1 lb", price: 5.99, unit: "lb", image: "https://images.unsplash.com/photo-1588347818036-558601350947?w=300&h=300&fit=crop", category: "Meat & Seafood", description: "Fresh ground beef, perfect for burgers and meatballs.", inStock: true, rating: 4.6, reviews: 267 },
  { id: 14, name: "Atlantic Salmon Fillet", price: 9.99, originalPrice: 12.99, unit: "lb", image: "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?w=300&h=300&fit=crop", badge: "Sale", category: "Meat & Seafood", description: "Fresh Atlantic salmon, rich in omega-3.", inStock: true, rating: 4.8, reviews: 198 },
  { id: 26, name: "Pork Chops, Bone-In", price: 4.99, unit: "lb", image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=300&h=300&fit=crop", category: "Meat & Seafood", description: "Tender bone-in pork chops.", inStock: true, rating: 4.5, reviews: 156 },
  { id: 27, name: "Bacon, Thick Cut, 16 oz", price: 7.99, originalPrice: 8.99, unit: "pack", image: "https://images.unsplash.com/photo-1606851091851-e8c8c0fca5ba?w=300&h=300&fit=crop", badge: "Sale", category: "Meat & Seafood", description: "Hickory smoked thick-cut bacon.", inStock: true, rating: 4.9, reviews: 423 },
  { id: 28, name: "Shrimp, Large, 1 lb", price: 11.99, unit: "lb", image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=300&h=300&fit=crop", category: "Meat & Seafood", description: "Wild-caught large shrimp, peeled and deveined.", inStock: true, rating: 4.7, reviews: 178 },
  { id: 29, name: "Italian Sausage Links, 5 Pack", price: 5.49, unit: "pack", image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=300&h=300&fit=crop", category: "Meat & Seafood", description: "Seasoned Italian sausage links.", inStock: true, rating: 4.6, reviews: 134 },
  { id: 30, name: "Turkey Breast, Sliced, 8 oz", price: 4.99, unit: "pack", image: "https://images.unsplash.com/photo-1606728035253-49e8a23146de?w=300&h=300&fit=crop", category: "Meat & Seafood", description: "Oven-roasted turkey breast, deli sliced.", inStock: true, rating: 4.5, reviews: 98 },

  // Bakery
  { id: 6, name: "Whole Wheat Bread Loaf", price: 2.49, unit: "loaf", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=300&fit=crop", category: "Bakery", description: "Freshly baked whole wheat bread.", inStock: true, rating: 4.6, reviews: 234 },
  { id: 31, name: "French Baguette", price: 1.99, unit: "each", image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=300&h=300&fit=crop", category: "Bakery", description: "Crispy French baguette, baked fresh daily.", inStock: true, rating: 4.8, reviews: 189 },
  { id: 32, name: "Croissants, 4 Pack", price: 4.99, unit: "pack", image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=300&h=300&fit=crop", category: "Bakery", description: "Buttery, flaky croissants.", inStock: true, rating: 4.9, reviews: 267 },
  { id: 33, name: "Chocolate Chip Cookies, 12 Pack", price: 3.99, unit: "pack", image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=300&h=300&fit=crop", category: "Bakery", description: "Soft and chewy chocolate chip cookies.", inStock: true, rating: 4.7, reviews: 312 },
  { id: 34, name: "Blueberry Muffins, 4 Pack", price: 4.49, unit: "pack", image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=300&h=300&fit=crop", category: "Bakery", description: "Moist blueberry muffins with streusel topping.", inStock: true, rating: 4.6, reviews: 156 },
  { id: 35, name: "Cinnamon Rolls, 6 Pack", price: 5.99, originalPrice: 6.99, unit: "pack", image: "https://images.unsplash.com/photo-1609127102567-8a9a21dc27d8?w=300&h=300&fit=crop", badge: "Sale", category: "Bakery", description: "Warm cinnamon rolls with cream cheese frosting.", inStock: true, rating: 4.8, reviews: 234 },
  { id: 36, name: "Sourdough Bread", price: 3.49, unit: "loaf", image: "https://images.unsplash.com/photo-1585478259715-876acc5be8eb?w=300&h=300&fit=crop", category: "Bakery", description: "Artisan sourdough bread with tangy flavor.", inStock: true, rating: 4.7, reviews: 178 },
  { id: 37, name: "Bagels, Plain, 6 Pack", price: 3.29, unit: "pack", image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300&h=300&fit=crop", category: "Bakery", description: "New York style plain bagels.", inStock: true, rating: 4.5, reviews: 145 },

  // Frozen Foods
  { id: 38, name: "Frozen Pizza, Pepperoni", price: 6.99, originalPrice: 8.49, unit: "each", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&h=300&fit=crop", badge: "Sale", category: "Frozen Foods", description: "Classic pepperoni pizza, ready to bake.", inStock: true, rating: 4.5, reviews: 345 },
  { id: 39, name: "Ice Cream, Vanilla, 1.5 qt", price: 4.99, unit: "tub", image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=300&h=300&fit=crop", category: "Frozen Foods", description: "Creamy vanilla ice cream made with real vanilla.", inStock: true, rating: 4.8, reviews: 423 },
  { id: 40, name: "Frozen Vegetables, Mixed, 16 oz", price: 2.49, unit: "bag", image: "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=300&h=300&fit=crop", category: "Frozen Foods", description: "Blend of peas, carrots, corn, and green beans.", inStock: true, rating: 4.4, reviews: 167 },
  { id: 41, name: "Chicken Nuggets, 32 oz", price: 7.99, unit: "bag", image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=300&h=300&fit=crop", category: "Frozen Foods", description: "Crispy breaded chicken nuggets, family size.", inStock: true, rating: 4.6, reviews: 289 },
  { id: 42, name: "Frozen Waffles, 10 Pack", price: 3.49, unit: "box", image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=300&h=300&fit=crop", category: "Frozen Foods", description: "Golden waffles, ready in minutes.", inStock: true, rating: 4.5, reviews: 198 },
  { id: 43, name: "Fish Sticks, 24 Count", price: 5.99, unit: "box", image: "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=300&h=300&fit=crop", category: "Frozen Foods", description: "Crispy breaded fish sticks, kid-approved.", inStock: true, rating: 4.4, reviews: 156 },
  { id: 44, name: "Frozen Berries Mix, 16 oz", price: 4.49, unit: "bag", image: "https://images.unsplash.com/photo-1596591868264-6d2e4c2e4c2e?w=300&h=300&fit=crop", category: "Frozen Foods", description: "Mix of strawberries, blueberries, and raspberries.", inStock: true, rating: 4.7, reviews: 178 },
  { id: 45, name: "Frozen French Fries, 32 oz", price: 3.99, unit: "bag", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300&h=300&fit=crop", category: "Frozen Foods", description: "Crispy golden french fries.", inStock: true, rating: 4.6, reviews: 234 },

  // Beverages
  { id: 10, name: "Orange Juice, 64 oz", price: 4.49, originalPrice: 5.29, unit: "bottle", image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=300&h=300&fit=crop", badge: "Sale", category: "Beverages", description: "100% pure squeezed orange juice, no pulp.", inStock: true, rating: 4.7, reviews: 267 },
  { id: 46, name: "Bottled Water, 24 Pack", price: 4.99, unit: "pack", image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=300&h=300&fit=crop", category: "Beverages", description: "Purified drinking water, 16.9 oz bottles.", inStock: true, rating: 4.5, reviews: 456 },
  { id: 47, name: "Cola, 12 Pack Cans", price: 5.99, originalPrice: 6.99, unit: "pack", image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=300&h=300&fit=crop", badge: "Sale", category: "Beverages", description: "Classic cola in convenient cans.", inStock: true, rating: 4.6, reviews: 389 },
  { id: 48, name: "Coffee, Ground, 12 oz", price: 7.99, unit: "bag", image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=300&h=300&fit=crop", category: "Beverages", description: "Medium roast ground coffee, rich and smooth.", inStock: true, rating: 4.8, reviews: 312 },
  { id: 49, name: "Green Tea, 20 Bags", price: 3.49, unit: "box", image: "https://images.unsplash.com/photo-1556881286-fc6915169721?w=300&h=300&fit=crop", category: "Beverages", description: "Organic green tea bags for a healthy brew.", inStock: true, rating: 4.6, reviews: 178 },
  { id: 50, name: "Apple Juice, 64 oz", price: 3.99, unit: "bottle", image: "https://images.unsplash.com/photo-1576673442511-7e39b6545c87?w=300&h=300&fit=crop", category: "Beverages", description: "100% apple juice from concentrate.", inStock: true, rating: 4.5, reviews: 145 },
  { id: 51, name: "Sports Drink, 8 Pack", price: 6.49, unit: "pack", image: "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?w=300&h=300&fit=crop", category: "Beverages", description: "Electrolyte sports drink, assorted flavors.", inStock: true, rating: 4.4, reviews: 198 },
  { id: 52, name: "Almond Milk, 64 oz", price: 3.99, unit: "carton", image: "https://images.unsplash.com/photo-1600788907416-456578634209?w=300&h=300&fit=crop", category: "Beverages", description: "Unsweetened almond milk, dairy-free.", inStock: true, rating: 4.6, reviews: 167 },

  // Household
  { id: 53, name: "Paper Towels, 6 Rolls", price: 8.99, unit: "pack", image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=300&h=300&fit=crop", category: "Household", description: "Absorbent paper towels, select-a-size.", inStock: true, rating: 4.7, reviews: 345 },
  { id: 54, name: "Dish Soap, 24 oz", price: 2.99, unit: "bottle", image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?w=300&h=300&fit=crop", category: "Household", description: "Grease-cutting dish soap, lemon scent.", inStock: true, rating: 4.5, reviews: 234 },
  { id: 55, name: "Laundry Detergent, 100 oz", price: 11.99, originalPrice: 13.99, unit: "bottle", image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=300&h=300&fit=crop", badge: "Sale", category: "Household", description: "High-efficiency laundry detergent, fresh scent.", inStock: true, rating: 4.8, reviews: 423 },
  { id: 56, name: "Toilet Paper, 12 Rolls", price: 9.99, unit: "pack", image: "https://images.unsplash.com/photo-1584556812952-905ffd0c611a?w=300&h=300&fit=crop", category: "Household", description: "Soft and strong toilet paper, double rolls.", inStock: true, rating: 4.6, reviews: 389 },
  { id: 57, name: "All-Purpose Cleaner, 32 oz", price: 3.49, unit: "bottle", image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=300&h=300&fit=crop", category: "Household", description: "Multi-surface cleaner, kills 99.9% of germs.", inStock: true, rating: 4.5, reviews: 198 },
  { id: 58, name: "Trash Bags, 50 Count", price: 7.99, unit: "box", image: "https://images.unsplash.com/photo-1610141256132-4f5c9d0c2e2e?w=300&h=300&fit=crop", category: "Household", description: "13-gallon tall kitchen trash bags.", inStock: true, rating: 4.4, reviews: 267 },
  { id: 59, name: "Aluminum Foil, 75 sq ft", price: 4.49, unit: "roll", image: "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=300&h=300&fit=crop", category: "Household", description: "Heavy-duty aluminum foil for cooking and storage.", inStock: true, rating: 4.6, reviews: 156 },
  { id: 60, name: "Plastic Wrap, 200 sq ft", price: 3.29, unit: "roll", image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=300&h=300&fit=crop", category: "Household", description: "Cling wrap for food storage.", inStock: true, rating: 4.3, reviews: 134 },

  // Baby & Kids
  { id: 61, name: "Diapers, Size 3, 88 Count", price: 24.99, originalPrice: 29.99, unit: "box", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&h=300&fit=crop", badge: "Sale", category: "Baby & Kids", description: "Ultra-absorbent diapers with wetness indicator.", inStock: true, rating: 4.8, reviews: 567 },
  { id: 62, name: "Baby Wipes, 400 Count", price: 9.99, unit: "pack", image: "https://images.unsplash.com/photo-1584839404042-8bc21d240e63?w=300&h=300&fit=crop", category: "Baby & Kids", description: "Gentle, fragrance-free baby wipes.", inStock: true, rating: 4.7, reviews: 423 },
  { id: 63, name: "Baby Formula, 23.2 oz", price: 29.99, unit: "can", image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=300&h=300&fit=crop", category: "Baby & Kids", description: "Infant formula with iron, 0-12 months.", inStock: true, rating: 4.6, reviews: 234 },
  { id: 64, name: "Baby Food, Variety Pack, 12 Jars", price: 11.99, unit: "pack", image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=300&h=300&fit=crop", category: "Baby & Kids", description: "Organic baby food, stage 2, assorted flavors.", inStock: true, rating: 4.5, reviews: 178 },
  { id: 65, name: "Kids Cereal, Fruit Loops, 10 oz", price: 3.99, unit: "box", image: "https://images.unsplash.com/photo-1521483451569-e33803c0330c?w=300&h=300&fit=crop", category: "Baby & Kids", description: "Colorful fruit-flavored cereal kids love.", inStock: true, rating: 4.4, reviews: 289 },
  { id: 66, name: "Juice Boxes, Apple, 8 Pack", price: 2.99, unit: "pack", image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300&h=300&fit=crop", category: "Baby & Kids", description: "100% apple juice in kid-friendly boxes.", inStock: true, rating: 4.5, reviews: 198 },
  { id: 67, name: "Goldfish Crackers, 30 oz", price: 7.99, unit: "carton", image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300&h=300&fit=crop", category: "Baby & Kids", description: "Baked cheddar snack crackers.", inStock: true, rating: 4.7, reviews: 345 },
  { id: 68, name: "Kids Vitamins, Gummy, 60 Count", price: 8.99, unit: "bottle", image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&h=300&fit=crop", category: "Baby & Kids", description: "Complete multivitamin gummies for kids.", inStock: true, rating: 4.6, reviews: 156 },
];

export const categories = [
  { name: "Fresh Produce", slug: "fresh-produce", icon: "Apple", color: "bg-success/10 text-success" },
  { name: "Dairy & Eggs", slug: "dairy-eggs", icon: "Milk", color: "bg-primary/10 text-primary" },
  { name: "Meat & Seafood", slug: "meat-seafood", icon: "Beef", color: "bg-destructive/10 text-destructive" },
  { name: "Bakery", slug: "bakery", icon: "Croissant", color: "bg-accent/20 text-accent-foreground" },
  { name: "Frozen Foods", slug: "frozen-foods", icon: "Snowflake", color: "bg-primary/10 text-primary" },
  { name: "Beverages", slug: "beverages", icon: "Wine", color: "bg-destructive/10 text-destructive" },
  { name: "Household", slug: "household", icon: "Sparkles", color: "bg-success/10 text-success" },
  { name: "Baby & Kids", slug: "baby-kids", icon: "Baby", color: "bg-accent/20 text-accent-foreground" },
];

export const deals = [
  { id: 1, title: "Buy 2 Get 1 Free", description: "On all frozen pizzas", expires: "Ends Sunday", category: "Frozen Foods" },
  { id: 2, title: "Save $5", description: "When you spend $25 on produce", expires: "Ends Saturday", category: "Fresh Produce" },
  { id: 3, title: "30% Off", description: "All organic snacks", expires: "This week only", category: "Baby & Kids" },
  { id: 4, title: "BOGO 50% Off", description: "All beverages", expires: "Ends Friday", category: "Beverages" },
  { id: 5, title: "$2 Off", description: "Any bakery item over $5", expires: "This week only", category: "Bakery" },
  { id: 6, title: "20% Off", description: "All household cleaning supplies", expires: "Ends Sunday", category: "Household" },
];

export const stores = [
  { id: 1, name: "SuperStore Downtown", address: "123 Main Street, Downtown, NY 10001", phone: "(555) 123-4567", hours: "7am - 10pm Daily", distance: "0.5 mi" },
  { id: 2, name: "SuperStore Midtown", address: "456 Oak Avenue, Midtown, NY 10018", phone: "(555) 234-5678", hours: "6am - 11pm Daily", distance: "1.2 mi" },
  { id: 3, name: "SuperStore Uptown", address: "789 Elm Boulevard, Uptown, NY 10025", phone: "(555) 345-6789", hours: "7am - 10pm Daily", distance: "2.8 mi" },
  { id: 4, name: "SuperStore Brooklyn", address: "321 Park Place, Brooklyn, NY 11238", phone: "(555) 456-7890", hours: "6am - 12am Daily", distance: "3.5 mi" },
];

export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => p.category === category);
}

export function getProductById(id: number): Product | undefined {
  return products.find(p => p.id === id);
}

export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase();
  return products.filter(p => 
    p.name.toLowerCase().includes(lowerQuery) || 
    p.category.toLowerCase().includes(lowerQuery) ||
    p.description.toLowerCase().includes(lowerQuery)
  );
}

export function getFeaturedProducts(): Product[] {
  return products.slice(0, 16);
}

export function getSaleProducts(): Product[] {
  return products.filter(p => p.badge === "Sale");
}
