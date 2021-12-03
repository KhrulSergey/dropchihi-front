import React, {useEffect, useRef} from 'react';
import {Link, RouteComponentProps} from '@reach/router';
import Nav from '../components/Nav';

import Ship from '../assets/roadmap/ship.png';
import useScrollToTop from '../lib/useScrollToTop';
import {TimelineItemModel} from 'react-chrono/dist/models/TimelineItemModel';
import RoadmapLine from '../components/RoadmapLine';

function Roadmap(props: RouteComponentProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const headingSpan = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    headingRef.current?.classList.remove('opacity-0');

    headingSpan.current?.classList.add('glow');
  }, []);


  // active?: boolean;
  // cardDetailedText?: string | string[];
  // cardSubtitle?: string;
  // cardTitle?: string;
  // id?: string;
  // media?: Media;
  // position?: string;
  // title?: string;
  // visible?: boolean;

  const items: TimelineItemModel[] = [
    {
      position: 'right',
      title: 'May 1940',
      cardTitle: 'Dunkirk',
      cardSubtitle: 'Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.',
      cardDetailedText: 'On 10 May 1940, Hitler began his long-awaited offensive in the west...',
      media: {
        type: 'IMAGE',
        source: {
          url: 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2016/08/hbo.png?auto=format&q=60&fit=max&w=930'
        }
      }
    },
    {
      title: 'May 1941',
      cardTitle: 'Dunkirk2',
      cardSubtitle: '2Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.',
      cardDetailedText: '222On 10 May 1940, Hitler began his long-awaited offensive in the west...',
    },
    {
      title: 'May 1942',
      cardTitle: 'Dunkirk3',
      cardSubtitle: '3Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.',
      cardDetailedText: '3333On 10 May 1940, Hitler began his long-awaited offensive in the west...',
    },
  ];

  useScrollToTop();
  return (
    <>
      <div style={{background: '#101010'}} className="pb-30">
        <Nav/>
        <div
          id="roadmap-hero"
          className="w-full h-screen py-40 relative bg-center bg-cover"
        >
          <h1
            className="text-primary-light text-6xl uppercase font-black italic text-center duration-700 transition-all ease-out opacity-0"
            ref={headingRef}
          >
          <span ref={headingSpan} className="transition-all delay-700">
            Roadmap
          </span>
          </h1>
          <img src={Ship} alt="Super Cool Spaceship" className="mt-10 mx-auto"/>
        </div>
        <div className="text-white ml-5 mr-10 lg:mx-48 -mt-48 relative z-10">
          <div style={{
            // width: '500px',
            // height: '400px'
          }}>
            {/*<Chrono*/}
            {/*  items={items}*/}
            {/*  hideControls={true}*/}
            {/*  mode="VERTICAL_ALTERNATING"*/}
            {/*/>*/}
            <RoadmapLine/>
          </div>
        </div>
        <div className="mt-8 font-orb ">
          <p className="text-sm font-medium text-gray text-center font-inter mx-10">
            Can’t find an answer to your query? Don’t worry, we’ve got your
            back...
          </p>
          <div className="flex flex-wrap justify-center items-center">
            <Link to="/faq" className="btn-primary font-black mt-4 lg:mr-3">
              FAQS
            </Link>
            <a
              href="https://discord.com/invite/bBeHK5"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary font-black mt-4"
            >
              JOIN DISCORD
            </a>
          </div>
        </div>
      </div>
    </>);
}

export default Roadmap;
