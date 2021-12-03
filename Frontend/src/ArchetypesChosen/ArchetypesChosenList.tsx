import { useReactiveVar } from "@apollo/client";
import { chosenArchetypesVar } from "../cache";
import { nanoid } from "nanoid";
import { ArchetypesChosenColumnContainer, ArchetypesChosenListContainer, ArchetypesChosenColumnHeaderContainer, ArchetypesChosenColumnHeader, ArchetypesChosenArchetypesListContainer, ArchetypesChosenArchetypeNameContainer, ArchetypesListItemDelete, ArchetypesChosenButtonCombiner } from "./styles";
import { ArchetypesChosenArchetypeNameProps, ArchetypesChosenColumnProps, ArchetypesChosenArchetypesListProps, DeleteProps } from "./types";

export const ArchetypesChosenList = () => {
    return (
        <ArchetypesChosenListContainer>
            <ArchetypesChosenColumn
                key={nanoid()}
                header={'I identify closely with...'}
                ListType={'identity'}
            />
            <ArchetypesChosenColumn
                key={nanoid()}
                header={'I am looking for a...'}
                ListType={'looking'}
            />
        </ArchetypesChosenListContainer>
    )
}
const ArchetypesChosenColumn = ({ header, ListType }: ArchetypesChosenColumnProps) => {
    return (
        <ArchetypesChosenColumnContainer>
            <ArchetypesChosenColumnHeaderContainer>
                <ArchetypesChosenColumnHeader>
                    {header}
                </ArchetypesChosenColumnHeader>
                <ArchetypesChosenArchetypesList key={nanoid()} ListType={ListType} />
            </ArchetypesChosenColumnHeaderContainer>
        </ArchetypesChosenColumnContainer>
    )
}
const ArchetypesChosenArchetypesList = ({ ListType }: ArchetypesChosenArchetypesListProps) => {
    const chosenArchetypes = useReactiveVar(chosenArchetypesVar)
    const whichList = (e: string): string[] => {
        if (e === 'identity') {
            return chosenArchetypes.identifyAs;
        }
        return chosenArchetypes.lookingFor;
    }
    const thisList = whichList(ListType)
    return (
        <ArchetypesChosenArchetypesListContainer>
            {thisList.map((item: string, idx: number) => (
                <ArchetypesChosenButtonCombiner>
                    <ArchetypesChosenArchetypeName key={nanoid()} arch_name={item} />
                    <DeleteButton key={nanoid()} index={idx} type={ListType} />
                </ArchetypesChosenButtonCombiner>
            ))}
        </ArchetypesChosenArchetypesListContainer>
    )
}

const ArchetypesChosenArchetypeName = ({ arch_name }: ArchetypesChosenArchetypeNameProps) => {
    return (
        <ArchetypesChosenArchetypeNameContainer key={nanoid()}>
            {arch_name}
        </ArchetypesChosenArchetypeNameContainer>
    )
}

const DeleteButton = ({ index, type }: DeleteProps) => {
    const chosenArchetypes = useReactiveVar(chosenArchetypesVar)
    const delete_title = 'X'
    const handleDelete = () => {
        let newState = { ...chosenArchetypes }
        if (type === 'identity') {
            newState.identifyAs[index] = ''
        } else {
            newState.lookingFor[index] = ''
        }
        chosenArchetypesVar(newState)
    }
    return (
        <ArchetypesListItemDelete key={nanoid()} onClick={handleDelete}>
            {delete_title}
        </ArchetypesListItemDelete>
    )
}
