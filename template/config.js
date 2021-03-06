
export const config = {
    name: '<%= lowercaseName %>',
    //used in the reducers
    uppercaseName: '<%= uppercaseName %>',
    // useful to map objects in collection
    modelProps: ['id'],
    // can be empty (might be usefull if you need paging...)
    collectionProps: [],
    // path to your rest server
    paths: {
        item: '/{id}',
        collection: '/'
    },
    /** OPTIONAL **/
    //methods
    // methods: {
    //     create: 'POST',
    //     update: 'PUT',
    //     delete: 'DELETE',
    //     read:   'GET'
    // },
    // default model : {name:'', description:'', tags: []}
    // defaultModel : {},
    // Lazy mode :
    // will fetch only once and use the first time loaded result
    // fetchOnce: false
    // headers: {
    //     Accept:'application/json'
    // }
}

export default config