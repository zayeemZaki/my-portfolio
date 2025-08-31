#!/bin/bash
# Quick deployment script
echo "🚀 Building and deploying to Vercel..."
npm run build
npx vercel --prod
echo "✅ Deployment complete!"
