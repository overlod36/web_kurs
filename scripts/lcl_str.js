class LocalStorage {
	constructor() {
		this.keyname = 'goods'
	}	

	getGoods(){
		const goodLS = localStorage.getItem(this.keyname);
		if (goodLS != null){
			return JSON.parse(goodLS);
		}
		return[];
	}

	putGood(id){
		let goods = this.getGoods();
		let push_good = false;
		const index = goods.indexOf(id);

		if(index === -1){
			goods.push(id);
			push_good = true;
		}
		else{
			goods.splice(index, 1);
		}
		localStorage.setItem(this.keyname, JSON.stringify(goods));

		return{
			push_good,
			goods
		}
	}
}

const storage = new LocalStorage();

