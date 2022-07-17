import { ContentState } from "./content-state.enum";

export interface PortalObservable {
    state: ContentState, 
    data?: any;
    error?: any;
}