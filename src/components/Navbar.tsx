// src/components/Navbar.tsx
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, UserRound, LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useAuth } from "../contexts/auth";
import { signOut } from "firebase/auth";
import { auth } from "../lib/firebase";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
      setIsMenuOpen(false);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-b-border/50">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="rounded-full w-8 h-8 celebration-gradient flex items-center justify-center">
            <img src="\elevate-venture.png" alt="logo" />
          </div>
          <span className="font-display text-xl font-semibold tracking-tight">
            Elevate<span className="text-elevate-purple">Ventures</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className="text-sm font-medium hover:text-elevate-purple transition-colors"
          >
            Home
          </Link>
          <button
            onClick={() => scrollToSection("services")}
            className="text-sm font-medium hover:text-elevate-purple transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-sm font-medium hover:text-elevate-purple transition-colors"
          >
            About Us
          </button>
          <Link
            to="/gallery"
            className="text-sm font-medium hover:text-elevate-purple transition-colors"
          >
            Event Gallery
          </Link>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm font-medium hover:text-elevate-purple transition-colors"
          >
            Contact
          </button>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          {currentUser ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-10 w-10 rounded-full"
                >
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-elevate-purple text-white">
                      {currentUser.email?.charAt(0).toUpperCase() || "U"}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem className="flex items-center gap-2">
                  <UserRound className="h-4 w-4" />
                  <span className="truncate">{currentUser.email}</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="text-destructive flex items-center gap-2"
                  onClick={handleLogout}
                >
                  <LogOut className="h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link to="/auth">
              <Button variant="outline" size="sm" className="gap-1">
                <UserRound size={16} />
                <span>Sign In</span>
              </Button>
            </Link>
          )}
          <Link to="/apply">
            <Button
              size="sm"
              className="bg-elevate-purple hover:bg-elevate-purple/90"
            >
              Apply Now
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <nav className="container py-4 flex flex-col gap-4">
            <Link
              to="/"
              className="text-sm font-medium p-2 hover:bg-accent rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm font-medium p-2 hover:bg-accent rounded-md text-left"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium p-2 hover:bg-accent rounded-md text-left"
            >
              About Us
            </button>
            <Link
              to="/gallery"
              className="text-sm font-medium p-2 hover:bg-accent rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Event Gallery
            </Link>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium p-2 hover:bg-accent rounded-md text-left"
            >
              Contact
            </button>
            <div className="flex flex-col gap-2 pt-2">
              {currentUser ? (
                <>
                  <div className="flex items-center gap-2 p-2">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-elevate-purple text-white">
                        {currentUser.email?.charAt(0).toUpperCase() || "U"}
                      </AvatarFallback>
                    </Avatar>
                    <span className="truncate text-sm">
                      {currentUser.email}
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full justify-center gap-1"
                    onClick={handleLogout}
                  >
                    <LogOut size={16} />
                    <span>Log out</span>
                  </Button>
                </>
              ) : (
                <Link to="/auth" onClick={() => setIsMenuOpen(false)}>
                  <Button
                    variant="outline"
                    className="w-full justify-center gap-1"
                  >
                    <UserRound size={16} />
                    <span>Sign In</span>
                  </Button>
                </Link>
              )}
              <Link to="/apply" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-elevate-purple hover:bg-elevate-purple/90">
                  Apply Now
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
