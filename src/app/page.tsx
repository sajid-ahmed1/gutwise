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
      <p className="text-centre text-lg max-w-xl mb-4 text-gray-600">
        Taking the guesswork out of gut health so you can spend more time healing and less time stressing.
      </p>

      {/* Account benefit explanation */}
      <p className="text-centre text-base max-w-md mb-6 text-gray-500">
        We ask you to create an account so we can personalise your GutWise experience—tailored recipes, food swaps, and health insights made just for your gut.
      </p>

      {/* Call to Action */}
      <a
        href="/signup"
        className="px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition"
      >
        Curate Your Account
      </a>
    </main>
  );
}