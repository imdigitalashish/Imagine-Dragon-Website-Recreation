/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

}

module.exports = {
  nextConfig,
  env: {
    LARABACK: process.env.LARABACK_SERVER
  }
}
