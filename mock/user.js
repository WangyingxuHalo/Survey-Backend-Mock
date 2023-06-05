const Mock = require('mockjs');

const Random = Mock.Random;

module.exports = [
    // retrieve user information
    {
        url: '/api/user/info',
        method: 'get',
        response() {
            return {
                errno: 0,
                data: {
                    username: Random.title(),
                    nickname: Random.cname()
                }
            }
        }
    },
    // register
    {
        url: '/api/user/register',
        method: 'post',
        response() {
            return {
                errno: 0
            }
        }
    },
    // login
    {
        url: '/api/user/login',
        method: 'post',
        response() {
            return {
                errno: 0,
                data: {
                    token: Random.word(20)
                }
            }
        }
    }
]