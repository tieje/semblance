import { gql, useQuery } from "@apollo/client"
import { nanoid } from "nanoid"
import { archetypeHoveredVar } from "./cache"
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
    return (
        <ArchetypeListItemContainer
            onMouseOver={handleMouseOver}
        // onClick={handleArchetypesChosenFilling}
        >
            {name}
        </ArchetypeListItemContainer>
    )
}
