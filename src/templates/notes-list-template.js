import React from 'react';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import { FaBook } from 'react-icons/fa';
import Base from '../containers/Base';
import { useSiteMetadata, useNotesList } from '../hooks';

const NotesListTemplate = () => {
  const { title } = useSiteMetadata();
  const notes = useNotesList();

  return (
    <Base title={`Learning Notes - ${title}`}>
      <h1 className="my-4 pt-4">Learning Notes</h1>
      {notes.map((note) => (
        <li style={{ listStyle: 'none' }} className="py-3" key={note.fieldValue}>
          <Link
            style={{ fontSize: '20px' }}
            className="btn-link btn text-dark"
            to={`/notes/${kebabCase(note.fieldValue)}`}
          >
            <FaBook className="mr-3" />
            {note.fieldValue}
          </Link>
        </li>
      ))}
    </Base>
  );
};

export default NotesListTemplate;
