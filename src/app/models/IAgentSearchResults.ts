export interface IAgentSearchResults {
    Results: IAgentSearchResult[]
}

export interface IAgentSearchResult {
    Id: string;
    Name: string;
    SecondaryName: string;
    ImageUrl: string;
    AgentType: string;
    // other attributes will go here.
}