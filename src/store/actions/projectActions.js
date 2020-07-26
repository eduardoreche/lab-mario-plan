export const createProject = (project) => async (dispatch, getState, { getFirebase, getFirestore }) => {
    try {
        const savedProject = await getFirestore().add(
            {collection: 'projects'},
            {
                ...project,
                authorFirstName: 'Eduardo',
                authorLastName: 'Reche',
                authorId: 1234,
                createdAt: new Date(),
            }
        );
    
        dispatch({
            type: 'CREATE_PROJECT',
            project: savedProject,
        });
    } catch (e) {
        console.log(e);
        dispatch({
            type: 'CREATE_PROJECT_ERROR',
            error: e,
        })
    }
};
