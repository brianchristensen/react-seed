import styled from 'styled-components';

export const baseStyles = `
    font-family: Verdana, Geneva, sans-serif;
    font-size: 1em;
`;

export const baseH1 = styled.h1`${baseStyles}`;
export const baseLi = styled.li`${baseStyles}`;

export const H1 = styled(baseH1)`
    font-size: 1.5em;
`;