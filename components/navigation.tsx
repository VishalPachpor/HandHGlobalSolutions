import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/image.png"
                alt="H&S Global Services"
                width={140}
                height={30}
                priority
              />
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/industry"
                className="text-foreground hover:text-primary px-3 py-2 text-lg font-medium"
              >
                Industry
              </Link>
              <Link
                href="/services"
                className="text-foreground hover:text-primary px-3 py-2 text-lg font-medium"
              >
                Services
              </Link>
              <Link
                href="/about"
                className="text-foreground hover:text-primary px-3 py-2 text-lg font-medium"
              >
                About
              </Link>

              {/* <Link
                href="/careers"
                className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium"
              >
                Careers
              </Link> */}
            </div>
          </div>

          <div className="flex items-center">
            <Link href="/contact">
              <Button className="bg-primary hover:bg-secondary text-primary-foreground">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
