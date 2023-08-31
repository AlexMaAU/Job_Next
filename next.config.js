/** @type {import('next').NextConfig} */
const nextConfig = {
  // add following to avoid error: error ESLint: Plugin "react-hooks" was conflicted between ".eslintrc.json » eslint-config-airbnb/hooks » C:\Users\Alex Ma\Desktop\匠人教学Nodejs方向\Project_Three_Next_L1\job_next\node_modules\eslint-config-airbnb\rules\react-hooks.js" and ".eslintrc.json » eslint-config-next/core-web-vitals » C:\Users\Alex Ma\Desktop\匠人教学Nodejs方向\Project_Three_Next_L1\job_next\node_modules\eslint-config-next\index.js » plugin:react-hooks/recommended".
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizeCss: true,
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
