import { persist, post, get, hasError, postImage } from '@/assets/library/CommonFunctions.js'
import user from '@/store/user'

const data = {
    id: 0,
    name: "",
    desc: "",
    coverPic: "",
    displayPic: "",
    loc: "",
    // shop: {
    //     coverPic: "",
    //     displayPic: "",
    //     sellerPic: "",
    //     name: "",
    //     desc: "",
    //     loc: "",
    //     sales: "",
    //     sellerContact: "",
    //     allProducts: [],
    //     featuredProducts: [],
    //     reviews: {}
    // }
}

const context = persist('shops', data)

context.get = async function (id) {
    if (!id) return;
   
    let res = await get(`api/shop/${id}`)
    res = hasError(res, data.products)
    context.commit('id', res._id)
    context.commit('name', res.shopName)
    context.commit('address', res.address)
    context.commit('shopType', res.shopType)
    context.commit('name', res.shopName)
}

context.postImage = async function (data) {
    console.log('will show')
    let res = await postImage(`api/shop/${context.val('id')}/album?type=cover`, data)
    console.log("🚀 ~ res", res)
    context.commit('coverPic', res)
    return res.avatar
}

context.post = async function (data) {
    console.log('hell')
    let coverImage = await context.postImage(data)
    // return await post('api/shops', { coverImage });

}

context.isOwnShop = function () {
    let ownShops = (user.val('me'));
    let id = context.val('id');
    let shopID = ownShops.find((el) => Number(el._id) === id);
    console.log("🚀 ~ shopID", shopID)
    return shopID._id >= 0 ? true : false;
}

export default context;