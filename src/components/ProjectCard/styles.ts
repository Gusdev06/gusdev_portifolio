import styled from "styled-components";

export const ProjectCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  position: relative;
  min-height: 300px;
  align-items: center;

  @media (max-width: 1024px) {
    min-height: 280px;
  }

  @media (max-width: 768px) {
    min-height: 250px;
    grid-template-columns: 1fr;
  }

  @media (max-width: 480px) {
    min-height: 220px;
  }
`;

export const ProjectCardTextContainer = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  grid-column: 1 / 8;
  grid-row: 1;
  justify-content: center;

  > span,
  > a,
  > div:nth-child(3),
  > ul {
    position: relative;
    z-index: 3;
  }

  > span {
    color: var(--orange-300);
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }

  > a {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--gray-100);
    margin-bottom: 1rem;
    text-decoration: none;
    transition: var(--transition);
    
    &:hover {
      color: var(--orange-300);
    }
  }

  > div:nth-child(3) {
    margin-bottom: 1.5rem;
    background-color: var(--gray-800);
    padding: 1.5rem;
    border-radius: 8px;
    color: var(--gray-300);
    line-height: 1.6;
    box-shadow:
      0 10px 15px -3px rgb(0 0 0 / 10%),
      0 4px 6px -4px rgb(0 0 0 / 10%);
    border: 1px solid var(--gray-700);
  }

  > ul {
    width: 100%;
    display: flex;
    list-style: none;
    gap: 1rem;
    color: var(--gray-400);
    margin-bottom: 1rem;
    flex-wrap: wrap;
    font-size: 0.9rem;
    
    li {
      white-space: nowrap;
    }
  }

  div:nth-child(5) {
    display: flex;
    gap: 0.5rem;
    
    > a {
      display: inline-flex;
      padding: 8px;
      text-decoration: none;
      cursor: pointer;
      color: var(--gray-300);
      transition: var(--transition);
      border-radius: 4px;
      
      &:hover {
        color: var(--orange-300);
        background-color: var(--gray-800);
      }
    }
  }

  @media (max-width: 1024px) {
    grid-column: 1 / 7;
    
    > a {
      font-size: 1.3rem;
    }
    
    > div:nth-child(3) {
      padding: 1.25rem;
      font-size: 0.95rem;
    }
    
    > ul {
      font-size: 0.85rem;
      gap: 0.75rem;
    }
  }

  @media (max-width: 768px) {
    grid-area: 1/1/-1/-1;
    padding: 2rem;
    background-color: rgba(18, 18, 20, 0.95);
    border-radius: 8px;
    backdrop-filter: blur(10px);
    align-items: center;
    text-align: center;
    
    > a {
      font-size: 1.4rem;
      color: var(--gray-100);
    }
    
    > div:nth-child(3) {
      background-color: transparent;
      padding: 0;
      box-shadow: none;
      border: none;
      font-size: 1rem;
    }
    
    > ul {
      justify-content: center;
      font-size: 0.9rem;
    }
    
    div:nth-child(5) {
      justify-content: center;
    }
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
    
    > span {
      font-size: 0.85rem;
    }
    
    > a {
      font-size: 1.2rem;
      margin-bottom: 0.75rem;
    }
    
    > div:nth-child(3) {
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }
    
    > ul {
      font-size: 0.8rem;
      gap: 0.5rem;
      margin-bottom: 0.75rem;
    }
  }
`;

export const ProjectCardImgContainer = styled.div`
  grid-area: 1 / 8 / -1 / -1;
  position: relative;
  border-radius: 8px;
  height: 100%;
  z-index: 0;
  overflow: hidden;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 8px;
    transition: var(--transition);

  }

  > a {
    position: absolute;
    display: block;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    border-radius: 8px;
    cursor: pointer;

    
    

  }

  &:hover {
    > img {
      filter: grayscale(0%) contrast(1);
      transform: scale(1.05);
    }
  }

  @media (max-width: 1024px) {
    grid-area: 1 / 7 / -1 / -1;
  }

  @media (max-width: 768px) {
    grid-area: 1/1/-1/-1;
    z-index: -1;
    
    > img {
      filter: grayscale(80%) contrast(1.1) brightness(0.6);
    }
    
    > a {
      background-color: rgba(0, 0, 0, 0.4);
      
      &:hover {
        background-color: rgba(0, 0, 0, 0.2);
      }
    }
    
    &:hover {
      > img {
        transform: none;
        filter: grayscale(80%) contrast(1.1) brightness(0.6);
      }
    }
  }

  @media (max-width: 480px) {
    > img {
      filter: grayscale(90%) contrast(1.1) brightness(0.5);
    }
    
    > a {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
`;
