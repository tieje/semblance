import { AppContainer, ArchetypeHorizontalContainer, ArchetypesChosen, MapContainer, MapProximityGenderSettingsContainer, ResultsChatContainer, ResultsContainer, MapChatSecondContainer, ArchetypeContainer } from './styles'
import { ArchetypesList } from './ArchetypesList';
import { ArchetypesChosenList } from './ArchetypesChosenList'
import { Column } from './Column';
import { ArchetypeDescription } from './ArchetypeDescription';
import { Map } from './GoogleMap';
import GenderSelect from './Gender';
import GenderStyleContainer from './Gender';
import ProxStyleContainer from './Proximity';
import Proximity from './Proximity';
import ChatStyleContainer from './Chat';
import Chat from './Chat';
import Results from './Results';

export const App = () => {
   return (
       <AppContainer>
            <Column>
            <ArchetypeContainer>
                <ArchetypeHorizontalContainer>
                    <ArchetypesList/>
                    <ArchetypesChosen>
                        <ArchetypeDescription/>
                        <ArchetypesChosenList/>
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
