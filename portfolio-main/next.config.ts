import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  async rewrites() {
    return [
      { source: '/resume', destination: '/Nanda_Gopal_D_SDE_Resume.pdf' },
      { source: '/resume.pdf', destination: '/Nanda_Gopal_D_SDE_Resume.pdf' },
      { source: '/resume-sde', destination: '/Nanda_Gopal_D_SDE_Resume.pdf' },
      { source: '/resume-aiml', destination: '/Nanda_Gopal_D_AIML_Resume.pdf' },
    ];
  },
};

export default nextConfig;
