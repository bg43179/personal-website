'use strict';

const path = require('path');
const siteConfig = require('../../config.js');

module.exports = async (graphql, actions) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { template: { eq: "notes" }, draft: { ne: true } } }
      ) { totalCount }
    }
  `);

  const { notesPerPage } = siteConfig;
  const numPages = Math.ceil(result.data.allMarkdownRemark.totalCount / notesPerPage);

  for (let i = 0; i < numPages; i += 1) {
    createPage({
      path: i === 0 ? '/' : `/note/${i}`,
      component: path.resolve('./src/templates/index-template.js'),
      context: {
        currentPage: i,
        postsLimit: notesPerPage,
        postsOffset: i * notesPerPage,
        prevPagePath: i <= 1 ? '/' : `/note/${i - 1}`,
        nextPagePath: `/note/${i + 1}`,
        hasPrevPage: i !== 0,
        hasNextPage: i !== numPages - 1
      }
    });
  }
};
