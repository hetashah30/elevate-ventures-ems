import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthForm from "@/components/auth/AuthForm";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";

const Auth = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode"); // 'login' or 'signup'

  // Check for Firebase authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        navigate("/");
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <div className="relative py-16 md:py-24">
          {/* Enhanced decorative background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 overflow-hidden z-0"
          >
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-64 w-full">
              <div className="w-full h-full bg-gradient-to-r from-elevate-purple/20 to-elevate-gold/20 rounded-b-[100%] blur-2xl" />
            </div>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -left-10 top-40 h-32 w-32 bg-elevate-gold opacity-10 rounded-full"
            />
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, -5, 5, 0],
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -right-10 top-60 h-24 w-24 bg-elevate-purple opacity-10 rounded-full"
            />
          </motion.div>

          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto mb-12"
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-2">
                Welcome to Elevate Ventures
                <Sparkles className="h-6 w-6 text-elevate-gold" />
              </h1>
              <p className="text-muted-foreground">
                {mode === "signup"
                  ? "Create your account to access personalized event planning services."
                  : "Sign in to your account or create a new one to access personalized event planning services."}
              </p>
            </motion.div>

            <div className="max-w-md mx-auto">
              <AuthForm initialMode={mode} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Auth;
