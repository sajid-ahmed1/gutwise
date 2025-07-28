// GutWise onboarding landing page
// File: src/app/page.tsx

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-blue-50 text-gray-800 p-6">
      {/* Logo */}
      <img src="/gutwise-logo.png" alt="GutWise Logo" className="w-20 h-20 mb-4" />

      {/* Title */}
      <h1 className="text-4xl font-bold mb-2">GutWise</h1>

      {/* Tagline */}
      <p className="text-center text-lg max-w-xl mb-8 text-gray-600">
        Taking the guesswork out of gut health so you can focus on feeling better, not figuring it out.
      </p>

      {/* Call to Action */}
      <a
        href="/signup"
        className="px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition"
      >
        Create Your Account
      </a>
    </main>
  );
}
