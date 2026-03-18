import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Ecovara | Premium Sustainable Luxury Yoga Mats',
    short_name: 'Ecovara',
    description: "Experience the ultimate grip with Ecovara's eco-friendly, natural rubber and cork yoga mats.",
    start_url: '/',
    display: 'standalone',
    background_color: '#F9F7F2',
    theme_color: '#4A5D4E',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
