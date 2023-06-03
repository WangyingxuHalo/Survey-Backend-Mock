const Mock = require('mockjs')
const getQuestionList = require('./data/getQuestionList')

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
                    title: Random.ctitle()
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
            const { url = '' } = ctx
            const isDeleted = url.indexOf('isDeleted=true') >= 0
            const isStar = url.indexOf('isStar=true') >= 0
            return {
                errno: 0,
                data: {
                    list: getQuestionList({isDeleted, isStar}),
                    total: 100
                }
            }
        }
    },
]