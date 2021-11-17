import { makeVar } from "@apollo/client";
// import { InMemoryCache, makeVar } from "@apollo/client";
import { Archetype } from './commonTypes';
export const archetypeHoveredVar = makeVar<Archetype>({
    name:'',
    poem:'',
});
// https://www.apollographql.com/docs/react/local-state/managing-state-with-field-policies/
