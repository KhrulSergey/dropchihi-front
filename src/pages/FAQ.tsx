import React, {useEffect, useRef} from 'react';
import {Link, RouteComponentProps} from '@reach/router';
import {Disclosure} from '@headlessui/react';

import Nav from '../components/Nav';
import Rocket from '../assets/faq/rocket.png';
import useScrollToTop from '../lib/useScrollToTop';

function FAQ(props: RouteComponentProps) {
  const faqs = [
    {
      question: "Li Europan lingues es?",
      answer:
        "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc., li tot Europa usa li sam vocabularium. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilit? de un nov lingua franca: on refusa continuar payar custosi traductores. It solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles.  \n" +
        "\n" +
        "Li Europan lingues es membres del sam familie. Lor separat existentie",
    },
    {
      question: "Ma quande lingues coalesce,?",
      answer:
        "Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic e regulari quam ti del coalescent lingues. Li nov lingua franca va esser plu simplic e regulari quam li existent Europan lingues. It va esser tam simplic quam Occidental: in fact, it va esser Occidental. A un Angleso it va semblar un simplificat Angles, quam un skeptic Cambridge amico dit me que Occidental es.  \n" +
        "\n" +
        "Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic e.",
    },
  ];

  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    headingRef.current?.classList.remove("opacity-0");
  }, []);

  useScrollToTop();

  return (
    <div style={{ background: "#101010" }} className="min-h-screen">
      <Nav />
      <main className="py-36">
        <h1
          className="text-center text-primary-light glow text-5xl font-black italic transition-all opacity-0 duration-700"
          ref={headingRef}
        >
          FAQS
        </h1>
        <section className="relative mt-10 lg:-mt-10  lg:px-52 px-10">
          <img
            src={Rocket}
            alt="DROPCHICHI sillouhette with glow eyes"
            className="mt-2 ml-10 hidden lg:block"
          />
          <dl className="space-y-5">
            {faqs.map((faq) => (
              <Disclosure
                as="div"
                key={faq.question}
                className="border border-gray-light bg-gray-dark rounded-md p-5"
              >
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-dark focus:outline-none">
                        <span className="font-black italic uppercase text-white text-xl">
                          {faq.question}
                        </span>
                        <span className="ml-6 h-7 flex items-center text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`${open ? "-rotate-180" : "rotate-0"}
                              h-6 w-6 transform transition-all duration-200`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </section>
        <div className="mt-16 font-orb">
          <p className="text-sm font-medium text-gray text-center font-inter mx-10">
            Can’t find an answer to your query? Don’t worry, we’ve got your
            back...
          </p>
          <div className="flex flex-wrap justify-center items-center">
            <Link
              to="/roadmap"
              className="btn-primary font-black mt-4 lg:mr-3 uppercase"
            >
              Roadmap
            </Link>
            <a
              href="https://discord.com/invite/bBeH"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary font-black mt-4"
            >
              JOIN DISCORD
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default FAQ;
