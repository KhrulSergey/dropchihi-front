import React, {useEffect, useRef, useState} from 'react';
import {Link, RouteComponentProps} from '@reach/router';
import Nav from '../../components/Nav';

import Ship from '../../assets/roadmap/ship.png';
import RoadmapImage from '../../assets/roadmap/roadmap.svg';
import useScrollToTop from '../../lib/useScrollToTop';
import {defaultModalState, IModalState} from '../service/ModalService';
import {INftCollection} from '../models/INftCollection';
import useApi from '../hooks/useApi';
import {NftResourceList} from '../components/NftResourceList';
import RevenueShare from '../../assets/tokenomics/revenue-share.svg';
import RoyaltyBreakdwon from '../../assets/tokenomics/royalty-breakdown-mobile.svg';
import Summary from '../../assets/tokenomics/summary-illustration.svg';
import SummaryMobile from '../../assets/tokenomics/summary-mobile.svg';
import {IPage} from '../models/common';
import {INftResource} from '../models/INftResource';


// @ts-ignore
import useLoadMoreOnScroll from 'react-hook-pagination';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Typography
} from '@material-ui/core';
import {Skeleton} from '@material-ui/lab';

function Collection(props: RouteComponentProps) {
  const ulElement = useRef();
  const [data, setData] = useState([]);
  const {
    start,
    end,
    isFetching,
    doneFetching,
    setIsFetching,
    forceDonefetching
  } = useLoadMoreOnScroll({
    fetchSize: 20,
    scroller: ulElement,
    limit: 1000
  });
  const fetchResources = async (start: number, end: number) => {
    const size = end - start;
    const page = end / size;
    const response = await fetch(
      `http://localhost:4410/api/collection/resources/?collection_name=${collectionId}&size=${size}&page=${page}`
    );
    const res = await response.json();
    if (res.page.totalPages <= page) {
      forceDonefetching();
    }
    return res._embedded.employee;
  };
  useEffect(() => {
    if (start !== end) {
      setIsFetching(true);
      fetchResources(start, end).then(employees => {
        // @ts-ignore
        setData([...data, ...employees]);
        setIsFetching(false);
      })
        .catch((e) => {
          console.error(e);
          modalService.showError(e.message);
        });
    }
  }, [start, end]);


  const headingRef = useRef<HTMLHeadingElement>(null);
  const headingSpan = useRef<HTMLSpanElement>(null);
  const [modal, setModal] = useState<IModalState>(defaultModalState);
  const [collection, setCollection] = useState<INftCollection | null>(null);
  const [nftResourceList, setNftResourceList] = useState<INftResource[]>([]);
  const {
    apiService,
    modalService
  } = useApi();
  modalService.init(setModal);


  /**
   * Number of tournaments to be viewed per page
   */
  const pageSize = 25;
  const [page, setPage] = useState<IPage<INftResource[]> | null>(null);

  const collectionId = 'TripleMonkey';
  useEffect(() => {
    if (!collectionId) {
      return modalService.showError('The path is not valid');
    }
    apiService.getNftCollection(collectionId)
      .then((collection: INftCollection) => {
        console.log(collection);
        setCollection(collection);
      })
      .catch(apiService.errorHandler(modalService));
  }, [apiService, collectionId, modalService]);

  useEffect(() => {
    if (!collectionId) {
      return modalService.showError('The path is not valid');
    }

    apiService.getPageableNftResourceList({
      page: page ? page.number + 1 : 0,
      size: pageSize,
      sort: 'index,asc',
      collection_name: collectionId,
    })
      .then((nftResourcePage: IPage<INftResource[]>) => {
        console.log(nftResourcePage.content);
        const newResourceList: INftResource[] = nftResourcePage.content;
        setNftResourceList(newResourceList);
      })
      .catch(apiService.errorHandler(modalService));
  }, [apiService, collectionId, modalService]);

  // /**
  //  * Fetch tournament list's next pages
  //  */
  // const handleLoadMoreClick = () => {
  //   if (!tournaments || !page) return console.error("No tournaments or no page");
  //   setIsLoading(true);
  //   HTTP.getTournaments(authToken, {
  //     page: page.number + 1,
  //     size: pageSize,
  //     statuses: filterTypesMap[filterType],
  //     sort: "id,desc",
  //     discipline_ids: selectedDisciplineId ? [selectedDisciplineId] : [],
  //   })
  //     .then((page: IPage<ITournament[]>) => {
  //       console.log(`[ViewAll] Get tournaments`, page.content);
  //       setTournaments(tournaments.concat(page.content));
  //       setPage(page);
  //     })
  //     .catch(HTTP.errorHandler(modalService))
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // };

  useEffect(() => {
    if (!collectionId) {
      return modalService.showError('The path is not valid');
    }
    apiService.getNftCollection(collectionId)
      .then((collection: INftCollection) => {
        console.log(collection);
        setCollection(collection);
      })
      .catch(apiService.errorHandler(modalService));
  }, [apiService, collectionId, modalService]);

  useEffect(() => {
    headingRef.current?.classList.remove('opacity-0');
    headingSpan.current?.classList.add('glow');
  }, []);

  useScrollToTop();
  return (
    <div style={{background: '#101010'}} className="pb-30">
      <Nav/>
      <div id="roadmap-hero" className="w-full h-sc reen py-40 relative bg-center bg-cover">
        <h1 className="text-primary-light text-6xl uppercase font-black italic
        text-center duration-700 transition-all ease-out opacity-0" ref={headingRef}>
          <span ref={headingSpan} className="transition-all delay-700">
            {(collection) ? collection.name : `${collectionId} old`} collection
          </span>
        </h1>
        <Typography variant="h2">Employees</Typography>
        <img src={Ship} alt="Super Cool Spaceship" className="mt-10 mx-auto"/>
        <div className="hidden lg:block">
          <p className="text-center text-white font-orb font-black lg:text-3xl text-2xl uppercase mt-20">
            <span className="text-primary-dark">{collection && `identifier ${collection?.id}`}</span>
            <br/> {collection?.description}
          </p>
        </div>
      </div>
      <div className="text-white ml-5 mr-10 lg:mx-48 -mt-48 relative z-10">
        <div className="flex">
          <div className="h-4 w-4 lg:h-6 lg:w-6 rounded-full flex-shrink-0 mt-1 lg:mr-10 mr-5 flex relative">
            <div className="absolute bg-primary-dark rounded-full inset-0 filter  blur-sm"></div>
            <div className="lg:h-4 lg:w-4 h-3 w-3 bg-primary-light rounded-full m-auto relative z-10"></div>
            {/*</div>*/}
            {/*<div className="w-full" ref={ulElement}>*/}
            <p className="text-center text-white font-orb font-black lg:text-3xl text-2xl uppercase mt-24">
              <span className="text-primary-dark">Collection NFT</span>
            </p>
            {isFetching && <Loader/>}
            {doneFetching && <Typography variant="h4">Thats All!</Typography>}
            {doneFetching && <NftResourceList nftResourceList={nftResourceList!}/>}
          </div>
        </div>
      </div>
    </div>
  );

}

function Loader() {
  return (
    <div>
      <Skeleton variant="circle" width={40} height={40}/>
      <Skeleton variant="text" height={120}/>
    </div>
  );
}

export default Collection;
