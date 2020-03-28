export default function(oldState, updatedProperties) {
    return {
        ...oldState,
        ...updatedProperties
    };
}
