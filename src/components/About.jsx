import React from "react";

const About = () => {
  return (
    <div className="pt-20 px-4 flex justify-center">
      <div className="max-w-4xl w-full">
        
        {/* HERO */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold mb-3">About This Platform</h1>
          <p className="text-gray-600 leading-relaxed">
            A modern video-streaming platform built to explore, watch, and manage
            content seamlessly with a clean and responsive user experience.
          </p>
        </div>

        {/* WHAT IS THIS */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            What is this project?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            This project is a YouTube-like video platform where users can browse
            videos, watch content, interact with videos, and manage their profile.
            It is designed to simulate real-world application architecture using
            modern frontend and backend technologies.
          </p>
        </section>

        {/* FEATURES */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Key Features</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>User authentication (Login / Logout)</li>
            <li>Video browsing and streaming experience</li>
            <li>Responsive design for mobile and desktop</li>
            <li>Sidebar navigation and clean UI layout</li>
            <li>User profile, history, and liked videos</li>
            <li>Scalable and reusable component structure</li>
          </ul>
        </section>

        {/* TECH STACK */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Tech Stack</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-gray-700">
            <span>⚛️ React</span>
            <span>🧠 Redux Toolkit</span>
            <span>🧭 React Router</span>
            <span>🎨 Tailwind CSS</span>
            <span>🟢 Node.js</span>
            <span>🚀 Express.js</span>
            <span>🍃 MongoDB</span>
            <span>🔐 JWT Authentication</span>
            <span>🌐 REST APIs</span>
          </div>
        </section>

        {/* DEVELOPER */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">About the Developer</h2>
          <p className="text-gray-700 leading-relaxed">
            Hi 👋, I’m <span className="font-medium">Sabhimanu Patel</span>, a passionate
            Full Stack Developer focused on building scalable, user-friendly web
            applications. This project represents my hands-on learning experience
            with real-world development patterns and modern web technologies.
          </p>
        </section>

        {/* FOOTER NOTE */}
        <div className="border-t pt-6 text-center text-sm text-gray-500">
          Built with ❤️ to learn, build, and grow as a developer.
        </div>
      </div>
    </div>
  );
};

export default About;
