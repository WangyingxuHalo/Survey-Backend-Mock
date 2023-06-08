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
                    title: Random.ctitle(),
                    componentList: [
                        {
                            fe_id: Random.id(),
                            type: 'questionTitle',
                            title: '标题',
                            isHidden: false,
                            isLocked: false,
                            props: 
                            {
                                text: '一行标题',
                                level: 1,
                                isCenter: false
                            }
                        },
                        {
                            fe_id: Random.id(),
                            type: 'questionInput',
                            title: '输入框',
                            isHidden: false,
                            isLocked: false,
                            props: {
                                title: '你的姓名',
                                placeholder: '请输入姓名...'
                            }
                        },
                        {
                            fe_id: Random.id(),
                            type: 'questionInput',
                            title: '输入框',
                            isHidden: false,
                            isLocked: false,
                            props: {
                                title: '你的职业',
                                placeholder: '请输入你的职业...'
                            }
                        },
                        {
                            fe_id: Random.id(),
                            type: 'questionParagraph',
                            title: '段落',
                            isHidden: false,
                            isLocked: false,
                            props: {
                                text: '段落内容',
                                isCenter: false
                            }
                        },
                        {
                            fe_id: Random.id(),
                            type: 'questionInfo',
                            title: '问卷信息',
                            isHidden: false,
                            isLocked: false,
                            props: {
                                title: '问卷信息',
                                description: '问卷信息描述'
                            }
                        },
                    ]
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