import Mock from 'mockjs'
const Random = Mock.Random

let boardlist = []

for(let i=0;i<8;i++){
	let list={
		info:Random.sentence(5,6) //随机生成一个句子，第一个单词的首字母大写
	}
	boardlist.push(list);
}

export default boardlist;