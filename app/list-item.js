import { h, a, h5, li } from 'react-hyperscript-helpers';
import styled from 'styled-components';

import { theme } from './styles';

const Container = styled.div`
    display: flex;
    align-items: left;
    justify-content: left;
    flex-direction: column;
    width: 40%;
`;

const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
`;

const Title = styled.h4`
    a {
        text-decoration: none;
        color: ${theme.primary};
    }
`;

const ListContainer = styled.ul`
    display: flex;
    align-items: left;
    flex-direction: column;
`;

export const ListItem = ({ company, points, title, date, url }) => {
    return h(Container, [
        h(TitleContainer, [
            h(Title, [a({ href: url }, [`${company} - ${title}`])]),
            h5(date)
        ]),
        h(ListContainer, [points.map(t => li(t))])
    ]);
};
