import { InMemoryCache, makeVar } from "@apollo/client";
import { Archetype, ChosenArchetypes } from './commonTypes';
export const archetypeHoveredVar = makeVar<Archetype>({
    name:'',
    poem:'',
});
export const chosenArchetypesVar = makeVar<ChosenArchetypes>({
    identifyAs: ['', '', ''],
    lookingFor: ['', '', '']
})
const initialLatLng: google.maps.LatLngLiteral = {
    lat: 41.31491320423653,
    lng:  -72.90545411168635
}
export const markerPositionVar = makeVar(initialLatLng)
export const cache = new InMemoryCache()
/*
// This is for later when I'll need to store user profile data in the user's local cache
export const cache = new InMemoryCache({
    typePolicies: {
        ChoArchetypes: {
            fields: {
                chosenArchs: {
                    read(newArch) {
                        if {}
                    }
                }
            }
        }
    }
})
*/