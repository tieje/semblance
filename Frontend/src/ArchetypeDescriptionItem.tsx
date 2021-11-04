import { Archetype } from "./state/appStateReducer"
import { ArchetypeDescriptionItemContainer, ArchetypeDescriptionName, ArchetypeDescriptionPayload } from "./styles"

type ArchetypeDescriptionItemProps = {
	arch_object: Archetype | undefined
}

export const ArchetypeDescriptionItem = ({ arch_object }: ArchetypeDescriptionItemProps) => {
	return (
		<ArchetypeDescriptionItemContainer>
			<ArchetypeDescriptionName>
				<h4>{arch_object?.name}</h4>
			</ArchetypeDescriptionName>
			<ArchetypeDescriptionPayload>
				{arch_object?.desc}
			</ArchetypeDescriptionPayload>
		</ArchetypeDescriptionItemContainer>
	)
}
