"use client";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { navItems } from "../header/Header";
import { Button } from "@/components/ui/button";
import { Link } from "react-scroll";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="lg:container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">
              Website Traffic SMM Panel
            </h2>
            <p className="mb-4">
              Welcome to Website Traffic SMM Panel - The Best SMM Panel for
              Real, Targeted Website Traffic
            </p>
            <a href="https://websitetrafficsmmpanel.com/">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-4  font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                Website Traffic SMM Panel
              </Button>
            </a>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-70}
                    className="cursor-pointer hover:text-white"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Website Traffic from Google
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Website Traffic from Bing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Website Traffic from Backlinks
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  YouTube Views
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Twitter Engagement
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  SEO Optimization
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t lg:flex justify-between border-gray-800 mt-8 pt-8">
          <p className="text-center">
            &copy; 2024 Website Traffic SMM Panel. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com/"
              target="__blank"
              className="text-gray-400 hover:text-white"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://x.com/"
              target="__blanck"
              className="text-gray-400 hover:text-white"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://instagram.com/"
              target="__blanck"
              className="text-gray-400 hover:text-white"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://linkedin.com/"
              target="__blanck"
              className="text-gray-400 hover:text-white"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
