const Footer = () => {
    return (
      <footer className="bg-white py-12 border-t">
        <div className="container mx-auto px-4">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo & Vision */}
            <div>
              <h2 className="text-xl font-bold text-blue-500">MORENT</h2>
              <p className="mt-4 text-gray-600 text-sm">
                Our vision is to provide convenience and help increase your sales business.
              </p>
            </div>
  
            {/* About Section */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">About</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 text-sm hover:text-blue-500">
                    How it works
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 text-sm hover:text-blue-500">
                    Featured
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 text-sm hover:text-blue-500">
                    Partnership
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 text-sm hover:text-blue-500">
                    Business Relation
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Community Section */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Community</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 text-sm hover:text-blue-500">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 text-sm hover:text-blue-500">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 text-sm hover:text-blue-500">
                    Podcast
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 text-sm hover:text-blue-500">
                    Invite a friend
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Socials Section */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Socials</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 text-sm hover:text-blue-500">
                    Discord
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 text-sm hover:text-blue-500">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 text-sm hover:text-blue-500">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 text-sm hover:text-blue-500">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
  
          {/* Bottom Section */}
          <div className="mt-12 flex flex-col md:flex-row justify-between items-center border-t pt-6">
            <p className="text-gray-600 text-sm">&copy; 2022 MORENT. All rights reserved</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-600 text-sm hover:text-blue-500">
                Privacy & Policy
              </a>
              <a href="#" className="text-gray-600 text-sm hover:text-blue-500">
                Terms & Condition
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  