import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Doe',
      feedback: 'Pritam is an outstanding developer who delivers high-quality work on time.',
    },
    {
      name: 'Jane Smith',
      feedback: 'Working with Pritam was a pleasure. His skills and professionalism are top-notch.',
    },
  ];

  return (
    <section className="testimonials">
      <h2 className="text-3xl font-bold mb-4 text-white">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="card">
            <p className="italic text-gray-300">"{testimonial.feedback}"</p>
            <h4 className="font-semibold mt-4 text-white">{testimonial.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
