/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['image.tmdb.org'], // TMDB'den gelen görseller için hostname eklendi
    },
  };
  
  export default nextConfig;
  