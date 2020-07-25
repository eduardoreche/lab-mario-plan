export const createProject = (project) => (dispatch, getState, { getFirebase, getFirestore }) => {
    dispatch({
        type: 'CREATE_PROJECT',
        project,
    });
};
