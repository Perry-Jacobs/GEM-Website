import Link from "next/link";
import { Play, MapPin, Clock, ArrowRight, Heart, Users, BookOpen, Sparkles } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 1. HERO SECTION */}
      <section className="relative bg-church-navy text-white py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-church-gold/20 text-church-gold border border-church-gold/40 mb-6">
            <Sparkles className="w-3.5 h-3.5" /> Welcome to God's Garden
          </span>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-church-cream leading-tight">
            Growing in Faith, <br className="hidden sm:inline" />
            <span className="text-church-gold">Bearing Fruit for Christ</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-church-cream/80 max-w-2xl mx-auto">
            Welcome to Garden of Eden Ministries. A Christ-centered family cultivating deep spiritual roots, passionate worship, and genuine fellowship.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/new"
              className="inline-flex items-center gap-2 bg-church-gold hover:bg-church-gold/90 text-church-navy font-bold px-6 py-3 rounded-lg shadow-lg"
            >
              <span>Plan Your Visit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/sermons"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg border border-white/20"
            >
              <Play className="w-4 h-4 fill-current text-church-gold" />
              <span>Watch Sermons</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. QUICK STATS & TIMES */}
      <section className="bg-church-cream mt-8 relative z-20 max-w-4xl mx-auto px-4 w-full">
        <div className="bg-white rounded-xl shadow-lg border border-church-gold/20 p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3">
            <Clock className="w-6 h-6 text-church-teal shrink-0 mt-1" />
            <div>
              <h3 className="font-serif font-bold text-base text-church-navy">Service Times</h3>
              <p className="text-sm text-church-gray">Sundays: 9:00 AM &amp; 11:30 AM</p>
              <p className="text-xs text-church-gray">Wednesdays: 7:00 PM</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="w-6 h-6 text-church-coral shrink-0 mt-1" />
            <div>
              <h3 className="font-serif font-bold text-base text-church-navy">Sanctuary</h3>
              <p className="text-sm text-church-gray">124 Eden Way, Grace Valley</p>
              <Link href="/contact" className="text-xs font-semibold text-church-teal hover:underline">
                Directions &rarr;
              </Link>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Users className="w-6 h-6 text-church-green shrink-0 mt-1" />
            <div>
              <h3 className="font-serif font-bold text-base text-church-navy">Online Stream</h3>
              <p className="text-sm text-church-gray">Live every Sunday service</p>
              <Link href="/sermons" className="text-xs font-semibold text-church-green hover:underline">
                Watch Live &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VALUE PILLARS */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-church-green font-bold text-xs uppercase tracking-wider">A Place to Belong</span>
          <h2 className="font-serif text-3xl font-bold text-church-navy mt-1">Every Heart Has a Home in God’s Presence</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-church-gold/20 shadow-sm">
            <BookOpen className="w-8 h-8 text-church-green mb-3" />
            <h3 className="font-serif font-bold text-lg text-church-navy mb-2">Sound Biblical Truth</h3>
            <p className="text-church-gray text-sm">Grounded in Scripture, Christ-centered teaching, and discipleship.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-church-gold/20 shadow-sm">
            <Users className="w-8 h-8 text-church-gold mb-3" />
            <h3 className="font-serif font-bold text-lg text-church-navy mb-2">Vibrant Community</h3>
            <p className="text-church-gray text-sm">Welcoming small groups, loving support, and heartfelt prayer.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-church-gold/20 shadow-sm">
            <Heart className="w-8 h-8 text-church-coral mb-3" />
            <h3 className="font-serif font-bold text-lg text-church-navy mb-2">Kingdom Impact</h3>
            <p className="text-church-gray text-sm">Reaching out in compassion and bearing eternal fruit for Christ.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
