const IndexPage = () => import("../pages/faq/IndexPage.vue");
const ProductListPage = () => import("../pages/product/ProductListPage.vue");
const ProductRegisterPage = () => import("../pages/product/ProductRegisterPage.vue");


const productRouters = {
    path: "/product",
    component: IndexPage,
    meta: { title: "상품(product)" },
    children: [
        {path: "", redirect: '/product/list'},
        {path: "list", component: ProductListPage, meta:{back: "none"} },
        {path: "register", component: ProductRegisterPage },
    ],
};

export default productRouters;