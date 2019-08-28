const initialState = [
    {
        id: 1,
        name: 'iPhone 7 Plus',
        image: 'https://switch.com.my/wp-content/uploads/2017/11/iPhone7Plus-Black-2Up-34L-WW-EN-SCREEN.jpg',
        price: 500,
        description: 'Sản phẩm do apple sản xuất',
        inventory: 10,
        rating: 4
    },
    {
        id: 2,
        name: 'Samsung galaxy S10',
        image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/6/3/636863659522918468_ss-galaxy-s10-plus-xanh-1.png',
        price: 450,
        description: 'Sản phẩm do samsung sản xuất',
        inventory: 15,
        rating: 3
    },
    {
        id: 3,
        name: 'Oppo Reno',
        image: 'https://cdn1.vienthonga.vn/image/2019/6/1/oppo-reno-hong-ngoc-trai-1.jpg',
        price: 300,
        description: 'Sản phẩm do china sản xuất',
        inventory: 5,
        rating: 5
    }
];

const reducer = (state = initialState, action) => {
    switch(action.type){
        default: return state;
    }
}

export default reducer;