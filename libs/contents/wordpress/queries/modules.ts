const imageQuery = `sourceUrl
          altText
          mediaDetails {
            width
            height
          }`;

const blogsQuery = `
      title
      date
      author {
        node {
          name
        }
      }
      acf: acfBlog {
        featuredImage {
          ${imageQuery}
        }
        content
      }
`;
const departmentQuery = ` id
        title
        slug
        acf : acfDepartments {
          bannerImage {
            ${imageQuery}
          }
          sectionImage {
             ${imageQuery}
          }
          content
        }`;
const doctorQuery = `title
                    slug
                    acf: acfDoctor {
                    designation
                      bannerImage {
                      ${imageQuery}
                      }
                      image {
                      ${imageQuery}
                      }
                      content
                    }`;

export { imageQuery, blogsQuery, departmentQuery, doctorQuery };
