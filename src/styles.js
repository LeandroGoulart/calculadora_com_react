import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #bbbbbb; 

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    
    background-color: #408080;
    width: 30%; 
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1); 
    padding: 50px; 
    border-radius: 15px; 
`;

export const Row = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #AED6F1; // cor de fundo mais suave
    margin-bottom: 15px; // aumenta o espaço entre as linhas
    padding: 10px; // adiciona espaço interno
    border-radius: 10px; // aumenta o arredondamento das bordas
`;