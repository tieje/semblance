import { AppContainer, ArchetypeHorizontalContainer, ArchetypesChosen, MapContainer, MapProximityGenderSettingsContainer, ResultsChatContainer, ResultsContainer, MapChatSecondContainer, ArchetypeContainer } from './styles'
import { ArchetypesList } from './ArchetypesList';
import { ArchetypesChosenList } from './ArchetypesChosenList'
import { Column } from './Column';
// state
import { useAppState } from './state/AppStateContext';
import { ArchetypeDescription } from './ArchetypeDescription';
import { useState } from 'react'
import { Map } from './GoogleMap';
import GenderSelect from './Gender';
import GenderStyleContainer from './Gender';
import ProxStyleContainer from './Proximity';
import Proximity from './Proximity';
import ChatStyleContainer from './Chat';
import Chat from './Chat';
import Results from './Results'; 


export const App = () => {
    const { hoverItemId } = useAppState()
    const [hoverId, setHoverId] = useState(hoverItemId)
    const updateArchId = (id: string): void => {
        setHoverId(id)
    }
    return (
        <AppContainer>
            <Column>
            <ArchetypeContainer>
                <ArchetypeHorizontalContainer>
                    <ArchetypesList key={Math.floor(Math.random() * 100)} updateArchId={updateArchId} />
                    <ArchetypesChosen>
                        <ArchetypeDescription id={hoverId} />
                        <ArchetypesChosenList />
                    </ArchetypesChosen>
                </ArchetypeHorizontalContainer>
            </ArchetypeContainer>
            </Column>
            <Column>
                <MapProximityGenderSettingsContainer>
                    <MapChatSecondContainer>
                    <MapContainer>
                        <Map />
                    </MapContainer>
                    <GenderStyleContainer>
                        <GenderSelect />
                    </GenderStyleContainer>
                    <ProxStyleContainer>
                        <Proximity />
                  </ProxStyleContainer>
                  </MapChatSecondContainer>
                </MapProximityGenderSettingsContainer>
            </Column>
            <Column>
                <ResultsChatContainer>
                    <ResultsContainer>
                        <Results />
                    </ResultsContainer>
                    <ResultsContainer>
                    <ChatStyleContainer>
                    <Chat />
                    </ChatStyleContainer>
                    </ResultsContainer>
                </ResultsChatContainer>
            </Column>
        </AppContainer>
    );
}
