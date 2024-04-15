import styled from "styled-components";


export const Container = styled.section`
  margin-top: 15rem;
  
  h2{
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }
  .projects{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr)); /* Adjust the minimum width as needed */
    grid-template-rows: auto;
    gap: 2rem;
    padding: 1rem;
    overflow: hidden;

    .project{
      padding: 3rem 1.8rem;
      background-color: #2b2b2b;
      border-radius: 1.2rem;
      transition: 0.25s;
      display: flex;
      flex-direction: column;
      height: 100%;
      color: #FFF;
      &:hover{
        transform: translateY(-5px);
        background-color: var(--iris);
      }

      header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--blue);
        margin-bottom: 3.6rem;
        .project-links{
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        a > img {
          width: 5.0rem;
        }
      }
      
      h3{
        margin-bottom: 2rem;
      }
 
      p{
        letter-spacing: 0.12rem;
        margin-bottom: 2rem;
        a{
          color: #FFFF;
          border-bottom: 1px solid var(--yellow);
          transition: color 0.25s;
          &:hover{
            color: var(--yellow);
          }
        }
      }

      footer{
        margin-top: auto;
        .tech-list{
          display: flex;
          align-items: center;
          gap: 2rem;
          font-size: 1.4rem;
          opacity: 0.6;
        }
      }

    }
  }
.categories {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 2rem;

    button {
      padding: 0.5rem 1rem;
      font-size: 1.6rem;
      border: none;
      background-color: transparent;
      cursor: pointer;
      transition: all 0.3s ease;
      color:grey;

      &.active {
        font-weight: bold;
        color: #23ce6b;
      }

      &:hover {
        color: #23ce6b;
      }
    }
  }



  @media (max-width: 1040px) {
    .projects {
      
      grid-template-columns: repeat(auto-fill, minmax(50%, 1fr)); /* Adjust the minimum width as needed */
      font-size: 1.6rem;

    }
  }

  @media (max-width: 740px) {
    .projects {
      grid-template-columns: 1fr;
      font-size: 1rem;
    }
  }
`