import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#E8F5F3] via-[#F0F9F7] to-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-2xl">
                🧘
              </div>
              <span className="text-2xl font-bold text-gray-900">Reflectia</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-primary transition">Features</a>
              <a href="#about" className="text-gray-600 hover:text-primary transition">About</a>
              <a href="#download" className="text-gray-600 hover:text-primary transition">Download</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-5xl mx-auto mb-8 shadow-2xl">
            🧘
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Find Your Inner Balance
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Build character, track your daily insights, and receive personalized AI nudges to become your best self.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#download"
              className="px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-full transition shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Download App
            </a>
            <a
              href="#features"
              className="px-8 py-4 bg-white hover:bg-gray-50 text-primary font-semibold rounded-full transition shadow-lg border-2 border-primary"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            Powerful Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-gradient-to-br from-[#E8F5F3] to-white rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Daily Reflections</h3>
              <p className="text-gray-600">
                Capture your thoughts, track your mood, and build a personal growth journal that evolves with you.
              </p>
            </div>
            <div className="p-8 bg-gradient-to-br from-[#E8F5F3] to-white rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Anonymous Feedback</h3>
              <p className="text-gray-600">
                Generate unique links to receive honest, anonymous feedback from peers that helps you grow.
              </p>
            </div>
            <div className="p-8 bg-gradient-to-br from-[#E8F5F3] to-white rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="text-4xl mb-4">🔥</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Streak Tracking</h3>
              <p className="text-gray-600">
                Stay motivated with daily streaks, achievement badges, and detailed stats about your journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Your Personal Growth Companion
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Reflectia combines self-reflection, peer feedback, and gamification to help you become the best version of yourself. 
            Track your progress, celebrate milestones, and build lasting habits.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-gray-600">Private & Secure</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">48h</div>
              <div className="text-gray-600">Feedback Links</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">∞</div>
              <div className="text-gray-600">Growth Potential</div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Start Your Journey Today
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Download Reflectia and take the first step toward meaningful personal growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="px-8 py-4 bg-white text-primary font-semibold rounded-full hover:bg-gray-100 transition shadow-lg inline-flex items-center justify-center space-x-2"
            >
              <span>📱</span>
              <span>Download for Android</span>
            </a>
            <a
              href="#"
              className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/30 transition shadow-lg inline-flex items-center justify-center space-x-2 border-2 border-white"
            >
              <span>🍎</span>
              <span>Download for iOS</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-2xl">
                  🧘
                </div>
                <span className="text-2xl font-bold">Reflectia</span>
              </div>
              <p className="text-gray-400">
                Your personal growth companion. Build character, track insights, and become your best self.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-white transition">Features</a></li>
                <li><a href="#about" className="hover:text-white transition">About</a></li>
                <li><a href="#download" className="hover:text-white transition">Download</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Reflectia. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
