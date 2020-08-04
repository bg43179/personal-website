// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';
import Page from '../components/Page';
import { useSiteMetadata, useNotesList } from '../hooks';

const NotesListTemplate = () => {
  const { title, subtitle } = useSiteMetadata();
  const notes = useNotesList();

  return (
    <Layout title={`Learning Notes - ${title}`} description={subtitle}>
      <Sidebar />
      <Page title="Learning Notes">
        <ul>
          {notes.map((note) => (
            <li key={note.fieldValue}>
              <Link style={{fontSize: "20px"}} 
                to={`/notes/${kebabCase(note.fieldValue)}`}
              >
                {note.fieldValue}
              </Link>
            </li>
          ))}
        </ul>
      </Page>
    </Layout>
  );
};

export default NotesListTemplate;
