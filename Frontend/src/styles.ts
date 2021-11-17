import styled from "styled-components"

export const AppContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: auto;
    padding: 1rem;
    background-color: #3E4046;
    margin: 0;
    flex-grow: 1;
`

export const ColumnContainer = styled.div`
    display: flex;
    background-color: #3E4046;
    border-radius: 10px;
    border: 1px solid #FFEDE7;
    height: 100vh;
    flex-grow: 1;
    margin: 0.5rem;
    padding: 1rem;
    max-width: 100%;
    justify-content:center;
`
export const ArchetypeContainer = styled.div`
    width: 80vw;
`

export const ArchetypeHorizontalContainer = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #3E4046;
    height: 100%;
    width: 30vw;
    flex-grow: 1;
`

export const ArchetypesChosen = styled.div`
    display: flex;
    // background-color: white;
    flex-direction: column;
    flex-grow: 1;
    height: 50vh;
    width: 80vw;
    
`

export const ArchetypesChosenListContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow; 1;
    background-color: #3E4046;
    // border: 1px solid black;
    padding: 3px;
    margin: 3px;
    height: 20vh;
`
export const ArchetypesChosenColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #3E4046;
    flex-grow: 1;
    padding: 3px;
    margin: 3px;
    height: 8vh;
`
export const ArchetypesChosenColumnHeaderContainer = styled.div`
    display: flex;
    background-color: #3E4046;
    align-items: center;
    flex-grow: 1;
    // border: 1px solid black;
    padding: 3px;
    height: 7vh;
`
export const ArchetypesChosenColumnHeader = styled.div`
    display: flex;
    background-color: ##E4046;
    color: #FFEDE7;
    flex-grow: 1;
    font-size: 12px;
    // border: 1px solid black;
    padding: .5rem;
    // margin: 1rem;
    overflow-wrap: break-word;
    width: 3vw;
    height: 7vh;
    // align-items: center;
    // justify-content: center;
`
export const ArchetypesChosenArchetypesListContainer = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #3E4046;
    font-size: 12px;
    flex-grow: 8;
    // border: 1px solid #FFEDE7;
    padding: 3px;
    margin: 3px;
`
export const ArchetypesChosenArchetypeNameContainer = styled.div`
    display: flex;
    background-color: #3E046;
    color: #FFEDE7;
    flex-grow: 4;
    border: 1px solid #FFEDE7;
    padding: 3px;
    margin: 3px;
    
`
export const ArchetypesListItemDelete = styled.button`
    display: flex;
    background-color: #7A74E9;
    flex-grow: 1;
    color: #FFEDE7;
    // border: 1px solid black;
    padding: 3px;
    margin: 3px;
    height: 3vh;
    justify-content: center;
    align-items: center;
`
export const ArchetypesChosenButtonCombiner = styled.div`
    display: flex;
    background-color: #3E4046;
    flex-grow: 1;
    padding: 3px;
    margin: 3px;
`
export const MapProximityGenderSettingsContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #3E4046;
    flex-grow: 1;
    border: 1px solid #FFED7;
    padding: 1rem;
    margin: .8rem;
    height: 90vh;
    width: 60vw;
`
export const MapContainer = styled.div`
    display: flex;
    background-color: #3E4046;
    flex-grow: 1;
    border: 1px solid #FFEDE7;
    padding: 1rem;
    margin: 1rem;
`
export const ResultsChatContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #3E4046;
    flex-grow: 1;
    padding: 1rem;
    margin: 1rem;
    height: 60vh;
    width: 70vw;
`
export const ResultsContainer = styled.div`
    display: flex;
    background-color: #3E4046;
    flex-grow: 1;
    border: 1px solid #FFED7;
`
// export const ChatContainer = styled.div`
//     display: flex;
//     background-color: cyan;
//     flex-grow: 1;
//     border: 1px solid black;
//     padding: 1rem;
//     margin: 1rem;
//     height: 15vh;
// 
export const LoadingIcon = styled.div`
    display: flex;
    background-color: cyan;
    flex-grow: 1;
    border: 1px solid black;
    padding: 1rem;
    margin: 1rem;
`
export const LoadingError = styled.div`
    display: flex;
    background-color: red;
    flex-grow: 1;
    border: 1px solid black;
    padding: 1rem;
    margin: 1rem;
`
export const MapChatSecondContainer =styled.div`
    display: flex;
    flex-direction: column;
    background-color: #3E4046;
    flex-grow: 1;
    margin: 1rem;
    height: 55vh;
    width: 40vw;
    font-family: 'Space Mono', monospace;
    `