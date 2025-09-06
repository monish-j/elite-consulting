'use client';

import React from 'react';
import Image from 'next/image';
import { Linkedin } from 'lucide-react';

const team = [
  {
    name: "David Martinez",
    position: "Founder & CEO",
    bio: "20+ years of experience helping Fortune 500 companies and startups achieve breakthrough results.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    linkedin: "#"
  },
  {
    name: "Lisa Thompson",
    position: "Senior Consultant",
    bio: "Former McKinsey consultant specializing in operational excellence and digital transformation.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face",
    linkedin: "#"
  },
  {
    name: "James Wilson",
    position: "Strategy Director",
    bio: "Expert in market analysis and competitive intelligence with an MBA from Wharton.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
    linkedin: "#"
  }
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">About Elite Consulting</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            We are a team of experienced consultants dedicated to helping businesses achieve 
            sustainable growth through strategic planning and operational excellence.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Story</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Founded in 2014, Elite Consulting emerged from a simple belief: every business has untapped potential 
                waiting to be unleashed. Our founders, with combined experience of over 50 years in Fortune 500 companies, 
                saw the gap between where businesses are and where they could be.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Today, we&apos;ve helped over 200 companies across various industries transform their operations, 
                scale efficiently, and achieve sustainable growth. Our methodology combines proven business principles 
                with innovative approaches tailored to each client&apos;s unique challenges.
              </p>
            </div>
            <div>
              <Image 
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop" 
                alt="Team meeting" 
                width={600}
                height={400}
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-slate-600">Expert consultants with proven track records</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <Image 
                  src={member.image} 
                  alt={member.name}
                  width={128}
                  height={128}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-bold text-slate-900 mb-2">{member.name}</h3>
                <div className="text-blue-600 font-semibold mb-4">{member.position}</div>
                <p className="text-slate-600 mb-6 leading-relaxed">{member.bio}</p>
                <a 
                  href={member.linkedin}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  Connect
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


