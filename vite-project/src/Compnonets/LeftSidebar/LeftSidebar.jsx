import React from 'react';
import assets from '../../assets/assets';

// Sample data for chat items
const chatList = [
  { id: 1, name: 'Richard Sanford', message: 'Hello, How are you?' },
  { id: 2, name: 'Richard Sanford', message: 'Hello, How are you?' },
  { id: 3, name: 'Richard Sanford', message: 'Hello, How are you?' },
  { id: 4, name: 'Richard Sanford', message: 'Hello, How are you?' },
  { id: 5, name: 'Richard Sanford', message: 'Hello, How are you?' },
];

const LeftSidebar = () => {
  return (
    <div className="w-1/4  bg-blue-900 text-white flex flex-col">
      <div className="flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold">Chatapp</h1>
        <button className="text-white">
          <i className="fas fa-ellipsis-v"></i> {/* Icon Placeholder */}
        </button>
      </div>
      <div className="px-4 py-2 fl">
        <input
          type="text"
          placeholder="Search here..."
          className="w-full px-4 py-2 rounded bg-blue-800 placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="overflow-y-auto flex-1">
        {chatList.map((chat) => (
          <div
            key={chat.id}
            className="flex items-center px-4 py-2 hover:bg-blue-700 cursor-pointer"
          >
            <img
              src={assets.profile_img} // Placeholder for profile picture
              alt="profile"
              className="rounded-full w-10 h-10 mr-3"
            />
            <div>
              <p className="font-semibold">{chat.name}</p>
              <p className="text-sm text-gray-300">{chat.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSidebar;
