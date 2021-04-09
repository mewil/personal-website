import styled from 'styled-components';

import { devices, theme } from './styles';

const Container = styled.div`
    display: flex;
    align-items: left;
    margin-top: 5px;
    justify-content: left;
    flex-direction: column;
    width: 90%;
    ${devices.tablet`width: 70%;`};
    ${devices.desktop`width: 50%;`};
    ${devices.giant`width: 45%;`};
`;

const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
`;

const Title = styled.h4`
    a {
        &:hover {
            text-decoration: underline;
        }
        text-decoration: none;
        color: ${theme.primary};
    }
`;

const ListContainer = styled.ul`
    display: flex;
    align-items: left;
    flex-direction: column;
`;

export interface ListItemProps {
    company: string;
    points: string[];
    title: string;
    date: string;
    url: string | undefined;
}

export const ListItem = (props: ListItemProps) => {
    const itemHeader = `${props.company} - ${props.title}`;
    return (
        <Container>
            <TitleContainer>
                {props.url === undefined ? (
                    <Title>{itemHeader}</Title>
                ) : (
                    <Title>
                        <a href={props.url}>{itemHeader}</a>
                    </Title>
                )}
            </TitleContainer>
            <ListContainer>
                {props.points.map((t) => (
                    <li>{t}</li>
                ))}
            </ListContainer>
        </Container>
    );
};
