import type { Metadata } from "next";
import { HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "New Here? — Garden of Eden Ministries",
  description: "Plan your first visit to Garden of Eden Ministries.",
};

const faqs = [
  { q: "What should I wear?", a: "Come as you are! We care about you, not your clothing style." },
  { q: "What about children?", a: "We have a safe and fun Children's Church during both Sunday services." },
  { q: "How long is service?", a: "Our worship services typically run for around 90 minutes." },
  { q: "Where do I park?", a: "We have dedicated visitor spots right in front of the main entrance." },
];

export default function NewHerePage() {
  return (
    <div className="py-12 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <span className="text-church-teal font-bold text-xs uppercase tracking-widest">Welcome Newcomers</span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-church-navy mt-2">
          We Can't Wait to Meet You
        </h1>
        <p className="mt-2 text-church-gray text-base max-w-xl mx-auto">
          Visiting a church for the first time? Here is what you can expect when you walk through our doors.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-5 rounded-xl border border-church-gold/20 shadow-sm text-center">
          <div className="w-10 h-10 bg-church-gold/20 text-church-gold font-bold text-lg rounded-full flex items-center justify-center mx-auto mb-3">1</div>
          <h3 className="font-serif font-bold text-base text-church-navy mb-1">Warm Welcome</h3>
          <p className="text-sm text-church-gray">Our hospitality team greets you with a warm smile and gift bag.</p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-church-gold/20 shadow-sm text-center">
          <div className="w-10 h-10 bg-church-teal/20 text-church-teal font-bold text-lg rounded-full flex items-center justify-center mx-auto mb-3">2</div>
          <h3 className="font-serif font-bold text-base text-church-navy mb-1">Uplifting Worship</h3>
          <p className="text-sm text-church-gray">Praise music and practical, life-giving preaching from God's Word.</p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-church-gold/20 shadow-sm text-center">
          <div className="w-10 h-10 bg-church-green/20 text-church-green font-bold text-lg rounded-full flex items-center justify-center mx-auto mb-3">3</div>
          <h3 className="font-serif font-bold text-base text-church-navy mb-1">Connect Lounge</h3>
          <p className="text-sm text-church-gray">Join the team for coffee, tea, and fellowship right after service.</p>
        </div>
      </div>

      <div className="bg-church-navy text-white p-6 sm:p-8 rounded-2xl shadow-lg mb-12 text-center">
        <h2 className="font-serif text-2xl font-bold text-church-cream mb-2">Digital Connection Card</h2>
        <p className="text-church-cream/80 text-sm mb-6 max-w-md mx-auto">Let us know you are coming so our team can greet and pray for you.</p>
        <form className="max-w-md mx-auto space-y-3 text-left">
          <div>
            <label className="block text-xs font-semibold text-church-gold mb-1">Full Name</label>
            <input type="text" placeholder="John Doe" className="w-full px-3 py-2 rounded bg-white/10 border border-white/20 text-white text-sm" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-church-gold mb-1">Email Address</label>
            <input type="email" placeholder="john@example.com" className="w-full px-3 py-2 rounded bg-white/10 border border-white/20 text-white text-sm" />
          </div>
          <div className="pt-2 text-center">
            <button type="button" className="px-6 py-2.5 bg-church-gold hover:bg-church-gold/90 text-church-navy font-bold rounded-lg text-sm">
              Send Connection Card
            </button>
          </div>
        </form>
      </div>

      <div>
        <h2 className="font-serif text-2xl font-bold text-church-navy text-center mb-6">Common Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white p-5 rounded-xl border border-church-gold/20 shadow-sm">
              <h3 className="font-serif font-bold text-base text-church-navy mb-1 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-church-teal shrink-0" />
                {faq.q}
              </h3>
              <p className="text-church-gray text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
