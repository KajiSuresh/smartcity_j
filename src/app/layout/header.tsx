"use client";


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
import { Landmark, GraduationCap, Briefcase, Building2, MapPin } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  // const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Tourism", href: "/tourism", icon: MapPin },
    { name: "Education", href: "/education", icon: GraduationCap },
    { name: "Jobs", href: "/job", icon: Briefcase },
    { name: "Business", href: "/business", icon: Building2 },
    // { name: "Admin", href: "/admin", icon: Landmark },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Landmark className="h-6 w-6" />
            <span className="hidden md: font-bold sm:inline-block">
              Smart City Guide
            </span>
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              {navigation.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                        pathname === item.href && "bg-accent"
                      )}
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      {item.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
          </div>
          <nav className="flex items-center space-x-2">
            {/* <ModeToggle /> */}
            <Button variant="outline" asChild>
              <Link href="/login">Login</Link>
            </Button>
          </nav>
        </div>
      </nav>
    </header>
  );
}