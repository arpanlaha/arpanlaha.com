# arpanlaha.com [![build](https://img.shields.io/github/workflow/status/arpanlaha/arpanlaha.com/CI?style=flat-square)](https://github.com/arpanlaha/arpanlaha.com/actions?query=workflow%3ACI)

My personal website.

## Overview

I use this as an opportunity/excuse to try out new tech trends, and it's way overengineered for how complicated the end result is. Regardless, it should achieve full perfect scores on Lighthouse audits, depending on your internet connection and installed extensions.

### Gatsby

Currently, this is built on [Gatsby](https://www.gatsbyjs.org/) for performance optimization, with use of the following plugins:

- [gatsby-plugin-manifest](https://www.gatsbyjs.org/packages/gatsby-plugin-manifest) and [gatsby-plugin-react-helmet](https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet) for SEO
- [gatsby-plugin-offline](https://www.gatsbyjs.org/packages/gatsby-plugin-offline) for PWA support (completely unnecessary)
- [gatsby-plugin-preload-fonts](https://www.gatsbyjs.org/packages/gatsby-plugin-preload-fonts) for font load optimization
- [gatsby-plugin-sass](https://www.gatsbyjs.org/packages/gatsby-plugin-sass) and [gatsby-plugin-typescript](https://www.gatsbyjs.org/packages/gatsby-plugin-typescript) for language support
- [gatsby-plugin-split-css](https://www.gatsbyjs.org/packages/gatsby-plugin-split-css) for CSS code-splitting by page
- [gatsby-source-filesystem](https://www.gatsbyjs.org/packages/gatsby-source-filesystem), [gatsby-transformer-sharp](https://www.gatsbyjs.org/packages/gatsby-transformer-sharp), and [gatsby-plugin-sharp](https://www.gatsbyjs.org/packages/gatsby-plugin-sharp) to support [gatsby-image](https://www.gatsbyjs.org/packages/gatsby-image)'s progressive image loading

### Deployment

This is hosted on [ZEIT Now](https://zeit.co/), which is almost zero-config thanks to its Gatsby integrations. However, I've added some workarounds to reroute `favicon.ico` and support my custom error page.

### Design

#### Responsiveness

This should work for both desktop and mobile displays, which is primarily achieved by arranging the two panels with `flex-direction` set to `row` and `column`, respectively.

#### Themes

This also has both light (default) and dark themes, which can be toggled using the theme button in the top right corner. Switching themes saves your choice to local storage so that you don't have to re-switch on every new load.

#### Neumorphism

I've also used this to try out [neumorphism](https://uxdesign.cc/neumorphism-in-user-interfaces-b47cef3bf3a6), a somewhat-controversial new design language which uses shadows to make buttons and other elements seem more tangible than they do in flat design. As with themes, you can switch between neumorphic and flat styling using the `neu/flat` button in the top right, which also saves your choice to local storage.
