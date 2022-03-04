import styled from "styled-components";
import { nanoid } from "nanoid";

export const ResultsContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #3E4046;
    flex-grow: 1;
    border: 1px solid #FFEDE7;
    border-radius: 10px;
    // padding: 10px;
    // margin: 1rem;
    height: 35vh;
    width: 70vw;
    font-family: 'Space Mono', monospace;
`
const ResultItemContainer = styled.div`
    display: flex;
    background-color: #3E4046;
    color: #FFEDE7;
    flex-grow: 1;
    border: 1px solid #9BD4F4;
    padding: 2px;
    margin: .3rem 1rem;
    height: 3vh;
    font-family: 'Space Mono', monospace;
`
const ResultsHeader = styled.div`
    display: flex;
    background-color: #3E4046;
    flex-grow: 1;
    color: #FFEDE7;
    border: 1px solid #9BD4F4;
    padding: 1rem;
    margin: 1rem;
    height: 3vh;
    width: 20vw;
    font-family: 'Space Mono', monospace;
`
const ResultsLoadMore = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    // background-color: white;
    flex-grow: 1;
    // border: 1px solid black;
    // padding: 10px;
    margin: 1rem;
    height: 1vh;
    width: 20vw;
    font-family: 'Space Mono', monospace;
`
const ResultsLoadMorePrev = styled.div`
    display: flex;
    background-color: #3E4046;
    justify-content: flex-end;
    flex-grow: 1;
    // border: 1px solid black;
    // padding: 10px;
    // margin: 10px;
    height: 2vh;
    width: 1vw;
    font-family: 'Space Mono', monospace;
`
const ResultsLoadMoreAfter = styled.div`
    display: flex;
    justify-content: flex-start;
    background-color: #3E4046;
    flex-grow: 1;
    // border: 1px solid black;
    // padding: 1rem;
    // margin: 1rem;
    // flex-direction: row-reverse;
    font-family: 'Space Mono', monospace;
    height: 2vh;
    width: 1vw;
`

const state = [
    {
        id: '1',
        username: 'keysmusicians',
        identifyAs: ['1', '2', '3'],
        lookingFor: ['1', '2', '3'],
        proximity: 5,
        gender: 'male'
    },
    {
        id: '2',
        username: 'nels',
        identifyAs: ['1', '2', '3'],
        lookingFor: ['1', '2', '3'],
        proximity: 5,
        gender: 'non-binary'
    },
    {
        id: '3',
        username: 'krydon',
        identifyAs: ['1', '2', '3'],
        lookingFor: ['1', '2', '3'],
        proximity: 5,
        gender: 'male'
    },
    {},
    {}
]
type ResultItemProps = {
    id?: string,
    username?: string,
    identifyAs?: string[],
    lookingFor?: string[],
    proximity?: number,
    gender?: string,
}

const Results = () => {
    return (
        <ResultsContainer>
            <ResultsHeader>
                Results Header
            </ResultsHeader>
            {state.map((item: ResultItemProps) => {
                return (<ResultItem key={nanoid()} id={item.id} username={item.username} />
                )
            })}
            <ResultsLoadMore>
                <ResultsLoadMorePrev>
                    <button>&lt;</button>
                </ResultsLoadMorePrev>
                <ResultsLoadMoreAfter>
                    <button>&gt;</button>
                </ResultsLoadMoreAfter>
            </ResultsLoadMore>
        </ResultsContainer>
    )
}

const ResultItem = ({ id, username }: ResultItemProps) => {
    return (

        <ResultItemContainer>
            {username}
        </ResultItemContainer>

    )
}
export default Results;
