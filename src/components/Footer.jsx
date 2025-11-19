import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-xl text-rose-400" style={{fontFamily: 'satoshi-black'}}>Наш Проект</h2>
          <p className="text-sm text-gray-300 mt-2" style={{fontFamily: 'satoshi-medium'}}>
            Социальная благотворительная инициатива студентов Международной Школы Экономики.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg mb-3" style={{fontFamily: 'satoshi-bold'}}>Быстрые Ссылки</h3>
          <ul className="space-y-2 text-gray-300" style={{fontFamily: 'satoshi-medium'}}>
            <li><Link to="/about" className="hover:text-rose-400 transition">О нас</Link></li>
            <li><Link to="/skills" className="hover:text-rose-400 transition">Наша История</Link></li>
            <li><Link to="/projects" className="hover:text-rose-400 transition">12 месяцев добра</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3" style={{fontFamily: 'satoshi-bold'}}>Свяжитесь с нами</h3>
          <div className="flex space-x-4 text-2xl">
            <a 
              href="https://www.instagram.com/elite.mnu/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-rose-400 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} MNU. International School of Economics.
      </div>
    </footer>
  )
}

export default Footer
