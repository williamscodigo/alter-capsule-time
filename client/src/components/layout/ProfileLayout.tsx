import styled from 'styled-components';

const ProfileLayout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto; /* header(auto) main(1fr) footer(auto) */
  scroll-behavior: smooth;

  /* Hiding the scrollbar but allowing scrolling */
  ::-webkit-scrollbar {
    display: none; /* Hides the scrollbar */
  }

  /* Optional: Hide the scrollbar for non-WebKit browsers */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
`;

const MainContent = styled.main`
  flex-grow: 1; /* Take up available space */
  overflow-y: auto; /* Allow scrolling if content overflows */
`;

export {ProfileLayout, MainContent};
