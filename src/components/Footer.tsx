const Footer = () => {
  return (
    <footer className="bg-navy py-8 mt-20 border-t border-gray-800">
      <div className="container mx-auto px-4 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Choi Sujeong. All Rights Reserved.</p>
        <p className="mt-2 text-sm">이 페이지는 Next.js와 Tailwind CSS로 제작되었습니다.</p>
      </div>
    </footer>
  );
};

export default Footer;
