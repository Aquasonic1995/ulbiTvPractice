import {defineStore} from "pinia";
export interface dataType {
    data:{
        posts:Array<postType>
    },
    showModal:boolean
}
export interface postType{
    id:number,
    title:string,
    desc:string
}
export const postsStore = defineStore('products', {
    state: ():dataType => ({
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
        },
        showModal:true
    }),
    actions:{
        addPost(post:postType){
          this.data.posts.push(post)
        },
        deletePost(post:postType){
            this.data.posts = this.data.posts.filter((p:postType)=>p.id !==post.id)
        },
        modalVisible() {
         this.data.showModal = true
            console.log(this.data.showModal)
        },
    }
})