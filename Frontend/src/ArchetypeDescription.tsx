import { useReactiveVar } from "@apollo/client"
import { archetypeHoveredVar } from "./cache"
import styled from "styled-components"
const ArchetypesDescriptionContainer = styled.div`
    display: flex;
    background-color: #3E4046;
    flex-grow: 1;
    // margin: 3px;
    // margin-bottom: 0;
    padding: 3px;
    height: 40vh;
    width: 65vw;
`
const ArchetypeDescriptionItemContainer = styled.div`
    display: flex;
    background-color: #3E4046;
    flex-grow: 1;
    // margin: 10px;
    padding: 10px;
    flex-direction: column;
    height: 25vh;
    width: 30vw;
`
const ArchetypeDescriptionName = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #3E4046;
    color: #FFEDE7;
    // margin: 1rem;
    padding .8rem;
    height: 3vh;

`
const ArchetypeDescriptionPayload = styled.div`
    display: flex;
    border: 1px solid #FD5C06;
    color: #FFEDE7;
    flex-grow: 1;
    margin: 10px;
    padding 10px;
    font-size: 13px;
    overflow-wrap: break-word;
    height: 5vh;
`
export const ArchetypeDescription = () => {
	return (
		<ArchetypesDescriptionContainer>
			<ArchetypeDescriptionItem/>
		</ArchetypesDescriptionContainer>
	)
}
const ArchetypeDescriptionItem = () => {
	const archetypeHovered = useReactiveVar(archetypeHoveredVar)
	return (
		<ArchetypeDescriptionItemContainer>
			<ArchetypeDescriptionName>
				<h4>{archetypeHovered.name}</h4>
			</ArchetypeDescriptionName>
			<ArchetypeDescriptionPayload>
				{archetypeHovered.poem}
			</ArchetypeDescriptionPayload>
		</ArchetypeDescriptionItemContainer>
	)
}
