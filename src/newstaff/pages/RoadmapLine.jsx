import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function RoadmapLine() {
  return (
      <div className="App" style={{background: 'none'}}>
        <VerticalTimeline
            layout={'2-columns'}
            lineColor={'red'}>
          <VerticalTimelineElement
              contentStyle={{
                background: 'transparent',
                color: 'white',
                boxShadow: 'none',
              }}
              contentArrowStyle={{visibility: 'hidden'}}
              iconStyle={{visibility: 'hidden'}}
              date="Act 1"
              position="right"
          >
            <h3 className="vertical-timeline-element-title">Inception of the DropChichi Universe</h3>
            <span>
            A very limited chance to get 1 of 500 Origin - DropChiChi<br/>
            Dropchichies, Neandethals, Aliens, Vikings and special winter creature.<br/>
            Each character seeks the holy path to eternal ChiChi.<br/>
            Only Origin DropChiChi will give you the superpower to vote and determinate future of action<br/>
            DropChiChi - Holders are going to skip the line for all upcoming acts.<br/>
            Non-holders are ngmi.
          </span>
          </VerticalTimelineElement>
          <VerticalTimelineElement
              contentStyle={{
                background: 'transparent',
                color: 'white',
                boxShadow: 'none',
              }}
              contentArrowStyle={{visibility: 'hidden'}}
              iconStyle={{visibility: 'hidden'}}
              date="Act 2"
              position="left"
          >
            <h3 className="vertical-timeline-element-title">Battle for ChiChi</h3>
            <p>
              A phantom menace looms over the universe A dark passage has grown.<br/>
              Undeads becoming a thread to the DropChichi heroes.<br/>
              Will the glorious Origin - DropChiChi hold the power and win the Battle for ChiChi?
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
              contentStyle={{
                background: 'transparent',
                color: 'white',
                boxShadow: 'none',
              }}
              contentArrowStyle={{visibility: 'hidden'}}
              iconStyle={{visibility: 'hidden'}}
              date="Act 3"
              position="right"
          >
            <h3 className="vertical-timeline-element-title">Beautiful Sparkling DropChiChi Fountain</h3>
            <p>
              After the Battle for ChiChi - The DropChiChi Universe has fallen into pieces<br/>
              New fairytale species will be joining the DropChiChi Universe. Will they restore equilibrium of the
              universe?<br/>
              Fastlane for Origin - DropChiChi Holders
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
              contentStyle={{
                background: 'transparent',
                color: 'white',
                boxShadow: 'none',
              }}
              contentArrowStyle={{visibility: 'hidden'}}
              iconStyle={{visibility: 'hidden'}}
              date="Act 4"
              position="left"
          >
            <h3 className="vertical-timeline-element-title">Shadow. Light. Unforeseen</h3>
            <p>
              Expect the unexpected<br/>
              Nations are exploring new territories: Shadow Or Light<br/>
              They will be supported by Unforeseen creatures
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
  );
}
