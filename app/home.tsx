import styled from 'styled-components';
import { ListItem } from './list-item';
import { devices } from './styles';

const Title = styled.h2`
    margin-top: -30px;
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    padding-top: 240px;
    padding-bottom: 20px;
    justify-content: center;
    flex-direction: column;
    ${devices.tablet`padding-top: 20px;`};
`;

const LIST = [
    {
        company: 'Amazon Web Services - CodeGuru Reviewer',
        title: 'SDE',
        url: 'https://aws.amazon.com/codeguru/',
        date: 'August 2020 - Present',
        points: [
            'Led the design, implementation, and evaluation of a new secrets detector launched at re:Invent 2021 to identify hardcoded secrets in customer source code and secure them with AWS Secrets Manager',
            "Designed and implemented a usage metering system to support CodeGuru Reviewer's new pricing model",
            'As a software engineer, concurrently managed 6 direct reports and delivered 10x more recommendations on Python source code for the Python General Availability launch compared to re:Invent 2020',
            'Coauthored a paper on type inference of AWS SDK clients in Python source code submitted to ECOOP22',
            'Extended static analysis tooling and service infrastructure and implemented code quality detectors to support Python source code for launch at re:Invent 2020'
        ]
    },
    {
        company: 'Amazon Web Services - CodeGuru Reviewer',
        title: 'SDE Intern',
        url: 'https://aws.amazon.com/codeguru/',
        date: 'May 2019 - August 2019',
        points: [
            'Designed and implemented a terabyte-scale data warehouse to enable static code analysis research'
        ]
    },
    {
        company: 'Michigan eXploration Lab',
        title: 'Lead Software Engineer',
        url: 'https://exploration.engin.umich.edu',
        date: 'September 2017 - Present',
        points: [
            "Managed software development and delivery of cube satellites including the Tandem Beacon Experiment (TBEx), launched on SpaceX's STP-2 Falcon Heavy Mission in June, 2019",
            'Built an end-to-end distributed communications pipeline that gathers satellite telemetry in orbit, schedules downlinks of the data to ground stations on Earth, aggregates the data for analysis, securely displays the telemetry on the web, and can be controlled via Slack integrations',
            'Developed and evaluated mission critical payload and communications flight software for TBEx and used flight and prototype units for hardware-in-the-loop testing',
            'Received a grant and honorable mention at the SmallSat Conference Student Competition for my paper "Applying Modern Software System Design to Small Satellite Development and Operations"'
        ]
    },
    {
        company: 'Trove',
        title: 'Software Engineer',
        url: 'https://trove.com',
        date: 'May 2018 - May 2019',
        points: [
            'Created a frontend analytic framework to analyze user behavior and iterate on captivating user experiences for a professional networking web app',
            'Added new REST API endpoints to the back-end application to provide novel access to user data',
            'Implemented a new mobile and email notification system to improve delivery latency'
        ]
    },
    {
        company: 'Drone Brothers',
        title: 'Drone Pilot, Producer and Developer',
        url: 'https://dronebros.com',
        date: 'May 2016 - August 2016',
        points: [
            'Developed the company website to showcase available services and increase brand awareness',
            'Piloted drones to capture aerial video and photographs for commercial and residential real estate clients',
            'Edited and produced promotional aerial videos, photographs, panoramas, and 3D maps'
        ]
    }
];

export const Home = () => (
    <Container>
        <Title>MICHAEL WILSON</Title>
        {LIST.map(({ company, title, url, date, points }) => (
            <ListItem
                company={company}
                title={title}
                url={url}
                date={date}
                points={points}
            />
        ))}
    </Container>
);
