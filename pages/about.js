import React, { Fragment } from 'react';
import Link from 'next/link';

const tech = [
  [
    {name: 'React', url: 'https://reactjs.org/'},
    {name: 'Redux', url: 'https://redux.js.org/'},
    {name: 'Next', url: 'https://nextjs.org/'},
  ],
  [
    {name: 'Angular', url: 'https://angular.io/'},
  ],
  [
    {name: 'Material-UI', url: 'https://material-ui.com/'},
    {name: 'AntDesign', url: 'https://ant.design/'},
    {name: 'Bootstrap', url: 'https://getbootstrap.com/'},
  ],
  [
    {name: 'Firebase', url: 'https://firebase.google.com/'},
  ],
  [
    {name: 'Jest', url: 'https://jestjs.io/'},
    {name: 'Enzyme', url: 'https://airbnb.io/enzyme/'},
  ]
];

const About = () => (
  <>
    <h1>Something about me:</h1>
    <em>I like to code and play video games</em>
    <p>I currently study computer science at the <a target="_blank" rel="noreferrer" href="https://www.fhnw.ch/en/">university
      of applied sciences</a> and work as a web developer at <a target="_blank" rel="noreferrer"
                                                                href="https://www.novartis.com/">Novartis</a>.</p>
    <h2>Some Technologies I have previously worked with</h2>
    <ul>
      {
        tech.map(group => (
          <li key={group}>
            {
              group.map((item, index) => (
                <Fragment key={index}>{ index > 0 && ', ' }<a target="_blank" rel="noreferrer" href={ item.url }>{ item.name }</a></Fragment>
              ))
            }
          </li>
        ))
      }
    </ul>

    <p>Find me on:</p>
    <ul>
      <li><Link href="https://github.com/Linschlager"><a target="_blank" rel="noreferrer">GitHub</a></Link></li>
      <li><Link href="https://stackoverflow.com/users/5228642"><a target="_blank" rel="noreferrer">StackOverflow</a></Link></li>
    </ul>
  </>
);

export default About;