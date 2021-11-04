import { ArchetypeListItemContainer } from "./styles";
import { useAppState } from "./state/AppStateContext";
import { addArchIdentity, addArchLooking } from "./state/actions";

type ArchetypeListItemProps = {
    id: string
    name: string
    updateArchId: (id: string) => void
}

export const ArchetypeListItem = ({ id, name, updateArchId }: ArchetypeListItemProps) => {
    const blankTest = (e: string): boolean => {
        return e === '';
    }
    const { dispatch, identifyAs, lookingFor } = useAppState()
    const handleMouseOver = () => {
        updateArchId(id)
    }
    const handleArchetypesChosenFilling = () => {
        if (identifyAs.some(blankTest)) {
            let idx = identifyAs.findIndex(blankTest)
            dispatch(addArchIdentity(idx, name))
        } else {
            let idx = lookingFor.findIndex(blankTest)
            dispatch(addArchLooking(idx, name))
        }
    }
    return (
        <ArchetypeListItemContainer onMouseOver={handleMouseOver} onClick={handleArchetypesChosenFilling}>{name}</ArchetypeListItemContainer>
    )
}
