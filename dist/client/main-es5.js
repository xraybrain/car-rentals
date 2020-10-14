function _toConsumableArray(arr) {
  return (
    _arrayWithoutHoles(arr) ||
    _iterableToArray(arr) ||
    _unsupportedIterableToArray(arr) ||
    _nonIterableSpread()
  );
}

function _nonIterableSpread() {
  throw new TypeError(
    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
    return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["main"],
  {
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
            e.code = "MODULE_NOT_FOUND";
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
    "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
      /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

      /*! no static exports found */

      /***/
      function node_modulesMomentLocaleSyncRecursive$(
        module,
        exports,
        __webpack_require__
      ) {
        var map = {
          "./af": "./node_modules/moment/locale/af.js",
          "./af.js": "./node_modules/moment/locale/af.js",
          "./ar": "./node_modules/moment/locale/ar.js",
          "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
          "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
          "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
          "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
          "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
          "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
          "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
          "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
          "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
          "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
          "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
          "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
          "./ar.js": "./node_modules/moment/locale/ar.js",
          "./az": "./node_modules/moment/locale/az.js",
          "./az.js": "./node_modules/moment/locale/az.js",
          "./be": "./node_modules/moment/locale/be.js",
          "./be.js": "./node_modules/moment/locale/be.js",
          "./bg": "./node_modules/moment/locale/bg.js",
          "./bg.js": "./node_modules/moment/locale/bg.js",
          "./bm": "./node_modules/moment/locale/bm.js",
          "./bm.js": "./node_modules/moment/locale/bm.js",
          "./bn": "./node_modules/moment/locale/bn.js",
          "./bn-bd": "./node_modules/moment/locale/bn-bd.js",
          "./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
          "./bn.js": "./node_modules/moment/locale/bn.js",
          "./bo": "./node_modules/moment/locale/bo.js",
          "./bo.js": "./node_modules/moment/locale/bo.js",
          "./br": "./node_modules/moment/locale/br.js",
          "./br.js": "./node_modules/moment/locale/br.js",
          "./bs": "./node_modules/moment/locale/bs.js",
          "./bs.js": "./node_modules/moment/locale/bs.js",
          "./ca": "./node_modules/moment/locale/ca.js",
          "./ca.js": "./node_modules/moment/locale/ca.js",
          "./cs": "./node_modules/moment/locale/cs.js",
          "./cs.js": "./node_modules/moment/locale/cs.js",
          "./cv": "./node_modules/moment/locale/cv.js",
          "./cv.js": "./node_modules/moment/locale/cv.js",
          "./cy": "./node_modules/moment/locale/cy.js",
          "./cy.js": "./node_modules/moment/locale/cy.js",
          "./da": "./node_modules/moment/locale/da.js",
          "./da.js": "./node_modules/moment/locale/da.js",
          "./de": "./node_modules/moment/locale/de.js",
          "./de-at": "./node_modules/moment/locale/de-at.js",
          "./de-at.js": "./node_modules/moment/locale/de-at.js",
          "./de-ch": "./node_modules/moment/locale/de-ch.js",
          "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
          "./de.js": "./node_modules/moment/locale/de.js",
          "./dv": "./node_modules/moment/locale/dv.js",
          "./dv.js": "./node_modules/moment/locale/dv.js",
          "./el": "./node_modules/moment/locale/el.js",
          "./el.js": "./node_modules/moment/locale/el.js",
          "./en-au": "./node_modules/moment/locale/en-au.js",
          "./en-au.js": "./node_modules/moment/locale/en-au.js",
          "./en-ca": "./node_modules/moment/locale/en-ca.js",
          "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
          "./en-gb": "./node_modules/moment/locale/en-gb.js",
          "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
          "./en-ie": "./node_modules/moment/locale/en-ie.js",
          "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
          "./en-il": "./node_modules/moment/locale/en-il.js",
          "./en-il.js": "./node_modules/moment/locale/en-il.js",
          "./en-in": "./node_modules/moment/locale/en-in.js",
          "./en-in.js": "./node_modules/moment/locale/en-in.js",
          "./en-nz": "./node_modules/moment/locale/en-nz.js",
          "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
          "./en-sg": "./node_modules/moment/locale/en-sg.js",
          "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
          "./eo": "./node_modules/moment/locale/eo.js",
          "./eo.js": "./node_modules/moment/locale/eo.js",
          "./es": "./node_modules/moment/locale/es.js",
          "./es-do": "./node_modules/moment/locale/es-do.js",
          "./es-do.js": "./node_modules/moment/locale/es-do.js",
          "./es-mx": "./node_modules/moment/locale/es-mx.js",
          "./es-mx.js": "./node_modules/moment/locale/es-mx.js",
          "./es-us": "./node_modules/moment/locale/es-us.js",
          "./es-us.js": "./node_modules/moment/locale/es-us.js",
          "./es.js": "./node_modules/moment/locale/es.js",
          "./et": "./node_modules/moment/locale/et.js",
          "./et.js": "./node_modules/moment/locale/et.js",
          "./eu": "./node_modules/moment/locale/eu.js",
          "./eu.js": "./node_modules/moment/locale/eu.js",
          "./fa": "./node_modules/moment/locale/fa.js",
          "./fa.js": "./node_modules/moment/locale/fa.js",
          "./fi": "./node_modules/moment/locale/fi.js",
          "./fi.js": "./node_modules/moment/locale/fi.js",
          "./fil": "./node_modules/moment/locale/fil.js",
          "./fil.js": "./node_modules/moment/locale/fil.js",
          "./fo": "./node_modules/moment/locale/fo.js",
          "./fo.js": "./node_modules/moment/locale/fo.js",
          "./fr": "./node_modules/moment/locale/fr.js",
          "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
          "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
          "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
          "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
          "./fr.js": "./node_modules/moment/locale/fr.js",
          "./fy": "./node_modules/moment/locale/fy.js",
          "./fy.js": "./node_modules/moment/locale/fy.js",
          "./ga": "./node_modules/moment/locale/ga.js",
          "./ga.js": "./node_modules/moment/locale/ga.js",
          "./gd": "./node_modules/moment/locale/gd.js",
          "./gd.js": "./node_modules/moment/locale/gd.js",
          "./gl": "./node_modules/moment/locale/gl.js",
          "./gl.js": "./node_modules/moment/locale/gl.js",
          "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
          "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
          "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
          "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
          "./gu": "./node_modules/moment/locale/gu.js",
          "./gu.js": "./node_modules/moment/locale/gu.js",
          "./he": "./node_modules/moment/locale/he.js",
          "./he.js": "./node_modules/moment/locale/he.js",
          "./hi": "./node_modules/moment/locale/hi.js",
          "./hi.js": "./node_modules/moment/locale/hi.js",
          "./hr": "./node_modules/moment/locale/hr.js",
          "./hr.js": "./node_modules/moment/locale/hr.js",
          "./hu": "./node_modules/moment/locale/hu.js",
          "./hu.js": "./node_modules/moment/locale/hu.js",
          "./hy-am": "./node_modules/moment/locale/hy-am.js",
          "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
          "./id": "./node_modules/moment/locale/id.js",
          "./id.js": "./node_modules/moment/locale/id.js",
          "./is": "./node_modules/moment/locale/is.js",
          "./is.js": "./node_modules/moment/locale/is.js",
          "./it": "./node_modules/moment/locale/it.js",
          "./it-ch": "./node_modules/moment/locale/it-ch.js",
          "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
          "./it.js": "./node_modules/moment/locale/it.js",
          "./ja": "./node_modules/moment/locale/ja.js",
          "./ja.js": "./node_modules/moment/locale/ja.js",
          "./jv": "./node_modules/moment/locale/jv.js",
          "./jv.js": "./node_modules/moment/locale/jv.js",
          "./ka": "./node_modules/moment/locale/ka.js",
          "./ka.js": "./node_modules/moment/locale/ka.js",
          "./kk": "./node_modules/moment/locale/kk.js",
          "./kk.js": "./node_modules/moment/locale/kk.js",
          "./km": "./node_modules/moment/locale/km.js",
          "./km.js": "./node_modules/moment/locale/km.js",
          "./kn": "./node_modules/moment/locale/kn.js",
          "./kn.js": "./node_modules/moment/locale/kn.js",
          "./ko": "./node_modules/moment/locale/ko.js",
          "./ko.js": "./node_modules/moment/locale/ko.js",
          "./ku": "./node_modules/moment/locale/ku.js",
          "./ku.js": "./node_modules/moment/locale/ku.js",
          "./ky": "./node_modules/moment/locale/ky.js",
          "./ky.js": "./node_modules/moment/locale/ky.js",
          "./lb": "./node_modules/moment/locale/lb.js",
          "./lb.js": "./node_modules/moment/locale/lb.js",
          "./lo": "./node_modules/moment/locale/lo.js",
          "./lo.js": "./node_modules/moment/locale/lo.js",
          "./lt": "./node_modules/moment/locale/lt.js",
          "./lt.js": "./node_modules/moment/locale/lt.js",
          "./lv": "./node_modules/moment/locale/lv.js",
          "./lv.js": "./node_modules/moment/locale/lv.js",
          "./me": "./node_modules/moment/locale/me.js",
          "./me.js": "./node_modules/moment/locale/me.js",
          "./mi": "./node_modules/moment/locale/mi.js",
          "./mi.js": "./node_modules/moment/locale/mi.js",
          "./mk": "./node_modules/moment/locale/mk.js",
          "./mk.js": "./node_modules/moment/locale/mk.js",
          "./ml": "./node_modules/moment/locale/ml.js",
          "./ml.js": "./node_modules/moment/locale/ml.js",
          "./mn": "./node_modules/moment/locale/mn.js",
          "./mn.js": "./node_modules/moment/locale/mn.js",
          "./mr": "./node_modules/moment/locale/mr.js",
          "./mr.js": "./node_modules/moment/locale/mr.js",
          "./ms": "./node_modules/moment/locale/ms.js",
          "./ms-my": "./node_modules/moment/locale/ms-my.js",
          "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
          "./ms.js": "./node_modules/moment/locale/ms.js",
          "./mt": "./node_modules/moment/locale/mt.js",
          "./mt.js": "./node_modules/moment/locale/mt.js",
          "./my": "./node_modules/moment/locale/my.js",
          "./my.js": "./node_modules/moment/locale/my.js",
          "./nb": "./node_modules/moment/locale/nb.js",
          "./nb.js": "./node_modules/moment/locale/nb.js",
          "./ne": "./node_modules/moment/locale/ne.js",
          "./ne.js": "./node_modules/moment/locale/ne.js",
          "./nl": "./node_modules/moment/locale/nl.js",
          "./nl-be": "./node_modules/moment/locale/nl-be.js",
          "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
          "./nl.js": "./node_modules/moment/locale/nl.js",
          "./nn": "./node_modules/moment/locale/nn.js",
          "./nn.js": "./node_modules/moment/locale/nn.js",
          "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
          "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
          "./pa-in": "./node_modules/moment/locale/pa-in.js",
          "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
          "./pl": "./node_modules/moment/locale/pl.js",
          "./pl.js": "./node_modules/moment/locale/pl.js",
          "./pt": "./node_modules/moment/locale/pt.js",
          "./pt-br": "./node_modules/moment/locale/pt-br.js",
          "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
          "./pt.js": "./node_modules/moment/locale/pt.js",
          "./ro": "./node_modules/moment/locale/ro.js",
          "./ro.js": "./node_modules/moment/locale/ro.js",
          "./ru": "./node_modules/moment/locale/ru.js",
          "./ru.js": "./node_modules/moment/locale/ru.js",
          "./sd": "./node_modules/moment/locale/sd.js",
          "./sd.js": "./node_modules/moment/locale/sd.js",
          "./se": "./node_modules/moment/locale/se.js",
          "./se.js": "./node_modules/moment/locale/se.js",
          "./si": "./node_modules/moment/locale/si.js",
          "./si.js": "./node_modules/moment/locale/si.js",
          "./sk": "./node_modules/moment/locale/sk.js",
          "./sk.js": "./node_modules/moment/locale/sk.js",
          "./sl": "./node_modules/moment/locale/sl.js",
          "./sl.js": "./node_modules/moment/locale/sl.js",
          "./sq": "./node_modules/moment/locale/sq.js",
          "./sq.js": "./node_modules/moment/locale/sq.js",
          "./sr": "./node_modules/moment/locale/sr.js",
          "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
          "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
          "./sr.js": "./node_modules/moment/locale/sr.js",
          "./ss": "./node_modules/moment/locale/ss.js",
          "./ss.js": "./node_modules/moment/locale/ss.js",
          "./sv": "./node_modules/moment/locale/sv.js",
          "./sv.js": "./node_modules/moment/locale/sv.js",
          "./sw": "./node_modules/moment/locale/sw.js",
          "./sw.js": "./node_modules/moment/locale/sw.js",
          "./ta": "./node_modules/moment/locale/ta.js",
          "./ta.js": "./node_modules/moment/locale/ta.js",
          "./te": "./node_modules/moment/locale/te.js",
          "./te.js": "./node_modules/moment/locale/te.js",
          "./tet": "./node_modules/moment/locale/tet.js",
          "./tet.js": "./node_modules/moment/locale/tet.js",
          "./tg": "./node_modules/moment/locale/tg.js",
          "./tg.js": "./node_modules/moment/locale/tg.js",
          "./th": "./node_modules/moment/locale/th.js",
          "./th.js": "./node_modules/moment/locale/th.js",
          "./tk": "./node_modules/moment/locale/tk.js",
          "./tk.js": "./node_modules/moment/locale/tk.js",
          "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
          "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
          "./tlh": "./node_modules/moment/locale/tlh.js",
          "./tlh.js": "./node_modules/moment/locale/tlh.js",
          "./tr": "./node_modules/moment/locale/tr.js",
          "./tr.js": "./node_modules/moment/locale/tr.js",
          "./tzl": "./node_modules/moment/locale/tzl.js",
          "./tzl.js": "./node_modules/moment/locale/tzl.js",
          "./tzm": "./node_modules/moment/locale/tzm.js",
          "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
          "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
          "./tzm.js": "./node_modules/moment/locale/tzm.js",
          "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
          "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
          "./uk": "./node_modules/moment/locale/uk.js",
          "./uk.js": "./node_modules/moment/locale/uk.js",
          "./ur": "./node_modules/moment/locale/ur.js",
          "./ur.js": "./node_modules/moment/locale/ur.js",
          "./uz": "./node_modules/moment/locale/uz.js",
          "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
          "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
          "./uz.js": "./node_modules/moment/locale/uz.js",
          "./vi": "./node_modules/moment/locale/vi.js",
          "./vi.js": "./node_modules/moment/locale/vi.js",
          "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
          "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
          "./yo": "./node_modules/moment/locale/yo.js",
          "./yo.js": "./node_modules/moment/locale/yo.js",
          "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
          "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
          "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
          "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
          "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
          "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
          "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
          "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js",
        };

        function webpackContext(req) {
          var id = webpackContextResolve(req);
          return __webpack_require__(id);
        }

        function webpackContextResolve(req) {
          if (!__webpack_require__.o(map, req)) {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = "MODULE_NOT_FOUND";
            throw e;
          }

          return map[req];
        }

        webpackContext.keys = function webpackContextKeys() {
          return Object.keys(map);
        };

        webpackContext.resolve = webpackContextResolve;
        module.exports = webpackContext;
        webpackContext.id =
          "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
        /***/
      },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-change-password-modal/admin-change-password-modal.component.html":
      /*!************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-change-password-modal/admin-change-password-modal.component.html ***!
    \************************************************************************************************************************************/

      /*! exports provided: default */

      /***/
      function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminChangePasswordModalAdminChangePasswordModalComponentHtml(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */

        __webpack_exports__["default"] =
          '<div class="modal-header">\n  <h6 class="modal-title">\n    <fa name="lock text-danger fa-2x"></fa> Change Password\n  </h6>\n</div>\n<div class="modal-body">\n  <div *ngIf="isContactingServer" class="text-center mb-2">\n    <fa name="spinner fa-spin fa-2x"></fa>\n  </div>\n  <form #changePasswordForm="ngForm" (ngSubmit)="onChangePassword()">\n    <div class="form-group">\n      <input type="password" name="password" class="form-control" placeholder="Password"\n        [(ngModel)]="userPassword.password" required />\n    </div>\n    <div class="form-group">\n      <input type="password" name="confirmpwd" class="form-control" placeholder="Confirm Password"\n        [(ngModel)]="userPassword.confirmPwd" required />\n      <div *ngIf="userPassword.password !==userPassword.confirmPwd" class="text-danger text-center">\n        <small>password mismatch</small>\n      </div>\n    </div>\n    <div class="form-group">\n      <button class="btn btn-block btn-outline-warning"\n        [disabled]="changePasswordForm.invalid || (userPassword.password !== userPassword.confirmPwd)">\n        Change password\n        <fa name="key ml-2"></fa>\n      </button>\n    </div>\n  </form>\n</div>\n<div class="modal-footer">\n  <button class="btn btn-danger" (click)="activeModal.close(\'cancel\')">\n    Cancel\n    <fa name="times-circle ml-1"></fa>\n  </button>\n</div>\n';
        /***/
      },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-customers/admin-customers.component.html":
      /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-customers/admin-customers.component.html ***!
    \************************************************************************************************************/

      /*! exports provided: default */

      /***/
      function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminCustomersAdminCustomersComponentHtml(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */

        __webpack_exports__["default"] =
          '<div class="container-fluid mt-2">\n  <nav aria-label="breadcrumb">\n    <ol class="breadcrumb bg-white">\n      <li class="breadcrumb-item">\n        <a href="#" class="text-secondary">\n          <fa name="tachometer mr-1"></fa>\n          dashboard\n        </a>\n      </li>\n      <li class="breadcrumb-item active">\n        <a href="#" class="text-danger">\n          <fa name="users mr-1"></fa>\n          customers\n        </a>\n      </li>\n    </ol>\n  </nav>\n</div>\n<div class="container my-3">\n  <div class="card">\n    <div class="card-header">\n      <form #search="ngForm" (ngSubmit)="onSearch()">\n        <div class="form-group input-group">\n          <input type="text" class="form-control" placeholder="Search..." name="searchquery"\n            [(ngModel)]="searchquery" />\n          <span class="input-group-prepend">\n            <button class="input-group-text" type="submit">\n              <fa name="search mr-1"></fa>\n              Search\n            </button>\n          </span>\n        </div>\n      </form>\n    </div>\n    <div class="card-body scrollable">\n      <table class="table table-striped table-hover text-muted">\n        <thead>\n          <tr>\n            <th>#</th>\n            <th>Name</th>\n            <th>Email Address</th>\n            <th>Phone</th>\n            <th>\n              More\n              <fa name="chevron-down ml-1"></fa>\n            </th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor="let customer of customers; index as i;">\n            <td>{{i+1}}. </td>\n            <td>{{customer.name}}</td>\n            <td>\n              <a [href]="\'mailto:\' + customer.emailAddress">{{customer.emailAddress}}</a>\n            </td>\n            <td>\n              <a [href]="\'tel:\' + customer.phone">{{customer.phone}}</a>\n            </td>\n            <td>\n              <button class="btn btn-sm btn-outline-info" (click)="onViewProfile(customer)">\n                <fa name="user"></fa>\n                profile\n              </button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div class="card-footer">\n      <div class="d-flex justify-content-between">\n        <button class="btn btn-info" (click)="loadCustomers(pager.page+1)" *ngIf="hasMore && pager.page !== 0">\n          Load more\n        </button>\n\n        <span *ngIf="customers">\n          &laquo; showing 1 to {{customers.length}} &raquo;\n        </span>\n      </div>\n    </div>\n  </div>\n</div>\n';
        /***/
      },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/admin-dashboard.component.html":
      /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/admin-dashboard.component.html ***!
    \************************************************************************************************************/

      /*! exports provided: default */

      /***/
      function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminDashboardAdminDashboardComponentHtml(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */

        __webpack_exports__["default"] =
          '<div class="container my-2" *ngIf="summary">\n  <div class="row">\n    <div class="col-10 col-sm-6 col-md-4 mx-auto mb-2">\n      <div class="card shadow bg-danger text-white">\n        <div class="card-body">\n          <div class="d-flex justify-content-between align-items-center">\n            <fa name="money fa-4x"></fa>\n            <h4>\n              &#8358;\n              {{summary.totalPayments | number}}\n            </h4>\n          </div>\n        </div>\n        <div class="card-footer">\n          <h5 class="text-center">Payments</h5>\n        </div>\n      </div>\n    </div>\n    <div class="col-10 col-sm-6 col-md-4 mx-auto mb-2">\n      <div class="card shadow bg-danger text-white">\n        <div class="card-body">\n          <div class="d-flex justify-content-between align-items-center">\n            <fa name="car fa-4x"></fa>\n            <h4>\n              {{summary.totalVehicles | number}}\n            </h4>\n          </div>\n        </div>\n        <div class="card-footer">\n          <h5 class="text-center">Cars</h5>\n        </div>\n      </div>\n    </div>\n    <div class="col-10 col-sm-6 col-md-4 mx-auto mb-2">\n      <div class="card shadow bg-danger text-white">\n        <div class="card-body">\n          <div class="d-flex justify-content-between align-items-center">\n            <fa name="users fa-4x"></fa>\n            <h4>\n              {{summary.totalCustomers | number}}\n            </h4>\n          </div>\n        </div>\n        <div class="card-footer">\n          <h5 class="text-center">Customers</h5>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class="row mt-3">\n    <div class="col-12">\n      <div class="card bg-light">\n        <div class="card-header bg-light">\n          <h4 class="text-muted">\n            <fa name="tasks text-danger mr-2"></fa>\n            Activities\n          </h4>\n        </div>\n        <div class="card-body scrollable">\n          <div [class]="\'alert \'+\'alert-\' + activity.type" *ngFor="let activity of activities">\n            <a href="javascript: void(0)" class="close" data-dismiss="alert" (click)="onDeleteActivity(activity.id)">\n              <fa name="trash text-danger"></fa>\n            </a>\n            <div class="d-flex align-items-center">\n              <ng-container *ngIf="activity.type === \'info\'; else elseTemplate">\n                <fa name="info-circle mr-2"></fa>\n              </ng-container>\n              <ng-template #elseTemplate>\n                <fa name="lightbulb-o mr-2"></fa>\n              </ng-template>\n              <span>{{activity.content}}</span>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n';
        /***/
      },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-edit-email-modal/admin-edit-email-modal.component.html":
      /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-edit-email-modal/admin-edit-email-modal.component.html ***!
    \**************************************************************************************************************************/

      /*! exports provided: default */

      /***/
      function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminEditEmailModalAdminEditEmailModalComponentHtml(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */

        __webpack_exports__["default"] =
          '<div class="modal-header">\n  <h6 class="modal-title">\n    <fa name="envelope text-danger fa-2x"></fa> Edit Email\n  </h6>\n</div>\n<div class="modal-body">\n  <div *ngIf="isContactingServer" class="text-center mb-2">\n    <fa name="spinner fa-spin fa-2x"></fa>\n  </div>\n  <form #editEmailForm="ngForm" (ngSubmit)="onUpdateEmail()">\n    <div class="form-group">\n      <input type="email" name="emailAddress" class="form-control" placeholder="example@mail.com"\n        [(ngModel)]="admin.emailAddress" email required />\n    </div>\n    <div class="form-group">\n      <button class="btn btn-block btn-outline-warning" type="submit" [disabled]="editEmailForm.invalid">\n        Update\n        <fa name="upload ml-2"></fa>\n      </button>\n    </div>\n  </form>\n</div>\n<div class="modal-footer">\n  <button class="btn btn-danger" (click)="activeModal.close()">\n    Cancel\n    <fa name="times-circle ml-1"></fa>\n  </button>\n</div>\n';
        /***/
      },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-hires/admin-hires.component.html":
      /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-hires/admin-hires.component.html ***!
    \****************************************************************************************************/

      /*! exports provided: default */

      /***/
      function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminHiresAdminHiresComponentHtml(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */

        __webpack_exports__["default"] =
          '<div class="container-fluid mt-2">\n  <nav aria-label="breadcrumb">\n    <ol class="breadcrumb bg-white">\n      <li class="breadcrumb-item">\n        <a href="#" class="text-secondary">\n          <fa name="tachometer mr-1"></fa>\n          dashboard\n        </a>\n      </li>\n      <li class="breadcrumb-item active">\n        <a href="#" class="text-danger">\n          <fa name="ticket mr-1"></fa>\n          rentals\n        </a>\n      </li>\n    </ol>\n  </nav>\n</div>\n<div class="container my-3">\n  <div class="card">\n    <div class="card-header">\n      <form #search="ngForm" (ngSubmit)="onSearch()">\n        <div class="form-group input-group">\n          <input type="text" class="form-control" placeholder="Search by (rental no | status)" name="searchquery"\n            [(ngModel)]="searchquery" />\n          <span class="input-group-prepend">\n            <button class="input-group-text" type="submit">\n              <fa name="search mr-1"></fa>\n              Search\n            </button>\n          </span>\n        </div>\n      </form>\n    </div>\n    <div class="card-body scrollable scrollable-md">\n      <table class="table table-striped table-hover text-muted">\n        <thead>\n          <tr>\n            <th>#</th>\n            <th>Rental No</th>\n            <th>Customer</th>\n            <th>Car</th>\n            <th>Hire Date</th>\n            <th>Return Date</th>\n            <th>Status</th>\n            <th>\n              More\n              <fa name="chevron-down ml-1"></fa>\n            </th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor="let hire of hires; index as i;">\n            <td>{{i+1}}. </td>\n            <td>{{hire.id}}</td>\n            <td>{{hire.Customer.name}}</td>\n            <td>{{hire.Vehicle.name}}</td>\n            <td>{{hire.hiredAt | date}}</td>\n            <td>{{hire.returnedAt | date}}</td>\n            <td>{{hire.status}}</td>\n            <td>\n              <angular4-paystack [email]="hire.Customer.emailAddress"\n                [amount]="hire.Vehicle.hireCost * calculateDiff(hire.returnedAt) * 100" [ref]="reference"\n                [channels]="[\'card\',\'bank\']" [class]="\'btn btn-sm btn-warning\'" (close)="paymentCancel()"\n                (callback)="paymentDone($event)"\n                *ngIf="calculateDiff(hire.returnedAt) > 0 && hire.status !== \'complete\'" (click)="onSelectHire(hire)">\n                Pay\n                <fa name="money"></fa>\n              </angular4-paystack>\n\n              <a href="javascript: void(0)" class="btn btn-sm btn-warning"\n                *ngIf="hire.status !== \'complete\' && calculateDiff(hire.returnedAt) <= 0"\n                (click)="onCompleteHire(hire.id)">\n                complete\n              </a>\n              <a href="javascript: void(0)" class="btn btn-sm btn-secondary" *ngIf="hire.status == \'complete\'" disabled>\n                completed\n              </a>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div class="card-footer d-flex justify-content-between">\n      <button class="btn btn-info" (click)="loadHires(pager.page+1)" *ngIf="hasMore && pager.page !== 0">\n        Load more\n      </button>\n\n      <span *ngIf="hires && hires.length > 0">\n        &laquo; showing 1 to {{hires.length}} &raquo;\n      </span>\n    </div>\n  </div>\n</div>\n';
        /***/
      },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-transactions/admin-transactions.component.html":
      /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-transactions/admin-transactions.component.html ***!
    \******************************************************************************************************************/

      /*! exports provided: default */

      /***/
      function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminTransactionsAdminTransactionsComponentHtml(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */

        __webpack_exports__["default"] =
          '<div class="container-fluid mt-2">\n  <nav aria-label="breadcrumb">\n    <ol class="breadcrumb bg-white">\n      <li class="breadcrumb-item">\n        <a href="#" class="text-secondary">\n          <fa name="tachometer mr-1"></fa>\n          dashboard\n        </a>\n      </li>\n      <li class="breadcrumb-item active">\n        <a href="#" class="text-danger">\n          <fa name="history mr-1"></fa>\n          transactions\n        </a>\n      </li>\n    </ol>\n  </nav>\n</div>\n<div class="container my-3">\n  <div class="card">\n    <div class="card-header">\n      <form #search="ngForm" (ngSubmit)="onSearch()">\n        <div class="form-group input-group">\n          <input type="text" class="form-control" placeholder="Search by payment reference" name="searchquery"\n            [(ngModel)]="searchquery" />\n          <span class="input-group-prepend">\n            <button class="input-group-text" type="submit">\n              <fa name="search mr-1"></fa>\n              Search\n            </button>\n          </span>\n        </div>\n      </form>\n    </div>\n    <div class="card-body scrollable scrollable-md">\n      <table class="table table-striped table-hover text-muted">\n        <thead>\n          <tr>\n            <th>#</th>\n            <th>Customer</th>\n            <th>PaymentRef</th>\n            <th>Hire No</th>\n            <th>Amount Paid</th>\n            <th>\n              Status\n              <fa name="bell ml-1"></fa>\n            </th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor="let transaction of transactions; index as i;">\n            <td>{{i+1}}. </td>\n            <td>\n              {{transaction.Hire.Customer.name}}\n            </td>\n            <td>\n              {{transaction.paymentRef}}\n            </td>\n            <td>\n              {{transaction.Hire.id}}\n            </td>\n            <td>\n              {{transaction.amountPaid}}\n            </td>\n            <td>\n              {{transaction.status}}\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div class="card-footer d-flex justify-content-between">\n      <button class="btn btn-info" (click)="loadTransactions(pager.page+1)" *ngIf="hasMore">\n        Load more\n      </button>\n\n      <span *ngIf="transactions && transactions.length > 0">\n        &laquo; showing 1 to {{transactions.length}} &raquo;\n      </span>\n    </div>\n  </div>\n</div>\n';
        /***/
      },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-vehicle-modal/admin-vehicle-modal.component.html":
      /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-vehicle-modal/admin-vehicle-modal.component.html ***!
    \********************************************************************************************************************/

      /*! exports provided: default */

      /***/
      function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminVehicleModalAdminVehicleModalComponentHtml(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */

        __webpack_exports__["default"] =
          '<div class="modal-header">\n  <h5 class="modal-title">\n    {{title}}\n  </h5>\n</div>\n<div class="modal-body">\n  <div class="card">\n    <div class="card-header">\n      <h5 class="card-title">\n        Car Image\n      </h5>\n    </div>\n    <div class="card-body text-center">\n      <img *ngIf="selectedFile && selectedFile.src && !selectedFile.hasSizeError" [src]="selectedFile.src"\n        alt="car image" class="img-fluid img-thumbnail img-full">\n      <img *ngIf="vehicle && vehicle.image" [src]="vehicle.image" alt="car image"\n        class="img-fluid img-thumbnail img-full" [hidden]="selectedFile">\n      <div class="alert alert-danger" *ngIf="selectedFile && selectedFile.hasSizeError">\n        <a href="javascript: void(0)" class="close" data-dismiss="alert">\n          <fa name="times"></fa>\n        </a>\n        <p>\n          Your file size is {{selectedFile.fileSize}}kb and the allowed file size is between\n          {{selectedFile.minFileSize}}kb to {{selectedFile.maxFileSize}}kb\n        </p>\n      </div>\n    </div>\n    <div class="card-footer text-center">\n      <input type="file" #fileInput class="d-none" (change)="onFileChanged(fileInput)">\n      <button class="btn btn-outline-warning mr-2" (click)="fileInput.click()">\n        Select Car Image\n      </button>\n    </div>\n  </div>\n\n  <form #vehicleForm="ngForm" class="mt-2">\n    <input type="hidden" name="image" [(ngModel)]="vehicle.image" required>\n    <div class="form-group">\n      <input type="text" class="form-control" name="name" placeholder="Car name" [(ngModel)]="vehicle.name" required\n        min="5">\n    </div>\n    <div class="form-group">\n      <input type="number" class="form-control" name="capacity" placeholder="Capacity" [(ngModel)]="vehicle.capacity"\n        required>\n    </div>\n    <div class="form-group">\n      <input type="number" class="form-control" name="hireCost" placeholder="Hire Cost" [(ngModel)]="vehicle.hireCost"\n        required>\n    </div>\n    <div class="form-group">\n      <label for="vehicleType">Car Type</label>\n      <select name="vehicleTypeId" class="form-control" id="vehicleType" [(ngModel)]="vehicle.vehicleTypeId" required>\n        <option [value]="vehicleType.id" *ngFor="let vehicleType of vehicleTypes;">\n          {{vehicleType.name}}\n        </option>\n      </select>\n    </div>\n    <div class="form-group">\n      <label for="manufacturer">Manufacturer</label>\n      <select name="vehicleManufacturerId" class="form-control" id="manufacturer"\n        [(ngModel)]="vehicle.vehicleManufacturerId" required>\n        <option [value]="manufacturer.id" *ngFor="let manufacturer of manufacturers;">\n          {{manufacturer.name}}\n        </option>\n      </select>\n    </div>\n    <div class="form-group">\n      <button class="btn btn-block btn-success" (click)="onSave()" [disabled]="vehicleForm.invalid"\n        *ngIf="isNewVehicle">\n        Save\n        <fa name="save"></fa>\n      </button>\n      <button class="btn btn-block btn-outline-success" (click)="onUpdate()" [disabled]="vehicleForm.invalid"\n        *ngIf="!isNewVehicle">\n        Update\n        <fa name="save"></fa>\n      </button>\n    </div>\n  </form>\n</div>\n<div class="modal-footer">\n  <button class="btn btn-sm btn-danger" (click)="activeModal.dismiss(\'cancel\')">\n    Cancel\n    <fa name="times-circle"></fa>\n  </button>\n</div>\n';
        /***/
      },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-vehicles/admin-vehicles.component.html":
      /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-vehicles/admin-vehicles.component.html ***!
    \**********************************************************************************************************/

      /*! exports provided: default */

      /***/
      function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminVehiclesAdminVehiclesComponentHtml(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */

        __webpack_exports__["default"] =
          '<div class="container-fluid mt-2">\n  <div class="row">\n    <div class="col-12 col-sm-10">\n      <nav aria-label="breadcrumb">\n        <ol class="breadcrumb bg-white">\n          <li class="breadcrumb-item">\n            <a href="#" class="text-secondary">\n              <fa name="tachometer mr-1"></fa>\n              dashboard\n            </a>\n          </li>\n          <li class="breadcrumb-item active">\n            <a href="#" class="text-danger">\n              <fa name="car mr-1"></fa>\n              cars\n            </a>\n          </li>\n        </ol>\n      </nav>\n    </div>\n    <div class="col-12 col-sm-2 text-right">\n      <button class="btn btn-circle btn-outline-danger shadow" (click)="openModal()">\n        <fa name="plus-circle"></fa>\n        Add\n      </button>\n    </div>\n  </div>\n</div>\n<div class="container my-3">\n\n  <div class="card">\n    <div class="card-header">\n      <form #search="ngForm" (ngSubmit)="onSearch()">\n        <div class="form-group input-group">\n          <input type="text" class="form-control" placeholder="Search..." name="searchquery"\n            [(ngModel)]="searchquery" />\n          <span class="input-group-prepend">\n            <button class="input-group-text" type="submit">\n              <fa name="search mr-1"></fa>\n              Search\n            </button>\n          </span>\n        </div>\n      </form>\n    </div>\n    <div class="card-body scrollable">\n      <table class="table table-striped table-hover text-muted">\n        <thead>\n          <tr>\n            <th>#</th>\n            <th>Name</th>\n            <th>Type</th>\n            <th>Hire Cost</th>\n            <th>Capacity</th>\n            <th>\n              More\n              <fa name="chevron-down ml-1"></fa>\n            </th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor="let vehicle of vehicles; index as i;">\n            <td>{{i+1}}. </td>\n            <td>{{vehicle.name}}</td>\n            <td>{{vehicle.VehicleType.name}}</td>\n            <td>\n              {{vehicle.hireCost}}\n            </td>\n            <td>\n              {{vehicle.capacity}}\n            </td>\n            <td>\n              <button class="btn btn-sm btn-info" data-toggle="dropdown">\n                more\n                <fa name="chevron-down ml-1"></fa>\n              </button>\n              <div class="dropdown-menu dropdown-menu-right">\n                <a href="javascript: void(0)" class="dropdown-item" (click)="onViewVehicleProfile(vehicle)">\n                  <fa name="info-circle mr-2"></fa>\n                  view car details\n                </a>\n                <a href="javascript: void(0)" class="dropdown-item" (click)="openModal(vehicle)">\n                  <fa name="edit mr-2"></fa>\n                  edit car info\n                </a>\n                <a href="javascript: void(0)" class="dropdown-item">\n                  <fa name="trash mr-2"></fa>\n                  delete car\n                </a>\n              </div>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div class="card-footer">\n      <div class="d-flex justify-content-between">\n        <button class="btn btn-info" *ngIf="hasMore && pager.page !== 0 " (click)="loadVehicles(pager.page + 1)">\n          Load More\n        </button>\n        <span *ngIf="vehicles">\n          &laquo; showing 1 to {{vehicles.length}} &raquo;\n        </span>\n      </div>\n    </div>\n  </div>\n</div>\n';
        /***/
      },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
      /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

      /*! exports provided: default */

      /***/
      function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */

        __webpack_exports__["default"] =
          '<div class="text-right p-1">\n  <span class="mr-2">\n    <fa name="envelope text-danger"></fa>\n    onlinerental@mail.com\n  </span>\n  <span>\n    <fa name="phone text-danger"></fa>\n    081475785909\n  </span>\n</div>\n<nav class="navbar navbar-expand-lg navbar-dark bg-dark">\n  <a routerLink="/home" class="navbar-brand">\n    Car Rentals\n  </a>\n  <button class="navbar-toggler" data-toggle="collapse" data-target="#top-navbar">\n    <fa name="bars"></fa>\n  </button>\n  <div class="collapse navbar-collapse" id="top-navbar">\n    <ul class="navbar-nav ml-auto">\n      <li class="nav-item px-2" [hidden]="userType==\'Admin\'">\n        <a routerLink="/home" class="nav-link">\n          <fa name="home mr-1 text-danger"></fa>\n          Home\n        </a>\n      </li>\n      <li class="nav-item px-2" [hidden]="userType==\'Admin\'">\n        <a routerLink="/cars" class="nav-link">\n          <fa name="list-alt mr-1 text-danger"></fa>\n          Car Listing\n        </a>\n      </li>\n      <li class="nav-item px-2" [hidden]="userType==\'Admin\'">\n        <a routerLink="/contact/" class="nav-link">\n          <fa name="comment mr-1 text-danger"></fa>\n          Contact Us\n        </a>\n      </li>\n      <li class="nav-item px-2" *ngIf="!userType">\n        <a routerLink="/login" class="nav-link">\n          <fa name="user mr-1 text-danger"></fa>\n          Account\n          <fa name="chevron-down text-danger"></fa>\n        </a>\n      </li>\n\n      <li class="nav-item px-2 dropdown" *ngIf="userType==\'Admin\'">\n        <a href="javascript: void(0)" class="nav-link" data-toggle="dropdown">\n          <fa name="user-circle mr-1 text-danger"></fa>\n          Account\n        </a>\n        <div class="dropdown-menu text-muted bg-dark menu-widget">\n          <a href="javascript: void(0)" class="dropdown-item text-white" (click)=" onEditAdminEmail()">\n            <fa name="edit mr-2"></fa>\n            Edit email address\n          </a>\n          <a href="javascript: void(0)" class="dropdown-item text-white" (click)="onChangeAdminPassword()">\n            <fa name="lock mr-2"></fa>\n            Change password\n          </a>\n        </div>\n      </li>\n\n      <li class="nav-item px-2" *ngIf="userType==\'Admin\'">\n        <a href="javascript: void(0)" class="nav-link" data-toggle="modal" data-target="#admin-dashboard">\n          <fa name="th mr-1 text-danger"></fa>\n          Menu\n        </a>\n      </li>\n\n      <li class="nav-item px-2" *ngIf="userType==\'Customer\'">\n        <a href="javascript: void(0)" class="nav-link" data-toggle="modal" data-target="#customer-dashboard">\n          <fa name="user-circle mr-1 text-danger"></fa>\n          Account\n        </a>\n      </li>\n    </ul>\n  </div>\n</nav>\n<div class="wrapper">\n  <router-outlet></router-outlet>\n</div>\n\n<footer class="bg-light">\n  <p class="text-center">\n    Cars rentals since 2020, all &copy; reserved\n  </p>\n</footer>\n\n<!-- Modal For Admin -->\n<div class="modal fade" id="admin-dashboard">\n  <div class="modal-dialog">\n    <div class="modal-content">\n      <div class="modal-header pb-0">\n        <h5 class="modal-title text-muted">\n          <fa name="th text-danger"></fa>\n          Menu\n        </h5>\n      </div>\n      <div class="modal-body">\n        <div class="container">\n          <div class="row">\n            <div class="col-6 col-sm-4 mb-2 mx-auto">\n              <a routerLink="/admin/dashboard/" class="btn btn-block btn-outline-danger" data-dismiss="modal">\n                <fa name="tachometer fa-2x"></fa>\n                <span class="d-block mt-2">Dashboard</span>\n              </a>\n            </div>\n            <div class="col-6 col-sm-4 mb-2 mx-auto">\n              <a routerLink="/admin/customers/" class="btn btn-block btn-outline-danger" data-dismiss="modal">\n                <fa name="users fa-2x"></fa>\n                <span class="d-block mt-2">Customers</span>\n              </a>\n            </div>\n            <div class="col-6 col-sm-4 mb-2 mx-auto">\n              <a routerLink="/admin/cars/" class="btn btn-block btn-outline-danger" data-dismiss="modal">\n                <fa name="car fa-2x"></fa>\n                <span class="d-block mt-2">Cars</span>\n              </a>\n            </div>\n            <div class="col-6 col-sm-4 mb-2 mx-auto">\n              <a routerLink="/admin/rentals/" class="btn btn-block btn-outline-danger" data-dismiss="modal">\n                <fa name="ticket fa-2x"></fa>\n                <span class="d-block mt-2">Car rentals</span>\n              </a>\n            </div>\n            <div class="col-6 col-sm-4 mb-2 mx-auto">\n              <a routerLink="/admin/transactions/" class="btn btn-block btn-outline-danger" data-dismiss="modal">\n                <fa name="history fa-2x"></fa>\n                <span class="d-block mt-2">Transactions</span>\n              </a>\n            </div>\n\n            <div class="col-6 col-sm-4 mb-2 mx-auto">\n              <a href="javascript: void(0)" class="btn btn-block btn-outline-danger" data-dismiss="modal"\n                (click)="logOut()">\n                <fa name="sign-out fa-2x"></fa>\n                <span class="d-block mt-2">Logout</span>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<!-- Modal For Customer -->\n<div class="modal fade" id="customer-dashboard">\n  <div class="modal-dialog">\n    <div class="modal-content">\n      <div class="modal-header pb-0">\n        <h5 class="modal-title text-muted">\n          <fa name="th text-danger"></fa>\n          Menu\n        </h5>\n      </div>\n      <div class="modal-body">\n        <div class="container">\n          <div class="row">\n            <div class="col-6 col-sm-4 mb-2 mx-auto">\n              <a routerLink="/customer/profile" class="btn btn-block btn-outline-danger" data-dismiss="modal">\n                <fa name="id-card fa-2x"></fa>\n                <span class="d-block mt-2">Profile</span>\n              </a>\n            </div>\n            <div class="col-6 col-sm-4 mb-2 mx-auto">\n              <a routerLink="/customer/hires/" class="btn btn-block btn-outline-danger" data-dismiss="modal">\n                <fa name="list-alt fa-2x"></fa>\n                <span class="d-block mt-2">Rentals</span>\n              </a>\n            </div>\n            <div class="col-6 col-sm-4 mb-2 mx-auto">\n              <a href="javascript: void(0)" class="btn btn-block btn-outline-danger" data-dismiss="modal"\n                (click)="logOut()">\n                <fa name="sign-out fa-2x"></fa>\n                <span class="d-block mt-2">Logout</span>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n';
        /***/
      },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.component.html":
      /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.component.html ***!
    \****************************************************************************************/

      /*! exports provided: default */

      /***/
      function node_modulesRawLoaderDistCjsJsSrcAppCheckoutCheckoutComponentHtml(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */

        __webpack_exports__["default"] =
          '<div *ngIf="isContactingServer" class="text-center my-5">\n  <fa name="spinner fa-spin fa-3x"></fa>\n</div>\n\n<div class="container my-3" [hidden]="isContactingServer" *ngIf="currentUser">\n  <div class="card">\n    <div class="card-body" *ngIf="vehicle">\n      <div class="row align-items-center">\n        <div class="col-11 col-sm-6 col-md-4 mx-auto">\n          <h6 class="text-muted border-bottom">{{vehicle.name}}</h6>\n          <img [src]="vehicle.image" alt="card image" class="img-fluid img-thumbnail shadow d-block mx-auto">\n          <p class="mt-2 text-center">\n            <span class="badge badge-danger">\n              {{vehicle.status}}\n            </span>\n          </p>\n        </div>\n        <div class="col-11 col-sm-6 col-md-8 mx-auto">\n          <div class="card">\n            <div class="card-body">\n              <div class="border-bottom mb-2 pb-2">\n                <span class="font-weight-bold">Type: </span>\n                {{vehicle.VehicleType.name}}\n              </div>\n              <div class="border-bottom mb-2 pb-2">\n                <span class="font-weight-bold">Manufacturer: </span>\n                {{vehicle.VehicleManufacturer.name}}\n              </div>\n              <div class="border-bottom mb-2 pb-2">\n                <span class="font-weight-bold">Capacity: </span>\n                {{vehicle.capacity}}\n              </div>\n              <div class="border-bottom mb-2 pb-2">\n                <span class="font-weight-bold">Cost per day: </span>\n                NGN {{vehicle.hireCost}}\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class="card mt-3">\n    <div class="card-body">\n      <div class="alert alert-warning">\n        <fa name="lightbulb-o mr-2"></fa>\n        To process your checkout, click on the calendar icon\n        <fa name="calendar mr-1"></fa>\n        in Hire End date then click on\n        make payment.\n      </div>\n      <form #hireForm="ngForm">\n        <div class="row">\n          <div class="col-12 col-md-6">\n            <div class="form-group">\n              <label for="hired-at">\n                Hire Start Date\n              </label>\n              <input type="text" name="returnedAt" placeholder="yyyy-mm-dd" class="form-control"\n                [value]="hireData.hiredAt" readonly />\n            </div>\n          </div>\n          <div class="col-12 col-md-6">\n            <div class="form-group">\n              <label for="returned-at">\n                Hire End Date\n              </label>\n              <div class="input-group">\n                <input type="text" name="returnedAt" placeholder="yyyy-mm-dd" class="form-control"\n                  [(ngModel)]="hireData.returnedAt" ngbDatepicker #d="ngbDatepicker" readonly\n                  (ngModelChange)="onDateChange()" id="returned-at" />\n                <span class="input-group-append">\n                  <button class="input-group-text" (click)="d.toggle()">\n                    <fa name="calendar"></fa>\n                  </button>\n                </span>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class="row">\n          <div class="col-12 col-md-6">\n            <div class="form-group">\n              <label for="hired-at">\n                Total Days\n              </label>\n              <input type="number" name="totalDays" placeholder="Total Days" class="form-control" [value]="totalDays"\n                readonly />\n            </div>\n          </div>\n          <div class="col-12 col-md-6">\n            <div class="form-group">\n              <label for="hired-at">\n                Amount Charged\n              </label>\n              <input type="number" name="amountPaid" placeholder="Amount Charged" class="form-control"\n                [value]="hireData.amountPaid" readonly />\n            </div>\n          </div>\n        </div>\n        <div class="form-group">\n          <angular4-paystack [email]="currentUser.emailAddress" [amount]="hireData.amountPaid*100" [ref]="reference"\n            [channels]="[\'card\',\'bank\']" [class]="\'btn btn-block btn-success\'" (close)="paymentCancel()"\n            (callback)="paymentDone($event)">\n            Make Payment\n            <fa name="money"></fa>\n          </angular4-paystack>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n';
        /***/
      },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us/contact-us.component.html":
      /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us/contact-us.component.html ***!
    \********************************************************************************************/

      /*! exports provided: default */

      /***/
      function node_modulesRawLoaderDistCjsJsSrcAppContactUsContactUsComponentHtml(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */

        __webpack_exports__["default"] =
          '<div class="container-my-3">\n  <div class="col-12 col-sm-10 col-md-8 mx-auto">\n    <div class="text-center">\n      <fa name="comments fa-4x text-danger"></fa>\n      <p>\n        We would\n        <fa name="heart text-danger"></fa>\n        to hear from you.\n      </p>\n    </div>\n    <div class="card">\n      <div class="card-body">\n        <div *ngIf="isContactingServer" class="text-center mb-2">\n          <fa name="spinner fa-spin fa-2x"></fa>\n        </div>\n        <form #contactForm="ngForm" (ngSubmit)="onSendMail()">\n          <div class="form-group">\n            <input type="text" placeholder="Full Name" class="form-control" required minlength="3" name="name"\n              [(ngModel)]="composer.name" />\n          </div>\n          <div class="form-group">\n            <input type="email" placeholder="example@mail.com" name="emailAddress" class="form-control" email required\n              [(ngModel)]="composer.emailAddress" />\n          </div>\n          <div class="form-group">\n            <textarea name="message" rows="5" class="form-control" minlength="5" placeholder="Message"\n              [(ngModel)]="composer.message"></textarea>\n          </div>\n          <div class="form-group">\n            <button class="btn btn-block btn-success" [disabled]="contactForm.invalid">\n              Send\n              <fa name="paper-plane-o"></fa>\n            </button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n';
        /***/
      },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/customer-profile/customer-profile.component.html":
      /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer-profile/customer-profile.component.html ***!
    \********************************************************************************************************/

      /*! exports provided: default */

      /***/
      function node_modulesRawLoaderDistCjsJsSrcAppCustomerProfileCustomerProfileComponentHtml(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */

        __webpack_exports__["default"] =
          '<div class="modal-header">\n  <h5 class="modal-title">\n    Customer Profile\n  </h5>\n</div>\n<div class="modal-body">\n  <div class="card">\n    <div class="card-body p-0">\n      <p class="text-center mb-2">\n        <fa name="user-circle text-secondary fa-5x"></fa>\n      </p>\n      <p class="border-bottom text-center mb-2">\n        {{customer.name}}\n      </p>\n      <p class="border-bottom text-center mb-2">\n        <fa name="mars-double text-danger mr-1"></fa>\n        {{customer.gender}}\n      </p>\n      <p class="border-bottom text-center mb-2">\n        <fa name="envelope text-danger mr-2"></fa>\n        {{customer.emailAddress}}\n      </p>\n      <p class="border-bottom text-center mb-2">\n        <fa name="phone text-danger mr-2"></fa>\n        {{customer.phone}}\n      </p>\n      <p class="border-bottom text-center mb-2">\n        <fa name="map-marker text-danger mr-2"></fa>\n        {{customer.address}}\n      </p>\n    </div>\n  </div>\n</div>\n<div class="modal-footer">\n  <button class="btn btn-warning" (click)="activeModal.close()">\n    Close\n  </button>\n</div>\n';
        /***/
      },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/customer-account/customer-account.component.html":
      /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer/customer-account/customer-account.component.html ***!
    \*****************************************************************************************************************/

      /*! exports provided: default */

      /***/
      function node_modulesRawLoaderDistCjsJsSrcAppCustomerCustomerAccountCustomerAccountComponentHtml(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */

        __webpack_exports__["default"] =
          '<div class="container my-3">\n  <div class="row">\n    <div class="col-12 col-sm-11 col-md-7 mb-2 mx-auto">\n      <div class="card shadow">\n        <div class="card-header">\n          <div class="d-flex">\n            <h5 class="">\n              <fa name="id-card text-danger mr-2"></fa>\n              Profile\n            </h5>\n          </div>\n        </div>\n        <div class="card-body">\n          <div class="text-center mb-2" *ngIf="isContactingServer">\n            <fa name="spinner fa-spin fa-2x"></fa>\n          </div>\n          <form #customerForm="ngForm" (ngSubmit)="onUpdate()">\n            <div class="form-group">\n              <input type="text" placeholder="Full Name" class="form-control" name="name" [(ngModel)]="userProfile.name"\n                required autocomplete="off" />\n            </div>\n            <div class="form-group">\n              <textarea name="address" rows="2" class="form-control" placeholder="Residential Address"\n                [(ngModel)]="userProfile.address" required maxlength="300" autocomplete="off"></textarea>\n            </div>\n            <div class="form-group">\n              <input type="tel" placeholder="Phone" class="form-control" name="phone" [(ngModel)]="userProfile.phone"\n                required max="13" maxlength="13" autocomplete="off">\n            </div>\n            <div class="form-group">\n              <input type="email" placeholder="Email Address" class="form-control" name="emailAddress"\n                [value]="userProfile.emailAddress" required autocomplete="off" readonly>\n            </div>\n            <div class="form-group">\n              <select name="gender" class="form-control" name="gender" [(ngModel)]="userProfile.gender" required>\n                <option value="male">Male</option>\n                <option value="female">Female</option>\n              </select>\n            </div>\n            <div class="form-group">\n              <button class="btn btn-block btn-outline-dark" type="submit" [disabled]="customerForm.invalid">\n                Update Account\n                <fa name="upload text-danger ml-2"></fa>\n              </button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n    <div class="col-12 col-sm-11 col-md-5 mb-2 mx-auto">\n      <div class="card shadow">\n        <div class="card-header">\n          <h5 class="card-title">\n            <fa name="lock text-danger mr-2"></fa>\n            Change Pasword\n          </h5>\n        </div>\n        <div class="card-body">\n          <div class="text-center mb-2" *ngIf="isResetingPassword">\n            <fa name="spinner fa-spin fa-2x"></fa>\n          </div>\n          <form #changePasswordForm="ngForm" (ngSubmit)="onChangePassword()">\n            <div class="form-group">\n              <input type="password" placeholder="Password" class="form-control" name="password"\n                [(ngModel)]="userPassword.password" required>\n            </div>\n            <div class="form-group">\n              <input type="password" placeholder="Confirm Password" class="form-control" name="password"\n                [(ngModel)]="userPassword.confirmPwd" required>\n              <div *ngIf="userPassword.password !== userPassword.confirmPwd" class="text-center text-danger">\n                mismatch\n              </div>\n            </div>\n            <div class="form-group">\n              <button class="btn btn-block btn-warning"\n                [disabled]="changePasswordForm.invalid || userPassword.password !== userPassword.confirmPwd">\n                Change\n                <fa name="key ml-2"></fa>\n              </button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n';
        /***/
      },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/customer-hires/customer-hires.component.html":
      /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer/customer-hires/customer-hires.component.html ***!
    \*************************************************************************************************************/

      /*! exports provided: default */

      /***/
      function node_modulesRawLoaderDistCjsJsSrcAppCustomerCustomerHiresCustomerHiresComponentHtml(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */

        __webpack_exports__["default"] =
          '<div class="container my-3">\n  <div class="card">\n    <div class="card-header">\n      <form #search="ngForm">\n        <div class="form-group input-group">\n          <input type="text" class="form-control" placeholder="Search..." />\n          <span class="input-group-prepend">\n            <button class="input-group-text">\n              <fa name="search mr-1"></fa>\n              Search\n            </button>\n          </span>\n        </div>\n      </form>\n    </div>\n    <div class="card-body scrollable scrollable-md">\n      <table class="table table-striped table-hover text-muted">\n        <thead>\n          <tr>\n            <th>#</th>\n            <th>Rental No</th>\n            <th>Rent Date</th>\n            <th>Return Date</th>\n            <th>Rented Car</th>\n            <th>Rent Status</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor="let hire of hires; index as i;">\n            <td>{{i+1}}. </td>\n            <td>{{hire.id}}</td>\n            <td>{{hire.hiredAt | date}}</td>\n            <td>{{hire.returnedAt | date}}</td>\n            <td>\n              <button class="btn btn-sm btn-outline-info" (click)="onViewVehicleProfile(hire.Vehicle)">\n                {{hire.Vehicle.name}}\n              </button>\n            </td>\n            <td>\n              <ng-container *ngIf="calculateDiff(hire.returnedAt) > 0 && hire.status !==\'complete\'; else elseTemplate">\n                expired\n              </ng-container>\n              <ng-template #elseTemplate>\n                {{hire.status}}\n              </ng-template>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div class="card-footer d-flex justify-content-between">\n      <button class="btn btn-info" (click)="loadHires(Number(pager.page)+1)" *ngIf="hasMore">\n        Load more\n      </button>\n\n      <span *ngIf="hires && hires.length > 0">\n        &laquo; showing 1 to {{hires.length}} &raquo;\n      </span>\n    </div>\n  </div>\n</div>\n';
        /***/
      },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/homepage.component.html":
      /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/homepage.component.html ***!
    \****************************************************************************************/

      /*! exports provided: default */

      /***/
      function node_modulesRawLoaderDistCjsJsSrcAppHomepageHomepageComponentHtml(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */

        __webpack_exports__["default"] =
          '<div class="container-fluid">\n  <div class="row">\n    <div class="col-12 p-0">\n      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">\n        <ol class="carousel-indicators">\n          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>\n          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>\n        </ol>\n        <div class="carousel-inner">\n          <div class="carousel-item active">\n            <img class="d-block w-100 banner-img" src="assets/img/banner1.jpg" alt="intro pics">\n            <div class="carousel-caption d-none d-md-block">\n              <h5>Cars Rental</h5>\n              <p>We provide you with best quality cars.</p>\n            </div>\n          </div>\n          <div class="carousel-item">\n            <img class="d-block w-100 banner-img" src="assets/img/banner2.jpg" alt="Second slide">\n            <div class="carousel-caption d-none d-md-block">\n              <h5>Ready for Crusing</h5>\n              <p>All our cars are 100% ready to take you anywhere.</p>\n            </div>\n          </div>\n        </div>\n        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">\n          <span class="carousel-control-prev-icon" aria-hidden="true"></span>\n          <span class="sr-only">Previous</span>\n        </a>\n        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">\n          <span class="carousel-control-next-icon" aria-hidden="true"></span>\n          <span class="sr-only">Next</span>\n        </a>\n      </div>\n    </div>\n  </div>\n  <div class="row my-3">\n    <div class="col-12 text-center">\n      <h4>Our Web Services</h4>\n      <p class="text-muted">\n        We render the following services on this our web portal.\n      </p>\n    </div>\n    <div class="col-12 col-sm-4 mx-auto mb-3">\n      <div class="card shadow">\n        <div class="card-header bg-white pb-1">\n          <h5 class="card-title text-center">\n            <span class="d-block">\n              <fa name="money fa-2x text-danger"></fa>\n            </span>\n            Web Payment\n          </h5>\n        </div>\n        <div class="card-body">\n          <p class="text-center">All rental transactions are processed on this web portal. So all you need is an\n            internet access and your\n            ATM card.</p>\n        </div>\n      </div>\n    </div>\n    <div class="col-12 col-sm-4 mx-auto mb-3">\n      <div class="card shadow">\n        <div class="card-header bg-white pb-1">\n          <h5 class="card-title text-center">\n            <span class="d-block">\n              <fa name="map-marker fa-2x text-danger"></fa>\n            </span>\n            Global\n          </h5>\n        </div>\n        <div class="card-body">\n          <p class="text-center">\n            With our web platform, you don\'t need a physical location to rent our cars, rent a car and we will bring it\n            to your doorstep\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class="col-12 col-sm-4 mx-auto mb-3">\n      <div class="card shadow">\n        <div class="card-header bg-white pb-1">\n          <h5 class="card-title text-center">\n            <span class="d-block">\n              <fa name="clock-o fa-2x text-danger"></fa>\n            </span>\n            24/7 at your service\n          </h5>\n        </div>\n        <div class="card-body">\n          <p class="text-center">\n            We are here to serve you better we render a 24/7 service. Our priority is to always be at your service.\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n';
        /***/
      },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
      /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

      /*! exports provided: default */

      /***/
      function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */

        __webpack_exports__["default"] =
          '<div class="container my-3">\n  <div class="col-12 col-sm-10 col-md-8 col-lg-6 mx-auto">\n    <div class="card">\n      <div class="card-header">\n        <div class="d-flex align-items-center text-danger">\n          <fa name="lock fa-2x mr-2"></fa>\n          <h5 class="card-title">\n            Account Login\n          </h5>\n        </div>\n      </div>\n      <div class="card-body">\n        <div class="text-center mb-2" *ngIf="isContactingServer">\n          <fa name="spinner fa-spin fa-2x"></fa>\n        </div>\n        <form #loginForm="ngForm" (ngSubmit)="onLogin()">\n          <div class="form-group">\n            <label for="user-type">Login As:</label>\n            <select name="userType" class="form-control custom-select" id="user-type" [(ngModel)]="loginCred.userType">\n              <option value="customer">Customer</option>\n              <option value="admin">Admin</option>\n            </select>\n          </div>\n          <div class="form-group">\n            <input type="email" name="emailAddress" placeholder="Email Address" class="form-control" autocomplete="off"\n              [(ngModel)]="loginCred.emailAddress" email required>\n          </div>\n          <div class="form-group">\n            <input type="password" name="password" placeholder="Password" class="form-control" autocomplete="off"\n              [(ngModel)]="loginCred.password" required>\n          </div>\n          <div class="form-group">\n            <button class="btn btn-block btn-outline-dark" [disabled]="loginForm.invalid">\n              Login\n              <fa name="sign-in ml-2"></fa>\n            </button>\n          </div>\n        </form>\n\n        <p class="text-center">Don\'t have an account?\n          <a routerLink="/signup/">Sign Up</a>\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n';
        /***/
      },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html":
      /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html ***!
    \************************************************************************************/

      /*! exports provided: default */

      /***/
      function node_modulesRawLoaderDistCjsJsSrcAppSignupSignupComponentHtml(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */

        __webpack_exports__["default"] =
          '<div class="container my-3">\n  <div class="col-12 col-sm-10 col-md-8 mx-auto">\n    <div class="card">\n      <div class="card-header bg-white">\n        <div class="d-flex align-items-center text-danger">\n          <fa name="user-plus fa-2x mr-2"></fa>\n          <h5 class="card-title">\n            Create Account\n          </h5>\n        </div>\n      </div>\n      <div class="card-body">\n        <div class="text-center mb-2" [hidden]="!isContactingServer">\n          <fa name="spinner fa-spin fa-2x"></fa>\n        </div>\n        <form #signUpForm="ngForm" (ngSubmit)="onSubmit(signUpForm.value)" novalidate>\n          <div class="form-group">\n            <input type="text" placeholder="Full Name" class="form-control" name="name" [(ngModel)]="userProfile.name"\n              required autocomplete="off" />\n          </div>\n          <div class="form-group">\n            <textarea name="address" rows="2" class="form-control" placeholder="Residential Address"\n              [(ngModel)]="userProfile.address" required maxlength="300" autocomplete="off"></textarea>\n          </div>\n          <div class="form-group">\n            <input type="tel" placeholder="Phone" class="form-control" name="phone" [(ngModel)]="userProfile.phone" required max="13" maxlength="13" autocomplete="off">\n          </div>\n          <div class="form-group">\n            <input type="email" placeholder="Email Address" class="form-control" name="emailAddress"\n              [(ngModel)]="userProfile.emailAddress" required autocomplete="off">\n          </div>\n          <div class="form-group">\n            <input type="password" placeholder="Password" class="form-control" name="password"\n              [(ngModel)]="userProfile.password" required>\n          </div>\n          <div class="form-group">\n            <select name="gender" class="form-control" name="gender" [(ngModel)]="userProfile.gender" required>\n              <option value="male">Male</option>\n              <option value="female">Female</option>\n            </select>\n          </div>\n          <div class="form-group">\n            <button class="btn btn-block btn-outline-dark" type="submit" [disabled]="signUpForm.invalid">\n              Create Account\n              <fa name="user-plus"></fa>\n            </button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n';
        /***/
      },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/vehicle-listing/vehicle-listing.component.html":
      /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vehicle-listing/vehicle-listing.component.html ***!
    \******************************************************************************************************/

      /*! exports provided: default */

      /***/
      function node_modulesRawLoaderDistCjsJsSrcAppVehicleListingVehicleListingComponentHtml(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */

        __webpack_exports__["default"] =
          '<div class="container my-3">\n  <div class="col-12 col-sm-10 col-md-8 mx-auto">\n    <form #searchVehicle="ngForm" class="shadow" (ngSubmit)="onSearch()">\n      <div class="form-group input-group">\n        <input type="text" name="searchquery" placeholder="Search..." class="form-control" autocomplete="off"\n          [(ngModel)]="searchquery">\n        <div class="input-group-append">\n          <button type="submit" class="input-group-text">\n            Search\n            <fa name="search ml-2"></fa>\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n\n  <div class="card mt-5 w-100">\n    <div class="card-body">\n      <div class="row mt-2">\n        <div class="col-10 col-sm-6 col-md-4 col-lg-3 mx-auto mb-3" *ngFor="let vehicle of vehicles">\n          <a href="javascript: void(0)" class="text-decoration-none" (click)="onViewVehicleProfile(vehicle)">\n            <div class="card shadow">\n              <img [src]="vehicle.image" alt="car image" class="card-img-top">\n              <div class="card-footer">\n                <h6 class="text-muted text-center">\n                  {{vehicle.name}}\n                </h6>\n              </div>\n            </div>\n          </a>\n        </div>\n      </div>\n      <div *ngIf="isContactingServer" class="text-center mb-2">\n        <fa name="spinner fa-spin fa-2x"></fa>\n      </div>\n    </div>\n    <div class="card-footer text-center bg-white">\n      <button class="btn btn-info" *ngIf="hasMore" (click)="loadVehicles(pager.page+1)">\n        Load More\n      </button>\n    </div>\n  </div>\n\n</div>\n';
        /***/
      },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/vehicle-profile-modal/vehicle-profile-modal.component.html":
      /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vehicle-profile-modal/vehicle-profile-modal.component.html ***!
    \******************************************************************************************************************/

      /*! exports provided: default */

      /***/
      function node_modulesRawLoaderDistCjsJsSrcAppVehicleProfileModalVehicleProfileModalComponentHtml(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */

        __webpack_exports__["default"] =
          '<div class="modal-header pb-0">\n  <h5 class="modal-title" *ngIf="vehicle">\n    {{vehicle.name}}\n  </h5>\n</div>\n<div class="modal-body">\n  <div class="card" *ngIf="vehicle">\n    <img [src]="vehicle.image" alt="car image" class="card-img-top img-md">\n    <div class="card-footer">\n      <p class="border-bottom text-center mb-2">\n        <span class="badge badge-danger">{{vehicle.status}}</span>\n      </p>\n      <p class="border-bottom">\n        <span class="font-weight-bold">Hire Cost per day:</span> {{vehicle.hireCost}}\n      </p>\n      <p class="border-bottom">\n        <span class="font-weight-bold">Capacity:</span> {{vehicle.capacity}}\n      </p>\n      <p class="border-bottom">\n        <span class="font-weight-bold">Car Type:</span> {{vehicle.VehicleType.name}}\n      </p>\n      <p class="border-bottom">\n        <span class="font-weight-bold">Manufacturer:</span> {{vehicle.VehicleManufacturer.name}}\n      </p>\n    </div>\n  </div>\n</div>\n<div class="modal-footer justify-content-between">\n  <a [routerLink]="\'/checkout/\'+vehicle.id+\'/\'+null" class="btn btn-success" (click)="activeModal.dismiss(\'cancel\')"\n    [hidden]="isPreview || vehicle.status !== \'available\'">\n    Hire\n  </a>\n\n  <button class="btn btn-danger" (click)="activeModal.dismiss(\'cancel\')">\n    Cancel\n    <fa name="times-circle"></fa>\n  </button>\n</div>\n';
        /***/
      },

    /***/
    "./node_modules/tslib/tslib.es6.js":
      /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

      /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

      /***/
      function node_modulesTslibTslibEs6Js(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, "__extends", function () {
          return __extends;
        });
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, "__assign", function () {
          return _assign;
        });
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, "__rest", function () {
          return __rest;
        });
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, "__decorate", function () {
          return __decorate;
        });
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, "__param", function () {
          return __param;
        });
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, "__metadata", function () {
          return __metadata;
        });
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
          return __awaiter;
        });
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, "__generator", function () {
          return __generator;
        });
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "__createBinding",
          function () {
            return __createBinding;
          }
        );
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
          return __exportStar;
        });
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, "__values", function () {
          return __values;
        });
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, "__read", function () {
          return __read;
        });
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, "__spread", function () {
          return __spread;
        });
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "__spreadArrays",
          function () {
            return __spreadArrays;
          }
        );
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, "__await", function () {
          return __await;
        });
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "__asyncGenerator",
          function () {
            return __asyncGenerator;
          }
        );
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "__asyncDelegator",
          function () {
            return __asyncDelegator;
          }
        );
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "__asyncValues",
          function () {
            return __asyncValues;
          }
        );
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "__makeTemplateObject",
          function () {
            return __makeTemplateObject;
          }
        );
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, "__importStar", function () {
          return __importStar;
        });
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "__importDefault",
          function () {
            return __importDefault;
          }
        );
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "__classPrivateFieldGet",
          function () {
            return __classPrivateFieldGet;
          }
        );
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "__classPrivateFieldSet",
          function () {
            return __classPrivateFieldSet;
          }
        );
        /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

        /* global Reflect, Promise */

        var _extendStatics = function extendStatics(d, b) {
          _extendStatics =
            Object.setPrototypeOf ||
            ({
              __proto__: [],
            } instanceof Array &&
              function (d, b) {
                d.__proto__ = b;
              }) ||
            function (d, b) {
              for (var p in b) {
                if (b.hasOwnProperty(p)) d[p] = b[p];
              }
            };

          return _extendStatics(d, b);
        };

        function __extends(d, b) {
          _extendStatics(d, b);

          function __() {
            this.constructor = d;
          }

          d.prototype =
            b === null
              ? Object.create(b)
              : ((__.prototype = b.prototype), new __());
        }

        var _assign = function __assign() {
          _assign =
            Object.assign ||
            function __assign(t) {
              for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];

                for (var p in s) {
                  if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }
              }

              return t;
            };

          return _assign.apply(this, arguments);
        };

        function __rest(s, e) {
          var t = {};

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
              t[p] = s[p];
          }

          if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (
              var i = 0, p = Object.getOwnPropertySymbols(s);
              i < p.length;
              i++
            ) {
              if (
                e.indexOf(p[i]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(s, p[i])
              )
                t[p[i]] = s[p[i]];
            }
          return t;
        }

        function __decorate(decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === "object" &&
            typeof Reflect.decorate === "function"
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--) {
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
            }
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        }

        function __param(paramIndex, decorator) {
          return function (target, key) {
            decorator(target, key, paramIndex);
          };
        }

        function __metadata(metadataKey, metadataValue) {
          if (
            typeof Reflect === "object" &&
            typeof Reflect.metadata === "function"
          )
            return Reflect.metadata(metadataKey, metadataValue);
        }

        function __awaiter(thisArg, _arguments, P, generator) {
          function adopt(value) {
            return value instanceof P
              ? value
              : new P(function (resolve) {
                  resolve(value);
                });
          }

          return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
              try {
                step(generator.next(value));
              } catch (e) {
                reject(e);
              }
            }

            function rejected(value) {
              try {
                step(generator["throw"](value));
              } catch (e) {
                reject(e);
              }
            }

            function step(result) {
              result.done
                ? resolve(result.value)
                : adopt(result.value).then(fulfilled, rejected);
            }

            step(
              (generator = generator.apply(thisArg, _arguments || [])).next()
            );
          });
        }

        function __generator(thisArg, body) {
          var _ = {
              label: 0,
              sent: function sent() {
                if (t[0] & 1) throw t[1];
                return t[1];
              },
              trys: [],
              ops: [],
            },
            f,
            y,
            t,
            g;
          return (
            (g = {
              next: verb(0),
              throw: verb(1),
              return: verb(2),
            }),
            typeof Symbol === "function" &&
              (g[Symbol.iterator] = function () {
                return this;
              }),
            g
          );

          function verb(n) {
            return function (v) {
              return step([n, v]);
            };
          }

          function step(op) {
            if (f) throw new TypeError("Generator is already executing.");

            while (_) {
              try {
                if (
                  ((f = 1),
                  y &&
                    (t =
                      op[0] & 2
                        ? y["return"]
                        : op[0]
                        ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                        : y.next) &&
                    !(t = t.call(y, op[1])).done)
                )
                  return t;
                if (((y = 0), t)) op = [op[0] & 2, t.value];

                switch (op[0]) {
                  case 0:
                  case 1:
                    t = op;
                    break;

                  case 4:
                    _.label++;
                    return {
                      value: op[1],
                      done: false,
                    };

                  case 5:
                    _.label++;
                    y = op[1];
                    op = [0];
                    continue;

                  case 7:
                    op = _.ops.pop();

                    _.trys.pop();

                    continue;

                  default:
                    if (
                      !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                      (op[0] === 6 || op[0] === 2)
                    ) {
                      _ = 0;
                      continue;
                    }

                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                      _.label = op[1];
                      break;
                    }

                    if (op[0] === 6 && _.label < t[1]) {
                      _.label = t[1];
                      t = op;
                      break;
                    }

                    if (t && _.label < t[2]) {
                      _.label = t[2];

                      _.ops.push(op);

                      break;
                    }

                    if (t[2]) _.ops.pop();

                    _.trys.pop();

                    continue;
                }

                op = body.call(thisArg, _);
              } catch (e) {
                op = [6, e];
                y = 0;
              } finally {
                f = t = 0;
              }
            }

            if (op[0] & 5) throw op[1];
            return {
              value: op[0] ? op[1] : void 0,
              done: true,
            };
          }
        }

        function __createBinding(o, m, k, k2) {
          if (k2 === undefined) k2 = k;
          o[k2] = m[k];
        }

        function __exportStar(m, exports) {
          for (var p in m) {
            if (p !== "default" && !exports.hasOwnProperty(p))
              exports[p] = m[p];
          }
        }

        function __values(o) {
          var s = typeof Symbol === "function" && Symbol.iterator,
            m = s && o[s],
            i = 0;
          if (m) return m.call(o);
          if (o && typeof o.length === "number")
            return {
              next: function next() {
                if (o && i >= o.length) o = void 0;
                return {
                  value: o && o[i++],
                  done: !o,
                };
              },
            };
          throw new TypeError(
            s ? "Object is not iterable." : "Symbol.iterator is not defined."
          );
        }

        function __read(o, n) {
          var m = typeof Symbol === "function" && o[Symbol.iterator];
          if (!m) return o;
          var i = m.call(o),
            r,
            ar = [],
            e;

          try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
              ar.push(r.value);
            }
          } catch (error) {
            e = {
              error: error,
            };
          } finally {
            try {
              if (r && !r.done && (m = i["return"])) m.call(i);
            } finally {
              if (e) throw e.error;
            }
          }

          return ar;
        }

        function __spread() {
          for (var ar = [], i = 0; i < arguments.length; i++) {
            ar = ar.concat(__read(arguments[i]));
          }

          return ar;
        }

        function __spreadArrays() {
          for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
            s += arguments[i].length;
          }

          for (var r = Array(s), k = 0, i = 0; i < il; i++) {
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
              r[k] = a[j];
            }
          }

          return r;
        }

        function __await(v) {
          return this instanceof __await
            ? ((this.v = v), this)
            : new __await(v);
        }

        function __asyncGenerator(thisArg, _arguments, generator) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var g = generator.apply(thisArg, _arguments || []),
            i,
            q = [];
          return (
            (i = {}),
            verb("next"),
            verb("throw"),
            verb("return"),
            (i[Symbol.asyncIterator] = function () {
              return this;
            }),
            i
          );

          function verb(n) {
            if (g[n])
              i[n] = function (v) {
                return new Promise(function (a, b) {
                  q.push([n, v, a, b]) > 1 || resume(n, v);
                });
              };
          }

          function resume(n, v) {
            try {
              step(g[n](v));
            } catch (e) {
              settle(q[0][3], e);
            }
          }

          function step(r) {
            r.value instanceof __await
              ? Promise.resolve(r.value.v).then(fulfill, reject)
              : settle(q[0][2], r);
          }

          function fulfill(value) {
            resume("next", value);
          }

          function reject(value) {
            resume("throw", value);
          }

          function settle(f, v) {
            if ((f(v), q.shift(), q.length)) resume(q[0][0], q[0][1]);
          }
        }

        function __asyncDelegator(o) {
          var i, p;
          return (
            (i = {}),
            verb("next"),
            verb("throw", function (e) {
              throw e;
            }),
            verb("return"),
            (i[Symbol.iterator] = function () {
              return this;
            }),
            i
          );

          function verb(n, f) {
            i[n] = o[n]
              ? function (v) {
                  return (p = !p)
                    ? {
                        value: __await(o[n](v)),
                        done: n === "return",
                      }
                    : f
                    ? f(v)
                    : v;
                }
              : f;
          }
        }

        function __asyncValues(o) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var m = o[Symbol.asyncIterator],
            i;
          return m
            ? m.call(o)
            : ((o =
                typeof __values === "function"
                  ? __values(o)
                  : o[Symbol.iterator]()),
              (i = {}),
              verb("next"),
              verb("throw"),
              verb("return"),
              (i[Symbol.asyncIterator] = function () {
                return this;
              }),
              i);

          function verb(n) {
            i[n] =
              o[n] &&
              function (v) {
                return new Promise(function (resolve, reject) {
                  (v = o[n](v)), settle(resolve, reject, v.done, v.value);
                });
              };
          }

          function settle(resolve, reject, d, v) {
            Promise.resolve(v).then(function (v) {
              resolve({
                value: v,
                done: d,
              });
            }, reject);
          }
        }

        function __makeTemplateObject(cooked, raw) {
          if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", {
              value: raw,
            });
          } else {
            cooked.raw = raw;
          }

          return cooked;
        }

        function __importStar(mod) {
          if (mod && mod.__esModule) return mod;
          var result = {};
          if (mod != null)
            for (var k in mod) {
              if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
            }
          result["default"] = mod;
          return result;
        }

        function __importDefault(mod) {
          return mod && mod.__esModule
            ? mod
            : {
                default: mod,
              };
        }

        function __classPrivateFieldGet(receiver, privateMap) {
          if (!privateMap.has(receiver)) {
            throw new TypeError(
              "attempted to get private field on non-instance"
            );
          }

          return privateMap.get(receiver);
        }

        function __classPrivateFieldSet(receiver, privateMap, value) {
          if (!privateMap.has(receiver)) {
            throw new TypeError(
              "attempted to set private field on non-instance"
            );
          }

          privateMap.set(receiver, value);
          return value;
        }
        /***/
      },

    /***/
    "./src/app/admin/admin-change-password-modal/admin-change-password-modal.component.css":
      /*!*********************************************************************************************!*\
    !*** ./src/app/admin/admin-change-password-modal/admin-change-password-modal.component.css ***!
    \*********************************************************************************************/

      /*! exports provided: default */

      /***/
      function srcAppAdminAdminChangePasswordModalAdminChangePasswordModalComponentCss(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */

        __webpack_exports__["default"] =
          "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWNoYW5nZS1wYXNzd29yZC1tb2RhbC9hZG1pbi1jaGFuZ2UtcGFzc3dvcmQtbW9kYWwuY29tcG9uZW50LmNzcyJ9 */";
        /***/
      },

    /***/
    "./src/app/admin/admin-change-password-modal/admin-change-password-modal.component.ts":
      /*!********************************************************************************************!*\
    !*** ./src/app/admin/admin-change-password-modal/admin-change-password-modal.component.ts ***!
    \********************************************************************************************/

      /*! exports provided: AdminChangePasswordModalComponent */

      /***/
      function srcAppAdminAdminChangePasswordModalAdminChangePasswordModalComponentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "AdminChangePasswordModalComponent",
          function () {
            return AdminChangePasswordModalComponent;
          }
        );
        /* harmony import */

        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! tslib */
          "./node_modules/tslib/tslib.es6.js"
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */
          "./node_modules/@angular/core/fesm2015/core.js"
        );
        /* harmony import */

        var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @ng-bootstrap/ng-bootstrap */
          "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js"
        );
        /* harmony import */

        var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! src/app/services/auth.service */
          "./src/app/services/auth.service.ts"
        );
        /* harmony import */

        var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! src/app/services/notification.service */
          "./src/app/services/notification.service.ts"
        );

        var AdminChangePasswordModalComponent = /*#__PURE__*/ (function () {
          function AdminChangePasswordModalComponent(
            activeModal,
            authService,
            notifyService
          ) {
            _classCallCheck(this, AdminChangePasswordModalComponent);

            this.activeModal = activeModal;
            this.authService = authService;
            this.notifyService = notifyService;
            this.userPassword = {
              password: "",
              confirmPwd: "",
            };
            this.isContactingServer = false;
          }

          _createClass(AdminChangePasswordModalComponent, [
            {
              key: "ngOnInit",
              value: function ngOnInit() {},
            },
            {
              key: "onChangePassword",
              value: function onChangePassword() {
                var _this = this;

                console.log(this.userPassword);
                this.isContactingServer = true;
                this.authService.changePassword(this.userPassword).subscribe(
                  function (res) {
                    _this.isContactingServer = false;

                    if (res.success) {
                      _this.notifyService.showSuccess(
                        "Password changed successfully",
                        "Success"
                      );

                      _this.authService.logout();

                      _this.activeModal.close("close");
                    } else {
                      _this.notifyService.showError(
                        "We were unable to process your request.",
                        "Operation failed"
                      );
                    }
                  },
                  function (reason) {
                    _this.notifyService.showError(
                      "We were unable to process your request.",
                      "Operation failed"
                    );
                  }
                );
              },
            },
          ]);

          return AdminChangePasswordModalComponent;
        })();

        AdminChangePasswordModalComponent.ctorParameters = function () {
          return [
            {
              type:
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__[
                  "NgbActiveModal"
                ],
            },
            {
              type:
                src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__[
                  "AuthService"
                ],
            },
            {
              type:
                src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_4__[
                  "NotificationService"
                ],
            },
          ];
        };

        AdminChangePasswordModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__[
          "__decorate"
        ](
          [
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
              selector: "app-admin-change-password-modal",
              template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](
                __webpack_require__(
                  /*! raw-loader!./admin-change-password-modal.component.html */
                  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-change-password-modal/admin-change-password-modal.component.html"
                )
              )["default"],
              styles: [
                tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](
                  __webpack_require__(
                    /*! ./admin-change-password-modal.component.css */
                    "./src/app/admin/admin-change-password-modal/admin-change-password-modal.component.css"
                  )
                )["default"],
              ],
            }),
          ],
          AdminChangePasswordModalComponent
        );
        /***/
      },

    /***/
    "./src/app/admin/admin-customers/admin-customers.component.css":
      /*!*********************************************************************!*\
    !*** ./src/app/admin/admin-customers/admin-customers.component.css ***!
    \*********************************************************************/

      /*! exports provided: default */

      /***/
      function srcAppAdminAdminCustomersAdminCustomersComponentCss(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */

        __webpack_exports__["default"] =
          "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWN1c3RvbWVycy9hZG1pbi1jdXN0b21lcnMuY29tcG9uZW50LmNzcyJ9 */";
        /***/
      },

    /***/
    "./src/app/admin/admin-customers/admin-customers.component.ts":
      /*!********************************************************************!*\
    !*** ./src/app/admin/admin-customers/admin-customers.component.ts ***!
    \********************************************************************/

      /*! exports provided: AdminCustomersComponent */

      /***/
      function srcAppAdminAdminCustomersAdminCustomersComponentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "AdminCustomersComponent",
          function () {
            return AdminCustomersComponent;
          }
        );
        /* harmony import */

        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! tslib */
          "./node_modules/tslib/tslib.es6.js"
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */
          "./node_modules/@angular/core/fesm2015/core.js"
        );
        /* harmony import */

        var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @ng-bootstrap/ng-bootstrap */
          "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js"
        );
        /* harmony import */

        var src_app_customer_profile_customer_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! src/app/customer-profile/customer-profile.component */
          "./src/app/customer-profile/customer-profile.component.ts"
        );
        /* harmony import */

        var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! src/app/services/customer.service */
          "./src/app/services/customer.service.ts"
        );
        /* harmony import */

        var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! src/app/services/notification.service */
          "./src/app/services/notification.service.ts"
        );

        var AdminCustomersComponent = /*#__PURE__*/ (function () {
          function AdminCustomersComponent(
            customerService,
            notifyService,
            modalService
          ) {
            _classCallCheck(this, AdminCustomersComponent);

            this.customerService = customerService;
            this.notifyService = notifyService;
            this.modalService = modalService;
            this.customers = [];
          }

          _createClass(AdminCustomersComponent, [
            {
              key: "ngOnInit",
              value: function ngOnInit() {
                this.loadCustomers();
              },
            },
            {
              key: "loadCustomers",
              value: function loadCustomers() {
                var _this2 = this;

                var page =
                  arguments.length > 0 && arguments[0] !== undefined
                    ? arguments[0]
                    : 1;
                var searchquery =
                  arguments.length > 1 && arguments[1] !== undefined
                    ? arguments[1]
                    : "";
                if (this.pager && page > this.pager.totalPages) return;
                this.customerService.getCustomers(page, searchquery).subscribe(
                  function (res) {
                    if (res.success) {
                      _this2.pager = res.data;
                      _this2.customers = [].concat(
                        _toConsumableArray(_this2.customers),
                        _toConsumableArray(res.data.results)
                      );
                      console.log(_this2.pager);
                      _this2.hasMore =
                        Number(_this2.pager.page) <
                        Number(_this2.pager.totalPages);
                    }
                  },
                  function (reason) {
                    console.log(reason);
                  }
                );
              },
            },
            {
              key: "onSearch",
              value: function onSearch() {
                this.customers = [];
                this.loadCustomers(1, this.searchquery);
              },
            },
            {
              key: "onViewProfile",
              value: function onViewProfile(customer) {
                var modalRef = this.modalService.open(
                  src_app_customer_profile_customer_profile_component__WEBPACK_IMPORTED_MODULE_3__[
                    "CustomerProfileComponent"
                  ]
                );
                modalRef.componentInstance.customer = customer;
              },
            },
          ]);

          return AdminCustomersComponent;
        })();

        AdminCustomersComponent.ctorParameters = function () {
          return [
            {
              type:
                src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_4__[
                  "CustomerService"
                ],
            },
            {
              type:
                src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_5__[
                  "NotificationService"
                ],
            },
            {
              type:
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__[
                  "NgbModal"
                ],
            },
          ];
        };

        AdminCustomersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__[
          "__decorate"
        ](
          [
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
              selector: "app-admin-customers",
              template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](
                __webpack_require__(
                  /*! raw-loader!./admin-customers.component.html */
                  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-customers/admin-customers.component.html"
                )
              )["default"],
              styles: [
                tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](
                  __webpack_require__(
                    /*! ./admin-customers.component.css */
                    "./src/app/admin/admin-customers/admin-customers.component.css"
                  )
                )["default"],
              ],
            }),
          ],
          AdminCustomersComponent
        );
        /***/
      },

    /***/
    "./src/app/admin/admin-dashboard/admin-dashboard.component.css":
      /*!*********************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/admin-dashboard.component.css ***!
    \*********************************************************************/

      /*! exports provided: default */

      /***/
      function srcAppAdminAdminDashboardAdminDashboardComponentCss(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */

        __webpack_exports__["default"] =
          "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9hZG1pbi1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */";
        /***/
      },

    /***/
    "./src/app/admin/admin-dashboard/admin-dashboard.component.ts":
      /*!********************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/admin-dashboard.component.ts ***!
    \********************************************************************/

      /*! exports provided: AdminDashboardComponent */

      /***/
      function srcAppAdminAdminDashboardAdminDashboardComponentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "AdminDashboardComponent",
          function () {
            return AdminDashboardComponent;
          }
        );
        /* harmony import */

        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! tslib */
          "./node_modules/tslib/tslib.es6.js"
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */
          "./node_modules/@angular/core/fesm2015/core.js"
        );
        /* harmony import */

        var src_app_services_activity_notifications_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! src/app/services/activity-notifications.service */
          "./src/app/services/activity-notifications.service.ts"
        );
        /* harmony import */

        var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! src/app/services/admin.service */
          "./src/app/services/admin.service.ts"
        );
        /* harmony import */

        var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! src/app/services/notification.service */
          "./src/app/services/notification.service.ts"
        );

        var AdminDashboardComponent = /*#__PURE__*/ (function () {
          function AdminDashboardComponent(
            adminService,
            activityNotify,
            notifyService
          ) {
            _classCallCheck(this, AdminDashboardComponent);

            this.adminService = adminService;
            this.activityNotify = activityNotify;
            this.notifyService = notifyService;
            this.activities = [];
          }

          _createClass(AdminDashboardComponent, [
            {
              key: "ngOnInit",
              value: function ngOnInit() {
                var _this3 = this;

                this.adminService
                  .getDashboardSummary()
                  .subscribe(function (res) {
                    if (res.success) {
                      _this3.summary = res.data;
                    }
                  });
                this.activityNotify.getNotifications().subscribe(
                  function (res) {
                    if (res.success) {
                      _this3.activities = res.data;
                    }
                  },
                  function (reason) {
                    console.log(reason);
                  }
                );
              },
            },
            {
              key: "onDeleteActivity",
              value: function onDeleteActivity(id) {
                var _this4 = this;

                this.activityNotify.deleteNotification(id).subscribe(
                  function (res) {
                    if (res.success) {
                      _this4.notifyService.showSuccess(
                        "Activity deleted successfully",
                        "Success"
                      );
                    }
                  },
                  function (reason) {
                    _this4.notifyService.showError(
                      "We were unable to delete activity",
                      "Operation failed"
                    );
                  }
                );
              },
            },
          ]);

          return AdminDashboardComponent;
        })();

        AdminDashboardComponent.ctorParameters = function () {
          return [
            {
              type:
                src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_3__[
                  "AdminService"
                ],
            },
            {
              type:
                src_app_services_activity_notifications_service__WEBPACK_IMPORTED_MODULE_2__[
                  "ActivityNotificationsService"
                ],
            },
            {
              type:
                src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_4__[
                  "NotificationService"
                ],
            },
          ];
        };

        AdminDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__[
          "__decorate"
        ](
          [
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
              selector: "app-admin-dashboard",
              template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](
                __webpack_require__(
                  /*! raw-loader!./admin-dashboard.component.html */
                  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/admin-dashboard.component.html"
                )
              )["default"],
              styles: [
                tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](
                  __webpack_require__(
                    /*! ./admin-dashboard.component.css */
                    "./src/app/admin/admin-dashboard/admin-dashboard.component.css"
                  )
                )["default"],
              ],
            }),
          ],
          AdminDashboardComponent
        );
        /***/
      },

    /***/
    "./src/app/admin/admin-edit-email-modal/admin-edit-email-modal.component.css":
      /*!***********************************************************************************!*\
    !*** ./src/app/admin/admin-edit-email-modal/admin-edit-email-modal.component.css ***!
    \***********************************************************************************/

      /*! exports provided: default */

      /***/
      function srcAppAdminAdminEditEmailModalAdminEditEmailModalComponentCss(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */

        __webpack_exports__["default"] =
          "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWVkaXQtZW1haWwtbW9kYWwvYWRtaW4tZWRpdC1lbWFpbC1tb2RhbC5jb21wb25lbnQuY3NzIn0= */";
        /***/
      },

    /***/
    "./src/app/admin/admin-edit-email-modal/admin-edit-email-modal.component.ts":
      /*!**********************************************************************************!*\
    !*** ./src/app/admin/admin-edit-email-modal/admin-edit-email-modal.component.ts ***!
    \**********************************************************************************/

      /*! exports provided: AdminEditEmailModalComponent */

      /***/
      function srcAppAdminAdminEditEmailModalAdminEditEmailModalComponentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "AdminEditEmailModalComponent",
          function () {
            return AdminEditEmailModalComponent;
          }
        );
        /* harmony import */

        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! tslib */
          "./node_modules/tslib/tslib.es6.js"
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */
          "./node_modules/@angular/core/fesm2015/core.js"
        );
        /* harmony import */

        var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @ng-bootstrap/ng-bootstrap */
          "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js"
        );
        /* harmony import */

        var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! src/app/services/admin.service */
          "./src/app/services/admin.service.ts"
        );
        /* harmony import */

        var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! src/app/services/notification.service */
          "./src/app/services/notification.service.ts"
        );

        var AdminEditEmailModalComponent = /*#__PURE__*/ (function () {
          function AdminEditEmailModalComponent(
            activeModal,
            adminService,
            notifyService
          ) {
            _classCallCheck(this, AdminEditEmailModalComponent);

            this.activeModal = activeModal;
            this.adminService = adminService;
            this.notifyService = notifyService;
          }

          _createClass(AdminEditEmailModalComponent, [
            {
              key: "ngOnInit",
              value: function ngOnInit() {},
            },
            {
              key: "onUpdateEmail",
              value: function onUpdateEmail() {
                var _this5 = this;

                console.log(this.admin);
                this.isContactingServer = true;
                this.adminService.updateAdmin(this.admin).subscribe(
                  function (res) {
                    _this5.isContactingServer = false;

                    if (res.success) {
                      _this5.notifyService.showSuccess(
                        "Email updated successfully",
                        "Success"
                      );

                      _this5.activeModal.close("close");
                    } else {
                      _this5.notifyService.showError(
                        "We were unable to process your request.",
                        "Operation failed"
                      );
                    }
                  },
                  function (reason) {
                    _this5.isContactingServer = false;

                    _this5.notifyService.showError(
                      "We were unable to process your request.",
                      "Operation failed"
                    );
                  }
                );
              },
            },
          ]);

          return AdminEditEmailModalComponent;
        })();

        AdminEditEmailModalComponent.ctorParameters = function () {
          return [
            {
              type:
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__[
                  "NgbActiveModal"
                ],
            },
            {
              type:
                src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_3__[
                  "AdminService"
                ],
            },
            {
              type:
                src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_4__[
                  "NotificationService"
                ],
            },
          ];
        };

        AdminEditEmailModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__[
          "__decorate"
        ](
          [
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
              selector: "app-admin-edit-email-modal",
              template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](
                __webpack_require__(
                  /*! raw-loader!./admin-edit-email-modal.component.html */
                  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-edit-email-modal/admin-edit-email-modal.component.html"
                )
              )["default"],
              styles: [
                tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](
                  __webpack_require__(
                    /*! ./admin-edit-email-modal.component.css */
                    "./src/app/admin/admin-edit-email-modal/admin-edit-email-modal.component.css"
                  )
                )["default"],
              ],
            }),
          ],
          AdminEditEmailModalComponent
        );
        /***/
      },

    /***/
    "./src/app/admin/admin-hires/admin-hires.component.css":
      /*!*************************************************************!*\
    !*** ./src/app/admin/admin-hires/admin-hires.component.css ***!
    \*************************************************************/

      /*! exports provided: default */

      /***/
      function srcAppAdminAdminHiresAdminHiresComponentCss(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */

        __webpack_exports__["default"] =
          "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWhpcmVzL2FkbWluLWhpcmVzLmNvbXBvbmVudC5jc3MifQ== */";
        /***/
      },

    /***/
    "./src/app/admin/admin-hires/admin-hires.component.ts":
      /*!************************************************************!*\
    !*** ./src/app/admin/admin-hires/admin-hires.component.ts ***!
    \************************************************************/

      /*! exports provided: AdminHiresComponent */

      /***/
      function srcAppAdminAdminHiresAdminHiresComponentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "AdminHiresComponent",
          function () {
            return AdminHiresComponent;
          }
        );
        /* harmony import */

        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! tslib */
          "./node_modules/tslib/tslib.es6.js"
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */
          "./node_modules/@angular/core/fesm2015/core.js"
        );
        /* harmony import */

        var src_app_services_hire_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! src/app/services/hire.service */
          "./src/app/services/hire.service.ts"
        );
        /* harmony import */

        var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! moment */
          "./node_modules/moment/moment.js"
        );
        /* harmony import */

        var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          moment__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */

        var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! src/app/services/notification.service */
          "./src/app/services/notification.service.ts"
        );

        var AdminHiresComponent = /*#__PURE__*/ (function () {
          function AdminHiresComponent(hireService, notifyService) {
            _classCallCheck(this, AdminHiresComponent);

            this.hireService = hireService;
            this.notifyService = notifyService;
            this.hires = [];
          }

          _createClass(AdminHiresComponent, [
            {
              key: "ngOnInit",
              value: function ngOnInit() {
                this.reference = "ref-".concat(
                  Math.ceil(Math.random() * 10e13)
                );
                this.loadHires();
              },
            },
            {
              key: "loadHires",
              value: function loadHires() {
                var _this6 = this;

                var page =
                  arguments.length > 0 && arguments[0] !== undefined
                    ? arguments[0]
                    : 1;
                var searchquery =
                  arguments.length > 1 && arguments[1] !== undefined
                    ? arguments[1]
                    : "";
                if (this.pager && page > this.pager.totalPages) return;
                this.hireService.getHires(page, searchquery).subscribe(
                  function (res) {
                    if (res.success) {
                      _this6.pager = res.data;
                      _this6.hires = [].concat(
                        _toConsumableArray(_this6.hires),
                        _toConsumableArray(res.data.results)
                      );
                      console.log(_this6.pager);
                      _this6.hasMore =
                        Number(_this6.pager.page) <
                        Number(_this6.pager.totalPages);
                      _this6.pager.page = Number(_this6.pager.page);
                    }
                  },
                  function (reason) {
                    console.log(reason);
                  }
                );
              },
            },
            {
              key: "calculateDiff",
              value: function calculateDiff(date) {
                return moment__WEBPACK_IMPORTED_MODULE_3__(Date.now()).diff(
                  date,
                  "days"
                );
              },
            },
            {
              key: "onCompleteHire",
              value: function onCompleteHire(hireId) {
                var _this7 = this;

                this.hireService
                  .completeHire({
                    id: hireId,
                  })
                  .subscribe(
                    function (res) {
                      if (res.success) {
                        _this7.hires = [];

                        _this7.loadHires();
                      }
                    },
                    function (reason) {
                      console.log(reason);

                      _this7.notifyService.showError(
                        "We were unable to process your request",
                        "Operation failed"
                      );
                    }
                  );
              },
            },
            {
              key: "onSearch",
              value: function onSearch() {
                this.hires = [];
                this.loadHires(1, this.searchquery);
              },
            },
            {
              key: "paymentCancel",
              value: function paymentCancel() {
                console.log("canceled");
              },
            },
            {
              key: "paymentDone",
              value: function paymentDone(paymentInfo) {
                var _this8 = this;

                console.log(paymentInfo);
                console.log(this.selectedHire);
                var payment = {
                  hireId: this.selectedHire.id,
                  paymentRef: paymentInfo.reference,
                  amountPaid:
                    this.selectedHire.Vehicle.hireCost *
                    this.calculateDiff(this.selectedHire.returnedAt),
                };
                this.hireService.processOverduePayment(payment).subscribe(
                  function (res) {
                    if (res.success) {
                      _this8.hires = [];

                      _this8.loadHires(_this8.pager.page);
                    }
                  },
                  function (reason) {
                    console.log(reason);

                    _this8.notifyService.showError(
                      "We were unable to process your request",
                      "Operation failed."
                    );
                  }
                );
              },
            },
            {
              key: "onSelectHire",
              value: function onSelectHire(hire) {
                this.selectedHire = hire;
              },
            },
          ]);

          return AdminHiresComponent;
        })();

        AdminHiresComponent.ctorParameters = function () {
          return [
            {
              type:
                src_app_services_hire_service__WEBPACK_IMPORTED_MODULE_2__[
                  "HireService"
                ],
            },
            {
              type:
                src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_4__[
                  "NotificationService"
                ],
            },
          ];
        };

        AdminHiresComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"](
          [
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
              selector: "app-admin-hires",
              template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](
                __webpack_require__(
                  /*! raw-loader!./admin-hires.component.html */
                  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-hires/admin-hires.component.html"
                )
              )["default"],
              styles: [
                tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](
                  __webpack_require__(
                    /*! ./admin-hires.component.css */
                    "./src/app/admin/admin-hires/admin-hires.component.css"
                  )
                )["default"],
              ],
            }),
          ],
          AdminHiresComponent
        );
        /***/
      },

    /***/
    "./src/app/admin/admin-transactions/admin-transactions.component.css":
      /*!***************************************************************************!*\
    !*** ./src/app/admin/admin-transactions/admin-transactions.component.css ***!
    \***************************************************************************/

      /*! exports provided: default */

      /***/
      function srcAppAdminAdminTransactionsAdminTransactionsComponentCss(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */

        __webpack_exports__["default"] =
          "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLXRyYW5zYWN0aW9ucy9hZG1pbi10cmFuc2FjdGlvbnMuY29tcG9uZW50LmNzcyJ9 */";
        /***/
      },

    /***/
    "./src/app/admin/admin-transactions/admin-transactions.component.ts":
      /*!**************************************************************************!*\
    !*** ./src/app/admin/admin-transactions/admin-transactions.component.ts ***!
    \**************************************************************************/

      /*! exports provided: AdminTransactionsComponent */

      /***/
      function srcAppAdminAdminTransactionsAdminTransactionsComponentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "AdminTransactionsComponent",
          function () {
            return AdminTransactionsComponent;
          }
        );
        /* harmony import */

        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! tslib */
          "./node_modules/tslib/tslib.es6.js"
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */
          "./node_modules/@angular/core/fesm2015/core.js"
        );
        /* harmony import */

        var src_app_services_transaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! src/app/services/transaction.service */
          "./src/app/services/transaction.service.ts"
        );

        var AdminTransactionsComponent = /*#__PURE__*/ (function () {
          function AdminTransactionsComponent(transactionService) {
            _classCallCheck(this, AdminTransactionsComponent);

            this.transactionService = transactionService;
            this.transactions = [];
          }

          _createClass(AdminTransactionsComponent, [
            {
              key: "ngOnInit",
              value: function ngOnInit() {
                this.loadTransactions();
              },
            },
            {
              key: "loadTransactions",
              value: function loadTransactions() {
                var _this9 = this;

                var page =
                  arguments.length > 0 && arguments[0] !== undefined
                    ? arguments[0]
                    : 1;
                var searchquery =
                  arguments.length > 1 && arguments[1] !== undefined
                    ? arguments[1]
                    : "";
                if (this.pager && page > this.pager.totalPages) return;
                this.transactionService
                  .getTransacts(page, searchquery)
                  .subscribe(
                    function (res) {
                      if (res.success) {
                        _this9.pager = res.data;
                        _this9.transactions = [].concat(
                          _toConsumableArray(_this9.transactions),
                          _toConsumableArray(res.data.results)
                        );
                        console.log(_this9.pager);
                        _this9.pager.page = Number(_this9.pager.page);
                        _this9.hasMore =
                          Number(_this9.pager.page) <
                          Number(_this9.pager.totalPages);
                      }
                    },
                    function (reason) {
                      console.log(reason);
                    }
                  );
              },
            },
            {
              key: "onSearch",
              value: function onSearch() {
                this.transactions = [];
                this.loadTransactions(1, this.searchquery);
              },
            },
          ]);

          return AdminTransactionsComponent;
        })();

        AdminTransactionsComponent.ctorParameters = function () {
          return [
            {
              type:
                src_app_services_transaction_service__WEBPACK_IMPORTED_MODULE_2__[
                  "TransactionService"
                ],
            },
          ];
        };

        AdminTransactionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__[
          "__decorate"
        ](
          [
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
              selector: "app-admin-transactions",
              template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](
                __webpack_require__(
                  /*! raw-loader!./admin-transactions.component.html */
                  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-transactions/admin-transactions.component.html"
                )
              )["default"],
              styles: [
                tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](
                  __webpack_require__(
                    /*! ./admin-transactions.component.css */
                    "./src/app/admin/admin-transactions/admin-transactions.component.css"
                  )
                )["default"],
              ],
            }),
          ],
          AdminTransactionsComponent
        );
        /***/
      },

    /***/
    "./src/app/admin/admin-vehicle-modal/admin-vehicle-modal.component.css":
      /*!*****************************************************************************!*\
    !*** ./src/app/admin/admin-vehicle-modal/admin-vehicle-modal.component.css ***!
    \*****************************************************************************/

      /*! exports provided: default */

      /***/
      function srcAppAdminAdminVehicleModalAdminVehicleModalComponentCss(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */

        __webpack_exports__["default"] =
          "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLXZlaGljbGUtbW9kYWwvYWRtaW4tdmVoaWNsZS1tb2RhbC5jb21wb25lbnQuY3NzIn0= */";
        /***/
      },

    /***/
    "./src/app/admin/admin-vehicle-modal/admin-vehicle-modal.component.ts":
      /*!****************************************************************************!*\
    !*** ./src/app/admin/admin-vehicle-modal/admin-vehicle-modal.component.ts ***!
    \****************************************************************************/

      /*! exports provided: AdminVehicleModalComponent */

      /***/
      function srcAppAdminAdminVehicleModalAdminVehicleModalComponentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "AdminVehicleModalComponent",
          function () {
            return AdminVehicleModalComponent;
          }
        );
        /* harmony import */

        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! tslib */
          "./node_modules/tslib/tslib.es6.js"
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */
          "./node_modules/@angular/core/fesm2015/core.js"
        );
        /* harmony import */

        var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @ng-bootstrap/ng-bootstrap */
          "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js"
        );
        /* harmony import */

        var src_app_models_ImageSnippet_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! src/app/models/ImageSnippet.model */
          "./src/app/models/ImageSnippet.model.ts"
        );
        /* harmony import */

        var src_app_models_Vehicle_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! src/app/models/Vehicle.model */
          "./src/app/models/Vehicle.model.ts"
        );
        /* harmony import */

        var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! src/app/services/notification.service */
          "./src/app/services/notification.service.ts"
        );
        /* harmony import */

        var src_app_services_vehicle_manufacturer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! src/app/services/vehicle-manufacturer.service */
          "./src/app/services/vehicle-manufacturer.service.ts"
        );
        /* harmony import */

        var src_app_services_vehicle_type_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! src/app/services/vehicle-type.service */
          "./src/app/services/vehicle-type.service.ts"
        );
        /* harmony import */

        var src_app_services_vehicle_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! src/app/services/vehicle.service */
          "./src/app/services/vehicle.service.ts"
        );

        var AdminVehicleModalComponent = /*#__PURE__*/ (function () {
          function AdminVehicleModalComponent(
            activeModal,
            vehicleTypeService,
            manufacturerService,
            vehicleService,
            notifyService
          ) {
            _classCallCheck(this, AdminVehicleModalComponent);

            this.activeModal = activeModal;
            this.vehicleTypeService = vehicleTypeService;
            this.manufacturerService = manufacturerService;
            this.vehicleService = vehicleService;
            this.notifyService = notifyService;
            this.vehicle = new src_app_models_Vehicle_model__WEBPACK_IMPORTED_MODULE_4__[
              "Vehicle"
            ](null, "", null, null, null, null, "");
          }

          _createClass(AdminVehicleModalComponent, [
            {
              key: "ngOnInit",
              value: function ngOnInit() {
                var _this10 = this;

                this.vehicleTypeService.getVehicleTypes().subscribe(
                  function (res) {
                    if (res.success) {
                      _this10.vehicleTypes = res.data;

                      if (_this10.vehicleTypes.length > 0) {
                        _this10.vehicle.vehicleTypeId =
                          _this10.vehicle.vehicleTypeId ||
                          _this10.vehicleTypes[0].id;
                      }
                    }
                  },
                  function (reason) {
                    console.log(reason);
                  }
                );
                this.manufacturerService.getManufacturers().subscribe(
                  function (res) {
                    console.log(res);

                    if (res.success) {
                      _this10.manufacturers = res.data;

                      if (_this10.manufacturers.length > 0) {
                        _this10.vehicle.vehicleManufacturerId =
                          _this10.vehicle.vehicleManufacturerId ||
                          _this10.manufacturers[0].id;
                      }
                    }
                  },
                  function (reason) {
                    console.log(reason);
                  }
                );
              },
            },
            {
              key: "onFileChanged",
              value: function onFileChanged(imageInput) {
                var _this11 = this;

                var file = imageInput.files[0];
                var reader = new FileReader();
                reader.addEventListener("load", function (event) {
                  _this11.selectedFile = new src_app_models_ImageSnippet_model__WEBPACK_IMPORTED_MODULE_3__[
                    "ImageSnippet"
                  ](event.target["result"], file);

                  if (!_this11.selectedFile.hasSizeError) {
                    _this11.vehicle.image = _this11.selectedFile.src;
                  }
                });
                reader.readAsDataURL(file);
              },
            },
            {
              key: "onSave",
              value: function onSave() {
                var _this12 = this;

                this.vehicleService.saveVehicles(this.vehicle).subscribe(
                  function (res) {
                    if (res.success) {
                      _this12.activeModal.close("saved");

                      _this12.notifyService.showSuccess(
                        "saved successfully",
                        "Success"
                      );
                    } else {
                      _this12.notifyService.showError(
                        res.message,
                        "Operation Failed"
                      );
                    }
                  },
                  function (reason) {
                    console.log(reason);

                    _this12.notifyService.showError(
                      "We were unable to process request",
                      "Operation Failed"
                    );
                  }
                );
              },
            },
            {
              key: "onUpdate",
              value: function onUpdate() {
                var _this13 = this;

                this.vehicleService.updateVehicle(this.vehicle).subscribe(
                  function (res) {
                    if (res.success) {
                      _this13.activeModal.close("updated");

                      _this13.notifyService.showSuccess(
                        "updated successfully",
                        "Success"
                      );
                    } else {
                      _this13.notifyService.showError(
                        res.message,
                        "Operation Failed"
                      );
                    }
                  },
                  function (reason) {
                    console.log(reason);

                    _this13.notifyService.showError(
                      "We were unable to process request",
                      "Operation Failed"
                    );
                  }
                );
              },
            },
          ]);

          return AdminVehicleModalComponent;
        })();

        AdminVehicleModalComponent.ctorParameters = function () {
          return [
            {
              type:
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__[
                  "NgbActiveModal"
                ],
            },
            {
              type:
                src_app_services_vehicle_type_service__WEBPACK_IMPORTED_MODULE_7__[
                  "VehicleTypeService"
                ],
            },
            {
              type:
                src_app_services_vehicle_manufacturer_service__WEBPACK_IMPORTED_MODULE_6__[
                  "VehicleManufacturerService"
                ],
            },
            {
              type:
                src_app_services_vehicle_service__WEBPACK_IMPORTED_MODULE_8__[
                  "VehicleService"
                ],
            },
            {
              type:
                src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_5__[
                  "NotificationService"
                ],
            },
          ];
        };

        AdminVehicleModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__[
          "__decorate"
        ](
          [
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
              selector: "app-admin-vehicle-modal",
              template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](
                __webpack_require__(
                  /*! raw-loader!./admin-vehicle-modal.component.html */
                  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-vehicle-modal/admin-vehicle-modal.component.html"
                )
              )["default"],
              styles: [
                tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](
                  __webpack_require__(
                    /*! ./admin-vehicle-modal.component.css */
                    "./src/app/admin/admin-vehicle-modal/admin-vehicle-modal.component.css"
                  )
                )["default"],
              ],
            }),
          ],
          AdminVehicleModalComponent
        );
        /***/
      },

    /***/
    "./src/app/admin/admin-vehicles/admin-vehicles.component.css":
      /*!*******************************************************************!*\
    !*** ./src/app/admin/admin-vehicles/admin-vehicles.component.css ***!
    \*******************************************************************/

      /*! exports provided: default */

      /***/
      function srcAppAdminAdminVehiclesAdminVehiclesComponentCss(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */

        __webpack_exports__["default"] =
          "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLXZlaGljbGVzL2FkbWluLXZlaGljbGVzLmNvbXBvbmVudC5jc3MifQ== */";
        /***/
      },

    /***/
    "./src/app/admin/admin-vehicles/admin-vehicles.component.ts":
      /*!******************************************************************!*\
    !*** ./src/app/admin/admin-vehicles/admin-vehicles.component.ts ***!
    \******************************************************************/

      /*! exports provided: AdminVehiclesComponent */

      /***/
      function srcAppAdminAdminVehiclesAdminVehiclesComponentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "AdminVehiclesComponent",
          function () {
            return AdminVehiclesComponent;
          }
        );
        /* harmony import */

        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! tslib */
          "./node_modules/tslib/tslib.es6.js"
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */
          "./node_modules/@angular/core/fesm2015/core.js"
        );
        /* harmony import */

        var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @ng-bootstrap/ng-bootstrap */
          "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js"
        );
        /* harmony import */

        var src_app_services_vehicle_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! src/app/services/vehicle.service */
          "./src/app/services/vehicle.service.ts"
        );
        /* harmony import */

        var src_app_vehicle_profile_modal_vehicle_profile_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! src/app/vehicle-profile-modal/vehicle-profile-modal.component */
          "./src/app/vehicle-profile-modal/vehicle-profile-modal.component.ts"
        );
        /* harmony import */

        var util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! util */
          "./node_modules/util/util.js"
        );
        /* harmony import */

        var util__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
          util__WEBPACK_IMPORTED_MODULE_5__
        );
        /* harmony import */

        var _admin_vehicle_modal_admin_vehicle_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../admin-vehicle-modal/admin-vehicle-modal.component */
          "./src/app/admin/admin-vehicle-modal/admin-vehicle-modal.component.ts"
        );

        var AdminVehiclesComponent = /*#__PURE__*/ (function () {
          function AdminVehiclesComponent(modalService, vehicleService) {
            _classCallCheck(this, AdminVehiclesComponent);

            this.modalService = modalService;
            this.vehicleService = vehicleService;
            this.vehicles = [];
          }

          _createClass(AdminVehiclesComponent, [
            {
              key: "ngOnInit",
              value: function ngOnInit() {
                this.loadVehicles();
              },
            },
            {
              key: "loadVehicles",
              value: function loadVehicles() {
                var _this14 = this;

                var page =
                  arguments.length > 0 && arguments[0] !== undefined
                    ? arguments[0]
                    : 1;
                var searchquery =
                  arguments.length > 1 && arguments[1] !== undefined
                    ? arguments[1]
                    : "";
                if (this.pager && page > this.pager.totalPages) return;
                this.vehicleService.getVehicles(page, searchquery).subscribe(
                  function (res) {
                    if (res.success) {
                      _this14.pager = res.data;
                      _this14.vehicles = [].concat(
                        _toConsumableArray(_this14.vehicles),
                        _toConsumableArray(res.data.results)
                      );
                      console.log(_this14.pager);
                      _this14.hasMore =
                        Number(_this14.pager.page) <
                        Number(_this14.pager.totalPages);
                      _this14.pager.page = Number(_this14.pager.page);
                    }
                  },
                  function (reason) {
                    console.log(reason);
                  }
                );
              },
            },
            {
              key: "openModal",
              value: function openModal() {
                var _this15 = this;

                var vehicle =
                  arguments.length > 0 && arguments[0] !== undefined
                    ? arguments[0]
                    : null;
                var modalRef = this.modalService.open(
                  _admin_vehicle_modal_admin_vehicle_modal_component__WEBPACK_IMPORTED_MODULE_6__[
                    "AdminVehicleModalComponent"
                  ]
                );
                modalRef.componentInstance.title = "New Car";
                modalRef.componentInstance.isNewVehicle = Object(
                  util__WEBPACK_IMPORTED_MODULE_5__["isNull"]
                )(vehicle);

                if (
                  !Object(util__WEBPACK_IMPORTED_MODULE_5__["isNull"])(vehicle)
                ) {
                  modalRef.componentInstance.vehicle = vehicle;
                  modalRef.componentInstance.title = "Edit Car";
                }

                modalRef.result
                  .then(function (action) {
                    console.log(action);

                    if (action === "saved") {
                      console.log("here");
                      _this15.vehicles = [];

                      _this15.loadVehicles();
                    }
                  })
                  ["catch"](function (reason) {
                    console.log(reason);
                  });
              },
            },
            {
              key: "onViewVehicleProfile",
              value: function onViewVehicleProfile(vehicle) {
                var modalRef = this.modalService.open(
                  src_app_vehicle_profile_modal_vehicle_profile_modal_component__WEBPACK_IMPORTED_MODULE_4__[
                    "VehicleProfileModalComponent"
                  ]
                );
                modalRef.componentInstance.vehicle = vehicle;
                modalRef.componentInstance.isPreview = true;
              },
            },
            {
              key: "onSearch",
              value: function onSearch() {
                this.vehicles = [];
                this.loadVehicles(1, this.searchquery);
              },
            },
          ]);

          return AdminVehiclesComponent;
        })();

        AdminVehiclesComponent.ctorParameters = function () {
          return [
            {
              type:
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__[
                  "NgbModal"
                ],
            },
            {
              type:
                src_app_services_vehicle_service__WEBPACK_IMPORTED_MODULE_3__[
                  "VehicleService"
                ],
            },
          ];
        };

        AdminVehiclesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__[
          "__decorate"
        ](
          [
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
              selector: "app-admin-vehicles",
              template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](
                __webpack_require__(
                  /*! raw-loader!./admin-vehicles.component.html */
                  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-vehicles/admin-vehicles.component.html"
                )
              )["default"],
              styles: [
                tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](
                  __webpack_require__(
                    /*! ./admin-vehicles.component.css */
                    "./src/app/admin/admin-vehicles/admin-vehicles.component.css"
                  )
                )["default"],
              ],
            }),
          ],
          AdminVehiclesComponent
        );
        /***/
      },

    /***/
    "./src/app/app-routing.module.ts":
      /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

      /*! exports provided: AppRoutingModule */

      /***/
      function srcAppAppRoutingModuleTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "AppRoutingModule",
          function () {
            return AppRoutingModule;
          }
        );
        /* harmony import */

        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! tslib */
          "./node_modules/tslib/tslib.es6.js"
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */
          "./node_modules/@angular/core/fesm2015/core.js"
        );
        /* harmony import */

        var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/router */
          "./node_modules/@angular/router/fesm2015/router.js"
        );
        /* harmony import */

        var _admin_admin_customers_admin_customers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./admin/admin-customers/admin-customers.component */
          "./src/app/admin/admin-customers/admin-customers.component.ts"
        );
        /* harmony import */

        var _admin_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./admin/admin-dashboard/admin-dashboard.component */
          "./src/app/admin/admin-dashboard/admin-dashboard.component.ts"
        );
        /* harmony import */

        var _admin_admin_hires_admin_hires_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./admin/admin-hires/admin-hires.component */
          "./src/app/admin/admin-hires/admin-hires.component.ts"
        );
        /* harmony import */

        var _admin_admin_transactions_admin_transactions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./admin/admin-transactions/admin-transactions.component */
          "./src/app/admin/admin-transactions/admin-transactions.component.ts"
        );
        /* harmony import */

        var _admin_admin_vehicles_admin_vehicles_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./admin/admin-vehicles/admin-vehicles.component */
          "./src/app/admin/admin-vehicles/admin-vehicles.component.ts"
        );
        /* harmony import */

        var _auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./auth.guard */
          "./src/app/auth.guard.ts"
        );
        /* harmony import */

        var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./checkout/checkout.component */
          "./src/app/checkout/checkout.component.ts"
        );
        /* harmony import */

        var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ./contact-us/contact-us.component */
          "./src/app/contact-us/contact-us.component.ts"
        );
        /* harmony import */

        var _customer_customer_account_customer_account_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ./customer/customer-account/customer-account.component */
          "./src/app/customer/customer-account/customer-account.component.ts"
        );
        /* harmony import */

        var _customer_customer_hires_customer_hires_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ./customer/customer-hires/customer-hires.component */
          "./src/app/customer/customer-hires/customer-hires.component.ts"
        );
        /* harmony import */

        var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ./homepage/homepage.component */
          "./src/app/homepage/homepage.component.ts"
        );
        /* harmony import */

        var _login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ./login/login.component */
          "./src/app/login/login.component.ts"
        );
        /* harmony import */

        var _signup_signup_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ./signup/signup.component */
          "./src/app/signup/signup.component.ts"
        );
        /* harmony import */

        var _vehicle_listing_vehicle_listing_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ./vehicle-listing/vehicle-listing.component */
          "./src/app/vehicle-listing/vehicle-listing.component.ts"
        );

        var routes = [
          {
            path: "",
            component:
              _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_13__[
                "HomepageComponent"
              ],
          },
          {
            path: "home",
            component:
              _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_13__[
                "HomepageComponent"
              ],
          },
          {
            path: "contact",
            component:
              _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_10__[
                "ContactUsComponent"
              ],
          },
          {
            path: "login",
            component:
              _login_login_component__WEBPACK_IMPORTED_MODULE_14__[
                "LoginComponent"
              ],
          },
          {
            path: "signup",
            component:
              _signup_signup_component__WEBPACK_IMPORTED_MODULE_15__[
                "SignupComponent"
              ],
          },
          {
            path: "cars",
            component:
              _vehicle_listing_vehicle_listing_component__WEBPACK_IMPORTED_MODULE_16__[
                "VehicleListingComponent"
              ],
          },
          {
            path: "checkout/:vid/:hid",
            canActivate: [
              _auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"],
            ],
            component:
              _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_9__[
                "CheckoutComponent"
              ],
          },
          {
            path: "customer/profile",
            canActivate: [
              _auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"],
            ],
            component:
              _customer_customer_account_customer_account_component__WEBPACK_IMPORTED_MODULE_11__[
                "CustomerAccountComponent"
              ],
          },
          {
            path: "customer/hires",
            canActivate: [
              _auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"],
            ],
            component:
              _customer_customer_hires_customer_hires_component__WEBPACK_IMPORTED_MODULE_12__[
                "CustomerHiresComponent"
              ],
          },
          {
            path: "admin/dashboard",
            canActivate: [
              _auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"],
            ],
            component:
              _admin_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_4__[
                "AdminDashboardComponent"
              ],
          },
          {
            path: "admin/cars",
            canActivate: [
              _auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"],
            ],
            component:
              _admin_admin_vehicles_admin_vehicles_component__WEBPACK_IMPORTED_MODULE_7__[
                "AdminVehiclesComponent"
              ],
          },
          {
            path: "admin/rentals",
            canActivate: [
              _auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"],
            ],
            component:
              _admin_admin_hires_admin_hires_component__WEBPACK_IMPORTED_MODULE_5__[
                "AdminHiresComponent"
              ],
          },
          {
            path: "admin/transactions",
            canActivate: [
              _auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"],
            ],
            component:
              _admin_admin_transactions_admin_transactions_component__WEBPACK_IMPORTED_MODULE_6__[
                "AdminTransactionsComponent"
              ],
          },
          {
            path: "admin/customers",
            canActivate: [
              _auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"],
            ],
            component:
              _admin_admin_customers_admin_customers_component__WEBPACK_IMPORTED_MODULE_3__[
                "AdminCustomersComponent"
              ],
          },
        ];

        var AppRoutingModule = function AppRoutingModule() {
          _classCallCheck(this, AppRoutingModule);
        };

        AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"](
          [
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
              imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__[
                  "RouterModule"
                ].forRoot(routes),
              ],
              exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
              ],
            }),
          ],
          AppRoutingModule
        );
        /***/
      },

    /***/
    "./src/app/app.component.css":
      /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

      /*! exports provided: default */

      /***/
      function srcAppAppComponentCss(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */

        __webpack_exports__["default"] =
          "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
        /***/
      },

    /***/
    "./src/app/app.component.ts":
      /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

      /*! exports provided: AppComponent */

      /***/
      function srcAppAppComponentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
          return AppComponent;
        });
        /* harmony import */

        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! tslib */
          "./node_modules/tslib/tslib.es6.js"
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */
          "./node_modules/@angular/core/fesm2015/core.js"
        );
        /* harmony import */

        var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @ng-bootstrap/ng-bootstrap */
          "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js"
        );
        /* harmony import */

        var _admin_admin_change_password_modal_admin_change_password_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./admin/admin-change-password-modal/admin-change-password-modal.component */
          "./src/app/admin/admin-change-password-modal/admin-change-password-modal.component.ts"
        );
        /* harmony import */

        var _admin_admin_edit_email_modal_admin_edit_email_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./admin/admin-edit-email-modal/admin-edit-email-modal.component */
          "./src/app/admin/admin-edit-email-modal/admin-edit-email-modal.component.ts"
        );
        /* harmony import */

        var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./services/auth.service */
          "./src/app/services/auth.service.ts"
        );

        var AppComponent = /*#__PURE__*/ (function () {
          function AppComponent(authService, modalService) {
            _classCallCheck(this, AppComponent);

            this.authService = authService;
            this.modalService = modalService;
            this.title = "Online Car Rentals";
          }

          _createClass(AppComponent, [
            {
              key: "ngOnInit",
              value: function ngOnInit() {
                var _this16 = this;

                this.authService.userStatusChanges.subscribe(function (x) {
                  return (_this16.userStatus = x);
                });
              },
            },
            {
              key: "ngAfterContentChecked",
              value: function ngAfterContentChecked() {
                //Called after every check of the component's or directive's content.
                //Add 'implements AfterContentChecked' to the class.
                this.authService.getStatusOnRefresh();
                this.userType = this.authService.getUserType();
              },
            },
            {
              key: "logOut",
              value: function logOut() {
                this.authService.logout();
              },
            },
            {
              key: "onEditAdminEmail",
              value: function onEditAdminEmail() {
                var modalRef = this.modalService.open(
                  _admin_admin_edit_email_modal_admin_edit_email_modal_component__WEBPACK_IMPORTED_MODULE_4__[
                    "AdminEditEmailModalComponent"
                  ],
                  {
                    size: "sm",
                  }
                );
                modalRef.componentInstance.isContactingServer = true;
                this.authService.getCurrentUser().subscribe(function (res) {
                  modalRef.componentInstance.isContactingServer = false;

                  if (res.success) {
                    modalRef.componentInstance.admin = res.data;
                  }
                });
                modalRef.result.then(function () {})["catch"](function () {});
              },
            },
            {
              key: "onChangeAdminPassword",
              value: function onChangeAdminPassword() {
                var modalRef = this.modalService.open(
                  _admin_admin_change_password_modal_admin_change_password_modal_component__WEBPACK_IMPORTED_MODULE_3__[
                    "AdminChangePasswordModalComponent"
                  ],
                  {
                    size: "sm",
                  }
                );
                modalRef.result.then(function () {})["catch"](function () {});
              },
            },
          ]);

          return AppComponent;
        })();

        AppComponent.ctorParameters = function () {
          return [
            {
              type:
                _services_auth_service__WEBPACK_IMPORTED_MODULE_5__[
                  "AuthService"
                ],
            },
            {
              type:
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__[
                  "NgbModal"
                ],
            },
          ];
        };

        AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"](
          [
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
              selector: "app-root",
              template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](
                __webpack_require__(
                  /*! raw-loader!./app.component.html */
                  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"
                )
              )["default"],
              styles: [
                tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](
                  __webpack_require__(
                    /*! ./app.component.css */
                    "./src/app/app.component.css"
                  )
                )["default"],
              ],
            }),
          ],
          AppComponent
        );
        /***/
      },

    /***/
    "./src/app/app.module.ts":
      /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

      /*! exports provided: tokenGetter, AppModule */

      /***/
      function srcAppAppModuleTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, "tokenGetter", function () {
          return tokenGetter;
        });
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, "AppModule", function () {
          return AppModule;
        });
        /* harmony import */

        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! tslib */
          "./node_modules/tslib/tslib.es6.js"
        );
        /* harmony import */

        var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/platform-browser */
          "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js"
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/core */
          "./node_modules/@angular/core/fesm2015/core.js"
        );
        /* harmony import */

        var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/forms */
          "./node_modules/@angular/forms/fesm2015/forms.js"
        );
        /* harmony import */

        var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @angular/common/http */
          "./node_modules/@angular/common/fesm2015/http.js"
        );
        /* harmony import */

        var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @angular/platform-browser/animations */
          "./node_modules/@angular/platform-browser/fesm2015/animations.js"
        );
        /* harmony import */

        var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ngx-toastr */
          "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js"
        );
        /* harmony import */

        var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @ng-bootstrap/ng-bootstrap */
          "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js"
        );
        /* harmony import */

        var angular_font_awesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! angular-font-awesome */
          "./node_modules/angular-font-awesome/dist/angular-font-awesome.js"
        );
        /* harmony import */

        var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! @auth0/angular-jwt */
          "./node_modules/@auth0/angular-jwt/fesm2015/auth0-angular-jwt.js"
        );
        /* harmony import */

        var angular4_paystack__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! angular4-paystack */
          "./node_modules/angular4-paystack/fesm2015/angular4-paystack.js"
        );
        /* harmony import */

        var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ./app-routing.module */
          "./src/app/app-routing.module.ts"
        );
        /* harmony import */

        var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ./app.component */
          "./src/app/app.component.ts"
        );
        /* harmony import */

        var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ./homepage/homepage.component */
          "./src/app/homepage/homepage.component.ts"
        );
        /* harmony import */

        var _admin_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ./admin/admin-dashboard/admin-dashboard.component */
          "./src/app/admin/admin-dashboard/admin-dashboard.component.ts"
        );
        /* harmony import */

        var _admin_admin_vehicles_admin_vehicles_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ./admin/admin-vehicles/admin-vehicles.component */
          "./src/app/admin/admin-vehicles/admin-vehicles.component.ts"
        );
        /* harmony import */

        var _admin_admin_customers_admin_customers_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ./admin/admin-customers/admin-customers.component */
          "./src/app/admin/admin-customers/admin-customers.component.ts"
        );
        /* harmony import */

        var _admin_admin_hires_admin_hires_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ./admin/admin-hires/admin-hires.component */
          "./src/app/admin/admin-hires/admin-hires.component.ts"
        );
        /* harmony import */

        var _admin_admin_transactions_admin_transactions_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ./admin/admin-transactions/admin-transactions.component */
          "./src/app/admin/admin-transactions/admin-transactions.component.ts"
        );
        /* harmony import */

        var _admin_admin_vehicle_modal_admin_vehicle_modal_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ./admin/admin-vehicle-modal/admin-vehicle-modal.component */
          "./src/app/admin/admin-vehicle-modal/admin-vehicle-modal.component.ts"
        );
        /* harmony import */

        var _vehicle_profile_modal_vehicle_profile_modal_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ./vehicle-profile-modal/vehicle-profile-modal.component */
          "./src/app/vehicle-profile-modal/vehicle-profile-modal.component.ts"
        );
        /* harmony import */

        var _customer_profile_customer_profile_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ./customer-profile/customer-profile.component */
          "./src/app/customer-profile/customer-profile.component.ts"
        );
        /* harmony import */

        var _login_login_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
          /*! ./login/login.component */
          "./src/app/login/login.component.ts"
        );
        /* harmony import */

        var _signup_signup_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
          /*! ./signup/signup.component */
          "./src/app/signup/signup.component.ts"
        );
        /* harmony import */

        var _vehicle_listing_vehicle_listing_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
          /*! ./vehicle-listing/vehicle-listing.component */
          "./src/app/vehicle-listing/vehicle-listing.component.ts"
        );
        /* harmony import */

        var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
          /*! ./checkout/checkout.component */
          "./src/app/checkout/checkout.component.ts"
        );
        /* harmony import */

        var _customer_customer_hires_customer_hires_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
          /*! ./customer/customer-hires/customer-hires.component */
          "./src/app/customer/customer-hires/customer-hires.component.ts"
        );
        /* harmony import */

        var _customer_customer_account_customer_account_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
          /*! ./customer/customer-account/customer-account.component */
          "./src/app/customer/customer-account/customer-account.component.ts"
        );
        /* harmony import */

        var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
          /*! ./contact-us/contact-us.component */
          "./src/app/contact-us/contact-us.component.ts"
        );
        /* harmony import */

        var _admin_admin_edit_email_modal_admin_edit_email_modal_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
          /*! ./admin/admin-edit-email-modal/admin-edit-email-modal.component */
          "./src/app/admin/admin-edit-email-modal/admin-edit-email-modal.component.ts"
        );
        /* harmony import */

        var _admin_admin_change_password_modal_admin_change_password_modal_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
          /*! ./admin/admin-change-password-modal/admin-change-password-modal.component */
          "./src/app/admin/admin-change-password-modal/admin-change-password-modal.component.ts"
        ); // this function retrieves the token

        function tokenGetter() {
          return localStorage.getItem("access_token");
        }

        var AppModule = function AppModule() {
          _classCallCheck(this, AppModule);
        };

        AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"](
          [
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
              declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_13__[
                  "HomepageComponent"
                ],
                _admin_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_14__[
                  "AdminDashboardComponent"
                ],
                _admin_admin_vehicles_admin_vehicles_component__WEBPACK_IMPORTED_MODULE_15__[
                  "AdminVehiclesComponent"
                ],
                _admin_admin_customers_admin_customers_component__WEBPACK_IMPORTED_MODULE_16__[
                  "AdminCustomersComponent"
                ],
                _admin_admin_hires_admin_hires_component__WEBPACK_IMPORTED_MODULE_17__[
                  "AdminHiresComponent"
                ],
                _admin_admin_transactions_admin_transactions_component__WEBPACK_IMPORTED_MODULE_18__[
                  "AdminTransactionsComponent"
                ],
                _admin_admin_vehicle_modal_admin_vehicle_modal_component__WEBPACK_IMPORTED_MODULE_19__[
                  "AdminVehicleModalComponent"
                ],
                _vehicle_profile_modal_vehicle_profile_modal_component__WEBPACK_IMPORTED_MODULE_20__[
                  "VehicleProfileModalComponent"
                ],
                _customer_profile_customer_profile_component__WEBPACK_IMPORTED_MODULE_21__[
                  "CustomerProfileComponent"
                ],
                _login_login_component__WEBPACK_IMPORTED_MODULE_22__[
                  "LoginComponent"
                ],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_23__[
                  "SignupComponent"
                ],
                _vehicle_listing_vehicle_listing_component__WEBPACK_IMPORTED_MODULE_24__[
                  "VehicleListingComponent"
                ],
                _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_25__[
                  "CheckoutComponent"
                ],
                _customer_customer_hires_customer_hires_component__WEBPACK_IMPORTED_MODULE_26__[
                  "CustomerHiresComponent"
                ],
                _customer_customer_account_customer_account_component__WEBPACK_IMPORTED_MODULE_27__[
                  "CustomerAccountComponent"
                ],
                _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_28__[
                  "ContactUsComponent"
                ],
                _admin_admin_edit_email_modal_admin_edit_email_modal_component__WEBPACK_IMPORTED_MODULE_29__[
                  "AdminEditEmailModalComponent"
                ],
                _admin_admin_change_password_modal_admin_change_password_modal_component__WEBPACK_IMPORTED_MODULE_30__[
                  "AdminChangePasswordModalComponent"
                ],
              ],
              entryComponents: [
                _admin_admin_vehicle_modal_admin_vehicle_modal_component__WEBPACK_IMPORTED_MODULE_19__[
                  "AdminVehicleModalComponent"
                ],
                _vehicle_profile_modal_vehicle_profile_modal_component__WEBPACK_IMPORTED_MODULE_20__[
                  "VehicleProfileModalComponent"
                ],
                _customer_profile_customer_profile_component__WEBPACK_IMPORTED_MODULE_21__[
                  "CustomerProfileComponent"
                ],
                _admin_admin_edit_email_modal_admin_edit_email_modal_component__WEBPACK_IMPORTED_MODULE_29__[
                  "AdminEditEmailModalComponent"
                ],
                _admin_admin_change_password_modal_admin_change_password_modal_component__WEBPACK_IMPORTED_MODULE_30__[
                  "AdminChangePasswordModalComponent"
                ],
              ],
              imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__[
                  "BrowserModule"
                ],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__[
                  "BrowserAnimationsModule"
                ],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__[
                  "HttpClientModule"
                ],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_11__[
                  "AppRoutingModule"
                ],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_8__[
                  "AngularFontAwesomeModule"
                ],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot(
                  {
                    progressBar: true,
                    timeOut: 5000,
                    maxOpened: 1,
                  }
                ),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__[
                  "NgbModule"
                ],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_9__[
                  "JwtModule"
                ].forRoot({
                  config: {
                    tokenGetter: tokenGetter,
                    allowedDomains: ["localhost:4100"],
                    disallowedRoutes: ["localhost:4100/api/auth/"],
                  },
                }),
                angular4_paystack__WEBPACK_IMPORTED_MODULE_10__[
                  "Angular4PaystackModule"
                ].forRoot("pk_test_c3cd2b6a8c267691e93f3b29ab8c015061618895"),
              ],
              providers: [],
              bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
              ],
            }),
          ],
          AppModule
        );
        /***/
      },

    /***/
    "./src/app/auth.guard.ts":
      /*!*******************************!*\
    !*** ./src/app/auth.guard.ts ***!
    \*******************************/

      /*! exports provided: AuthGuard */

      /***/
      function srcAppAuthGuardTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
          return AuthGuard;
        });
        /* harmony import */

        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! tslib */
          "./node_modules/tslib/tslib.es6.js"
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */
          "./node_modules/@angular/core/fesm2015/core.js"
        );
        /* harmony import */

        var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/router */
          "./node_modules/@angular/router/fesm2015/router.js"
        );
        /* harmony import */

        var _services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./services/notification.service */
          "./src/app/services/notification.service.ts"
        );

        var AuthGuard = /*#__PURE__*/ (function () {
          function AuthGuard(router, notifyService) {
            _classCallCheck(this, AuthGuard);

            this.router = router;
            this.notifyService = notifyService;
          }

          _createClass(AuthGuard, [
            {
              key: "canActivate",
              value: function canActivate(next, state) {
                if (localStorage.getItem("access_token")) {
                  return true;
                } else {
                  this.notifyService.showWarning(
                    "You must login before you can view this page",
                    "Warning"
                  );
                  this.router.navigate(["/login"]);
                  return false;
                }
              },
            },
          ]);

          return AuthGuard;
        })();

        AuthGuard.ctorParameters = function () {
          return [
            {
              type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            },
            {
              type:
                _services_notification_service__WEBPACK_IMPORTED_MODULE_3__[
                  "NotificationService"
                ],
            },
          ];
        };

        AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"](
          [
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
              providedIn: "root",
            }),
          ],
          AuthGuard
        );
        /***/
      },

    /***/
    "./src/app/checkout/checkout.component.css":
      /*!*************************************************!*\
    !*** ./src/app/checkout/checkout.component.css ***!
    \*************************************************/

      /*! exports provided: default */

      /***/
      function srcAppCheckoutCheckoutComponentCss(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */

        __webpack_exports__["default"] =
          "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoZWNrb3V0L2NoZWNrb3V0LmNvbXBvbmVudC5jc3MifQ== */";
        /***/
      },

    /***/
    "./src/app/checkout/checkout.component.ts":
      /*!************************************************!*\
    !*** ./src/app/checkout/checkout.component.ts ***!
    \************************************************/

      /*! exports provided: CheckoutComponent */

      /***/
      function srcAppCheckoutCheckoutComponentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "CheckoutComponent",
          function () {
            return CheckoutComponent;
          }
        );
        /* harmony import */

        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! tslib */
          "./node_modules/tslib/tslib.es6.js"
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */
          "./node_modules/@angular/core/fesm2015/core.js"
        );
        /* harmony import */

        var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/router */
          "./node_modules/@angular/router/fesm2015/router.js"
        );
        /* harmony import */

        var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! moment */
          "./node_modules/moment/moment.js"
        );
        /* harmony import */

        var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          moment__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */

        var _services_vehicle_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../services/vehicle.service */
          "./src/app/services/vehicle.service.ts"
        );
        /* harmony import */

        var _services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../services/notification.service */
          "./src/app/services/notification.service.ts"
        );
        /* harmony import */

        var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../services/auth.service */
          "./src/app/services/auth.service.ts"
        );
        /* harmony import */

        var _services_hire_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../services/hire.service */
          "./src/app/services/hire.service.ts"
        );

        var CheckoutComponent = /*#__PURE__*/ (function () {
          function CheckoutComponent(
            activatedRoute,
            vehicleService,
            notifyService,
            authService,
            router,
            hireService
          ) {
            _classCallCheck(this, CheckoutComponent);

            this.activatedRoute = activatedRoute;
            this.vehicleService = vehicleService;
            this.notifyService = notifyService;
            this.authService = authService;
            this.router = router;
            this.hireService = hireService;
            this.isContactingServer = false;
            this.totalDays = 0;
            this.canMakePayment = false;
            this.hireData = {
              hiredAt: moment__WEBPACK_IMPORTED_MODULE_3__({}).format(
                "Y/MM/DD"
              ),
              returnedAt: "",
              vehicleId: null,
              hireId: null,
              status: "active",
              amountPaid: 0,
            };
          }

          _createClass(CheckoutComponent, [
            {
              key: "ngOnInit",
              value: function ngOnInit() {
                var _this17 = this;

                this.hireId = Number(this.activatedRoute.snapshot.params.hid);
                this.vehicleId = Number(
                  this.activatedRoute.snapshot.params.vid
                );
                this.hireData.vehicleId = this.vehicleId;
                this.hireData.hireId = this.hireId;
                this.reference = "ref-".concat(
                  Math.ceil(Math.random() * 10e13)
                );
                this.isContactingServer = true;

                if (!isNaN(this.vehicleId)) {
                  this.vehicleService.getVehicle(this.vehicleId).subscribe(
                    function (res) {
                      if (res.success) {
                        _this17.vehicle = res.data;

                        _this17.authService.getCurrentUser().subscribe(
                          function (res) {
                            _this17.isContactingServer = false;

                            if (res.success) {
                              _this17.currentUser = res.data;
                            } else {
                              _this17.notifyService.showError(
                                "Failed to load your data",
                                "Operation Failed"
                              );
                            }
                          },
                          function (reason) {
                            _this17.isContactingServer = false;
                          }
                        );
                      }
                    },
                    function (reason) {
                      console.log(reason);

                      _this17.notifyService.showError(
                        "We were unable to load data",
                        "operation failed"
                      );
                    }
                  );
                }
              },
            },
            {
              key: "onDateChange",
              value: function onDateChange() {
                console.log(this.hireData.returnedAt);
                var date =
                  this.hireData.returnedAt["year"] +
                  "-" +
                  this.hireData.returnedAt["month"] +
                  "-" +
                  this.hireData.returnedAt["day"];
                this.totalDays = moment__WEBPACK_IMPORTED_MODULE_3__(date).diff(
                  this.hireData.hiredAt,
                  "days"
                );

                if (this.totalDays < 0) {
                  this.canMakePayment = false;
                  this.totalDays = 0;
                  this.hireData.amountPaid = 0;
                  this.notifyService.showWarning(
                    "Please select a current or future date",
                    "Warning"
                  );
                  return;
                }

                this.canMakePayment = true;
                this.hireData.amountPaid =
                  this.totalDays * Number(this.vehicle.hireCost);
              },
            },
            {
              key: "paymentCancel",
              value: function paymentCancel() {
                console.log("canceled");
              },
            },
            {
              key: "paymentDone",
              value: function paymentDone(paymentInfo) {
                var _this18 = this;

                this.hireData.paymentRef = paymentInfo["reference"];
                this.hireData.customerId = this.currentUser.id;
                this.hireData.returnedAt = ""
                  .concat(this.hireData.returnedAt["year"], "/")
                  .concat(this.hireData.returnedAt["month"], "/")
                  .concat(this.hireData.returnedAt["day"]);
                console.log(this.hireData);
                this.hireService.processHire(this.hireData).subscribe(
                  function (res) {
                    if (res.success) {
                      _this18.notifyService.showSuccess(
                        "Payment was successful",
                        "Success"
                      );

                      _this18.router.navigate(["/customer/hires/"]);
                    } else {
                      _this18.notifyService.showError(
                        "We were unable to process your request",
                        "Operation failed"
                      );
                    }
                  },
                  function (reason) {
                    console.log(reason);

                    _this18.notifyService.showError(
                      "We were unable to process your request",
                      "Operation failed"
                    );
                  }
                );
              },
            },
          ]);

          return CheckoutComponent;
        })();

        CheckoutComponent.ctorParameters = function () {
          return [
            {
              type:
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            },
            {
              type:
                _services_vehicle_service__WEBPACK_IMPORTED_MODULE_4__[
                  "VehicleService"
                ],
            },
            {
              type:
                _services_notification_service__WEBPACK_IMPORTED_MODULE_5__[
                  "NotificationService"
                ],
            },
            {
              type:
                _services_auth_service__WEBPACK_IMPORTED_MODULE_6__[
                  "AuthService"
                ],
            },
            {
              type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            },
            {
              type:
                _services_hire_service__WEBPACK_IMPORTED_MODULE_7__[
                  "HireService"
                ],
            },
          ];
        };

        CheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"](
          [
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
              selector: "app-checkout",
              template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](
                __webpack_require__(
                  /*! raw-loader!./checkout.component.html */
                  "./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.component.html"
                )
              )["default"],
              styles: [
                tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](
                  __webpack_require__(
                    /*! ./checkout.component.css */
                    "./src/app/checkout/checkout.component.css"
                  )
                )["default"],
              ],
            }),
          ],
          CheckoutComponent
        );
        /***/
      },

    /***/
    "./src/app/contact-us/contact-us.component.css":
      /*!*****************************************************!*\
    !*** ./src/app/contact-us/contact-us.component.css ***!
    \*****************************************************/

      /*! exports provided: default */

      /***/
      function srcAppContactUsContactUsComponentCss(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */

        __webpack_exports__["default"] =
          "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QtdXMvY29udGFjdC11cy5jb21wb25lbnQuY3NzIn0= */";
        /***/
      },

    /***/
    "./src/app/contact-us/contact-us.component.ts":
      /*!****************************************************!*\
    !*** ./src/app/contact-us/contact-us.component.ts ***!
    \****************************************************/

      /*! exports provided: ContactUsComponent */

      /***/
      function srcAppContactUsContactUsComponentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "ContactUsComponent",
          function () {
            return ContactUsComponent;
          }
        );
        /* harmony import */

        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! tslib */
          "./node_modules/tslib/tslib.es6.js"
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */
          "./node_modules/@angular/core/fesm2015/core.js"
        );
        /* harmony import */

        var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../services/common.service */
          "./src/app/services/common.service.ts"
        );
        /* harmony import */

        var _services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../services/notification.service */
          "./src/app/services/notification.service.ts"
        );

        var ContactUsComponent = /*#__PURE__*/ (function () {
          function ContactUsComponent(notifyService, commonService) {
            _classCallCheck(this, ContactUsComponent);

            this.notifyService = notifyService;
            this.commonService = commonService;
            this.isContactingServer = false;
            this.composer = {
              name: "",
              emailAddress: "",
              message: "",
            };
          }

          _createClass(ContactUsComponent, [
            {
              key: "ngOnInit",
              value: function ngOnInit() {},
            },
            {
              key: "onSendMail",
              value: function onSendMail() {
                var _this19 = this;

                this.isContactingServer = true;
                this.commonService.sendMail(this.composer).subscribe(
                  function (res) {
                    _this19.isContactingServer = false;

                    if (res.success) {
                      _this19.notifyService.showSuccess(
                        "Message sent",
                        "Success"
                      );

                      _this19.composer.emailAddress = null;
                      _this19.composer.message = null;
                      _this19.composer.name = null;
                    } else {
                      _this19.notifyService.showError(
                        "We were unable to process your request.",
                        "Operation failed."
                      );
                    }
                  },
                  function (reason) {
                    _this19.isContactingServer = false;
                    console.log(reason);

                    _this19.notifyService.showError(
                      "We were unable to process your request.",
                      "Operation failed."
                    );
                  }
                );
              },
            },
          ]);

          return ContactUsComponent;
        })();

        ContactUsComponent.ctorParameters = function () {
          return [
            {
              type:
                _services_notification_service__WEBPACK_IMPORTED_MODULE_3__[
                  "NotificationService"
                ],
            },
            {
              type:
                _services_common_service__WEBPACK_IMPORTED_MODULE_2__[
                  "CommonService"
                ],
            },
          ];
        };

        ContactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"](
          [
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
              selector: "app-contact-us",
              template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](
                __webpack_require__(
                  /*! raw-loader!./contact-us.component.html */
                  "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us/contact-us.component.html"
                )
              )["default"],
              styles: [
                tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](
                  __webpack_require__(
                    /*! ./contact-us.component.css */
                    "./src/app/contact-us/contact-us.component.css"
                  )
                )["default"],
              ],
            }),
          ],
          ContactUsComponent
        );
        /***/
      },

    /***/
    "./src/app/customer-profile/customer-profile.component.css":
      /*!*****************************************************************!*\
    !*** ./src/app/customer-profile/customer-profile.component.css ***!
    \*****************************************************************/

      /*! exports provided: default */

      /***/
      function srcAppCustomerProfileCustomerProfileComponentCss(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */

        __webpack_exports__["default"] =
          "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyLXByb2ZpbGUvY3VzdG9tZXItcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */";
        /***/
      },

    /***/
    "./src/app/customer-profile/customer-profile.component.ts":
      /*!****************************************************************!*\
    !*** ./src/app/customer-profile/customer-profile.component.ts ***!
    \****************************************************************/

      /*! exports provided: CustomerProfileComponent */

      /***/
      function srcAppCustomerProfileCustomerProfileComponentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "CustomerProfileComponent",
          function () {
            return CustomerProfileComponent;
          }
        );
        /* harmony import */

        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! tslib */
          "./node_modules/tslib/tslib.es6.js"
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */
          "./node_modules/@angular/core/fesm2015/core.js"
        );
        /* harmony import */

        var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @ng-bootstrap/ng-bootstrap */
          "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js"
        );

        var CustomerProfileComponent = /*#__PURE__*/ (function () {
          function CustomerProfileComponent(activeModal) {
            _classCallCheck(this, CustomerProfileComponent);

            this.activeModal = activeModal;
          }

          _createClass(CustomerProfileComponent, [
            {
              key: "ngOnInit",
              value: function ngOnInit() {},
            },
          ]);

          return CustomerProfileComponent;
        })();

        CustomerProfileComponent.ctorParameters = function () {
          return [
            {
              type:
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__[
                  "NgbActiveModal"
                ],
            },
          ];
        };

        CustomerProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__[
          "__decorate"
        ](
          [
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
              selector: "app-customer-profile",
              template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](
                __webpack_require__(
                  /*! raw-loader!./customer-profile.component.html */
                  "./node_modules/raw-loader/dist/cjs.js!./src/app/customer-profile/customer-profile.component.html"
                )
              )["default"],
              styles: [
                tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](
                  __webpack_require__(
                    /*! ./customer-profile.component.css */
                    "./src/app/customer-profile/customer-profile.component.css"
                  )
                )["default"],
              ],
            }),
          ],
          CustomerProfileComponent
        );
        /***/
      },

    /***/
    "./src/app/customer/customer-account/customer-account.component.css":
      /*!**************************************************************************!*\
    !*** ./src/app/customer/customer-account/customer-account.component.css ***!
    \**************************************************************************/

      /*! exports provided: default */

      /***/
      function srcAppCustomerCustomerAccountCustomerAccountComponentCss(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */

        __webpack_exports__["default"] =
          "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyL2N1c3RvbWVyLWFjY291bnQvY3VzdG9tZXItYWNjb3VudC5jb21wb25lbnQuY3NzIn0= */";
        /***/
      },

    /***/
    "./src/app/customer/customer-account/customer-account.component.ts":
      /*!*************************************************************************!*\
    !*** ./src/app/customer/customer-account/customer-account.component.ts ***!
    \*************************************************************************/

      /*! exports provided: CustomerAccountComponent */

      /***/
      function srcAppCustomerCustomerAccountCustomerAccountComponentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "CustomerAccountComponent",
          function () {
            return CustomerAccountComponent;
          }
        );
        /* harmony import */

        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! tslib */
          "./node_modules/tslib/tslib.es6.js"
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */
          "./node_modules/@angular/core/fesm2015/core.js"
        );
        /* harmony import */

        var src_app_models_Customers_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! src/app/models/Customers.model */
          "./src/app/models/Customers.model.ts"
        );
        /* harmony import */

        var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! src/app/services/auth.service */
          "./src/app/services/auth.service.ts"
        );
        /* harmony import */

        var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! src/app/services/customer.service */
          "./src/app/services/customer.service.ts"
        );
        /* harmony import */

        var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! src/app/services/notification.service */
          "./src/app/services/notification.service.ts"
        );

        var CustomerAccountComponent = /*#__PURE__*/ (function () {
          function CustomerAccountComponent(
            customerService,
            notifyService,
            authService
          ) {
            _classCallCheck(this, CustomerAccountComponent);

            this.customerService = customerService;
            this.notifyService = notifyService;
            this.authService = authService;
            this.userProfile = new src_app_models_Customers_model__WEBPACK_IMPORTED_MODULE_2__[
              "Customer"
            ](null, "", "", "", "", "", "");
            this.userPassword = {
              password: "",
              confirmPwd: "",
            };
          }

          _createClass(CustomerAccountComponent, [
            {
              key: "ngOnInit",
              value: function ngOnInit() {
                var _this20 = this;

                this.isContactingServer = true;
                this.authService.getCurrentUser().subscribe(
                  function (res) {
                    _this20.isContactingServer = false;

                    if (res.success) {
                      _this20.userProfile = res.data;
                    } else {
                      _this20.notifyService.showError(
                        "Failed to load your profile",
                        "Operation failed"
                      );
                    }
                  },
                  function (reason) {
                    _this20.isContactingServer = false;

                    _this20.notifyService.showError(
                      "We were unable to process your request",
                      "Operation failed"
                    );
                  }
                );
              },
            },
            {
              key: "onUpdate",
              value: function onUpdate() {
                var _this21 = this;

                this.isContactingServer = true;
                this.customerService.updateCustomer(this.userProfile).subscribe(
                  function (res) {
                    _this21.isContactingServer = false;

                    if (res.success) {
                      _this21.notifyService.showSuccess(
                        "Profile updated successfully",
                        "Success"
                      );
                    } else {
                      _this21.notifyService.showError(
                        "We were unable to process your request",
                        "Operation failed"
                      );
                    }
                  },
                  function (reason) {
                    _this21.isContactingServer = false;

                    _this21.notifyService.showError(
                      "We were unable to process your request",
                      "Operation failed"
                    );
                  }
                );
              },
            },
            {
              key: "onChangePassword",
              value: function onChangePassword() {
                var _this22 = this;

                this.isResetingPassword = true;
                this.authService.changePassword(this.userPassword).subscribe(
                  function (res) {
                    _this22.isResetingPassword = false;

                    if (res.success) {
                      _this22.notifyService.showSuccess(
                        "Passsword changed successfully",
                        "Success"
                      );

                      _this22.authService.logout();
                    } else {
                      _this22.notifyService.showError(
                        res.message,
                        "operation failed"
                      );
                    }
                  },
                  function (reason) {
                    _this22.isResetingPassword = false;

                    _this22.notifyService.showError(
                      "We were unable to process request",
                      "operation failed"
                    );
                  }
                );
              },
            },
          ]);

          return CustomerAccountComponent;
        })();

        CustomerAccountComponent.ctorParameters = function () {
          return [
            {
              type:
                src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_4__[
                  "CustomerService"
                ],
            },
            {
              type:
                src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_5__[
                  "NotificationService"
                ],
            },
            {
              type:
                src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__[
                  "AuthService"
                ],
            },
          ];
        };

        CustomerAccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__[
          "__decorate"
        ](
          [
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
              selector: "app-customer-account",
              template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](
                __webpack_require__(
                  /*! raw-loader!./customer-account.component.html */
                  "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/customer-account/customer-account.component.html"
                )
              )["default"],
              styles: [
                tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](
                  __webpack_require__(
                    /*! ./customer-account.component.css */
                    "./src/app/customer/customer-account/customer-account.component.css"
                  )
                )["default"],
              ],
            }),
          ],
          CustomerAccountComponent
        );
        /***/
      },

    /***/
    "./src/app/customer/customer-hires/customer-hires.component.css":
      /*!**********************************************************************!*\
    !*** ./src/app/customer/customer-hires/customer-hires.component.css ***!
    \**********************************************************************/

      /*! exports provided: default */

      /***/
      function srcAppCustomerCustomerHiresCustomerHiresComponentCss(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */

        __webpack_exports__["default"] =
          "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyL2N1c3RvbWVyLWhpcmVzL2N1c3RvbWVyLWhpcmVzLmNvbXBvbmVudC5jc3MifQ== */";
        /***/
      },

    /***/
    "./src/app/customer/customer-hires/customer-hires.component.ts":
      /*!*********************************************************************!*\
    !*** ./src/app/customer/customer-hires/customer-hires.component.ts ***!
    \*********************************************************************/

      /*! exports provided: CustomerHiresComponent */

      /***/
      function srcAppCustomerCustomerHiresCustomerHiresComponentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "CustomerHiresComponent",
          function () {
            return CustomerHiresComponent;
          }
        );
        /* harmony import */

        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! tslib */
          "./node_modules/tslib/tslib.es6.js"
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */
          "./node_modules/@angular/core/fesm2015/core.js"
        );
        /* harmony import */

        var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @auth0/angular-jwt */
          "./node_modules/@auth0/angular-jwt/fesm2015/auth0-angular-jwt.js"
        );
        /* harmony import */

        var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! src/app/services/auth.service */
          "./src/app/services/auth.service.ts"
        );
        /* harmony import */

        var src_app_services_hire_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! src/app/services/hire.service */
          "./src/app/services/hire.service.ts"
        );
        /* harmony import */

        var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! moment */
          "./node_modules/moment/moment.js"
        );
        /* harmony import */

        var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
          moment__WEBPACK_IMPORTED_MODULE_5__
        );
        /* harmony import */

        var src_app_vehicle_profile_modal_vehicle_profile_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! src/app/vehicle-profile-modal/vehicle-profile-modal.component */
          "./src/app/vehicle-profile-modal/vehicle-profile-modal.component.ts"
        );
        /* harmony import */

        var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @ng-bootstrap/ng-bootstrap */
          "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js"
        );

        var CustomerHiresComponent = /*#__PURE__*/ (function () {
          function CustomerHiresComponent(
            hireService,
            authService,
            jwtService,
            modalService
          ) {
            _classCallCheck(this, CustomerHiresComponent);

            this.hireService = hireService;
            this.authService = authService;
            this.jwtService = jwtService;
            this.modalService = modalService;
            this.hires = [];
            this.hasMore = false;
          }

          _createClass(CustomerHiresComponent, [
            {
              key: "ngOnInit",
              value: function ngOnInit() {
                var _this23 = this;

                this.authService.userStatusChanges.subscribe(function (x) {
                  return (_this23.userStatus = x);
                });
                var decoded = this.jwtService.decodeToken(this.userStatus);
                this.customerId = decoded["user"]["id"];
                this.loadHires();
              },
            },
            {
              key: "loadHires",
              value: function loadHires() {
                var _this24 = this;

                var page =
                  arguments.length > 0 && arguments[0] !== undefined
                    ? arguments[0]
                    : 1;
                var searchquery =
                  arguments.length > 1 && arguments[1] !== undefined
                    ? arguments[1]
                    : "";
                if (this.pager && page > this.pager.totalPages) return;
                this.hireService
                  .getHires(page, searchquery, this.customerId)
                  .subscribe(
                    function (res) {
                      if (res.success) {
                        _this24.pager = res.data;
                        _this24.hires = [].concat(
                          _toConsumableArray(_this24.hires),
                          _toConsumableArray(res.data.results)
                        );
                        console.log(_this24.pager);
                        _this24.hasMore =
                          Number(_this24.pager.page) <
                          Number(_this24.pager.totalPages);
                      }
                    },
                    function (reason) {
                      console.log(reason);
                    }
                  );
              },
            },
            {
              key: "calculateDiff",
              value: function calculateDiff(date) {
                return moment__WEBPACK_IMPORTED_MODULE_5__(Date.now()).diff(
                  date,
                  "days"
                );
              },
            },
            {
              key: "onViewVehicleProfile",
              value: function onViewVehicleProfile(vehicle) {
                console.log(vehicle);
                var modalRef = this.modalService.open(
                  src_app_vehicle_profile_modal_vehicle_profile_modal_component__WEBPACK_IMPORTED_MODULE_6__[
                    "VehicleProfileModalComponent"
                  ]
                );
                modalRef.componentInstance.vehicle = vehicle;
                modalRef.componentInstance.isPreview = true;
              },
            },
          ]);

          return CustomerHiresComponent;
        })();

        CustomerHiresComponent.ctorParameters = function () {
          return [
            {
              type:
                src_app_services_hire_service__WEBPACK_IMPORTED_MODULE_4__[
                  "HireService"
                ],
            },
            {
              type:
                src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__[
                  "AuthService"
                ],
            },
            {
              type:
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__[
                  "JwtHelperService"
                ],
            },
            {
              type:
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__[
                  "NgbModal"
                ],
            },
          ];
        };

        CustomerHiresComponent = tslib__WEBPACK_IMPORTED_MODULE_0__[
          "__decorate"
        ](
          [
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
              selector: "app-customer-hires",
              template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](
                __webpack_require__(
                  /*! raw-loader!./customer-hires.component.html */
                  "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/customer-hires/customer-hires.component.html"
                )
              )["default"],
              styles: [
                tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](
                  __webpack_require__(
                    /*! ./customer-hires.component.css */
                    "./src/app/customer/customer-hires/customer-hires.component.css"
                  )
                )["default"],
              ],
            }),
          ],
          CustomerHiresComponent
        );
        /***/
      },

    /***/
    "./src/app/homepage/homepage.component.css":
      /*!*************************************************!*\
    !*** ./src/app/homepage/homepage.component.css ***!
    \*************************************************/

      /*! exports provided: default */

      /***/
      function srcAppHomepageHomepageComponentCss(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */

        __webpack_exports__["default"] =
          "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5jc3MifQ== */";
        /***/
      },

    /***/
    "./src/app/homepage/homepage.component.ts":
      /*!************************************************!*\
    !*** ./src/app/homepage/homepage.component.ts ***!
    \************************************************/

      /*! exports provided: HomepageComponent */

      /***/
      function srcAppHomepageHomepageComponentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "HomepageComponent",
          function () {
            return HomepageComponent;
          }
        );
        /* harmony import */

        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! tslib */
          "./node_modules/tslib/tslib.es6.js"
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */
          "./node_modules/@angular/core/fesm2015/core.js"
        );

        var HomepageComponent = /*#__PURE__*/ (function () {
          function HomepageComponent() {
            _classCallCheck(this, HomepageComponent);
          }

          _createClass(HomepageComponent, [
            {
              key: "ngOnInit",
              value: function ngOnInit() {},
            },
          ]);

          return HomepageComponent;
        })();

        HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"](
          [
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
              selector: "app-homepage",
              template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](
                __webpack_require__(
                  /*! raw-loader!./homepage.component.html */
                  "./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/homepage.component.html"
                )
              )["default"],
              styles: [
                tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](
                  __webpack_require__(
                    /*! ./homepage.component.css */
                    "./src/app/homepage/homepage.component.css"
                  )
                )["default"],
              ],
            }),
          ],
          HomepageComponent
        );
        /***/
      },

    /***/
    "./src/app/login/login.component.css":
      /*!*******************************************!*\
    !*** ./src/app/login/login.component.css ***!
    \*******************************************/

      /*! exports provided: default */

      /***/
      function srcAppLoginLoginComponentCss(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */

        __webpack_exports__["default"] =
          "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */";
        /***/
      },

    /***/
    "./src/app/login/login.component.ts":
      /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

      /*! exports provided: LoginComponent */

      /***/
      function srcAppLoginLoginComponentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "LoginComponent",
          function () {
            return LoginComponent;
          }
        );
        /* harmony import */

        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! tslib */
          "./node_modules/tslib/tslib.es6.js"
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */
          "./node_modules/@angular/core/fesm2015/core.js"
        );
        /* harmony import */

        var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../services/auth.service */
          "./src/app/services/auth.service.ts"
        );

        var LoginComponent = /*#__PURE__*/ (function () {
          function LoginComponent(authService) {
            _classCallCheck(this, LoginComponent);

            this.authService = authService;
            this.isContactingServer = false;
            this.loginCred = {
              emailAddress: "",
              password: "",
              userType: "customer",
            };
          }

          _createClass(LoginComponent, [
            {
              key: "ngOnInit",
              value: function ngOnInit() {},
            },
            {
              key: "onLogin",
              value: function onLogin() {
                var _this25 = this;

                this.isContactingServer = true;
                var redirectUrl =
                  this.loginCred.userType === "customer"
                    ? "/cars"
                    : "/admin/dashboard/";
                this.authService.login(
                  redirectUrl,
                  this.loginCred,
                  function () {
                    _this25.isContactingServer = false;
                  }
                );
              },
            },
          ]);

          return LoginComponent;
        })();

        LoginComponent.ctorParameters = function () {
          return [
            {
              type:
                _services_auth_service__WEBPACK_IMPORTED_MODULE_2__[
                  "AuthService"
                ],
            },
          ];
        };

        LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"](
          [
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
              selector: "app-login",
              template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](
                __webpack_require__(
                  /*! raw-loader!./login.component.html */
                  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html"
                )
              )["default"],
              styles: [
                tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](
                  __webpack_require__(
                    /*! ./login.component.css */
                    "./src/app/login/login.component.css"
                  )
                )["default"],
              ],
            }),
          ],
          LoginComponent
        );
        /***/
      },

    /***/
    "./src/app/models/Customers.model.ts":
      /*!*******************************************!*\
    !*** ./src/app/models/Customers.model.ts ***!
    \*******************************************/

      /*! exports provided: Customer */

      /***/
      function srcAppModelsCustomersModelTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, "Customer", function () {
          return Customer;
        });
        /* harmony import */

        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! tslib */
          "./node_modules/tslib/tslib.es6.js"
        );

        var Customer = function Customer(
          id,
          name,
          emailAddress,
          password,
          phone,
          address,
          gender
        ) {
          _classCallCheck(this, Customer);

          this.id = id;
          this.name = name;
          this.emailAddress = emailAddress;
          this.password = password;
          this.phone = phone;
          this.address = address;
          this.gender = gender;
        };
        /***/
      },

    /***/
    "./src/app/models/ImageSnippet.model.ts":
      /*!**********************************************!*\
    !*** ./src/app/models/ImageSnippet.model.ts ***!
    \**********************************************/

      /*! exports provided: ImageSnippet */

      /***/
      function srcAppModelsImageSnippetModelTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, "ImageSnippet", function () {
          return ImageSnippet;
        });
        /* harmony import */

        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! tslib */
          "./node_modules/tslib/tslib.es6.js"
        );

        var ImageSnippet = function ImageSnippet(src, file) {
          _classCallCheck(this, ImageSnippet);

          this.src = src;
          this.file = file;
          this.pending = false;
          this.status = "init";
          this.bytesPerKilo = 1024;
          this.maxFileSize = 200;
          this.minFileSize = 5;
          this.fileSize = Math.ceil(this.file.size / this.bytesPerKilo);
          this.hasSizeError =
            this.fileSize > this.maxFileSize ||
            this.fileSize < this.minFileSize;
        };
        /***/
      },

    /***/
    "./src/app/models/Vehicle.model.ts":
      /*!*****************************************!*\
    !*** ./src/app/models/Vehicle.model.ts ***!
    \*****************************************/

      /*! exports provided: Vehicle */

      /***/
      function srcAppModelsVehicleModelTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, "Vehicle", function () {
          return Vehicle;
        });
        /* harmony import */

        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! tslib */
          "./node_modules/tslib/tslib.es6.js"
        );

        var Vehicle = function Vehicle(
          id,
          name,
          hireCost,
          capacity,
          vehicleTypeId,
          vehicleManufacturerId,
          image,
          status,
          VehicleType
        ) {
          _classCallCheck(this, Vehicle);

          this.id = id;
          this.name = name;
          this.hireCost = hireCost;
          this.capacity = capacity;
          this.vehicleTypeId = vehicleTypeId;
          this.vehicleManufacturerId = vehicleManufacturerId;
          this.image = image;
          this.status = status;
          this.VehicleType = VehicleType;
        };
        /***/
      },

    /***/
    "./src/app/services/activity-notifications.service.ts":
      /*!************************************************************!*\
    !*** ./src/app/services/activity-notifications.service.ts ***!
    \************************************************************/

      /*! exports provided: ActivityNotificationsService */

      /***/
      function srcAppServicesActivityNotificationsServiceTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "ActivityNotificationsService",
          function () {
            return ActivityNotificationsService;
          }
        );
        /* harmony import */

        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! tslib */
          "./node_modules/tslib/tslib.es6.js"
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */
          "./node_modules/@angular/core/fesm2015/core.js"
        );
        /* harmony import */

        var _core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./core.service */
          "./src/app/services/core.service.ts"
        );

        var ActivityNotificationsService = /*#__PURE__*/ (function () {
          function ActivityNotificationsService(coreService) {
            _classCallCheck(this, ActivityNotificationsService);

            this.coreService = coreService;
            this.apiUrl = "api/notifications";
          }

          _createClass(ActivityNotificationsService, [
            {
              key: "getNotifications",
              value: function getNotifications() {
                return this.coreService.getData(this.apiUrl);
              },
            },
            {
              key: "deleteNotification",
              value: function deleteNotification(id) {
                return this.coreService.deleteData(id, this.apiUrl);
              },
            },
          ]);

          return ActivityNotificationsService;
        })();

        ActivityNotificationsService.ctorParameters = function () {
          return [
            {
              type: _core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"],
            },
          ];
        };

        ActivityNotificationsService = tslib__WEBPACK_IMPORTED_MODULE_0__[
          "__decorate"
        ](
          [
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
              providedIn: "root",
            }),
          ],
          ActivityNotificationsService
        );
        /***/
      },

    /***/
    "./src/app/services/admin.service.ts":
      /*!*******************************************!*\
    !*** ./src/app/services/admin.service.ts ***!
    \*******************************************/

      /*! exports provided: AdminService */

      /***/
      function srcAppServicesAdminServiceTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, "AdminService", function () {
          return AdminService;
        });
        /* harmony import */

        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! tslib */
          "./node_modules/tslib/tslib.es6.js"
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */
          "./node_modules/@angular/core/fesm2015/core.js"
        );
        /* harmony import */

        var _core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./core.service */
          "./src/app/services/core.service.ts"
        );

        var AdminService = /*#__PURE__*/ (function () {
          function AdminService(coreService) {
            _classCallCheck(this, AdminService);

            this.coreService = coreService;
            this.apiUrl = "api/admins/";
          }

          _createClass(AdminService, [
            {
              key: "getDashboardSummary",
              value: function getDashboardSummary() {
                return this.coreService.getData(
                  "".concat(this.apiUrl, "dashboard/summary")
                );
              },
            },
            {
              key: "updateAdmin",
              value: function updateAdmin(admin) {
                return this.coreService.putData(admin, this.apiUrl);
              },
            },
          ]);

          return AdminService;
        })();

        AdminService.ctorParameters = function () {
          return [
            {
              type: _core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"],
            },
          ];
        };

        AdminService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"](
          [
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
              providedIn: "root",
            }),
          ],
          AdminService
        );
        /***/
      },

    /***/
    "./src/app/services/auth.service.ts":
      /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

      /*! exports provided: AuthService */

      /***/
      function srcAppServicesAuthServiceTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, "AuthService", function () {
          return AuthService;
        });
        /* harmony import */

        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! tslib */
          "./node_modules/tslib/tslib.es6.js"
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */
          "./node_modules/@angular/core/fesm2015/core.js"
        );
        /* harmony import */

        var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/common/http */
          "./node_modules/@angular/common/fesm2015/http.js"
        );
        /* harmony import */

        var _core_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./core.service */
          "./src/app/services/core.service.ts"
        );
        /* harmony import */

        var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! rxjs */
          "./node_modules/rxjs/_esm2015/index.js"
        );
        /* harmony import */

        var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @angular/router */
          "./node_modules/@angular/router/fesm2015/router.js"
        );
        /* harmony import */

        var _notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./notification.service */
          "./src/app/services/notification.service.ts"
        );
        /* harmony import */

        var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @auth0/angular-jwt */
          "./node_modules/@auth0/angular-jwt/fesm2015/auth0-angular-jwt.js"
        );

        var AuthService = /*#__PURE__*/ (function () {
          function AuthService(coreService, router, notifyService, jwtService) {
            _classCallCheck(this, AuthService);

            this.coreService = coreService;
            this.router = router;
            this.notifyService = notifyService;
            this.jwtService = jwtService;
            this.userStatusChanges = new rxjs__WEBPACK_IMPORTED_MODULE_4__[
              "BehaviorSubject"
            ]("");
            this.apiUrl = "api/auth/login/";
          }

          _createClass(AuthService, [
            {
              key: "setUserStatus",
              value: function setUserStatus(userStatus) {
                this.userStatus = userStatus;
                this.userStatusChanges.next(userStatus);
              },
            },
            {
              key: "login",
              value: function login(redirectUrl, formData, onComplete) {
                var _this26 = this;

                var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__[
                  "HttpHeaders"
                ]().set("Content-Type", "application/json"); // send a post request

                this.coreService
                  .postData(formData, this.apiUrl, headers)
                  .subscribe(
                    function (res) {
                      localStorage.setItem("access_token", res["token"]);

                      _this26.setUserStatus(res["token"]);

                      _this26.router.navigate([redirectUrl]);
                    },
                    function (reason) {
                      _this26.notifyService.showError(
                        "Wrong email and password combination",
                        "Operation failed"
                      );

                      onComplete();
                    },
                    function () {
                      onComplete();
                    }
                  );
              },
            },
            {
              key: "logout",
              value: function logout() {
                // just remove the access token and redirect
                console.log("user logged out successfully");
                localStorage.removeItem("access_token");
                this.setUserStatus(null);
                this.router.navigate(["/login"]);
              },
            },
            {
              key: "getUserType",
              value: function getUserType() {
                var decoded = this.jwtService.decodeToken(this.userStatus);

                if (decoded) {
                  return decoded["user"]["type"];
                }

                return null;
              },
            },
            {
              key: "getStatusOnRefresh",
              value: function getStatusOnRefresh() {
                if (localStorage.getItem("access_token")) {
                  var token = localStorage.getItem("access_token");
                  var decoded = this.jwtService.decodeToken(token);

                  if (Math.floor(Date.now() / 1000) > decoded["exp"]) {
                    this.logout();
                  }

                  this.setUserStatus(localStorage.getItem("access_token"));
                }
              },
            },
            {
              key: "getCurrentUser",
              value: function getCurrentUser() {
                return this.coreService.getData("api/auth/currentuser");
              },
            },
            {
              key: "changePassword",
              value: function changePassword(userPassword) {
                return this.coreService.putData(
                  userPassword,
                  "api/auth/change/password/"
                );
              },
            },
          ]);

          return AuthService;
        })();

        AuthService.ctorParameters = function () {
          return [
            {
              type: _core_service__WEBPACK_IMPORTED_MODULE_3__["CoreService"],
            },
            {
              type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            },
            {
              type:
                _notification_service__WEBPACK_IMPORTED_MODULE_6__[
                  "NotificationService"
                ],
            },
            {
              type:
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__[
                  "JwtHelperService"
                ],
            },
          ];
        };

        AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"](
          [
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
              providedIn: "root",
            }),
          ],
          AuthService
        );
        /***/
      },

    /***/
    "./src/app/services/common.service.ts":
      /*!********************************************!*\
    !*** ./src/app/services/common.service.ts ***!
    \********************************************/

      /*! exports provided: CommonService */

      /***/
      function srcAppServicesCommonServiceTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "CommonService",
          function () {
            return CommonService;
          }
        );
        /* harmony import */

        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! tslib */
          "./node_modules/tslib/tslib.es6.js"
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */
          "./node_modules/@angular/core/fesm2015/core.js"
        );
        /* harmony import */

        var _core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./core.service */
          "./src/app/services/core.service.ts"
        );

        var CommonService = /*#__PURE__*/ (function () {
          function CommonService(coreService) {
            _classCallCheck(this, CommonService);

            this.coreService = coreService;
            this.apiUrl = "api/common/";
          }

          _createClass(CommonService, [
            {
              key: "sendMail",
              value: function sendMail(mail) {
                return this.coreService.postData(
                  mail,
                  "".concat(this.apiUrl, "sendmail")
                );
              },
            },
          ]);

          return CommonService;
        })();

        CommonService.ctorParameters = function () {
          return [
            {
              type: _core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"],
            },
          ];
        };

        CommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"](
          [
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
              providedIn: "root",
            }),
          ],
          CommonService
        );
        /***/
      },

    /***/
    "./src/app/services/core.service.ts":
      /*!******************************************!*\
    !*** ./src/app/services/core.service.ts ***!
    \******************************************/

      /*! exports provided: CoreService */

      /***/
      function srcAppServicesCoreServiceTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, "CoreService", function () {
          return CoreService;
        });
        /* harmony import */

        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! tslib */
          "./node_modules/tslib/tslib.es6.js"
        );
        /* harmony import */

        var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/common/http */
          "./node_modules/@angular/common/fesm2015/http.js"
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/core */
          "./node_modules/@angular/core/fesm2015/core.js"
        );

        var CoreService = /*#__PURE__*/ (function () {
          function CoreService(http) {
            _classCallCheck(this, CoreService);

            this.http = http;
            this.host = "";
          }

          _createClass(CoreService, [
            {
              key: "getData",
              value: function getData(apiURL) {
                return this.http.get("".concat(this.host).concat(apiURL));
              },
            },
            {
              key: "postData",
              value: function postData(data, apiURL, headers) {
                return this.http.post(
                  "".concat(this.host).concat(apiURL),
                  data,
                  {
                    headers: headers,
                  }
                );
              },
            },
            {
              key: "putData",
              value: function putData(data, apiURL) {
                return this.http.put("".concat(this.host).concat(apiURL), data);
              },
            },
            {
              key: "deleteData",
              value: function deleteData(id, apiURL) {
                var httpOptions = {
                  headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__[
                    "HttpHeaders"
                  ]({
                    "Content-Type": "application/json",
                  }),
                  body: {
                    id: id,
                  },
                };
                return this.http["delete"](
                  "".concat(this.host).concat(apiURL),
                  httpOptions
                );
              },
            },
          ]);

          return CoreService;
        })();

        CoreService.ctorParameters = function () {
          return [
            {
              type:
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            },
          ];
        };

        CoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"](
          [
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
              providedIn: "root",
            }),
          ],
          CoreService
        );
        /***/
      },

    /***/
    "./src/app/services/customer.service.ts":
      /*!**********************************************!*\
    !*** ./src/app/services/customer.service.ts ***!
    \**********************************************/

      /*! exports provided: CustomerService */

      /***/
      function srcAppServicesCustomerServiceTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "CustomerService",
          function () {
            return CustomerService;
          }
        );
        /* harmony import */

        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! tslib */
          "./node_modules/tslib/tslib.es6.js"
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */
          "./node_modules/@angular/core/fesm2015/core.js"
        );
        /* harmony import */

        var _core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./core.service */
          "./src/app/services/core.service.ts"
        );

        var CustomerService = /*#__PURE__*/ (function () {
          function CustomerService(coreService) {
            _classCallCheck(this, CustomerService);

            this.coreService = coreService;
            this.apiUrl = "api/customers/";
          }

          _createClass(CustomerService, [
            {
              key: "getCustomers",
              value: function getCustomers() {
                var page =
                  arguments.length > 0 && arguments[0] !== undefined
                    ? arguments[0]
                    : 1;
                var searchquery =
                  arguments.length > 1 && arguments[1] !== undefined
                    ? arguments[1]
                    : "";
                return this.coreService.getData(
                  ""
                    .concat(this.apiUrl, "?page=")
                    .concat(page, "&searchquery=")
                    .concat(searchquery)
                );
              },
            },
            {
              key: "saveCustomer",
              value: function saveCustomer(customer) {
                return this.coreService.postData(customer, this.apiUrl);
              },
            },
            {
              key: "updateCustomer",
              value: function updateCustomer(customer) {
                return this.coreService.putData(customer, this.apiUrl);
              },
            },
          ]);

          return CustomerService;
        })();

        CustomerService.ctorParameters = function () {
          return [
            {
              type: _core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"],
            },
          ];
        };

        CustomerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"](
          [
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
              providedIn: "root",
            }),
          ],
          CustomerService
        );
        /***/
      },

    /***/
    "./src/app/services/hire.service.ts":
      /*!******************************************!*\
    !*** ./src/app/services/hire.service.ts ***!
    \******************************************/

      /*! exports provided: HireService */

      /***/
      function srcAppServicesHireServiceTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, "HireService", function () {
          return HireService;
        });
        /* harmony import */

        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! tslib */
          "./node_modules/tslib/tslib.es6.js"
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */
          "./node_modules/@angular/core/fesm2015/core.js"
        );
        /* harmony import */

        var _core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./core.service */
          "./src/app/services/core.service.ts"
        );

        var HireService = /*#__PURE__*/ (function () {
          function HireService(coreService) {
            _classCallCheck(this, HireService);

            this.coreService = coreService;
            this.apiUrl = "api/hires/";
          }

          _createClass(HireService, [
            {
              key: "getHires",
              value: function getHires() {
                var page =
                  arguments.length > 0 && arguments[0] !== undefined
                    ? arguments[0]
                    : 1;
                var searchquery =
                  arguments.length > 1 && arguments[1] !== undefined
                    ? arguments[1]
                    : "";
                var customerId =
                  arguments.length > 2 && arguments[2] !== undefined
                    ? arguments[2]
                    : "";
                return this.coreService.getData(
                  ""
                    .concat(this.apiUrl, "?page=")
                    .concat(page, "&searchquery=")
                    .concat(searchquery, "&cid=")
                    .concat(customerId)
                );
              },
            },
            {
              key: "completeHire",
              value: function completeHire(data) {
                return this.coreService.postData(
                  data,
                  "".concat(this.apiUrl, "complete")
                );
              },
            },
            {
              key: "processHire",
              value: function processHire(data) {
                return this.coreService.postData(data, this.apiUrl);
              },
            },
            {
              key: "processOverduePayment",
              value: function processOverduePayment(data) {
                return this.coreService.postData(
                  data,
                  "".concat(this.apiUrl, "overdue")
                );
              },
            },
          ]);

          return HireService;
        })();

        HireService.ctorParameters = function () {
          return [
            {
              type: _core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"],
            },
          ];
        };

        HireService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"](
          [
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
              providedIn: "root",
            }),
          ],
          HireService
        );
        /***/
      },

    /***/
    "./src/app/services/notification.service.ts":
      /*!**************************************************!*\
    !*** ./src/app/services/notification.service.ts ***!
    \**************************************************/

      /*! exports provided: NotificationService */

      /***/
      function srcAppServicesNotificationServiceTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "NotificationService",
          function () {
            return NotificationService;
          }
        );
        /* harmony import */

        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! tslib */
          "./node_modules/tslib/tslib.es6.js"
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */
          "./node_modules/@angular/core/fesm2015/core.js"
        );
        /* harmony import */

        var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ngx-toastr */
          "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js"
        );

        var NotificationService = /*#__PURE__*/ (function () {
          function NotificationService(toastr) {
            _classCallCheck(this, NotificationService);

            this.toastr = toastr;
          }

          _createClass(NotificationService, [
            {
              key: "showSuccess",
              value: function showSuccess(message, title) {
                this.toastr.success(message, title);
              },
            },
            {
              key: "showError",
              value: function showError(message, title) {
                this.toastr.error(message, title);
              },
            },
            {
              key: "showInfo",
              value: function showInfo(message, title) {
                this.toastr.info(message, title);
              },
            },
            {
              key: "showWarning",
              value: function showWarning(message, title) {
                this.toastr.warning(message, title);
              },
            },
          ]);

          return NotificationService;
        })();

        NotificationService.ctorParameters = function () {
          return [
            {
              type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            },
          ];
        };

        NotificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"](
          [
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
              providedIn: "root",
            }),
          ],
          NotificationService
        );
        /***/
      },

    /***/
    "./src/app/services/transaction.service.ts":
      /*!*************************************************!*\
    !*** ./src/app/services/transaction.service.ts ***!
    \*************************************************/

      /*! exports provided: TransactionService */

      /***/
      function srcAppServicesTransactionServiceTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "TransactionService",
          function () {
            return TransactionService;
          }
        );
        /* harmony import */

        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! tslib */
          "./node_modules/tslib/tslib.es6.js"
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */
          "./node_modules/@angular/core/fesm2015/core.js"
        );
        /* harmony import */

        var _core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./core.service */
          "./src/app/services/core.service.ts"
        );

        var TransactionService = /*#__PURE__*/ (function () {
          function TransactionService(coreService) {
            _classCallCheck(this, TransactionService);

            this.coreService = coreService;
            this.apiUrl = "api/transactions/";
          }

          _createClass(TransactionService, [
            {
              key: "getTransacts",
              value: function getTransacts() {
                var page =
                  arguments.length > 0 && arguments[0] !== undefined
                    ? arguments[0]
                    : 1;
                var searchquery =
                  arguments.length > 1 && arguments[1] !== undefined
                    ? arguments[1]
                    : "";
                return this.coreService.getData(
                  ""
                    .concat(this.apiUrl, "?page=")
                    .concat(page, "&searchquery=")
                    .concat(searchquery)
                );
              },
            },
          ]);

          return TransactionService;
        })();

        TransactionService.ctorParameters = function () {
          return [
            {
              type: _core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"],
            },
          ];
        };

        TransactionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"](
          [
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
              providedIn: "root",
            }),
          ],
          TransactionService
        );
        /***/
      },

    /***/
    "./src/app/services/vehicle-manufacturer.service.ts":
      /*!**********************************************************!*\
    !*** ./src/app/services/vehicle-manufacturer.service.ts ***!
    \**********************************************************/

      /*! exports provided: VehicleManufacturerService */

      /***/
      function srcAppServicesVehicleManufacturerServiceTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "VehicleManufacturerService",
          function () {
            return VehicleManufacturerService;
          }
        );
        /* harmony import */

        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! tslib */
          "./node_modules/tslib/tslib.es6.js"
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */
          "./node_modules/@angular/core/fesm2015/core.js"
        );
        /* harmony import */

        var _core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./core.service */
          "./src/app/services/core.service.ts"
        );

        var VehicleManufacturerService = /*#__PURE__*/ (function () {
          function VehicleManufacturerService(coreService) {
            _classCallCheck(this, VehicleManufacturerService);

            this.coreService = coreService;
            this.apiUrl = "api/manufacturers/";
          }

          _createClass(VehicleManufacturerService, [
            {
              key: "getManufacturers",
              value: function getManufacturers() {
                return this.coreService.getData(this.apiUrl);
              },
            },
          ]);

          return VehicleManufacturerService;
        })();

        VehicleManufacturerService.ctorParameters = function () {
          return [
            {
              type: _core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"],
            },
          ];
        };

        VehicleManufacturerService = tslib__WEBPACK_IMPORTED_MODULE_0__[
          "__decorate"
        ](
          [
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
              providedIn: "root",
            }),
          ],
          VehicleManufacturerService
        );
        /***/
      },

    /***/
    "./src/app/services/vehicle-type.service.ts":
      /*!**************************************************!*\
    !*** ./src/app/services/vehicle-type.service.ts ***!
    \**************************************************/

      /*! exports provided: VehicleTypeService */

      /***/
      function srcAppServicesVehicleTypeServiceTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "VehicleTypeService",
          function () {
            return VehicleTypeService;
          }
        );
        /* harmony import */

        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! tslib */
          "./node_modules/tslib/tslib.es6.js"
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */
          "./node_modules/@angular/core/fesm2015/core.js"
        );
        /* harmony import */

        var _core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./core.service */
          "./src/app/services/core.service.ts"
        );

        var VehicleTypeService = /*#__PURE__*/ (function () {
          function VehicleTypeService(coreService) {
            _classCallCheck(this, VehicleTypeService);

            this.coreService = coreService;
            this.apiUrl = "api/vehicletypes/";
          }

          _createClass(VehicleTypeService, [
            {
              key: "getVehicleTypes",
              value: function getVehicleTypes() {
                return this.coreService.getData(this.apiUrl);
              },
            },
          ]);

          return VehicleTypeService;
        })();

        VehicleTypeService.ctorParameters = function () {
          return [
            {
              type: _core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"],
            },
          ];
        };

        VehicleTypeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"](
          [
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
              providedIn: "root",
            }),
          ],
          VehicleTypeService
        );
        /***/
      },

    /***/
    "./src/app/services/vehicle.service.ts":
      /*!*********************************************!*\
    !*** ./src/app/services/vehicle.service.ts ***!
    \*********************************************/

      /*! exports provided: VehicleService */

      /***/
      function srcAppServicesVehicleServiceTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "VehicleService",
          function () {
            return VehicleService;
          }
        );
        /* harmony import */

        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! tslib */
          "./node_modules/tslib/tslib.es6.js"
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */
          "./node_modules/@angular/core/fesm2015/core.js"
        );
        /* harmony import */

        var _core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./core.service */
          "./src/app/services/core.service.ts"
        );

        var VehicleService = /*#__PURE__*/ (function () {
          function VehicleService(coreService) {
            _classCallCheck(this, VehicleService);

            this.coreService = coreService;
            this.apiUrl = "api/vehicles";
          }

          _createClass(VehicleService, [
            {
              key: "getVehicles",
              value: function getVehicles() {
                var page =
                  arguments.length > 0 && arguments[0] !== undefined
                    ? arguments[0]
                    : 1;
                var searchquery =
                  arguments.length > 1 && arguments[1] !== undefined
                    ? arguments[1]
                    : "";
                return this.coreService.getData(
                  ""
                    .concat(this.apiUrl, "?page=")
                    .concat(page, "&searchquery=")
                    .concat(searchquery)
                );
              },
            },
            {
              key: "getVehicle",
              value: function getVehicle(id) {
                return this.coreService.getData(
                  "".concat(this.apiUrl, "/").concat(id)
                );
              },
            },
            {
              key: "saveVehicles",
              value: function saveVehicles(vehicle) {
                return this.coreService.postData(vehicle, this.apiUrl);
              },
            },
            {
              key: "updateVehicle",
              value: function updateVehicle(vehicle) {
                return this.coreService.putData(vehicle, this.apiUrl);
              },
            },
            {
              key: "deleteVehicle",
              value: function deleteVehicle(id) {
                return this.coreService.deleteData(id, this.apiUrl);
              },
            },
          ]);

          return VehicleService;
        })();

        VehicleService.ctorParameters = function () {
          return [
            {
              type: _core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"],
            },
          ];
        };

        VehicleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"](
          [
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
              providedIn: "root",
            }),
          ],
          VehicleService
        );
        /***/
      },

    /***/
    "./src/app/signup/signup.component.css":
      /*!*********************************************!*\
    !*** ./src/app/signup/signup.component.css ***!
    \*********************************************/

      /*! exports provided: default */

      /***/
      function srcAppSignupSignupComponentCss(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */

        __webpack_exports__["default"] =
          "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyJ9 */";
        /***/
      },

    /***/
    "./src/app/signup/signup.component.ts":
      /*!********************************************!*\
    !*** ./src/app/signup/signup.component.ts ***!
    \********************************************/

      /*! exports provided: SignupComponent */

      /***/
      function srcAppSignupSignupComponentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "SignupComponent",
          function () {
            return SignupComponent;
          }
        );
        /* harmony import */

        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! tslib */
          "./node_modules/tslib/tslib.es6.js"
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */
          "./node_modules/@angular/core/fesm2015/core.js"
        );
        /* harmony import */

        var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/router */
          "./node_modules/@angular/router/fesm2015/router.js"
        );
        /* harmony import */

        var _models_Customers_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../models/Customers.model */
          "./src/app/models/Customers.model.ts"
        );
        /* harmony import */

        var _services_customer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../services/customer.service */
          "./src/app/services/customer.service.ts"
        );
        /* harmony import */

        var _services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../services/notification.service */
          "./src/app/services/notification.service.ts"
        );

        var SignupComponent = /*#__PURE__*/ (function () {
          function SignupComponent(customerService, notifyService, router) {
            _classCallCheck(this, SignupComponent);

            this.customerService = customerService;
            this.notifyService = notifyService;
            this.router = router;
            this.userProfile = new _models_Customers_model__WEBPACK_IMPORTED_MODULE_3__[
              "Customer"
            ](null, "", "", "", "", "", "male");
          }

          _createClass(SignupComponent, [
            {
              key: "ngOnInit",
              value: function ngOnInit() {},
            },
            {
              key: "onSubmit",
              value: function onSubmit() {
                var _this27 = this;

                this.isContactingServer = true;
                this.customerService.saveCustomer(this.userProfile).subscribe(
                  function (res) {
                    _this27.isContactingServer = false;

                    if (res.success) {
                      _this27.notifyService.showSuccess(
                        "Account created successfully",
                        "Success"
                      );

                      _this27.router.navigate(["/login"]);
                    } else {
                      _this27.notifyService.showError(
                        res.message,
                        "Operation failed"
                      );
                    }
                  },
                  function (reason) {
                    _this27.notifyService.showError(
                      "We were unable to process your request",
                      "Operation failed"
                    );
                  }
                );
              },
            },
          ]);

          return SignupComponent;
        })();

        SignupComponent.ctorParameters = function () {
          return [
            {
              type:
                _services_customer_service__WEBPACK_IMPORTED_MODULE_4__[
                  "CustomerService"
                ],
            },
            {
              type:
                _services_notification_service__WEBPACK_IMPORTED_MODULE_5__[
                  "NotificationService"
                ],
            },
            {
              type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            },
          ];
        };

        SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"](
          [
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
              selector: "app-signup",
              template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](
                __webpack_require__(
                  /*! raw-loader!./signup.component.html */
                  "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html"
                )
              )["default"],
              styles: [
                tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](
                  __webpack_require__(
                    /*! ./signup.component.css */
                    "./src/app/signup/signup.component.css"
                  )
                )["default"],
              ],
            }),
          ],
          SignupComponent
        );
        /***/
      },

    /***/
    "./src/app/vehicle-listing/vehicle-listing.component.css":
      /*!***************************************************************!*\
    !*** ./src/app/vehicle-listing/vehicle-listing.component.css ***!
    \***************************************************************/

      /*! exports provided: default */

      /***/
      function srcAppVehicleListingVehicleListingComponentCss(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */

        __webpack_exports__["default"] =
          "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlaGljbGUtbGlzdGluZy92ZWhpY2xlLWxpc3RpbmcuY29tcG9uZW50LmNzcyJ9 */";
        /***/
      },

    /***/
    "./src/app/vehicle-listing/vehicle-listing.component.ts":
      /*!**************************************************************!*\
    !*** ./src/app/vehicle-listing/vehicle-listing.component.ts ***!
    \**************************************************************/

      /*! exports provided: VehicleListingComponent */

      /***/
      function srcAppVehicleListingVehicleListingComponentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "VehicleListingComponent",
          function () {
            return VehicleListingComponent;
          }
        );
        /* harmony import */

        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! tslib */
          "./node_modules/tslib/tslib.es6.js"
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */
          "./node_modules/@angular/core/fesm2015/core.js"
        );
        /* harmony import */

        var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @ng-bootstrap/ng-bootstrap */
          "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js"
        );
        /* harmony import */

        var _services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../services/notification.service */
          "./src/app/services/notification.service.ts"
        );
        /* harmony import */

        var _services_vehicle_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../services/vehicle.service */
          "./src/app/services/vehicle.service.ts"
        );
        /* harmony import */

        var _vehicle_profile_modal_vehicle_profile_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../vehicle-profile-modal/vehicle-profile-modal.component */
          "./src/app/vehicle-profile-modal/vehicle-profile-modal.component.ts"
        );

        var VehicleListingComponent = /*#__PURE__*/ (function () {
          function VehicleListingComponent(
            vehicleService,
            modalService,
            notifyService
          ) {
            _classCallCheck(this, VehicleListingComponent);

            this.vehicleService = vehicleService;
            this.modalService = modalService;
            this.notifyService = notifyService;
            this.vehicles = [];
            this.isContactingServer = false;
          }

          _createClass(VehicleListingComponent, [
            {
              key: "ngOnInit",
              value: function ngOnInit() {
                this.loadVehicles();
              },
            },
            {
              key: "loadVehicles",
              value: function loadVehicles() {
                var _this28 = this;

                var page =
                  arguments.length > 0 && arguments[0] !== undefined
                    ? arguments[0]
                    : 1;
                var searchquery =
                  arguments.length > 1 && arguments[1] !== undefined
                    ? arguments[1]
                    : "";
                if (this.pager && page > this.pager.totalPages) return;
                this.isContactingServer = true;
                this.vehicleService.getVehicles(page, searchquery).subscribe(
                  function (res) {
                    _this28.isContactingServer = false;

                    if (res.success) {
                      _this28.pager = res.data;
                      _this28.vehicles = [].concat(
                        _toConsumableArray(_this28.vehicles),
                        _toConsumableArray(res.data.results)
                      );

                      if (!searchquery) {
                        _this28.hasMore =
                          Number(_this28.pager.page) <
                          Number(_this28.pager.totalPages);
                      }
                    }
                  },
                  function (reason) {
                    console.log(reason);
                    _this28.isContactingServer = false;

                    _this28.notifyService.showError(
                      "We encountered a problem while loading data",
                      "Operation failed."
                    );
                  }
                );
              },
            },
            {
              key: "onViewVehicleProfile",
              value: function onViewVehicleProfile(vehicle) {
                var modalRef = this.modalService.open(
                  _vehicle_profile_modal_vehicle_profile_modal_component__WEBPACK_IMPORTED_MODULE_5__[
                    "VehicleProfileModalComponent"
                  ]
                );
                modalRef.componentInstance.vehicle = vehicle;
              },
            },
            {
              key: "onSearch",
              value: function onSearch() {
                this.hasMore = false;
                this.vehicles = [];
                this.loadVehicles(0, this.searchquery);
              },
            },
          ]);

          return VehicleListingComponent;
        })();

        VehicleListingComponent.ctorParameters = function () {
          return [
            {
              type:
                _services_vehicle_service__WEBPACK_IMPORTED_MODULE_4__[
                  "VehicleService"
                ],
            },
            {
              type:
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__[
                  "NgbModal"
                ],
            },
            {
              type:
                _services_notification_service__WEBPACK_IMPORTED_MODULE_3__[
                  "NotificationService"
                ],
            },
          ];
        };

        VehicleListingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__[
          "__decorate"
        ](
          [
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
              selector: "app-vehicle-listing",
              template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](
                __webpack_require__(
                  /*! raw-loader!./vehicle-listing.component.html */
                  "./node_modules/raw-loader/dist/cjs.js!./src/app/vehicle-listing/vehicle-listing.component.html"
                )
              )["default"],
              styles: [
                tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](
                  __webpack_require__(
                    /*! ./vehicle-listing.component.css */
                    "./src/app/vehicle-listing/vehicle-listing.component.css"
                  )
                )["default"],
              ],
            }),
          ],
          VehicleListingComponent
        );
        /***/
      },

    /***/
    "./src/app/vehicle-profile-modal/vehicle-profile-modal.component.css":
      /*!***************************************************************************!*\
    !*** ./src/app/vehicle-profile-modal/vehicle-profile-modal.component.css ***!
    \***************************************************************************/

      /*! exports provided: default */

      /***/
      function srcAppVehicleProfileModalVehicleProfileModalComponentCss(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */

        __webpack_exports__["default"] =
          "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlaGljbGUtcHJvZmlsZS1tb2RhbC92ZWhpY2xlLXByb2ZpbGUtbW9kYWwuY29tcG9uZW50LmNzcyJ9 */";
        /***/
      },

    /***/
    "./src/app/vehicle-profile-modal/vehicle-profile-modal.component.ts":
      /*!**************************************************************************!*\
    !*** ./src/app/vehicle-profile-modal/vehicle-profile-modal.component.ts ***!
    \**************************************************************************/

      /*! exports provided: VehicleProfileModalComponent */

      /***/
      function srcAppVehicleProfileModalVehicleProfileModalComponentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "VehicleProfileModalComponent",
          function () {
            return VehicleProfileModalComponent;
          }
        );
        /* harmony import */

        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! tslib */
          "./node_modules/tslib/tslib.es6.js"
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */
          "./node_modules/@angular/core/fesm2015/core.js"
        );
        /* harmony import */

        var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @ng-bootstrap/ng-bootstrap */
          "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js"
        );

        var VehicleProfileModalComponent = /*#__PURE__*/ (function () {
          function VehicleProfileModalComponent(activeModal) {
            _classCallCheck(this, VehicleProfileModalComponent);

            this.activeModal = activeModal;
          }

          _createClass(VehicleProfileModalComponent, [
            {
              key: "ngOnInit",
              value: function ngOnInit() {},
            },
          ]);

          return VehicleProfileModalComponent;
        })();

        VehicleProfileModalComponent.ctorParameters = function () {
          return [
            {
              type:
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__[
                  "NgbActiveModal"
                ],
            },
          ];
        };

        VehicleProfileModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__[
          "__decorate"
        ](
          [
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
              selector: "app-vehicle-profile-modal",
              template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](
                __webpack_require__(
                  /*! raw-loader!./vehicle-profile-modal.component.html */
                  "./node_modules/raw-loader/dist/cjs.js!./src/app/vehicle-profile-modal/vehicle-profile-modal.component.html"
                )
              )["default"],
              styles: [
                tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](
                  __webpack_require__(
                    /*! ./vehicle-profile-modal.component.css */
                    "./src/app/vehicle-profile-modal/vehicle-profile-modal.component.css"
                  )
                )["default"],
              ],
            }),
          ],
          VehicleProfileModalComponent
        );
        /***/
      },

    /***/
    "./src/environments/environment.ts":
      /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

      /*! exports provided: environment */

      /***/
      function srcEnvironmentsEnvironmentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, "environment", function () {
          return environment;
        });
        /* harmony import */

        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! tslib */
          "./node_modules/tslib/tslib.es6.js"
        ); // This file can be replaced during build by using the `fileReplacements` array.
        // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
        // The list of file replacements can be found in `angular.json`.

        var environment = {
          production: false,
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

        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! tslib */
          "./node_modules/tslib/tslib.es6.js"
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */
          "./node_modules/@angular/core/fesm2015/core.js"
        );
        /* harmony import */

        var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/platform-browser-dynamic */
          "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js"
        );
        /* harmony import */

        var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./app/app.module */
          "./src/app/app.module.ts"
        );
        /* harmony import */

        var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./environments/environment */
          "./src/environments/environment.ts"
        );

        if (
          _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"]
            .production
        ) {
          Object(
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"]
          )();
        }

        Object(
          _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__[
            "platformBrowserDynamic"
          ]
        )()
          .bootstrapModule(
            _app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]
          )
          ["catch"](function (err) {
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
          /*! C:\Users\Jude-JohnB\Documents\MyOffice\My Portfolio\online-car-rental\client\src\main.ts */
          "./src/main.ts"
        );
        /***/
      },
  },
  [[0, "runtime", "vendor"]],
]);
//# sourceMappingURL=main-es5.js.map
