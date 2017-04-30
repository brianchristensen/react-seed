import styled from 'styled-components';

import { baseLi } from 'components/styled/base';

export const Li = styled(baseLi)`
    color: ${props => props.color};
    cursor: pointer;
`;