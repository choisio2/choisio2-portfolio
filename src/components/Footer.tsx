const Footer = () => {
  return (
    <footer className="bg-navy py-12 border-t border-white/5 mt-20">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400 font-bold mb-2">
          &copy; {new Date().getFullYear()} <span className="text-matcha">Choi Sujeong</span>. All Rights Reserved.
        </p>
        <p className="text-xs text-gray-600 tracking-widest uppercase">
          Crafted with Next.js, Tailwind CSS & Framer Motion
        </p>
      </div>
    </footer>
  );
};

export default Footer;
