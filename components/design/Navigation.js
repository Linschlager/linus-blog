import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const links = [
  {
    title: 'StackOverflow',
    link: 'https://stackoverflow.com/users/5228642',
    img: '/static/img/stackoverflow.png',
  }
];

const Navigation = () => {
  return (
    <>
      <ul>
        {
          links.map(link => (
            <li key={link.title}><a href={link.link}>
              <img width="50px" alt={`${link.title} icon`} src={link.img}/>
            </a></li>
          ))
        }
      </ul>
      <style jsx>{`
        ul {
          list-style: none;
          display: flex;
          flex-wrap: nowrap;
          justify-content: space-between;
          border-bottom: 1px solid rgb(var(--linus-primary-color));
        }
        
        li {
          padding-bottom: 15px;
        }
      `}</style>
    </>
  );
};

Navigation.propTypes = {
  links: PropTypes.object,
};

export default Navigation;