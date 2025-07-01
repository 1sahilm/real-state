module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/vvievillas',
        destination: '/vvie-villas-luxury-villas-for-sale-shimla',
        permanent: true, 
      },
    ];
  },
};
