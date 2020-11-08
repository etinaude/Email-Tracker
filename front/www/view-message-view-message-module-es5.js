(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-message-view-message-module"], {
    /***/
    "C8U0":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view-message/view-message.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function C8U0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons>\n      <ion-back-button [text]=\"getBackButtonText()\" defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" *ngIf=\"message\">\n  <ion-item>\n    <ion-icon name=\"person-circle\" color=\"primary\"></ion-icon>\n    <ion-label class=\"ion-text-wrap\">\n      <h2>\n        {{ message.fromName }}\n        <span class=\"date\">\n          <ion-note>{{ message.date }}</ion-note>\n        </span>\n      </h2>\n      <h3>To: <ion-note>Me</ion-note></h3>\n    </ion-label>\n  </ion-item>\n  \n  <div class=\"ion-padding\">\n    <h1>{{ message.subject }}</h1>\n    <p>\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n    </p>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "Dig8":
    /*!*****************************************************!*\
      !*** ./src/app/view-message/view-message.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function Dig8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-item {\n  --inner-padding-end: 0;\n  --background: transparent;\n}\n\nion-label {\n  margin-top: 12px;\n  margin-bottom: 12px;\n}\n\nion-item h2 {\n  font-weight: 600;\n}\n\nion-item .date {\n  float: right;\n  align-items: center;\n  display: flex;\n}\n\nion-item ion-icon {\n  font-size: 42px;\n  margin-right: 8px;\n}\n\nion-item ion-note {\n  font-size: 15px;\n  margin-right: 12px;\n  font-weight: normal;\n}\n\nh1 {\n  margin: 0;\n  font-weight: bold;\n  font-size: 22px;\n}\n\np {\n  line-height: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1tZXNzYWdlL3ZpZXctbWVzc2FnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctbWVzc2FnZS92aWV3LW1lc3NhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0ge1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5pb24tbGFiZWwge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG5pb24taXRlbSBoMiB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbmlvbi1pdGVtIC5kYXRlIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG5pb24taXRlbSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogNDJweDtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbmlvbi1pdGVtIGlvbi1ub3RlIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbmgxIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuXG5wIHtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG59Il19 */";
      /***/
    },

    /***/
    "EnSQ":
    /*!******************************************!*\
      !*** ./src/app/services/data.service.ts ***!
      \******************************************/

    /*! exports provided: DataService */

    /***/
    function EnSQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataService", function () {
        return DataService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DataService = /*#__PURE__*/function () {
        function DataService() {
          _classCallCheck(this, DataService);

          this.messages = [{
            fromName: 'Matt Chorsey',
            subject: 'New event: Trip to Vegas',
            date: '9:32 AM',
            id: 0,
            read: false
          }, {
            fromName: 'Lauren Ruthford',
            subject: 'Long time no chat',
            date: '6:12 AM',
            id: 1,
            read: false
          }, {
            fromName: 'Jordan Firth',
            subject: 'Report Results',
            date: '4:55 AM',
            id: 2,
            read: false
          }, {
            fromName: 'Bill Thomas',
            subject: 'The situation',
            date: 'Yesterday',
            id: 3,
            read: false
          }, {
            fromName: 'Joanne Pollan',
            subject: 'Updated invitation: Swim lessons',
            date: 'Yesterday',
            id: 4,
            read: false
          }, {
            fromName: 'Andrea Cornerston',
            subject: 'Last minute ask',
            date: 'Yesterday',
            id: 5,
            read: false
          }, {
            fromName: 'Moe Chamont',
            subject: 'Family Calendar - Version 1',
            date: 'Last Week',
            id: 6,
            read: false
          }, {
            fromName: 'Kelly Richardson',
            subject: 'Placeholder Headhots',
            date: 'Last Week',
            id: 7,
            read: false
          }];
        }

        _createClass(DataService, [{
          key: "getMessages",
          value: function getMessages() {
            return this.messages;
          }
        }, {
          key: "getMessageById",
          value: function getMessageById(id) {
            return this.messages[id];
          }
        }]);

        return DataService;
      }();

      DataService.ctorParameters = function () {
        return [];
      };

      DataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], DataService);
      /***/
    },

    /***/
    "SeWC":
    /*!*************************************************************!*\
      !*** ./src/app/view-message/view-message-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: ViewMessagePageRoutingModule */

    /***/
    function SeWC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewMessagePageRoutingModule", function () {
        return ViewMessagePageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _view_message_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./view-message.page */
      "T9zv");

      var routes = [{
        path: '',
        component: _view_message_page__WEBPACK_IMPORTED_MODULE_3__["ViewMessagePage"]
      }];

      var ViewMessagePageRoutingModule = function ViewMessagePageRoutingModule() {
        _classCallCheck(this, ViewMessagePageRoutingModule);
      };

      ViewMessagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ViewMessagePageRoutingModule);
      /***/
    },

    /***/
    "T9zv":
    /*!***************************************************!*\
      !*** ./src/app/view-message/view-message.page.ts ***!
      \***************************************************/

    /*! exports provided: ViewMessagePage */

    /***/
    function T9zv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewMessagePage", function () {
        return ViewMessagePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_view_message_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./view-message.page.html */
      "C8U0");
      /* harmony import */


      var _view_message_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./view-message.page.scss */
      "Dig8");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/data.service */
      "EnSQ");

      var ViewMessagePage = /*#__PURE__*/function () {
        function ViewMessagePage(data, activatedRoute) {
          _classCallCheck(this, ViewMessagePage);

          this.data = data;
          this.activatedRoute = activatedRoute;
        }

        _createClass(ViewMessagePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var id = this.activatedRoute.snapshot.paramMap.get('id');
            this.message = this.data.getMessageById(parseInt(id, 10));
          }
        }, {
          key: "getBackButtonText",
          value: function getBackButtonText() {
            var win = window;
            var mode = win && win.Ionic && win.Ionic.mode;
            return mode === 'ios' ? 'Inbox' : '';
          }
        }]);

        return ViewMessagePage;
      }();

      ViewMessagePage.ctorParameters = function () {
        return [{
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }];
      };

      ViewMessagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-view-message',
        template: _raw_loader_view_message_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_view_message_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ViewMessagePage);
      /***/
    },

    /***/
    "eTuU":
    /*!*****************************************************!*\
      !*** ./src/app/view-message/view-message.module.ts ***!
      \*****************************************************/

    /*! exports provided: ViewMessagePageModule */

    /***/
    function eTuU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewMessagePageModule", function () {
        return ViewMessagePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _view_message_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./view-message.page */
      "T9zv");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _view_message_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./view-message-routing.module */
      "SeWC");

      var ViewMessagePageModule = function ViewMessagePageModule() {
        _classCallCheck(this, ViewMessagePageModule);
      };

      ViewMessagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _view_message_routing_module__WEBPACK_IMPORTED_MODULE_6__["ViewMessagePageRoutingModule"]],
        declarations: [_view_message_page__WEBPACK_IMPORTED_MODULE_4__["ViewMessagePage"]]
      })], ViewMessagePageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=view-message-view-message-module-es5.js.map