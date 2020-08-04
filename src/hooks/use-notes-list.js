// @flow strict
import { useStaticQuery, graphql } from 'gatsby';

const useNotesList = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query NoteListQuery {
        allMarkdownRemark(
          filter: { frontmatter: { template: { eq: "note" }, draft: { ne: true } } }
        ) {
          group(field: frontmatter___note) {
            fieldValue
          }
        }
      }
    `
  );

  return allMarkdownRemark.group;
};

export default useNotesList;
