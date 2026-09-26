import type { Metadata } from "next";
import { Heart, ShieldCheck, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Give & Support — Garden of Eden Ministries",
  description: "Give your tithes, offerings, and donations securely to Garden of Eden Ministries.",
};

export default function GivePage() {
  return (
    <div className="py-12 px-4 max-w-3xl mx-auto">
      <div className="text-center mb-10">
        <span className="text-church-coral font-bold text-xs uppercase tracking-widest">Digital Giving</span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-church-navy mt-2">
          Supporting the Work of the Kingdom
        </h1>
        <p className="mt-2 text-church-gray text-base max-w-lg mx-auto">
          "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver." — 2 Cor 9:7
        </p>
      </div>

      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-church-gold/20 shadow-md mb-8">
        <h2 className="font-serif text-xl font-bold text-church-navy mb-4 flex items-center gap-2">
          <Heart className="w-5 h-5 text-church-coral fill-current" /> Select Your Gift
        </h2>

        <div className="space-y-4">
          <div className="grid grid-cols-4 gap-3">
            {["$25", "$50", "$100", "$250"].map((amount) => (
              <button
                key={amount}
                type="button"
                className="py-2.5 rounded-lg border border-church-navy/20 font-bold text-church-navy hover:bg-church-gold/20 hover:border-church-gold transition-colors text-sm"
              >
                {amount}
              </button>
            ))}
          </div>

          <div>
            <label className="block text-xs font-semibold text-church-navy mb-1">Custom Amount ($)</label>
            <input
              type="number"
              placeholder="Enter amount"
              className="w-full px-3 py-2 text-sm rounded border border-gray-300 bg-white text-church-navy hover:bg-church-gold/20 hover:border-church-gold transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-church-navy mb-1">Designate Giving Fund</label>
            <select className="w-full px-3 py-2 text-sm rounded border border-gray-300 bg-white text-church-navy hover:bg-church-gold/20 hover:border-church-gold transition-colors">
              <option>General Ministry &amp; Tithe</option>
              <option>Building &amp; Sanctuary Expansion</option>
              <option>Missions &amp; Community Outreach</option>
              <option>Youth &amp; Children Ministry</option>
            </select>
          </div>

          <button
            type="button"
            className="w-full py-3 bg-church-coral hover:bg-church-coral/90 text-white font-bold rounded-lg text-base shadow-md flex items-center justify-center gap-2"
          >
            <Heart className="w-4 h-4 fill-current" /> Proceed to Secure Donation
          </button>

          <div className="flex items-center justify-center gap-2 text-xs text-church-gray pt-2">
            <ShieldCheck className="w-4 h-4 text-church-green" />
            <span>256-bit SSL encrypted • Powered by Stripe</span>
          </div>
        </div>
      </div>
    </div>
  );
}
