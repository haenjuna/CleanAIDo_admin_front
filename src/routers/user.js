import IndexPage from "../pages/user/IndexPage.vue";
import UserRegisterPage from "../pages/user/UserRegisterPage.vue";
import UserListPage from "../pages/user/UserListPage.vue";

const userRouters = {
    path: "/user",
    component: IndexPage,
    meta: { title: "판매자(Seller)" },
    children: [
        {path: "", redirect: '/user/list'},
        {path: "list", component: UserListPage, meta:{back: "none"} },
        {path: "register", component: UserRegisterPage },
    ],
};

export default userRouters;