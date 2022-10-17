import styled from "styled-components";

const CardStyle = styled.div`
    display: grid;
    grid-column: 3;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: 120px 120px;
`;
const CardNumber = styled.button`
    border: 0.5px solid #CDCDCD;
    background-color: inherit;
    border-radius: 8px;
    margin: 15px;
    width: 80px;
    height: 104px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 24px;
`;

export {
    CardStyle,
    CardNumber,
};