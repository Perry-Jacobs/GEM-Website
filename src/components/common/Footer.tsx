import Link from "next/link";
import { Church, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-church-navy text-church-cream pt-16 pb-10 border-t-4 border-church-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Church Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-9 h-9 rounded-full bg-church-gold flex items-center justify-center text-church-navy">
                <Church className="w-5 h-5 text-church-navy" />
              </div>
              <span className="font-serif font-bold text-xl text-white">
                Garden of Eden
              </span>
            </div>
            <p className="text-church-cream/80 text-sm leading-relaxed mb-4 italic">
              "Growing in Faith, Bearing Fruit for Christ"
            </p>
            <p className="text-church-cream/70 text-sm leading-relaxed">
              We are a loving community dedicated to making disciples, transforming lives, and reflecting God’s glory.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-serif font-bold text-lg text-church-gold mb-4">Quick Links</h3>
            <ul className="space-y-2.5 text-sm text-church-cream/80">
              <li><Link href="/new" className="hover:text-church-gold transition-colors">Plan Your Visit</Link></li>
              <li><Link href="/about" className="hover:text-church-gold transition-colors">Our Beliefs &amp; Story</Link></li>
              <li><Link href="/sermons" className="hover:text-church-gold transition-colors">Recent Sermons</Link></li>
              <li><Link href="/give" className="hover:text-church-gold transition-colors">Online Giving</Link></li>
              <li><Link href="/contact" className="hover:text-church-gold transition-colors">Contact Pastoral Team</Link></li>
            </ul>
          </div>

          {/* Column 3: Service Times */}
          <div>
            <h3 className="font-serif font-bold text-lg text-church-gold mb-4">Worship Services</h3>
            <div className="space-y-3 text-sm text-church-cream/80">
              <div className="flex items-start space-x-2.5">
                <Clock className="w-4 h-4 text-church-teal mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-white">Sunday Worship</p>
                  <p>9:00 AM &amp; 11:30 AM</p>
                </div>
              </div>
              <div className="flex items-start space-x-2.5">
                <Clock className="w-4 h-4 text-church-teal mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-white">Wednesday Bible Study</p>
                  <p>7:00 PM Midweek Refresh</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-serif font-bold text-lg text-church-gold mb-4">Visit Us</h3>
            <div className="space-y-3 text-sm text-church-cream/80">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-church-coral mt-0.5 shrink-0" />
                <span>124 Eden Way, Grace Valley</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-church-coral shrink-0" />
                <span>+254 700 000 000</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-church-coral shrink-0" />
                <span>info@gardenofeden.org</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 mt-8 flex flex-col md:flex-row items-center justify-between text-xs text-church-cream/60 space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} Garden of Eden Ministries. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/about" className="hover:text-church-gold transition-colors">About Us</Link>
            <Link href="/sermons" className="hover:text-church-gold transition-colors">Sermons</Link>
            <Link href="/contact" className="hover:text-church-gold transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

