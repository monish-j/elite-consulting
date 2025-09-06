'use client';

import React from 'react';
import { Target, TrendingUp, Users, CheckCircle, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: <Target className="w-12 h-12 text-blue-600" />,
    title: "Strategic Planning",
    description: "Develop comprehensive business strategies that drive sustainable growth and competitive advantage.",
    features: ["Market Analysis", "Growth Planning", "Risk Assessment", "Performance Metrics"]
  },
  {
    icon: <TrendingUp className="w-12 h-12 text-green-600" />,
    title: "Business Growth",
    description: "Scale your operations efficiently with proven methodologies and data-driven insights.",
    features: ["Revenue Optimization", "Process Improvement", "Team Development", "Technology Integration"]
  },
  {
    icon: <Users className="w-12 h-12 text-purple-600" />,
    title: "Leadership Coaching",
    description: "Transform your leadership capabilities and build high-performing teams that deliver results.",
    features: ["Executive Coaching", "Team Building", "Communication Skills", "Change Management"]
  }
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">Our Services</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Comprehensive consulting solutions designed to unlock your business potential 
            and drive sustainable growth.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className="grid lg:grid-cols-2 gap-16 items-center">
                <div className={index % 2 === 0 ? 'order-1' : 'order-2'}>
                  <div className="mb-6">{service.icon}</div>
                  <h2 className="text-4xl font-bold text-slate-900 mb-6">{service.title}</h2>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">{service.description}</p>
                  <ul className="space-y-4 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-slate-700">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="/contact"
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-flex items-center"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </div>
                <div className={index % 2 === 0 ? 'order-2' : 'order-1'}>
                  <img 
                    src={`https://images.unsplash.com/photo-${index === 0 ? '1454165804606-c3d57bc86b40' : index === 1 ? '1460925895917-afdab827c52f' : '1559136555-9303baea8ebd'}?w=600&h=400&fit=crop`}
                    alt={service.title}
                    className="w-full rounded-2xl shadow-xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


