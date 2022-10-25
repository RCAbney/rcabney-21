const { withPlaiceholder } = require("@plaiceholder/next");

module.exports = withPlaiceholder({
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
});
