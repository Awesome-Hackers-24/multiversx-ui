import React from 'react';
import Link from 'next/link';

const LandingPage = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="bg-blue-500 text-white text-center p-12">
        <h1 className="text-4xl font-bold mb-4">Enhance Your Brain's Potential</h1>
        <p className="text-xl mb-6">Unlock productivity and creativity with guided brain state modulation.</p>
        <Link href="/signup">
          <div className="bg-white text-blue-500 py-2 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-colors">Get Started</div>
        </Link>
      </div>

      {/* Info Section 1 */}
      <div className="flex flex-col items-center text-center p-12">
        <h2 className="text-3xl font-bold mb-4">Why Choose Neurafy?</h2>
        <p className="text-lg mb-6">Our cutting-edge EEG technology helps you enter targeted brain states on demand.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
          <div className="p-4 shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">Focus</h3>
            <p>Enhance your ability to concentrate for longer periods.</p>
          </div>
          <div className="p-4 shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">Relax</h3>
            <p>Wind down after a long day with relaxation techniques that work.</p>
          </div>
        </div>
      </div>

      {/* Info Section 2 */}
      <div className="bg-gray-100 p-12">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-lg mb-6">Connect with others on the same journey and share your experiences.</p>
          <Link href="/community">
            <div> className="bg-blue-500 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-600 transition-colors">Learn More</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
