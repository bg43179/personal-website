// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';
import Page from '../components/Page';
import { useSiteMetadata, useNotesList } from '../hooks';
import { FaBook } from "react-icons/Fa";

const NotesListTemplate = () => {
  const { title, subtitle } = useSiteMetadata();
  const notes = useNotesList();

  return (
    <Layout title={`Learning Notes - ${title}`} description={subtitle}>
      <Sidebar />
      <Page title="Learning Notes">
        {notes.map((note) => (
          <li style={{listStyle: 'none'}} className="py-3" key={note.fieldValue}>
            <Link 
              style={{fontSize: "20px"}} 
              className='btn-link btn text-dark'
              to={`/notes/${kebabCase(note.fieldValue)}`}
            >
              <FaBook className="mr-3" />
              {note.fieldValue}
            </Link>
          </li>
        ))}
      </Page>
    </Layout>
  );
};

export default NotesListTemplate;
