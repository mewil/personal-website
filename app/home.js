import { h } from 'react-hyperscript-helpers';
import styled from 'styled-components';
import { ListItem } from './list-item';

const Title = styled.h2`
    margin-top: -30px;
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    justify-content: center;
    flex-direction: column;
`;

const LIST = [
    {
        company: 'Amazon Web Services',
        title: 'SDE Intern',
        url: 'https://aws.amazon.com',
        date: 'May 2019 - August 2019',
        points: [
            'Designed and implemented a terabyte scale data warehouse to enable machine learning research'
        ]
    },
    {
        company: 'Michigan eXploration Lab',
        title: 'Lead Software Engineer',
        url: 'https://exploration.engin.umich.edu',
        date: 'September 2017 - Present',
        points: [
            "Managed software development and delivery of cube satellites including TBEx, the Tandem Beacon Experiment, successfully launched on SpaceX's STP-2 Falcon Heavy Mission on June 25th, 2019",
            'Built an end-to-end communications pipeline that gathers satellite telemetry in orbit and sends the data to ground stations on Earth, where it is aggregated for analysis and securely displayed on the web',
            'Developed and evaluated mission critical payload and communications flight software for TBEx, using flight and prototype units for extensive integration tests'
        ]
    },
    {
        company: 'Trove',
        title: 'Software Engineer',
        url: 'https://trove.com',
        date: 'May 2018 - May 2019',
        points: [
            'Analyzed user behavior to iterate on captivating user experiences for a professional networking web app',
            'Wrote unit and integration tests to ensure code quality and correctness',
            'Added new API endpoints in the back-end application to provide novel access to user data',
            'Implemented a new mobile and email notification system to increase back-end throughput'
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
    },
    {
        company: 'The Robot Garage',
        title: 'Instructor',
        url: 'https://therobotgarage.com',
        date: 'May 2015 - August 2015',
        points: [
            'Taught robotics and programming to children at a local robotics education center',
            'Supervised student groups at summer programming camp'
        ]
    }
];

export const Home = () => {
    return h(Container, [
        h(Title, 'Michael Wilson'.toUpperCase()),
        LIST.map(({ company, title, url, date, points }) =>
            h(ListItem, { company, title, url, date, points })
        )
    ]);
};
