'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { 
  Landmark, 
  GraduationCap, 
  Briefcase, 
  Building2, 
  MapPin, 
  Menu, 
  X,
  UserCircle 
} from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const navigation = [
    { name: "Tourism", href: "/tourism", icon: MapPin },
    { name: "Education", href: "/education", icon: GraduationCap },
    { name: "Jobs", href: "/job", icon: Briefcase },
    { name: "Business", href: "/business", icon: Building2 },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        isScrolled 
          ? "shadow-lg border-[#A0D683]/20 bg-white/80 backdrop-blur-lg" 
          : "bg-gradient-to-r from-[#A0D683]/10 to-[#B8E49B]/10 border-transparent"
      )}
    >
      <nav className="container flex h-20 items-center justify-between">
        {/* Logo Section */}
        <div className="flex-shrink-0 w-48">
          <Link 
            href="/" 
            className="flex items-center space-x-2 group transition-all duration-300 hover:text-[#A0D683]"
          >
            <div className="relative">
              <Landmark className="h-7 w-7 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 text-[#A0D683]" />
              <div className="absolute inset-0 bg-[#A0D683]/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
            </div>
            <span className="font-bold text-lg tracking-tight relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#A0D683] after:left-0 after:right-0 after:-bottom-1 after:transition-all after:duration-300 group-hover:after:w-full">
              Smart City Guide
            </span>
          </Link>
        </div>

        {/* Desktop Navigation - Centered */}
        <div className="hidden md:flex flex-grow justify-center">
          <NavigationMenu className="relative">
            <NavigationMenuList className="space-x-2 bg-white/50 px-4 py-2 rounded-full shadow-sm">
              {navigation.map((item, index) => (
                <NavigationMenuItem key={item.name}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      onMouseEnter={() => setActiveIndex(index)}
                      onMouseLeave={() => setActiveIndex(-1)}
                      className={cn(
                        "group relative inline-flex h-10 w-max items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                        "hover:text-[#769C5D] hover:bg-[#A0D683]/10",
                        "focus:outline-none focus:ring-2 focus:ring-[#A0D683] focus:ring-offset-2",
                        pathname === item.href 
                          ? "bg-[#A0D683]/20 text-[#769C5D] shadow-sm" 
                          : "text-slate-600",
                        "overflow-hidden"
                      )}
                    >
                      <div className="relative z-10 flex items-center">
                        <item.icon 
                          className={cn(
                            "mr-2 h-4 w-4 transition-all duration-300",
                            activeIndex === index && "scale-110 rotate-6 text-[#A0D683]"
                          )} 
                        />
                        {item.name}
                      </div>
                      <div 
                        className={cn(
                          "absolute inset-0 transition-transform duration-300",
                          "bg-gradient-to-r from-[#A0D683]/10 to-[#B8E49B]/10",
                          activeIndex === index ? "scale-100" : "scale-0"
                        )} 
                      />
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="h-10 w-10 transition-transform duration-200 hover:scale-110 text-[#A0D683]"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5 transition-transform duration-200 rotate-90" />
            ) : (
              <Menu className="h-5 w-5 transition-transform duration-200" />
            )}
          </Button>
        </div>

        {/* Mobile Logo - Center */}
        <div className="flex md:hidden flex-1 justify-center">
          <Link href="/" className="flex items-center space-x-2 group">
            <Landmark className="h-6 w-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 text-[#A0D683]" />
            <span className="font-bold tracking-tight">SCG</span>
          </Link>
        </div>

        {/* Login Button Section */}
        <div className="flex-shrink-0 w-48 flex justify-end">
          <Button 
            variant="outline" 
            asChild
            className="hidden md:inline-flex items-center gap-2 transition-all duration-300 
                     hover:bg-[#A0D683]/10 hover:text-[#769C5D] hover:scale-105 
                     border-[#A0D683]/50 text-[#769C5D] group"
          >
            <Link href="/login" className="flex items-center gap-2">
              <UserCircle className="h-4 w-4 transition-transform duration-300 group-hover:rotate-6" />
              <span>Login</span>
            </Link>
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <div 
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300",
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="space-y-1.5 px-4 py-3 bg-white/80 backdrop-blur-lg">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center space-x-2 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-300",
                "relative overflow-hidden group",
                pathname === item.href
                  ? "bg-[#A0D683]/20 text-[#769C5D]"
                  : "hover:bg-[#A0D683]/10 text-slate-600 hover:text-[#769C5D]"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <item.icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
              <span className="relative">
                {item.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#A0D683]/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </span>
            </Link>
          ))}
          <Button 
            variant="outline" 
            asChild 
            className="w-full mt-4 group transition-all duration-300 
                     hover:bg-[#A0D683]/10 hover:text-[#769C5D]
                     border-[#A0D683]/50 text-[#769C5D]"
          >
            <Link href="/login" className="flex items-center justify-center gap-2">
              <UserCircle className="h-4 w-4 transition-transform duration-300 group-hover:rotate-6" />
              <span>Login</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}