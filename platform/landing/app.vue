<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
    <!-- Hero Section -->
    <header class="container mx-auto px-4 py-20 text-center">
      <h1 class="text-5xl font-bold mb-6">RealtorTools</h1>
      <p class="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
        The Complete AI-Powered Suite for Real Estate Professionals
      </p>
      <div class="flex gap-4 justify-center">
        <a
          href="#products"
          class="bg-sky-500 hover:bg-sky-600 px-6 py-3 rounded-lg font-semibold transition"
        >
          Explore Products
        </a>
        <a
          href="#pricing"
          class="border border-slate-500 hover:border-slate-400 px-6 py-3 rounded-lg font-semibold transition"
        >
          View Pricing
        </a>
      </div>
    </header>

    <!-- Products Section -->
    <section id="products" class="container mx-auto px-4 py-20">
      <h2 class="text-3xl font-bold text-center mb-12">Our Products</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <!-- CMAForge -->
        <div class="bg-slate-800 rounded-xl p-6 hover:bg-slate-750 transition">
          <div class="text-4xl mb-4">📊</div>
          <h3 class="text-xl font-bold mb-2">CMAForge</h3>
          <p class="text-slate-300 mb-4">
            AI-powered Comparative Market Analysis. Generate professional CMAs in minutes.
          </p>
          <a href="https://cmaforge.com" class="text-sky-400 hover:text-sky-300">
            Learn more →
          </a>
        </div>

        <!-- ListingReels -->
        <div class="bg-slate-800 rounded-xl p-6 hover:bg-slate-750 transition">
          <div class="text-4xl mb-4">🎬</div>
          <h3 class="text-xl font-bold mb-2">ListingReels</h3>
          <p class="text-slate-300 mb-4">
            AI video generation for property listings. Create stunning videos from any URL.
          </p>
          <a href="https://listingreels.net" class="text-sky-400 hover:text-sky-300">
            Learn more →
          </a>
        </div>

        <!-- ListingPhoto -->
        <div class="bg-slate-800 rounded-xl p-6 hover:bg-slate-750 transition">
          <div class="text-4xl mb-4">📸</div>
          <h3 class="text-xl font-bold mb-2">ListingPhoto</h3>
          <p class="text-slate-300 mb-4">
            AI photo enhancement for real estate. Transform ordinary photos into stunning visuals.
          </p>
          <a href="https://listingphoto.com" class="text-sky-400 hover:text-sky-300">
            Learn more →
          </a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="container mx-auto px-4 py-8 border-t border-slate-700 text-center text-slate-400">
      <p>© 2025 RealtorTools. All rights reserved.</p>
      <p class="mt-2">Built with AI for real estate professionals.</p>
    </footer>
  </div>
</template>

<style>
/* TailwindCSS would typically be imported here */
/* This is a placeholder - full setup would include @tailwindcss/nuxt */
</style>
