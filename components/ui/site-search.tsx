"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import Link from "next/link";

// Define search categories and results (in a real app, this would come from an API or database)
interface SearchResult {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
}

const searchData: SearchResult[] = [
  {
    id: "1",
    title: "Web Development",
    description: "Custom web application development services",
    url: "#services",
    category: "services"
  },
  {
    id: "2",
    title: "UI/UX Design",
    description: "User interface and experience design services",
    url: "#services",
    category: "services"
  },
  {
    id: "3",
    title: "BlogSquirrel",
    description: "Case study for BlogSquirrel marketing site redesign",
    url: "#featured-work",
    category: "projects"
  },
  {
    id: "4",
    title: "BrainWise",
    description: "Case study for BrainWise AI learning platform",
    url: "#featured-work",
    category: "projects"
  },
  {
    id: "5",
    title: "Our Process",
    description: "Learn about our development process",
    url: "#process",
    category: "company"
  },
  {
    id: "6",
    title: "Book a Call",
    description: "Schedule a consultation call with our team",
    url: "#booking",
    category: "contact"
  }
];

export function SiteSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Filter results based on search query
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setResults([]);
      return;
    }

    const filteredResults = searchData.filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    setResults(filteredResults);
  }, [searchQuery]);

  // Focus input when search modal opens
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Open search with Cmd+K or Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(true);
      }
      
      // Close with Escape
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <button
        className="flex items-center justify-center h-10 px-4 py-2 text-off-white/80 rounded-lg border border-off-white/10 hover:bg-deep-gray/50 transition-colors duration-200"
        onClick={() => setIsOpen(true)}
      >
        <Search className="h-4 w-4 mr-2" />
        <span className="text-sm">Search</span>
        <span className="hidden sm:flex items-center ml-3 rounded bg-deep-gray px-1.5 py-0.5 text-xs text-off-white/60">⌘K</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 bg-charcoal-black/80 backdrop-blur-sm flex items-start justify-center pt-[15vh]">
            <motion.div
              ref={searchContainerRef}
              className="w-full max-w-xl bg-deep-gray rounded-lg shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative">
                <Search className="absolute left-4 top-4 h-5 w-5 text-off-white/60" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search for services, projects, or pages..."
                  className="w-full h-14 pl-12 pr-12 bg-transparent border-b border-off-white/10 text-off-white placeholder:text-off-white/40 focus:outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  className="absolute right-4 top-4 p-1 rounded-full hover:bg-charcoal-black/20 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-5 w-5 text-off-white/60" />
                </button>
              </div>

              <div className="max-h-[60vh] overflow-y-auto py-2">
                {searchQuery.trim() !== "" && results.length === 0 ? (
                  <div className="px-4 py-6 text-center text-off-white/60">
                    No results found for &quot;{searchQuery}&quot;
                  </div>
                ) : (
                  <div>
                    {results.length > 0 && (
                      <div className="px-4 pb-2 pt-3 text-xs uppercase tracking-wider text-off-white/40 font-medium">
                        Results
                      </div>
                    )}
                    
                    {results.map((result) => (
                      <Link
                        key={result.id}
                        href={result.url}
                        onClick={() => {
                          setIsOpen(false);
                          setSearchQuery("");
                        }}
                        className="block px-4 py-3 hover:bg-charcoal-black/20 transition-colors"
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-off-white font-medium mb-1">{result.title}</h3>
                            <p className="text-sm text-off-white/60">{result.description}</p>
                          </div>
                          <span className="text-xs px-2 py-1 bg-deep-gray/50 rounded-full border border-off-white/10 text-off-white/40 uppercase">
                            {result.category}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}

                {searchQuery.trim() === "" && (
                  <div className="px-4 py-3 text-off-white/60">
                    <p className="text-center text-sm">
                      Try searching for services, projects, or specific pages.
                    </p>
                  </div>
                )}
                
                <div className="px-4 py-3 text-xs text-off-white/40 border-t border-off-white/10 mt-2">
                  <div className="flex items-center justify-between">
                    <span>Press ESC to close</span>
                    <div className="flex gap-2">
                      <span>↑↓ to navigate</span>
                      <span>↵ to select</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
} 