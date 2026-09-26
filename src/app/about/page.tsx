import type { Metadata } from "next";
import { Users, BookOpen, Sparkles, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — Garden of Eden Ministries",
  description: "Learn about the mission, beliefs, and pastoral leadership of Garden of Eden Ministries.",
};

export default function AboutPage() {
  return (
    <div className="py-12 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <span className="text-church-green font-bold text-xs uppercase tracking-widest">Our Story &amp; Faith</span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-church-navy mt-2">
          Who We Are
        </h1>
        <p className="mt-2 text-church-gray text-base max-w-xl mx-auto">
          Garden of Eden Ministries is a family of believers devoted to knowing Christ, growing together, and bearing fruit in our generation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white p-6 rounded-2xl border border-church-gold/20 shadow-sm">
          <Sparkles className="w-8 h-8 text-church-gold mb-3" />
          <h2 className="font-serif text-xl font-bold text-church-navy mb-2">Our Vision</h2>
          <p className="text-church-gray text-sm leading-relaxed">
            To build a radiant, Christ-centered ministry that cultivates faith, heals brokenness, and bears kingdom fruit across communities.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-church-gold/20 shadow-sm">
          <BookOpen className="w-8 h-8 text-church-green mb-3" />
          <h2 className="font-serif text-xl font-bold text-church-navy mb-2">Statement of Faith</h2>
          <p className="text-church-gray text-sm leading-relaxed">
            We hold fast to the authority of Holy Scripture, salvation by grace through faith in Jesus Christ, the power of the Holy Spirit, and the calling of the global Church.
          </p>
        </div>
      </div>
    </div>
  );
}
