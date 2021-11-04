import { createContext, useContext, FC, Dispatch, useReducer } from "react"
import { appStateReducer, Archetype, AppState } from './appStateReducer'
import { Action } from './actions'

type AppStateContextProps = {
    hoverItemId: string
    list: Archetype[]
    getItemByListId(id: string): Archetype | undefined
    identifyAs: string[]
    lookingFor: string[]
    dispatch: Dispatch<Action>
    markerPosition: google.maps.LatLngLiteral
}

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps)
const initialLatLng: google.maps.LatLngLiteral = {
    lat: 41.31491320423653,
    lng:  -72.90545411168635
}
export const appData: AppState = {
    hoverItemId: '',
    list: [
        {
            id: '1',
            name: 'Warrior',
            desc: `Half a league, half a league,
            Half a league onward,
            All in the valley of Death
               Rode the six hundred.
            “Forward, the Light Brigade!
            Charge for the guns!” they said.
            Into the valley of Death
               Rode the six hundred.`,
        },
        {
            id: '2',
            name: 'Leader',
            desc: 'What do you do when there is an evil you cannot defeat by just means? Do you stain your hands with evil to destroy evil? Or do you remain steadfastly just and righteous even if it means surrendering to evil?',
        },
        {
            id: '3',
            name: 'Steward',
            desc: `It is calling for compassion.
            It is calling for responsible hands.
            It is calling for stewards,
            stewards to see and listen,
            stewards to learn and act,
            stewards to protect and love.`
        },
    ],
    identifyAs: ['', '', ''],
    lookingFor: ['', '', ''],
    markerPosition: initialLatLng
}
//https://www.poemhunter.com/poem/the-earth-s-call-for-responsible-stewards/
export const AppStateProvider: FC = ({ children }) => {
    const [state, dispatch] = useReducer(appStateReducer, appData)
    const { hoverItemId, list, identifyAs, lookingFor, markerPosition } = state
    const getItemByListId = (id: string) => {
        const arch_object = list.find((item) => item.id === id)
        return (arch_object)
    }
    return (
        <AppStateContext.Provider value={{ hoverItemId, list, getItemByListId, identifyAs, lookingFor, dispatch, markerPosition }}>
            {children}
        </AppStateContext.Provider>
    )
}

export const useAppState = () => {
    return useContext(AppStateContext)
}
