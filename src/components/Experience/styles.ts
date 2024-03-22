import styled from "styled-components";

export const Container = styled.section`
  margin-top: 5rem;

  h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  .timeline {
    display: flex;
    flex-direction: column;
    gap: 3rem;

    .event {
      position: relative;
      padding: 2rem;
      background-color: grey;
      border-radius: 0.5rem;
      box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease-in-out;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
      }

      .event-content {
        position: relative;

        .period {
          font-weight: bold;
          margin-bottom: 0.5rem;
        }

        .title {
          font-size: 1.8rem;
          font-weight: bold;
          color: #333;
          margin-bottom: 0.5rem;
        }

        p {
          margin-bottom: 1rem;
          line-height: 1.5;
        }

        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;

          li {
            background-color: #e0e0e0;
            padding: 0.5rem 1rem;
            border-radius: 0.3rem;
            font-size: 1.4rem;
            color: #000;
          }
        }
      }
    }
  }
`;
