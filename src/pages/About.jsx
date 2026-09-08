import React from 'react'

import Title from "../components/Title";

const About = () => {
  return (
    <div>
      {/* About Hero */}
      <section className="py-16 text-center">
        <h1 className="text-4xl font-semibold">About Us</h1>
        <p className="mt-4 text-gray-600">
          Discover our story and what makes our store special.
        </p>
      </section>

      {/* Our Story */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src="/about.jpg"
            alt="Our store"
            className="w-full rounded-lg"
          />

          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-600 leading-7">
              We believe shopping should be simple, enjoyable and accessible.
              Our store brings together quality products and modern designs
              for everyday life.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-gray-50">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h3 className="font-medium">Quality Products</h3>
            <p className="text-gray-500 mt-2">
              Carefully selected products for our customers.
            </p>
          </div>

          <div className="text-center">
            <h3 className="font-medium">Easy Shopping</h3>
            <p className="text-gray-500 mt-2">
              A simple and convenient shopping experience.
            </p>
          </div>

          <div className="text-center">
            <h3 className="font-medium">Customer First</h3>
            <p className="text-gray-500 mt-2">
              Your satisfaction is our priority.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;