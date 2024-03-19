import { gql } from "@apollo/client";

export const PREV_WARMUPS = gql`
    query prevWarmups {
        prevWarmups {
            entries {
                hourType
                inputmessage
            }
        }
    }
`;

// export default USER_Profile = gql``;