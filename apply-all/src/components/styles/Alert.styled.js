import styled from 'styled-components'

export const StyledAlert = styled.div`
  position: absolute;
  bottom: 15px;
  left: 15px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 25px;
  opacity: 90%;
  
  .alert-box {
    position: relative;
    width: 350px;
    height: 80px;
    cursor: pointer;
    background: #fff;
    box-shadow: 10px 10px 12px rgba(0,0,0,.2);;
    transition: 0.3s ease-in-out;
    padding: 0 1rem;
  }

  .alert-content {
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
  }
  .alert-icon {
    position: relative;
    display: flex;
    min-width: 80px;
    align-items: center;
    justify-content: center;
    font-size: 40px;
  }
  .text h3{
    text-transform: capitalize;
    font-weight: bold;
  }
  .alert-box::before {
    content: "";
    position: absolute;
    width: 10px;
    height: 100%;
    top: 0;
    left: 0;
    transition: 0.4s ease-in-out;
  }
  .success::before {
    content: "";
    background: green !important;
  }
  .success .alert-icon{
    color: green;
  }
  .warning::before {
    content: "";
    background: yellow !important;
  }
  .warning .alert-icon{
    color: yellow;
  }
  .error::before {
    content: "";
    background: red !important;
  }
  .error .alert-icon{
    color: red;
  }

  @media only screen and (max-width: 768px) {
    position: absolute;
    top: 15px;
    right: 15px;
  }
  
`