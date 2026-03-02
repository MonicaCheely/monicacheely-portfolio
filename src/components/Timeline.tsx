import React from "react"; 
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'   

function Timeline() {
  return (
    <div id="experience">
      <div className="items-container">
        <h1>Experience</h1>
        <VerticalTimeline>

          {/* Tech Mahindra */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="Dec 2025 – Present"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Quality Assurance Analyst</h3>
            <h4 className="vertical-timeline-element-subtitle">Tech Mahindra via (Activus Connect)</h4>
                       <h4 className="vertical-timeline-element-subtitle">Alpharetta, GA · On-site</h4>
            <p>
              • Perform detailed quality reviews of text, image, audio, and video data.<br />
              • Collaborate with cross-functional teams to align on quality standards.<br />
              • Build and refine QA processes to support scalable AI/ML operations.<br />
              • Analyze trends to identify root causes and recommend improvements.<br />
              • Support model training with high-quality datasets.
            </p>
          </VerticalTimelineElement>

          {/* Accenture */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jul 2022 – Aug 2025"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Packaged Application Development Analyst</h3>
            <h4 className="vertical-timeline-element-subtitle">Accenture · Remote / Atlanta, GA</h4>
            <p>
              <strong>Quality Engineer Tester:</strong> Collaborated with functional teams, developed & executed manual and automated test cases using Jira and Worksoft Certify in SAP Fiori; supported integration testing (SIT 2 in OTC 1,2,3) and assisted team members.<br />
              <strong>IT Customer Service Representative:</strong> Triaged and remediated alerts/security incidents, collaborated with security teams to improve processes, and corrected automation errors.<br />
              <strong>Program/Project Management Representative:</strong> Supported S/4 Transformation Program in Azure DevOps, performed PI planning and sprint execution, managed reports for dependencies, milestones, risks, and issues.
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;