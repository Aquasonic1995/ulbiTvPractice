import {defineStore} from "pinia";

export const productsStore = defineStore('products', {
    state: () => ({
        data: {
            posts: [{
                id: 1,
                title: 'Javascript1',
                desc: 'Javascript universal programming language'
            }, {
                id: 2,
                title: 'Javascript2',
                desc: 'Javascript universal programming language'
            }, {
                id: 3,
                title: 'Javascript3',
                desc: 'Javascript universal programming language'
            },]
        }
    })
})