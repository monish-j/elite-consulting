'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Users, Target, TrendingUp, CheckCircle, ArrowRight, Star, Quote } from 'lucide-react';

const SmallBusinessWebsite = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

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

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      content: "Elite Consulting transformed our business strategy and helped us achieve 300% growth in just 18 months. Their expertise is unmatched.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      position: "Founder, InnovateNow",
      content: "The strategic planning session was incredibly valuable. We now have a clear roadmap for the next 3 years and our team is more aligned than ever.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      position: "VP Operations, GrowthCorp",
      content: "Their leadership coaching program helped me become a more effective leader. My team's productivity has increased by 40% since working with them.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ];

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

  // Navigation is provided by app/components/Navigation and included via layout

  const HomePage = () => (
    <div>
      {/* Hero Section */}
      <section className="pt-20 pb-32 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`transform transition-all duration-1000 ${isVisible.hero ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} id="hero">
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Transform Your Business with
                <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Strategic Excellence
                </span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                We help ambitious businesses unlock their potential through proven strategies, 
                expert guidance, and data-driven solutions that deliver measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a 
                  href="/contact"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 inline-flex items-center justify-center"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a 
                  href="/services"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 inline-flex items-center justify-center"
                >
                  Our Services
                </a>
              </div>
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
                  <div className="text-sm text-slate-600">Clients Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                  <div className="text-sm text-slate-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                  <div className="text-sm text-slate-600">Years Experience</div>
                </div>
              </div>
            </div>
            <div className={`transform transition-all duration-1000 lg:-mt-36 ${isVisible.hero ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <Image 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop" 
                alt="Business consulting" 
                width={800}
                height={600}
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our Services</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive consulting solutions designed to accelerate your business growth
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a 
              href="/services"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              View All Services
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Client Success Stories</h2>
            <p className="text-lg text-slate-600">See what our clients say about working with us</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-blue-600 mb-4" />
                <p className="text-slate-600 mb-6 leading-relaxed">{testimonial.content}</p>
                <div className="flex items-center">
                  <Image 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-600">{testimonial.position}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  // About/Services/Contact moved to dedicated routes

  

  

  // All sections will be rendered on a single page; navigation uses anchor links

  return (
    <div className="min-h-screen bg-white">
      <HomePage />
    </div>
  );
};

export default SmallBusinessWebsite;