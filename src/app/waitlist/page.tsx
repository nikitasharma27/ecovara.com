import { Metadata } from "next";
import WaitlistPageClient from "./WaitlistPageClient";

export const metadata: Metadata = {
  title: "Join the Waitlist | Exclusive Early Access",
  description: "Secure your Ecovara Signature Mat from our next limited batch. Join the inner circle for early access and complimentary shipping in the UAE.",
  alternates: {
    canonical: "https://ecovara.com/waitlist",
  },
  openGraph: {
    title: "Join the Ecovara Waitlist | Sustainable Luxury Yoga Mats",
    description: "Exclusive access to our next batch of natural cork & rubber yoga mats. Sign up for early notification and UAE-wide delivery.",
    url: "https://ecovara.com/waitlist",
    type: "website",
  },
};

export default function WaitlistPage() {
  return <WaitlistPageClient />;
}
