Vue.use(VueMaterial.default);
Vue.use(VueRouter);


function init(){
    
    const ListTemplate = { 
    props: [],
    template: '<mail-list></mail-list>' };
    
    
    const routes = [
                //{path: '/inbox', name: 'inbox', component: MailListTemplate},
            {path: '/carpetas', name: 'carpetas',  component: CarpetasTemplate},
            {path: '/simplelist', name: 'simplelist', component: SimpleListTemplate},
            {path: '/advancedlist', name: 'advancedlist', component: ListTemplate},
            {path: '/docList', name: 'docList', component: DocListTemplate},
            ];

        const router = new VueRouter({
                routes // short for `routes: routes`
            });

    const app = new Vue({
        el: '#app',
        router,
        data: { showNavigation: false,
                showSidepanel: false,
              message: 'Hola!'},
        methods: {
            goToInbox: function(){
                this.showNavigation = false;
                    router.push('inbox');
                },
            goToCarpetas: function(){
                this.showNavigation = false;
                    router.push({ name: 'carpetas'})
                },
            goToSimpleList: function(){
                this.showNavigation = false;
                    router.push('simplelist');
                },
            goToAdvancedList: function(){
                this.showNavigation = false;
                    router.push('advancedlist');
                },
            goToDocList: function(){
                this.showNavigation = false;
                    router.push('docList');
                }
        }
            
      }).$mount('#app');
    
    router.push({ name: 'carpetas'})
}

        

