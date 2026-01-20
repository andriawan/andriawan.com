# Gatsby 2 to 3 Migration Plan

This document outlines the steps to migrate the andriawan.com website from Gatsby v2 to v3.

## 1. Update Node.js Version

Gatsby v3 requires Node.js 12.13.0 or newer. Ensure your development and deployment environments meet this requirement.

## 2. Update Dependencies

Update Gatsby and all related packages to their latest versions.

```bash
npm install gatsby@latest react@latest react-dom@latest
npm install gatsby-plugin-image gatsby-plugin-sharp gatsby-transformer-sharp --save
```

Update all other `gatsby-*` plugins and other dependencies to their latest versions. You can use `npm outdated` to check for outdated packages.

## 3. Update `gatsby-config.js`

- Replace `gatsby-image` with `gatsby-plugin-image`.
- Ensure all plugins are compatible with Gatsby v3.

## 4. Replace `gatsby-image` with `gatsby-plugin-image`

The `gatsby-image` component is deprecated and has been replaced by `gatsby-plugin-image`. This new plugin offers better performance and a more straightforward API.

- Update all instances of `Img` from `gatsby-image` to `GatsbyImage` from `gatsby-plugin-image`.
- Update GraphQL queries to use the new `gatsbyImageData` resolver instead of `fluid` or `fixed`.

## 5. Update Code for Breaking Changes

### CSS Modules

CSS module imports have changed. Update imports from:

```javascript
import styles from './styles.module.css';
```

to:

```javascript
import * as styles from './styles.module.css';
```

### ESLint

Gatsby v3 uses ESLint 7. You may need to update your ESLint configuration (`.eslintrc`) and related packages.

## 6. Testing

After completing the migration, thoroughly test the site locally.

1.  Clean the cache: `gatsby clean`
2.  Start the development server: `gatsby develop`
3.  Check for any new warnings or errors in the console.
4.  Build the site: `gatsby build`
5.  Serve the build: `gatsby serve`
6.  Test all pages and functionality.

## 7. Useful Resources


- [Migrating from v2 to v3](https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v2-to-v3/)
- [gatsby-plugin-image](https://www.gatsbyjs.com/plugins/gatsby-plugin-image/)
