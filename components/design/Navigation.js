import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const links = [
  { label: 'Blog', href: '/blog' },
  { label: 'About me', href: '/about' },
  { label: 'Customization', href: '/customization' }
];

const Navigation = ({ activeRoute }) => {
  return (
    <>
      <ul>
        {
          links.map(link => (
            <li>
              <Link href={link.href}>
                <a className={activeRoute === link.href && `active`}>{link.label}</a>
              </Link>
            </li>
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
        
        div {
          background-color: rgba(var(--linus-primary-color), 0.2);
          position: relative;
          display: flex;
          flex-wrap: nowrap;
          justify-content: space-between;
          padding: 10px;
        }
        
        a, a:link, a:visited, a:focus {
          font-family: 'Raleway', sans-serif;
          font-weight: 100;
          font-size: 3rem;
          color: rgb(var(--linus-primary-color));
          text-decoration: none;
        }
        
        a.active {
          text-decoration: underline;
        }
        
        a:hover {
          color: rgba(var(--linus-primary-color), 0.9);
        }
      `}</style>
    </>
  );
};

Navigation.propTypes = {
  links: PropTypes.object,
};

export default Navigation;