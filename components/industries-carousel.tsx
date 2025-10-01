"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function IndustriesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const industries = [
    {
      title: "Mortgage",
      description: "Making Home Financing Faster and Simple",
      secondParagraph:
        "The mortgage process shouldn't feel like climbing a mountain. We help lenders cut through the complexity—streamlining loan processing, reducing approval times, and creating experiences that borrowers actually appreciate. With smart automation and hands-on expertise, we turn the traditional mortgage maze into a straightforward path.",
      image: "/business-professionals-analyzing-data-and-processe.jpg",
    },
    {
      title: "Insurance",
      description: "Insurance That Works at the Speed of Life",
      secondParagraph:
        "Your customers expect fast answers and seamless service. We help insurance companies deliver exactly that—from instant quotes to quick claims resolution. By blending smart technology with real insurance know-how, we help you stay competitive while keeping operations smooth and customers happy.",
      image: "/business-meeting-with-professionals-discussing-cus.jpg",
    },
    {
      title: "Banking and Financial Services",
      description: "Building Better Banking Experiences",
      secondParagraph:
        "Banking is personal, even when it's digital. We help financial institutions balance tight regulations with exceptional customer service—making everyday transactions effortless while keeping everything secure and compliant. It's about giving your customers confidence and giving you peace of mind.",
      image: "/professional-business-team-collaborating-in-modern.jpg",
    },
    {
      title: "Digital Services",
      description: "Technology That Actually Makes Life Easier",
      secondParagraph:
        "We cut through the tech jargon to build solutions that just work. Whether it's automating repetitive tasks, building customer-friendly apps, or making sense of your data—we create digital tools that save time, reduce costs, and help your team focus on what really matters.",
      image: "/woman-working-on-laptop-in-modern-office-digital-t.jpg",
    },
    {
      title: "Logistics Services",
      description: "Getting Products Where They Need to Be, On Time",
      secondParagraph:
        "Supply chains are complex, but your operations don't have to be. We help logistics companies optimize routes, manage inventory, and keep deliveries running smoothly—even when things get hectic. Less stress, fewer delays, happier customers.",
      image: "/Logistics.jpg",
    },
    {
      title: "Customer Support Services",
      description: "Support That Feels Personal, Even at Scale",
      secondParagraph:
        "Great customer service builds loyalty. We help you deliver it consistently—whether it's answering questions at 2 AM, solving technical issues, or just being there when customers need you. Our teams become an extension of yours, representing your brand with care and professionalism.",
      image: "/Customersupport.jpg",
    },
    {
      title: "Healthcare",
      description: "Healthcare Operations That Put Patients First",
      secondParagraph:
        "Healthcare is complicated enough without administrative headaches. We help hospitals, clinics, and health plans handle the paperwork, billing, and behind-the-scenes operations—so medical professionals can focus on patient care. HIPAA-compliant, efficient, and built for the real world of healthcare.",
      image: "/healthcare.jpg",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === industries.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? industries.length - 1 : prevIndex - 1
    );
  };

  const currentIndustry = industries[currentIndex];

  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Industries</h2>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <div className="flex justify-between items-center mb-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full bg-slate-700 border-slate-600 hover:bg-slate-600 text-white"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full bg-slate-700 border-slate-600 hover:bg-slate-600 text-white"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Main Content Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
              {/* Content */}
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-primary">
                  {currentIndustry.title}
                </h3>

                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>{currentIndustry.description}</p>
                  <p>{currentIndustry.secondParagraph}</p>
                </div>

                {/* <Button className="bg-black hover:bg-gray-800 text-white rounded-full px-8 py-3">
                  Read More
                </Button> */}
              </div>

              {/* Image */}
              <div className="relative">
                <img
                  src={currentIndustry.image}
                  alt={currentIndustry.title}
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {industries.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
