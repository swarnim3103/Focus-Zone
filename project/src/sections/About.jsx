// App.js
import React from 'react';
import InfoCard from './InfoCard';
import { FaHeart, FaStar, FaSmile } from 'react-icons/fa';

const About = () => {
  return (
    <div className="flex flex-col bg-gradient-to-b from-customBlue4 to-white p-6">
      <div className="">
        <InfoCard
         
          description="A short attention span refers to the difficulty in maintaining focus on a task or activity for an extended period. This can lead to distractions, reduced productivity, and difficulty completing tasks. It often results from overstimulation, stress, or habitual multitasking and can be exacerbated by digital media and constant notifications."
          icon={<FaHeart className="text-blue-500" />}
        />
        <InfoCard
         
          description="FocusZone is a productivity tool that helps you stay focused and on track. It allows you to set a timer for your work sessions and breaks, helping you manage your time effectively and avoid distractions. By using FocusZone, you can improve your productivity, reduce procrastination, and achieve your goals more efficiently."
          icon={<FaStar className="text-blue-500" />}
        />
        <InfoCard
          
          description="Leave your worries behind and with a smile start your journey."
          icon={<FaSmile className="text-blue-500" />}
        />
      </div>
    </div>
  );
};

export default About;
