import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Layihələr', href: '/projects' },
  { label: 'Haqqımızda', href: '/about' },
];

interface MagneticButtonProps {
  children?: React.ReactNode;
  to: string;
  className?: string;
}

// Magnetic Button Component
const MagneticButton = ({ children, to, className }: MagneticButtonProps) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    // Move the button partially towards the cursor
    setPosition({ x: x * 0.2, y: y * 0.2 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      <Link to={to} ref={ref} className={className}>
        {children}
      </Link>
    </motion.div>
  );
};

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 glass-card border-b-0' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-display font-bold text-2xl tracking-tight text-white z-50 relative group">
          Atlasoon
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-atlas-primary transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`relative group py-2 text-sm font-medium tracking-wide transition-colors duration-300 ${
                location.pathname === link.href ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              {link.label}
              <span className={`absolute bottom-0 left-0 h-[2px] bg-atlas-primary transition-all duration-300 ease-out ${
                location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </Link>
          ))}
        </div>

        {/* CTA Button with Magnetic Effect */}
        <div className="hidden md:block">
          <MagneticButton
            to="/contact"
            className="inline-block px-8 py-3 rounded-full border border-white/20 bg-white/5 hover:bg-white hover:text-black hover:border-white transition-all duration-300 text-sm font-medium backdrop-blur-sm"
          >
            Əlaqə
          </MagneticButton>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white z-50 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed inset-0 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 z-40"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-display font-medium text-white hover:text-atlas-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-8 py-3 rounded-full border border-white/20 text-white text-lg mt-4"
            >
              Əlaqə
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};