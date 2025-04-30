
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { PartyPopper, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30"
          alt="Celebration background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-elevate-dark/60 via-elevate-dark/40 to-transparent" />
      </div>

      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 z-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-20 left-10 w-64 h-64 bg-elevate-purple/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-elevate-gold/20 rounded-full blur-3xl" />
      </motion.div>

      <div className="container px-4 py-32 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
            Creating Unforgettable Events
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 drop-shadow"
        >
          Let us transform your vision into an extraordinary experience. From corporate events to personal celebrations, we bring your dreams to life.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/gallery">
            <Button 
              size="lg" 
              className="bg-elevate-gold hover:bg-elevate-gold/90 text-elevate-dark px-8 group"
            >
              <Sparkles className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              EXPLORE OUR WORK
            </Button>
          </Link>
          <Link to="/apply">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-green hover:bg-white/10 group"
            >
              <PartyPopper className="mr-2 h-4 w-4 transition-transform group-hover:rotate-12" />
              Start Planning
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
