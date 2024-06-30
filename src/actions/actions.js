export const AddMappingAction = (payload) => {
    return {
        type: "ADD_MAPPING",
        payload: {
            [payload["key"]]: payload["value"]
        }
      }
}

