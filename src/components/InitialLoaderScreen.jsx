import styled from "styled-components";


const InitialLoaderScreen = () => {

    return (
        <LoadingContainer />         
    )
};

const LoadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: var(--bg-teal);
    opacity: 0.8;
`

export default InitialLoaderScreen;