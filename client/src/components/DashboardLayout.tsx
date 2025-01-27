import styled from 'styled-components';

const DashboardLayout = styled.div`
    height: 100vh;
    height: 100svh;
    display: grid;
    // justify-content: center;
    // align-items: center;
    grid-template-rows: auto 1fr auto; /* header(auto) main(1fr) footer(auto) */
`;

export default DashboardLayout;
