import React from 'react';

const Footer: React.FC = () => (
  <footer style={{ textAlign: 'center', padding: '2rem 0', borderTop: '1px solid #ddd' }}>
    <p>
      © {new Date().getFullYear()} Your Name / Max Planck Institute for Informatics, Saarland.  
      Project page built with React, TypeScript & Vite.
    </p>
  </footer>
);

export default Footer;
