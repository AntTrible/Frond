<template>
	<view>
		<button type="default" @click="handleCfy">转录分类</button>
		<button type="default" @click="handleGoods">转录商品</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			handleCfy(){
				uni.request({
		     	    url:'https://h5.mcake.com/api/5e90690f0e270d04?cityId=110',
		     	    method:'GET',
		     	    header:{
		     		"access-token": "942d57dbe61e34780fed6543b9cbb97c",
		     		"version": "v1.0"
			    },
				success:(res)=>{
					console.log(res)
					let {data} = res.data
					console.log(data)
					let batchObj = {"requests":[]}
					data.forEach(item=>{
						batchObj.requests.push({
							"method": "POST",
							"path":"/1.1/classes/classify",
							"body": item
						})
					})
                this.$post('/1.1/batch',batchObj)
				}   
		    })
		},
		handleGoods(){
			uni.request({
		     	    url:'https://h5.mcake.com/api/0434b49d1ac28f9d?cityId=110&page=1&bid=1',
		     	    method:'GET',
		     	    header:{
		     		"access-token": "c20d0562ddaa01f8da4ecb09352c511a",
		     		"version": "v1.0"
			    },
				success:(res)=>{
					console.log(res)
					let {
						list
					}=res.data.data
					let batchObj = {
						"requests": []
					}
					list.forEach(item =>{
						batchObj.requests.push({
							"method":"POST",
							"path":"/1.1/classes/goods",
							"body": item
						})
					})
					this.$post('/1.1/batch',batchObj)
				}   
		    })
		}
	},	
				
		
	
}
</script>

<style>

</style>
