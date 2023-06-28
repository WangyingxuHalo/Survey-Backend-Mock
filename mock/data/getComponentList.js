/**
 * @description 生成组件列表
 * @author Yingxu
 */

const Mock = require('mockjs')
const Random = Mock.Random

function getComponentList() {
    return [
        {
            fe_id: 'id1',
            type: 'questionCheckbox',
            title: '多选框',
            isHidden: false,
            isLocked: false,
            props: {
                title: '多选框',
                isVertical: false,
                list: [
                    { value: "item1", text: "选项1", checked: true},
                    { value: "item2", text: "选项2", checked: false},
                    { value: "item3", text: "选项3", checked: true},
                ]
            }
        },
        {
            fe_id: 'id2',
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
            fe_id: 'id3',
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
            fe_id: 'id4',
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
            fe_id: 'id5',
            type: 'questionParagraph',
            title: '段落',
            isHidden: false,
            isLocked: false,
            props: {
                text: '段落内容\nhaha\n',
                isCenter: false
            }
        },
        {
            fe_id: 'id6',
            type: 'questionInfo',
            title: '问卷信息',
            isHidden: false,
            isLocked: false,
            props: {
                title: '问卷信息',
                description: '问卷信息描述'
            }
        },
        {
            fe_id: 'id7',
            type: 'questionTextarea',
            title: '多行输入框',
            isHidden: false,
            isLocked: false,
            props: {
                title: '你的爱好',
                placeholder: '请输入你的爱好...'
            }
        },
        {
            fe_id: 'id8',
            type: 'questionRadio',
            title: '单选框',
            isHidden: false,
            isLocked: false,
            props: {
                title: '单选框',
                isVertical: false,
                options: [
                    { value: "item1", text: "选项1" },
                    { value: "item2", text: "选项2" },
                    { value: "item3", text: "选项3" },
                ]
            }
        },
    ]
}

module.exports = getComponentList;