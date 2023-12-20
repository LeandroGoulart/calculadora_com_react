import styled from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 5px 5px;
    background-color: #00A3E04F;
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: 6px;
    color: #222;
    font-size: 20px;
    font-weight: 500;
    position: relative;
    flex: 1;
    transition: background-color 0.3s ease;
    margin: 5px;
    border-radius: 10px;
    
    &:hover {
        background-color: #AED6F1;
        color: #F8F9F9;
    }
`

export const ZeroButton = styled(ButtonContainer)`
    flex: 2.4;
    height:10px;
    display: block;

`;

export const OperationButton = styled(ButtonContainer)`
    background-color: #87c6da;
    
    &:hover {
        background-color: #39f; 
    }
`;