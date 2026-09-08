
import React from "react";

const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-semibold">Contact Us</h1>
        <p className="text-gray-500 mt-3">
          We'd love to hear from you. Get in touch with us.
        </p>
      </div>

      {/* Contact Section */}
      <div className="grid md:grid-cols-2 gap-12">

        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-medium mb-6">
            Get In Touch
          </h2>

          <p className="text-gray-600 leading-7 mb-8">
            Have a question about your order or our products?
            Our team is here to help.
          </p>

          <div className="space-y-5">
            <div>
              <h3 className="font-medium">Address</h3>
              <p className="text-gray-500">
                New Delhi, India
              </p>
            </div>

            <div>
              <h3 className="font-medium">Email</h3>
              <p className="text-gray-500">
                support@stylenest.com
              </p>
            </div>

            <div>
              <h3 className="font-medium">Phone</h3>
              <p className="text-gray-500">
                +91 98765 43210
              </p>
            </div>

            <div>
              <h3 className="font-medium">Working Hours</h3>
              <p className="text-gray-500">
                Monday – Saturday, 10 AM – 6 PM
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-medium mb-6">
            Send Us a Message
          </h2>

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 px-4 py-3 outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 px-4 py-3 outline-none"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 px-4 py-3 outline-none"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full border border-gray-300 px-4 py-3 outline-none resize-none"
            ></textarea>

            <button
              type="submit"
              className="bg-black text-white px-8 py-3 hover:bg-gray-800"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;