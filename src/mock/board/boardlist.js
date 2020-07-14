import Mock from 'mockjs'
const Random = Mock.Random

let boardlist = []

for(let i=0;i<5;i++){
	let list={
		imgurl:Random.image('340x120', '#AC823D', '#AC823D', 'png', 'group1'),
		imginfo:Random.csentence(200, 240)
	}
	boardlist.push(list);
}

export default boardlist;