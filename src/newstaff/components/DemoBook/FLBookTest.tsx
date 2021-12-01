import {RouteComponentProps} from '@reach/router';
import HTMLFlipBook from 'react-pageflip';
import React, {useRef, useState} from 'react';

interface FLBookState {
  page: number,
  totalPage: number,
  orientation?: string
}


function FLBookTest() {
  const [state, setState] = useState<FLBookState>({
    page: 0,
    totalPage: 0
  });

  const flipBook = useRef<any>();

  const nextButtonClick = () => {
    // @ts-ignore
    flipBook?.pageFlip()?.flipNext();
  };

  const prevButtonClick = () => {
    // @ts-ignore
    flipBook?.pageFlip()?.flipPrev();
  };

  const onPage = (e: any) => {
    setState({
      page: e.data,
      totalPage: state.totalPage
    });
  };

  // componentDidMount() {
  //   this.setState({
  //     totalPage: this.flipBook.pageFlip()?.getPageCount(),
  //   });
  // }


  return (
    // @ts-ignore
      <HTMLFlipBook
        width={600}
        minWidth={400}
        maxWidth={650}
        height={300}
        minHeight={250}
        maxHeight={550}
        size="stretch"
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        className="demo-book"
        style={{backgroundColor:'beige', padding:'20px', whiteSpace: 'pre-wrap'}}
        startPage={0}
        // drawShadow={true}
        // flippingTime={10}
        // usePortrait={false}
        // startZIndex={0}
        autoSize={true}
        // clickEventForward={false}
        // useMouseEvents={false}
        // swipeDistance={200}
        // showPageCorners={false}
        // disableFlipByClick={false}
      >
        <div className="demoPage" style={{backgroundColor:'red'}}>Lorem ipsum dolor sit amet, consectetuer adipiscing
          elit, sed diam nonummy nibh
          euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
          exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure
          dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at
          vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te
          feugait nulla facilisi.</div>
        <div className="demoPage"  style={{backgroundColor:'blue'}}>Epsum factorial non deposit quid pro quo hic escorol.
          Olypian quarrels et gorilla
          congolium sic ad nauseum. Souvlaki ignitus carborundum e pluribus unum. Defacto lingo est igpay atinlay.
          Marquee selectus non provisio incongruous feline nolo contendre. Gratuitous octopus niacin, sodium glutimate.
          Quote meon an estimate et non interruptus stadium. Sic tempus fugit esperanto hiccup estrogen. Glorious
          baklava ex librus hup hey ad infinitum. Non sequitur condominium facile et geranium incognito. Epsum factorial
          non deposit quid pro quo hic escorol. Marquee selectus non provisio incongruous feline nolo contendre Olypian
          quarrels et gorilla congolium sic ad nauseum. Souvlaki ignitus carborundum e pluribus unum.  </div>
        <div className="demoPage" style={{backgroundColor:'brown'}}>Li Europan lingues es membres del sam familie.
          Lor separat existentie es un myth. Por
          scientie, musica, sport etc., li tot Europa usa li sam vocabularium. Li lingues differe solmen in li
          grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilit? de un nov lingua
          franca: on refusa continuar payar custosi traductores. It solmen va esser necessi far uniform grammatica,
          pronunciation e plu sommun paroles.  </div>
        <div className="demoPage" style={{backgroundColor:'beige'}}>Ma quande lingues coalesce, li grammatica del
          resultant lingue es plu simplic e
          regulari quam ti del coalescent lingues. Li nov lingua franca va esser plu simplic e regulari quam li existent
          Europan lingues. It va esser tam simplic quam Occidental: in fact, it va esser Occidental. A un Angleso it va
          semblar un simplificat Angles, quam un skeptic Cambridge amico dit me que Occidental es.  </div>
      </HTMLFlipBook>
  );
}

export default FLBookTest;

// const App = (props: RouteComponentProps) => {
//   const [currentPageNum, setCurrentPageNum] = useState(0);
//   const [totalPages, setTotalPages] = useState(0);
//   const bookRef = useRef();
//
//   const onPageTurn = (e:any) => {
//     setCurrentPageNum(e.data);
//   }
//
//   const onInit = useCallback((e:any) => {
//     if (bookRef && bookRef.current) {
//       console.log("bookRef ", bookRef);
//       // @ts-ignore
//       setTotalPages(bookRef.current?.pageFlip()?.getPageCount());
//     }
//   }, []);
//
//   return (
//     // @ts-ignore
//     <HTMLFlipBook width={300} height={500} ref={bookRef} onInit={onInit}>
//       <div className="demoPage">Page 1</div>
//       <div className="demoPage">Page 2</div>
//       <div className="demoPage">Page 3</div>
//       <div className="demoPage">Page 4</div>
//     </HTMLFlipBook>
//   );
// };
//
// export default App;
//
// const ref = useRef<HTMLElement>(null);
// const Page = React.forwardRef((props, ref) => {
//   return (
//     <div className="demoPage" ref={ref}>
//       /* ref required */
//       <h1>Page Header</h1>
//       <p>{props.children}</p>
//       <p>Page number: {props.number}</p>
//     </div>
//   );
// });
//
// function MyBook(props) {
//   return (
//     <HTMLFlipBook width={300} height={500}>
//       <Page number="1">Page text</Page>
//       <Page number="2">Page text</Page>
//       <Page number="3">Page text</Page>
//       <Page number="4">Page text</Page>
//     </HTMLFlipBook>
//   );
// }
