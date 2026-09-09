import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'pdf-attachment-handler',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url && req.url.includes('.pdf')) {
            const urlObj = new URL(req.url, 'http://localhost:3000');
            const fileName = urlObj.pathname.split('/').pop() || 'Certificate.pdf';
            res.setHeader('Content-Type', 'application/pdf');
            if (urlObj.searchParams.has('view')) {
              res.setHeader('Content-Disposition', `inline; filename="${fileName}"`);
            } else {
              res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
            }
          }
          next();
        });
      },
    },
  ],
  server: {
    port: 3000,
    open: false,
  },
});
