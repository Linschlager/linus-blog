import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const Navigation = ({ links, activeRoute }) => {
  return (
    <>
      <div>
        {
          Object.entries(links).map(([ href, { key, label }]) => (
            <Link key={key} href={href} prefetch><a className={activeRoute === href && 'active'}>{label}</a></Link>
          ))
        }
      </div>
      <style jsx>{`
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