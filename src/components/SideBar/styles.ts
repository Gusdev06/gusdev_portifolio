import { MotionProps, motion } from 'framer-motion'
import styled, { css } from 'styled-components'

interface SideBarProps extends MotionProps {
  isOpen: boolean
}

const SideBarContainerStyleMobileOpen = `
  
  background-color: var(--gray-900);
  z-index: 4;
  flex-direction:column;
  align-items:center;
`
const SideBarContainerStyleMobileClosed = `
  
  z-index: 4;
  align-items: center;
  justify-content: center;
`

export const SidebarContainer = styled(motion.aside)<SideBarProps>`
  display: none;
  flex: 1;
  top: 0;
  right: 0;
  
  > ul {
    display: flex;
    list-style: none;
    gap: 2rem;
    margin-top: 5rem;
    flex-direction: column;
    padding: 0 2rem;
    width: 100%;
    
    > li {
      a {
        font-size: 1.2rem;
        color: var(--gray-100);
        display: block;
        padding: 1rem 0;
        border-bottom: 1px solid var(--gray-700);
        text-align: center;
        
        &:hover {
          color: var(--orange-300);
        }
        
        &::before {
          font-size: 1rem;
        }
      }
    }
  }

  @media (max-width: 768px) {
    position: fixed;
    display: flex;
    align-items: center;
    border-radius: ${(props) => (props.isOpen ? '0' : '8px')};
    
    ${(props) =>
      props.isOpen
        ? css`
            ${SideBarContainerStyleMobileOpen}
          `
        : css`
            ${SideBarContainerStyleMobileClosed}
          `}
  }

  @media (max-width: 480px) {
    > ul {
      margin-top: 4rem;
      gap: 1.5rem;
      padding: 0 1.5rem;
      
      > li {
        a {
          font-size: 1.1rem;
          padding: 0.75rem 0;
        }
      }
    }
  }
`
export const NavBarButton = styled.button`
  display: none;
  
  @media (max-width: 768px) {
    position: fixed;
    right: 2rem;
    top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    background-color: var(--gray-800);
    border: 1px solid var(--gray-700);
    border-radius: 4px;
    color: var(--gray-300);
    cursor: pointer;
    transition: var(--transition);
    z-index: 5;
    
    &:hover {
      color: var(--orange-300);
      background-color: var(--gray-700);
      border-color: var(--orange-300);
    }
    
    &:active {
      transform: scale(0.95);
    }
  }

  @media (max-width: 480px) {
    right: 1.5rem;
    top: 0.75rem;
    width: 2.25rem;
    height: 2.25rem;
    
    svg {
      width: 20px;
      height: 20px;
    }
  }
`
export const Overlay = styled(motion.div)`
  display: none;
  @media (max-width: 768px) {
    position: fixed;
    display: block;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`
