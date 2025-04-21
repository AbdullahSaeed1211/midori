"use client";

export function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="border-t border-midori-300/10 bg-code-black-950 py-8 text-code-black-400" id="footer">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-sm">
            © {year} MidoriLabs.studio | Results-Driven Web Development
          </p>
        </div>
      </div>
    </footer>
  );
} 