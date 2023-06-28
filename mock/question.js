const Mock = require('mockjs')
const getQuestionList = require('./data/getQuestionList')
const getComponentList = require('./data/getComponentList');

const Random = Mock.Random

module.exports = [
    // Get single survey info
    {
        url: '/api/question/:id',
        method: 'get',
        response() {
            return {
                errno: 0,
                data: {
                    id: Random.id(),
                    title: Random.ctitle(),
                    desc: "问卷描述",
                    js: "",
                    css: "",
                    isPublished: true,
                    isDeleted: false,
                    componentList: getComponentList()
                }
            }
        }
    },
    // Create a new survey
    {
        url: '/api/question',
        method: 'post',
        response() {
            return {
                errno: 0,
                data: {
                    id: Random.id()
                }
            }
        }
    },
    // retrieve question list
    {
        url: '/api/question',
        method: 'get',
        response(ctx) {
            const { url = '', query = {}} = ctx
            const isDeleted = url.indexOf('isDeleted=true') >= 0
            const isStar = url.indexOf('isStar=true') >= 0
            const pageSize = parseInt(query.pageSize) || 10
            return {
                errno: 0,
                data: {
                    list: getQuestionList({len: pageSize, isDeleted, isStar}),
                    total: 100
                }
            }
        }
    },
    // Update the information of a specific survey
    {
        url: '/api/question/:id',
        method: 'patch',
        response() {
            return {
                errno: 0
            }
        }
    },
    // Duplicate a survey
    {
        url: '/api/question/duplicate/:id',
        method: 'post',
        response() {
            return {
                errno: 0,
                data: {
                    id: Random.id()
                }
            }
        }
    },
    // Real delete a survey
    {
        url: '/api/question',
        method: 'delete',
        response() {
            return {
                errno: 0
            }
        }
    }
]