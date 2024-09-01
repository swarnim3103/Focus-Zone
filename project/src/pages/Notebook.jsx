import React from 'react';
import {Nav ,Footer} from '../sections/index.js';
function Notebook() {
  return (
    <>
    <Nav page="section"/>
    <div className='bg-gradient-to-b from-customBlue4 to-white'>
       
        <div className="p-6 max-w-md mx-auto rounded-lg shadow-lg">
      <div className="text-center text-2xl font-bold mb-4">Notebook</div>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Date:</label>
        <input 
          type="text" 
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md" 
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Goals:</label>
        <input 
          type="text" 
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md" 
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-2">Top Priorities</h3>
          <ul className="space-y-2">
            {[...Array(3)].map((_, index) => (
              <li key={index} className="flex items-center">
                <input 
                  type="checkbox" 
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded" 
                />
                <input 
                  type="text" 
                  className="ml-2 block w-full p-1 border border-gray-300 rounded-md" 
                />
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-2">To Do List</h3>
          <ul className="space-y-2">
            {[...Array(6)].map((_, index) => (
              <li key={index} className="flex items-center">
                <input 
                  type="checkbox" 
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded" 
                />
                <input 
                  type="text" 
                  className="ml-2 block w-full p-1 border border-gray-300 rounded-md" 
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Important</h3>
        <input 
          type="text" 
          className="block w-full p-2 border border-gray-300 rounded-md" 
        />
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Notes</h3>
        <textarea 
          className="block w-full p-2 border border-gray-300 rounded-md" 
          rows="3"
        ></textarea>
      </div>
    </div>
    </div>
    <Footer/>
    </>
    
    
  );
}

export default Notebook;
