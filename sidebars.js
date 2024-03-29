/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
  washipaper: [
    'washipaper/prologue',
    'washipaper/introduction',
    'washipaper/guiding-principles',
    'washipaper/ecosystem-integrations',
    'washipaper/game-design',
    'washipaper/tokenomics',
    'washipaper/game-roles',
    'washipaper/project-roadmap'
  ],
  gameguide: [
    'gameguide/game-guide',
    'gameguide/preparation',
    'gameguide/asset-classes',
    'gameguide/playing-the-game',
    'gameguide/action-work',
    'gameguide/council-vote',
    'gameguide/faction-orders',
    'gameguide/order-resolution',
    'gameguide/resolve-revolts',
    'gameguide/emperor-awards'
  ],
};

module.exports = sidebars;
