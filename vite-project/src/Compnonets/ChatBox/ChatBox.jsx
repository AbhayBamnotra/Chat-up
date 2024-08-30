import React from 'react';
import assets from '../../assets/assets';


const ChatBox = () => {
  return (
    <div className="w-2/4 bg-gray-100 p-4 flex flex-col">
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center">
          <img
             src={assets.profile_img} // Placeholder for profile picture
            alt="profile"
            className="rounded-full w-10 h-10 mr-3"
          />
          <p className="font-semibold">Richard Sanford</p>
          <span className="text-green-500 ml-2">•</span>
        </div>
        <button className="text-gray-500">
          <i className="fas fa-info-circle"></i> {/* Icon Placeholder */}
        </button>
      </div>
      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="flex items-start mb-4">
          <img
            src={assets.profile_img}
            alt="profile"
            className="rounded-full w-8 h-8 mr-3"
          />
          <div>
            <p className="bg-blue-500 text-white p-2 rounded-lg max-w-xs">
              Lorem ipsum is placeholder text commonly used in ..
            </p>
            <span className="text-xs text-gray-500">2:30 PM</span>
          </div>
        </div>
        <div className="flex items-start mb-4">
          <img
            src={assets.profile_img}
            alt="profile"
            className="rounded-full w-8 h-8 mr-3"
          />
          <div>
            <img
              src={assets.pic1}
              alt="chat media"
              className="rounded-lg"
            />
            <p className="bg-blue-500 text-white p-2 rounded-lg max-w-xs mt-2">
              Lorem ipsum is placeholder text commonly used in ..
            </p>
            <span className="text-xs text-gray-500">2:30 PM</span>
          </div>
        </div>
      </div>
      {/* Chat input */}
      <div className="p-4 border-t flex items-center">
        <input
          type="text"
          placeholder="Send a message"
          className="flex-1 p-2 border rounded-l focus:outline-none"
        />
        <button className="bg-blue-500 p-2 rounded-r text-white">
          <i className="fas fa-paper-plane"></i> {/* Icon Placeholder */}
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
