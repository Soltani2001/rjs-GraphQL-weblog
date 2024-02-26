import { gql } from "@apollo/client";

const GET_BLOGS_INFO = gql `
query {
  posts {
    title
    slug
    id
    coverPhoto {
      url
    }
    author {
      name
      avatar {
        url
      }
    }
  }
}
`

const GET_AUTHORS_INFO = gql`
query Assets {
  authors {
    id
    name
    slug
    avatar {
      url
    }
  }
}

`

const GET_AUTHOR_INFO =gql `
  query getAuthorInfo($slug: String!){
  author(where: {slug: $slug}) {
    avatar {
      url
    }
    field
    name
    description {
      html
    }
  posts {
    coverPhoto {
      url
    }
    id
    slug
    title
  }
  }
}
`

const GET_CONTENT   = gql `
query getContent ($slug: String!){
  post(where: {slug: $slug}) {
    author {
      avatar {
        url
      }
      field
      name
    }
    content {
      html
    }
    coverPhoto {
      url
    }
    title
  }
}
`

const GET_POST_COMMENT = gql `
  query getPostComments ($slug: String!) {
  comments(where: {post: {slug: $slug}}) {
    name
    id
    text
  }
}
`

export {
   GET_BLOGS_INFO,
   GET_AUTHORS_INFO,
   GET_AUTHOR_INFO, 
   GET_CONTENT,
   GET_POST_COMMENT
};