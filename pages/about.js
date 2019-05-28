import React from 'react';
import Link from 'next/link';
import {Icon} from "antd";


const About = () => {
  return (
     <>
       <h1>Hi there, I'm Linus</h1>
       <p>Find me on:</p>
       <ul>
         <li><Link href="https://github.com/Linschlager"><a target="_blank" rel="noreferrer"><Icon type="github" />&nbsp;Github</a></Link></li>
         <li><Link href="https://stackoverflow.com/users/5228642"><a target="_blank" rel="noreferrer"><img alt="stackoverflow icon" src="https://cdn.sstatic.net/Sites/stackoverflow/img/favicon.ico" height={14}/>&nbsp;StackOverflow</a></Link></li>
       </ul>
     </>
  );
};

export default About;