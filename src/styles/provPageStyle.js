import styled from 'styled-components';

export default styled.div`
  display: grid;
  grid-row-gap: 1rem;
  .line-chart {
    position: relative;

    /* width: 60%; */
  }

  .pie-chart {
    position: relative;

    /* width: 40%; */
  }

  @media only screen and (min-width: 42em) {
    grid-template-columns: minmax(16em, 20em) minmax(30rem, 45.25rem);
    grid-column-gap: 1rem;
  }
`;
