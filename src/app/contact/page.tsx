import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us & Directions — Garden of Eden Ministries",
  description: "Get in touch with Garden of Eden Ministries. View our location map, address, and service times.",
};

export default function ContactPage() {
  return (
    <div className="py-12 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <span className="text-church-green font-bold text-xs uppercase tracking-widest">Connect With Us</span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-church-navy mt-2">
          We Would Love to Hear From You
        </h1>
        <p className="mt-2 text-church-gray text-base max-w-xl mx-auto">
          Have questions, need prayer, or looking for directions to our sanctuary? Reach out today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div className="bg-white p-6 rounded-2xl border border-church-gold/20 shadow-sm space-y-5">
          <h2 className="font-serif text-xl font-bold text-church-navy">Church Information</h2>

          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-church-coral shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-sm text-church-navy">Sanctuary Address</p>
              <p className="text-sm text-church-gray">124 Eden Way, Grace Valley</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Phone className="w-5 h-5 text-church-teal shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-sm text-church-navy">Phone Support</p>
              <p className="text-sm text-church-gray">+254 700 000 000</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 text-church-gold shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-sm text-church-navy">Email Inquiries</p>
              <p className="text-sm text-church-gray">info@gardenofeden.org</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-church-green shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-sm text-church-navy">Worship Services</p>
              <p className="text-sm text-church-gray">Sundays: 9:00 AM &amp; 11:30 AM</p>
            </div>
          </div>
        </div>

        <div className="bg-church-navy text-white p-6 sm:p-8 rounded-2xl shadow-lg mb-12 text-center">
          <h2 className="font-serif text-2xl font-bold text-church-cream mb-2">Send a Message</h2>
          <form className="max-w-md mx-auto space-y-3 text-left">
            <div>
              <label className="block text-xs font-semibold text-church-gold mb-1">Your Name</label>
              <input type="text" placeholder="Jane Doe" className="w-full px-3 py-2 rounded bg-white/10 border border-white/20 text-white text-sm" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-church-gold mb-1">Email</label>
              <input type="email" placeholder="jane@example.com" className="w-full px-3 py-2 rounded bg-white/10 border border-white/20 text-white text-sm" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-church-gold mb-1">Message</label>
              <textarea rows={3} placeholder="How can we help?" className="w-full px-3 py-2 rounded bg-white/10 border border-white/20 text-white text-sm"></textarea>
            </div>
            <button type="button" className="w-full py-2 bg-church-gold hover:bg-church-gold/90 text-church-navy font-bold rounded text-sm flex items-center justify-center gap-2">
              <Send className="w-4 h-4" /> Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
