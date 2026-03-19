import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Ecovara | Premium Sustainable Luxury Yoga Mats',
    short_name: 'Ecovara',
    description: "Experience the ultimate grip with Ecovara's eco-friendly, natural rubber and cork yoga mats.",
    start_url: '/',
    display: 'standalone',
    background_color: '#FAFAF8',
    theme_color: '#1A3C24',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon.svg',
        sizes: '32x32',
        type: 'image/svg+xml',
      },
    ],
  };
}
