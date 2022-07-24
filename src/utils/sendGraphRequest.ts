import { request, RequestDocument } from "graphql-request";
import { GRAPHQL_ENDPOINT } from "data/constants";
import { gql } from "graphql-request";
/**
 * @description sends a graph request using graphql-request library 
 * @param query gql`` query 
 * @param variables query variables in json fromat
 * @param headers optional request headers in json format
 */
export const sendGraphRequest = async (query: RequestDocument, variables: any, headers: any | undefined = undefined) => {

    
    return (await request(GRAPHQL_ENDPOINT, query, variables, headers))

}