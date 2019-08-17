import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        piclist: [
            {
                id: 'pic2',
                name: "第2个图片",
                img: "123456",
                classify: "风景",
                createTime: "2019-08-2"
            },
            {
                id: 'pic3',
                name: "第3个图片",
                img: "123456",
                classify: "风景",
                createTime: "2019-08-6"
            },
            {
                id: 'pic4',
                name: "第4个图片",
                img: "123456",
                classify: "风景",
                createTime: "2019-08-21"
            },
            {
                id: 'pic5',
                name: "第5个图片",
                img: "123456",
                classify: "汽车",
                createTime: "2019-08-22"
            },
            {
                id: 'pic6',
                name: "第6个图片",
                img: "123456",
                classify: "汽车",
                createTime: "2019-08-30"
            },
            {
                id: 'pic7',
                name: "第8个图片",
                img: "123456",
                classify: "汽车",
                createTime: "2019-08-16"
            },
            {
                id: 'pic8',
                name: "第9个图片",
                img: "123456",
                classify: "汽车",
                createTime: "2019-08-25"
            },
            {
                id: 'pic9',
                name: "第10个图片",
                img: "123456",
                classify: "美女",
                createTime: "2019-08-16"
            },
            {
                id: 'pic10',
                name: "第11个图片",
                img: "123456",
                classify: "美女",
                createTime: "2019-08-11"
            },
            {
                id: 'pic11',
                name: "第一个图片",
                img: "123456",
                classify: "美女",
                createTime: "2019-08-16"
            },
            {
                id: 'pic12',
                name: "第12个图片",
                img: "123456",
                classify: "美女",
                createTime: "2019-08-16"
            },
            {
                id: 'pic13',
                name: "第一个图片",
                img: "123456",
                classify: "帅哥",
                createTime: "2019-08-13"
            },
            {
                id: 'pic14',
                name: "第13个图片",
                img: "123456",
                classify: "帅哥",
                createTime: "2019-08-10"
            },
            {
                id: 'pic15',
                name: "第14个图片",
                img: "123456",
                classify: "帅哥",
                createTime: "2019-08-19"
            }, {
                id: 'pic1',
                name: "第1个图片",
                img: "123456",
                classify: "风景",
                createTime: "2019-08-1"
            },

            {
                id: 'pic16',
                name: "第16个图片",
                img: "123456",
                classify: "帅哥",
                createTime: "2019-08-13"
            },

            {
                id: 'pic20',
                name: "第20个图片",
                img: "123456",
                classify: "明星",
                createTime: "2019-08-6"
            },
            {
                id: 'pic17',
                name: "第17个图片",
                img: "123456",
                classify: "明星",
                createTime: "2019-08-15"
            },
            {
                id: 'pic18',
                name: "第18个图片",
                img: "123456",
                classify: "明星",
                createTime: "2019-08-8"
            },
            {
                id: 'pic19',
                name: "第19个图片",
                img: "123456",
                classify: "明星",
                createTime: "2019-08-2"
            },
        ]
    }
})

export default store