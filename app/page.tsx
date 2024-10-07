"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Bot, ShoppingBag, Sparkles, ThumbsUp, Menu } from 'lucide-react'

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState('creators')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-800">AIMarket</h1>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-blue-800 hover:text-blue-600">About</a>
            <a href="#" className="text-blue-800 hover:text-blue-600">Features</a>
            <a href="#" className="text-blue-800 hover:text-blue-600">Pricing</a>
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="w-6 h-6 text-blue-800" />
          </button>
        </nav>
        {isMenuOpen && (
          <div className="mt-4 md:hidden">
            <a href="#" className="block py-2 text-blue-800 hover:text-blue-600">About</a>
            <a href="#" className="block py-2 text-blue-800 hover:text-blue-600">Features</a>
            <a href="#" className="block py-2 text-blue-800 hover:text-blue-600">Pricing</a>
          </div>
        )}
      </header>

      <main className="container mx-auto px-4 py-8 md:py-16">
        <section className="text-center mb-12 md:mb-16">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-blue-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Revolutionize Your Digital Product Sales with AI
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-blue-700 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Empower your creativity with our AI-driven marketplace for custom digital products
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href="#"
              className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 inline-block"
            >
              Get Started
            </a>
          </motion.div>
        </section>

        <section className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Key Features</h3>
            <ul className="space-y-4">
              <motion.li
                className="flex items-start space-x-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Sparkles className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">AI Content Generation</h4>
                  <p className="text-gray-600">Auto-generate product descriptions, tags, and promotional texts</p>
                </div>
              </motion.li>
              <motion.li
                className="flex items-start space-x-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <ShoppingBag className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Personalized Recommendations</h4>
                  <p className="text-gray-600">AI-powered product suggestions based on user preferences</p>
                </div>
              </motion.li>
              <motion.li
                className="flex items-start space-x-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Bot className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">AI Chat Support</h4>
                  <p className="text-gray-600">Intelligent chatbots to assist sellers with pricing and optimization</p>
                </div>
              </motion.li>
              <motion.li
                className="flex items-start space-x-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <ThumbsUp className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Review Analysis</h4>
                  <p className="text-gray-600">AI-driven insights from product reviews for continuous improvement</p>
                </div>
              </motion.li>
            </ul>
          </div>
          <div className="relative mt-8 md:mt-0">
            <div className="absolute inset-0 bg-blue-200 rounded-lg transform rotate-3"></div>
            <img
              src="/placeholder.svg"
              alt="AI-Powered Marketplace"
              className="relative z-10 rounded-lg shadow-lg w-full h-auto"
              width={600}
              height={400}
            />
          </div>
        </section>

        <section className="mb-12 md:mb-16">
          <h3 className="text-2xl font-semibold text-blue-800 mb-4 text-center">Who Benefits?</h3>
          <div className="flex justify-center space-x-4 mb-8">
            <button
              className={`px-4 py-2 rounded-full ${activeTab === 'creators' ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-800'}`}
              onClick={() => setActiveTab('creators')}
            >
              Creators
            </button>
            <button
              className={`px-4 py-2 rounded-full ${activeTab === 'buyers' ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-800'}`}
              onClick={() => setActiveTab('buyers')}
            >
              Buyers
            </button>
          </div>
          <motion.div
            className="bg-white p-6 md:p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {activeTab === 'creators' ? (
              <div>
                <h4 className="text-xl font-semibold mb-4">For Creators</h4>
                <ul className="space-y-2">
                  <li>• Effortlessly create product listings with AI-generated content</li>
                  <li>• Receive intelligent pricing recommendations</li>
                  <li>• Get insights on how to improve your products based on review analysis</li>
                  <li>• Reach a wider audience with AI-optimized product tags and descriptions</li>
                </ul>
              </div>
            ) : (
              <div>
                <h4 className="text-xl font-semibold mb-4">For Buyers</h4>
                <ul className="space-y-2">
                  <li>• Discover personalized product recommendations</li>
                  <li>• Find exactly what you need with AI-enhanced search capabilities</li>
                  <li>• Make informed decisions with comprehensive product information</li>
                  <li>• Enjoy a curated shopping experience tailored to your preferences</li>
                </ul>
              </div>
            )}
          </motion.div>
        </section>

        <section className="text-center">
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">Ready to Transform Your Digital Product Business?</h3>
          <p className="text-xl text-blue-700 mb-8">Join our AI-powered marketplace and take your creativity to new heights</p>
          <a
            href="#"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Get Started Now <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </section>
      </main>

      <footer className="bg-blue-900 text-white py-8 mt-12 md:mt-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">&copy; 2024 AIMarket. All rights reserved.</p>
          <div className="space-x-4">
            <a href="#" className="hover:text-blue-300">Terms</a>
            <a href="#" className="hover:text-blue-300">Privacy</a>
            <a href="#" className="hover:text-blue-300">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}