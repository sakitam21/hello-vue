import Mock from 'mockjs'
import boardlist from './board/boardlist'

const domain = 'http://mockjs.com/api'
//console.log(boardlist);

Mock.mock(`${domain}/boardlist`,boardlist)