import { blogsQuery, imageQuery } from "./modules";
const data = `{
  page(id: "cG9zdDo3") {
    title
    slug
    id
    acf: acfHomePage {
      homeBanner {
        sectionImage {
          ${imageQuery}
        }
        sectionTitle
        sectionDescription
      }
      sectionAbout {
        title
        subtitle
        sectionImage {
           ${imageQuery}
        }
        description
        buttonText
        buttonLink
      }

      sectionBlog {
        sectionTitle
        sectionSubtitle
      }
      ourCommitments {
        title
        subtitle
        commitments{
          description
          title
          image {
            ${imageQuery}
          }
        }
      }
      sectionContactUs {
        sectionDescription
        sectionTitle
        subtitle
        title
        sectionImage {
           ${imageQuery}
        }
        links {
          icon {
           ${imageQuery}
          }
          link
          linkTitle
          title
        }
      }
      sectionSpecialties {
        title
        subtitle
        buttonText
        buttonLink
        specialtiesForHome {
          name
          slug
          id
        }
      }
      sectionSurgery {
        title
        subtitle
        content {
          title
          image {
            ${imageQuery}
          }
          surgeries {
            title
          }
        }
      }
      sectionTreatments {
        title
        subtitle
        services {
          image {
             ${imageQuery}
          }
          service
        }
      }
    }
  }
}`;

export default data;
