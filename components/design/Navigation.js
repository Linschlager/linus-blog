import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faReddit, faStackOverflow } from '@fortawesome/free-brands-svg-icons';

const links = [
  {
    local: true,
    title: 'Home',
    link: '/',
    icon: faHome,
  },
  {
    local: false,
    title: 'StackOverflow',
    link: 'https://stackoverflow.com/users/5228642',
    icon: faStackOverflow,
  },
  {
    local: false,
    title: 'Github',
    link: 'https://github.com/Linschlager',
    icon: faGithub
  },
  {
    local: false,
    title: 'Reddit',
    link: 'https://reddit.com/u/Linschlager',
    icon: faReddit
  }
];

const NavigationLink = ({ local, link, title, icon }) => {
  if (local) { // Wrap in <Link> if local
    return (
      <Link href={link}>
        <a title={title}>
          <FontAwesomeIcon icon={icon } size="4x"/>
        </a>
      </Link>
    );
  } else {
    return (
      <a href={ link } title={ title } target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={ icon } size="4x"/>
      </a>
    );
  }
};

const Navigation = () => {
  return (
    <>
      <ul>
        {
          links.map(link => (
            <li key={`ext-${link.title}`}>
              <NavigationLink {...link}/>
            </li>
          ))
        }
      </ul>
      <style jsx>{`
        ul {
          list-style: none;
          display: flex;
          flex-wrap: nowrap;
          border-bottom: 1px solid rgb(var(--linus-primary-color));
        }
        
        li {
          padding-bottom: 15px;
          padding-right: 20px;
        }
      `}</style>
    </>
  );
};

Navigation.propTypes = {
  links: PropTypes.object,
};

export default Navigation;