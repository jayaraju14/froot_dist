function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/aboutus/aboutus.component */
    "./src/app/components/aboutus/aboutus.component.ts");
    /* harmony import */


    var _components_apple_and_pears_apple_and_pears_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/apple-and-pears/apple-and-pears.component */
    "./src/app/components/apple-and-pears/apple-and-pears.component.ts");
    /* harmony import */


    var _components_avacado_stone_fruits_avacado_stone_fruits_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/avacado-stone-fruits/avacado-stone-fruits.component */
    "./src/app/components/avacado-stone-fruits/avacado-stone-fruits.component.ts");
    /* harmony import */


    var _components_berries_berries_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/berries/berries.component */
    "./src/app/components/berries/berries.component.ts");
    /* harmony import */


    var _components_best_seller_best_seller_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/best-seller/best-seller.component */
    "./src/app/components/best-seller/best-seller.component.ts");
    /* harmony import */


    var _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/blog/blog.component */
    "./src/app/components/blog/blog.component.ts");
    /* harmony import */


    var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/cart/cart.component */
    "./src/app/components/cart/cart.component.ts");
    /* harmony import */


    var _components_citrus_citrus_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/citrus/citrus.component */
    "./src/app/components/citrus/citrus.component.ts");
    /* harmony import */


    var _components_common_firstnav_firstnav_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/common/firstnav/firstnav.component */
    "./src/app/components/common/firstnav/firstnav.component.ts");
    /* harmony import */


    var _components_common_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/common/footer/footer.component */
    "./src/app/components/common/footer/footer.component.ts");
    /* harmony import */


    var _components_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/contactus/contactus.component */
    "./src/app/components/contactus/contactus.component.ts");
    /* harmony import */


    var _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/faqs/faqs.component */
    "./src/app/components/faqs/faqs.component.ts");
    /* harmony import */


    var _components_help_help_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/help/help.component */
    "./src/app/components/help/help.component.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/landing/landing.component */
    "./src/app/components/landing/landing.component.ts");
    /* harmony import */


    var _components_main_menu_categories_main_menu_categories_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/main-menu-categories/main-menu-categories.component */
    "./src/app/components/main-menu-categories/main-menu-categories.component.ts");
    /* harmony import */


    var _components_my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/my-orders/my-orders.component */
    "./src/app/components/my-orders/my-orders.component.ts");
    /* harmony import */


    var _components_news_news_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/news/news.component */
    "./src/app/components/news/news.component.ts");
    /* harmony import */


    var _components_offers_offers_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/offers/offers.component */
    "./src/app/components/offers/offers.component.ts");
    /* harmony import */


    var _components_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/privacy-policy/privacy-policy.component */
    "./src/app/components/privacy-policy/privacy-policy.component.ts");
    /* harmony import */


    var _components_productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/productdetails/productdetails.component */
    "./src/app/components/productdetails/productdetails.component.ts");
    /* harmony import */


    var _components_products_products_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./components/products/products.component */
    "./src/app/components/products/products.component.ts");
    /* harmony import */


    var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/profile/profile.component */
    "./src/app/components/profile/profile.component.ts");
    /* harmony import */


    var _components_recommended_products_recommended_products_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./components/recommended-products/recommended-products.component */
    "./src/app/components/recommended-products/recommended-products.component.ts");
    /* harmony import */


    var _components_support_support_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./components/support/support.component */
    "./src/app/components/support/support.component.ts");
    /* harmony import */


    var _components_terms_terms_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./components/terms/terms.component */
    "./src/app/components/terms/terms.component.ts");
    /* harmony import */


    var _components_wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./components/wishlist/wishlist.component */
    "./src/app/components/wishlist/wishlist.component.ts");

    var routes = [{
      path: '',
      redirectTo: '/landing',
      pathMatch: 'full'
    }, {
      path: 'landing',
      component: _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_16__["LandingComponent"]
    }, {
      path: 'home',
      component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"]
    }, {
      path: 'Best-seller',
      component: _components_best_seller_best_seller_component__WEBPACK_IMPORTED_MODULE_6__["BestSellerComponent"]
    }, {
      path: 'wishlist',
      component: _components_wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_28__["WishlistComponent"]
    }, {
      path: 'productdetails',
      component: _components_productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_22__["ProductdetailsComponent"]
    }, {
      path: 'firstnav',
      component: _components_common_firstnav_firstnav_component__WEBPACK_IMPORTED_MODULE_10__["FirstnavComponent"]
    }, {
      path: 'footer',
      component: _components_common_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"]
    }, {
      path: 'cart',
      component: _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_8__["CartComponent"]
    }, {
      path: 'my-orders',
      component: _components_my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_18__["MyOrdersComponent"]
    }, {
      path: 'products',
      component: _components_products_products_component__WEBPACK_IMPORTED_MODULE_23__["ProductsComponent"]
    }, // { path: 'product', component:ProductsComponent },
    // { path: 'search/:search', component:ProductsComponent },
    {
      path: 'all',
      component: _components_main_menu_categories_main_menu_categories_component__WEBPACK_IMPORTED_MODULE_17__["MainMenuCategoriesComponent"]
    }, {
      path: 'avacado-stone-fruits',
      component: _components_avacado_stone_fruits_avacado_stone_fruits_component__WEBPACK_IMPORTED_MODULE_4__["AvacadoStoneFruitsComponent"]
    }, {
      path: 'apple-and-pears',
      component: _components_apple_and_pears_apple_and_pears_component__WEBPACK_IMPORTED_MODULE_3__["AppleAndPearsComponent"]
    }, {
      path: 'berries',
      component: _components_berries_berries_component__WEBPACK_IMPORTED_MODULE_5__["BerriesComponent"]
    }, {
      path: 'citrus',
      component: _components_citrus_citrus_component__WEBPACK_IMPORTED_MODULE_9__["CitrusComponent"]
    }, {
      path: 'recommended-products',
      component: _components_recommended_products_recommended_products_component__WEBPACK_IMPORTED_MODULE_25__["RecommendedProductsComponent"]
    }, {
      path: 'profile',
      component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_24__["ProfileComponent"]
    }, {
      path: 'terms',
      component: _components_terms_terms_component__WEBPACK_IMPORTED_MODULE_27__["TermsComponent"]
    }, {
      path: 'aboutus',
      component: _components_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_2__["AboutusComponent"]
    }, {
      path: 'blog',
      component: _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_7__["BlogComponent"]
    }, {
      path: 'news',
      component: _components_news_news_component__WEBPACK_IMPORTED_MODULE_19__["NewsComponent"]
    }, {
      path: 'help',
      component: _components_help_help_component__WEBPACK_IMPORTED_MODULE_14__["HelpComponent"]
    }, {
      path: 'faqs',
      component: _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_13__["FaqsComponent"]
    }, {
      path: 'support',
      component: _components_support_support_component__WEBPACK_IMPORTED_MODULE_26__["SupportComponent"]
    }, {
      path: 'contactus',
      component: _components_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_12__["ContactusComponent"]
    }, {
      path: 'privacy-policy',
      component: _components_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_21__["PrivacyPolicyComponent"]
    }, {
      path: 'offers',
      component: _components_offers_offers_component__WEBPACK_IMPORTED_MODULE_20__["OffersComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'fruitcity';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/landing/landing.component */
    "./src/app/components/landing/landing.component.ts");
    /* harmony import */


    var _components_best_seller_best_seller_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/best-seller/best-seller.component */
    "./src/app/components/best-seller/best-seller.component.ts");
    /* harmony import */


    var _components_wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/wishlist/wishlist.component */
    "./src/app/components/wishlist/wishlist.component.ts");
    /* harmony import */


    var _components_productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/productdetails/productdetails.component */
    "./src/app/components/productdetails/productdetails.component.ts");
    /* harmony import */


    var _components_common_firstnav_firstnav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/common/firstnav/firstnav.component */
    "./src/app/components/common/firstnav/firstnav.component.ts");
    /* harmony import */


    var _components_common_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/common/footer/footer.component */
    "./src/app/components/common/footer/footer.component.ts");
    /* harmony import */


    var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/cart/cart.component */
    "./src/app/components/cart/cart.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var ng_otp_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ng-otp-input */
    "./node_modules/ng-otp-input/__ivy_ngcc__/fesm2015/ng-otp-input.js");
    /* harmony import */


    var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ngx-owl-carousel-o */
    "./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/__ivy_ngcc__/fesm2015/ng6-toastr-notifications.js");
    /* harmony import */


    var _components_products_products_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/products/products.component */
    "./src/app/components/products/products.component.ts");
    /* harmony import */


    var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/profile/profile.component */
    "./src/app/components/profile/profile.component.ts");
    /* harmony import */


    var _components_terms_terms_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/terms/terms.component */
    "./src/app/components/terms/terms.component.ts");
    /* harmony import */


    var _components_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/aboutus/aboutus.component */
    "./src/app/components/aboutus/aboutus.component.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_main_menu_categories_main_menu_categories_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/main-menu-categories/main-menu-categories.component */
    "./src/app/components/main-menu-categories/main-menu-categories.component.ts");
    /* harmony import */


    var _components_citrus_citrus_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./components/citrus/citrus.component */
    "./src/app/components/citrus/citrus.component.ts");
    /* harmony import */


    var _components_berries_berries_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/berries/berries.component */
    "./src/app/components/berries/berries.component.ts");
    /* harmony import */


    var _components_avacado_stone_fruits_avacado_stone_fruits_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./components/avacado-stone-fruits/avacado-stone-fruits.component */
    "./src/app/components/avacado-stone-fruits/avacado-stone-fruits.component.ts");
    /* harmony import */


    var _components_apple_and_pears_apple_and_pears_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./components/apple-and-pears/apple-and-pears.component */
    "./src/app/components/apple-and-pears/apple-and-pears.component.ts");
    /* harmony import */


    var _components_recommended_products_recommended_products_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./components/recommended-products/recommended-products.component */
    "./src/app/components/recommended-products/recommended-products.component.ts");
    /* harmony import */


    var _components_my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./components/my-orders/my-orders.component */
    "./src/app/components/my-orders/my-orders.component.ts");
    /* harmony import */


    var angular_datatables__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! angular-datatables */
    "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
    /* harmony import */


    var _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./components/blog/blog.component */
    "./src/app/components/blog/blog.component.ts");
    /* harmony import */


    var _components_news_news_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./components/news/news.component */
    "./src/app/components/news/news.component.ts");
    /* harmony import */


    var _components_help_help_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./components/help/help.component */
    "./src/app/components/help/help.component.ts");
    /* harmony import */


    var _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./components/faqs/faqs.component */
    "./src/app/components/faqs/faqs.component.ts");
    /* harmony import */


    var _components_support_support_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./components/support/support.component */
    "./src/app/components/support/support.component.ts");
    /* harmony import */


    var _components_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./components/contactus/contactus.component */
    "./src/app/components/contactus/contactus.component.ts");
    /* harmony import */


    var _components_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./components/privacy-policy/privacy-policy.component */
    "./src/app/components/privacy-policy/privacy-policy.component.ts");
    /* harmony import */


    var _components_offers_offers_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./components/offers/offers.component */
    "./src/app/components/offers/offers.component.ts");
    /* harmony import */


    var ng2_file_upload__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ng2-file-upload */
    "./node_modules/ng2-file-upload/__ivy_ngcc__/fesm2015/ng2-file-upload.js");
    /* harmony import */


    var angular_star_rating__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! angular-star-rating */
    "./node_modules/angular-star-rating/__ivy_ngcc__/esm2015/angular-star-rating.js");
    /* harmony import */


    var ng_starrating__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ng-starrating */
    "./node_modules/ng-starrating/__ivy_ngcc__/fesm2015/ng-starrating.js"); // import { NgxStripeModule } from 'ngx-stripe';


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_15__["CarouselModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_29__["DataTablesModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_38__["FileUploadModule"], // NgxStripeModule,
      ng_otp_input__WEBPACK_IMPORTED_MODULE_14__["NgOtpInputModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], ng_starrating__WEBPACK_IMPORTED_MODULE_40__["RatingModule"], angular_star_rating__WEBPACK_IMPORTED_MODULE_39__["StarRatingModule"].forRoot(), ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_16__["ToastrModule"].forRoot()]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_5__["LandingComponent"], _components_best_seller_best_seller_component__WEBPACK_IMPORTED_MODULE_6__["BestSellerComponent"], _components_wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_7__["WishlistComponent"], _components_productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_8__["ProductdetailsComponent"], _components_common_firstnav_firstnav_component__WEBPACK_IMPORTED_MODULE_9__["FirstnavComponent"], _components_common_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"], _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_11__["CartComponent"], _components_products_products_component__WEBPACK_IMPORTED_MODULE_17__["ProductsComponent"], _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_18__["ProfileComponent"], _components_terms_terms_component__WEBPACK_IMPORTED_MODULE_19__["TermsComponent"], _components_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_20__["AboutusComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_21__["HomeComponent"], _components_main_menu_categories_main_menu_categories_component__WEBPACK_IMPORTED_MODULE_22__["MainMenuCategoriesComponent"], _components_citrus_citrus_component__WEBPACK_IMPORTED_MODULE_23__["CitrusComponent"], _components_berries_berries_component__WEBPACK_IMPORTED_MODULE_24__["BerriesComponent"], _components_avacado_stone_fruits_avacado_stone_fruits_component__WEBPACK_IMPORTED_MODULE_25__["AvacadoStoneFruitsComponent"], _components_apple_and_pears_apple_and_pears_component__WEBPACK_IMPORTED_MODULE_26__["AppleAndPearsComponent"], _components_recommended_products_recommended_products_component__WEBPACK_IMPORTED_MODULE_27__["RecommendedProductsComponent"], _components_my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_28__["MyOrdersComponent"], _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_30__["BlogComponent"], _components_news_news_component__WEBPACK_IMPORTED_MODULE_31__["NewsComponent"], _components_help_help_component__WEBPACK_IMPORTED_MODULE_32__["HelpComponent"], _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_33__["FaqsComponent"], _components_support_support_component__WEBPACK_IMPORTED_MODULE_34__["SupportComponent"], _components_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_35__["ContactusComponent"], _components_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_36__["PrivacyPolicyComponent"], _components_offers_offers_component__WEBPACK_IMPORTED_MODULE_37__["OffersComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_15__["CarouselModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_29__["DataTablesModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_38__["FileUploadModule"], // NgxStripeModule,
        ng_otp_input__WEBPACK_IMPORTED_MODULE_14__["NgOtpInputModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], ng_starrating__WEBPACK_IMPORTED_MODULE_40__["RatingModule"], angular_star_rating__WEBPACK_IMPORTED_MODULE_39__["StarRatingModule"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_16__["ToastrModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_5__["LandingComponent"], _components_best_seller_best_seller_component__WEBPACK_IMPORTED_MODULE_6__["BestSellerComponent"], _components_wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_7__["WishlistComponent"], _components_productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_8__["ProductdetailsComponent"], _components_common_firstnav_firstnav_component__WEBPACK_IMPORTED_MODULE_9__["FirstnavComponent"], _components_common_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"], _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_11__["CartComponent"], _components_products_products_component__WEBPACK_IMPORTED_MODULE_17__["ProductsComponent"], _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_18__["ProfileComponent"], _components_terms_terms_component__WEBPACK_IMPORTED_MODULE_19__["TermsComponent"], _components_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_20__["AboutusComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_21__["HomeComponent"], _components_main_menu_categories_main_menu_categories_component__WEBPACK_IMPORTED_MODULE_22__["MainMenuCategoriesComponent"], _components_citrus_citrus_component__WEBPACK_IMPORTED_MODULE_23__["CitrusComponent"], _components_berries_berries_component__WEBPACK_IMPORTED_MODULE_24__["BerriesComponent"], _components_avacado_stone_fruits_avacado_stone_fruits_component__WEBPACK_IMPORTED_MODULE_25__["AvacadoStoneFruitsComponent"], _components_apple_and_pears_apple_and_pears_component__WEBPACK_IMPORTED_MODULE_26__["AppleAndPearsComponent"], _components_recommended_products_recommended_products_component__WEBPACK_IMPORTED_MODULE_27__["RecommendedProductsComponent"], _components_my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_28__["MyOrdersComponent"], _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_30__["BlogComponent"], _components_news_news_component__WEBPACK_IMPORTED_MODULE_31__["NewsComponent"], _components_help_help_component__WEBPACK_IMPORTED_MODULE_32__["HelpComponent"], _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_33__["FaqsComponent"], _components_support_support_component__WEBPACK_IMPORTED_MODULE_34__["SupportComponent"], _components_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_35__["ContactusComponent"], _components_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_36__["PrivacyPolicyComponent"], _components_offers_offers_component__WEBPACK_IMPORTED_MODULE_37__["OffersComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_15__["CarouselModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_29__["DataTablesModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_38__["FileUploadModule"], // NgxStripeModule,
          ng_otp_input__WEBPACK_IMPORTED_MODULE_14__["NgOtpInputModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], ng_starrating__WEBPACK_IMPORTED_MODULE_40__["RatingModule"], angular_star_rating__WEBPACK_IMPORTED_MODULE_39__["StarRatingModule"].forRoot(), ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_16__["ToastrModule"].forRoot()],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/aboutus/aboutus.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/aboutus/aboutus.component.ts ***!
    \*********************************************************/

  /*! exports provided: AboutusComponent */

  /***/
  function srcAppComponentsAboutusAboutusComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutusComponent", function () {
      return AboutusComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _common_firstnav_firstnav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../common/firstnav/firstnav.component */
    "./src/app/components/common/firstnav/firstnav.component.ts");
    /* harmony import */


    var _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../common/footer/footer.component */
    "./src/app/components/common/footer/footer.component.ts");

    var AboutusComponent =
    /*#__PURE__*/
    function () {
      function AboutusComponent() {
        _classCallCheck(this, AboutusComponent);
      }

      _createClass(AboutusComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          window.scrollTo(0, 0);
        }
      }]);

      return AboutusComponent;
    }();

    AboutusComponent.ɵfac = function AboutusComponent_Factory(t) {
      return new (t || AboutusComponent)();
    };

    AboutusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutusComponent,
      selectors: [["app-aboutus"]],
      decls: 5,
      vars: 0,
      consts: [[1, "blog_developnment"], [1, "blog_heading"]],
      template: function AboutusComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-firstnav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "The page is under design ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer");
        }
      },
      directives: [_common_firstnav_firstnav_component__WEBPACK_IMPORTED_MODULE_1__["FirstnavComponent"], _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXR1cy9hYm91dHVzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-aboutus',
          templateUrl: './aboutus.component.html',
          styleUrls: ['./aboutus.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/apple-and-pears/apple-and-pears.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/apple-and-pears/apple-and-pears.component.ts ***!
    \*************************************************************************/

  /*! exports provided: AppleAndPearsComponent */

  /***/
  function srcAppComponentsAppleAndPearsAppleAndPearsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppleAndPearsComponent", function () {
      return AppleAndPearsComponent;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/user */
    "./src/app/models/user.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/service/data.service */
    "./src/app/service/data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/__ivy_ngcc__/fesm2015/ng6-toastr-notifications.js");
    /* harmony import */


    var _common_firstnav_firstnav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../common/firstnav/firstnav.component */
    "./src/app/components/common/firstnav/firstnav.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../common/footer/footer.component */
    "./src/app/components/common/footer/footer.component.ts");

    function AppleAndPearsComponent_div_4_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppleAndPearsComponent_div_4_div_1_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

          var item_r3 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r5.getProductsbyId(item_r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Price per kg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Add to cart");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", item_r3 == null ? null : item_r3.prouduct_image_url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r3 == null ? null : item_r3.product_title);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("INR ", item_r3 == null ? null : item_r3.product_price, "");
      }
    }

    function AppleAndPearsComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AppleAndPearsComponent_div_4_div_1_Template, 18, 3, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.vegitables);
      }
    }

    function AppleAndPearsComponent_div_5_div_1_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AppleAndPearsComponent_div_5_div_1_div_17_a_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppleAndPearsComponent_div_5_div_1_div_17_a_1_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16);

          var item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r14.favorite(item_r8);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AppleAndPearsComponent_div_5_div_1_div_17_a_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppleAndPearsComponent_div_5_div_1_div_17_a_2_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);

          var item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r17.favorite(item_r8);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AppleAndPearsComponent_div_5_div_1_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AppleAndPearsComponent_div_5_div_1_div_17_a_1_Template, 2, 0, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AppleAndPearsComponent_div_5_div_1_div_17_a_2_Template, 2, 0, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (item_r8 == null ? null : item_r8.is_favourite) == "0");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (item_r8 == null ? null : item_r8.is_favourite) == "1");
      }
    }

    function AppleAndPearsComponent_div_5_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppleAndPearsComponent_div_5_div_1_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);

          var item_r8 = ctx.$implicit;

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r21.getProductsbyId(item_r8);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Price per kg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Add to cart");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, AppleAndPearsComponent_div_5_div_1_div_16_Template, 3, 0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, AppleAndPearsComponent_div_5_div_1_div_17_Template, 3, 2, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r8 = ctx.$implicit;

        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", item_r8 == null ? null : item_r8.prouduct_image_url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r8 == null ? null : item_r8.product_title);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("INR ", item_r8 == null ? null : item_r8.product_price, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r7.isLogin);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.isLogin);
      }
    }

    function AppleAndPearsComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AppleAndPearsComponent_div_5_div_1_Template, 18, 5, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.vegitables1);
      }
    }

    var AppleAndPearsComponent =
    /*#__PURE__*/
    function () {
      function AppleAndPearsComponent(service, router, toastr, http) {
        _classCallCheck(this, AppleAndPearsComponent);

        this.service = service;
        this.router = router;
        this.toastr = toastr;
        this.http = http;
        this.favObj = new src_app_models_user__WEBPACK_IMPORTED_MODULE_2__["favourite"]();
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
      }

      _createClass(AppleAndPearsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.isLogin = localStorage.getItem('Authorization');
          this.name = localStorage.getItem('productname');
          this.getProducts();
          this.getProducts1();
        } // getBestSellers(){
        //   this.service.getBestSellers().subscribe(
        //     (data:any)=> {
        //       debugger
        //     this.bestsellers= data.data.bestSellers;
        //   });
        // }

      }, {
        key: "getProducts",
        value: function getProducts() {
          var _this = this;

          // debugger
          this.slug = localStorage.getItem('productname'); // this.slug = "vegetables";

          this.service.getProducts(this.slug).subscribe(function (data) {
            // debugger
            _this.vegitables = data.data.products;
            _this.name = data.data.slug; // location.reload();
            // this.router.navigate(['/products']);
          }, function (err) {
            var message = 'There is an issue with service. Please retry.';

            if (err.status === 400) {
              message = 'There is an error in getting list of sold to. Please retry.';
            }
          });
        }
      }, {
        key: "getProducts1",
        value: function getProducts1() {
          var _this2 = this;

          // debugger
          this.slug = localStorage.getItem('productname');
          this.id = localStorage.getItem('userId');
          this.service.getProducts1(this.slug, this.id).subscribe(function (data) {
            // debugger
            _this2.vegitables1 = data.data.products;
            _this2.name = data.data.slug; // location.reload();
            // this.router.navigate(['/products']);
          }, function (err) {
            var message = 'There is an issue with service. Please retry.';

            if (err.status === 400) {
              message = 'There is an error in getting list of sold to. Please retry.';
            }
          });
        }
      }, {
        key: "getProductsbyId",
        value: function getProductsbyId(item) {
          var _this3 = this;

          // debugger
          this.slug = item.product_slug; // this.slug = "vegetables";

          this.service.getProductsbyId(this.slug).subscribe(function (data) {
            // debugger
            _this3.vegitables = data.data.products;
            _this3.name = data.data.products.product_slug;
            _this3.productslug = localStorage.setItem('productslug', data.data.products.product_slug);

            _this3.router.navigate(['/productdetails']); // location.reload();

          }, function (err) {
            var message = 'There is an issue with service. Please retry.';

            if (err.status === 400) {
              message = 'There is an error in getting list of sold to. Please retry.';
            }
          });
        }
      }, {
        key: "favorite",
        value: function favorite(item) {
          // debugger
          if (item.is_favourite === "0") {
            this.favObj.favourite = true;
          }

          if (item.is_favourite === "1") {
            this.favObj.favourite = false;
          } // this.favObj.favourite = true;


          this.addToFavourites(item);
        } // console.log(this.quantity+1);

      }, {
        key: "addToFavourites",
        value: function addToFavourites(item) {
          var _this4 = this;

          // debugger
          this.favObj.product_id = item.product_id;
          this.favObj.user_id = localStorage.getItem('userId'); // this.favObj.favourite = true;

          var fData = new FormData();
          fData.append("product_id", this.favObj.product_id);
          fData.append("user_id", this.favObj.user_id);
          fData.append("favourite", JSON.stringify(this.favObj.favourite));
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            "x-api-key": "12345"
          });
          var profile = "addtofavourites";
          this.http.post(this.baseUrl + profile, fData, {
            headers: headers
          }).subscribe(function (data) {
            // debugger
            if (data.status === false) {
              _this4.toastr.errorToastr(data.data.error, 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              }); // location.reload()

            } else {
              _this4.toastr.successToastr(data.message, 'Success!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });

              _this4.favObj = new src_app_models_user__WEBPACK_IMPORTED_MODULE_2__["favourite"]();

              _this4.getProducts1(); // location.reload();

            }
          }, function (err) {
            //debugger
            if (err && err.error && err.error) {
              var errorMesg = err.error.message;

              _this4.toastr.errorToastr(errorMesg, 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });
            } else {
              _this4.toastr.errorToastr('Something went wrong', 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });
            }
          });
        }
      }]);

      return AppleAndPearsComponent;
    }();

    AppleAndPearsComponent.ɵfac = function AppleAndPearsComponent_Factory(t) {
      return new (t || AppleAndPearsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__["ToastrManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
    };

    AppleAndPearsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AppleAndPearsComponent,
      selectors: [["app-apple-and-pears"]],
      decls: 7,
      vars: 2,
      consts: [[1, "best-selletdata"], [1, "container"], [1, "best-seller"], ["class", "row", 4, "ngIf"], [1, "row"], ["class", "col-md-3", 4, "ngFor", "ngForOf"], [1, "col-md-3"], [1, "card", "seller-content", 3, "click"], [1, "fruits-main"], ["alt", "Card image cap", 1, "card-img-top", "image-sell", 3, "src"], [1, "card-body", "fruit-info"], [1, "card-title", "title-name"], [1, "card-text", "price-per"], [1, "price-data"], [1, "price"], [1, "rate-image", "ml-auto"], ["id", "addcartbtn", 1, "btn", "btn-success"], [1, "cart-data"], [1, "far", "fa-heart", "hart-image"], ["class", "col-md-3  seller-card", 4, "ngFor", "ngForOf"], [1, "col-md-3", "seller-card"], [4, "ngIf"], ["class", "cart-data", 3, "click", 4, "ngIf"], [1, "cart-data", 3, "click"], [1, "fas", "fa-heart", "hart-image", 2, "color", "#ed1c24"]],
      template: function AppleAndPearsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-firstnav");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AppleAndPearsComponent_div_4_Template, 2, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AppleAndPearsComponent_div_5_Template, 2, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "app-footer");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLogin);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLogin);
        }
      },
      directives: [_common_firstnav_firstnav_component__WEBPACK_IMPORTED_MODULE_7__["FirstnavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]],
      styles: ["@media screen and (max-width: 800px) {\r\n    .seller-card[_ngcontent-%COMP%] {\r\n        margin: 10px 40px 10px 40px;\r\n    }\r\n    .image-sell[_ngcontent-%COMP%] {\r\n        width: 65%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hcHBsZS1hbmQtcGVhcnMvYXBwbGUtYW5kLXBlYXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtRQUNJLDJCQUEyQjtJQUMvQjtJQUNBO1FBQ0ksVUFBVTtJQUNkO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FwcGxlLWFuZC1wZWFycy9hcHBsZS1hbmQtcGVhcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAuc2VsbGVyLWNhcmQge1xyXG4gICAgICAgIG1hcmdpbjogMTBweCA0MHB4IDEwcHggNDBweDtcclxuICAgIH1cclxuICAgIC5pbWFnZS1zZWxsIHtcclxuICAgICAgICB3aWR0aDogNjUlO1xyXG4gICAgfVxyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppleAndPearsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-apple-and-pears',
          templateUrl: './apple-and-pears.component.html',
          styleUrls: ['./apple-and-pears.component.css']
        }]
      }], function () {
        return [{
          type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__["ToastrManager"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/avacado-stone-fruits/avacado-stone-fruits.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/components/avacado-stone-fruits/avacado-stone-fruits.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: AvacadoStoneFruitsComponent */

  /***/
  function srcAppComponentsAvacadoStoneFruitsAvacadoStoneFruitsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AvacadoStoneFruitsComponent", function () {
      return AvacadoStoneFruitsComponent;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/user */
    "./src/app/models/user.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/service/data.service */
    "./src/app/service/data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/__ivy_ngcc__/fesm2015/ng6-toastr-notifications.js");
    /* harmony import */


    var _common_firstnav_firstnav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../common/firstnav/firstnav.component */
    "./src/app/components/common/firstnav/firstnav.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../common/footer/footer.component */
    "./src/app/components/common/footer/footer.component.ts");

    function AvacadoStoneFruitsComponent_div_4_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AvacadoStoneFruitsComponent_div_4_div_1_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29);

          var item_r26 = ctx.$implicit;

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r28.getProductsbyId(item_r26);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Price per kg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Add to cart");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r26 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", item_r26 == null ? null : item_r26.prouduct_image_url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r26 == null ? null : item_r26.product_title);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("INR ", item_r26 == null ? null : item_r26.product_price, "");
      }
    }

    function AvacadoStoneFruitsComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AvacadoStoneFruitsComponent_div_4_div_1_Template, 18, 3, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r23.vegitables);
      }
    }

    function AvacadoStoneFruitsComponent_div_5_div_1_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AvacadoStoneFruitsComponent_div_5_div_1_div_17_a_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AvacadoStoneFruitsComponent_div_5_div_1_div_17_a_1_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39);

          var item_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r37.favorite(item_r31);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AvacadoStoneFruitsComponent_div_5_div_1_div_17_a_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AvacadoStoneFruitsComponent_div_5_div_1_div_17_a_2_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r42);

          var item_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r40.favorite(item_r31);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AvacadoStoneFruitsComponent_div_5_div_1_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AvacadoStoneFruitsComponent_div_5_div_1_div_17_a_1_Template, 2, 0, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AvacadoStoneFruitsComponent_div_5_div_1_div_17_a_2_Template, 2, 0, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (item_r31 == null ? null : item_r31.is_favourite) == "0");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (item_r31 == null ? null : item_r31.is_favourite) == "1");
      }
    }

    function AvacadoStoneFruitsComponent_div_5_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AvacadoStoneFruitsComponent_div_5_div_1_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r45);

          var item_r31 = ctx.$implicit;

          var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r44.getProductsbyId(item_r31);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Price per kg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Add to cart");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, AvacadoStoneFruitsComponent_div_5_div_1_div_16_Template, 3, 0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, AvacadoStoneFruitsComponent_div_5_div_1_div_17_Template, 3, 2, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r31 = ctx.$implicit;

        var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", item_r31 == null ? null : item_r31.prouduct_image_url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r31 == null ? null : item_r31.product_title);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("INR ", item_r31 == null ? null : item_r31.product_price, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r30.isLogin);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r30.isLogin);
      }
    }

    function AvacadoStoneFruitsComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AvacadoStoneFruitsComponent_div_5_div_1_Template, 18, 5, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r24.vegitables1);
      }
    }

    var AvacadoStoneFruitsComponent =
    /*#__PURE__*/
    function () {
      function AvacadoStoneFruitsComponent(service, router, toastr, http) {
        _classCallCheck(this, AvacadoStoneFruitsComponent);

        this.service = service;
        this.router = router;
        this.toastr = toastr;
        this.http = http;
        this.favObj = new src_app_models_user__WEBPACK_IMPORTED_MODULE_2__["favourite"]();
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
      }

      _createClass(AvacadoStoneFruitsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.isLogin = localStorage.getItem('Authorization');
          this.name = localStorage.getItem('productname');
          this.getProducts();
          this.getProducts1();
        } // getBestSellers(){
        //   this.service.getBestSellers().subscribe(
        //     (data:any)=> {
        //       debugger
        //     this.bestsellers= data.data.bestSellers;
        //   });
        // }

      }, {
        key: "getProducts",
        value: function getProducts() {
          var _this5 = this;

          // debugger
          this.slug = localStorage.getItem('productname'); // this.slug = "vegetables";

          this.service.getProducts(this.slug).subscribe(function (data) {
            // debugger
            _this5.vegitables = data.data.products;
            _this5.name = data.data.slug; // location.reload();
            // this.router.navigate(['/products']);
          }, function (err) {
            var message = 'There is an issue with service. Please retry.';

            if (err.status === 400) {
              message = 'There is an error in getting list of sold to. Please retry.';
            }
          });
        }
      }, {
        key: "getProducts1",
        value: function getProducts1() {
          var _this6 = this;

          // debugger
          this.slug = localStorage.getItem('productname');
          this.id = localStorage.getItem('userId');
          this.service.getProducts1(this.slug, this.id).subscribe(function (data) {
            // debugger
            _this6.vegitables1 = data.data.products;
            _this6.name = data.data.slug; // location.reload();
            // this.router.navigate(['/products']);
          }, function (err) {
            var message = 'There is an issue with service. Please retry.';

            if (err.status === 400) {
              message = 'There is an error in getting list of sold to. Please retry.';
            }
          });
        }
      }, {
        key: "getProductsbyId",
        value: function getProductsbyId(item) {
          var _this7 = this;

          // debugger
          this.slug = item.product_slug; // this.slug = "vegetables";

          this.service.getProductsbyId(this.slug).subscribe(function (data) {
            // debugger
            _this7.vegitables = data.data.products;
            _this7.name = data.data.products.product_slug;
            _this7.productslug = localStorage.setItem('productslug', data.data.products.product_slug);

            _this7.router.navigate(['/productdetails']); // location.reload();

          }, function (err) {
            var message = 'There is an issue with service. Please retry.';

            if (err.status === 400) {
              message = 'There is an error in getting list of sold to. Please retry.';
            }
          });
        }
      }, {
        key: "favorite",
        value: function favorite(item) {
          // debugger
          if (item.is_favourite === "0") {
            this.favObj.favourite = true;
          }

          if (item.is_favourite === "1") {
            this.favObj.favourite = false;
          } // this.favObj.favourite = true;


          this.addToFavourites(item);
        } // console.log(this.quantity+1);

      }, {
        key: "addToFavourites",
        value: function addToFavourites(item) {
          var _this8 = this;

          // debugger
          this.favObj.product_id = item.product_id;
          this.favObj.user_id = localStorage.getItem('userId'); // this.favObj.favourite = true;

          var fData = new FormData();
          fData.append("product_id", this.favObj.product_id);
          fData.append("user_id", this.favObj.user_id);
          fData.append("favourite", JSON.stringify(this.favObj.favourite));
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            "x-api-key": "12345"
          });
          var profile = "addtofavourites";
          this.http.post(this.baseUrl + profile, fData, {
            headers: headers
          }).subscribe(function (data) {
            // debugger
            if (data.status === false) {
              _this8.toastr.errorToastr(data.data.error, 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              }); // location.reload()

            } else {
              _this8.toastr.successToastr(data.message, 'Success!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });

              _this8.favObj = new src_app_models_user__WEBPACK_IMPORTED_MODULE_2__["favourite"]();

              _this8.getProducts1(); // location.reload();

            }
          }, function (err) {
            //debugger
            if (err && err.error && err.error) {
              var errorMesg = err.error.message;

              _this8.toastr.errorToastr(errorMesg, 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });
            } else {
              _this8.toastr.errorToastr('Something went wrong', 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });
            }
          });
        }
      }]);

      return AvacadoStoneFruitsComponent;
    }();

    AvacadoStoneFruitsComponent.ɵfac = function AvacadoStoneFruitsComponent_Factory(t) {
      return new (t || AvacadoStoneFruitsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__["ToastrManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
    };

    AvacadoStoneFruitsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AvacadoStoneFruitsComponent,
      selectors: [["app-avacado-stone-fruits"]],
      decls: 7,
      vars: 2,
      consts: [[1, "best-selletdata"], [1, "container"], [1, "best-seller"], ["class", "row", 4, "ngIf"], [1, "row"], ["class", "col-md-3", 4, "ngFor", "ngForOf"], [1, "col-md-3"], [1, "card", "seller-content", 3, "click"], [1, "fruits-main"], ["alt", "Card image cap", 1, "card-img-top", "image-sell", 3, "src"], [1, "card-body", "fruit-info"], [1, "card-title", "title-name"], [1, "card-text", "price-per"], [1, "price-data"], [1, "price"], [1, "rate-image", "ml-auto"], ["id", "addcartbtn", 1, "btn", "btn-success"], [1, "cart-data"], [1, "far", "fa-heart", "hart-image"], ["class", "col-md-3  seller-card", 4, "ngFor", "ngForOf"], [1, "col-md-3", "seller-card"], [4, "ngIf"], ["class", "cart-data", 3, "click", 4, "ngIf"], [1, "cart-data", 3, "click"], [1, "fas", "fa-heart", "hart-image", 2, "color", "#ed1c24"]],
      template: function AvacadoStoneFruitsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-firstnav");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AvacadoStoneFruitsComponent_div_4_Template, 2, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AvacadoStoneFruitsComponent_div_5_Template, 2, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "app-footer");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLogin);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLogin);
        }
      },
      directives: [_common_firstnav_firstnav_component__WEBPACK_IMPORTED_MODULE_7__["FirstnavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]],
      styles: ["@media screen and (max-width: 800px) {\r\n    .seller-card[_ngcontent-%COMP%] {\r\n        margin: 10px 40px 10px 40px;\r\n    }\r\n    .image-sell[_ngcontent-%COMP%] {\r\n        width: 65%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hdmFjYWRvLXN0b25lLWZydWl0cy9hdmFjYWRvLXN0b25lLWZydWl0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7UUFDSSwyQkFBMkI7SUFDL0I7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hdmFjYWRvLXN0b25lLWZydWl0cy9hdmFjYWRvLXN0b25lLWZydWl0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgIC5zZWxsZXItY2FyZCB7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDQwcHggMTBweCA0MHB4O1xyXG4gICAgfVxyXG4gICAgLmltYWdlLXNlbGwge1xyXG4gICAgICAgIHdpZHRoOiA2NSU7XHJcbiAgICB9XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AvacadoStoneFruitsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-avacado-stone-fruits',
          templateUrl: './avacado-stone-fruits.component.html',
          styleUrls: ['./avacado-stone-fruits.component.css']
        }]
      }], function () {
        return [{
          type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__["ToastrManager"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/berries/berries.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/berries/berries.component.ts ***!
    \*********************************************************/

  /*! exports provided: BerriesComponent */

  /***/
  function srcAppComponentsBerriesBerriesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BerriesComponent", function () {
      return BerriesComponent;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/user */
    "./src/app/models/user.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/service/data.service */
    "./src/app/service/data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/__ivy_ngcc__/fesm2015/ng6-toastr-notifications.js");
    /* harmony import */


    var _common_firstnav_firstnav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../common/firstnav/firstnav.component */
    "./src/app/components/common/firstnav/firstnav.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../common/footer/footer.component */
    "./src/app/components/common/footer/footer.component.ts");

    function BerriesComponent_div_4_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BerriesComponent_div_4_div_1_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r52);

          var item_r49 = ctx.$implicit;

          var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r51.getProductsbyId(item_r49);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Price per kg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Add to cart");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r49 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", item_r49 == null ? null : item_r49.prouduct_image_url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r49 == null ? null : item_r49.product_title);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("INR ", item_r49 == null ? null : item_r49.product_price, "");
      }
    }

    function BerriesComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, BerriesComponent_div_4_div_1_Template, 18, 3, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r46.vegitables);
      }
    }

    function BerriesComponent_div_5_div_1_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function BerriesComponent_div_5_div_1_div_17_a_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BerriesComponent_div_5_div_1_div_17_a_1_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r62);

          var item_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r60.favorite(item_r54);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function BerriesComponent_div_5_div_1_div_17_a_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BerriesComponent_div_5_div_1_div_17_a_2_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r65);

          var item_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r63.favorite(item_r54);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function BerriesComponent_div_5_div_1_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, BerriesComponent_div_5_div_1_div_17_a_1_Template, 2, 0, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, BerriesComponent_div_5_div_1_div_17_a_2_Template, 2, 0, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (item_r54 == null ? null : item_r54.is_favourite) == "0");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (item_r54 == null ? null : item_r54.is_favourite) == "1");
      }
    }

    function BerriesComponent_div_5_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BerriesComponent_div_5_div_1_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r68);

          var item_r54 = ctx.$implicit;

          var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r67.getProductsbyId(item_r54);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Price per kg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Add to cart");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, BerriesComponent_div_5_div_1_div_16_Template, 3, 0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, BerriesComponent_div_5_div_1_div_17_Template, 3, 2, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r54 = ctx.$implicit;

        var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", item_r54 == null ? null : item_r54.prouduct_image_url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r54 == null ? null : item_r54.product_title);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("INR ", item_r54 == null ? null : item_r54.product_price, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r53.isLogin);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r53.isLogin);
      }
    }

    function BerriesComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, BerriesComponent_div_5_div_1_Template, 18, 5, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r47.vegitables1);
      }
    }

    var BerriesComponent =
    /*#__PURE__*/
    function () {
      function BerriesComponent(service, router, toastr, http) {
        _classCallCheck(this, BerriesComponent);

        this.service = service;
        this.router = router;
        this.toastr = toastr;
        this.http = http;
        this.favObj = new src_app_models_user__WEBPACK_IMPORTED_MODULE_2__["favourite"]();
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
      }

      _createClass(BerriesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.isLogin = localStorage.getItem('Authorization');
          this.name = localStorage.getItem('productname');
          this.getProducts();
          this.getProducts1();
        } // getBestSellers(){
        //   this.service.getBestSellers().subscribe(
        //     (data:any)=> {
        //       debugger
        //     this.bestsellers= data.data.bestSellers;
        //   });
        // }

      }, {
        key: "getProducts",
        value: function getProducts() {
          var _this9 = this;

          // debugger
          this.slug = localStorage.getItem('productname'); // this.slug = "vegetables";

          this.service.getProducts(this.slug).subscribe(function (data) {
            // debugger
            _this9.vegitables = data.data.products;
            _this9.name = data.data.slug; // location.reload();
            // this.router.navigate(['/products']);
          }, function (err) {
            var message = 'There is an issue with service. Please retry.';

            if (err.status === 400) {
              message = 'There is an error in getting list of sold to. Please retry.';
            }
          });
        }
      }, {
        key: "getProducts1",
        value: function getProducts1() {
          var _this10 = this;

          // debugger
          this.slug = localStorage.getItem('productname');
          this.id = localStorage.getItem('userId');
          this.service.getProducts1(this.slug, this.id).subscribe(function (data) {
            // debugger
            _this10.vegitables1 = data.data.products;
            _this10.name = data.data.slug; // location.reload();
            // this.router.navigate(['/products']);
          }, function (err) {
            var message = 'There is an issue with service. Please retry.';

            if (err.status === 400) {
              message = 'There is an error in getting list of sold to. Please retry.';
            }
          });
        }
      }, {
        key: "getProductsbyId",
        value: function getProductsbyId(item) {
          var _this11 = this;

          // debugger
          this.slug = item.product_slug; // this.slug = "vegetables";

          this.service.getProductsbyId(this.slug).subscribe(function (data) {
            // debugger
            _this11.vegitables = data.data.products;
            _this11.name = data.data.products.product_slug;
            _this11.productslug = localStorage.setItem('productslug', data.data.products.product_slug);

            _this11.router.navigate(['/productdetails']); // location.reload();

          }, function (err) {
            var message = 'There is an issue with service. Please retry.';

            if (err.status === 400) {
              message = 'There is an error in getting list of sold to. Please retry.';
            }
          });
        }
      }, {
        key: "favorite",
        value: function favorite(item) {
          // debugger
          if (item.is_favourite === "0") {
            this.favObj.favourite = true;
          }

          if (item.is_favourite === "1") {
            this.favObj.favourite = false;
          } // this.favObj.favourite = true;


          this.addToFavourites(item);
        } // console.log(this.quantity+1);

      }, {
        key: "addToFavourites",
        value: function addToFavourites(item) {
          var _this12 = this;

          // debugger
          this.favObj.product_id = item.product_id;
          this.favObj.user_id = localStorage.getItem('userId'); // this.favObj.favourite = true;

          var fData = new FormData();
          fData.append("product_id", this.favObj.product_id);
          fData.append("user_id", this.favObj.user_id);
          fData.append("favourite", JSON.stringify(this.favObj.favourite));
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            "x-api-key": "12345"
          });
          var profile = "addtofavourites";
          this.http.post(this.baseUrl + profile, fData, {
            headers: headers
          }).subscribe(function (data) {
            // debugger
            if (data.status === false) {
              _this12.toastr.errorToastr(data.data.error, 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              }); // location.reload()

            } else {
              _this12.toastr.successToastr(data.message, 'Success!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });

              _this12.favObj = new src_app_models_user__WEBPACK_IMPORTED_MODULE_2__["favourite"]();

              _this12.getProducts1(); // location.reload();

            }
          }, function (err) {
            //debugger
            if (err && err.error && err.error) {
              var errorMesg = err.error.message;

              _this12.toastr.errorToastr(errorMesg, 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });
            } else {
              _this12.toastr.errorToastr('Something went wrong', 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });
            }
          });
        }
      }]);

      return BerriesComponent;
    }();

    BerriesComponent.ɵfac = function BerriesComponent_Factory(t) {
      return new (t || BerriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__["ToastrManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
    };

    BerriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: BerriesComponent,
      selectors: [["app-berries"]],
      decls: 7,
      vars: 2,
      consts: [[1, "best-selletdata"], [1, "container"], [1, "best-seller"], ["class", "row", 4, "ngIf"], [1, "row"], ["class", "col-md-3", 4, "ngFor", "ngForOf"], [1, "col-md-3"], [1, "card", "seller-content", 3, "click"], [1, "fruits-main"], ["alt", "Card image cap", 1, "card-img-top", "image-sell", 3, "src"], [1, "card-body", "fruit-info"], [1, "card-title", "title-name"], [1, "card-text", "price-per"], [1, "price-data"], [1, "price"], [1, "rate-image", "ml-auto"], ["id", "addcartbtn", 1, "btn", "btn-success"], [1, "cart-data"], [1, "far", "fa-heart", "hart-image"], ["class", "col-md-3  seller-card", 4, "ngFor", "ngForOf"], [1, "col-md-3", "seller-card"], [4, "ngIf"], ["class", "cart-data", 3, "click", 4, "ngIf"], [1, "cart-data", 3, "click"], [1, "fas", "fa-heart", "hart-image", 2, "color", "#ed1c24"]],
      template: function BerriesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-firstnav");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, BerriesComponent_div_4_Template, 2, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, BerriesComponent_div_5_Template, 2, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "app-footer");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLogin);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLogin);
        }
      },
      directives: [_common_firstnav_firstnav_component__WEBPACK_IMPORTED_MODULE_7__["FirstnavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]],
      styles: ["@media screen and (max-width: 800px) {\r\n    .seller-card[_ngcontent-%COMP%] {\r\n        margin: 10px 40px 10px 40px;\r\n    }\r\n    .image-sell[_ngcontent-%COMP%] {\r\n        width: 65%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9iZXJyaWVzL2JlcnJpZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO1FBQ0ksMkJBQTJCO0lBQy9CO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmVycmllcy9iZXJyaWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgLnNlbGxlci1jYXJkIHtcclxuICAgICAgICBtYXJnaW46IDEwcHggNDBweCAxMHB4IDQwcHg7XHJcbiAgICB9XHJcbiAgICAuaW1hZ2Utc2VsbCB7XHJcbiAgICAgICAgd2lkdGg6IDY1JTtcclxuICAgIH1cclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BerriesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-berries',
          templateUrl: './berries.component.html',
          styleUrls: ['./berries.component.css']
        }]
      }], function () {
        return [{
          type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__["ToastrManager"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/best-seller/best-seller.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/best-seller/best-seller.component.ts ***!
    \*****************************************************************/

  /*! exports provided: BestSellerComponent */

  /***/
  function srcAppComponentsBestSellerBestSellerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BestSellerComponent", function () {
      return BestSellerComponent;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/user */
    "./src/app/models/user.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/service/data.service */
    "./src/app/service/data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/__ivy_ngcc__/fesm2015/ng6-toastr-notifications.js");
    /* harmony import */


    var _common_firstnav_firstnav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../common/firstnav/firstnav.component */
    "./src/app/components/common/firstnav/firstnav.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../common/footer/footer.component */
    "./src/app/components/common/footer/footer.component.ts");

    function BestSellerComponent_div_6_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BestSellerComponent_div_6_div_1_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r75);

          var item_r72 = ctx.$implicit;

          var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r74.getProductsbyId(item_r72);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Price per kg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Add to cart");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r72 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", item_r72 == null ? null : item_r72.prouduct_image_url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r72 == null ? null : item_r72.product_title);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("INR ", item_r72 == null ? null : item_r72.product_price, "");
      }
    }

    function BestSellerComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, BestSellerComponent_div_6_div_1_Template, 18, 3, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r69.bestsellers);
      }
    }

    function BestSellerComponent_div_7_div_1_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function BestSellerComponent_div_7_div_1_div_17_a_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BestSellerComponent_div_7_div_1_div_17_a_1_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r85);

          var item_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r83.favorite(item_r77);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function BestSellerComponent_div_7_div_1_div_17_a_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BestSellerComponent_div_7_div_1_div_17_a_2_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r88);

          var item_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r86.favorite(item_r77);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function BestSellerComponent_div_7_div_1_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, BestSellerComponent_div_7_div_1_div_17_a_1_Template, 2, 0, "a", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, BestSellerComponent_div_7_div_1_div_17_a_2_Template, 2, 0, "a", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (item_r77 == null ? null : item_r77.is_favourite) == "0");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (item_r77 == null ? null : item_r77.is_favourite) == "1");
      }
    }

    function BestSellerComponent_div_7_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BestSellerComponent_div_7_div_1_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r91);

          var item_r77 = ctx.$implicit;

          var ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r90.getProductsbyId(item_r77);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Price per kg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Add to cart");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, BestSellerComponent_div_7_div_1_div_16_Template, 3, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, BestSellerComponent_div_7_div_1_div_17_Template, 3, 2, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r77 = ctx.$implicit;

        var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", item_r77 == null ? null : item_r77.prouduct_image_url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r77 == null ? null : item_r77.product_title);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("INR ", item_r77 == null ? null : item_r77.product_price, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r76.isLogin);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r76.isLogin);
      }
    }

    function BestSellerComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, BestSellerComponent_div_7_div_1_Template, 18, 5, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r70.bestsellers1);
      }
    }

    var BestSellerComponent =
    /*#__PURE__*/
    function () {
      function BestSellerComponent(service, router, toastr, http) {
        _classCallCheck(this, BestSellerComponent);

        this.service = service;
        this.router = router;
        this.toastr = toastr;
        this.http = http;
        this.favObj = new src_app_models_user__WEBPACK_IMPORTED_MODULE_2__["favourite"]();
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
      }

      _createClass(BestSellerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.isLogin = localStorage.getItem('Authorization');
          this.getBestSellers();
          this.getBestSellers1();
        }
      }, {
        key: "getBestSellers",
        value: function getBestSellers() {
          var _this13 = this;

          this.service.getBestSellers().subscribe(function (data) {
            // debugger
            _this13.bestsellers = data.data.bestSellers;
          });
        }
      }, {
        key: "getBestSellers1",
        value: function getBestSellers1() {
          var _this14 = this;

          this.id = localStorage.getItem('userId');
          this.service.getBestSellers1(this.id).subscribe(function (data) {
            // debugger
            _this14.bestsellers1 = data.data.bestSellers;
          });
        }
      }, {
        key: "getProductsbyId",
        value: function getProductsbyId(item) {
          var _this15 = this;

          // debugger
          this.slug = item.product_slug; // this.slug = "vegetables";

          this.service.getProductsbyId(this.slug).subscribe(function (data) {
            // debugger
            // this.vegitables = data.data.products;
            // this.name = data.data.products.product_slug;
            _this15.productslug = localStorage.setItem('productslug', data.data.products.product_slug);

            _this15.router.navigate(['/productdetails']); // location.reload()

          }, function (err) {
            var message = 'There is an issue with service. Please retry.';

            if (err.status === 400) {
              message = 'There is an error in getting list of sold to. Please retry.';
            }
          });
        }
      }, {
        key: "favorite",
        value: function favorite(item) {
          // debugger
          if (item.is_favourite === "0") {
            this.favObj.favourite = true;
          }

          if (item.is_favourite === "1") {
            this.favObj.favourite = false;
          } // this.favObj.favourite = true;


          this.addToFavourites(item);
        } // console.log(this.quantity+1);

      }, {
        key: "addToFavourites",
        value: function addToFavourites(item) {
          var _this16 = this;

          // debugger
          this.favObj.product_id = item.product_id;
          this.favObj.user_id = localStorage.getItem('userId'); // this.favObj.favourite = true;

          var fData = new FormData();
          fData.append("product_id", this.favObj.product_id);
          fData.append("user_id", this.favObj.user_id);
          fData.append("favourite", JSON.stringify(this.favObj.favourite));
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            "x-api-key": "12345"
          });
          var profile = "addtofavourites";
          this.http.post(this.baseUrl + profile, fData, {
            headers: headers
          }).subscribe(function (data) {
            // debugger
            if (data.status === false) {
              _this16.toastr.errorToastr(data.data.error, 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              }); // location.reload()

            } else {
              _this16.toastr.successToastr(data.message, 'Success!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });

              _this16.favObj = new src_app_models_user__WEBPACK_IMPORTED_MODULE_2__["favourite"]();

              _this16.getBestSellers1(); // location.reload();

            }
          }, function (err) {
            //debugger
            if (err && err.error && err.error) {
              var errorMesg = err.error.message;

              _this16.toastr.errorToastr(errorMesg, 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });
            } else {
              _this16.toastr.errorToastr('Something went wrong', 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });
            }
          });
        }
      }]);

      return BestSellerComponent;
    }();

    BestSellerComponent.ɵfac = function BestSellerComponent_Factory(t) {
      return new (t || BestSellerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__["ToastrManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
    };

    BestSellerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: BestSellerComponent,
      selectors: [["app-best-seller"]],
      decls: 9,
      vars: 2,
      consts: [[1, "best-selletdata"], [1, "container"], [1, "best-seller"], [1, "best-sellertitle"], ["class", "row", 4, "ngIf"], [1, "row"], ["class", "col-md-3", 4, "ngFor", "ngForOf"], [1, "col-md-3"], [1, "card", "seller-content", 3, "click"], [1, "fruits-main"], ["alt", "Card image cap", 1, "card-img-top", "image-sell", 3, "src"], [1, "card-body", "fruit-info"], [1, "card-title", "title-name"], [1, "card-text", "price-per"], [1, "price-data"], [1, "price"], [1, "rate-image", "ml-auto"], ["id", "addcartbtn", 1, "btn", "btn-success"], [1, "cart-data"], [1, "far", "fa-heart", "hart-image"], ["class", "col-md-3 seller-card", 4, "ngFor", "ngForOf"], [1, "col-md-3", "seller-card"], [4, "ngIf"], ["class", "cart-data", 3, "click", 4, "ngIf"], [1, "cart-data", 3, "click"], [1, "fas", "fa-heart", "hart-image", 2, "color", "#ed1c24"]],
      template: function BestSellerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-firstnav");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Best Seller");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, BestSellerComponent_div_6_Template, 2, 1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, BestSellerComponent_div_7_Template, 2, 1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "app-footer");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLogin);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLogin);
        }
      },
      directives: [_common_firstnav_firstnav_component__WEBPACK_IMPORTED_MODULE_7__["FirstnavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]],
      styles: ["@media screen and (max-width: 800px) {\r\n    .seller-card[_ngcontent-%COMP%] {\r\n        margin: 10px 40px 10px 40px;\r\n    }\r\n    .image-sell[_ngcontent-%COMP%] {\r\n        width: 65%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9iZXN0LXNlbGxlci9iZXN0LXNlbGxlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7UUFDSSwyQkFBMkI7SUFDL0I7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9iZXN0LXNlbGxlci9iZXN0LXNlbGxlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgIC5zZWxsZXItY2FyZCB7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDQwcHggMTBweCA0MHB4O1xyXG4gICAgfVxyXG4gICAgLmltYWdlLXNlbGwge1xyXG4gICAgICAgIHdpZHRoOiA2NSU7XHJcbiAgICB9XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BestSellerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-best-seller',
          templateUrl: './best-seller.component.html',
          styleUrls: ['./best-seller.component.css']
        }]
      }], function () {
        return [{
          type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__["ToastrManager"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/blog/blog.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/blog/blog.component.ts ***!
    \***************************************************/

  /*! exports provided: BlogComponent */

  /***/
  function srcAppComponentsBlogBlogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogComponent", function () {
      return BlogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _common_firstnav_firstnav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../common/firstnav/firstnav.component */
    "./src/app/components/common/firstnav/firstnav.component.ts");
    /* harmony import */


    var _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../common/footer/footer.component */
    "./src/app/components/common/footer/footer.component.ts");

    var BlogComponent =
    /*#__PURE__*/
    function () {
      function BlogComponent() {
        _classCallCheck(this, BlogComponent);
      }

      _createClass(BlogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BlogComponent;
    }();

    BlogComponent.ɵfac = function BlogComponent_Factory(t) {
      return new (t || BlogComponent)();
    };

    BlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BlogComponent,
      selectors: [["app-blog"]],
      decls: 5,
      vars: 0,
      consts: [[1, "blog_developnment"], [1, "blog_heading"]],
      template: function BlogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-firstnav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "The page is under design ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer");
        }
      },
      directives: [_common_firstnav_firstnav_component__WEBPACK_IMPORTED_MODULE_1__["FirstnavComponent"], _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmxvZy9ibG9nLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-blog',
          templateUrl: './blog.component.html',
          styleUrls: ['./blog.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/cart/cart.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/cart/cart.component.ts ***!
    \***************************************************/

  /*! exports provided: CartComponent */

  /***/
  function srcAppComponentsCartCartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartComponent", function () {
      return CartComponent;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/models/user */
    "./src/app/models/user.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/service/data.service */
    "./src/app/service/data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/__ivy_ngcc__/fesm2015/ng6-toastr-notifications.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../common/footer/footer.component */
    "./src/app/components/common/footer/footer.component.ts"); // import { StripeService } from 'ngx-stripe';


    var _c0 = function _c0() {
      return ["/landing"];
    };

    function CartComponent_div_0_a_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 135);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 136);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
      }
    }

    var _c1 = function _c1() {
      return ["/home"];
    };

    function CartComponent_div_0_a_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 135);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 136);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c1));
      }
    }

    function CartComponent_div_0_a_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 137);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 138);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r116.firstname, " ", ctx_r116.lastname, " ");
      }
    }

    function CartComponent_div_0_a_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 137);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 139);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r117.profilepic, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r117.firstname, " ", ctx_r117.lastname, " ");
      }
    }

    function CartComponent_div_0_p_41_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 140);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "0");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CartComponent_div_0_p_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 140);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r119.cartcount);
      }
    }

    var _c2 = function _c2() {
      return {
        standalone: true
      };
    };

    var _c3 = function _c3() {
      return ["/profile"];
    };

    var _c4 = function _c4() {
      return ["/my-orders"];
    };

    var _c5 = function _c5() {
      return ["/wishlist"];
    };

    var _c6 = function _c6() {
      return ["/cart"];
    };

    function CartComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r121 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 108);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nav", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CartComponent_div_0_a_3_Template, 2, 2, "a", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CartComponent_div_0_a_4_Template, 2, 2, "a", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 111);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 112);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 113);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 114);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 115);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 118);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "h5", 119);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Jayabhery Enclave");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p", 120);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Gachibowli,hyderabad,500034");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "li", 121);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "form", 122);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "input", 123, 124);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CartComponent_div_0_Template_input_ngModelChange_21_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r121);

          var ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r120.textValue = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 125);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CartComponent_div_0_Template_button_click_23_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r121);

          var _r115 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](22);

          var ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r122.logText(_r115.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "i", 126);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "li", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, CartComponent_div_0_a_26_Template, 3, 2, "a", 127);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, CartComponent_div_0_a_27_Template, 3, 3, "a", 127);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 128);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 129);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "My Account");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "a", 129);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "My Orders");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "a", 129);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "My Wishlist");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "a", 130);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CartComponent_div_0_Template_a_click_35_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r121);

          var ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r123.logout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Logout");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "li", 131);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "li", 131);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "button", 132);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "i", 133);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, CartComponent_div_0_p_41_Template, 2, 0, "p", 134);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, CartComponent_div_0_p_42_Template, 2, 1, "p", 134);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r92.isLogin);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r92.isLogin);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r92.textValue)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](13, _c2));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r92.profilepic == "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r92.profilepic != "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](14, _c3));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](15, _c4));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](16, _c5));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](17, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](18, _c6));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r92.cartcount == null || ctx_r92.cartcount == "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r92.cartcount != null);
      }
    }

    function CartComponent_div_1_a_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 135);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 136);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
      }
    }

    function CartComponent_div_1_a_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 135);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 136);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c1));
      }
    }

    function CartComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r128 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 108);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nav", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CartComponent_div_1_a_3_Template, 2, 2, "a", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CartComponent_div_1_a_4_Template, 2, 2, "a", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 111);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 141);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 113);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 142);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 143);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "form", 144);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 123, 124);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CartComponent_div_1_Template_input_ngModelChange_12_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r128);

          var ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r127.textValue = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 125);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CartComponent_div_1_Template_button_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r128);

          var _r126 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13);

          var ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r129.logText(_r126.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 126);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 145);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 118);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "h5", 119);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Jayabhery Enclave");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p", 120);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Gachibowli,hyderabad,500034");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "i", 146);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 147);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "a", 148);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Login ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span", 149);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "|");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 147);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "a", 150);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " SignUp ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r93.isLogin);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r93.isLogin);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r93.textValue)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c2));
      }
    }

    function CartComponent_li_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Home ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "(current)");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
      }
    }

    function CartComponent_li_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Home ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "(current)");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c1));
      }
    }

    function CartComponent_li_17_a_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r136 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 152);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CartComponent_li_17_a_1_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r136);

          var item_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r134.goToProductDetails(item_r130);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, item_r130 == null ? null : item_r130.ns_category_name));
      }
    }

    function CartComponent_li_17_a_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r140 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 152);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CartComponent_li_17_a_2_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r140);

          var item_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r138.goToProductDetails(item_r130);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "All");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CartComponent_li_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CartComponent_li_17_a_1_Template, 3, 3, "a", 151);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CartComponent_li_17_a_2_Template, 2, 0, "a", 151);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r130 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (item_r130 == null ? null : item_r130.ns_category_name) !== "main menu categories");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (item_r130 == null ? null : item_r130.ns_category_name) === "main menu categories");
      }
    }

    function CartComponent_li_44_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 153);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Cart(0 items) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CartComponent_li_45_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 153);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Cart(", ctx_r98.products.length, " items) ");
      }
    }

    function CartComponent_div_48_Template(rf, ctx) {
      if (rf & 1) {
        var _r144 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 154);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 155);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 156);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 118);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h5", 157);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ul", 158);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 159);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 160);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CartComponent_div_48_Template_button_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r144);

          var item_r141 = ctx.$implicit;

          var ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r143.decrement(item_r141);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 161);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 162);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 163);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CartComponent_div_48_Template_button_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r144);

          var item_r141 = ctx.$implicit;

          var ctx_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r145.increment(item_r141);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 164);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li", 165);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 160);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CartComponent_div_48_Template_button_click_20_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r144);

          var item_r141 = ctx.$implicit;

          var ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r146.deleteItem(item_r141);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 166);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r141 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", item_r141 == null ? null : item_r141.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r141 == null ? null : item_r141.product_title);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("INR ", item_r141 == null ? null : item_r141.product_price, "/-");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r141 == null ? null : item_r141.quantity);
      }
    }

    function CartComponent_div_66_div_1_h3_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 177);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Delivery Here");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CartComponent_div_66_div_1_h3_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 178);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Delivery Here");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CartComponent_div_66_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r155 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 169);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CartComponent_div_66_div_1_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r155);

          var item_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r153.onSelect(item_r147);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 170);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ul", 171);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "li", 172);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Home");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 173);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 174);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CartComponent_div_66_div_1_Template_a_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r155);

          var item_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r156.editAddress(item_r147);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, CartComponent_div_66_div_1_h3_15_Template, 2, 0, "h3", 175);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, CartComponent_div_66_div_1_h3_16_Template, 2, 0, "h3", 176);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        var ctx_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r147 == null ? null : item_r147.address, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r147 == null ? null : item_r147.Landmark, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r147 == null ? null : item_r147.state, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r147 == null ? null : item_r147.pin_code, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r149.clickedUser);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r149.clickedUser);
      }
    }

    function CartComponent_div_66_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 179);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No Data");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CartComponent_div_66_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 103);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CartComponent_div_66_div_1_Template, 17, 6, "div", 167);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CartComponent_div_66_div_2_Template, 2, 0, "div", 168);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r147 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (item_r147 == null ? null : item_r147.address) != null);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (item_r147 == null ? null : item_r147.address) == null);
      }
    }

    function CartComponent_div_81_Template(rf, ctx) {
      if (rf & 1) {
        var _r160 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 170);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul", 180);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "li", 181);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Address");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul", 182);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li", 172);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Home");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 183);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ul", 180);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li", 181);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Payment Method");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 184);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CartComponent_div_81_Template_button_click_18_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r160);

          var ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r159.initPay();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Pay now");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r101.clickedUser == null ? null : ctx_r101.clickedUser.address, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r101.clickedUser == null ? null : ctx_r101.clickedUser.Landmark, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r101.clickedUser == null ? null : ctx_r101.clickedUser.state, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r101.clickedUser == null ? null : ctx_r101.clickedUser.pin_code, " ");
      }
    }

    function CartComponent_div_82_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 170);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please select Delivery Address To Make Payment ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CartComponent_div_83_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 185);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 186);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ul", 187);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "li", 188);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Bill Details");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li", 189);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 190);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 191);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Total ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 192);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("items Total (", ctx_r103.cartcount, " items) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("INR ", ctx_r103.total, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("INR ", ctx_r103.total, "");
      }
    }

    function CartComponent_div_84_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 185);
      }
    }

    function CartComponent_div_94_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 195);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " address is required* ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CartComponent_div_94_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 193);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CartComponent_div_94_div_1_Template, 2, 0, "div", 194);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r105.addressForm.get("address").errors.required);
      }
    }

    function CartComponent_div_99_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 195);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " landmark is required* ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CartComponent_div_99_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 193);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CartComponent_div_99_div_1_Template, 2, 0, "div", 194);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r106.addressForm.get("landmark").errors.required);
      }
    }

    function CartComponent_div_104_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 195);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " state is required* ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CartComponent_div_104_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 193);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CartComponent_div_104_div_1_Template, 2, 0, "div", 194);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r107.addressForm.get("state").errors.required);
      }
    }

    function CartComponent_div_109_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 195);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " pin_code is required* ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CartComponent_div_109_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 193);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CartComponent_div_109_div_1_Template, 2, 0, "div", 194);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r108.addressForm.get("pin_code").errors.required);
      }
    }

    function CartComponent_div_121_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 195);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " address is required* ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CartComponent_div_121_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 193);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CartComponent_div_121_div_1_Template, 2, 0, "div", 194);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r109.addressForm.get("address").errors.required);
      }
    }

    function CartComponent_div_126_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 195);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " landmark is required* ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CartComponent_div_126_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 193);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CartComponent_div_126_div_1_Template, 2, 0, "div", 194);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r110.addressForm.get("landmark").errors.required);
      }
    }

    function CartComponent_div_131_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 195);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " state is required* ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CartComponent_div_131_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 193);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CartComponent_div_131_div_1_Template, 2, 0, "div", 194);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r111.addressForm.get("state").errors.required);
      }
    }

    function CartComponent_div_136_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 195);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " pin_code is required* ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CartComponent_div_136_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 193);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CartComponent_div_136_div_1_Template, 2, 0, "div", 194);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r112.addressForm.get("pin_code").errors.required);
      }
    }

    var _c7 = function _c7() {
      return ["/aboutus"];
    };

    var _c8 = function _c8() {
      return ["/blog"];
    };

    var _c9 = function _c9() {
      return ["/news"];
    };

    var _c10 = function _c10() {
      return ["/offers"];
    };

    var CartComponent =
    /*#__PURE__*/
    function () {
      function CartComponent(service, router, toastr, http) {
        _classCallCheck(this, CartComponent);

        this.service = service;
        this.router = router;
        this.toastr = toastr;
        this.http = http;
        this.addressObj = new src_app_models_user__WEBPACK_IMPORTED_MODULE_3__["addressU"]();
        this.addObj = new src_app_models_user__WEBPACK_IMPORTED_MODULE_3__["addcart"]();
        this.confirmObj = new src_app_models_user__WEBPACK_IMPORTED_MODULE_3__["confirmP"]();
        this.paymentObj = new src_app_models_user__WEBPACK_IMPORTED_MODULE_3__["paymentC"]();
        this.isVisible = true; // cartArray: any;

        this.cartArray = [];
        this.groupList = [];
        this.textValue = '';
        this.order_array_input = [];
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl;
      }

      _createClass(CartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.isLogin = localStorage.getItem('Authorization');
          this.getCartDetails();
          this.getUserAddress();
          this.getUserProfile();
          this.getCategories();
          this.loadScripts();
          this.quantity = 1; // this.quantity = 1;

          this.addressForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            landmark: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            pin_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
          });
        }
      }, {
        key: "loadScripts",
        value: function loadScripts() {
          // debugger
          var dynamicScripts = ['../../assets/js/owl.carousel.min.js', '../../assets/js/owl-content.js'];

          for (var i = 0; i < dynamicScripts.length; i++) {
            var node = document.createElement('script');
            node.src = dynamicScripts[i];
            node.type = 'text/javascript';
            node.async = false;
            node.charset = 'utf-8';
            document.getElementsByTagName('head')[0].appendChild(node);
          }
        }
      }, {
        key: "getCartDetails",
        value: function getCartDetails() {
          var _this17 = this;

          // debugger
          this.id = localStorage.getItem('userId');
          this.service.getCartDetails(this.id).subscribe(function (data) {
            // debugger
            // if(data.data !== null){
            _this17.products = data.data.cart_products;
            _this17.quantity = data.data.cart_products[0].quantity;
            _this17.cartcount = data.data.count;
            _this17.total = data.data.total;
            _this17.payableAmount = _this17.total * 100; // this.image = data.data.cart_products[0].images[0].product_image_name;
          });
        }
      }, {
        key: "orderConfirmation",
        value: function orderConfirmation() {
          var _this18 = this;

          // debugger
          this.confirmObj.user_id = localStorage.getItem('userId');
          this.confirmObj.total_price_input = this.total;
          this.confirmObj.order_array_input = [];
          this.products.forEach(function (item, index) {
            var obj = {};

            _this18.groupList.push(item.product_id, item.quantity);

            obj.product_id = item.product_id;
            obj.product_qty = item.quantity;

            _this18.confirmObj.order_array_input.push(obj);
          }); // var obj =   { "total_price_input": this.confirmObj.total_price_input, "user_id": this.confirmObj.user_id, "order_array_input": [{ "product_id":this.confirmObj.product_id, "product_qty":this.confirmObj.product_qty }] } 

          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            "x-api-key": "12345"
          });
          var profile = "order_confirmation";
          this.http.post(this.baseUrl + profile, this.confirmObj, {
            headers: headers
          }).subscribe(function (data) {
            // debugger
            if (data.data === null) {
              _this18.toastr.errorToastr(data.data.error, 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              }); // alert(data.message)
              // location.reload()

            } else {
              // debugger
              _this18.toastr.successToastr('Order Confirmed. Please make the payment', 'Success!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });

              _this18.confirmObj = new src_app_models_user__WEBPACK_IMPORTED_MODULE_3__["confirmP"](); // this.c.reset();
              // this.getUserAddress();

              localStorage.setItem("OrderId", data.data.ORDER_ID);
              localStorage.setItem("TxnAmount", data.data.TXN_AMOUNT);
            }
          }, function (err) {
            //debugger
            if (err && err.error && err.error) {
              var errorMesg = err.error.message;

              _this18.toastr.errorToastr(errorMesg, 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });

              _this18.addressForm.reset();
            } else {
              _this18.toastr.errorToastr('Something went wrong', 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });
            }
          });
        }
      }, {
        key: "preparePaymentDetails",
        value: function preparePaymentDetails() {
          var _this19 = this;

          var ref = this;
          return {
            "key": 'rzp_test_Z5ipkQmtNe1fTj',
            "amount": this.payableAmount,
            "currency": "INR",
            "name": 'Frootcity',
            "description": "Products Payment",
            "image": "assets/images/1.png",
            "handler": function handler(response) {
              // console.log(response);
              // this.paymentId = response.razorpay_payment_id;
              _this19.paymentId = localStorage.setItem("paymentId", response.razorpay_payment_id);

              _this19.paymentSuccess();
            },
            "notes": {
              "address": this.clickedUser
            },
            "theme": {
              "color": "#36B44E"
            }
          };
        }
      }, {
        key: "initPay",
        value: function initPay() {
          var rzp1 = new Razorpay(this.preparePaymentDetails());
          rzp1.open(); // console.log("works");
        } // increment product qty

      }, {
        key: "incrementQty",
        value: function incrementQty() {
          console.log(this.quantity + 1);
          this.quantity += 1;
        } // decrement product qty

      }, {
        key: "decrementQty",
        value: function decrementQty() {
          if (this.quantity - 1 < 1) {
            this.quantity = 1;
            console.log('1->' + this.quantity);
          } else {
            this.quantity -= 1;
            console.log('2->' + this.quantity);
          }
        }
      }, {
        key: "addAddress",
        value: function addAddress() {
          var _this20 = this;

          // debugger
          this.addressObj.user_id = localStorage.getItem('userId');
          var fData = new FormData();
          fData.append("user_id", this.addressObj.user_id);
          fData.append("address", this.addressObj.address);
          fData.append("landmark", this.addressObj.landmark);
          fData.append("state", this.addressObj.state);
          fData.append("pin_code", this.addressObj.pin_code);
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            "x-api-key": "12345"
          });
          var profile = "update_address";
          this.http.post(this.baseUrl + profile, fData, {
            headers: headers
          }).subscribe(function (data) {
            // debugger
            if (data.status === false) {
              _this20.toastr.errorToastr(data.data.error, 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              }); // alert(data.message)


              _this20.addressForm.reset(); // location.reload()

            } else {
              _this20.toastr.successToastr(data.message, 'Success!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });

              _this20.addressObj = new src_app_models_user__WEBPACK_IMPORTED_MODULE_3__["addressU"]();

              _this20.addressForm.reset();

              $('#addaddress').modal('hide');
              $('#editaddress').modal('hide');

              _this20.getUserAddress();
            }
          }, function (err) {
            //debugger
            if (err && err.error && err.error) {
              var errorMesg = err.error.message;

              _this20.toastr.errorToastr(errorMesg, 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });

              _this20.addressForm.reset();
            } else {
              _this20.toastr.errorToastr('Something went wrong', 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });
            }
          });
        }
      }, {
        key: "editAddress",
        value: function editAddress(value) {
          this.addressObj = new src_app_models_user__WEBPACK_IMPORTED_MODULE_3__["addressU"]();
          this.addressObj.address = value.address;
          this.addressObj.landmark = value.Landmark;
          this.addressObj.state = value.state;
          this.addressObj.pin_code = value.pin_code;
          this.addressObj.user_id = value.user_id;
        }
      }, {
        key: "increment",
        value: function increment(item) {
          var _this21 = this;

          // debugger
          this.addObj.product_id = item.product_id;
          this.addObj.user_id = localStorage.getItem('userId');
          this.addObj.quantity = item.quantity;
          var fData = new FormData();
          fData.append("product_id", this.addObj.product_id);
          fData.append("user_id", this.addObj.user_id);
          fData.append("quantity", this.addObj.quantity);
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            "x-api-key": "12345"
          });
          var profile = "increment";
          this.http.post(this.baseUrl + profile, fData, {
            headers: headers
          }).subscribe(function (data) {
            // debugger
            if (data.status === false) {
              _this21.toastr.errorToastr(data.data.error, 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              }); // location.reload()

            } else {
              _this21.toastr.successToastr(data.message, 'Success!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });

              _this21.addObj = new src_app_models_user__WEBPACK_IMPORTED_MODULE_3__["addcart"](); // location.reload();

              _this21.getCartDetails();
            }
          }, function (err) {
            //debugger
            if (err && err.error && err.error) {
              var errorMesg = err.error.message;

              _this21.toastr.errorToastr(errorMesg, 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });
            } else {
              _this21.toastr.errorToastr('Something went wrong', 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });
            }
          });
        }
      }, {
        key: "decrement",
        value: function decrement(item) {
          var _this22 = this;

          // debugger
          this.addObj.product_id = item.product_id;
          this.addObj.user_id = localStorage.getItem('userId');
          this.addObj.quantity = item.quantity;
          var fData = new FormData();
          fData.append("product_id", this.addObj.product_id);
          fData.append("user_id", this.addObj.user_id);
          fData.append("quantity", this.addObj.quantity);
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            "x-api-key": "12345"
          });
          var profile = "decrement";
          this.http.post(this.baseUrl + profile, fData, {
            headers: headers
          }).subscribe(function (data) {
            // debugger
            if (data.status === false) {
              _this22.toastr.errorToastr(data.data.error, 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              }); // location.reload()

            } else {
              _this22.toastr.successToastr(data.message, 'Success!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });

              _this22.addObj = new src_app_models_user__WEBPACK_IMPORTED_MODULE_3__["addcart"](); // location.reload();

              _this22.getCartDetails();
            }
          }, function (err) {
            //debugger
            if (err && err.error && err.error) {
              var errorMesg = err.error.message;

              _this22.toastr.errorToastr(errorMesg, 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });
            } else {
              _this22.toastr.errorToastr('Something went wrong', 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });
            }
          });
        }
      }, {
        key: "getUserAddress",
        value: function getUserAddress() {
          var _this23 = this;

          // debugger
          this.id = localStorage.getItem('userId');
          this.service.getUserAddress(this.id).subscribe(function (data) {
            // //debugger
            _this23.address = [data.data.user_address]; // this.profileObj = Object.assign({}, this.profile.users);
          });
        }
      }, {
        key: "onSelect",
        value: function onSelect(item) {
          // debugger
          this.isVisible = false;
          this.clickedUser = item;
        }
      }, {
        key: "deleteItem",
        value: function deleteItem(item) {
          var _this24 = this;

          // debugger
          this.id = localStorage.getItem('userId');
          this.prodid = item.product_id;
          this.service.deleteCartItems(this.id, this.prodid).subscribe(function (data) {
            // debugger
            _this24.toastr.successToastr(data.message, 'Success!', {
              position: 'bottom-center',
              toastTimeout: 1000
            }); // this.products = data.data.products;


            setTimeout(function () {
              window.location.reload();
            }, 500);

            _this24.getCartDetails();
          }, function (err) {
            var message = 'There is an issue with service. Please retry.';

            if (err.status === 400) {
              message = 'There is an error in getting list of sold to. Please retry.';
            }
          });
        }
      }, {
        key: "paymentSuccess",
        value: function paymentSuccess() {
          var _this25 = this;

          // debugger
          this.paymentObj.user_id = localStorage.getItem('userId');
          this.paymentObj.razorpay_payment_id = localStorage.getItem('paymentId');
          ;
          this.paymentObj.TXN_AMOUNT = localStorage.getItem('TxnAmount');
          this.paymentObj.ORDER_ID = localStorage.getItem('OrderId');
          var fData = new FormData();
          fData.append("user_id", this.paymentObj.user_id);
          fData.append("razorpay_payment_id", this.paymentObj.razorpay_payment_id);
          fData.append("TXN_AMOUNT", this.paymentObj.TXN_AMOUNT);
          fData.append("ORDER_ID", this.paymentObj.ORDER_ID);
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            "x-api-key": "12345"
          });
          var profile = "sccess_response";
          this.http.post(this.baseUrl + profile, fData, {
            headers: headers
          }).subscribe(function (data) {
            // debugger
            if (data.status === false) {
              _this25.toastr.errorToastr(data.data), 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              }; // alert(data.message)
              // location.reload()
            } else {
              _this25.toastr.successToastr(data.data, 'Success!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });

              _this25.paymentObj = new src_app_models_user__WEBPACK_IMPORTED_MODULE_3__["paymentC"](); // this.addressForm.reset();

              _this25.getCartDetails();

              setTimeout(function () {
                window.location.reload();
              }, 500); // localStorage.setItem("Authorization", data);
              // localStorage.setItem("userId", data.user._id);
            }
          }, function (err) {
            //debugger
            if (err && err.error && err.error) {
              var errorMesg = err.error.message;

              _this25.toastr.errorToastr(errorMesg, 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });

              _this25.addressForm.reset();
            } else {
              _this25.toastr.errorToastr('Something went wrong', 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });
            }
          });
        }
      }, {
        key: "getCategories",
        value: function getCategories() {
          var _this26 = this;

          this.service.getcategories().subscribe(function (data) {
            // //debugger
            _this26.categorieslist = data.data.categories;
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          // this.data.logout();
          localStorage.clear(); // location.reload()

          this.router.navigate(['/landing']);
          this.toastr.successToastr('Logout successfully', 'Success!', {
            position: 'bottom-center',
            toastTimeout: 1000
          });
          this.getCategories();
          this.getUserProfile();
          this.getCartDetails();
        }
      }, {
        key: "goToProductDetails",
        value: function goToProductDetails(item) {
          var _this27 = this;

          // debugger
          this.slug = item.ns_category_slug; // this.slug = "vegetables";

          this.service.getProducts(this.slug).subscribe(function (data) {
            // debugger
            _this27.products = data.data.products; // localStorage.setItem('productname', data.data.products[0].ns_category_slug);

            localStorage.setItem('productname', _this27.slug);

            if (_this27.slug === 'apple-and-pears') {
              _this27.router.navigate(['/apple-and-pears']);
            }

            if (_this27.slug === 'main-menu-categories') {
              _this27.router.navigate(['/all']);
            }

            if (_this27.slug === 'avacado-stone-fruits') {
              _this27.router.navigate(['/avacado-stone-fruits']);
            }

            if (_this27.slug === 'berries') {
              _this27.router.navigate(['/berries']);
            }

            if (_this27.slug === 'citrus') {
              _this27.router.navigate(['/citrus']);
            } // this.router.navigate(['/products']);
            // location.reload();
            // this.getProducts();

          }, function (err) {
            var message = 'There is an issue with service. Please retry.';

            if (err.status === 400) {
              message = 'There is an error in getting list of sold to. Please retry.';
            }
          });
        }
      }, {
        key: "getUserProfile",
        value: function getUserProfile() {
          var _this28 = this;

          // debugger
          this.id = localStorage.getItem('userId');
          this.service.getUserProfile(this.id).subscribe(function (data) {
            // //debugger
            _this28.profile = [data.data.users];
            _this28.firstname = data.data.users.first_name;
            _this28.lastname = data.data.users.last_name;
            _this28.profilepic = data.data.users.photo;
          });
        }
      }, {
        key: "logText",
        value: function logText(value) {
          // debugger
          this.log = value;
          localStorage.setItem('search', this.log); // this.router.navigate(['/search', this.log]);

          this.router.navigate(['/products'], {
            queryParams: {
              search: this.log
            }
          });
          setTimeout(function () {
            window.location.reload();
          }, 500); // this.getSearchProducts();
        }
      }]);

      return CartComponent;
    }();

    CartComponent.ɵfac = function CartComponent_Factory(t) {
      return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__["ToastrManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
    };

    CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CartComponent,
      selectors: [["app-cart"]],
      decls: 206,
      vars: 41,
      consts: [["class", "fruits-content", 4, "ngIf"], [1, "second-nav"], [1, "container"], [1, "navbar", "navbar-expand-lg", "navbar-light", "p-0"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "second-data"], ["class", "nav-item active", 4, "ngIf"], [1, "nav-item", "active"], ["routerLinkActive", "router-link-active", 1, "nav-link", "second-options", 3, "routerLink"], [1, "nav-item", "dropdown"], ["id", "navbarDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "second-options", "dropdown-toggle"], ["id", "navbarDropdownList"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu"], [4, "ngFor", "ngForOf"], [1, "sr-only"], [1, "nav-item", "offers-all"], ["id", "navbarDropdown", "role", "button", 1, "nav-link", "offers-content", 3, "routerLink"], ["src", "../../../assets/images/price-tag.png", "alt", "", 1, "price-tag"], [1, "cart-content"], [1, "row"], [1, "col-md-8"], ["id", "accordion"], [1, "card", "new-cartdata"], ["id", "headingOne", "data-toggle", "collapse", "data-target", "#collapseOne", "aria-expanded", "true", "aria-controls", "collapseOne", 1, "card-header", "header-main"], [1, "mb-0"], [1, "acord-title"], [1, "list-number"], [4, "ngIf"], ["id", "collapseOne", "aria-labelledby", "headingOne", "data-parent", "#accordion", 1, "collapse", "show"], [1, "card-body", "p-0"], ["class", "media cart-items", 4, "ngFor", "ngForOf"], ["id", "headingTwo", "data-toggle", "collapse", "data-target", "#collapseTwo", "aria-expanded", "false", "aria-controls", "collapseTwo", 1, "card-header", "header-main"], [1, "btn", "btn-link", "cart-title", "collapsed"], [1, "ml-auto"], ["data-toggle", "modal", "data-target", "#addaddress", 1, "new-address"], [1, "fas", "fa-plus-circle", "mr-2"], ["id", "collapseTwo", "aria-labelledby", "headingTwo", "data-parent", "#accordion", 1, "collapse"], [1, "card-body"], ["class", "col-md-6", 4, "ngFor", "ngForOf"], ["data-toggle", "collapse", "data-target", "#collapseThree", 1, "continue-btn", 3, "click"], ["id", "headingThree", "aria-expanded", "false", "aria-controls", "collapseThree", 1, "card-header", "header-main"], ["id", "collapseThree", "aria-labelledby", "headingThree", "data-parent", "#accordion", 1, "collapse"], ["class", "address-content", 4, "ngIf"], ["class", "col-md-4", 4, "ngIf"], ["id", "addaddress", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade", 2, "z-index", "9999"], ["role", "document", 1, "modal-dialog"], [1, "modal-content", "edit-data"], [1, "modal-body"], [3, "formGroup", "ngSubmit"], [1, "mb-2"], ["for", "exampleInputEmail9", 1, "form-label", "inp-title"], ["type", "email", "id", "exampleInputEmail9", "aria-describedby", "emailHelp", "placeholder", "Address", "formControlName", "address", "required", "", 1, "form-control", "inp-txt", 3, "ngModel", "ngModelChange"], ["class", "help-block2", 4, "ngIf"], ["for", "exampleInputEmail2", 1, "form-label", "inp-title"], ["type", "email", "id", "exampleInputEmail2", "aria-describedby", "emailHelp", "placeholder", "Landmark", "formControlName", "landmark", "required", "", 1, "form-control", "inp-txt", 3, "ngModel", "ngModelChange"], ["for", "exampleInputEmail3", 1, "form-label", "inp-title"], ["type", "text", "id", "exampleInputEmail3", "aria-describedby", "emailHelp", "placeholder", "State", "formControlName", "state", "required", "", 1, "form-control", "inp-txt", 3, "ngModel", "ngModelChange"], ["for", "exampleInputEmail4", 1, "form-label", "inp-title"], ["type", "text", "id", "exampleInputEmail4", "aria-describedby", "emailHelp", "placeholder", "Pincode", "formControlName", "pin_code", "required", "", 1, "form-control", "inp-txt", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary", "submit-btn", 3, "disabled"], ["id", "editaddress", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade", 2, "z-index", "9999"], ["for", "exampleInputEmail5", 1, "form-label", "inp-title"], ["type", "email", "id", "exampleInputEmail5", "aria-describedby", "emailHelp", "placeholder", "Address", "formControlName", "address", "required", "", 1, "form-control", "inp-txt", 3, "ngModel", "ngModelChange"], ["for", "exampleInputEmail6", 1, "form-label", "inp-title"], ["type", "email", "id", "exampleInputEmail6", "aria-describedby", "emailHelp", "placeholder", "Landmark", "formControlName", "landmark", "required", "", 1, "form-control", "inp-txt", 3, "ngModel", "ngModelChange"], ["for", "exampleInputEmail7", 1, "form-label", "inp-title"], ["type", "text", "id", "exampleInputEmail7", "aria-describedby", "emailHelp", "placeholder", "State", "formControlName", "state", "required", "", 1, "form-control", "inp-txt", 3, "ngModel", "ngModelChange"], ["for", "exampleInputEmail8", 1, "form-label", "inp-title"], ["type", "text", "id", "exampleInputEmail8", "aria-describedby", "emailHelp", "placeholder", "Pincode", "formControlName", "pin_code", "required", "", 1, "form-control", "inp-txt", 3, "ngModel", "ngModelChange"], ["id", "payment-data", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-content", "add-address"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title", "address-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], ["id", "pills-tab", "role", "tablist", 1, "nav", "nav-pills", "payment-methods", "justify-content-between", "mb-3"], [1, "nav-item"], ["id", "pills-home-tab", "data-toggle", "pill", "href", "#pills-home", "role", "tab", "aria-controls", "pills-home", "aria-selected", "true", 1, "nav-link", "payment-options", "active"], ["id", "pills-profile-tab", "data-toggle", "pill", "href", "#pills-profile", "role", "tab", "aria-controls", "pills-profile", "aria-selected", "false", 1, "nav-link", "payment-options"], ["id", "pills-contact-tab", "data-toggle", "pill", "href", "#pills-contact", "role", "tab", "aria-controls", "pills-contact", "aria-selected", "false", 1, "nav-link", "payment-options"], ["id", "pills-tabContent", 1, "tab-content"], ["id", "pills-home", "role", "tabpanel", "aria-labelledby", "pills-home-tab", 1, "tab-pane", "fade", "show", "active"], [1, "card-payment"], [1, "title-cards"], [1, "subtitle-card"], [1, "new-fromdata"], [1, "form-group"], [1, "user-content"], [1, "input-group"], ["type", "text", "placeholder", "Delivery Area", 1, "form-control", "delivery-inp"], [1, "input-group-prepend"], ["id", "validationTooltipUsernamePrepend", 1, "input-group-text"], [1, "fas", "fa-map-marker-alt"], [1, "form-row"], [1, "form-group", "col-md-8"], ["type", "text", "id", "inputCity", "placeholder", "Enter Valid Throug(MM/YY)", 1, "form-control", "delivery-inp"], [1, "form-group", "col-md-4"], ["type", "text", "id", "inputZip", "placeholder", "Enter CVV Number", 1, "form-control", "delivery-inp"], [1, "form-group", "mb-4"], ["type", "password", "placeholder", "Delivery Instructions", 1, "form-control", "delivery-inp"], [1, "form-check", "mb-3"], ["type", "checkbox", "id", "exampleCheck1", 1, "form-check-input"], ["for", "exampleCheck1", 1, "form-check-label", "user-content"], [1, "col-md-6"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary", "close-btn"], ["type", "button", 1, "btn", "btn-primary", "save-button"], ["id", "pills-profile", "role", "tabpanel", "aria-labelledby", "pills-profile-tab", 1, "tab-pane", "fade"], ["id", "pills-contact", "role", "tabpanel", "aria-labelledby", "pills-contact-tab", 1, "tab-pane", "fade"], [1, "fruits-content"], [1, "navbar", "navbar-expand-lg"], ["class", "navbar-brand logo-data", 3, "routerLink", 4, "ngIf"], [1, "sidenav-btn"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "btn", "btn-dark", "d-inline-block", "d-lg-none", "ml-auto"], [1, "fas", "fa-align-justify"], [1, "navbar-nav", "top-header", "top_jayabhery"], [1, "media", "loacation-content", "Jayabhery_media"], [1, "loaction"], [1, "fas", "fa-map-marker-alt", "loco-icons"], [1, "media-body"], [1, "title-loca", "mt-0"], [1, "subtitle-content"], [1, "nav-item", "ml-auto"], [1, "form-inline"], ["type", "text", "required", "", "placeholder", "Search for Products...", "aria-label", "Search", 1, "form-control", "search-data", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["textbox", ""], ["type", "submit", 1, "btn", "btn-outline-success", "search-button", 3, "click"], [1, "fas", "fa-search"], ["class", "nav-link new-profiledata  dropdown-toggle", "id", "navbarDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 4, "ngIf"], [1, "dropdown-menu", "dropdown-menu-sm", "dropdown-menu-right"], ["routerLinkActive", "router-link-active", 1, "dropdown-item", 3, "routerLink"], [1, "dropdown-item", 3, "routerLink", "click"], [1, "nav-item", "ml-2", "mr-2"], ["routerLinkActive", "router-link-active", 1, "loaction", 3, "routerLink"], [1, "fas", "fa-shopping-cart", "loco-icons"], ["class", "number-note", 4, "ngIf"], [1, "navbar-brand", "logo-data", 3, "routerLink"], ["src", "../../../../assets/images/1.png", "alt", "", 1, "logo-img"], ["id", "navbarDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "new-profiledata", "dropdown-toggle"], ["src", "../../../assets/images/Group 31234.png", "width", "25px", "alt", "", 1, "rounded-circle", "img-data", "mr-1"], ["width", "25px", "alt", "", 1, "rounded-circle", "img-data", "mr-1", 3, "src"], [1, "number-note"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "btn", "btn_menu", "d-inline-block", "d-lg-none", "ml-auto"], [1, "navbar-expand-lg"], [1, "navbar-nav", "top-header"], [1, "form-inline", "search-form"], [1, "media", "loacation-content", "loacation-content1"], [1, "far", "fa-user", "faloginuser"], [1, "login-contentextra"], ["name", "login", "data-toggle", "modal", "data-target", "#myModal2", 1, "loaction", "loaction1"], [1, "asd"], ["name", "signup", "data-toggle", "modal", "data-target", "#myModal2", 1, "loaction", "loaction1"], ["class", "dropdown-item", "style", "cursor: pointer;", 3, "click", 4, "ngIf"], [1, "dropdown-item", 2, "cursor", "pointer", 3, "click"], [1, "btn", "btn-link", "cart-title"], [1, "media", "cart-items"], [1, "new-images"], ["alt", "Generic placeholder image", 1, "align-self-center", "image-apple", "mr-3", 3, "src"], [1, "card-itemname", "mt-0"], [1, "extra-items"], [1, "price-item", "mt-2"], [1, "qtySelector", "text-center", "mr-2", 3, "click"], [1, "fa", "fa-minus", "decreaseQty"], [1, "mt-2"], [1, "qtySelector", "text-center", "ml-2", 3, "click"], [1, "fa", "fa-plus", "increaseQty"], [1, "ml-2"], [1, "far", "fa-trash-alt"], ["class", "address-card", 3, "click", 4, "ngIf"], ["class", "no-data", "style", "margin: 0 auto;", 4, "ngIf"], [1, "address-card", 3, "click"], [1, "address-content"], [1, "address-default"], [1, "home", 2, "font-size", "14px"], [1, "total-address", 2, "color", "#000", "font-size", "17px"], ["data-toggle", "modal", "data-target", "#editaddress", 1, "edit-btn", 2, "color", "blue", "font-size", "14px", 3, "click"], ["class", "data-content", "style", "cursor: pointer;", 4, "ngIf"], ["class", "data-content", "style", "background-color: red; color: #fff;", 4, "ngIf"], [1, "data-content", 2, "cursor", "pointer"], [1, "data-content", 2, "background-color", "red", "color", "#fff"], [1, "no-data", 2, "margin", "0 auto"], [1, "address-title"], [1, "address-left"], [1, "inside-address"], [1, "total-address", 2, "color", "#000", "font-size", "15px"], [1, "btn", "btn-primary", 2, "background-color", "red", "border", "none", "margin", "8px", 3, "click"], [1, "col-md-4"], [1, "media", "right-payment"], [1, "payment-total"], [1, "bill-title", "pb-1"], [1, "items-total", "d-flex", "justify-content-between", "align-items-center", "pb-1"], [1, "payment-total1"], [1, "items-total2", "d-flex", "justify-content-between", "align-items-center", "pb-2"], [1, "new-code"], [1, "help-block2"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"]],
      template: function CartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CartComponent_div_0_Template, 43, 19, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CartComponent_div_1_Template, 34, 5, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nav", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CartComponent_li_7_Template, 5, 2, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CartComponent_li_8_Template, 5, 2, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "About Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Products ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ul", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, CartComponent_li_17_Template, 3, 2, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Blog ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "(current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "News ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "(current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " Offers ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "h5", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "ul", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, CartComponent_li_44_Template, 3, 0, "li", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, CartComponent_li_45_Template, 3, 1, "li", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, CartComponent_div_48_Template, 22, 4, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "h5", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "ul", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, " Delivery Address ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "li", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "a", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "i", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Add New Delivery Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](66, CartComponent_div_66_Template, 3, 2, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "button", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CartComponent_Template_button_click_67_listener() {
            return ctx.orderConfirmation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Continue");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "h5", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "ul", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, " Payment ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](81, CartComponent_div_81_Template, 20, 4, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](82, CartComponent_div_82_Template, 2, 0, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](83, CartComponent_div_83_Template, 14, 3, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](84, CartComponent_div_84_Template, 1, 0, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "form", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function CartComponent_Template_form_ngSubmit_89_listener() {
            return ctx.addAddress();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "label", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "input", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CartComponent_Template_input_ngModelChange_93_listener($event) {
            return ctx.addressObj.address = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](94, CartComponent_div_94_Template, 2, 1, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "label", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "Landmark");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "input", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CartComponent_Template_input_ngModelChange_98_listener($event) {
            return ctx.addressObj.landmark = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](99, CartComponent_div_99_Template, 2, 1, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "label", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "State");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "input", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CartComponent_Template_input_ngModelChange_103_listener($event) {
            return ctx.addressObj.state = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](104, CartComponent_div_104_Template, 2, 1, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "label", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "Pincode");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "input", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CartComponent_Template_input_ngModelChange_108_listener($event) {
            return ctx.addressObj.pin_code = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](109, CartComponent_div_109_Template, 2, 1, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "button", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "form", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function CartComponent_Template_form_ngSubmit_116_listener() {
            return ctx.addAddress();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "label", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "input", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CartComponent_Template_input_ngModelChange_120_listener($event) {
            return ctx.addressObj.address = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](121, CartComponent_div_121_Template, 2, 1, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "label", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "Landmark");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "input", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CartComponent_Template_input_ngModelChange_125_listener($event) {
            return ctx.addressObj.landmark = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](126, CartComponent_div_126_Template, 2, 1, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "label", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129, "State");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "input", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CartComponent_Template_input_ngModelChange_130_listener($event) {
            return ctx.addressObj.state = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](131, CartComponent_div_131_Template, 2, 1, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "label", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, "Pincode");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "input", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CartComponent_Template_input_ngModelChange_135_listener($event) {
            return ctx.addressObj.pin_code = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](136, CartComponent_div_136_Template, 2, 1, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "button", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "h5", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, "Edit Payment Method");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "button", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "span", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](148, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "ul", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "li", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "a", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, "Credit/ Debit Card");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "li", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "a", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](155, "Net Banking");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "li", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "a", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](158, "Cash On Delivery");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "h3", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](163, " Add New Card ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "p", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](165, "WE ACCEPT ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](167, "(Master/Visa/Rupay)");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "form", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "label", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](171, "Card Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "div", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](173, "input", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "span", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](176, "i", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "label", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](180, "Valid Throug(MM/YY)");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](181, "input", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "label", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](184, "cvv");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](185, "input", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "div", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "label", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](188, "Name on Card");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](189, "input", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "div", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](191, "input", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "label", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](193, "Save this card for a faster checkout next time");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "div", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "button", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](197, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "div", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "button", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](200, "Save changes");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](202, "...");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "div", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](204, "...");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](205, "app-footer");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLogin);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLogin);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLogin);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLogin);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](37, _c7));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.categorieslist);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](38, _c8));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](39, _c9));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](40, _c10));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.products);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.products);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.products);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.address);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.clickedUser != null);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.clickedUser == null);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.total != null);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.total == null || ctx.total == "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.addressForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.addressObj.address);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.addressForm.get("address").invalid && (ctx.addressForm.get("address").touched || ctx.addressForm.get("address").dirty));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.addressObj.landmark);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.addressForm.get("landmark").invalid && (ctx.addressForm.get("landmark").touched || ctx.addressForm.get("landmark").dirty));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.addressObj.state);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.addressForm.get("state").invalid && (ctx.addressForm.get("state").touched || ctx.addressForm.get("state").dirty));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.addressObj.pin_code);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.addressForm.get("pin_code").invalid && (ctx.addressForm.get("pin_code").touched || ctx.addressForm.get("pin_code").dirty));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.addressForm.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.addressForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.addressObj.address);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.addressForm.get("address").invalid && (ctx.addressForm.get("address").touched || ctx.addressForm.get("address").dirty));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.addressObj.landmark);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.addressForm.get("landmark").invalid && (ctx.addressForm.get("landmark").touched || ctx.addressForm.get("landmark").dirty));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.addressObj.state);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.addressForm.get("state").invalid && (ctx.addressForm.get("state").touched || ctx.addressForm.get("state").dirty));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.addressObj.pin_code);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.addressForm.get("pin_code").invalid && (ctx.addressForm.get("pin_code").touched || ctx.addressForm.get("pin_code").dirty));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.addressForm.valid);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["TitleCasePipe"]],
      styles: [".help-block2[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: auto;\r\n    margin: 5px 0px;\r\n}\r\n\r\n@media (max-width: 575.98px) {\r\n    .new-otpres[_ngcontent-%COMP%] {\r\n        padding: 0px;\r\n    }\r\n}\r\n\r\n.asd[_ngcontent-%COMP%] {\r\n    margin-top: 3px;\r\n}\r\n\r\n.faloginuser[_ngcontent-%COMP%] {\r\n    margin-top: 10px;\r\n}\r\n\r\n#navbarDropdownList[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\r\n    background-color: #FF8800;\r\n    font-size: 16px;\r\n    color: cornsilk;\r\n    border-radius: 30px;\r\n}\r\n\r\n#navbarDropdownList[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    background-color: #fff;\r\n    \r\n    border-radius: 30px;\r\n    width: 235px;\r\n}\r\n\r\n@media (max-width: 575.98px) {\r\n    .new-otpres[_ngcontent-%COMP%] {\r\n        padding: 0px;\r\n    }\r\n    .asd[_ngcontent-%COMP%] {\r\n        margin-top: 7px;\r\n    }\r\n}\r\n\r\n.asd[_ngcontent-%COMP%] {\r\n    margin-top: 3px;\r\n}\r\n\r\n@media (max-width: 360px) {\r\n    .Jayabhery_media[_ngcontent-%COMP%] {\r\n        \r\n        margin-top: 30px;\r\n        margin-bottom: 30px;\r\n    }\r\n    .top_jayabhery[_ngcontent-%COMP%] {\r\n        margin-right: 0px !important;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJ0L2NhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtBQUNKOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QiwrQkFBK0I7SUFDL0IsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7QUFDSjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSTtRQUNJLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSw0QkFBNEI7SUFDaEM7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FydC9jYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVscC1ibG9jazIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW46IDVweCAwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzUuOThweCkge1xyXG4gICAgLm5ldy1vdHByZXMge1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmFzZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbn1cclxuXHJcbi5mYWxvZ2ludXNlciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4jbmF2YmFyRHJvcGRvd25MaXN0IHVsIGxpIDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY4ODAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6IGNvcm5zaWxrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxufVxyXG5cclxuI25hdmJhckRyb3Bkb3duTGlzdCB1bCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzdDQjczNDsgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICB3aWR0aDogMjM1cHg7XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XHJcbiAgICAubmV3LW90cHJlcyB7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgfVxyXG4gICAgLmFzZCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogN3B4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uYXNkIHtcclxuICAgIG1hcmdpbi10b3A6IDNweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDM2MHB4KSB7XHJcbiAgICAuSmF5YWJoZXJ5X21lZGlhIHtcclxuICAgICAgICAvKiBtYXJnaW46IDMwcHg7ICovXHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgLnRvcF9qYXlhYmhlcnkge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-cart',
          templateUrl: './cart.component.html',
          styleUrls: ['./cart.component.css']
        }]
      }], function () {
        return [{
          type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__["ToastrManager"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/citrus/citrus.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/citrus/citrus.component.ts ***!
    \*******************************************************/

  /*! exports provided: CitrusComponent */

  /***/
  function srcAppComponentsCitrusCitrusComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CitrusComponent", function () {
      return CitrusComponent;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/user */
    "./src/app/models/user.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/service/data.service */
    "./src/app/service/data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/__ivy_ngcc__/fesm2015/ng6-toastr-notifications.js");
    /* harmony import */


    var _common_firstnav_firstnav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../common/firstnav/firstnav.component */
    "./src/app/components/common/firstnav/firstnav.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../common/footer/footer.component */
    "./src/app/components/common/footer/footer.component.ts");

    function CitrusComponent_div_7_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r175 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CitrusComponent_div_7_div_1_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r175);

          var item_r172 = ctx.$implicit;

          var ctx_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r174.getProductsbyId(item_r172);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Price per kg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Add to cart");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r172 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", item_r172 == null ? null : item_r172.prouduct_image_url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r172 == null ? null : item_r172.product_title);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("INR ", item_r172 == null ? null : item_r172.product_price, "");
      }
    }

    function CitrusComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CitrusComponent_div_7_div_1_Template, 18, 3, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r169.vegitables);
      }
    }

    function CitrusComponent_div_8_div_1_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CitrusComponent_div_8_div_1_div_17_a_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r185 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CitrusComponent_div_8_div_1_div_17_a_1_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r185);

          var item_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          var ctx_r183 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r183.favorite(item_r177);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CitrusComponent_div_8_div_1_div_17_a_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r188 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CitrusComponent_div_8_div_1_div_17_a_2_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r188);

          var item_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          var ctx_r186 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r186.favorite(item_r177);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CitrusComponent_div_8_div_1_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CitrusComponent_div_8_div_1_div_17_a_1_Template, 2, 0, "a", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CitrusComponent_div_8_div_1_div_17_a_2_Template, 2, 0, "a", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (item_r177 == null ? null : item_r177.is_favourite) == "0");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (item_r177 == null ? null : item_r177.is_favourite) == "1");
      }
    }

    function CitrusComponent_div_8_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r191 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CitrusComponent_div_8_div_1_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r191);

          var item_r177 = ctx.$implicit;

          var ctx_r190 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r190.getProductsbyId(item_r177);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Price per kg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Add to cart");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, CitrusComponent_div_8_div_1_div_16_Template, 3, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, CitrusComponent_div_8_div_1_div_17_Template, 3, 2, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r177 = ctx.$implicit;

        var ctx_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", item_r177 == null ? null : item_r177.prouduct_image_url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r177 == null ? null : item_r177.product_title);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("INR ", item_r177 == null ? null : item_r177.product_price, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r176.isLogin);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r176.isLogin);
      }
    }

    function CitrusComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CitrusComponent_div_8_div_1_Template, 18, 5, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r170.vegitables1);
      }
    }

    var _c0 = function _c0() {
      return ["/landing"];
    };

    var CitrusComponent =
    /*#__PURE__*/
    function () {
      function CitrusComponent(service, router, toastr, http) {
        _classCallCheck(this, CitrusComponent);

        this.service = service;
        this.router = router;
        this.toastr = toastr;
        this.http = http;
        this.favObj = new src_app_models_user__WEBPACK_IMPORTED_MODULE_2__["favourite"]();
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
      }

      _createClass(CitrusComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.isLogin = localStorage.getItem('Authorization');
          this.name = localStorage.getItem('productname');
          this.getProducts();
          this.getProducts1();
        } // getBestSellers(){
        //   this.service.getBestSellers().subscribe(
        //     (data:any)=> {
        //       debugger
        //     this.bestsellers= data.data.bestSellers;
        //   });
        // }

      }, {
        key: "getProducts",
        value: function getProducts() {
          var _this29 = this;

          // debugger
          this.slug = localStorage.getItem('productname'); // this.slug = "vegetables";

          this.service.getProducts(this.slug).subscribe(function (data) {
            // debugger
            _this29.vegitables = data.data.products;
            _this29.name = data.data.slug; // location.reload();
            // this.router.navigate(['/products']);
          }, function (err) {
            var message = 'There is an issue with service. Please retry.';

            if (err.status === 400) {
              message = 'There is an error in getting list of sold to. Please retry.';
            }
          });
        }
      }, {
        key: "getProducts1",
        value: function getProducts1() {
          var _this30 = this;

          // debugger
          this.slug = localStorage.getItem('productname');
          this.id = localStorage.getItem('userId');
          this.service.getProducts1(this.slug, this.id).subscribe(function (data) {
            // debugger
            _this30.vegitables1 = data.data.products;
            _this30.name = data.data.slug; // location.reload();
            // this.router.navigate(['/products']);
          }, function (err) {
            var message = 'There is an issue with service. Please retry.';

            if (err.status === 400) {
              message = 'There is an error in getting list of sold to. Please retry.';
            }
          });
        }
      }, {
        key: "getProductsbyId",
        value: function getProductsbyId(item) {
          var _this31 = this;

          // debugger
          this.slug = item.product_slug; // this.slug = "vegetables";

          this.service.getProductsbyId(this.slug).subscribe(function (data) {
            // debugger
            _this31.vegitables = data.data.products;
            _this31.name = data.data.products.product_slug;
            _this31.productslug = localStorage.setItem('productslug', data.data.products.product_slug);

            _this31.router.navigate(['/productdetails']); // location.reload();

          }, function (err) {
            var message = 'There is an issue with service. Please retry.';

            if (err.status === 400) {
              message = 'There is an error in getting list of sold to. Please retry.';
            }
          });
        }
      }, {
        key: "favorite",
        value: function favorite(item) {
          // debugger
          if (item.is_favourite === "0") {
            this.favObj.favourite = true;
          }

          if (item.is_favourite === "1") {
            this.favObj.favourite = false;
          } // this.favObj.favourite = true;


          this.addToFavourites(item);
        } // console.log(this.quantity+1);

      }, {
        key: "addToFavourites",
        value: function addToFavourites(item) {
          var _this32 = this;

          // debugger
          this.favObj.product_id = item.product_id;
          this.favObj.user_id = localStorage.getItem('userId'); // this.favObj.favourite = true;

          var fData = new FormData();
          fData.append("product_id", this.favObj.product_id);
          fData.append("user_id", this.favObj.user_id);
          fData.append("favourite", JSON.stringify(this.favObj.favourite));
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            "x-api-key": "12345"
          });
          var profile = "addtofavourites";
          this.http.post(this.baseUrl + profile, fData, {
            headers: headers
          }).subscribe(function (data) {
            // debugger
            if (data.status === false) {
              _this32.toastr.errorToastr(data.data.error, 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              }); // location.reload()

            } else {
              _this32.toastr.successToastr(data.message, 'Success!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });

              _this32.favObj = new src_app_models_user__WEBPACK_IMPORTED_MODULE_2__["favourite"]();

              _this32.getProducts1(); // location.reload();

            }
          }, function (err) {
            //debugger
            if (err && err.error && err.error) {
              var errorMesg = err.error.message;

              _this32.toastr.errorToastr(errorMesg, 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });
            } else {
              _this32.toastr.errorToastr('Something went wrong', 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });
            }
          });
        }
      }]);

      return CitrusComponent;
    }();

    CitrusComponent.ɵfac = function CitrusComponent_Factory(t) {
      return new (t || CitrusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__["ToastrManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
    };

    CitrusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CitrusComponent,
      selectors: [["app-citrus"]],
      decls: 10,
      vars: 7,
      consts: [[1, "best-selletdata"], [1, "container"], [1, "best-seller"], ["routerLinkActive", "router-link-active", 1, "best-sellertitle", 3, "routerLink"], ["class", "row", 4, "ngIf"], [1, "row"], ["class", "col-md-3", 4, "ngFor", "ngForOf"], [1, "col-md-3"], [1, "card", "seller-content", 3, "click"], [1, "fruits-main"], ["alt", "Card image cap", 1, "card-img-top", "image-sell", 3, "src"], [1, "card-body", "fruit-info"], [1, "card-title", "title-name"], [1, "card-text", "price-per"], [1, "price-data"], [1, "price"], [1, "rate-image", "ml-auto"], ["id", "addcartbtn", 1, "btn", "btn-success"], [1, "cart-data"], [1, "far", "fa-heart", "hart-image"], ["class", "col-md-3  seller-card", 4, "ngFor", "ngForOf"], [1, "col-md-3", "seller-card"], [4, "ngIf"], ["class", "cart-data", 3, "click", 4, "ngIf"], [1, "cart-data", 3, "click"], [1, "fas", "fa-heart", "hart-image", 2, "color", "#ed1c24"]],
      template: function CitrusComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-firstnav");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CitrusComponent_div_7_Template, 2, 1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CitrusComponent_div_8_Template, 2, 1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "app-footer");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 4, ctx.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLogin);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLogin);
        }
      },
      directives: [_common_firstnav_firstnav_component__WEBPACK_IMPORTED_MODULE_7__["FirstnavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["TitleCasePipe"]],
      styles: ["@media screen and (max-width: 800px) {\r\n    .seller-card[_ngcontent-%COMP%] {\r\n        margin: 10px 40px 10px 40px;\r\n    }\r\n    .image-sell[_ngcontent-%COMP%] {\r\n        width: 65%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaXRydXMvY2l0cnVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtRQUNJLDJCQUEyQjtJQUMvQjtJQUNBO1FBQ0ksVUFBVTtJQUNkO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NpdHJ1cy9jaXRydXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAuc2VsbGVyLWNhcmQge1xyXG4gICAgICAgIG1hcmdpbjogMTBweCA0MHB4IDEwcHggNDBweDtcclxuICAgIH1cclxuICAgIC5pbWFnZS1zZWxsIHtcclxuICAgICAgICB3aWR0aDogNjUlO1xyXG4gICAgfVxyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CitrusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-citrus',
          templateUrl: './citrus.component.html',
          styleUrls: ['./citrus.component.css']
        }]
      }], function () {
        return [{
          type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__["ToastrManager"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/common/firstnav/firstnav.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/components/common/firstnav/firstnav.component.ts ***!
    \******************************************************************/

  /*! exports provided: FirstnavComponent */

  /***/
  function srcAppComponentsCommonFirstnavFirstnavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirstnavComponent", function () {
      return FirstnavComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/user */
    "./src/app/models/user.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/service/data.service */
    "./src/app/service/data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/__ivy_ngcc__/fesm2015/ng6-toastr-notifications.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ng_otp_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ng-otp-input */
    "./node_modules/ng-otp-input/__ivy_ngcc__/fesm2015/ng-otp-input.js");

    var _c0 = ["ngOtpInput"];

    var _c1 = function _c1() {
      return ["/landing"];
    };

    function FirstnavComponent_div_0_a_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 98);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
      }
    }

    var _c2 = function _c2() {
      return ["/home"];
    };

    function FirstnavComponent_div_0_a_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 98);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c2));
      }
    }

    function FirstnavComponent_div_0_a_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 99);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 100);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r204 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r204.firstname, " ", ctx_r204.lastname, " ");
      }
    }

    function FirstnavComponent_div_0_a_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 99);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r205 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r205.profilepic, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r205.firstname, " ", ctx_r205.lastname, " ");
      }
    }

    function FirstnavComponent_div_0_p_41_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 102);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FirstnavComponent_div_0_p_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 102);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r207 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r207.cartcount);
      }
    }

    var _c3 = function _c3() {
      return {
        standalone: true
      };
    };

    var _c4 = function _c4() {
      return ["/profile"];
    };

    var _c5 = function _c5() {
      return ["/my-orders"];
    };

    var _c6 = function _c6() {
      return ["/wishlist"];
    };

    var _c7 = function _c7() {
      return ["/cart"];
    };

    function FirstnavComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r209 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FirstnavComponent_div_0_a_3_Template, 2, 2, "a", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FirstnavComponent_div_0_a_4_Template, 2, 2, "a", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h5", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Jayabhery Enclave");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Gachibowli,hyderabad,500034");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "form", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 85, 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FirstnavComponent_div_0_Template_input_ngModelChange_21_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r209);

          var ctx_r208 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r208.textValue = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FirstnavComponent_div_0_Template_button_click_23_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r209);

          var _r203 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

          var ctx_r210 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r210.logText(_r203.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, FirstnavComponent_div_0_a_26_Template, 3, 2, "a", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, FirstnavComponent_div_0_a_27_Template, 3, 3, "a", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "My Account");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "My Orders");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "My Wishlist");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FirstnavComponent_div_0_Template_a_click_35_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r209);

          var ctx_r211 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r211.logout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Logout");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "li", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, FirstnavComponent_div_0_p_41_Template, 2, 0, "p", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, FirstnavComponent_div_0_p_42_Template, 2, 1, "p", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r192 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r192.isLogin);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r192.isLogin);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r192.textValue)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c3));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r192.profilepic == "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r192.profilepic != "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c4));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c5));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c6));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c7));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r192.cartcount === null || ctx_r192.cartcount === "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r192.cartcount != "");
      }
    }

    function FirstnavComponent_div_1_a_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 98);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
      }
    }

    function FirstnavComponent_div_1_a_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 98);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c2));
      }
    }

    function FirstnavComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r216 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FirstnavComponent_div_1_a_3_Template, 2, 2, "a", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FirstnavComponent_div_1_a_4_Template, 2, 2, "a", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 103);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 104);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 105);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 106);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 85, 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FirstnavComponent_div_1_Template_input_ngModelChange_12_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r216);

          var ctx_r215 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r215.textValue = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FirstnavComponent_div_1_Template_button_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r216);

          var _r214 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

          var ctx_r217 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r217.logText(_r214.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 107);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h5", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Jayabhery Enclave");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Gachibowli,hyderabad,500034");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 108);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FirstnavComponent_div_1_Template_a_click_27_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r216);

          var ctx_r218 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r218.clicked($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Login ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 111);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "|");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 112);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FirstnavComponent_div_1_Template_a_click_32_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r216);

          var ctx_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r219.clicked($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " SignUp ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r193 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r193.isLogin);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r193.isLogin);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r193.textValue)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c3));
      }
    }

    function FirstnavComponent_li_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Home ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "(current)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
      }
    }

    function FirstnavComponent_li_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Home ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "(current)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c2));
      }
    }

    function FirstnavComponent_li_17_a_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r226 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 114);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FirstnavComponent_li_17_a_1_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r226);

          var item_r220 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r224 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r224.goToProductDetails(item_r220);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r220 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, item_r220 == null ? null : item_r220.ns_category_name));
      }
    }

    function FirstnavComponent_li_17_a_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r230 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 114);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FirstnavComponent_li_17_a_2_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r230);

          var item_r220 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r228 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r228.goToProductDetails(item_r220);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "All");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FirstnavComponent_li_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FirstnavComponent_li_17_a_1_Template, 3, 3, "a", 113);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FirstnavComponent_li_17_a_2_Template, 2, 0, "a", 113);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r220 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r220 == null ? null : item_r220.ns_category_name) !== "main menu categories");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r220 == null ? null : item_r220.ns_category_name) === "main menu categories");
      }
    }

    function FirstnavComponent_div_61_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " phone number is required* ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FirstnavComponent_div_61_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 115);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FirstnavComponent_div_61_div_1_Template, 2, 0, "div", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r197.loginForm.get("mobile_number_login").errors.required);
      }
    }

    function FirstnavComponent_div_85_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " phone number is required* ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FirstnavComponent_div_85_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 115);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FirstnavComponent_div_85_div_1_Template, 2, 0, "div", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r198 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r198.signupForm.get("mobile_number_login").errors.required);
      }
    }

    var _c8 = function _c8() {
      return ["/aboutus"];
    };

    var _c9 = function _c9() {
      return ["/blog"];
    };

    var _c10 = function _c10() {
      return ["/news"];
    };

    var _c11 = function _c11() {
      return ["/offers"];
    };

    var _c12 = function _c12(a0) {
      return {
        active: a0
      };
    };

    var _c13 = function _c13(a0, a1) {
      return {
        active: a0,
        show: a1
      };
    };

    var FirstnavComponent =
    /*#__PURE__*/
    function () {
      function FirstnavComponent(service, router, toastr, http) {
        _classCallCheck(this, FirstnavComponent);

        this.service = service;
        this.router = router;
        this.toastr = toastr;
        this.http = http;
        this.loginObj = new src_app_models_user__WEBPACK_IMPORTED_MODULE_2__["loginM"]();
        this.signupObj = new src_app_models_user__WEBPACK_IMPORTED_MODULE_2__["signupM"]();
        this.verifySignupObj = new src_app_models_user__WEBPACK_IMPORTED_MODULE_2__["signupOtp"]();
        this.verifyLoginObj = new src_app_models_user__WEBPACK_IMPORTED_MODULE_2__["loginOtp"]();
        this.textValue = '';
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
        this.config = {
          allowNumbersOnly: true,
          length: 6,
          isPasswordInput: false,
          disableAutoFocus: false,
          placeholder: '',
          inputStyles: {
            'width': '50px',
            'height': '50px'
          }
        };
      }

      _createClass(FirstnavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.isLogin = localStorage.getItem('Authorization');
          this.getCategories();
          this.getUserProfile();
          this.getCartDetails();
          console.log(this.cartcount); // this.getProducts();

          this.loadScripts();
          this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            // name: new FormControl(''),
            // email: new FormControl(''),
            // password: new FormControl(''),
            mobile_number_login: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[0-9_-]{10,12}"), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10)])
          });
          this.signupOtpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            // otp: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(6), Validators.maxLength(6)])
            otp: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
          });
          this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            mobile_number_login: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[0-9_-]{10,12}"), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10)])
          });
          this.loginOtpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            // otp_login: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(6), Validators.maxLength(6)])
            otp_login: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
          });
        }
      }, {
        key: "loadScripts",
        value: function loadScripts() {
          // debugger
          var dynamicScripts = ['../../assets/js/owl.carousel.min.js', '../../assets/js/owl-content.js'];

          for (var i = 0; i < dynamicScripts.length; i++) {
            var node = document.createElement('script');
            node.src = dynamicScripts[i];
            node.type = 'text/javascript';
            node.async = false;
            node.charset = 'utf-8';
            document.getElementsByTagName('head')[0].appendChild(node);
          }
        }
      }, {
        key: "onOtpChange",
        value: function onOtpChange(otp) {
          this.otp = otp;
        }
      }, {
        key: "signup",
        value: function signup() {
          var _this33 = this;

          // //debugger
          this.signupObj.mobile_number_login = this.signupForm.value.mobile_number_login;
          var fData = new FormData();
          fData.append("mobile_number_login", this.signupObj.mobile_number_login);
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            "x-api-key": "12345"
          });
          var sendsignupotp = "sendOtp";
          this.http.post(this.baseUrl + sendsignupotp, fData, {
            headers: headers
          }).subscribe(function (data) {
            if (data != null) {
              _this33.signupObj = new src_app_models_user__WEBPACK_IMPORTED_MODULE_2__["signupM"](); // localStorage.setItem("id", data.id);

              localStorage.setItem("mobilenumber", data.mobile);
              localStorage.setItem("sessionotp", data.OTP);
              _this33.mobile = localStorage.getItem('mobilenumber'); // this.toastr.successToastr(data.message);

              _this33.signupForm.reset();

              $('#myModal2').modal('hide');
              $('#otppage').modal('show');
            } else {
              _this33.signupForm.reset();
            }
          }, function (err) {
            // console.log();
            if (err && err.error && err.error.errors) {
              var errorMesg = err.error.error;

              _this33.toastr.errorToastr(errorMesg, 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });

              _this33.signupForm.reset();
            } else {
              _this33.toastr.errorToastr('Something went wrong', 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });
            }
          });
        }
      }, {
        key: "verifySignupOtp",
        value: function verifySignupOtp() {
          var _this34 = this;

          //debugger
          this.verifySignupObj.mobile_number_register = localStorage.getItem('mobilenumber');
          this.verifySignupObj.session_otp = localStorage.getItem('sessionotp');
          this.verifySignupObj.otp = this.otp;
          var fData = new FormData();
          fData.append("mobile_number_register", this.verifySignupObj.mobile_number_register);
          fData.append("session_otp", this.verifySignupObj.session_otp);
          fData.append("otp", this.verifySignupObj.otp);
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            "x-api-key": "12345"
          });
          var verifysignupotp = "register";
          this.http.post(this.baseUrl + verifysignupotp, fData, {
            headers: headers
          }).subscribe(function (data) {
            // debugger
            if (data.type == "error") {
              _this34.toastr.errorToastr('This number is already registered. Do you want to login…?', 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              }); // alert(data.message)


              _this34.signupOtpForm.reset(); // location.reload()

            } else {
              _this34.toastr.successToastr('You have registered successfuly. Please login', 'Success!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });

              _this34.verifySignupObj = new src_app_models_user__WEBPACK_IMPORTED_MODULE_2__["signupOtp"]();

              _this34.signupOtpForm.reset();

              $('#otppage').modal('hide');

              _this34.router.navigate(['/landing']);

              _this34.getCategories();

              _this34.getUserProfile(); // localStorage.setItem("Authorization", data);
              // localStorage.setItem("userId", data.user._id);
              // this.router.navigate(['/landing']);
              // location.reload()

            }
          }, function (err) {
            //debugger
            if (err && err.error && err.error) {
              var errorMesg = err.error.message;

              _this34.toastr.errorToastr(errorMesg, 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });

              _this34.signupOtpForm.reset();
            } else {
              _this34.toastr.errorToastr('Something went wrong', 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });
            }
          });
        }
      }, {
        key: "login",
        value: function login() {
          var _this35 = this;

          // //debugger
          this.loginObj.mobile_number_login = this.loginForm.value.mobile_number_login;
          var fData = new FormData();
          fData.append("mobile_number_login", this.loginObj.mobile_number_login);
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            "x-api-key": "12345"
          });
          var sendotp = "sendOtp";
          this.http.post(this.baseUrl + sendotp, fData, {
            headers: headers
          }).subscribe(function (data) {
            // //debugger
            if (data != "") {
              _this35.toastr.successToastr('OTP Sent Successfully To Registered Mobile Number', 'Success!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });

              _this35.loginObj = new src_app_models_user__WEBPACK_IMPORTED_MODULE_2__["loginM"]();
              localStorage.setItem("mobilenumber", data.mobile);
              localStorage.setItem("sessionotp", data.OTP);
              _this35.mobile = localStorage.getItem('mobilenumber');

              _this35.loginForm.reset();

              $('#myModal2').modal('hide'); // $('#otppage').modal('show');

              $('#loginotppage').modal('show');
            } else {
              _this35.loginForm.reset();
            }
          }, function (err) {
            //debugger
            var errorMesg = err.error.error;

            if (errorMesg == undefined) {
              _this35.toastr.errorToastr('Something went wrong', 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });
            } else {
              _this35.toastr.errorToastr(errorMesg, 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });
            }
          });
        }
      }, {
        key: "verifyLoginOtp",
        value: function verifyLoginOtp() {
          var _this36 = this;

          // debugger
          this.verifyLoginObj.mobile_number_login = localStorage.getItem('mobilenumber');
          this.verifyLoginObj.session_otp_login = localStorage.getItem('sessionotp');
          this.verifyLoginObj.otp_login = this.otp;
          var fData = new FormData();
          fData.append("mobile_number_login", this.verifyLoginObj.mobile_number_login);
          fData.append("session_otp_login", this.verifyLoginObj.session_otp_login);
          fData.append("otp_login", this.verifyLoginObj.otp_login);
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            "x-api-key": "12345"
          });
          var verifyloginotp = "login_otp";
          this.http.post(this.baseUrl + verifyloginotp, fData, {
            headers: headers
          }).subscribe(function (data) {
            // debugger
            if (data.user_id != null) {
              _this36.toastr.successToastr('Signin Successfully', 'Success!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });

              _this36.verifyLoginObj = new src_app_models_user__WEBPACK_IMPORTED_MODULE_2__["loginOtp"]();

              _this36.loginOtpForm.reset();

              $('#loginotppage').modal('hide');
              localStorage.setItem("Authorization", data);
              localStorage.setItem("userId", data.user_id); // setTimeout(function () {
              //     window.location.reload();
              //   }, 500);

              _this36.router.navigate(['/home']); // location.reload()


              _this36.getUserProfile();

              _this36.getCartDetails();

              _this36.getCategories();
            } else {
              _this36.toastr.errorToastr('This number is not registered. Do you want to Signup?', 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });

              _this36.loginOtpForm.reset(); // location.reload()

            }
          }, function (err) {
            //debugger
            var errorMesg = err.error.error;

            if (errorMesg == undefined) {
              _this36.toastr.errorToastr('Something went wrong', 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });
            } else {
              _this36.toastr.errorToastr(errorMesg, 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });
            }
          });
        }
      }, {
        key: "resend",
        value: function resend() {
          var _this37 = this;

          // //debugger
          this.loginObj.mobile_number_login = localStorage.getItem('mobilenumber');
          var fData = new FormData();
          fData.append("mobile_number_login", this.loginObj.mobile_number_login);
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            "x-api-key": "12345"
          });
          var sendotp = "sendOtp";
          this.http.post(this.baseUrl + sendotp, fData, {
            headers: headers
          }).subscribe(function (data) {
            // //debugger
            if (data != "") {
              _this37.toastr.successToastr('OTP Sent Successfully To Registered Mobile Number', 'Success!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });

              _this37.loginObj = new src_app_models_user__WEBPACK_IMPORTED_MODULE_2__["loginM"]();
              localStorage.setItem("mobilenumber", data.mobile);
              localStorage.setItem("sessionotp", data.OTP);
              _this37.mobile = localStorage.getItem('mobilenumber');

              _this37.loginForm.reset(); // $('#myModal2').modal('hide');


              $('#loginotppage').modal('show');
            } else {
              _this37.loginForm.reset();
            }
          }, function (err) {
            //debugger
            var errorMesg = err.error.error;

            if (errorMesg == undefined) {
              _this37.toastr.errorToastr('Something went wrong', 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });
            } else {
              _this37.toastr.errorToastr(errorMesg, 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });
            }
          });
        }
      }, {
        key: "getCategories",
        value: function getCategories() {
          var _this38 = this;

          this.service.getcategories().subscribe(function (data) {
            // //debugger
            _this38.categorieslist = data.data.categories;
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          // this.data.logout();
          localStorage.clear(); // location.reload()

          this.router.navigate(['/landing']);
          this.toastr.successToastr('Logout successfully', 'Success!', {
            position: 'bottom-center',
            toastTimeout: 1000
          });
          this.getCategories();
          this.getUserProfile();
          this.getCartDetails(); // this.router.navigate(['/landing']);
        }
      }, {
        key: "goToProductDetails",
        value: function goToProductDetails(item) {
          var _this39 = this;

          // debugger
          this.slug = item.ns_category_slug; // this.slug = "vegetables";

          this.service.getProducts(this.slug).subscribe(function (data) {
            // debugger
            _this39.products = data.data.products; // localStorage.setItem('productname', data.data.products[0].ns_category_slug);

            localStorage.setItem('productname', _this39.slug);

            if (_this39.slug === 'apple-and-pears') {
              _this39.router.navigate(['/apple-and-pears']);
            }

            if (_this39.slug === 'main-menu-categories') {
              _this39.router.navigate(['/all']);
            }

            if (_this39.slug === 'avacado-stone-fruits') {
              _this39.router.navigate(['/avacado-stone-fruits']);
            }

            if (_this39.slug === 'berries') {
              _this39.router.navigate(['/berries']);
            }

            if (_this39.slug === 'citrus') {
              _this39.router.navigate(['/citrus']);
            } // this.router.navigate(['/products']);
            // location.reload();
            // this.getProducts();

          }, function (err) {
            var message = 'There is an issue with service. Please retry.';

            if (err.status === 400) {
              message = 'There is an error in getting list of sold to. Please retry.';
            }
          });
        }
      }, {
        key: "logText",
        value: function logText(value) {
          // debugger
          this.log = value;
          localStorage.setItem('search', this.log); // this.router.navigate(['/search', this.log]);

          this.router.navigate(['/products'], {
            queryParams: {
              search: this.log
            }
          });
          setTimeout(function () {
            window.location.reload();
          }, 500); // this.getSearchProducts();
        }
      }, {
        key: "getUserProfile",
        value: function getUserProfile() {
          var _this40 = this;

          // debugger
          this.id = localStorage.getItem('userId');
          this.service.getUserProfile(this.id).subscribe(function (data) {
            // //debugger
            _this40.profile = [data.data.users];
            _this40.firstname = data.data.users.first_name;
            _this40.lastname = data.data.users.last_name;
            _this40.profilepic = data.data.users.photo;
          });
        }
      }, {
        key: "getCartDetails",
        value: function getCartDetails() {
          var _this41 = this;

          // debugger
          this.id = localStorage.getItem('userId');
          this.service.getCartDetails(this.id).subscribe(function (data) {
            // debugger
            _this41.products = data.data.cart_products;
            _this41.cartcount = data.data.count;
            console.log(_this41.cartcount); // this.cartcount= this.products.length; 
            // this.image = data.data.cart_products[0].images[0].product_image_name;
          });
        }
      }, {
        key: "clicked",
        value: function clicked(event) {
          // console.log(event.target.name)
          if (event.target.name == "login") {
            this.login_option = true;
            this.signup_option = false;
            this.login_show = true;
            this.signup_show = false;
          } else if (event.target.name == 'signup') {
            this.login_option = false;
            this.signup_option = true;
            this.login_show = false;
            this.signup_show = true;
          }
        }
      }, {
        key: "myFunction",
        value: function myFunction() {
          var x = document.getElementById("myTopnav");

          if (x.className === "topnav") {
            x.className += " responsive";
          } else {
            x.className = "topnav";
          }
        }
      }]);

      return FirstnavComponent;
    }();

    FirstnavComponent.ɵfac = function FirstnavComponent_Factory(t) {
      return new (t || FirstnavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__["ToastrManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
    };

    FirstnavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FirstnavComponent,
      selectors: [["app-firstnav"]],
      viewQuery: function FirstnavComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ngOtpInput = _t.first);
        }
      },
      decls: 142,
      vars: 61,
      consts: [["class", "fruits-content", 4, "ngIf"], [1, "second-nav"], [1, "container"], [1, "navbar", "navbar-expand-lg", "navbar-light", "p-0"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "second-data"], ["class", "nav-item active", 4, "ngIf"], [1, "nav-item", "active"], ["routerLinkActive", "router-link-active", 1, "nav-link", "second-options", 3, "routerLink"], [1, "nav-item", "dropdown"], ["id", "navbarDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "second-options", "dropdown-toggle"], ["id", "navbarDropdownList"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu"], [4, "ngFor", "ngForOf"], [1, "sr-only"], [1, "nav-item", "offers-all"], ["id", "navbarDropdown", "role", "button", 1, "nav-link", "offers-content", 3, "routerLink"], ["src", "../../../assets/images/price-tag.png", "alt", "", 1, "price-tag"], ["id", "myModal2", "tabindex", "-1", "role", "dialog", "aria-labelledby", "myModalLabel2", 1, "modal", "fade", 2, "z-index", "9999"], ["role", "document", 1, "modal-dialog", "modal-dialog-custom"], [1, "modal-content", "modal-content-custom"], [1, "modal-header", "btn-sec"], ["id", "pills-tab", "role", "tablist", 1, "nav", "nav-pills"], [1, "nav-item"], ["id", "pills-home-tab", "data-toggle", "pill", "href", "#pills-home", "role", "tab", "aria-controls", "pills-home", "aria-selected", "true", 1, "nav-link", "nav-link", "btn-s", 3, "ngClass"], ["id", "pills-profile-tab", "data-toggle", "pill", "href", "#pills-profile", "role", "tab", "aria-controls", "pills-profile", "aria-selected", "false", 1, "nav-link", "nav-link", "btn-s", 3, "ngClass"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body", "p-0"], ["id", "pills-tabContent", 1, "tab-content"], ["id", "pills-home", "role", "tabpanel", "aria-labelledby", "pills-home-tab", 1, "tab-pane", "fade", "show", "active", 3, "ngClass"], [1, "signin-main-sec"], [1, "sign-in-sec"], [1, "welcome-back"], [1, "sign-in-to"], [1, "sign-in-inp"], [3, "formGroup", "ngSubmit"], [1, "mb-3"], ["for", "exampleInputEmail1", 1, "form-label", "inp-title"], ["type", "number", "placeholder", "Enter Phone Nmber", "formControlName", "mobile_number_login", "required", "", 1, "form-control", "inp-txt", 3, "ngModel", "ngModelChange"], ["class", "help-block2", 4, "ngIf"], [1, "btn", "submit-btn", 3, "disabled"], [1, "sign-in-bottom-sec"], [1, "sign-in-bottom"], [1, "signin-btm-l"], ["href", "", 1, "signin-btm-btn"], [1, "signin-btm-2"], ["id", "pills-profile", "role", "tabpanel", "aria-labelledby", "pills-profile-tab", 1, "tab-pane", "fade", 3, "ngClass"], [1, "mb-2"], ["type", "submit", 1, "btn", "btn-primary", "submit-btn", 3, "disabled"], ["id", "otppage", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade", 2, "z-index", "9999"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-body"], [1, "otp-data"], [1, "otp-title"], [1, "subtitle-otp"], [1, "phone-number"], [1, "text-center", 3, "formGroup", "ngSubmit"], [1, "form-group"], [1, "passcode-wrapper"], ["name", "otp", "formControlName", "otp", 3, "config", "ngModel", "onInputChange", "ngModelChange"], ["ngOtpInput", ""], [1, "m-0"], [1, "resend-code", 2, "cursor", "pointer", 3, "click"], ["type", "submit", 1, "btn", "c-button"], ["id", "loginotppage", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade", 2, "z-index", "9999"], [1, "modal-body", "new-otpres"], ["name", "otp_login", "formControlName", "otp_login", 3, "config", "ngModel", "onInputChange", "ngModelChange"], [1, "resend-code", 3, "click"], [1, "fruits-content"], [1, "navbar", "navbar-expand-lg"], ["class", "navbar-brand logo-data", 3, "routerLink", 4, "ngIf"], [1, "sidenav-btn"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "btn", "btn-dark", "d-inline-block", "d-lg-none", "ml-auto"], [1, "fas", "fa-align-justify"], [1, "navbar-nav", "top-header", "top_jayabhery"], [1, "media", "loacation-content", "Jayabhery_media"], [1, "loaction"], [1, "fas", "fa-map-marker-alt", "loco-icons"], [1, "media-body"], [1, "title-loca", "mt-0"], [1, "subtitle-content"], [1, "nav-item", "ml-auto"], [1, "form-inline"], ["type", "text", "required", "", "placeholder", "Search for Products...", "aria-label", "Search", 1, "form-control", "search-data", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["textbox", ""], ["type", "submit", 1, "btn", "btn-outline-success", "search-button", 3, "click"], [1, "fas", "fa-search"], ["class", "nav-link new-profiledata  dropdown-toggle", "id", "navbarDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 4, "ngIf"], [1, "dropdown-menu", "dropdown-menu-sm", "dropdown-menu-right"], ["routerLinkActive", "router-link-active", 1, "dropdown-item", 3, "routerLink"], [1, "dropdown-item", 3, "routerLink", "click"], [1, "nav-item", "ml-2", "mr-2"], ["routerLinkActive", "router-link-active", 1, "loaction", 3, "routerLink"], [1, "fas", "fa-shopping-cart", "loco-icons"], ["class", "number-note", 4, "ngIf"], [1, "navbar-brand", "logo-data", 3, "routerLink"], ["src", "../../../../assets/images/1.png", "alt", "", 1, "logo-img"], ["id", "navbarDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "new-profiledata", "dropdown-toggle"], ["src", "../../../assets/images/Group 31234.png", "width", "25px", "alt", "", 1, "rounded-circle", "img-data", "mr-1"], ["width", "25px", "alt", "", 1, "rounded-circle", "img-data", "mr-1", 3, "src"], [1, "number-note"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "btn", "btn_menu", "d-inline-block", "d-lg-none", "ml-auto"], [1, "navbar-expand-lg"], [1, "navbar-nav", "top-header"], [1, "form-inline", "search-form"], [1, "media", "loacation-content", "loacation-content1"], [1, "far", "fa-user", "faloginuser"], [1, "login-contentextra"], ["name", "login", "data-toggle", "modal", "data-target", "#myModal2", 1, "loaction", "loaction1", 3, "click"], [1, "asd"], ["name", "signup", "data-toggle", "modal", "data-target", "#myModal2", 1, "loaction", "loaction1", 3, "click"], ["class", "dropdown-item", "style", "cursor: pointer;", 3, "click", 4, "ngIf"], [1, "dropdown-item", 2, "cursor", "pointer", 3, "click"], [1, "help-block2"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"]],
      template: function FirstnavComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FirstnavComponent_div_0_Template, 43, 19, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FirstnavComponent_div_1_Template, 34, 5, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FirstnavComponent_li_7_Template, 5, 2, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FirstnavComponent_li_8_Template, 5, 2, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "About Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Products ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, FirstnavComponent_li_17_Template, 3, 2, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Blog ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "(current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "News ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "(current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Offers ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ul", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Sign In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Sign Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h1", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Welcome Back ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Sign in to Continue ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "form", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FirstnavComponent_Template_form_ngSubmit_56_listener() {
            return ctx.login();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Phone Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "input", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FirstnavComponent_Template_input_ngModelChange_60_listener($event) {
            return ctx.loginObj.mobile_number_login = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, FirstnavComponent_div_61_Template, 2, 1, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Sign In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "ul", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Help");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h1", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " Let's get started ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " Create account to see our top picks for you! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "form", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FirstnavComponent_Template_form_ngSubmit_80_listener() {
            return ctx.signup();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "label", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Phone Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "input", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FirstnavComponent_Template_input_ngModelChange_84_listener($event) {
            return ctx.signupObj.mobile_number_login = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, FirstnavComponent_div_85_Template, 2, 1, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "button", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Create Account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "ul", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "li", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "a", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "li", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "a", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Help");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "h3", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " Verify Your Number ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Enter the 6-digit code we sent to you");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](107, "slice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](108, "slice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "form", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FirstnavComponent_Template_form_ngSubmit_109_listener() {
            return ctx.verifySignupOtp();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "ng-otp-input", 61, 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onInputChange", function FirstnavComponent_Template_ng_otp_input_onInputChange_112_listener($event) {
            return ctx.onOtpChange($event);
          })("ngModelChange", function FirstnavComponent_Template_ng_otp_input_ngModelChange_112_listener($event) {
            return ctx.verifySignupObj.otp = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "p", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "a", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FirstnavComponent_Template_a_click_115_listener() {
            return ctx.resend();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Resend OTP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "button", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Continue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "h3", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, " Verify Your Number ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "p", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Enter the 6-digit code we sent to you");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "p", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](130, "slice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](131, "slice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "form", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FirstnavComponent_Template_form_ngSubmit_132_listener() {
            return ctx.verifyLoginOtp();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "ng-otp-input", 68, 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onInputChange", function FirstnavComponent_Template_ng_otp_input_onInputChange_135_listener($event) {
            return ctx.onOtpChange($event);
          })("ngModelChange", function FirstnavComponent_Template_ng_otp_input_ngModelChange_135_listener($event) {
            return ctx.verifyLoginObj.otp_login = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "p", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "a", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FirstnavComponent_Template_a_click_138_listener() {
            return ctx.resend();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Resend OTP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "button", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Continue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLogin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLogin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLogin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLogin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](47, _c8));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categorieslist);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](48, _c9));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](49, _c10));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](50, _c11));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](51, _c12, ctx.login_option));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](53, _c12, ctx.signup_option));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](55, _c13, ctx.login_option, ctx.login_show));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.loginObj.mobile_number_login);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginForm.get("mobile_number_login").invalid && (ctx.loginForm.get("mobile_number_login").touched || ctx.loginForm.get("mobile_number_login").dirty));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.loginForm.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](58, _c13, ctx.signup_option, ctx.signup_show));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signupForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.signupObj.mobile_number_login);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signupForm.get("mobile_number_login").invalid && (ctx.signupForm.get("mobile_number_login").touched || ctx.signupForm.get("mobile_number_login").dirty));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.signupForm.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](107, 31, ctx.mobile, 0, 2), "******", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](108, 35, ctx.mobile, 8, 10), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signupOtpForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.config)("ngModel", ctx.verifySignupObj.otp);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](130, 39, ctx.mobile, 0, 2), "******", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](131, 43, ctx.mobile, 8, 10), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginOtpForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.config)("ngModel", ctx.verifyLoginObj.otp_login);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], ng_otp_input__WEBPACK_IMPORTED_MODULE_9__["ɵa"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["TitleCasePipe"]],
      styles: [".help-block2[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n    margin: 5px 0px;\n}\n\n\n\n@media (max-width: 575.98px) {\n    .new-otpres[_ngcontent-%COMP%] {\n        padding: 0px;\n    }\n}\n\n\n\n.asd[_ngcontent-%COMP%] {\n    margin-top: 3px;\n}\n\n\n\n.faloginuser[_ngcontent-%COMP%] {\n    margin-top: 10px;\n}\n\n\n\n#navbarDropdownList[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n    background-color: #FF8800;\n    font-size: 16px;\n    color: cornsilk;\n    border-radius: 30px;\n}\n\n\n\n#navbarDropdownList[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    background-color: #fff;\n    \n    border-radius: 30px;\n    width: 235px;\n}\n\n\n\n@media (max-width: 575.98px) {\n    .new-otpres[_ngcontent-%COMP%] {\n        padding: 0px;\n    }\n    .asd[_ngcontent-%COMP%] {\n        margin-top: 7px;\n    }\n    .top_jayabhery[_ngcontent-%COMP%] {\n        margin-right: 45px !important;\n    }\n}\n\n\n\n.asd[_ngcontent-%COMP%] {\n    margin-top: 3px;\n}\n\n\n\n@media (max-width: 360px) {\n    .Jayabhery_media[_ngcontent-%COMP%] {\n        \n        margin-top: 30px;\n        margin-bottom: 30px;\n    }\n    .top_jayabhery[_ngcontent-%COMP%] {\n        margin-right: 30px !important;\n    }\n}\n\n\n\n@media only screen and (max-width: 900px) and (min-width: 768px){\n\n    .number-note[_ngcontent-%COMP%]\n    {\n        right: 217px !important;\n        top:118px !important;\n    }\n}\n\n\n\n@media only screen and (max-width: 1350px) and (min-width: 1024px){\n.search-data[_ngcontent-%COMP%]\n{\n    width:200px;\n}\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21tb24vZmlyc3RuYXYvZmlyc3RuYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7OztBQUlBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0FBQ0o7Ozs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7Ozs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7OztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOzs7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsK0JBQStCO0lBQy9CLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOzs7O0FBQ0E7SUFDSTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLDZCQUE2QjtJQUNqQztBQUNKOzs7O0FBRUE7SUFDSSxlQUFlO0FBQ25COzs7O0FBRUE7SUFDSTtRQUNJLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSw2QkFBNkI7SUFDakM7QUFDSjs7OztBQUNBO0FBQ0EsMkNBQTJDO0lBQ3ZDOztRQUVJLHVCQUF1QjtRQUN2QixvQkFBb0I7SUFDeEI7QUFDSjs7OztBQUNBO0FBQ0E7O0lBRUksV0FBVztBQUNmOztBQUVBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb21tb24vZmlyc3RuYXYvZmlyc3RuYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWxwLWJsb2NrMiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbjogNXB4IDBweDtcbn1cblxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzUuOThweCkge1xuICAgIC5uZXctb3RwcmVzIHtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgIH1cbn1cblxuLmFzZCB7XG4gICAgbWFyZ2luLXRvcDogM3B4O1xufVxuXG4uZmFsb2dpbnVzZXIge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbiNuYXZiYXJEcm9wZG93bkxpc3QgdWwgbGkgOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY4ODAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogY29ybnNpbGs7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbn1cblxuI25hdmJhckRyb3Bkb3duTGlzdCB1bCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjN0NCNzM0OyAqL1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgd2lkdGg6IDIzNXB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XG4gICAgLm5ldy1vdHByZXMge1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgfVxuICAgIC5hc2Qge1xuICAgICAgICBtYXJnaW4tdG9wOiA3cHg7XG4gICAgfVxuICAgIC50b3BfamF5YWJoZXJ5IHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0NXB4ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG4uYXNkIHtcbiAgICBtYXJnaW4tdG9wOiAzcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAzNjBweCkge1xuICAgIC5KYXlhYmhlcnlfbWVkaWEge1xuICAgICAgICAvKiBtYXJnaW46IDMwcHg7ICovXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgfVxuICAgIC50b3BfamF5YWJoZXJ5IHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkgYW5kIChtaW4td2lkdGg6IDc2OHB4KXtcbi8qIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7ICovXG4gICAgLm51bWJlci1ub3RlXG4gICAge1xuICAgICAgICByaWdodDogMjE3cHggIWltcG9ydGFudDtcbiAgICAgICAgdG9wOjExOHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzUwcHgpIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpe1xuLnNlYXJjaC1kYXRhXG57XG4gICAgd2lkdGg6MjAwcHg7XG59XG5cbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FirstnavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-firstnav',
          templateUrl: './firstnav.component.html',
          styleUrls: ['./firstnav.component.css']
        }]
      }], function () {
        return [{
          type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__["ToastrManager"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }];
      }, {
        ngOtpInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['ngOtpInput', {
            "static": false
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/common/footer/footer.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/components/common/footer/footer.component.ts ***!
    \**************************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentsCommonFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/landing"];
    };

    function FooterComponent_li_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Home");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
      }
    }

    var _c1 = function _c1() {
      return ["/home"];
    };

    function FooterComponent_li_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Home");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
      }
    }

    var _c2 = function _c2() {
      return ["/aboutus"];
    };

    var _c3 = function _c3() {
      return ["/all"];
    };

    var _c4 = function _c4() {
      return ["/blog"];
    };

    var _c5 = function _c5() {
      return ["/news"];
    };

    var _c6 = function _c6() {
      return ["/help"];
    };

    var _c7 = function _c7() {
      return ["/support"];
    };

    var _c8 = function _c8() {
      return ["/terms"];
    };

    var _c9 = function _c9() {
      return ["/privacy-policy"];
    };

    var _c10 = function _c10() {
      return ["/faqs"];
    };

    var _c11 = function _c11() {
      return ["/contactus"];
    };

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.isLogin = localStorage.getItem('Authorization');
        }
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 69,
      vars: 22,
      consts: [[1, "footer-content"], [1, "container"], [1, "row", "justify-content-between"], [1, "col-md-2"], [1, "footer-main1"], [1, "footer-home"], [4, "ngIf"], ["routerLinkActive", "router-link-active", 1, "footer-inside", 3, "routerLink"], [1, "footer-main1", 3, "routerLink"], [1, "footer-inside", 3, "routerLink"], [1, "col-md-4"], [1, "footer-inside"], ["src", "../../../../assets/images/playstore.png", "alt", "", 1, "store-img", "mt-1", "mb-1"], ["src", "../../../assets/images/app-store.PNG", "alt", "", 1, "store-img", "mt-1", "mb-1"], [1, "nav", "social-links"], ["href", "", 1, "social-icons"], [1, "fab", "fa-facebook-f"], ["href", "", 1, "social-icons", "social-icons1"], [1, "fab", "fa-twitter"], ["href", "", 1, "social-icons", "social-icons2"], [1, "fab", "fa-linkedin-in"], ["href", "", 1, "social-icons", "social-icons3"], [1, "fab", "fa-instagram"], [1, "text-center", "p-3", "Footer_copyrights"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Frootcity");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FooterComponent_li_8_Template, 3, 2, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FooterComponent_li_9_Template, 3, 2, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "About Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Products");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Blog");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "News");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Help");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Support");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Terms & Conditions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Privacy & Policy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "FAQs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Contact Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h3", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Download Our App");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h3", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Get Social With Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "ul", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Foortcity@2021 Copyrights ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLogin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLogin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c5));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c6));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c7));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c8));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c9));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c10));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c11));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
      styles: [".Footer_copyrights[_ngcontent-%COMP%] {\r\n    background-color: rgba(0, 0, 0, 0.2);\r\n    margin-bottom: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21tb24vZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0NBQW9DO0lBQ3BDLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tbW9uL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5Gb290ZXJfY29weXJpZ2h0cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/contactus/contactus.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/contactus/contactus.component.ts ***!
    \*************************************************************/

  /*! exports provided: ContactusComponent */

  /***/
  function srcAppComponentsContactusContactusComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactusComponent", function () {
      return ContactusComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _common_firstnav_firstnav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../common/firstnav/firstnav.component */
    "./src/app/components/common/firstnav/firstnav.component.ts");
    /* harmony import */


    var _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../common/footer/footer.component */
    "./src/app/components/common/footer/footer.component.ts");

    var ContactusComponent =
    /*#__PURE__*/
    function () {
      function ContactusComponent() {
        _classCallCheck(this, ContactusComponent);
      }

      _createClass(ContactusComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactusComponent;
    }();

    ContactusComponent.ɵfac = function ContactusComponent_Factory(t) {
      return new (t || ContactusComponent)();
    };

    ContactusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactusComponent,
      selectors: [["app-contactus"]],
      decls: 5,
      vars: 0,
      consts: [[1, "blog_developnment"], [1, "blog_heading"]],
      template: function ContactusComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-firstnav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "The page is under design ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer");
        }
      },
      directives: [_common_firstnav_firstnav_component__WEBPACK_IMPORTED_MODULE_1__["FirstnavComponent"], _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdHVzL2NvbnRhY3R1cy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contactus',
          templateUrl: './contactus.component.html',
          styleUrls: ['./contactus.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/faqs/faqs.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/faqs/faqs.component.ts ***!
    \***************************************************/

  /*! exports provided: FaqsComponent */

  /***/
  function srcAppComponentsFaqsFaqsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FaqsComponent", function () {
      return FaqsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _common_firstnav_firstnav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../common/firstnav/firstnav.component */
    "./src/app/components/common/firstnav/firstnav.component.ts");
    /* harmony import */


    var _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../common/footer/footer.component */
    "./src/app/components/common/footer/footer.component.ts");

    var FaqsComponent =
    /*#__PURE__*/
    function () {
      function FaqsComponent() {
        _classCallCheck(this, FaqsComponent);
      }

      _createClass(FaqsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FaqsComponent;
    }();

    FaqsComponent.ɵfac = function FaqsComponent_Factory(t) {
      return new (t || FaqsComponent)();
    };

    FaqsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FaqsComponent,
      selectors: [["app-faqs"]],
      decls: 5,
      vars: 0,
      consts: [[1, "blog_developnment"], [1, "blog_heading"]],
      template: function FaqsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-firstnav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "The page is under design ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer");
        }
      },
      directives: [_common_firstnav_firstnav_component__WEBPACK_IMPORTED_MODULE_1__["FirstnavComponent"], _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmFxcy9mYXFzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FaqsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-faqs',
          templateUrl: './faqs.component.html',
          styleUrls: ['./faqs.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/help/help.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/help/help.component.ts ***!
    \***************************************************/

  /*! exports provided: HelpComponent */

  /***/
  function srcAppComponentsHelpHelpComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelpComponent", function () {
      return HelpComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _common_firstnav_firstnav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../common/firstnav/firstnav.component */
    "./src/app/components/common/firstnav/firstnav.component.ts");
    /* harmony import */


    var _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../common/footer/footer.component */
    "./src/app/components/common/footer/footer.component.ts");

    var HelpComponent =
    /*#__PURE__*/
    function () {
      function HelpComponent() {
        _classCallCheck(this, HelpComponent);
      }

      _createClass(HelpComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HelpComponent;
    }();

    HelpComponent.ɵfac = function HelpComponent_Factory(t) {
      return new (t || HelpComponent)();
    };

    HelpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HelpComponent,
      selectors: [["app-help"]],
      decls: 5,
      vars: 0,
      consts: [[1, "blog_developnment"], [1, "blog_heading"]],
      template: function HelpComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-firstnav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "The page is under design ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer");
        }
      },
      directives: [_common_firstnav_firstnav_component__WEBPACK_IMPORTED_MODULE_1__["FirstnavComponent"], _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVscC9oZWxwLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HelpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-help',
          templateUrl: './help.component.html',
          styleUrls: ['./help.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/home/home.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/home/home.component.ts ***!
    \***************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/user */
    "./src/app/models/user.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/service/data.service */
    "./src/app/service/data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/__ivy_ngcc__/fesm2015/ng6-toastr-notifications.js");
    /* harmony import */


    var _common_firstnav_firstnav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../common/firstnav/firstnav.component */
    "./src/app/components/common/firstnav/firstnav.component.ts");
    /* harmony import */


    var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-owl-carousel-o */
    "./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../common/footer/footer.component */
    "./src/app/components/common/footer/footer.component.ts");

    function HomeComponent_4_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var type_r238 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", type_r238 == null ? null : type_r238.slider_image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      }
    }

    function HomeComponent_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HomeComponent_4_ng_template_0_Template, 2, 1, "ng-template", 34);
      }
    }

    function HomeComponent_div_44_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_44_div_17_a_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r250 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_44_div_17_a_1_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r250);

          var item_r242 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          var ctx_r248 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r248.favorite(item_r242);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_44_div_17_a_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r253 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_44_div_17_a_2_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r253);

          var item_r242 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          var ctx_r251 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r251.favorite(item_r242);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_44_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeComponent_div_44_div_17_a_1_Template, 2, 0, "a", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HomeComponent_div_44_div_17_a_2_Template, 2, 0, "a", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r242 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (item_r242 == null ? null : item_r242.is_favourite) == "0");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (item_r242 == null ? null : item_r242.is_favourite) == "1");
      }
    }

    function HomeComponent_div_44_Template(rf, ctx) {
      if (rf & 1) {
        var _r256 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_44_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r256);

          var item_r242 = ctx.$implicit;

          var ctx_r255 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r255.getProductsbyId(item_r242);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Price per kg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Add to cart");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, HomeComponent_div_44_div_16_Template, 3, 0, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, HomeComponent_div_44_div_17_Template, 3, 2, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r242 = ctx.$implicit;

        var ctx_r236 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", item_r242 == null ? null : item_r242.prouduct_image_url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r242 == null ? null : item_r242.product_title);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("INR ", item_r242 == null ? null : item_r242.product_price, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r236.isLogin);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r236.isLogin);
      }
    }

    function HomeComponent_53_ng_template_0_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_53_ng_template_0_div_17_a_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r266 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_53_ng_template_0_div_17_a_1_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r266);

          var item_r257 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;

          var ctx_r264 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r264.favorite(item_r257);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_53_ng_template_0_div_17_a_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r269 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_53_ng_template_0_div_17_a_2_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r269);

          var item_r257 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;

          var ctx_r267 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r267.favorite(item_r257);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_53_ng_template_0_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeComponent_53_ng_template_0_div_17_a_1_Template, 2, 0, "a", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HomeComponent_53_ng_template_0_div_17_a_2_Template, 2, 0, "a", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r257 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (item_r257 == null ? null : item_r257.is_favourite) == "0");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (item_r257 == null ? null : item_r257.is_favourite) == "1");
      }
    }

    function HomeComponent_53_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r273 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_53_ng_template_0_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r273);

          var item_r257 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r271 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r271.getProductsbyId(item_r257);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Price per kg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Add to cart");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, HomeComponent_53_ng_template_0_div_16_Template, 3, 0, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, HomeComponent_53_ng_template_0_div_17_Template, 3, 2, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r257 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        var ctx_r259 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", item_r257 == null ? null : item_r257.prouduct_image_url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r257 == null ? null : item_r257.product_title);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("INR ", item_r257 == null ? null : item_r257.product_price, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r259.isLogin);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r259.isLogin);
      }
    }

    function HomeComponent_53_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HomeComponent_53_ng_template_0_Template, 18, 5, "ng-template", 34);
      }
    }

    var HomeComponent =
    /*#__PURE__*/
    function () {
      // slidedata : any = [];
      function HomeComponent(service, router, toastr, http) {
        _classCallCheck(this, HomeComponent);

        this.service = service;
        this.router = router;
        this.toastr = toastr;
        this.http = http;
        this.categorieslist = [];
        this.slidedata = [];
        this.favObj = new src_app_models_user__WEBPACK_IMPORTED_MODULE_2__["favourite"]();
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
        this.customOptions = {
          loop: true,
          margin: 10,
          nav: false,
          dots: false,
          autoplay: true,
          responsive: {
            0: {
              items: 1
            },
            600: {
              items: 1
            },
            1000: {
              items: 1
            }
          }
        };
        this.customOptions1 = {
          loop: true,
          margin: 10,
          nav: false,
          dots: false,
          autoplay: true,
          responsive: {
            0: {
              items: 1
            },
            600: {
              items: 1
            },
            1000: {
              items: 4
            }
          }
        };
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.isLogin = localStorage.getItem('Authorization');
          this.slider();
          this.getBestSellers();
          this.getBestSellers1();
          this.getRecommended();
          this.getRecommended1();
          this.quantity = 1; // this.loadScripts();
        }
      }, {
        key: "loadScripts",
        value: function loadScripts() {
          // debugger
          var dynamicScripts = ['../../assets/js/owl.carousel.min.js', '../../assets/js/owl-content.js'];

          for (var i = 0; i < dynamicScripts.length; i++) {
            var node = document.createElement('script');
            node.src = dynamicScripts[i];
            node.type = 'text/javascript';
            node.async = false;
            node.charset = 'utf-8';
            document.getElementsByTagName('head')[0].appendChild(node);
          }
        }
      }, {
        key: "getBestSellers",
        value: function getBestSellers() {
          var _this42 = this;

          this.service.getBestSellers().subscribe(function (data) {
            // debugger
            _this42.bestsellers = data.data.bestSellers;
          });
        }
      }, {
        key: "getBestSellers1",
        value: function getBestSellers1() {
          var _this43 = this;

          this.id = localStorage.getItem('userId');
          this.service.getBestSellers1(this.id).subscribe(function (data) {
            // debugger
            _this43.bestsellers1 = data.data.bestSellers;
          });
        }
      }, {
        key: "slider",
        value: function slider() {
          var _this44 = this;

          this.service.slide().subscribe(function (data) {
            // debugger
            _this44.slidedata = data.data.sliderImages;
          });
        }
      }, {
        key: "getProductsbyId",
        value: function getProductsbyId(item) {
          var _this45 = this;

          // debugger
          this.slug = item.product_slug; // this.slug = "vegetables";

          this.service.getProductsbyId(this.slug).subscribe(function (data) {
            // debugger
            _this45.vegitables = data.data.products;
            _this45.name = data.data.products.product_slug;
            _this45.productslug = localStorage.setItem('productslug', data.data.products.product_slug);

            _this45.router.navigate(['/productdetails']);
          }, function (err) {
            var message = 'There is an issue with service. Please retry.';

            if (err.status === 400) {
              message = 'There is an error in getting list of sold to. Please retry.';
            }
          });
        }
      }, {
        key: "getRecommended",
        value: function getRecommended() {
          var _this46 = this;

          this.service.getRecommended().subscribe(function (data) {
            // debugger
            _this46.recommended = data.data.recommendedProducts;
          });
        }
      }, {
        key: "getRecommended1",
        value: function getRecommended1() {
          var _this47 = this;

          this.id = localStorage.getItem('userId');
          this.service.getRecommended1(this.id).subscribe(function (data) {
            // debugger
            _this47.recommended1 = data.data.recommendedProducts;
          });
        } // increment product qty

      }, {
        key: "incrementQty",
        value: function incrementQty() {
          console.log(this.quantity + 1);
          this.quantity += 1;
        } // decrement product qty

      }, {
        key: "decrementQty",
        value: function decrementQty() {
          if (this.quantity - 1 < 1) {
            this.quantity = 1;
            console.log('1->' + this.quantity);
          } else {
            this.quantity -= 1;
            console.log('2->' + this.quantity);
          }
        }
      }, {
        key: "favorite",
        value: function favorite(item) {
          // debugger
          if (item.is_favourite === "0") {
            this.favObj.favourite = true;
          }

          if (item.is_favourite === "1") {
            this.favObj.favourite = false;
          } // this.favObj.favourite = true;


          this.addToFavourites(item);
        } // console.log(this.quantity+1);

      }, {
        key: "addToFavourites",
        value: function addToFavourites(item) {
          var _this48 = this;

          // debugger
          this.favObj.product_id = item.product_id;
          this.favObj.user_id = localStorage.getItem('userId'); // this.favObj.favourite = true;

          var fData = new FormData();
          fData.append("product_id", this.favObj.product_id);
          fData.append("user_id", this.favObj.user_id);
          fData.append("favourite", JSON.stringify(this.favObj.favourite));
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            "x-api-key": "12345"
          });
          var profile = "addtofavourites";
          this.http.post(this.baseUrl + profile, fData, {
            headers: headers
          }).subscribe(function (data) {
            // debugger
            if (data.status === false) {
              _this48.toastr.errorToastr(data.data.error, 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              }); // location.reload()

            } else {
              _this48.toastr.successToastr(data.message, 'Success!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });

              _this48.favObj = new src_app_models_user__WEBPACK_IMPORTED_MODULE_2__["favourite"]();

              _this48.getRecommended1();

              _this48.getBestSellers1(); // location.reload();

            }
          }, function (err) {
            //debugger
            if (err && err.error && err.error) {
              var errorMesg = err.error.message;

              _this48.toastr.errorToastr(errorMesg, 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });
            } else {
              _this48.toastr.errorToastr('Something went wrong', 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });
            }
          });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__["ToastrManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 69,
      vars: 5,
      consts: [[3, "options"], [4, "ngFor", "ngForOf"], [1, "bestfruits"], [1, "container-fluid"], [1, "special-options"], [1, "row"], [1, "col-md-4"], [1, "card", "always-fresh"], [1, "new-freshdata"], ["src", "../../../assets/images/Artboard 1.png", "alt", "Card image cap", 1, "card-img-top", "fresh-image"], [1, "card-body", "p-0"], [1, "card-title", "always-title"], [1, "card-text", "always-subtitle"], ["src", "../../../assets/images/Artboard 2.png", "alt", "Card image cap", 1, "card-img-top", "fresh-image"], ["src", "../../../assets/images/Artboard 3.png", "alt", "Card image cap", 1, "card-img-top", "fresh-image"], [1, "container"], [1, "best-seller"], [1, "best-sellertitle"], [1, "ml-auto"], ["routerLink", "/Best-seller", "routerLinkActive", "router-link-active", 1, "see-more"], ["class", "col-md-3 seller-card", 4, "ngFor", "ngForOf"], [1, "best-seller", "mt-4"], ["routerLink", "/recommended-products", "routerLinkActive", "router-link-active", 1, "see-more"], ["id", "login", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade", "modal-fullscreen"], ["role", "document", 1, "modal-dialog"], [1, "modal-content", "login-content"], [1, "modal-header"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body", "p-0"], [1, "login-content"], [1, "col-md-6"], [1, "login-left"], [1, "vertuca-title"], ["carouselSlide", ""], [1, "item", "new-images"], ["alt", "no images", 1, "images-data", 3, "src"], [1, "col-md-3", "seller-card"], [1, "card", "seller-content", 3, "click"], [1, "fruits-main"], ["alt", "Card image cap", 1, "card-img-top", "image-sell", 3, "src"], [1, "card-body", "fruit-info"], [1, "card-title", "title-name"], [1, "card-text", "price-per"], [1, "price-data"], [1, "price"], [1, "rate-image", "ml-auto"], ["id", "addcartbtn", 1, "btn", "btn-success"], [4, "ngIf"], [1, "cart-data"], [1, "far", "fa-heart", "hart-image"], ["class", "cart-data", 3, "click", 4, "ngIf"], [1, "cart-data", 3, "click"], [1, "fas", "fa-heart", "hart-image", 2, "color", "#ed1c24"], [1, "item", "new-imgcontet"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-firstnav");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "owl-carousel-o", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, HomeComponent_4_Template, 1, 0, undefined, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h5", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "ALWAYS FRESH");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Some quick example text to build on the card title and make up the bulk of the card's content.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "h5", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "ALWAYS FRESH");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Some quick example text to build on the card title and make up the bulk of the card's content.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "h5", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "ALWAYS FRESH");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Some quick example text to build on the card title and make up the bulk of the card's content.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "ul", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Best Seller");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "li", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "See More");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, HomeComponent_div_44_Template, 18, 5, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "ul", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Recommend for you");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "li", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "See More");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "owl-carousel-o", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, HomeComponent_53_Template, 1, 0, undefined, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "h3", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, " Login ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "app-footer");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.customOptions);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.slidedata);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.bestsellers1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.customOptions1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.recommended1);
        }
      },
      directives: [_common_firstnav_firstnav_component__WEBPACK_IMPORTED_MODULE_7__["FirstnavComponent"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_8__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"], _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_8__["CarouselSlideDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"]],
      styles: ["@media screen and (max-width: 800px) {\r\n    .seller-card[_ngcontent-%COMP%] {\r\n        margin: 10px 40px 10px 40px;\r\n    }\r\n    .image-sell[_ngcontent-%COMP%] {\r\n        width: 65%;\r\n    }\r\n}\r\n\r\n#addcartbtn[_ngcontent-%COMP%] {\r\n    width: 86px;\r\n    height: 28px;\r\n    font-size: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO1FBQ0ksMkJBQTJCO0lBQy9CO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgLnNlbGxlci1jYXJkIHtcclxuICAgICAgICBtYXJnaW46IDEwcHggNDBweCAxMHB4IDQwcHg7XHJcbiAgICB9XHJcbiAgICAuaW1hZ2Utc2VsbCB7XHJcbiAgICAgICAgd2lkdGg6IDY1JTtcclxuICAgIH1cclxufVxyXG5cclxuI2FkZGNhcnRidG4ge1xyXG4gICAgd2lkdGg6IDg2cHg7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [{
          type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__["ToastrManager"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/landing/landing.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/landing/landing.component.ts ***!
    \*********************************************************/

  /*! exports provided: LandingComponent */

  /***/
  function srcAppComponentsLandingLandingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LandingComponent", function () {
      return LandingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/models/user */
    "./src/app/models/user.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/service/data.service */
    "./src/app/service/data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/__ivy_ngcc__/fesm2015/ng6-toastr-notifications.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _common_firstnav_firstnav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../common/firstnav/firstnav.component */
    "./src/app/components/common/firstnav/firstnav.component.ts");
    /* harmony import */


    var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-owl-carousel-o */
    "./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../common/footer/footer.component */
    "./src/app/components/common/footer/footer.component.ts");

    function LandingComponent_4_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var type_r278 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", type_r278 == null ? null : type_r278.slider_image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function LandingComponent_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LandingComponent_4_ng_template_0_Template, 2, 1, "ng-template", 34);
      }
    }

    function LandingComponent_div_44_Template(rf, ctx) {
      if (rf & 1) {
        var _r285 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingComponent_div_44_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r285);

          var item_r282 = ctx.$implicit;

          var ctx_r284 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r284.getProductsbyId(item_r282);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Price per kg");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Add to cart ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r282 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r282 == null ? null : item_r282.prouduct_image_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r282 == null ? null : item_r282.product_title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("INR ", item_r282 == null ? null : item_r282.product_price, "");
      }
    }

    function LandingComponent_53_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r291 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingComponent_53_ng_template_0_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r291);

          var item_r286 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r289 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r289.getProductsbyId(item_r286);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Price per kg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Add to cart");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r286 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r286 == null ? null : item_r286.prouduct_image_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r286 == null ? null : item_r286.product_title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("INR ", item_r286 == null ? null : item_r286.product_price, "");
      }
    }

    function LandingComponent_53_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LandingComponent_53_ng_template_0_Template, 18, 3, "ng-template", 34);
      }
    }

    var LandingComponent =
    /*#__PURE__*/
    function () {
      // slidedata : any = [];
      function LandingComponent(service, router, toastr, http) {
        _classCallCheck(this, LandingComponent);

        this.service = service;
        this.router = router;
        this.toastr = toastr;
        this.http = http;
        this.categorieslist = [];
        this.slidedata = [];
        this.recommended = [];
        this.favObj = new src_app_models_user__WEBPACK_IMPORTED_MODULE_1__["favourite"]();
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl;
        this.customOptions = {
          loop: true,
          margin: 10,
          nav: false,
          dots: false,
          autoplay: true,
          responsive: {
            0: {
              items: 1
            },
            600: {
              items: 1
            },
            1000: {
              items: 1
            }
          }
        };
        this.customOptions1 = {
          loop: true,
          margin: 10,
          nav: false,
          dots: false,
          autoplay: true,
          responsive: {
            0: {
              items: 1
            },
            600: {
              items: 1
            },
            1000: {
              items: 4
            }
          }
        };
      }

      _createClass(LandingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.isLogin = localStorage.getItem('Authorization');
          this.slider();
          this.getBestSellers();
          this.getRecommended();
          this.quantity = 1; // this.loadScripts();
        }
      }, {
        key: "loadScripts",
        value: function loadScripts() {
          // debugger
          var dynamicScripts = ['../../assets/js/owl.carousel.min.js', '../../assets/js/owl-content.js'];

          for (var i = 0; i < dynamicScripts.length; i++) {
            var node = document.createElement('script');
            node.src = dynamicScripts[i];
            node.type = 'text/javascript';
            node.async = false;
            node.charset = 'utf-8';
            document.getElementsByTagName('head')[0].appendChild(node);
          }
        }
      }, {
        key: "getBestSellers",
        value: function getBestSellers() {
          var _this49 = this;

          this.service.getBestSellers().subscribe(function (data) {
            // debugger
            _this49.bestsellers = data.data.bestSellers;
          });
        }
      }, {
        key: "slider",
        value: function slider() {
          var _this50 = this;

          this.service.slide().subscribe(function (data) {
            // debugger
            _this50.slidedata = data.data.sliderImages;
          });
        }
      }, {
        key: "getProductsbyId",
        value: function getProductsbyId(item) {
          var _this51 = this;

          // debugger
          this.slug = item.product_slug; // this.slug = "vegetables";

          this.service.getProductsbyId(this.slug).subscribe(function (data) {
            // debugger
            _this51.vegitables = data.data.products;
            _this51.name = data.data.products.product_slug;
            _this51.productslug = localStorage.setItem('productslug', data.data.products.product_slug);

            _this51.router.navigate(['/productdetails']);
          }, function (err) {
            var message = 'There is an issue with service. Please retry.';

            if (err.status === 400) {
              message = 'There is an error in getting list of sold to. Please retry.';
            }
          });
        }
      }, {
        key: "getRecommended",
        value: function getRecommended() {
          var _this52 = this;

          this.service.getRecommended().subscribe(function (data) {
            // debugger
            _this52.recommended = data.data.recommendedProducts;
          });
        } // increment product qty

      }, {
        key: "incrementQty",
        value: function incrementQty() {
          console.log(this.quantity + 1);
          this.quantity += 1;
        } // decrement product qty

      }, {
        key: "decrementQty",
        value: function decrementQty() {
          if (this.quantity - 1 < 1) {
            this.quantity = 1;
            console.log('1->' + this.quantity);
          } else {
            this.quantity -= 1;
            console.log('2->' + this.quantity);
          }
        }
      }]);

      return LandingComponent;
    }();

    LandingComponent.ɵfac = function LandingComponent_Factory(t) {
      return new (t || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastrManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]));
    };

    LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LandingComponent,
      selectors: [["app-landing"]],
      decls: 69,
      vars: 5,
      consts: [[3, "options"], [4, "ngFor", "ngForOf"], [1, "bestfruits"], [1, "container-fluid"], [1, "special-options"], [1, "row"], [1, "col-md-4"], [1, "card", "always-fresh"], [1, "new-freshdata"], ["src", "../../../assets/images/Artboard 1.png", "alt", "Card image cap", 1, "card-img-top", "fresh-image"], [1, "card-body", "p-0"], [1, "card-title", "always-title"], [1, "card-text", "always-subtitle"], ["src", "../../../assets/images/Artboard 2.png", "alt", "Card image cap", 1, "card-img-top", "fresh-image"], ["src", "../../../assets/images/Artboard 3.png", "alt", "Card image cap", 1, "card-img-top", "fresh-image"], [1, "container"], [1, "best-seller"], [1, "best-sellertitle"], [1, "ml-auto"], ["routerLink", "/Best-seller", "routerLinkActive", "router-link-active", 1, "see-more"], ["class", "col-md-3 seller-card", 4, "ngFor", "ngForOf"], [1, "best-seller", "mt-4"], ["routerLink", "/recommended-products", "routerLinkActive", "router-link-active", 1, "see-more"], ["id", "login", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade", "modal-fullscreen"], ["role", "document", 1, "modal-dialog"], [1, "modal-content", "login-content"], [1, "modal-header"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body", "p-0"], [1, "login-content"], [1, "col-md-6"], [1, "login-left"], [1, "vertuca-title"], ["carouselSlide", ""], [1, "item", "new-images"], ["alt", "no images", 1, "images-data", 3, "src"], [1, "col-md-3", "seller-card"], [1, "card", "seller-content", 3, "click"], [1, "fruits-main"], ["alt", "Card image cap", 1, "card-img-top", "image-sell", 3, "src"], [1, "card-body", "fruit-info"], [1, "card-title", "title-name"], [1, "card-text", "price-per"], [1, "price-data"], [1, "price"], [1, "rate-image", "ml-auto"], ["id", "addcartbtn", 1, "btn", "btn-success"], [1, "cart-data"], [1, "far", "fa-heart", "hart-image"], [1, "item", "new-imgcontet"]],
      template: function LandingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-firstnav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "owl-carousel-o", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LandingComponent_4_Template, 1, 0, undefined, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h5", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "ALWAYS FRESH");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Some quick example text to build on the card title and make up the bulk of the card's content. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h5", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "ALWAYS FRESH");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Some quick example text to build on the card title and make up the bulk of the card's content. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h5", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "ALWAYS FRESH");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Some quick example text to build on the card title and make up the bulk of the card's content. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ul", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Best Seller");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "See More");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, LandingComponent_div_44_Template, 18, 3, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "ul", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Recommend for you");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "See More");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "owl-carousel-o", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, LandingComponent_53_Template, 1, 0, undefined, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h3", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "app-footer");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.customOptions);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slidedata);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bestsellers);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.customOptions1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.recommended);
        }
      },
      directives: [_common_firstnav_firstnav_component__WEBPACK_IMPORTED_MODULE_7__["FirstnavComponent"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_8__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_8__["CarouselSlideDirective"]],
      styles: ["@media screen and (max-width: 800px) {\r\n    .seller-card[_ngcontent-%COMP%] {\r\n        margin: 10px 40px 10px 40px;\r\n    }\r\n    .image-sell[_ngcontent-%COMP%] {\r\n        width: 65%;\r\n    }\r\n}\r\n\r\n\r\n\r\n.avatar[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n    border-radius: 50%;\r\n    max-width: 96px;\r\n}\r\n\r\n#customers-testimonials[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\r\n    opacity: .2;\r\n    transform: scale3d(0.8, 0.8, 1);\r\n    -webkit-transform: scale3d(0.8, 0.8, 1);\r\n    transition: all 0.3s ease-in-out;\r\n    -webkit-transition: all 0.3s ease-in-out;\r\n    -moz-transition: all 0.3s ease-in-out;\r\n}\r\n\r\n#customers-testimonials[_ngcontent-%COMP%]   .owl-item.active.center[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\r\n    opacity: 1;\r\n    transform: scale3d(1.0, 1.0, 1);\r\n    -webkit-transform: scale3d(1.0, 1.0, 1);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0dBU0c7O0FBRUg7SUFDSTtRQUNJLDJCQUEyQjtJQUMvQjtJQUNBO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7O0FBQ0EsV0FBVzs7QUFDWDtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCwrQkFBK0I7SUFDL0IsdUNBQXVDO0lBQ3ZDLGdDQUFnQztJQUNoQyx3Q0FBd0M7SUFDeEMscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLCtCQUErQjtJQUMvQix1Q0FBdUM7QUFDM0MiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMHB4KSB7XHJcbiAgICAuc2VsbGVyLWNhcmR7XHJcbiAgICBtYXJnaW46IDEwcHggNDBweCAxMHB4IDQwcHg7XHJcbn1cclxuLmltYWdlLXNlbGxcclxue1xyXG4gICAgd2lkdGg6IDY5JTtcclxufVxyXG59ICovXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgLnNlbGxlci1jYXJkIHtcclxuICAgICAgICBtYXJnaW46IDEwcHggNDBweCAxMHB4IDQwcHg7XHJcbiAgICB9XHJcbiAgICAuaW1hZ2Utc2VsbCB7XHJcbiAgICAgICAgd2lkdGg6IDY1JTtcclxuICAgIH1cclxufVxyXG4vKiBzbGlkZXIgKi9cclxuLmF2YXRhciB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXgtd2lkdGg6IDk2cHg7XHJcbn1cclxuXHJcbiNjdXN0b21lcnMtdGVzdGltb25pYWxzIC5ib3gge1xyXG4gICAgb3BhY2l0eTogLjI7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC44LCAwLjgsIDEpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC44LCAwLjgsIDEpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuI2N1c3RvbWVycy10ZXN0aW1vbmlhbHMgLm93bC1pdGVtLmFjdGl2ZS5jZW50ZXIgLmJveCB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMCwgMS4wLCAxKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEuMCwgMS4wLCAxKTtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-landing',
          templateUrl: './landing.component.html',
          styleUrls: ['./landing.component.css']
        }]
      }], function () {
        return [{
          type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastrManager"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/main-menu-categories/main-menu-categories.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/components/main-menu-categories/main-menu-categories.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: MainMenuCategoriesComponent */

  /***/
  function srcAppComponentsMainMenuCategoriesMainMenuCategoriesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainMenuCategoriesComponent", function () {
      return MainMenuCategoriesComponent;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/user */
    "./src/app/models/user.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/service/data.service */
    "./src/app/service/data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/__ivy_ngcc__/fesm2015/ng6-toastr-notifications.js");
    /* harmony import */


    var _common_firstnav_firstnav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../common/firstnav/firstnav.component */
    "./src/app/components/common/firstnav/firstnav.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../common/footer/footer.component */
    "./src/app/components/common/footer/footer.component.ts");

    function MainMenuCategoriesComponent_div_4_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r299 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainMenuCategoriesComponent_div_4_div_1_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r299);

          var item_r296 = ctx.$implicit;

          var ctx_r298 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r298.getProductsbyId(item_r296);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Price per kg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Add to cart");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r296 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", item_r296 == null ? null : item_r296.prouduct_image_url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r296 == null ? null : item_r296.product_title);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("INR ", item_r296 == null ? null : item_r296.product_price, "");
      }
    }

    function MainMenuCategoriesComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MainMenuCategoriesComponent_div_4_div_1_Template, 18, 3, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r293 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r293.vegitables);
      }
    }

    function MainMenuCategoriesComponent_div_5_div_1_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function MainMenuCategoriesComponent_div_5_div_1_div_17_a_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r309 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainMenuCategoriesComponent_div_5_div_1_div_17_a_1_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r309);

          var item_r301 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          var ctx_r307 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r307.favorite(item_r301);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function MainMenuCategoriesComponent_div_5_div_1_div_17_a_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r312 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainMenuCategoriesComponent_div_5_div_1_div_17_a_2_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r312);

          var item_r301 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          var ctx_r310 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r310.favorite(item_r301);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function MainMenuCategoriesComponent_div_5_div_1_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MainMenuCategoriesComponent_div_5_div_1_div_17_a_1_Template, 2, 0, "a", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MainMenuCategoriesComponent_div_5_div_1_div_17_a_2_Template, 2, 0, "a", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r301 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (item_r301 == null ? null : item_r301.is_favourite) == "0");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (item_r301 == null ? null : item_r301.is_favourite) == "1");
      }
    }

    function MainMenuCategoriesComponent_div_5_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r315 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainMenuCategoriesComponent_div_5_div_1_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r315);

          var item_r301 = ctx.$implicit;

          var ctx_r314 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r314.getProductsbyId(item_r301);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Price per kg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Add to cart");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, MainMenuCategoriesComponent_div_5_div_1_div_16_Template, 3, 0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, MainMenuCategoriesComponent_div_5_div_1_div_17_Template, 3, 2, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r301 = ctx.$implicit;

        var ctx_r300 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", item_r301 == null ? null : item_r301.prouduct_image_url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r301 == null ? null : item_r301.product_title);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("INR ", item_r301 == null ? null : item_r301.product_price, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r300.isLogin);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r300.isLogin);
      }
    }

    function MainMenuCategoriesComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MainMenuCategoriesComponent_div_5_div_1_Template, 18, 5, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r294 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r294.filteredData1);
      }
    }

    var MainMenuCategoriesComponent =
    /*#__PURE__*/
    function () {
      function MainMenuCategoriesComponent(service, router, toastr, http) {
        _classCallCheck(this, MainMenuCategoriesComponent);

        this.service = service;
        this.router = router;
        this.toastr = toastr;
        this.http = http;
        this.favObj = new src_app_models_user__WEBPACK_IMPORTED_MODULE_2__["favourite"]();
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
      }

      _createClass(MainMenuCategoriesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.isLogin = localStorage.getItem('Authorization');
          this.name = localStorage.getItem('productname');
          this.getProducts();
          this.getProducts1();
        } // getBestSellers(){
        //   this.service.getBestSellers().subscribe(
        //     (data:any)=> {
        //       debugger
        //     this.bestsellers= data.data.bestSellers;
        //   });
        // }

      }, {
        key: "getProducts",
        value: function getProducts() {
          var _this53 = this;

          // debugger
          this.slug = localStorage.getItem('productname'); // this.slug = "vegetables";

          this.service.getProducts(this.slug).subscribe(function (data) {
            // debugger
            _this53.vegitables = data.data.products;
            _this53.filteredData = data.data.products;
            _this53.name = data.data.slug; // location.reload();
            // this.router.navigate(['/products']);
          }, function (err) {
            var message = 'There is an issue with service. Please retry.';

            if (err.status === 400) {
              message = 'There is an error in getting list of sold to. Please retry.';
            }
          });
        }
      }, {
        key: "getProducts1",
        value: function getProducts1() {
          var _this54 = this;

          // debugger
          this.slug = localStorage.getItem('productname');
          this.id = localStorage.getItem('userId');
          this.service.getProducts1(this.slug, this.id).subscribe(function (data) {
            // debugger
            _this54.vegitables = data.data.products;
            _this54.filteredData1 = data.data.products;
            _this54.name = data.data.slug; // location.reload();
            // this.router.navigate(['/products']);
          }, function (err) {
            var message = 'There is an issue with service. Please retry.';

            if (err.status === 400) {
              message = 'There is an error in getting list of sold to. Please retry.';
            }
          });
        }
      }, {
        key: "getProductsbyId",
        value: function getProductsbyId(item) {
          var _this55 = this;

          // debugger
          this.slug = item.product_slug; // this.slug = "vegetables";

          this.service.getProductsbyId(this.slug).subscribe(function (data) {
            // debugger
            _this55.vegitables = data.data.products;
            _this55.name = data.data.products.product_slug;
            _this55.productslug = localStorage.setItem('productslug', data.data.products.product_slug);

            _this55.router.navigate(['/productdetails']); // location.reload();

          }, function (err) {
            var message = 'There is an issue with service. Please retry.';

            if (err.status === 400) {
              message = 'There is an error in getting list of sold to. Please retry.';
            }
          });
        } // filterItems(ev: any) {
        //   this.querystring = ev.target.value;
        //   // debugger
        //   if (this.querystring && this.querystring.trim() != '') {
        //     // debugger
        //     this.filteredData = this.filteredData.filter((item) => { 
        //       // debugger
        //       return (item.product_slug?.toLowerCase().indexOf(this.querystring.toLowerCase()) > -1) || (item.product_title?.toLowerCase().indexOf(this.querystring.toLowerCase()) > -1);
        //       // return (item.name?.toLowerCase().includes(this.querystring.toLowerCase())) || (item.referenceId?.toLowerCase().indexOf(this.querystring.toLowerCase()) > -1);
        //     })
        //   }else
        //   {
        //     this.getProducts();
        //   }
        // }

      }, {
        key: "favorite",
        value: function favorite(item) {
          // debugger
          if (item.is_favourite === "0") {
            this.favObj.favourite = true;
          }

          if (item.is_favourite === "1") {
            this.favObj.favourite = false;
          } // this.favObj.favourite = true;


          this.addToFavourites(item);
        } // console.log(this.quantity+1);

      }, {
        key: "addToFavourites",
        value: function addToFavourites(item) {
          var _this56 = this;

          // debugger
          this.favObj.product_id = item.product_id;
          this.favObj.user_id = localStorage.getItem('userId'); // this.favObj.favourite = true;

          var fData = new FormData();
          fData.append("product_id", this.favObj.product_id);
          fData.append("user_id", this.favObj.user_id);
          fData.append("favourite", JSON.stringify(this.favObj.favourite));
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            "x-api-key": "12345"
          });
          var profile = "addtofavourites";
          this.http.post(this.baseUrl + profile, fData, {
            headers: headers
          }).subscribe(function (data) {
            // debugger
            if (data.status === false) {
              _this56.toastr.errorToastr(data.data.error, 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              }); // location.reload()

            } else {
              _this56.toastr.successToastr(data.message, 'Success!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });

              _this56.favObj = new src_app_models_user__WEBPACK_IMPORTED_MODULE_2__["favourite"]();

              _this56.getProducts1(); // location.reload();

            }
          }, function (err) {
            //debugger
            if (err && err.error && err.error) {
              var errorMesg = err.error.message;

              _this56.toastr.errorToastr(errorMesg, 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });
            } else {
              _this56.toastr.errorToastr('Something went wrong', 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });
            }
          });
        }
      }]);

      return MainMenuCategoriesComponent;
    }();

    MainMenuCategoriesComponent.ɵfac = function MainMenuCategoriesComponent_Factory(t) {
      return new (t || MainMenuCategoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__["ToastrManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
    };

    MainMenuCategoriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MainMenuCategoriesComponent,
      selectors: [["app-main-menu-categories"]],
      decls: 7,
      vars: 2,
      consts: [[1, "best-selletdata"], [1, "container"], [1, "best-seller"], ["class", "row", 4, "ngIf"], [1, "row"], ["class", "col-md-3", 4, "ngFor", "ngForOf"], [1, "col-md-3"], [1, "card", "seller-content", 3, "click"], [1, "fruits-main"], ["alt", "Card image cap", 1, "card-img-top", "image-sell", 3, "src"], [1, "card-body", "fruit-info"], [1, "card-title", "title-name"], [1, "card-text", "price-per"], [1, "price-data"], [1, "price"], [1, "rate-image", "ml-auto"], ["id", "addcartbtn", 1, "btn", "btn-success"], ["href", "#", 1, "cart-data"], [1, "far", "fa-heart", "hart-image"], ["class", "col-md-3 seller-card", 4, "ngFor", "ngForOf"], [1, "col-md-3", "seller-card"], [4, "ngIf"], [1, "cart-data"], ["class", "cart-data", 3, "click", 4, "ngIf"], [1, "cart-data", 3, "click"], [1, "fas", "fa-heart", "hart-image", 2, "color", "#ed1c24"]],
      template: function MainMenuCategoriesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-firstnav");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MainMenuCategoriesComponent_div_4_Template, 2, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MainMenuCategoriesComponent_div_5_Template, 2, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "app-footer");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLogin);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLogin);
        }
      },
      directives: [_common_firstnav_firstnav_component__WEBPACK_IMPORTED_MODULE_7__["FirstnavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]],
      styles: ["@media screen and (max-width: 800px) {\r\n    .seller-card[_ngcontent-%COMP%] {\r\n        margin: 10px 40px 10px 40px;\r\n    }\r\n    .image-sell[_ngcontent-%COMP%] {\r\n        width: 65%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluLW1lbnUtY2F0ZWdvcmllcy9tYWluLW1lbnUtY2F0ZWdvcmllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7UUFDSSwyQkFBMkI7SUFDL0I7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYWluLW1lbnUtY2F0ZWdvcmllcy9tYWluLW1lbnUtY2F0ZWdvcmllcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgIC5zZWxsZXItY2FyZCB7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDQwcHggMTBweCA0MHB4O1xyXG4gICAgfVxyXG4gICAgLmltYWdlLXNlbGwge1xyXG4gICAgICAgIHdpZHRoOiA2NSU7XHJcbiAgICB9XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MainMenuCategoriesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-main-menu-categories',
          templateUrl: './main-menu-categories.component.html',
          styleUrls: ['./main-menu-categories.component.css']
        }]
      }], function () {
        return [{
          type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__["ToastrManager"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/my-orders/my-orders.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/my-orders/my-orders.component.ts ***!
    \*************************************************************/

  /*! exports provided: MyOrdersComponent */

  /***/
  function srcAppComponentsMyOrdersMyOrdersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyOrdersComponent", function () {
      return MyOrdersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var angular_datatables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! angular-datatables */
    "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/service/data.service */
    "./src/app/service/data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/__ivy_ngcc__/fesm2015/ng6-toastr-notifications.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _common_firstnav_firstnav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../common/firstnav/firstnav.component */
    "./src/app/components/common/firstnav/firstnav.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../common/footer/footer.component */
    "./src/app/components/common/footer/footer.component.ts");

    function MyOrdersComponent_tr_34_span_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " NA ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MyOrdersComponent_tr_34_Template(rf, ctx) {
      if (rf & 1) {
        var _r322 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MyOrdersComponent_tr_34_span_8_Template, 2, 0, "span", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyOrdersComponent_tr_34_Template_button_click_17_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r322);

          var item_r318 = ctx.$implicit;

          var ctx_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r321.getOrderDetailsByID(item_r318);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "View Details");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r318 = ctx.$implicit;
        var i_r319 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r319 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r318 == null ? null : item_r318.order_id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r318 == null ? null : item_r318.ext_trn_id, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r318 == null ? null : item_r318.ext_trn_id) === "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r318 == null ? null : item_r318.order_total_amount);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r318 == null ? null : item_r318.order_status);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r318 == null ? null : item_r318.order_created_dttm);
      }
    }

    function MyOrdersComponent_div_53_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r323 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r323 == null ? null : item_r323.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r323 == null ? null : item_r323.product_quantity);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r323 == null ? null : item_r323.product_price);
      }
    }

    var MyOrdersComponent =
    /*#__PURE__*/
    function () {
      function MyOrdersComponent(service, router, toastr, http) {
        _classCallCheck(this, MyOrdersComponent);

        this.service = service;
        this.router = router;
        this.toastr = toastr;
        this.http = http;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(MyOrdersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getOrders();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // Do not forget to unsubscribe the event
          this.dtTrigger.unsubscribe();
        }
      }, {
        key: "listUsers",
        value: function listUsers() {
          var _this57 = this;

          this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();

            _this57.getOrders();
          });
        }
      }, {
        key: "getOrders",
        value: function getOrders() {
          var _this58 = this;

          // debugger
          this.id = localStorage.getItem('userId');
          this.service.getOrders(this.id).subscribe(function (data) {
            // debugger
            _this58.orders = data.data.orders;

            _this58.dtTrigger.next();
          }, function (err) {
            // this.showLoadingBar = false;
            var message = 'There is an issue with service. Please retry.';

            if (err.status === 400) {
              message = 'There is an error in getting list of sold to. Please retry.';
            }
          });
        }
      }, {
        key: "getOrderDetailsByID",
        value: function getOrderDetailsByID(item) {
          var _this59 = this;

          // debugger
          this.id = item.order_id;
          this.service.getOrderDetailsByID(this.id).subscribe(function (data) {
            // debugger
            _this59.orders = data.data.order_products_details;
          }, function (err) {
            // this.showLoadingBar = false;
            var message = 'There is an issue with service. Please retry.';

            if (err.status === 400) {
              message = 'There is an error in getting list of sold to. Please retry.';
            }
          });
        }
      }, {
        key: "close",
        value: function close() {
          this.listUsers();
        }
      }]);

      return MyOrdersComponent;
    }();

    MyOrdersComponent.ɵfac = function MyOrdersComponent_Factory(t) {
      return new (t || MyOrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastrManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]));
    };

    MyOrdersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MyOrdersComponent,
      selectors: [["app-my-orders"]],
      viewQuery: function MyOrdersComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_1__["DataTableDirective"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dtElement = _t.first);
        }
      },
      decls: 58,
      vars: 4,
      consts: [[1, "content"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body", "container-fluid"], ["id", "example2_wrapper", 1, "dataTables_wrapper", "dt-bootstrap4"], [1, "col-sm-12", "col-md-6"], [1, "col-sm-12"], [1, "table-responsive"], ["id", "example2", "datatable", "", "role", "grid", "aria-describedby", "example2_info", 1, "table", "table-bordered", "table-striped", 3, "dtOptions", "dtTrigger"], [1, "thead", "bg"], [4, "ngFor", "ngForOf"], ["id", "view-details", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade", 2, "z-index", "9999"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "media"], [1, "media-body", 2, "display", "flex", "justify-content", "space-between"], [1, "mt-0"], ["class", "media", "style", "display: flex; justify-content: space-between;", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], [1, "account-td"], [4, "ngIf"], ["data-toggle", "modal", "data-target", "#view-details", 1, "btn", "btn-danger", "btn-sm", 2, "background-color", "#ED1C24", 3, "click"], [1, "media", 2, "display", "flex", "justify-content", "space-between"], ["alt", "Generic placeholder image", 1, "mr-3", 2, "height", "100px", "width", "100px", 3, "src"], [1, "order-details", "mt-0"], [1, "order-details1", "mt-0"]],
      template: function MyOrdersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-firstnav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "My Orders");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "table", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "thead", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Sr.No");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Order ID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Transaction ID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Total Amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Order Crated Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, MyOrdersComponent_tr_34_Template, 19, 7, "tr", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h5", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Order Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyOrdersComponent_Template_button_click_41_listener() {
            return ctx.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Product");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Quantity");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Price");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, MyOrdersComponent_div_53_Template, 7, 3, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "app-footer");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.orders);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.orders);
        }
      },
      directives: [_common_firstnav_firstnav_component__WEBPACK_IMPORTED_MODULE_7__["FirstnavComponent"], angular_datatables__WEBPACK_IMPORTED_MODULE_1__["DataTableDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]],
      styles: [".order-details[_ngcontent-%COMP%]{\n    display: flex; justify-content: center; align-items: center; width: 250px; height: 100px;\n}\n.order-details1[_ngcontent-%COMP%]{\n    display: flex; justify-content: center; align-items: center; width: 50px; height: 100px;\n}\n@media (max-width: 575.98px) {\n    .order-details[_ngcontent-%COMP%]{\n        width: 144px !important; \n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9teS1vcmRlcnMvbXktb3JkZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhLEVBQUUsdUJBQXVCLEVBQUUsbUJBQW1CLEVBQUUsWUFBWSxFQUFFLGFBQWE7QUFDNUY7QUFDQTtJQUNJLGFBQWEsRUFBRSx1QkFBdUIsRUFBRSxtQkFBbUIsRUFBRSxXQUFXLEVBQUUsYUFBYTtBQUMzRjtBQUNBO0lBQ0k7UUFDSSx1QkFBdUI7SUFDM0I7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbXktb3JkZXJzL215LW9yZGVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9yZGVyLWRldGFpbHN7XG4gICAgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IHdpZHRoOiAyNTBweDsgaGVpZ2h0OiAxMDBweDtcbn1cbi5vcmRlci1kZXRhaWxzMXtcbiAgICBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgd2lkdGg6IDUwcHg7IGhlaWdodDogMTAwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpIHtcbiAgICAub3JkZXItZGV0YWlsc3tcbiAgICAgICAgd2lkdGg6IDE0NHB4ICFpbXBvcnRhbnQ7IFxuICAgIH1cbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyOrdersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-my-orders',
          templateUrl: './my-orders.component.html',
          styleUrls: ['./my-orders.component.css']
        }]
      }], function () {
        return [{
          type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastrManager"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
        }];
      }, {
        dtElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [angular_datatables__WEBPACK_IMPORTED_MODULE_1__["DataTableDirective"]]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/news/news.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/news/news.component.ts ***!
    \***************************************************/

  /*! exports provided: NewsComponent */

  /***/
  function srcAppComponentsNewsNewsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsComponent", function () {
      return NewsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _common_firstnav_firstnav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../common/firstnav/firstnav.component */
    "./src/app/components/common/firstnav/firstnav.component.ts");
    /* harmony import */


    var _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../common/footer/footer.component */
    "./src/app/components/common/footer/footer.component.ts");

    var NewsComponent =
    /*#__PURE__*/
    function () {
      function NewsComponent() {
        _classCallCheck(this, NewsComponent);
      }

      _createClass(NewsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NewsComponent;
    }();

    NewsComponent.ɵfac = function NewsComponent_Factory(t) {
      return new (t || NewsComponent)();
    };

    NewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NewsComponent,
      selectors: [["app-news"]],
      decls: 5,
      vars: 0,
      consts: [[1, "blog_developnment"], [1, "blog_heading"]],
      template: function NewsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-firstnav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "The page is under design ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer");
        }
      },
      directives: [_common_firstnav_firstnav_component__WEBPACK_IMPORTED_MODULE_1__["FirstnavComponent"], _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmV3cy9uZXdzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-news',
          templateUrl: './news.component.html',
          styleUrls: ['./news.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/offers/offers.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/offers/offers.component.ts ***!
    \*******************************************************/

  /*! exports provided: OffersComponent */

  /***/
  function srcAppComponentsOffersOffersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OffersComponent", function () {
      return OffersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _common_firstnav_firstnav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../common/firstnav/firstnav.component */
    "./src/app/components/common/firstnav/firstnav.component.ts");
    /* harmony import */


    var _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../common/footer/footer.component */
    "./src/app/components/common/footer/footer.component.ts");

    var OffersComponent =
    /*#__PURE__*/
    function () {
      function OffersComponent() {
        _classCallCheck(this, OffersComponent);
      }

      _createClass(OffersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OffersComponent;
    }();

    OffersComponent.ɵfac = function OffersComponent_Factory(t) {
      return new (t || OffersComponent)();
    };

    OffersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OffersComponent,
      selectors: [["app-offers"]],
      decls: 5,
      vars: 0,
      consts: [[1, "blog_developnment"], [1, "blog_heading"]],
      template: function OffersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-firstnav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "The page is under design ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer");
        }
      },
      directives: [_common_firstnav_firstnav_component__WEBPACK_IMPORTED_MODULE_1__["FirstnavComponent"], _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb2ZmZXJzL29mZmVycy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OffersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-offers',
          templateUrl: './offers.component.html',
          styleUrls: ['./offers.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/privacy-policy/privacy-policy.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/privacy-policy/privacy-policy.component.ts ***!
    \***********************************************************************/

  /*! exports provided: PrivacyPolicyComponent */

  /***/
  function srcAppComponentsPrivacyPolicyPrivacyPolicyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrivacyPolicyComponent", function () {
      return PrivacyPolicyComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _common_firstnav_firstnav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../common/firstnav/firstnav.component */
    "./src/app/components/common/firstnav/firstnav.component.ts");
    /* harmony import */


    var _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../common/footer/footer.component */
    "./src/app/components/common/footer/footer.component.ts");

    var PrivacyPolicyComponent =
    /*#__PURE__*/
    function () {
      function PrivacyPolicyComponent() {
        _classCallCheck(this, PrivacyPolicyComponent);
      }

      _createClass(PrivacyPolicyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PrivacyPolicyComponent;
    }();

    PrivacyPolicyComponent.ɵfac = function PrivacyPolicyComponent_Factory(t) {
      return new (t || PrivacyPolicyComponent)();
    };

    PrivacyPolicyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PrivacyPolicyComponent,
      selectors: [["app-privacy-policy"]],
      decls: 5,
      vars: 0,
      consts: [[1, "blog_developnment"], [1, "blog_heading"]],
      template: function PrivacyPolicyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-firstnav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "The page is under design ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer");
        }
      },
      directives: [_common_firstnav_firstnav_component__WEBPACK_IMPORTED_MODULE_1__["FirstnavComponent"], _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJpdmFjeS1wb2xpY3kvcHJpdmFjeS1wb2xpY3kuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrivacyPolicyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-privacy-policy',
          templateUrl: './privacy-policy.component.html',
          styleUrls: ['./privacy-policy.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/productdetails/productdetails.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/productdetails/productdetails.component.ts ***!
    \***********************************************************************/

  /*! exports provided: ProductdetailsComponent */

  /***/
  function srcAppComponentsProductdetailsProductdetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductdetailsComponent", function () {
      return ProductdetailsComponent;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/models/user */
    "./src/app/models/user.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/service/data.service */
    "./src/app/service/data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/__ivy_ngcc__/fesm2015/ng6-toastr-notifications.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ng_otp_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ng-otp-input */
    "./node_modules/ng-otp-input/__ivy_ngcc__/fesm2015/ng-otp-input.js");
    /* harmony import */


    var _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../common/footer/footer.component */
    "./src/app/components/common/footer/footer.component.ts");
    /* harmony import */


    var ng_starrating__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ng-starrating */
    "./node_modules/ng-starrating/__ivy_ngcc__/fesm2015/ng-starrating.js");

    var _c0 = function _c0() {
      return ["/landing"];
    };

    function ProductdetailsComponent_div_0_a_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 102);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
      }
    }

    var _c1 = function _c1() {
      return ["/home"];
    };

    function ProductdetailsComponent_div_0_a_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 102);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c1));
      }
    }

    function ProductdetailsComponent_div_0_a_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 103);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 104);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r340 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r340.firstname, " ", ctx_r340.lastname, " ");
      }
    }

    function ProductdetailsComponent_div_0_a_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 103);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 105);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r341 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r341.profilepic, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r341.firstname, " ", ctx_r341.lastname, " ");
      }
    }

    function ProductdetailsComponent_div_0_p_41_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 106);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "0");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ProductdetailsComponent_div_0_p_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 106);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r343 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r343.cartcount);
      }
    }

    var _c2 = function _c2() {
      return {
        standalone: true
      };
    };

    var _c3 = function _c3() {
      return ["/profile"];
    };

    var _c4 = function _c4() {
      return ["/my-orders"];
    };

    var _c5 = function _c5() {
      return ["/wishlist"];
    };

    var _c6 = function _c6() {
      return ["/cart"];
    };

    function ProductdetailsComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r345 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nav", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ProductdetailsComponent_div_0_a_3_Template, 2, 2, "a", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ProductdetailsComponent_div_0_a_4_Template, 2, 2, "a", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "h5", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Jayabhery Enclave");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Gachibowli,hyderabad,500034");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "li", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "form", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "input", 89, 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProductdetailsComponent_div_0_Template_input_ngModelChange_21_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r345);

          var ctx_r344 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r344.textValue = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductdetailsComponent_div_0_Template_button_click_23_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r345);

          var _r339 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](22);

          var ctx_r346 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r346.logText(_r339.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "i", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "li", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, ProductdetailsComponent_div_0_a_26_Template, 3, 2, "a", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, ProductdetailsComponent_div_0_a_27_Template, 3, 3, "a", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "My Account");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "a", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "My Orders");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "a", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "My Wishlist");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "a", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductdetailsComponent_div_0_Template_a_click_35_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r345);

          var ctx_r347 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r347.logout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Logout");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "li", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "li", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "button", 98);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "i", 99);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, ProductdetailsComponent_div_0_p_41_Template, 2, 0, "p", 100);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, ProductdetailsComponent_div_0_p_42_Template, 2, 1, "p", 100);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r325 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r325.isLogin);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r325.isLogin);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r325.textValue)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](13, _c2));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r325.profilepic == "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r325.profilepic != "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](14, _c3));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](15, _c4));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](16, _c5));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](17, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](18, _c6));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r325.cartcount === null || ctx_r325.cartcount === "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r325.cartcount != "");
      }
    }

    function ProductdetailsComponent_div_1_a_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 102);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
      }
    }

    function ProductdetailsComponent_div_1_a_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 102);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c1));
      }
    }

    function ProductdetailsComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r352 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nav", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ProductdetailsComponent_div_1_a_3_Template, 2, 2, "a", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ProductdetailsComponent_div_1_a_4_Template, 2, 2, "a", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 107);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 108);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "form", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 89, 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProductdetailsComponent_div_1_Template_input_ngModelChange_12_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r352);

          var ctx_r351 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r351.textValue = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductdetailsComponent_div_1_Template_button_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r352);

          var _r350 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13);

          var ctx_r353 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r353.logText(_r350.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 111);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "h5", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Jayabhery Enclave");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Gachibowli,hyderabad,500034");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "i", 112);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 113);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "a", 114);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductdetailsComponent_div_1_Template_a_click_27_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r352);

          var ctx_r354 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r354.clicked($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Login ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span", 115);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "|");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 113);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "a", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductdetailsComponent_div_1_Template_a_click_32_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r352);

          var ctx_r355 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r355.clicked($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " SignUp ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r326 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r326.isLogin);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r326.isLogin);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r326.textValue)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c2));
      }
    }

    function ProductdetailsComponent_li_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Home ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "(current)");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
      }
    }

    function ProductdetailsComponent_li_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Home ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "(current)");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c1));
      }
    }

    function ProductdetailsComponent_li_17_a_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r362 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 118);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductdetailsComponent_li_17_a_1_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r362);

          var item_r356 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r360 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r360.goToProductDetails(item_r356);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r356 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, item_r356 == null ? null : item_r356.ns_category_name));
      }
    }

    function ProductdetailsComponent_li_17_a_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r366 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 118);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductdetailsComponent_li_17_a_2_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r366);

          var item_r356 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r364 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r364.goToProductDetails(item_r356);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "All");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ProductdetailsComponent_li_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProductdetailsComponent_li_17_a_1_Template, 3, 3, "a", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ProductdetailsComponent_li_17_a_2_Template, 2, 0, "a", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r356 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (item_r356 == null ? null : item_r356.ns_category_name) !== "main menu categories");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (item_r356 == null ? null : item_r356.ns_category_name) === "main menu categories");
      }
    }

    function ProductdetailsComponent_div_34_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r377 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 148);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 127);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 149);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductdetailsComponent_div_34_div_6_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r377);

          var item_r367 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r375 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r375.addToCart(item_r367);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "ADD TO CART");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 127);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 150);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "BUY NOW");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c6));
      }
    }

    function ProductdetailsComponent_div_34_div_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r379 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 148);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 127);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 151);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductdetailsComponent_div_34_div_7_Template_button_click_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r379);

          var ctx_r378 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r378.clicked($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Add to cart");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 127);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 152);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductdetailsComponent_div_34_div_7_Template_button_click_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r379);

          var ctx_r380 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r380.clicked($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Buy now");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ProductdetailsComponent_div_34_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 153);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 154);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ProductdetailsComponent_div_34_div_9_a_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r385 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 156);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductdetailsComponent_div_34_div_9_a_1_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r385);

          var item_r367 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          var ctx_r383 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r383.favorite(item_r367);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 154);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ProductdetailsComponent_div_34_div_9_a_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r388 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 156);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductdetailsComponent_div_34_div_9_a_2_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r388);

          var item_r367 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          var ctx_r386 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r386.favorite(item_r367);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 157);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ProductdetailsComponent_div_34_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProductdetailsComponent_div_34_div_9_a_1_Template, 2, 0, "a", 155);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ProductdetailsComponent_div_34_div_9_a_2_Template, 2, 0, "a", 155);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r367 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (item_r367 == null ? null : item_r367.is_favourite) == "0");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (item_r367 == null ? null : item_r367.is_favourite) == "1");
      }
    }

    function ProductdetailsComponent_div_34_li_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "star-rating", 158);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r367 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        var ctx_r373 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", item_r367 == null ? null : item_r367.rating);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("totalstars", ctx_r373.totalstar);
      }
    }

    function ProductdetailsComponent_div_34_li_22_Template(rf, ctx) {
      if (rf & 1) {
        var _r392 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "star-rating", 159);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("rate", function ProductdetailsComponent_div_34_li_22_Template_star_rating_rate_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r392);

          var item_r367 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r391 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r391.onRate($event, item_r367);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r367 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        var ctx_r374 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", item_r367 == null ? null : item_r367.rating);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("totalstars", ctx_r374.totalstar);
      }
    }

    function ProductdetailsComponent_div_34_Template(rf, ctx) {
      if (rf & 1) {
        var _r396 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 119);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 120);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 121);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 122);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 123);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 124);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ProductdetailsComponent_div_34_div_6_Template, 7, 2, "div", 125);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ProductdetailsComponent_div_34_div_7_Template, 7, 0, "div", 125);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ProductdetailsComponent_div_34_div_8_Template, 3, 0, "div", 126);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ProductdetailsComponent_div_34_div_9_Template, 3, 2, "div", 126);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 127);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 128);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h3", 129);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 130);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Product MRP: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 131);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 132);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "50% OFF");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ul", 133);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, ProductdetailsComponent_div_34_li_21_Template, 2, 2, "li", 126);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ProductdetailsComponent_div_34_li_22_Template, 2, 2, "li", 126);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li", 134);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span", 135);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ul", 136);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "p", 137);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Delivery");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "p", 138);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Free");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "ul", 139);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "li", 140);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "button", 141);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductdetailsComponent_div_34_Template_button_click_35_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r396);

          var ctx_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r395.decrementQty();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "i", 142);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span", 143);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "button", 144);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductdetailsComponent_div_34_Template_button_click_39_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r396);

          var ctx_r397 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r397.incrementQty();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "i", 145);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "h3", 146);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Product Details");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "p", 147);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r367 = ctx.$implicit;

        var ctx_r330 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", item_r367 == null ? null : item_r367.images[0] == null ? null : item_r367.images[0].product_image_name, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r330.isLogin);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r330.isLogin);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r330.isLogin);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r330.isLogin);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r367 == null ? null : item_r367.product_title);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r367 == null ? null : item_r367.product_price);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r330.isLogin);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r330.isLogin);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("(", item_r367 == null ? null : item_r367.rating, " ratings)");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r330.quantity);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r367 == null ? null : item_r367.product_description);
      }
    }

    function ProductdetailsComponent_div_38_div_1_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 153);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 154);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ProductdetailsComponent_div_38_div_1_div_17_a_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r407 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 156);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductdetailsComponent_div_38_div_1_div_17_a_1_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r407);

          var item_r399 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          var ctx_r405 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r405.favorite(item_r399);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 154);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ProductdetailsComponent_div_38_div_1_div_17_a_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r410 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 156);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductdetailsComponent_div_38_div_1_div_17_a_2_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r410);

          var item_r399 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          var ctx_r408 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r408.favorite(item_r399);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 157);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ProductdetailsComponent_div_38_div_1_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProductdetailsComponent_div_38_div_1_div_17_a_1_Template, 2, 0, "a", 155);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ProductdetailsComponent_div_38_div_1_div_17_a_2_Template, 2, 0, "a", 155);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r399 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (item_r399 == null ? null : item_r399.is_favourite) == "0");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (item_r399 == null ? null : item_r399.is_favourite) == "1");
      }
    }

    function ProductdetailsComponent_div_38_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r413 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 161);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 162);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductdetailsComponent_div_38_div_1_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r413);

          var item_r399 = ctx.$implicit;

          var ctx_r412 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r412.getProductsbyId1(item_r399);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 163);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 164);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 165);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5", 166);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 167);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Price per kg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 168);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 131);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 169);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 170);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Add to cart");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ProductdetailsComponent_div_38_div_1_div_16_Template, 3, 0, "div", 126);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ProductdetailsComponent_div_38_div_1_div_17_Template, 3, 2, "div", 126);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r399 = ctx.$implicit;

        var ctx_r398 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", item_r399 == null ? null : item_r399.prouduct_image_url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r399 == null ? null : item_r399.product_title);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("INR ", item_r399 == null ? null : item_r399.product_price, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r398.isLogin);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r398.isLogin);
      }
    }

    function ProductdetailsComponent_div_38_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 119);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProductdetailsComponent_div_38_div_1_Template, 18, 5, "div", 160);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r331 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r331.recommended);
      }
    }

    function ProductdetailsComponent_div_39_div_1_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 153);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 154);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ProductdetailsComponent_div_39_div_1_div_17_a_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r423 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 156);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductdetailsComponent_div_39_div_1_div_17_a_1_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r423);

          var item_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          var ctx_r421 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r421.favorite(item_r415);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 154);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ProductdetailsComponent_div_39_div_1_div_17_a_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r426 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 156);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductdetailsComponent_div_39_div_1_div_17_a_2_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r426);

          var item_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          var ctx_r424 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r424.favorite(item_r415);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 157);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ProductdetailsComponent_div_39_div_1_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProductdetailsComponent_div_39_div_1_div_17_a_1_Template, 2, 0, "a", 155);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ProductdetailsComponent_div_39_div_1_div_17_a_2_Template, 2, 0, "a", 155);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (item_r415 == null ? null : item_r415.is_favourite) == "0");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (item_r415 == null ? null : item_r415.is_favourite) == "1");
      }
    }

    function ProductdetailsComponent_div_39_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r429 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 161);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 162);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductdetailsComponent_div_39_div_1_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r429);

          var item_r415 = ctx.$implicit;

          var ctx_r428 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r428.getProductsbyId1(item_r415);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 163);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 164);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 165);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5", 166);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 167);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Price per kg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 168);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 131);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 169);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 170);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Add to cart");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ProductdetailsComponent_div_39_div_1_div_16_Template, 3, 0, "div", 126);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ProductdetailsComponent_div_39_div_1_div_17_Template, 3, 2, "div", 126);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r415 = ctx.$implicit;

        var ctx_r414 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", item_r415 == null ? null : item_r415.prouduct_image_url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r415 == null ? null : item_r415.product_title);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("INR ", item_r415 == null ? null : item_r415.product_price, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r414.isLogin);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r414.isLogin);
      }
    }

    function ProductdetailsComponent_div_39_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 119);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProductdetailsComponent_div_39_div_1_Template, 18, 5, "div", 160);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r332 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r332.recommended1);
      }
    }

    function ProductdetailsComponent_div_69_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 173);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " phone number is required* ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ProductdetailsComponent_div_69_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 171);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProductdetailsComponent_div_69_div_1_Template, 2, 0, "div", 172);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r333 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r333.loginForm.get("mobile_number_login").errors.required);
      }
    }

    function ProductdetailsComponent_div_93_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 173);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " phone number is required* ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ProductdetailsComponent_div_93_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 171);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProductdetailsComponent_div_93_div_1_Template, 2, 0, "div", 172);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r334 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r334.signupForm.get("mobile_number_login").errors.required);
      }
    }

    var _c7 = function _c7() {
      return ["/aboutus"];
    };

    var _c8 = function _c8() {
      return ["/blog"];
    };

    var _c9 = function _c9() {
      return ["/news"];
    };

    var _c10 = function _c10() {
      return ["/offers"];
    };

    var _c11 = function _c11(a0) {
      return {
        active: a0
      };
    };

    var _c12 = function _c12(a0, a1) {
      return {
        active: a0,
        show: a1
      };
    };

    var ProductdetailsComponent =
    /*#__PURE__*/
    function () {
      function ProductdetailsComponent(service, router, toastr, http) {
        _classCallCheck(this, ProductdetailsComponent);

        this.service = service;
        this.router = router;
        this.toastr = toastr;
        this.http = http;
        this.vegitables = [];
        this.addObj = new src_app_models_user__WEBPACK_IMPORTED_MODULE_3__["addcart"]();
        this.loginObj = new src_app_models_user__WEBPACK_IMPORTED_MODULE_3__["loginM"]();
        this.signupObj = new src_app_models_user__WEBPACK_IMPORTED_MODULE_3__["signupM"]();
        this.verifySignupObj = new src_app_models_user__WEBPACK_IMPORTED_MODULE_3__["signupOtp"]();
        this.verifyLoginObj = new src_app_models_user__WEBPACK_IMPORTED_MODULE_3__["loginOtp"]();
        this.isVisible = true; // log: any;

        this.textValue = '';
        this.stars = [1, 2, 3, 4, 5];
        this.selectedValue = 0; // onClickResult: OnClickEvent;

        this.totalstar = 5;
        this.rateObj = new src_app_models_user__WEBPACK_IMPORTED_MODULE_3__["rating"]();
        this.favObj = new src_app_models_user__WEBPACK_IMPORTED_MODULE_3__["favourite"]();
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl;
        this.config = {
          allowNumbersOnly: true,
          length: 6,
          isPasswordInput: false,
          disableAutoFocus: false,
          placeholder: '',
          inputStyles: {
            'width': '50px',
            'height': '50px'
          }
        };
      }

      _createClass(ProductdetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var element = document.querySelector('#scrollId');
          window.scrollTo(0, 0);
          this.isLogin = localStorage.getItem('Authorization');

          if (this.isLogin !== null) {
            this.getUserProfile();
            this.getCartDetails();
          }

          this.getCategories();
          this.getProductsbyId();
          this.getRecommended();
          this.getRecommended1();
          this.loadScripts();
          this.quantity = 1;
          this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            // name: new FormControl(''),
            // email: new FormControl(''),
            // password: new FormControl(''),
            mobile_number_login: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[0-9_-]{10,12}"), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)])
          });
          this.signupOtpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            // otp: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(6), Validators.maxLength(6)])
            otp: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
          });
          this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            mobile_number_login: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[0-9_-]{10,12}"), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)])
          });
          this.loginOtpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            // otp_login: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(6), Validators.maxLength(6)])
            otp_login: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
          });
        }
      }, {
        key: "loadScripts",
        value: function loadScripts() {
          // debugger
          var dynamicScripts = ['../../assets/js/owl.carousel.min.js', '../../assets/js/owl-content.js'];

          for (var i = 0; i < dynamicScripts.length; i++) {
            var node = document.createElement('script');
            node.src = dynamicScripts[i];
            node.type = 'text/javascript';
            node.async = false;
            node.charset = 'utf-8';
            document.getElementsByTagName('head')[0].appendChild(node);
          }
        }
      }, {
        key: "getProductsbyId",
        value: function getProductsbyId() {
          var _this60 = this;

          // debugger
          this.slug = localStorage.getItem('productslug');
          this.service.getProductsbyId(this.slug).subscribe(function (data) {
            // debugger
            _this60.vegitables = [data.data.products];
            _this60.image = [data.data.products.images[0].product_image_name]; // this.router.navigate(['/products']);
          }, function (err) {
            var message = 'There is an issue with service. Please retry.';

            if (err.status === 400) {
              message = 'There is an error in getting list of sold to. Please retry.';
            }
          });
        }
      }, {
        key: "addToCart",
        value: function addToCart(item) {
          var _this61 = this;

          // debugger
          this.addObj.product_id = item.product_id;
          this.addObj.user_id = localStorage.getItem('userId');
          this.addObj.quantity = this.quantity;
          var fData = new FormData();
          fData.append("product_id", this.addObj.product_id);
          fData.append("user_id", this.addObj.user_id);
          fData.append("quantity", this.addObj.quantity);
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            "x-api-key": "12345"
          });
          var profile = "addcart";
          this.http.post(this.baseUrl + profile, fData, {
            headers: headers
          }).subscribe(function (data) {
            // debugger
            if (data.status === false) {
              _this61.toastr.errorToastr(data.data.error); // location.reload()

            } else {
              _this61.toastr.successToastr(data.message, 'Success!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });

              _this61.addObj = new src_app_models_user__WEBPACK_IMPORTED_MODULE_3__["addcart"]();

              _this61.getCartDetails(); // setTimeout(function () {
              //   window.location.reload();
              // }, 1000);
              // location.reload();

            }
          }, function (err) {
            //debugger
            if (err && err.error && err.error) {
              var errorMesg = err.error.message;

              _this61.toastr.errorToastr(errorMesg, 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });
            } else {
              _this61.toastr.errorToastr('Something went wrong', 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });
            }
          });
        } // increment product qty

      }, {
        key: "incrementQty",
        value: function incrementQty() {
          console.log(this.quantity + 1);
          this.quantity += 1;
        } // decrement product qty

      }, {
        key: "decrementQty",
        value: function decrementQty() {
          if (this.quantity - 1 < 1) {
            this.quantity = 1;
            console.log('1->' + this.quantity);
          } else {
            this.quantity -= 1;
            console.log('2->' + this.quantity);
          }
        }
      }, {
        key: "getCategories",
        value: function getCategories() {
          var _this62 = this;

          this.service.getcategories().subscribe(function (data) {
            // //debugger
            _this62.categorieslist = data.data.categories;
          });
        }
      }, {
        key: "onRate",
        value: function onRate($event, item) {
          // debugger
          this.selectedValue = $event.oldValue;
          this.userRating = $event.newValue;
          this.addRating(item);
        }
      }, {
        key: "addRating",
        value: function addRating(item) {
          var _this63 = this;

          // debugger
          this.rateObj.product_id = item.product_id;
          this.rateObj.user_id = localStorage.getItem('userId'); // this.rating = $("#rating").val();
          // this.rateObj.rating = this.selectedValue;

          this.rateObj.rating = this.userRating;
          var fData = new FormData();
          fData.append("product_id", this.rateObj.product_id);
          fData.append("user_id", this.rateObj.user_id);
          fData.append("rating", this.rateObj.rating);
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            "x-api-key": "12345"
          });
          var profile = "addrating";
          this.http.post(this.baseUrl + profile, fData, {
            headers: headers
          }).subscribe(function (data) {
            // debugger
            if (data.status === false) {
              _this63.toastr.errorToastr(data.data.error); // location.reload()

            } else {
              _this63.toastr.successToastr(data.message, 'Success!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });

              _this63.rateObj = new src_app_models_user__WEBPACK_IMPORTED_MODULE_3__["rating"]();

              _this63.getProductsbyId(); // setTimeout(function () {
              //   window.location.reload();
              // }, 1000);
              // location.reload();

            }
          }, function (err) {
            //debugger
            if (err && err.error && err.error) {
              var errorMesg = err.error.message;

              _this63.toastr.errorToastr(errorMesg, 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });
            } else {
              _this63.toastr.errorToastr('Something went wrong', 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });
            }
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          // this.data.logout();
          localStorage.clear(); // location.reload()

          this.router.navigate(['/landing']);
          this.toastr.successToastr('Logout successfully', 'Success!', {
            position: 'bottom-center',
            toastTimeout: 1000
          });
          this.getCategories();
          this.getUserProfile();
          this.getCartDetails();
        }
      }, {
        key: "goToProductDetails",
        value: function goToProductDetails(item) {
          var _this64 = this;

          // debugger
          this.slug = item.ns_category_slug; // this.slug = "vegetables";

          this.service.getProducts(this.slug).subscribe(function (data) {
            // debugger
            _this64.products = data.data.products; // localStorage.setItem('productname', data.data.products[0].ns_category_slug);

            localStorage.setItem('productname', _this64.slug);

            if (_this64.slug === 'apple-and-pears') {
              _this64.router.navigate(['/apple-and-pears']);
            }

            if (_this64.slug === 'main-menu-categories') {
              _this64.router.navigate(['/all']);
            }

            if (_this64.slug === 'avacado-stone-fruits') {
              _this64.router.navigate(['/avacado-stone-fruits']);
            }

            if (_this64.slug === 'berries') {
              _this64.router.navigate(['/berries']);
            }

            if (_this64.slug === 'citrus') {
              _this64.router.navigate(['/citrus']);
            } // this.router.navigate(['/products']);
            // location.reload();
            // this.getProducts();

          }, function (err) {
            var message = 'There is an issue with service. Please retry.';

            if (err.status === 400) {
              message = 'There is an error in getting list of sold to. Please retry.';
            }
          });
        }
      }, {
        key: "onOtpChange",
        value: function onOtpChange(otp) {
          this.otp = otp;
        }
      }, {
        key: "signup",
        value: function signup() {
          var _this65 = this;

          // //debugger
          this.signupObj.mobile_number_login = this.signupForm.value.mobile_number_login;
          var fData = new FormData();
          fData.append("mobile_number_login", this.signupObj.mobile_number_login);
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            "x-api-key": "12345"
          });
          var sendsignupotp = "sendOtp";
          this.http.post(this.baseUrl + sendsignupotp, fData, {
            headers: headers
          }).subscribe(function (data) {
            if (data != null) {
              _this65.signupObj = new src_app_models_user__WEBPACK_IMPORTED_MODULE_3__["signupM"](); // localStorage.setItem("id", data.id);

              localStorage.setItem("mobilenumber", data.mobile);
              localStorage.setItem("sessionotp", data.OTP);
              _this65.mobile = localStorage.getItem('mobilenumber'); // this.toastr.successToastr(data.message);

              _this65.signupForm.reset();

              $('#myModal2').modal('hide');
              $('#otppage').modal('show');
            } else {
              _this65.signupForm.reset();
            }
          }, function (err) {
            // console.log();
            if (err && err.error && err.error.errors) {
              var errorMesg = err.error.error;

              _this65.toastr.errorToastr(errorMesg, 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });

              _this65.signupForm.reset();
            } else {
              _this65.toastr.errorToastr('Something went wrong', 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });
            }
          });
        }
      }, {
        key: "verifySignupOtp",
        value: function verifySignupOtp() {
          var _this66 = this;

          //debugger
          this.verifySignupObj.mobile_number_register = localStorage.getItem('mobilenumber');
          this.verifySignupObj.session_otp = localStorage.getItem('sessionotp');
          this.verifySignupObj.otp = this.otp;
          var fData = new FormData();
          fData.append("mobile_number_register", this.verifySignupObj.mobile_number_register);
          fData.append("session_otp", this.verifySignupObj.session_otp);
          fData.append("otp", this.verifySignupObj.otp);
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            "x-api-key": "12345"
          });
          var verifysignupotp = "register";
          this.http.post(this.baseUrl + verifysignupotp, fData, {
            headers: headers
          }).subscribe(function (data) {
            // debugger
            if (data.type == "error") {
              _this66.toastr.errorToastr('This number is already registered. Do you want to login…?', 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              }); // alert(data.message)


              _this66.signupOtpForm.reset(); // location.reload()

            } else {
              _this66.toastr.successToastr('You have registered successfuly. Please login', 'Success!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });

              _this66.verifySignupObj = new src_app_models_user__WEBPACK_IMPORTED_MODULE_3__["signupOtp"]();

              _this66.signupOtpForm.reset();

              $('#otppage').modal('hide'); // localStorage.setItem("Authorization", data);
              // localStorage.setItem("userId", data.user._id);
              // this.router.navigate(['/landing']);
              // location.reload()
            }
          }, function (err) {
            //debugger
            if (err && err.error && err.error) {
              var errorMesg = err.error.message;

              _this66.toastr.errorToastr(errorMesg, 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });

              _this66.signupOtpForm.reset();
            } else {
              _this66.toastr.errorToastr('Something went wrong', 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });
            }
          });
        }
      }, {
        key: "login",
        value: function login() {
          var _this67 = this;

          // //debugger
          this.loginObj.mobile_number_login = this.loginForm.value.mobile_number_login;
          var fData = new FormData();
          fData.append("mobile_number_login", this.loginObj.mobile_number_login);
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            "x-api-key": "12345"
          });
          var sendotp = "sendOtp";
          this.http.post(this.baseUrl + sendotp, fData, {
            headers: headers
          }).subscribe(function (data) {
            // //debugger
            if (data != "") {
              _this67.toastr.successToastr('OTP Sent Successfully To Registered Mobile Number', 'Success!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });

              _this67.loginObj = new src_app_models_user__WEBPACK_IMPORTED_MODULE_3__["loginM"]();
              localStorage.setItem("mobilenumber", data.mobile);
              localStorage.setItem("sessionotp", data.OTP);
              _this67.mobile = localStorage.getItem('mobilenumber');

              _this67.loginForm.reset();

              $('#loginotppage').modal('show');
            } else {
              _this67.loginForm.reset();
            }
          }, function (err) {
            //debugger
            var errorMesg = err.error.error;

            if (errorMesg == undefined) {
              _this67.toastr.errorToastr('Something went wrong', 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });
            } else {
              _this67.toastr.errorToastr(errorMesg, 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });
            }
          });
        }
      }, {
        key: "verifyLoginOtp",
        value: function verifyLoginOtp() {
          var _this68 = this;

          // //debugger
          this.verifyLoginObj.mobile_number_login = localStorage.getItem('mobilenumber');
          this.verifyLoginObj.session_otp_login = localStorage.getItem('sessionotp');
          this.verifyLoginObj.otp_login = this.otp;
          var fData = new FormData();
          fData.append("mobile_number_login", this.verifyLoginObj.mobile_number_login);
          fData.append("session_otp_login", this.verifyLoginObj.session_otp_login);
          fData.append("otp_login", this.verifyLoginObj.otp_login);
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            "x-api-key": "12345"
          });
          var verifyloginotp = "login_otp";
          this.http.post(this.baseUrl + verifyloginotp, fData, {
            headers: headers
          }).subscribe(function (data) {
            // debugger
            if (data.user_id != null) {
              _this68.toastr.successToastr('Signin Successfully', 'Success!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });

              _this68.verifyLoginObj = new src_app_models_user__WEBPACK_IMPORTED_MODULE_3__["loginOtp"]();

              _this68.loginOtpForm.reset();

              $('#loginotppage').modal('hide');
              localStorage.setItem("Authorization", data);
              localStorage.setItem("userId", data.user_id);
              setTimeout(function () {
                window.location.reload();
              }, 500);

              _this68.router.navigate(['/productdetails']); // location.reload()


              _this68.getUserProfile();

              _this68.getCartDetails();

              _this68.getCategories();

              _this68.getProductsbyId();
            } else {
              // this.toastr.errorToastr(data.errors.message);
              _this68.loginOtpForm.reset(); // location.reload()

            }
          }, function (err) {
            //debugger
            var errorMesg = err.error.error;

            if (errorMesg == undefined) {
              _this68.toastr.errorToastr('Something went wrong', 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });
            } else {
              _this68.toastr.errorToastr(errorMesg, 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });
            }
          });
        }
      }, {
        key: "resend",
        value: function resend() {
          var _this69 = this;

          // //debugger
          this.loginObj.mobile_number_login = localStorage.getItem('mobilenumber');
          var fData = new FormData();
          fData.append("mobile_number_login", this.loginObj.mobile_number_login);
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            "x-api-key": "12345"
          });
          var sendotp = "sendOtp";
          this.http.post(this.baseUrl + sendotp, fData, {
            headers: headers
          }).subscribe(function (data) {
            // //debugger
            if (data != "") {
              _this69.toastr.successToastr('OTP Sent Successfully To Registered Mobile Number', 'Success!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });

              _this69.loginObj = new src_app_models_user__WEBPACK_IMPORTED_MODULE_3__["loginM"]();
              localStorage.setItem("mobilenumber", data.mobile);
              localStorage.setItem("sessionotp", data.OTP);
              _this69.mobile = localStorage.getItem('mobilenumber');

              _this69.loginForm.reset(); // $('#myModal2').modal('hide');


              $('#loginotppage').modal('show');
            } else {
              _this69.loginForm.reset();
            }
          }, function (err) {
            //debugger
            var errorMesg = err.error.error;

            if (errorMesg == undefined) {
              _this69.toastr.errorToastr('Something went wrong', 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });
            } else {
              _this69.toastr.errorToastr(errorMesg, 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });
            }
          });
        }
      }, {
        key: "getUserProfile",
        value: function getUserProfile() {
          var _this70 = this;

          // debugger
          this.id = localStorage.getItem('userId');
          this.service.getUserProfile(this.id).subscribe(function (data) {
            // //debugger
            _this70.profile = [data.data.users];
            _this70.firstname = data.data.users.first_name;
            _this70.lastname = data.data.users.last_name;
            _this70.profilepic = data.data.users.photo; // localStorage.setItem('firstname', data.data.users.first_name);
            // localStorage.setItem('lastname', data.data.users.last_name);
            // this.profileObj = Object.assign({}, this.profile.users);
          });
        }
      }, {
        key: "getCartDetails",
        value: function getCartDetails() {
          var _this71 = this;

          // debugger
          this.id = localStorage.getItem('userId');
          this.service.getCartDetails(this.id).subscribe(function (data) {
            // debugger
            _this71.products = data.data.cart_products;
            _this71.cartcount = data.data.count; // this.cartcount= this.products.length;
            // this.image = data.data.cart_products[0].images[0].product_image_name;
          });
        }
      }, {
        key: "onSelect",
        value: function onSelect(item) {
          // debugger
          this.isVisible = false;
          this.clickedUser = item;
        }
      }, {
        key: "getNumber",
        value: function getNumber(value) {
          // debugger
          //  this.isVisible = false;
          this.quantity = value;
        }
      }, {
        key: "getRecommended",
        value: function getRecommended() {
          var _this72 = this;

          this.service.getRecommended().subscribe(function (data) {
            // debugger
            _this72.recommended = data.data.recommendedProducts;
          });
        }
      }, {
        key: "getRecommended1",
        value: function getRecommended1() {
          var _this73 = this;

          this.id = localStorage.getItem('userId');
          this.service.getRecommended1(this.id).subscribe(function (data) {
            // debugger
            _this73.recommended1 = data.data.recommendedProducts;
          });
        }
      }, {
        key: "getProductsbyId1",
        value: function getProductsbyId1(item) {
          var _this74 = this;

          // debugger
          this.slug = item.product_slug; // this.slug = "vegetables";

          this.service.getProductsbyId(this.slug).subscribe(function (data) {
            // debugger
            _this74.vegitables = data.data.products;
            _this74.name = data.data.products.product_slug;
            _this74.productslug = localStorage.setItem('productslug', data.data.products.product_slug); // this.router.navigate(['/productdetails']);
            // location.reload()

            var element = document.querySelector('#scrollId');
            window.scrollTo(0, 0);
            _this74.quantity = 1;

            _this74.getProductsbyId();
          }, function (err) {
            var message = 'There is an issue with service. Please retry.';

            if (err.status === 400) {
              message = 'There is an error in getting list of sold to. Please retry.';
            }
          });
        }
      }, {
        key: "clicked",
        value: function clicked(event) {
          // console.log(event.target.name)
          if (event.target.name == "login") {
            this.login_option = true;
            this.signup_option = false;
            this.login_show = true;
            this.signup_show = false;
          } else if (event.target.name == 'signup') {
            this.login_option = false;
            this.signup_option = true;
            this.login_show = false;
            this.signup_show = true;
          }
        }
      }, {
        key: "logText",
        value: function logText(value) {
          // debugger
          this.log = value;
          localStorage.setItem('search', this.log); // this.router.navigate(['/search', this.log]);

          this.router.navigate(['/products'], {
            queryParams: {
              search: this.log
            }
          });
          setTimeout(function () {
            window.location.reload();
          }, 500); // this.getSearchProducts();
        }
      }, {
        key: "favorite",
        value: function favorite(item) {
          // debugger
          if (item.is_favourite === "0") {
            this.favObj.favourite = true;
          }

          if (item.is_favourite === "1") {
            this.favObj.favourite = false;
          } // this.favObj.favourite = true;


          this.addToFavourites(item);
        } // console.log(this.quantity+1);

      }, {
        key: "addToFavourites",
        value: function addToFavourites(item) {
          var _this75 = this;

          // debugger
          this.favObj.product_id = item.product_id;
          this.favObj.user_id = localStorage.getItem('userId'); // this.favObj.favourite = true;

          var fData = new FormData();
          fData.append("product_id", this.favObj.product_id);
          fData.append("user_id", this.favObj.user_id);
          fData.append("favourite", JSON.stringify(this.favObj.favourite));
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            "x-api-key": "12345"
          });
          var profile = "addtofavourites";
          this.http.post(this.baseUrl + profile, fData, {
            headers: headers
          }).subscribe(function (data) {
            // debugger
            if (data.status === false) {
              _this75.toastr.errorToastr(data.data.error, 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              }); // location.reload()

            } else {
              _this75.toastr.successToastr(data.message, 'Success!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });

              _this75.favObj = new src_app_models_user__WEBPACK_IMPORTED_MODULE_3__["favourite"]();

              _this75.getRecommended1(); // location.reload();

            }
          }, function (err) {
            //debugger
            if (err && err.error && err.error) {
              var errorMesg = err.error.message;

              _this75.toastr.errorToastr(errorMesg, 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });
            } else {
              _this75.toastr.errorToastr('Something went wrong', 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });
            }
          });
        }
      }]);

      return ProductdetailsComponent;
    }();

    ProductdetailsComponent.ɵfac = function ProductdetailsComponent_Factory(t) {
      return new (t || ProductdetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__["ToastrManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
    };

    ProductdetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ProductdetailsComponent,
      selectors: [["app-productdetails"]],
      decls: 151,
      vars: 64,
      consts: [["class", "fruits-content", 4, "ngIf"], [1, "second-nav"], [1, "container"], [1, "navbar", "navbar-expand-lg", "navbar-light", "p-0"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "second-data"], ["class", "nav-item active", 4, "ngIf"], [1, "nav-item", "active"], ["routerLinkActive", "router-link-active", 1, "nav-link", "second-options", 3, "routerLink"], [1, "nav-item", "dropdown"], ["id", "navbarDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "second-options", "dropdown-toggle"], ["id", "navbarDropdownList"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu"], [4, "ngFor", "ngForOf"], [1, "sr-only"], [1, "nav-item", "offers-all"], ["id", "navbarDropdown", "role", "button", 1, "nav-link", "offers-content", 3, "routerLink"], ["src", "../../../assets/images/price-tag.png", "alt", "", 1, "price-tag"], ["id", "scrollId", 1, "product-details"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "best-seller"], [1, "best-sellertitle"], ["class", "row", 4, "ngIf"], ["id", "myModal2", "tabindex", "-1", "role", "dialog", "aria-labelledby", "myModalLabel2", 1, "modal", "fade", 2, "z-index", "9999"], ["role", "document", 1, "modal-dialog", "modal-dialog-custom"], [1, "modal-content", "modal-content-custom"], [1, "modal-header", "btn-sec"], ["id", "pills-tab", "role", "tablist", 1, "nav", "nav-pills"], [1, "nav-item"], ["id", "pills-home-tab", "data-toggle", "pill", "href", "#pills-home", "role", "tab", "aria-controls", "pills-home", "aria-selected", "true", 1, "nav-link", "nav-link", "btn-s", 3, "ngClass"], ["id", "pills-profile-tab", "data-toggle", "pill", "href", "#pills-profile", "role", "tab", "aria-controls", "pills-profile", "aria-selected", "false", 1, "nav-link", "nav-link", "btn-s", 3, "ngClass"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body", "p-0"], ["id", "pills-tabContent", 1, "tab-content"], ["id", "pills-home", "role", "tabpanel", "aria-labelledby", "pills-home-tab", 1, "tab-pane", "fade", "show", "active", 3, "ngClass"], [1, "signin-main-sec"], [1, "sign-in-sec"], [1, "welcome-back"], [1, "sign-in-to"], [1, "sign-in-inp"], [3, "formGroup", "ngSubmit"], [1, "mb-3"], ["for", "exampleInputEmail1", 1, "form-label", "inp-title"], ["type", "number", "placeholder", "Enter Phone Nmber", "formControlName", "mobile_number_login", "required", "", 1, "form-control", "inp-txt", 3, "ngModel", "ngModelChange"], ["class", "help-block2", 4, "ngIf"], [1, "btn", "submit-btn", 3, "disabled"], [1, "sign-in-bottom-sec"], [1, "sign-in-bottom"], [1, "signin-btm-l"], ["href", "", 1, "signin-btm-btn"], [1, "signin-btm-2"], ["id", "pills-profile", "role", "tabpanel", "aria-labelledby", "pills-profile-tab", 1, "tab-pane", "fade", 3, "ngClass"], [1, "mb-2"], ["type", "submit", 1, "btn", "btn-primary", "submit-btn", 3, "disabled"], ["id", "otppage", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade", 2, "z-index", "9999"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-body"], [1, "otp-data"], [1, "otp-title"], [1, "subtitle-otp"], [1, "phone-number"], [1, "text-center", 3, "formGroup", "ngSubmit"], [1, "form-group"], [1, "passcode-wrapper"], ["name", "otp", "formControlName", "otp", 3, "config", "ngModel", "onInputChange", "ngModelChange"], ["ngOtpInput", ""], [1, "m-0"], [1, "resend-code", 3, "click"], ["type", "submit", 1, "btn", "c-button"], ["id", "loginotppage", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade", 2, "z-index", "9999"], [1, "modal-body", "new-otpres"], ["name", "otp_login", "formControlName", "otp_login", 3, "config", "ngModel", "onInputChange", "ngModelChange"], [1, "fruits-content"], [1, "navbar", "navbar-expand-lg"], ["class", "navbar-brand logo-data", 3, "routerLink", 4, "ngIf"], [1, "sidenav-btn"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "btn", "btn-dark", "d-inline-block", "d-lg-none", "ml-auto"], [1, "fas", "fa-align-justify"], [1, "navbar-nav", "top-header", "top_jayabhery"], [1, "media", "loacation-content", "Jayabhery_media"], [1, "loaction"], [1, "fas", "fa-map-marker-alt", "loco-icons"], [1, "media-body"], [1, "title-loca", "mt-0"], [1, "subtitle-content"], [1, "nav-item", "ml-auto"], [1, "form-inline"], ["type", "text", "required", "", "placeholder", "Search for Products...", "aria-label", "Search", 1, "form-control", "search-data", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["textbox", ""], ["type", "submit", 1, "btn", "btn-outline-success", "search-button", 3, "click"], [1, "fas", "fa-search"], ["class", "nav-link new-profiledata  dropdown-toggle", "id", "navbarDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 4, "ngIf"], [1, "dropdown-menu", "dropdown-menu-sm", "dropdown-menu-right"], ["routerLinkActive", "router-link-active", 1, "dropdown-item", 3, "routerLink"], [1, "dropdown-item", 3, "routerLink", "click"], [1, "nav-item", "ml-2", "mr-2"], ["routerLinkActive", "router-link-active", 1, "loaction", 3, "routerLink"], [1, "fas", "fa-shopping-cart", "loco-icons"], ["class", "number-note", 4, "ngIf"], [1, "navbar-brand", "logo-data", 3, "routerLink"], ["src", "../../../../assets/images/1.png", "alt", "", 1, "logo-img"], ["id", "navbarDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "new-profiledata", "dropdown-toggle"], ["src", "../../../assets/images/Group 31234.png", "width", "25px", "alt", "", 1, "rounded-circle", "img-data", "mr-1"], ["width", "25px", "alt", "", 1, "rounded-circle", "img-data", "mr-1", 3, "src"], [1, "number-note"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "btn", "btn_menu", "d-inline-block", "d-lg-none", "ml-auto"], [1, "navbar-expand-lg"], [1, "navbar-nav", "top-header"], [1, "form-inline", "search-form"], [1, "media", "loacation-content", "loacation-content1"], [1, "far", "fa-user", "faloginuser"], [1, "login-contentextra"], ["name", "login", "data-toggle", "modal", "data-target", "#myModal2", 1, "loaction", "loaction1", 3, "click"], [1, "asd"], ["name", "signup", "data-toggle", "modal", "data-target", "#myModal2", 1, "loaction", "loaction1", 3, "click"], ["class", "dropdown-item", "style", "cursor: pointer;", 3, "click", 4, "ngIf"], [1, "dropdown-item", 2, "cursor", "pointer", 3, "click"], [1, "row"], [1, "col-md-4"], [1, "card", "product-book"], [1, "orange-prod"], ["alt", "Card image cap", 1, "card-img-top", "image-data", 3, "src"], [1, "card-body", "p-0"], ["class", "row pt-3", 4, "ngIf"], [4, "ngIf"], [1, "col-md-6"], [1, "product-allstory"], [1, "product-name"], [1, "product-mrp"], [1, "price"], [1, "offer"], [1, "star-ratings", 2, "list-style", "none", "display", "flex", "padding", "0"], [2, "margin-top", "6px"], [1, "rate-content"], [1, "delivary-data"], [1, "top-delivery"], [1, "free"], [1, "weight-select"], [1, ""], [1, "qtySelector", "text-center", "mr-2", 3, "click"], [1, "fa", "fa-minus", "decreaseQty"], [1, "mt-2"], [1, "qtySelector", "text-center", "ml-2", 3, "click"], [1, "fa", "fa-plus", "increaseQty"], [1, "title-prod"], [1, "product-sub"], [1, "row", "pt-3"], [1, "add-button", 3, "click"], [1, "buy-button", 3, "routerLink"], ["name", "login", "data-toggle", "modal", "data-target", "#myModal2", 1, "add-button", 3, "click"], ["name", "signup", "data-toggle", "modal", "data-target", "#myModal2", 1, "buy-button", 3, "click"], [1, "cart-data"], [1, "far", "fa-heart", "hart-image"], ["class", "cart-data", 3, "click", 4, "ngIf"], [1, "cart-data", 3, "click"], [1, "fas", "fa-heart", "hart-image", 2, "color", "#ed1c24"], ["checkedcolor", "yellow", "uncheckedcolor", "black", "size", "24px", "readonly", "true", 3, "value", "totalstars"], ["checkedcolor", "yellow", "uncheckedcolor", "black", "size", "24px", "readonly", "false", 3, "value", "totalstars", "rate"], ["class", "col-md-3 seller-card", 4, "ngFor", "ngForOf"], [1, "col-md-3", "seller-card"], [1, "card", "seller-content", 3, "click"], [1, "fruits-main"], ["alt", "Card image cap", 1, "card-img-top", "image-sell", 3, "src"], [1, "card-body", "fruit-info"], [1, "card-title", "title-name"], [1, "card-text", "price-per"], [1, "price-data"], [1, "rate-image", "ml-auto"], ["id", "addcartbtn", 1, "btn", "btn-success"], [1, "help-block2"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"]],
      template: function ProductdetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ProductdetailsComponent_div_0_Template, 43, 19, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProductdetailsComponent_div_1_Template, 34, 5, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nav", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ProductdetailsComponent_li_7_Template, 5, 2, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ProductdetailsComponent_li_8_Template, 5, 2, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "About Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Products ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ul", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ProductdetailsComponent_li_17_Template, 3, 2, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Blog ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "(current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "News ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "(current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " Offers ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, ProductdetailsComponent_div_34_Template, 45, 12, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "ul", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Recommend Products");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, ProductdetailsComponent_div_38_Template, 2, 1, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, ProductdetailsComponent_div_39_Template, 2, 1, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "ul", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "li", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Sign In");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "li", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Sign Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "h1", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, " Welcome Back ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "p", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, " Sign in to Continue ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "form", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ProductdetailsComponent_Template_form_ngSubmit_64_listener() {
            return ctx.login();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Phone Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProductdetailsComponent_Template_input_ngModelChange_68_listener($event) {
            return ctx.loginObj.mobile_number_login = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](69, ProductdetailsComponent_div_69_Template, 2, 1, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Sign In");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "ul", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "li", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "a", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "li", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "a", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Help");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "h1", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, " Let's get started ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "p", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, " Create account to see our top picks for you! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "form", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ProductdetailsComponent_Template_form_ngSubmit_88_listener() {
            return ctx.signup();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Phone Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProductdetailsComponent_Template_input_ngModelChange_92_listener($event) {
            return ctx.signupObj.mobile_number_login = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](93, ProductdetailsComponent_div_93_Template, 2, 1, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "button", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "Create Account");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "ul", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "li", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "a", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "li", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "a", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Help");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "h3", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, " Verify Your Number ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "p", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "Enter the 6-digit code we sent to you");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "p", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](115, "slice");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](116, "slice");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "form", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ProductdetailsComponent_Template_form_ngSubmit_117_listener() {
            return ctx.verifySignupOtp();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "ng-otp-input", 66, 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onInputChange", function ProductdetailsComponent_Template_ng_otp_input_onInputChange_120_listener($event) {
            return ctx.onOtpChange($event);
          })("ngModelChange", function ProductdetailsComponent_Template_ng_otp_input_ngModelChange_120_listener($event) {
            return ctx.verifySignupObj.otp = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "p", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "a", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductdetailsComponent_Template_a_click_123_listener() {
            return ctx.resend();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "Resend OTP");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "button", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "Continue");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "h3", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, " Verify Your Number ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "p", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "Enter the 6-digit code we sent to you");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "p", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](138, "slice");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](139, "slice");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "form", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ProductdetailsComponent_Template_form_ngSubmit_140_listener() {
            return ctx.verifyLoginOtp();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "ng-otp-input", 73, 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onInputChange", function ProductdetailsComponent_Template_ng_otp_input_onInputChange_143_listener($event) {
            return ctx.onOtpChange($event);
          })("ngModelChange", function ProductdetailsComponent_Template_ng_otp_input_ngModelChange_143_listener($event) {
            return ctx.verifyLoginObj.otp_login = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "p", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "a", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductdetailsComponent_Template_a_click_146_listener() {
            return ctx.resend();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, "Resend OTP");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "button", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149, "Continue");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](150, "app-footer");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLogin);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLogin);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLogin);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLogin);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](50, _c7));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.categorieslist);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](51, _c8));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](52, _c9));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](53, _c10));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.vegitables);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLogin);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLogin);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](54, _c11, ctx.login_option));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](56, _c11, ctx.signup_option));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](58, _c12, ctx.login_option, ctx.login_show));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.loginObj.mobile_number_login);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loginForm.get("mobile_number_login").invalid && (ctx.loginForm.get("mobile_number_login").touched || ctx.loginForm.get("mobile_number_login").dirty));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.loginForm.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](61, _c12, ctx.signup_option, ctx.signup_show));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.signupForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.signupObj.mobile_number_login);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.signupForm.get("mobile_number_login").invalid && (ctx.signupForm.get("mobile_number_login").touched || ctx.signupForm.get("mobile_number_login").dirty));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.signupForm.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](115, 34, ctx.mobile, 0, 2), "******", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](116, 38, ctx.mobile, 8, 10), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.signupOtpForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("config", ctx.config)("ngModel", ctx.verifySignupObj.otp);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](138, 42, ctx.mobile, 0, 2), "******", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](139, 46, ctx.mobile, 8, 10), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginOtpForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("config", ctx.config)("ngModel", ctx.verifyLoginObj.otp_login);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], ng_otp_input__WEBPACK_IMPORTED_MODULE_9__["ɵa"], _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], ng_starrating__WEBPACK_IMPORTED_MODULE_11__["StarRatingComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["TitleCasePipe"]],
      styles: [".help-block2[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n    margin: 5px 0px;\n}\n\n@media (max-width: 575.98px) {\n    .new-otpres[_ngcontent-%COMP%] {\n        padding: 0px;\n    }\n}\n\n.asd[_ngcontent-%COMP%] {\n    margin-top: 3px;\n}\n\n.faloginuser[_ngcontent-%COMP%] {\n    margin-top: 10px;\n}\n\n#navbarDropdownList[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n    background-color: #FF8800;\n    font-size: 16px;\n    color: cornsilk;\n    border-radius: 30px;\n}\n\n#navbarDropdownList[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    background-color: #fff;\n    \n    border-radius: 30px;\n    width: 235px;\n}\n\n@media (max-width: 575.98px) {\n    .new-otpres[_ngcontent-%COMP%] {\n        padding: 0px;\n    }\n    .asd[_ngcontent-%COMP%] {\n        margin-top: 7px;\n    }\n}\n\n.asd[_ngcontent-%COMP%] {\n    margin-top: 3px;\n}\n\n@media (max-width: 360px) {\n    .Jayabhery_media[_ngcontent-%COMP%] {\n        \n        margin-top: 30px;\n        margin-bottom: 30px;\n    }\n    .top_jayabhery[_ngcontent-%COMP%] {\n        margin-right: 0px !important;\n    }\n}\n\n@media screen and (max-width: 800px) {\n    .seller-card[_ngcontent-%COMP%] {\n        margin: 10px 40px 10px 40px;\n    }\n    .image-sell[_ngcontent-%COMP%] {\n        width: 65%;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0ZGV0YWlscy9wcm9kdWN0ZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLCtCQUErQjtJQUMvQixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFDQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJO1FBQ0ksa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLDRCQUE0QjtJQUNoQztBQUNKOztBQUNBO0lBQ0k7UUFDSSwyQkFBMkI7SUFDL0I7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0ZGV0YWlscy9wcm9kdWN0ZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlbHAtYmxvY2syIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luOiA1cHggMHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpIHtcbiAgICAubmV3LW90cHJlcyB7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICB9XG59XG5cbi5hc2Qge1xuICAgIG1hcmdpbi10b3A6IDNweDtcbn1cblxuLmZhbG9naW51c2VyIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4jbmF2YmFyRHJvcGRvd25MaXN0IHVsIGxpIDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGODgwMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6IGNvcm5zaWxrO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG59XG5cbiNuYXZiYXJEcm9wZG93bkxpc3QgdWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzdDQjczNDsgKi9cbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIHdpZHRoOiAyMzVweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzUuOThweCkge1xuICAgIC5uZXctb3RwcmVzIHtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgIH1cbiAgICAuYXNkIHtcbiAgICAgICAgbWFyZ2luLXRvcDogN3B4O1xuICAgIH1cbn1cblxuLmFzZCB7XG4gICAgbWFyZ2luLXRvcDogM3B4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMzYwcHgpIHtcbiAgICAuSmF5YWJoZXJ5X21lZGlhIHtcbiAgICAgICAgLyogbWFyZ2luOiAzMHB4OyAqL1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIH1cbiAgICAudG9wX2pheWFiaGVyeSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAuc2VsbGVyLWNhcmQge1xuICAgICAgICBtYXJnaW46IDEwcHggNDBweCAxMHB4IDQwcHg7XG4gICAgfVxuICAgIC5pbWFnZS1zZWxsIHtcbiAgICAgICAgd2lkdGg6IDY1JTtcbiAgICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProductdetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-productdetails',
          templateUrl: './productdetails.component.html',
          styleUrls: ['./productdetails.component.css']
        }]
      }], function () {
        return [{
          type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__["ToastrManager"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/products/products.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/products/products.component.ts ***!
    \***********************************************************/

  /*! exports provided: ProductsComponent */

  /***/
  function srcAppComponentsProductsProductsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsComponent", function () {
      return ProductsComponent;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/user */
    "./src/app/models/user.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/service/data.service */
    "./src/app/service/data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/__ivy_ngcc__/fesm2015/ng6-toastr-notifications.js");
    /* harmony import */


    var _common_firstnav_firstnav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../common/firstnav/firstnav.component */
    "./src/app/components/common/firstnav/firstnav.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../common/footer/footer.component */
    "./src/app/components/common/footer/footer.component.ts");

    function ProductsComponent_div_6_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r438 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_div_6_div_1_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r438);

          var item_r435 = ctx.$implicit;

          var ctx_r437 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r437.getProductsbyId(item_r435);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Price per kg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Add to cart");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r435 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", item_r435 == null ? null : item_r435.prouduct_image_url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r435 == null ? null : item_r435.product_title);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("INR ", item_r435 == null ? null : item_r435.product_price, "");
      }
    }

    function ProductsComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProductsComponent_div_6_div_1_Template, 18, 3, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r432 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r432.prods);
      }
    }

    function ProductsComponent_div_7_div_1_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ProductsComponent_div_7_div_1_div_17_a_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r448 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_div_7_div_1_div_17_a_1_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r448);

          var item_r440 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          var ctx_r446 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r446.favorite(item_r440);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ProductsComponent_div_7_div_1_div_17_a_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r451 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_div_7_div_1_div_17_a_2_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r451);

          var item_r440 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          var ctx_r449 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r449.favorite(item_r440);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ProductsComponent_div_7_div_1_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProductsComponent_div_7_div_1_div_17_a_1_Template, 2, 0, "a", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ProductsComponent_div_7_div_1_div_17_a_2_Template, 2, 0, "a", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r440 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (item_r440 == null ? null : item_r440.is_favourite) == "0");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (item_r440 == null ? null : item_r440.is_favourite) == "1");
      }
    }

    function ProductsComponent_div_7_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r454 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_div_7_div_1_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r454);

          var item_r440 = ctx.$implicit;

          var ctx_r453 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r453.getProductsbyId(item_r440);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Price per kg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Add to cart");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ProductsComponent_div_7_div_1_div_16_Template, 3, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ProductsComponent_div_7_div_1_div_17_Template, 3, 2, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r440 = ctx.$implicit;

        var ctx_r439 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", item_r440 == null ? null : item_r440.prouduct_image_url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r440 == null ? null : item_r440.product_title);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("INR ", item_r440 == null ? null : item_r440.product_price, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r439.isLogin);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r439.isLogin);
      }
    }

    function ProductsComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProductsComponent_div_7_div_1_Template, 18, 5, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r433 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r433.prods);
      }
    }

    var ProductsComponent =
    /*#__PURE__*/
    function () {
      function ProductsComponent(service, router, toastr, http, activeroute) {
        _classCallCheck(this, ProductsComponent);

        this.service = service;
        this.router = router;
        this.toastr = toastr;
        this.http = http;
        this.activeroute = activeroute;
        this.favObj = new src_app_models_user__WEBPACK_IMPORTED_MODULE_2__["favourite"]();
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
      }

      _createClass(ProductsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // debugger
          this.isLogin = localStorage.getItem('Authorization');
          this.search = this.activeroute.snapshot.paramMap.get("search");
          this.search = localStorage.getItem('search');
          this.getSearchProducts();
          this.getProducts1();
        }
      }, {
        key: "getSearchProducts",
        value: function getSearchProducts() {
          var _this76 = this;

          // debugger
          this.search = localStorage.getItem('search');
          this.service.search(this.search).subscribe(function (data) {
            // debugger
            _this76.prods = data.data.products; // setTimeout(function () {
            //   window.location.reload();
            // }, 500);      
            // localStorage.setItem('lastname', data.data.users.last_name);
            // this.profileObj = Object.assign({}, this.profile.users);
          });
        }
      }, {
        key: "getProducts",
        value: function getProducts() {
          var _this77 = this;

          // debugger
          this.slug = localStorage.getItem('productname'); // this.slug = "vegetables";

          this.service.getProducts(this.slug).subscribe(function (data) {
            // debugger
            _this77.vegitables = data.data.products;
            _this77.name = data.data.slug; // location.reload();
            // this.router.navigate(['/products']);
          }, function (err) {
            var message = 'There is an issue with service. Please retry.';

            if (err.status === 400) {
              message = 'There is an error in getting list of sold to. Please retry.';
            }
          });
        }
      }, {
        key: "getProducts1",
        value: function getProducts1() {
          var _this78 = this;

          // debugger
          this.slug = localStorage.getItem('productname');
          this.id = localStorage.getItem('userId');
          this.service.getProducts1(this.slug, this.id).subscribe(function (data) {
            // debugger
            _this78.vegitables1 = data.data.products;
            _this78.name = data.data.slug; // location.reload();
            // this.router.navigate(['/products']);
          }, function (err) {
            var message = 'There is an issue with service. Please retry.';

            if (err.status === 400) {
              message = 'There is an error in getting list of sold to. Please retry.';
            }
          });
        }
      }, {
        key: "getProductsbyId",
        value: function getProductsbyId(item) {
          var _this79 = this;

          // debugger
          this.slug = item.product_slug; // this.slug = "vegetables";

          this.service.getProductsbyId(this.slug).subscribe(function (data) {
            // debugger
            _this79.vegitables = data.data.products;
            _this79.name = data.data.products.product_slug;
            _this79.productslug = localStorage.setItem('productslug', data.data.products.product_slug);

            _this79.router.navigate(['/productdetails']); // location.reload();

          }, function (err) {
            var message = 'There is an issue with service. Please retry.';

            if (err.status === 400) {
              message = 'There is an error in getting list of sold to. Please retry.';
            }
          });
        }
      }, {
        key: "favorite",
        value: function favorite(item) {
          // debugger
          if (item.is_favourite === "0") {
            this.favObj.favourite = true;
          }

          if (item.is_favourite === "1") {
            this.favObj.favourite = false;
          } // this.favObj.favourite = true;


          this.addToFavourites(item);
        } // console.log(this.quantity+1);

      }, {
        key: "addToFavourites",
        value: function addToFavourites(item) {
          var _this80 = this;

          // debugger
          this.favObj.product_id = item.product_id;
          this.favObj.user_id = localStorage.getItem('userId'); // this.favObj.favourite = true;

          var fData = new FormData();
          fData.append("product_id", this.favObj.product_id);
          fData.append("user_id", this.favObj.user_id);
          fData.append("favourite", JSON.stringify(this.favObj.favourite));
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            "x-api-key": "12345"
          });
          var profile = "addtofavourites";
          this.http.post(this.baseUrl + profile, fData, {
            headers: headers
          }).subscribe(function (data) {
            // debugger
            if (data.status === false) {
              _this80.toastr.errorToastr(data.data.error, 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              }); // location.reload()

            } else {
              _this80.toastr.successToastr(data.message, 'Success!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });

              _this80.favObj = new src_app_models_user__WEBPACK_IMPORTED_MODULE_2__["favourite"]();

              _this80.getProducts1(); // location.reload();

            }
          }, function (err) {
            //debugger
            if (err && err.error && err.error) {
              var errorMesg = err.error.message;

              _this80.toastr.errorToastr(errorMesg, 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });
            } else {
              _this80.toastr.errorToastr('Something went wrong', 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });
            }
          });
        }
      }]);

      return ProductsComponent;
    }();

    ProductsComponent.ɵfac = function ProductsComponent_Factory(t) {
      return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__["ToastrManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]));
    };

    ProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ProductsComponent,
      selectors: [["app-products"]],
      decls: 9,
      vars: 3,
      consts: [[1, "best-selletdata"], [1, "container"], [1, "best-seller"], [1, "best-sellertitle"], ["class", "row", 4, "ngIf"], [1, "row"], ["class", "col-md-3", 4, "ngFor", "ngForOf"], [1, "col-md-3"], [1, "card", "seller-content", 3, "click"], [1, "fruits-main"], ["alt", "Card image cap", 1, "card-img-top", "image-sell", 3, "src"], [1, "card-body", "fruit-info"], [1, "card-title", "title-name"], [1, "card-text", "price-per"], [1, "price-data"], [1, "price"], [1, "rate-image", "ml-auto"], ["id", "addcartbtn", 1, "btn", "btn-success"], [1, "cart-data"], [1, "far", "fa-heart", "hart-image"], ["class", "col-md-3 seller-card", 4, "ngFor", "ngForOf"], [1, "col-md-3", "seller-card"], [4, "ngIf"], ["class", "cart-data", 3, "click", 4, "ngIf"], [1, "cart-data", 3, "click"], [1, "fas", "fa-heart", "hart-image", 2, "color", "#ed1c24"]],
      template: function ProductsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-firstnav");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ProductsComponent_div_6_Template, 2, 1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ProductsComponent_div_7_Template, 2, 1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "app-footer");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Search results for \"", ctx.search, "\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLogin);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLogin);
        }
      },
      directives: [_common_firstnav_firstnav_component__WEBPACK_IMPORTED_MODULE_7__["FirstnavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-products',
          templateUrl: './products.component.html',
          styleUrls: ['./products.component.css']
        }]
      }], function () {
        return [{
          type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__["ToastrManager"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/profile/profile.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/profile/profile.component.ts ***!
    \*********************************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppComponentsProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/models/user */
    "./src/app/models/user.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/service/data.service */
    "./src/app/service/data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/__ivy_ngcc__/fesm2015/ng6-toastr-notifications.js");
    /* harmony import */


    var _common_firstnav_firstnav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../common/firstnav/firstnav.component */
    "./src/app/components/common/firstnav/firstnav.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../common/footer/footer.component */
    "./src/app/components/common/footer/footer.component.ts");

    function ProfileComponent_div_3_div_22_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r476 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ul", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "li", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Home");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_div_3_div_22_div_1_Template_a_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r476);

          var item_r470 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r474 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r474.editAddress(item_r470);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r470 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r470 == null ? null : item_r470.address, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r470 == null ? null : item_r470.Landmark, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r470 == null ? null : item_r470.state, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r470 == null ? null : item_r470.pin_code, " ");
      }
    }

    function ProfileComponent_div_3_div_22_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No Data");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ProfileComponent_div_3_div_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProfileComponent_div_3_div_22_div_1_Template, 15, 4, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ProfileComponent_div_3_div_22_div_2_Template, 2, 0, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r470 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (item_r470 == null ? null : item_r470.address) != null);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (item_r470 == null ? null : item_r470.address) == null);
      }
    }

    function ProfileComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r479 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "li", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_div_3_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r479);

          var item_r468 = ctx.$implicit;

          var ctx_r478 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r478.editProfile(item_r468);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "( ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, ")");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ul", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Address");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Add New Address");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ProfileComponent_div_3_div_22_Template, 3, 2, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r468 = ctx.$implicit;

        var ctx_r455 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", item_r468 == null ? null : item_r468.first_name, " ", item_r468 == null ? null : item_r468.last_name, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r468 == null ? null : item_r468.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r468 == null ? null : item_r468.gender);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("+(91) ", item_r468 == null ? null : item_r468.phone, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r455.address);
      }
    }

    function ProfileComponent_div_18_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " first_name is required* ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ProfileComponent_div_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProfileComponent_div_18_div_1_Template, 2, 0, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r457 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r457.profileForm.get("first_name").errors.required);
      }
    }

    function ProfileComponent_div_23_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " last_name is required* ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ProfileComponent_div_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProfileComponent_div_23_div_1_Template, 2, 0, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r458 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r458.profileForm.get("last_name").errors.required);
      }
    }

    function ProfileComponent_div_28_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " email is required* ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ProfileComponent_div_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProfileComponent_div_28_div_1_Template, 2, 0, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r459 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r459.profileForm.get("email").errors.required);
      }
    }

    function ProfileComponent_div_53_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " address is required* ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ProfileComponent_div_53_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProfileComponent_div_53_div_1_Template, 2, 0, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r460 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r460.addressForm.get("address").errors.required);
      }
    }

    function ProfileComponent_div_58_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " landmark is required* ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ProfileComponent_div_58_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProfileComponent_div_58_div_1_Template, 2, 0, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r461 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r461.addressForm.get("landmark").errors.required);
      }
    }

    function ProfileComponent_div_63_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " state is required* ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ProfileComponent_div_63_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProfileComponent_div_63_div_1_Template, 2, 0, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r462 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r462.addressForm.get("state").errors.required);
      }
    }

    function ProfileComponent_div_68_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " pin_code is required* ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ProfileComponent_div_68_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProfileComponent_div_68_div_1_Template, 2, 0, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r463 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r463.addressForm.get("pin_code").errors.required);
      }
    }

    function ProfileComponent_div_80_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " address is required* ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ProfileComponent_div_80_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProfileComponent_div_80_div_1_Template, 2, 0, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r464 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r464.addressForm.get("address").errors.required);
      }
    }

    function ProfileComponent_div_85_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " landmark is required* ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ProfileComponent_div_85_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProfileComponent_div_85_div_1_Template, 2, 0, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r465 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r465.addressForm.get("landmark").errors.required);
      }
    }

    function ProfileComponent_div_90_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " state is required* ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ProfileComponent_div_90_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProfileComponent_div_90_div_1_Template, 2, 0, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r466 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r466.addressForm.get("state").errors.required);
      }
    }

    function ProfileComponent_div_95_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " pin_code is required* ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ProfileComponent_div_95_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProfileComponent_div_95_div_1_Template, 2, 0, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r467 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r467.addressForm.get("pin_code").errors.required);
      }
    }

    var ProfileComponent =
    /*#__PURE__*/
    function () {
      function ProfileComponent(service, router, toastr, http) {
        _classCallCheck(this, ProfileComponent);

        this.service = service;
        this.router = router;
        this.toastr = toastr;
        this.http = http;
        this.profileObj = new src_app_models_user__WEBPACK_IMPORTED_MODULE_3__["profileU"]();
        this.addressObj = new src_app_models_user__WEBPACK_IMPORTED_MODULE_3__["addressU"]();
        this.edit = false;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl;
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getUserProfile();
          this.getUserAddress();
          this.profileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            profilepic: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
          });
          this.addressForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            landmark: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            pin_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
          });
        }
      }, {
        key: "gender",
        value: function gender(type) {
          // debugger
          if (type == 1) {
            this.profileObj.gender = 'Female';
          }

          this.profileObj.gender = 'Male';
        }
      }, {
        key: "upload",
        value: function upload(files) {
          // debugger
          this.profileObj.profilepic = files.item(0);
          return false;
        }
      }, {
        key: "profileUpdate",
        value: function profileUpdate() {
          var _this81 = this;

          // debugger
          this.profileObj.user_id = localStorage.getItem('userId');
          var fData = new FormData();
          fData.append("user_id", this.profileObj.user_id);
          fData.append("first_name", this.profileObj.first_name);
          fData.append("last_name", this.profileObj.last_name);
          fData.append("email", this.profileObj.email);
          fData.append("gender", this.profileObj.gender);
          fData.append("profilepic", this.profileObj.profilepic);
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            "x-api-key": "12345"
          });
          var profile = "update_profile";
          this.http.post(this.baseUrl + profile, fData, {
            headers: headers
          }).subscribe(function (data) {
            // debugger
            if (data.status === false) {
              _this81.toastr.errorToastr(data.data.error, 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              }); // alert(data.message)


              _this81.profileForm.reset(); // location.reload()

            } else {
              _this81.toastr.successToastr(data.message, 'Success!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });

              _this81.profileObj = new src_app_models_user__WEBPACK_IMPORTED_MODULE_3__["profileU"]();

              _this81.profileForm.reset();

              $('#editmodal').modal('hide');
              setTimeout(function () {
                window.location.reload();
              }, 500);

              _this81.getUserProfile(); // localStorage.setItem("Authorization", data);
              // localStorage.setItem("userId", data.user._id);

            }
          }, function (err) {
            //debugger
            if (err && err.error && err.error) {
              var errorMesg = err.error.message;

              _this81.toastr.errorToastr(errorMesg, 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });

              _this81.profileForm.reset();
            } else {
              _this81.toastr.errorToastr('Something went wrong', 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });
            }
          });
        }
      }, {
        key: "addAddress",
        value: function addAddress() {
          var _this82 = this;

          // debugger
          this.addressObj.user_id = localStorage.getItem('userId');
          var fData = new FormData();
          fData.append("user_id", this.addressObj.user_id);
          fData.append("address", this.addressObj.address);
          fData.append("landmark", this.addressObj.landmark);
          fData.append("state", this.addressObj.state);
          fData.append("pin_code", this.addressObj.pin_code);
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            "x-api-key": "12345"
          });
          var profile = "update_address";
          this.http.post(this.baseUrl + profile, fData, {
            headers: headers
          }).subscribe(function (data) {
            // debugger
            if (data.status === false) {
              _this82.toastr.errorToastr(data.data.error, 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              }); // alert(data.message)


              _this82.addressForm.reset(); // location.reload()

            } else {
              _this82.toastr.successToastr(data.message, 'Success!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });

              _this82.addressObj = new src_app_models_user__WEBPACK_IMPORTED_MODULE_3__["addressU"]();

              _this82.addressForm.reset();

              $('#addaddress').modal('hide');

              _this82.getUserAddress(); // localStorage.setItem("Authorization", data);
              // localStorage.setItem("userId", data.user._id);

            }
          }, function (err) {
            //debugger
            if (err && err.error && err.error) {
              var errorMesg = err.error.message;

              _this82.toastr.errorToastr(errorMesg, 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });

              _this82.addressForm.reset();
            } else {
              _this82.toastr.errorToastr('Something went wrong', 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });
            }
          });
        }
      }, {
        key: "getUserProfile",
        value: function getUserProfile() {
          var _this83 = this;

          // debugger
          this.id = localStorage.getItem('userId');
          this.service.getUserProfile(this.id).subscribe(function (data) {
            // //debugger
            _this83.profile = [data.data.users];
            localStorage.setItem('firstname', data.data.users.first_name);
            localStorage.setItem('lastname', data.data.users.last_name);
            _this83.profileObj = Object.assign({}, _this83.profile.users);
          });
        }
      }, {
        key: "editProfile",
        value: function editProfile(value) {
          this.profileObj = new src_app_models_user__WEBPACK_IMPORTED_MODULE_3__["profileU"]();
          this.profileObj.first_name = value.first_name;
          this.profileObj.last_name = value.last_name;
          this.profileObj.email = value.email;
          this.profileObj.gender = value.referenceId;
          this.profileObj.user_id = value.user_id;
        }
      }, {
        key: "editAddress",
        value: function editAddress(value) {
          this.addressObj = new src_app_models_user__WEBPACK_IMPORTED_MODULE_3__["addressU"]();
          this.addressObj.address = value.address;
          this.addressObj.landmark = value.Landmark;
          this.addressObj.state = value.state;
          this.addressObj.pin_code = value.pin_code;
          this.addressObj.user_id = value.user_id;
        }
      }, {
        key: "getUserAddress",
        value: function getUserAddress() {
          var _this84 = this;

          // debugger
          this.id = localStorage.getItem('userId');
          this.service.getUserAddress(this.id).subscribe(function (data) {
            // //debugger
            _this84.address = [data.data.user_address]; // this.profileObj = Object.assign({}, this.profile.users);
          });
        }
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
      return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__["ToastrManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
    };

    ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ProfileComponent,
      selectors: [["app-profile"]],
      decls: 99,
      vars: 31,
      consts: [[1, "profile-details"], [1, "container"], ["class", "profile-data", 4, "ngFor", "ngForOf"], ["id", "editmodal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade", 2, "z-index", "9999"], ["role", "document", 1, "modal-dialog"], [1, "modal-content", "edit-data"], [1, "modal-body"], [3, "formGroup", "ngSubmit"], [1, "mb-2"], ["for", "exampleInputEmail1", 1, "form-label", "inp-title"], ["type", "file", "id", "prof", "accept", "image/*", 1, "upload-file", 2, "margin-left", "20px", 3, "change"], ["file", ""], ["type", "text", "placeholder", "Enter First Name", "formControlName", "first_name", "required", "", 1, "form-control", "inp-txt", 3, "ngModel", "ngModelChange"], ["class", "help-block2", 4, "ngIf"], ["type", "text", "placeholder", "Enter Last Name", "formControlName", "last_name", "required", "", 1, "form-control", "inp-txt", 3, "ngModel", "ngModelChange"], ["type", "email", "placeholder", "Enter Email", "formControlName", "email", "required", "", 1, "form-control", "inp-txt", 3, "ngModel", "ngModelChange"], [1, "col-sm-7", "position-relative", "mb-3"], [1, "col-sm-9"], [1, "custom-control", "custom-radio", "custom-control", "col-9"], ["type", "radio", "id", "male", "name", "options", 1, "custom-control-input", 3, "checked", "click"], ["for", "male", 1, "custom-control-label"], ["type", "radio", "id", "female", "name", "options", 1, "custom-control-input", 3, "checked", "click"], ["for", "female", 1, "custom-control-label"], ["type", "submit", 1, "btn", "btn-primary", "submit-btn", 3, "disabled"], ["id", "addaddress", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade", 2, "z-index", "9999"], ["type", "email", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", "placeholder", "Address", "formControlName", "address", "required", "", 1, "form-control", "inp-txt", 3, "ngModel", "ngModelChange"], ["type", "email", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", "placeholder", "Landmark", "formControlName", "landmark", "required", "", 1, "form-control", "inp-txt", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", "placeholder", "State", "formControlName", "state", "required", "", 1, "form-control", "inp-txt", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", "placeholder", "Pincode", "formControlName", "pin_code", "required", "", 1, "form-control", "inp-txt", 3, "ngModel", "ngModelChange"], ["id", "editaddress", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade", 2, "z-index", "9999"], [1, "profile-data"], [1, "profile-name"], [1, "name-data"], ["data-toggle", "modal", "data-target", "#editmodal", 1, "edit-btn", 3, "click"], [1, "fas", "fa-edit"], [1, "extra-data"], [1, "add-newaddress"], [1, "title-address"], ["data-toggle", "modal", "data-target", "#addaddress", 1, "new-cls"], [1, "row"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], [1, "col-md-4"], ["class", "address-card", 4, "ngIf"], ["class", "no-data", 4, "ngIf"], [1, "address-card"], [1, "address-content"], [1, "address-default"], [1, "home", 2, "font-size", "14px"], [1, "total-address", 2, "color", "#000", "font-size", "17px"], ["data-toggle", "modal", "data-target", "#editaddress", 1, "edit-btn", 2, "color", "blue", "font-size", "14px", 3, "click"], [1, "no-data"], [1, "help-block2"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"]],
      template: function ProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-firstnav");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ProfileComponent_div_3_Template, 23, 6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ProfileComponent_Template_form_ngSubmit_8_listener() {
            return ctx.profileUpdate();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Profile Pic");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 10, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ProfileComponent_Template_input_change_12_listener($event) {
            return ctx.upload($event.target.files);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "First Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_17_listener($event) {
            return ctx.profileObj.first_name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ProfileComponent_div_18_Template, 2, 1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Last Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_22_listener($event) {
            return ctx.profileObj.last_name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, ProfileComponent_div_23_Template, 2, 1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_27_listener($event) {
            return ctx.profileObj.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, ProfileComponent_div_28_Template, 2, 1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Gender ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_Template_input_click_35_listener() {
            return ctx.gender(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Male");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_Template_input_click_39_listener() {
            return ctx.gender(0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "label", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Female");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ProfileComponent_Template_form_ngSubmit_48_listener() {
            return ctx.addAddress();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_52_listener($event) {
            return ctx.addressObj.address = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, ProfileComponent_div_53_Template, 2, 1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Landmark");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_57_listener($event) {
            return ctx.addressObj.landmark = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](58, ProfileComponent_div_58_Template, 2, 1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "State");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_62_listener($event) {
            return ctx.addressObj.state = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](63, ProfileComponent_div_63_Template, 2, 1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Pincode");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_67_listener($event) {
            return ctx.addressObj.pin_code = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](68, ProfileComponent_div_68_Template, 2, 1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ProfileComponent_Template_form_ngSubmit_75_listener() {
            return ctx.addAddress();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_79_listener($event) {
            return ctx.addressObj.address = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](80, ProfileComponent_div_80_Template, 2, 1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Landmark");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_84_listener($event) {
            return ctx.addressObj.landmark = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](85, ProfileComponent_div_85_Template, 2, 1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "State");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_89_listener($event) {
            return ctx.addressObj.state = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](90, ProfileComponent_div_90_Template, 2, 1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "Pincode");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_94_listener($event) {
            return ctx.addressObj.pin_code = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](95, ProfileComponent_div_95_Template, 2, 1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](98, "app-footer");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.profile);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.profileForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.profileObj.first_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.profileForm.get("first_name").invalid && (ctx.profileForm.get("first_name").touched || ctx.profileForm.get("first_name").dirty));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.profileObj.last_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.profileForm.get("last_name").invalid && (ctx.profileForm.get("last_name").touched || ctx.profileForm.get("last_name").dirty));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.profileObj.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.profileForm.get("email").invalid && (ctx.profileForm.get("email").touched || ctx.profileForm.get("email").dirty));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx.male);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx.female);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.profileForm.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.addressForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.addressObj.address);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.addressForm.get("address").invalid && (ctx.addressForm.get("address").touched || ctx.addressForm.get("address").dirty));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.addressObj.landmark);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.addressForm.get("landmark").invalid && (ctx.addressForm.get("landmark").touched || ctx.addressForm.get("landmark").dirty));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.addressObj.state);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.addressForm.get("state").invalid && (ctx.addressForm.get("state").touched || ctx.addressForm.get("state").dirty));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.addressObj.pin_code);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.addressForm.get("pin_code").invalid && (ctx.addressForm.get("pin_code").touched || ctx.addressForm.get("pin_code").dirty));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.addressForm.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.addressForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.addressObj.address);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.addressForm.get("address").invalid && (ctx.addressForm.get("address").touched || ctx.addressForm.get("address").dirty));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.addressObj.landmark);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.addressForm.get("landmark").invalid && (ctx.addressForm.get("landmark").touched || ctx.addressForm.get("landmark").dirty));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.addressObj.state);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.addressForm.get("state").invalid && (ctx.addressForm.get("state").touched || ctx.addressForm.get("state").dirty));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.addressObj.pin_code);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.addressForm.get("pin_code").invalid && (ctx.addressForm.get("pin_code").touched || ctx.addressForm.get("pin_code").dirty));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.addressForm.valid);
        }
      },
      directives: [_common_firstnav_firstnav_component__WEBPACK_IMPORTED_MODULE_8__["FirstnavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-profile',
          templateUrl: './profile.component.html',
          styleUrls: ['./profile.component.css']
        }]
      }], function () {
        return [{
          type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__["ToastrManager"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/recommended-products/recommended-products.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/components/recommended-products/recommended-products.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: RecommendedProductsComponent */

  /***/
  function srcAppComponentsRecommendedProductsRecommendedProductsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecommendedProductsComponent", function () {
      return RecommendedProductsComponent;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/user */
    "./src/app/models/user.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/service/data.service */
    "./src/app/service/data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/__ivy_ngcc__/fesm2015/ng6-toastr-notifications.js");
    /* harmony import */


    var _common_firstnav_firstnav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../common/firstnav/firstnav.component */
    "./src/app/components/common/firstnav/firstnav.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../common/footer/footer.component */
    "./src/app/components/common/footer/footer.component.ts");

    function RecommendedProductsComponent_div_6_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Price per kg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Add to cart");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r494 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", item_r494 == null ? null : item_r494.prouduct_image_url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r494 == null ? null : item_r494.product_title);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("INR ", item_r494 == null ? null : item_r494.product_price, "");
      }
    }

    function RecommendedProductsComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RecommendedProductsComponent_div_6_div_1_Template, 18, 3, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r491 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r491.recommended);
      }
    }

    function RecommendedProductsComponent_div_7_div_1_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function RecommendedProductsComponent_div_7_div_1_div_17_a_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r505 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RecommendedProductsComponent_div_7_div_1_div_17_a_1_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r505);

          var item_r497 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          var ctx_r503 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r503.favorite(item_r497);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function RecommendedProductsComponent_div_7_div_1_div_17_a_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r508 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RecommendedProductsComponent_div_7_div_1_div_17_a_2_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r508);

          var item_r497 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          var ctx_r506 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r506.favorite(item_r497);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function RecommendedProductsComponent_div_7_div_1_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RecommendedProductsComponent_div_7_div_1_div_17_a_1_Template, 2, 0, "a", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RecommendedProductsComponent_div_7_div_1_div_17_a_2_Template, 2, 0, "a", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r497 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (item_r497 == null ? null : item_r497.is_favourite) == "0");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (item_r497 == null ? null : item_r497.is_favourite) == "1");
      }
    }

    function RecommendedProductsComponent_div_7_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r511 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RecommendedProductsComponent_div_7_div_1_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r511);

          var item_r497 = ctx.$implicit;

          var ctx_r510 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r510.getProductsbyId(item_r497);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Price per kg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Add to cart");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, RecommendedProductsComponent_div_7_div_1_div_16_Template, 3, 0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, RecommendedProductsComponent_div_7_div_1_div_17_Template, 3, 2, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r497 = ctx.$implicit;

        var ctx_r496 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", item_r497 == null ? null : item_r497.prouduct_image_url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r497 == null ? null : item_r497.product_title);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("INR ", item_r497 == null ? null : item_r497.product_price, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r496.isLogin);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r496.isLogin);
      }
    }

    function RecommendedProductsComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RecommendedProductsComponent_div_7_div_1_Template, 18, 5, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r492 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r492.recommended1);
      }
    }

    var RecommendedProductsComponent =
    /*#__PURE__*/
    function () {
      function RecommendedProductsComponent(service, router, toastr, http) {
        _classCallCheck(this, RecommendedProductsComponent);

        this.service = service;
        this.router = router;
        this.toastr = toastr;
        this.http = http;
        this.favObj = new src_app_models_user__WEBPACK_IMPORTED_MODULE_2__["favourite"]();
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
      }

      _createClass(RecommendedProductsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var element = document.querySelector('#scrollId');
          window.scrollTo(0, 0);
          this.isLogin = localStorage.getItem('Authorization');
          this.getRecommended();
          this.getRecommended1();
        }
      }, {
        key: "getRecommended",
        value: function getRecommended() {
          var _this85 = this;

          this.service.getRecommended().subscribe(function (data) {
            // debugger
            _this85.recommended = data.data.recommendedProducts;
          });
        }
      }, {
        key: "getRecommended1",
        value: function getRecommended1() {
          var _this86 = this;

          this.id = localStorage.getItem('userId');
          this.service.getRecommended1(this.id).subscribe(function (data) {
            // debugger
            _this86.recommended1 = data.data.recommendedProducts;
          });
        }
      }, {
        key: "getProductsbyId",
        value: function getProductsbyId(item) {
          var _this87 = this;

          // debugger
          this.slug = item.product_slug; // this.slug = "vegetables";

          this.service.getProductsbyId(this.slug).subscribe(function (data) {
            // debugger
            // this.vegitables = data.data.products;
            // this.name = data.data.products.product_slug;
            _this87.productslug = localStorage.setItem('productslug', data.data.products.product_slug);

            _this87.router.navigate(['/productdetails']); // location.reload()

          }, function (err) {
            var message = 'There is an issue with service. Please retry.';

            if (err.status === 400) {
              message = 'There is an error in getting list of sold to. Please retry.';
            }
          });
        }
      }, {
        key: "favorite",
        value: function favorite(item) {
          // debugger
          if (item.is_favourite === "0") {
            this.favObj.favourite = true;
          }

          if (item.is_favourite === "1") {
            this.favObj.favourite = false;
          } // this.favObj.favourite = true;


          this.addToFavourites(item);
        } // console.log(this.quantity+1);

      }, {
        key: "addToFavourites",
        value: function addToFavourites(item) {
          var _this88 = this;

          // debugger
          this.favObj.product_id = item.product_id;
          this.favObj.user_id = localStorage.getItem('userId'); // this.favObj.favourite = true;

          var fData = new FormData();
          fData.append("product_id", this.favObj.product_id);
          fData.append("user_id", this.favObj.user_id);
          fData.append("favourite", JSON.stringify(this.favObj.favourite));
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            "x-api-key": "12345"
          });
          var profile = "addtofavourites";
          this.http.post(this.baseUrl + profile, fData, {
            headers: headers
          }).subscribe(function (data) {
            // debugger
            if (data.status === false) {
              _this88.toastr.errorToastr(data.data.error, 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              }); // location.reload()

            } else {
              _this88.toastr.successToastr(data.message, 'Success!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });

              _this88.favObj = new src_app_models_user__WEBPACK_IMPORTED_MODULE_2__["favourite"]();

              _this88.getRecommended1(); // location.reload();

            }
          }, function (err) {
            //debugger
            if (err && err.error && err.error) {
              var errorMesg = err.error.message;

              _this88.toastr.errorToastr(errorMesg, 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });
            } else {
              _this88.toastr.errorToastr('Something went wrong', 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });
            }
          });
        }
      }]);

      return RecommendedProductsComponent;
    }();

    RecommendedProductsComponent.ɵfac = function RecommendedProductsComponent_Factory(t) {
      return new (t || RecommendedProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__["ToastrManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
    };

    RecommendedProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: RecommendedProductsComponent,
      selectors: [["app-recommended-products"]],
      decls: 9,
      vars: 2,
      consts: [[1, "best-selletdata"], [1, "container"], [1, "best-seller"], [1, "best-sellertitle"], ["class", "row", 4, "ngIf"], [1, "row"], ["class", "col-md-3", "data-toggle", "modal", "data-target", "#myModal2", 4, "ngFor", "ngForOf"], ["data-toggle", "modal", "data-target", "#myModal2", 1, "col-md-3"], [1, "card", "seller-content"], [1, "fruits-main"], ["alt", "Card image cap", 1, "card-img-top", "image-sell", 3, "src"], [1, "card-body", "fruit-info"], [1, "card-title", "title-name"], [1, "card-text", "price-per"], [1, "price-data"], [1, "price"], [1, "rate-image", "ml-auto"], ["id", "addcartbtn", 1, "btn", "btn-success"], [1, "cart-data"], [1, "far", "fa-heart", "hart-image"], ["class", "col-md-3", 4, "ngFor", "ngForOf"], [1, "col-md-3"], [1, "card", "seller-content", 3, "click"], [4, "ngIf"], ["class", "cart-data", 3, "click", 4, "ngIf"], [1, "cart-data", 3, "click"], [1, "fas", "fa-heart", "hart-image", 2, "color", "#ed1c24"]],
      template: function RecommendedProductsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-firstnav");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Recommended Products");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, RecommendedProductsComponent_div_6_Template, 2, 1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, RecommendedProductsComponent_div_7_Template, 2, 1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "app-footer");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLogin);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLogin);
        }
      },
      directives: [_common_firstnav_firstnav_component__WEBPACK_IMPORTED_MODULE_7__["FirstnavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVjb21tZW5kZWQtcHJvZHVjdHMvcmVjb21tZW5kZWQtcHJvZHVjdHMuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RecommendedProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-recommended-products',
          templateUrl: './recommended-products.component.html',
          styleUrls: ['./recommended-products.component.css']
        }]
      }], function () {
        return [{
          type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__["ToastrManager"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/support/support.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/support/support.component.ts ***!
    \*********************************************************/

  /*! exports provided: SupportComponent */

  /***/
  function srcAppComponentsSupportSupportComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SupportComponent", function () {
      return SupportComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _common_firstnav_firstnav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../common/firstnav/firstnav.component */
    "./src/app/components/common/firstnav/firstnav.component.ts");
    /* harmony import */


    var _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../common/footer/footer.component */
    "./src/app/components/common/footer/footer.component.ts");

    var SupportComponent =
    /*#__PURE__*/
    function () {
      function SupportComponent() {
        _classCallCheck(this, SupportComponent);
      }

      _createClass(SupportComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SupportComponent;
    }();

    SupportComponent.ɵfac = function SupportComponent_Factory(t) {
      return new (t || SupportComponent)();
    };

    SupportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SupportComponent,
      selectors: [["app-support"]],
      decls: 5,
      vars: 0,
      consts: [[1, "blog_developnment"], [1, "blog_heading"]],
      template: function SupportComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-firstnav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "The page is under design ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer");
        }
      },
      directives: [_common_firstnav_firstnav_component__WEBPACK_IMPORTED_MODULE_1__["FirstnavComponent"], _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3VwcG9ydC9zdXBwb3J0LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SupportComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-support',
          templateUrl: './support.component.html',
          styleUrls: ['./support.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/terms/terms.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/terms/terms.component.ts ***!
    \*****************************************************/

  /*! exports provided: TermsComponent */

  /***/
  function srcAppComponentsTermsTermsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TermsComponent", function () {
      return TermsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _common_firstnav_firstnav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../common/firstnav/firstnav.component */
    "./src/app/components/common/firstnav/firstnav.component.ts");
    /* harmony import */


    var _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../common/footer/footer.component */
    "./src/app/components/common/footer/footer.component.ts");

    var TermsComponent =
    /*#__PURE__*/
    function () {
      function TermsComponent() {
        _classCallCheck(this, TermsComponent);
      }

      _createClass(TermsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TermsComponent;
    }();

    TermsComponent.ɵfac = function TermsComponent_Factory(t) {
      return new (t || TermsComponent)();
    };

    TermsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TermsComponent,
      selectors: [["app-terms"]],
      decls: 10,
      vars: 0,
      consts: [[1, "terms-service"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "terms-header"]],
      template: function TermsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-firstnav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "TERMS OF SERVICE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "PLEASE READ THESE TERMS OF SERVICE CAREFULLY. BY CLICKING THE \"CREATE ACCOUNT\" BUTTON OR BY ACCESSING OR USING THE SERVICES, YOU AGREE TO BE LEGALLY BOUND BY THESE TERMS OF SERVICE AND ALL TERMS INCORPORATED BY REFERENCE.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-footer");
        }
      },
      directives: [_common_firstnav_firstnav_component__WEBPACK_IMPORTED_MODULE_1__["FirstnavComponent"], _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVybXMvdGVybXMuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TermsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-terms',
          templateUrl: './terms.component.html',
          styleUrls: ['./terms.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/wishlist/wishlist.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/wishlist/wishlist.component.ts ***!
    \***********************************************************/

  /*! exports provided: WishlistComponent */

  /***/
  function srcAppComponentsWishlistWishlistComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WishlistComponent", function () {
      return WishlistComponent;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/user */
    "./src/app/models/user.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/service/data.service */
    "./src/app/service/data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/__ivy_ngcc__/fesm2015/ng6-toastr-notifications.js");
    /* harmony import */


    var _common_firstnav_firstnav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../common/firstnav/firstnav.component */
    "./src/app/components/common/firstnav/firstnav.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../common/footer/footer.component */
    "./src/app/components/common/footer/footer.component.ts");

    function WishlistComponent_div_6_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Price per kg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Add to cart");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r515 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", item_r515 == null ? null : item_r515.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r515 == null ? null : item_r515.product_title);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("INR ", item_r515 == null ? null : item_r515.product_price, "");
      }
    }

    function WishlistComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, WishlistComponent_div_6_div_1_Template, 18, 3, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r512 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r512.favourites);
      }
    }

    function WishlistComponent_div_7_div_1_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function WishlistComponent_div_7_div_1_div_17_a_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r526 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WishlistComponent_div_7_div_1_div_17_a_1_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r526);

          var item_r518 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          var ctx_r524 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r524.favorite(item_r518);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function WishlistComponent_div_7_div_1_div_17_a_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r529 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WishlistComponent_div_7_div_1_div_17_a_2_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r529);

          var item_r518 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          var ctx_r527 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r527.favorite(item_r518);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function WishlistComponent_div_7_div_1_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, WishlistComponent_div_7_div_1_div_17_a_1_Template, 2, 0, "a", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, WishlistComponent_div_7_div_1_div_17_a_2_Template, 2, 0, "a", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r518 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (item_r518 == null ? null : item_r518.is_favourite) == "0");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (item_r518 == null ? null : item_r518.is_favourite) == "1");
      }
    }

    function WishlistComponent_div_7_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r532 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WishlistComponent_div_7_div_1_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r532);

          var item_r518 = ctx.$implicit;

          var ctx_r531 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r531.getProductsbyId(item_r518);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Price per kg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Add to cart");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, WishlistComponent_div_7_div_1_div_16_Template, 3, 0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, WishlistComponent_div_7_div_1_div_17_Template, 3, 2, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r518 = ctx.$implicit;

        var ctx_r517 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", item_r518 == null ? null : item_r518.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r518 == null ? null : item_r518.product_title);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("INR ", item_r518 == null ? null : item_r518.product_price, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r517.isLogin);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r517.isLogin);
      }
    }

    function WishlistComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, WishlistComponent_div_7_div_1_Template, 18, 5, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r513 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r513.favourites);
      }
    }

    var WishlistComponent =
    /*#__PURE__*/
    function () {
      function WishlistComponent(service, router, toastr, http) {
        _classCallCheck(this, WishlistComponent);

        this.service = service;
        this.router = router;
        this.toastr = toastr;
        this.http = http;
        this.favObj = new src_app_models_user__WEBPACK_IMPORTED_MODULE_2__["favourite"]();
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
      }

      _createClass(WishlistComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.isLogin = localStorage.getItem('Authorization');
          this.getFavourites();
        }
      }, {
        key: "getFavourites",
        value: function getFavourites() {
          var _this89 = this;

          // debugger
          this.id = localStorage.getItem('userId');
          this.service.getFavourites(this.id).subscribe(function (data) {
            debugger;
            _this89.favourites = data.data.favourites_products;
          });
        }
      }, {
        key: "getProductsbyId",
        value: function getProductsbyId(item) {
          var _this90 = this;

          // debugger
          this.slug = item.product_slug; // this.slug = "vegetables";

          this.service.getProductsbyId(this.slug).subscribe(function (data) {
            // debugger
            // this.vegitables = data.data.products;
            // this.name = data.data.products.product_slug;
            _this90.productslug = localStorage.setItem('productslug', data.data.products.product_slug);

            _this90.router.navigate(['/productdetails']); // location.reload()

          }, function (err) {
            var message = 'There is an issue with service. Please retry.';

            if (err.status === 400) {
              message = 'There is an error in getting list of sold to. Please retry.';
            }
          });
        }
      }, {
        key: "favorite",
        value: function favorite(item) {
          // debugger
          if (item.is_favourite === "0") {
            this.favObj.favourite = true;
          }

          if (item.is_favourite === "1") {
            this.favObj.favourite = false;
          } // this.favObj.favourite = true;


          this.addToFavourites(item);
        } // console.log(this.quantity+1);

      }, {
        key: "addToFavourites",
        value: function addToFavourites(item) {
          var _this91 = this;

          // debugger
          this.favObj.product_id = item.product_id;
          this.favObj.user_id = localStorage.getItem('userId'); // this.favObj.favourite = true;

          var fData = new FormData();
          fData.append("product_id", this.favObj.product_id);
          fData.append("user_id", this.favObj.user_id);
          fData.append("favourite", JSON.stringify(this.favObj.favourite));
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            "x-api-key": "12345"
          });
          var profile = "addtofavourites";
          this.http.post(this.baseUrl + profile, fData, {
            headers: headers
          }).subscribe(function (data) {
            // debugger
            if (data.status === false) {
              _this91.toastr.errorToastr(data.data.error, 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              }); // location.reload()

            } else {
              _this91.toastr.successToastr(data.message, 'Success!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });

              _this91.favObj = new src_app_models_user__WEBPACK_IMPORTED_MODULE_2__["favourite"](); // location.reload();
            }
          }, function (err) {
            //debugger
            if (err && err.error && err.error) {
              var errorMesg = err.error.message;

              _this91.toastr.errorToastr(errorMesg, 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });
            } else {
              _this91.toastr.errorToastr('Something went wrong', 'Oops!', {
                position: 'bottom-center',
                toastTimeout: 1000
              });
            }
          });
        }
      }]);

      return WishlistComponent;
    }();

    WishlistComponent.ɵfac = function WishlistComponent_Factory(t) {
      return new (t || WishlistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__["ToastrManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
    };

    WishlistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: WishlistComponent,
      selectors: [["app-wishlist"]],
      decls: 9,
      vars: 2,
      consts: [[1, "best-selletdata"], [1, "container"], [1, "best-seller"], [1, "best-sellertitle"], ["class", "row", 4, "ngIf"], [1, "row"], ["class", "col-md-3", "data-toggle", "modal", "data-target", "#myModal2", 4, "ngFor", "ngForOf"], ["data-toggle", "modal", "data-target", "#myModal2", 1, "col-md-3"], [1, "card", "seller-content"], [1, "fruits-main"], ["alt", "Card image cap", 1, "card-img-top", "image-sell", 3, "src"], [1, "card-body", "fruit-info"], [1, "card-title", "title-name"], [1, "card-text", "price-per"], [1, "price-data"], [1, "price"], [1, "rate-image", "ml-auto"], ["id", "addcartbtn", 1, "btn", "btn-success"], [1, "cart-data"], [1, "far", "fa-heart", "hart-image"], ["class", "col-md-3 seller-card", 4, "ngFor", "ngForOf"], [1, "col-md-3", "seller-card"], [1, "card", "seller-content", 3, "click"], [4, "ngIf"], ["class", "cart-data", 3, "click", 4, "ngIf"], [1, "cart-data", 3, "click"], [1, "fas", "fa-heart", "hart-image", 2, "color", "#ed1c24"]],
      template: function WishlistComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-firstnav");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Wishlist");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, WishlistComponent_div_6_Template, 2, 1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, WishlistComponent_div_7_Template, 2, 1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "app-footer");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLogin);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLogin);
        }
      },
      directives: [_common_firstnav_firstnav_component__WEBPACK_IMPORTED_MODULE_7__["FirstnavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2lzaGxpc3Qvd2lzaGxpc3QuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](WishlistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-wishlist',
          templateUrl: './wishlist.component.html',
          styleUrls: ['./wishlist.component.css']
        }]
      }], function () {
        return [{
          type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__["ToastrManager"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/models/user.ts":
  /*!********************************!*\
    !*** ./src/app/models/user.ts ***!
    \********************************/

  /*! exports provided: signupM, signupOtp, loginM, loginOtp, profileU, addressU, addcart, confirmP, paymentC, favourite, rating */

  /***/
  function srcAppModelsUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "signupM", function () {
      return signupM;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "signupOtp", function () {
      return signupOtp;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "loginM", function () {
      return loginM;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "loginOtp", function () {
      return loginOtp;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "profileU", function () {
      return profileU;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "addressU", function () {
      return addressU;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "addcart", function () {
      return addcart;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "confirmP", function () {
      return confirmP;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "paymentC", function () {
      return paymentC;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "favourite", function () {
      return favourite;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "rating", function () {
      return rating;
    });

    var signupM = function signupM() {
      _classCallCheck(this, signupM);
    };

    var signupOtp = function signupOtp() {
      _classCallCheck(this, signupOtp);
    };

    var loginM = function loginM() {
      _classCallCheck(this, loginM);
    };

    var loginOtp = function loginOtp() {
      _classCallCheck(this, loginOtp);
    };

    var profileU = function profileU() {
      _classCallCheck(this, profileU);
    };

    var addressU = function addressU() {
      _classCallCheck(this, addressU);
    };

    var addcart = function addcart() {
      _classCallCheck(this, addcart);
    };

    var confirmP = function confirmP() {
      _classCallCheck(this, confirmP);
    };

    var paymentC = function paymentC() {
      _classCallCheck(this, paymentC);
    };

    var favourite = function favourite() {
      _classCallCheck(this, favourite);
    };

    var rating = function rating() {
      _classCallCheck(this, rating);
    };
    /***/

  },

  /***/
  "./src/app/service/data.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/service/data.service.ts ***!
    \*****************************************/

  /*! exports provided: DataService */

  /***/
  function srcAppServiceDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var DataService =
    /*#__PURE__*/
    function () {
      function DataService(http, router) {
        _classCallCheck(this, DataService);

        this.http = http;
        this.router = router;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
        this.reqHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
          'Content-type': 'application/json',
          'x-api-key': '12345'
        });
      }

      _createClass(DataService, [{
        key: "logout",
        value: function logout() {
          localStorage.clear();
          this.router.navigate(['/landing']);
        }
      }, {
        key: "getcategories",
        value: function getcategories() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            "Content-type": "application/json",
            "x-api-key": "12345"
          });
          return this.http.get(this.baseUrl + "get_categories", {
            headers: headers
          });
        }
      }, {
        key: "slide",
        value: function slide() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            "Content-type": "application/json",
            "x-api-key": "12345"
          });
          return this.http.get(this.baseUrl + "get_sliders", {
            headers: headers
          });
        }
      }, {
        key: "sendOtp",
        value: function sendOtp(signupObj) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            "Content-Type": "multipart/form-data",
            "x-api-key": "12345",
            'Cookie': 'TwfCwMpULwigvnBt=28ee93fad659fc49111db562d7a6b026'
          });
          var sendOtp = "sendOtp";
          return this.http.post(this.baseUrl + sendOtp, signupObj, {
            headers: headers
          });
        }
      }, {
        key: "register",
        value: function register(verifySignupObj) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            "Content-Type": "multipart/form-data",
            "x-api-key": "12345"
          });
          var verifySignupotp = "register";
          return this.http.post(this.baseUrl + verifySignupotp, verifySignupObj, {
            headers: headers
          });
        }
      }, {
        key: "sendLoginOtp",
        value: function sendLoginOtp(loginObj) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            "Content-Type": "multipart/form-data",
            "x-api-key": "12345",
            'Cookie': "TwfCwMpULwigvnBt=28ee93fad659fc49111db562d7a6b026"
          });
          var sendOtp = "sendOtp";
          return this.http.post(this.baseUrl + sendOtp, loginObj, {
            headers: headers
          });
        }
      }, {
        key: "login",
        value: function login(verifyLoginObj) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            "Content-Type": "multipart/form-data",
            "x-api-key": "12345"
          });
          var verifyLoginotp = "login_otp";
          return this.http.post(this.baseUrl + verifyLoginotp, verifyLoginObj, {
            headers: headers
          });
        }
      }, {
        key: "getBestSellers",
        value: function getBestSellers() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            "Content-type": "application/json",
            "x-api-key": "12345"
          });
          return this.http.get(this.baseUrl + "get_best_sellers", {
            headers: headers
          });
        }
      }, {
        key: "getBestSellers1",
        value: function getBestSellers1(id) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            "Content-type": "application/json",
            "x-api-key": "12345"
          });
          return this.http.get(this.baseUrl + "get_best_sellers?user_id=" + id, {
            headers: headers
          });
        }
      }, {
        key: "getProducts",
        value: function getProducts(slug) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            "Content-type": "application/json",
            "x-api-key": "12345"
          });
          return this.http.get(this.baseUrl + "category_products?slug=" + slug, {
            headers: headers
          });
        }
      }, {
        key: "getProducts1",
        value: function getProducts1(slug, id) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            "Content-type": "application/json",
            "x-api-key": "12345"
          });
          return this.http.get(this.baseUrl + "category_products?slug=" + slug + '&' + "user_id=" + id, {
            headers: headers
          });
        }
      }, {
        key: "getProductsbyId",
        value: function getProductsbyId(slug) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            "Content-type": "application/json",
            "x-api-key": "12345"
          });
          return this.http.get(this.baseUrl + "products_details?slug=" + slug, {
            headers: headers
          }); // return this.http.get(this.baseUrl + "product?slug=" + slug, {headers:headers});
        }
      }, {
        key: "getUserProfile",
        value: function getUserProfile(id) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            "Content-type": "application/json",
            "x-api-key": "12345"
          });
          return this.http.get(this.baseUrl + "user_profile?user_id=" + id, {
            headers: headers
          });
        }
      }, {
        key: "getUserAddress",
        value: function getUserAddress(id) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            "Content-type": "application/json",
            "x-api-key": "12345"
          });
          return this.http.get(this.baseUrl + "user_address?user_id=" + id, {
            headers: headers
          });
        }
      }, {
        key: "getCartDetails",
        value: function getCartDetails(id) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            "Content-type": "application/json",
            "x-api-key": "12345"
          });
          return this.http.get(this.baseUrl + "cart_details?user_id=" + id, {
            headers: headers
          });
        }
      }, {
        key: "deleteCartItems",
        value: function deleteCartItems(id, prodid) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            "Content-type": "application/json",
            "x-api-key": "12345"
          });
          return this.http.get(this.baseUrl + "delete_item?user_id=" + id + '&' + "product_id=" + prodid, {
            headers: headers
          });
        }
      }, {
        key: "getRecommended",
        value: function getRecommended() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            "Content-type": "application/json",
            "x-api-key": "12345"
          });
          return this.http.get(this.baseUrl + "get_recommended_products", {
            headers: headers
          });
        }
      }, {
        key: "getRecommended1",
        value: function getRecommended1(id) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            "Content-type": "application/json",
            "x-api-key": "12345"
          });
          return this.http.get(this.baseUrl + "get_recommended_products?user_id=" + id, {
            headers: headers
          });
        }
      }, {
        key: "getFavourites",
        value: function getFavourites(id) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            "Content-type": "application/json",
            "x-api-key": "12345"
          });
          return this.http.get(this.baseUrl + "favourites_details?user_id=" + id, {
            headers: headers
          });
        }
      }, {
        key: "getOrders",
        value: function getOrders(id) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            "Content-type": "application/json",
            "x-api-key": "12345"
          });
          return this.http.get(this.baseUrl + "user_orders?user_id=" + id, {
            headers: headers
          });
        }
      }, {
        key: "getOrderDetailsByID",
        value: function getOrderDetailsByID(id) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            "Content-type": "application/json",
            "x-api-key": "12345"
          });
          return this.http.get(this.baseUrl + "user_order_products?order_id=" + id, {
            headers: headers
          });
        }
      }, {
        key: "search",
        value: function search(_search) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            "Content-type": "application/json",
            "x-api-key": "12345"
          });
          return this.http.get(this.baseUrl + "search_products?search=" + _search, {
            headers: headers
          });
        }
      }]);

      return DataService;
    }();

    DataService.ɵfac = function DataService_Factory(t) {
      return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DataService,
      factory: DataService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      baseUrl: "http://reachveltest.com/fruitcity_admin/api/Home/",
      apiUrl: "http://reachveltest.com/fruitcity_admin/api/"
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! F:\New folder\final\final_frootcity_fe\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map