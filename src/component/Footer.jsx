import React from 'react';

function Footer() {
  return (
    <footer className="bg-base-200 text-base-content py-8 text-center">
      <div className="container mx-auto px-4">
        {/* Project Info */}
        <div className="mb-4">
          <p className="font-semibold">
            Project Guide: Prof. John Doe | Created by: ANUPAMA P S
          </p>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} | SN COLLEGE KOLLAM
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
