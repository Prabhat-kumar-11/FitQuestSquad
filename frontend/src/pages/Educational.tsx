import React, { useState, useEffect } from 'react';

const Educational: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState([
    {
      title: 'The Benefits of Meditation',
      description: 'Learn about the benefits of meditation and how it can improve your mental health and wellbeing.',
      image: 'https://source.unsplash.com/V9n-aUeW8Yk/800x600',
    },
    {
      title: 'The Importance of Sleep',
      description: 'Discover why sleep is so important for your physical and mental health and learn some tips for getting a good night\'s rest.',
      image: 'https://source.unsplash.com/iHgV86ZBrEY/800x600',
    },
    {
      title: 'Healthy Eating Habits',
      description: 'Get tips for developing healthy eating habits and learn about the benefits of eating a balanced diet.',
      image: 'https://source.unsplash.com/waZEHLRP98s/800x600',
    },
    {
      title: 'Exercises for a Stronger Core',
      description: 'Discover some exercises that can help strengthen your core and improve your posture and balance.',
      image: 'https://source.unsplash.com/YLIVS6vL-38/800x600',
    },
    {
      title: 'The Benefits of Yoga',
      description: 'Learn about the physical and mental health benefits of practicing yoga, and find out how to get started with this popular form of exercise.',
      image: 'https://source.unsplash.com/hWns-17CzFA/800x600',
    },
  ]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [currentSlide, slides.length]);

  return (
    <div className="bg-gray-100"> 
  <div className="relative">
    <div className="absolute inset-0">
      <img src={slides[currentSlide].image} alt="Slider Image" className="w-full h-full object-cover" />
    </div>
    <div className="absolute inset-0 bg-black opacity-75"></div>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="mx-auto max-w-2xl px-4">
        <h1 className="text-4xl  font-bold text-white mb-4">{slides[currentSlide].title}</h1>
        <p className="text-4xl font-bold text-white mb-4">{slides[currentSlide].description}</p>
      </div>
    </div>
  </div>
</div>
  );
};

export default Educational;