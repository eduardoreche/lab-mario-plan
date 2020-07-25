export const createProject = (project) => async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    try {
        const savedProject = await firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Eduardo',
            authorLastName: 'Reche',
            authorId: 1234,
            createdAt: new Date(),
        });
    console.log(savedProject);
        dispatch({
            type: 'CREATE_PROJECT',
            project: savedProject,
        });
    } catch (error) {
        dispatch({
            type: 'CREATE_PROJECT_ERROR',
            error,
        })
    }
};
