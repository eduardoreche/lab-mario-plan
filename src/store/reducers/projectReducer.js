const initState = {
    projects: [
        {id: 1, title: 'Test', content: 'lorem '},
        {id: 2, title: 'Project 2', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas nemo dolorem neque! Dolores, magnam illum quam vero praesentium ipsum cum obcaecati asperiores quo dolore saepe quae itaque fugiat libero amet!'},
        {id: 3, title: 'Mario Plan', content: 'study '},
        {id: 4, title: 'TestMario Plan', content: 'study '},
    ]
};

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('create project', action.project);
            break;
    
        default:
            break;
    }

    return state;
}

export default projectReducer;
