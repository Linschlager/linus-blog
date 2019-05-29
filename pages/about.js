import React from 'react';
import Link from 'next/link';
import { Icon } from "antd";

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
          <li>
            {
              group.map((item, index) => (
                <>{ index > 0 && ', ' }<a target="_blank" rel="noreferrer" href={ item.url }>{ item.name }</a></>
              ))
            }
          </li>
        ))
      }
    </ul>

    <p>Find me on:</p>
    <ul>
      <li><Link href="https://github.com/Linschlager"><a target="_blank" rel="noreferrer"><Icon
        type="github"/>&nbsp;Github</a></Link></li>
      <li><Link href="https://stackoverflow.com/users/5228642"><a target="_blank" rel="noreferrer"><img
        alt="StackOverflow icon" src="https://cdn.sstatic.net/Sites/stackoverflow/img/favicon.ico"
        height={ 14 }/>&nbsp;StackOverflow</a></Link></li>
    </ul>
  </>
);

export default About;