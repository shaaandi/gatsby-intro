import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            author
            slug
            image {
              sharp: childImageSharp {
                fluid(
                  maxWidth: 100
                  maxHeight: 100
                  duotone: { shadow: "#663399", highlight: "#ddbbff" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          excerpt
        }
      }
    }
  `);
  return data.allMdx.nodes.map(p => ({
    title: p.frontmatter.title,
    author: p.frontmatter.author,
    slug: p.frontmatter.slug,
    excerpt: p.excerpt,
    image: p.frontmatter.image,
  }));
};

export default usePosts;
