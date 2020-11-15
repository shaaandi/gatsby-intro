exports.createPages = async ({ actions, graphql, reporter }) => {
  const pages = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  if (pages.errors) {
    reporter.panic('faild to create pages', pages.errors);
  }

  pages.data.allMdx.nodes.forEach(post => {
    actions.createPage({
      path: post.frontmatter.slug,
      component: require.resolve('./src/templates/post-review.js'),
      context: {
        slug: post.frontmatter.slug,
      },
    });
  });
};
