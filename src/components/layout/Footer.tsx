import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-forest text-sand py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h2 className="font-serif text-3xl font-bold tracking-widest mb-6">ECOVARA</h2>
          <p className="text-sm leading-relaxed max-w-sm text-sand/80">
            5,000 years in the making. Handcrafted natural cork and rubber yoga mats, inspired by Indian tradition and designed for the modern practitioner in the UAE.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 md:col-span-2">
          <div>
            <h3 className="uppercase tracking-widest text-xs font-semibold mb-6 text-sand/90">Explore</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/product/signature-mat" className="hover:text-white transition-colors">The Signature Mat</Link></li>
              <li><Link href="/#story" className="hover:text-white transition-colors">Our Heritage</Link></li>
              <li><Link href="/waitlist" className="hover:text-white transition-colors">Join Waitlist</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="uppercase tracking-widest text-xs font-semibold mb-6 text-sand/90">Connect</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="mailto:ecovara.co@gmail.com" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-sand/20 flex flex-col md:flex-row justify-center items-center text-xs text-sand/80">
        <p>&copy; {new Date().getFullYear()} Ecovara Wellness. All rights reserved.</p>
        {/* <div className="flex space-x-6 mt-4 md:mt-0">
          <Link href="#" className="hover:text-sand">Privacy Policy</Link>
          <Link href="#" className="hover:text-sand">Terms of Service</Link>
        </div> */}
      </div>
    </footer>
  );
}
