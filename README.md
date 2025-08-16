# InterceptSuite Documentation

This is the official documentation website for [InterceptSuite](https://github.com/your-username/InterceptSuite), an advanced network interception and analysis suite.

The website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/en/download/) version 18.0 or above
- npm or yarn package manager

### Installation

```bash
npm install
```

### Local Development

```bash
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

The site will be available at `http://localhost:3000`.

## 🔧 Building

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## 🚀 Deployment

This documentation site is automatically deployed to GitHub Pages using GitHub Actions when changes are pushed to the main branch.

### Manual Deployment

If you need to deploy manually:

```bash
# Build the site
npm run build

# Deploy to GitHub Pages (if you have permissions)
npm run deploy
```

### GitHub Pages Configuration

The site is configured to deploy to GitHub Pages with:

- **Source**: GitHub Actions
- **Custom domain**: (configure in repository settings if needed)
- **Base URL**: `/InterceptSuite/` (adjust in `docusaurus.config.ts` if different)

## 📝 Contributing to Documentation

### Adding New Documentation

1. **Create new markdown files** in the `docs/` directory
2. **Update sidebars** in `sidebars.ts` if needed
3. **Add to navigation** by updating the appropriate category

### Directory Structure

```
docs/
├── intro.md                    # Getting started
├── installation.md             # Installation guide
├── configuration.md            # Configuration
├── user-guide/                 # User guides
│   └── quick-start.md
├── api/                        # API documentation
│   └── overview.md
└── examples/                   # Examples and tutorials
    └── http-traffic-analysis.md
```

### Writing Guidelines

- Use clear, concise language
- Include code examples where appropriate
- Add screenshots for UI-related documentation
- Follow the existing style and structure
- Test all code examples before submitting

### Blog Posts

Add blog posts to the `blog/` directory:

```markdown
---
title: "New Feature Announcement"
description: "Announcing exciting new features in InterceptSuite"
slug: new-features-v2
authors: [your-username]
tags: [announcement, features]
---

Your blog post content here...
```

## 🛠️ Customization

### Configuration

Main configuration is in `docusaurus.config.ts`:

- **Site metadata** (title, description, URL)
- **GitHub Pages settings** (organizationName, projectName)
- **Theme configuration** (navbar, footer, colors)
- **Plugin configuration** (search, analytics, etc.)

### Styling

- **Global styles**: `src/css/custom.css`
- **Component styles**: `src/components/*/styles.module.css`
- **Theme customization**: See [Docusaurus theming docs](https://docusaurus.io/docs/styling-layout)

### Custom Components

Add custom React components in `src/components/`:

```tsx
// src/components/CustomComponent/index.tsx
import React from 'react';
import styles from './styles.module.css';

export default function CustomComponent(): JSX.Element {
  return (
    <div className={styles.customComponent}>
      <h2>Custom Component</h2>
    </div>
  );
}
```

## 🔍 Search

Search is powered by Algolia DocSearch. Configuration is in `docusaurus.config.ts`.

## 📊 Analytics

Analytics can be configured in `docusaurus.config.ts`:

```javascript
// Google Analytics
gtag: {
  trackingID: 'G-XXXXXXXXXX',
  anonymizeIP: true,
},
```

## 🐛 Troubleshooting

### Common Issues

**Build Failures**
- Check Node.js version (18.0+ required)
- Clear cache: `npm run clear`
- Delete `node_modules` and reinstall

**GitHub Pages Deployment Issues**
- Verify repository settings
- Check GitHub Actions workflow logs
- Ensure base URL matches repository name

**Local Development Issues**
- Port conflicts: Use `npm start -- --port 3001`
- Cache issues: Use `npm run clear`

### Getting Help

- [Docusaurus Documentation](https://docusaurus.io/docs)
- [InterceptSuite GitHub Issues](https://github.com/your-username/InterceptSuite/issues)
- [Docusaurus Discord](https://discordapp.com/invite/docusaurus)

## 📄 License

This documentation is part of the InterceptSuite project and follows the same license terms.

---

**Note**: Remember to replace `your-username` with your actual GitHub username in the configuration files and URLs throughout the documentation.
