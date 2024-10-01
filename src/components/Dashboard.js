import React from 'react';

const DashboardPreview = () => {
  return (
    <section className="flex justify-center items-center py-10 px-4 bg-gray-50">
      <div className="w-full max-w-xs md:max-w-2xl lg:max-w-3xl shadow-lg rounded-lg overflow-hidden">
        <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
          <iframe 
            className="absolute top-0 left-0 w-full h-full" 
            src="https://www.youtube.com/embed/URVHRhBSjj8" 
            title="Great Event Futuristic Launching Gimmick Video Montaj Design intro" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen></iframe>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;


