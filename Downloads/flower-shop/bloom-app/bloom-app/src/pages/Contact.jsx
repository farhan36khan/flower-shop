import React, { useState } from 'react';
import { WhatsAppBtn } from '../components/WhatsAppBtn';

const contactItems = [
  { icon: '📍', label: 'Address', value: '12 Garden Lane, Bloom District' },
  { icon: '📞', label: 'Phone', value: '+1 (555) 123-4567' },
  { icon: '💬', label: 'WhatsApp', value: '+1 (555) 123-4567' },
  { icon: '🕐', label: 'Hours', value: 'Mon–Sat: 8am – 7pm' },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Left Info */}
      <div>
        <p className="text-xs text-rose-500 font-medium tracking-widest uppercase mb-2">Get in Touch</p>
        <h2 className="font-serif text-3xl text-gray-900 mb-4">We'd Love to Hear From You</h2>
        <p className="text-gray-500 leading-relaxed mb-8">
          Have questions about an arrangement? Need a custom order? We're here to help make your floral vision a reality.
        </p>

        <div className="space-y-5 mb-8">
          {contactItems.map((item) => (
            <div key={item.label} className="flex items-start gap-3">
              <div className="w-10 h-10 bg-rose-50 rounded-xl flex items-center justify-center text-lg flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-0.5">{item.label}</p>
                <p className="text-sm font-medium text-gray-800">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        <WhatsAppBtn
          message="Hi! I have a question about your flowers."
          size="lg"
          className="rounded-xl py-3.5"
        />
      </div>

      {/* Right Form */}
      <div className="bg-white rounded-2xl border border-rose-100 p-8">
        <h3 className="font-serif text-xl text-gray-900 mb-6">Send a Message</h3>

        {sent ? (
          <div className="text-center py-12">
            <div className="text-5xl mb-4">🌸</div>
            <h4 className="font-serif text-xl text-gray-900 mb-2">Message Sent!</h4>
            <p className="text-gray-500 text-sm">We'll get back to you within a few hours.</p>
            <button
              onClick={() => setSent(false)}
              className="mt-6 text-rose-500 text-sm underline"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { key: 'name', label: 'Your Name', type: 'text', placeholder: 'Jane Smith' },
              { key: 'email', label: 'Email', type: 'email', placeholder: 'jane@example.com' },
              { key: 'subject', label: 'Subject', type: 'text', placeholder: 'Custom arrangement inquiry' },
            ].map((field) => (
              <div key={field.key}>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">{field.label}</label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  value={form[field.key]}
                  onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                  className="w-full px-3.5 py-2.5 border border-rose-100 rounded-lg text-sm bg-rose-50/30 focus:outline-none focus:border-rose-400 transition"
                />
              </div>
            ))}
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1.5">Message</label>
              <textarea
                placeholder="Tell us about your floral needs..."
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-3.5 py-2.5 border border-rose-100 rounded-lg text-sm bg-rose-50/30 focus:outline-none focus:border-rose-400 transition resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-rose-500 hover:bg-rose-700 text-white py-3 rounded-xl text-sm font-medium transition"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
