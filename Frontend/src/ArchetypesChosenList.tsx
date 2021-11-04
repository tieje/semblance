import { ArchetypesChosenColumnContainer, ArchetypesChosenListContainer, ArchetypesChosenColumnHeaderContainer, ArchetypesChosenColumnHeader, ArchetypesChosenArchetypesListContainer, ArchetypesChosenArchetypeNameContainer, ArchetypesListItemDelete, ArchetypesChosenButtonCombiner } from "./styles";
import { useAppState } from "./state/AppStateContext"
import { removeArchIdentity, removeArchLooking } from "./state/actions";

type ArchetypesChosenColumnProps = {
	header: string
	ListType: 'identity' | 'looking'
}

type ArchetypesChosenArchetypeNameProps = {
	arch_name: string
}

type ArchetypesChosenArchetypesListProps = {
	ListType: 'identity' | 'looking'
}

type DeleteProps = {
	index: number
	type: string
}
export const ArchetypesChosenList = () => {
	return (
		<ArchetypesChosenListContainer>
			<ArchetypesChosenColumn
				key={'identity'}
				header = {'I identify closely with...'}
				ListType = {'identity'}
			/>
			<ArchetypesChosenColumn
				key={'looking'}
				header = {'I am looking for a...'}
				ListType = {'looking'}
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
				<ArchetypesChosenArchetypesList key={Math.floor(Math.random() * 100)} ListType = {ListType}/>
			</ArchetypesChosenColumnHeaderContainer>
		</ArchetypesChosenColumnContainer>
	)
}
const ArchetypesChosenArchetypesList = ({ ListType }: ArchetypesChosenArchetypesListProps) => {
	const { identifyAs, lookingFor } = useAppState()
	const whichList = (e: string):string[] => {
		if (e === 'identity') {
			return identifyAs;
		}
		return lookingFor;
	}
	const thisList = whichList(ListType)

	return (
		<ArchetypesChosenArchetypesListContainer>
			{thisList.map((item: string, idx: number) => (
				<ArchetypesChosenButtonCombiner>
					<ArchetypesChosenArchetypeName key={idx + Math.floor(Math.random() * 100)} arch_name = { item } />
					<DeleteButton key={idx + Math.floor(Math.random() * 100)} index={idx} type={ListType}/>
				</ArchetypesChosenButtonCombiner>
			))}
		</ArchetypesChosenArchetypesListContainer>
	)
}

const ArchetypesChosenArchetypeName = ({ arch_name }: ArchetypesChosenArchetypeNameProps) => {
	return (
		<ArchetypesChosenArchetypeNameContainer>
			{ arch_name }
		</ArchetypesChosenArchetypeNameContainer>
	)
}

const DeleteButton = ({index, type}: DeleteProps) => {
    const { dispatch } = useAppState()
	const delete_title = 'X'
	const handleDelete = () => {
		if (type === 'identity') {
			dispatch(removeArchIdentity(index))
		} else {
			dispatch(removeArchLooking(index))
		}
	}
	return (
		<ArchetypesListItemDelete onClick={handleDelete}>
			{delete_title}
		</ArchetypesListItemDelete>
	)
}
