import { gql, useQuery } from "@apollo/client"
import { nanoid } from "nanoid"
import { archetypeHoveredVar, chosenArchetypesVar } from "./cache"
import { Archetype } from "./commonTypes"
import styled from "styled-components"
const ArchetypeListContainer = styled.div`
    background-color: #3E4046;
    margin: 1rem;
    height: 85%;
    padding 1rem;
    // width: 90vw;
`
const ArchetypeListItemContainer = styled.div`
    background-color: #3E4046;
    color: #FFEDE7;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    height: 5vh;
    width: 8vw;
    border: 1px solid #FFEDE7;
`
const ArchetypesQuery = gql`
  query {
    archetypes {
      name
      poem
    }
  }
`
export const ArchetypesList = () => {
    const { loading, error, data } = useQuery(ArchetypesQuery)
    if (loading) { console.log('loading archetypes list') }
    if (error) { console.log('error from archetypes list') }
    if (data) {
        return (
            <ArchetypeListContainer>
                {data.archetypes.map((item: Archetype) => {
                    return (<ArchetypeListItem key={nanoid()} name={item.name} poem={item.poem} />
                    )
                })}
            </ArchetypeListContainer>
        );
    } else {
        return (null)
    }
}
const ArchetypeListItem = ({ name, poem }: Archetype) => {
    const handleMouseOver = () => {
        archetypeHoveredVar({
            name: name,
            poem: poem,
        })
        //console.log(archetypeHoveredVar().name)
    }
    const blankTest = (e: string): boolean => {
        return e === '';
    }
    const handleArchetypeChosen = () => {
        let newState = {...chosenArchetypesVar()}
        let blank_Iden_Index = newState.identifyAs.findIndex(blankTest)
        if (blank_Iden_Index >= 0) {
            newState.identifyAs[blank_Iden_Index] = name
            chosenArchetypesVar(newState)
        } else {
            let blank_Look_Index = newState.lookingFor.findIndex(blankTest)
            if (blank_Look_Index >= 0) {
                newState.lookingFor[blank_Look_Index] = name
                chosenArchetypesVar(newState)
            }
        }
    }
    return (
        <ArchetypeListItemContainer
            onMouseOver={handleMouseOver}
            onClick={handleArchetypeChosen}
        >
            {name}
        </ArchetypeListItemContainer>
    )
}
