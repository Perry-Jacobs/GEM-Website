import type { Metadata } from "next";
import { Play, Calendar, User, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Sermons & Live Stream — Garden of Eden Ministries",
  description: "Watch live church services and browse the sermon archive.",
};

const recentSermons = [
  {
    title: "Rooted & Established in Grace",
    speaker: "Senior Pastor",
    date: "Sep 20, 2026",
    series: "Abiding in the Vine",
    passage: "John 15:1-8",
  },
  {
    title: "Walking by the Spirit",
    speaker: "Associate Pastor",
    date: "Sep 13, 2026",
    series: "Fruit of the Spirit",
    passage: "Galatians 5:16-26",
  },
  {
    title: "The Heart of Radical Hospitality",
    speaker: "Guest Minister",
    date: "Sep 06, 2026",
    series: "Kingdom Culture",
    passage: "Romans 12:9-13",
  },
  {
    title: "Faith That Moves Mountains",
    speaker: "Senior Pastor",
    date: "Aug 30, 2026",
    series: "Unshakable Faith",
    passage: "Mark 11:22-25",
  },
];

export default function SermonsPage() {
  return (
    <div className="py-12 px-4 max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10">
        <span className="text-church-coral font-bold text-xs uppercase tracking-widest">Media Ministry</span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-church-navy mt-2">
          Sermons &amp; Live Stream
        </h1>
        <p className="mt-2 text-church-gray text-base max-w-xl mx-auto">
          Equipping your spirit with the transforming power of God’s Word anywhere, anytime.
        </p>
      </div>

      {/* Featured Live Stream Player Card */}
      <div className="bg-church-navy rounded-2xl overflow-hidden shadow-xl mb-12 border border-church-gold/20">
        <div className="aspect-video w-full bg-slate-900 relative flex items-center justify-center text-white">
          <div className="text-center p-6">
            <div className="w-16 h-16 rounded-full bg-church-coral/90 text-white flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-110 transition-transform">
              <Play className="w-8 h-8 fill-current translate-x-0.5" />
            </div>
            <p className="font-semibold text-lg">Sunday Live Stream Broadcast</p>
            <p className="text-xs text-white/70 mt-1">Live every Sunday at 9:00 AM &amp; 11:30 AM</p>
          </div>
        </div>
        <div className="p-6 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="bg-church-gold text-church-navy text-xs font-bold px-2.5 py-0.5 rounded-full uppercase">
              Current Series
            </span>
            <h2 className="font-serif text-xl sm:text-2xl font-bold mt-2">Rooted &amp; Established in Grace</h2>
            <p className="text-church-cream/70 text-sm mt-1">Senior Pastor • John 15:1-8</p>
          </div>
          <button className="px-5 py-2.5 bg-church-coral hover:bg-church-coral/90 text-white font-semibold text-sm rounded-lg shrink-0">
            Download Study Notes
          </button>
        </div>
      </div>

      {/* Sermon Archive List */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h2 className="font-serif text-2xl font-bold text-church-navy">Recent Messages</h2>
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search sermons..."
              className="w-full pl-9 pr-3 py-2 text-sm bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-church-gold"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {recentSermons.map((sermon, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-church-gold/20 p-5 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-xs font-semibold text-church-teal uppercase">{sermon.series}</span>
              <h3 className="font-serif font-bold text-lg text-church-navy mt-1 mb-2">{sermon.title}</h3>
              <div className="flex items-center gap-4 text-xs text-church-gray mb-4">
                <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" /> {sermon.speaker}</span>
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {sermon.date}</span>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <span className="text-xs font-medium text-church-green">{sermon.passage}</span>
                <button className="text-xs font-bold text-church-teal hover:underline flex items-center gap-1">
                  <Play className="w-3 h-3 fill-current" /> Watch Message
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
