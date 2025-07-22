// Homepage layout for GutWise
// File: src/app/page.tsx

import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="p-6 border-b shadow-sm flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Image src="/gutwise-logo.png" alt="GutWise Logo" width={32} height={32} />
          <h1 className="text-2xl font-bold">GutWise</h1>
        </div>
        <nav className="space-x-6 text-sm font-medium">
          <a href="#" className="hover:text-blue-600">Recipes</a>
          <a href="#" className="hover:text-blue-600">Health</a>
          <a href="#" className="hover:text-blue-600">My Account</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="p-6 text-center bg-blue-50">
        <h2 className="text-3xl font-semibold mb-2">Feel Better, Eat Smarter</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          GutWise helps you discover gut-friendly meals, track food reactions, and take control of your digestive health.
        </p>
      </section>

      {/* Editor&apos;s Choice Section */}
      <section className="p-6">
        <h2 className="text-xl font-semibold mb-4">Editor&apos;s Choice</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Recipe cards go here */}
          <div className="p-4 border rounded-lg shadow-sm">
            <h3 className="font-bold text-lg">Low-FODMAP Quinoa Bowl</h3>
            <p className="text-sm text-gray-600 mt-2">Soothing, nourishing, and gut-friendly.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm">
            <h3 className="font-bold text-lg">Bone Broth Soup</h3>
            <p className="text-sm text-gray-600 mt-2">Easy on digestion, rich in nutrients.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm">
            <h3 className="font-bold text-lg">Ginger Carrot Puree</h3>
            <p className="text-sm text-gray-600 mt-2">Anti-inflammatory and gentle on the gut.</p>
          </div>
        </div>
      </section>
    </main>
  );
}