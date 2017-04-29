import styled from 'styled-components';

import { baseLi } from 'components/styled';

const Li = styled(baseLi)`
    color: ${props => props.color};
    cursor: pointer;
`;

export default Li;