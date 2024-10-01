import React from 'react';

const MainContent = () => {
  return (
    <section className="text-center py-20 bg-gray-50 px-4 md:px-0">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
        Increase your conversion rate 
        <span className="gradient-text md:gradient-text-responsive"> using AI</span>

      </h1>
      <p className="text-gray-500 mb-8 text-base md:text-lg">An AI tool made for conversion rate optimization</p>
      <button className="bg-black text-white px-8 py-4 rounded-md mb-4">
        Create account
      </button>
      <p className="text-gray-500">30 Days free trial | No credit card required</p>
    </section>
  );
};

export default MainContent;
