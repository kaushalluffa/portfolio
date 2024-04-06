import { gql } from "graphql-request";

export const getProjects = gql`
  query GetProjects {
    projects {
      id
      projectTitle
      projectDescription
      projectLastUpdated
      projectGithubLink
      projectDeployedVersion
      projectThumbnail {
        id
        url
      }
      projectCover {
        id
        url
      }
      projectDemoVideoUrl
      projectVideo {
        id
        url
      }
      stack
    }
  }
`;
export const getHighlightedProjects = gql`
  query GetHighlightedProjects {
    highlightedProjects {
      id
      projectTitle
      projectDescription
      projectLastUpdated
      projectGithubLink
      projectDeployedVersion
      projectThumbnail {
        id
        url
      }
      projectCover {
        id
        url
      }
      projectDemoVideoUrl
      projectVideo {
        id
        url
      }
      stack
    }
  }
`;
export const getDevelopers = gql`
  query GetDevelopers {
    developers {
      id
      tagLine
      name
      shortDescMedia {
        id
        url
      }
      profileDescription
      githubUrl
      linkedinUrl
      email
      extraGithubUrl
      stack
      shortDesc
      resume {
        id
        url
      }
    }
  }
`;
