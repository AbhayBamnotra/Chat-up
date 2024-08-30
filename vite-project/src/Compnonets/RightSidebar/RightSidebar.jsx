import React from 'react';
import assets from '../../assets/assets';


const RightSidebar = () => {
  return (
    <div className="w-1/4 bg-blue-900 text-white flex flex-col p-4">
      <div className="flex flex-col items-center mb-4">
        <img
          src={assets.profile_img} // Placeholder for profile picture
          alt="profile"
          className="rounded-full w-20 h-20 mb-2"
        />
        <h2 className="text-xl font-bold">Richard Sanford</h2>
        <p className="text-sm text-center">Hey, there I am Richard Sanford using chat app</p>
        <span className="text-green-500 mt-2">• Online</span>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-bold mb-2">Media</h3>
        <div className="flex">
          {/* Placeholder for media images */}
          {[1, 2, 3, 4, 5].map((_, idx) => (
            <img
              key={idx}
              src={assets.pic4}
              alt="media"
              className="w-12 h-12 rounded-lg mr-2"
            />
          ))}
        </div>
      </div>
      <button className="mt-auto bg-blue-700 p-2 rounded text-center">Logout</button>
    </div>
  );
};

export default RightSidebar;
