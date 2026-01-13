import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">Contact Us</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Have a question, suggestion, or just want to share your cooking experience? 
          We'd love to hear from you! Get in touch with our team.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Send us a Message</h2>
            
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <div className="text-4xl mb-4 font-bold text-green-600">SUCCESS</div>
                <h3 className="text-lg font-semibold text-green-800 mb-2">Message Sent!</h3>
                <p className="text-green-600">Thank you for contacting us. We'll get back to you soon!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="recipe-suggestion">Recipe Suggestion</option>
                    <option value="bug-report">Bug Report</option>
                    <option value="feature-request">Feature Request</option>
                    <option value="general-inquiry">General Inquiry</option>
                    <option value="partnership">Partnership</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-900 text-white py-3 px-6 rounded-lg hover:bg-blue-800 transition-colors font-medium"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          <div className="space-y-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Get in Touch</h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="text-blue-600 text-xl font-bold">EMAIL</div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">info@recipefinder.com</p>
                    <p className="text-gray-600">support@recipefinder.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="text-blue-600 text-xl font-bold">PHONE</div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-600 text-sm">Mon-Fri, 9AM-6PM EST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="text-blue-600 text-xl font-bold">ADDR</div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Address</h3>
                    <p className="text-gray-600">
                      123 Recipe Street<br />
                      Culinary City, CC 12345<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Follow Us</h3>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-blue-700">
                  f
                </div>
                <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-blue-500">
                  t
                </div>
                <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-pink-700">
                  i
                </div>
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-red-700">
                  y
                </div>
              </div>
              <p className="text-gray-600 text-sm mt-4">
                Stay updated with our latest recipes and cooking tips!
              </p>
            </div>

            <div className="bg-yellow-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">FAQ</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <h4 className="font-medium text-gray-800">How do I submit a recipe?</h4>
                  <p className="text-gray-600">Contact us with your recipe details and we'll review it for inclusion.</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Can I request specific recipes?</h4>
                  <p className="text-gray-600">Absolutely! Send us your requests and we'll do our best to find them.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}