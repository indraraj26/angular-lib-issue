import { __decorate } from 'tslib';
import { Component, NgModule } from '@angular/core';

import * as ɵngcc0 from '@angular/core';

const _c0 = ["*"];
let ShareButtonComponent = class ShareButtonComponent {
};
ShareButtonComponent.ɵfac = function ShareButtonComponent_Factory(t) { return new (t || ShareButtonComponent)(); };
ShareButtonComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ShareButtonComponent, selectors: [["ngx-share-button"]], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "ngx-share-button"]], template: function ShareButtonComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "button", 0);
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, styles: [".ngx-share-button[_ngcontent-%COMP%]{border:1px solid red}"] });

let ShareButtonModule = class ShareButtonModule {
};
ShareButtonModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ShareButtonModule });
ShareButtonModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ShareButtonModule_Factory(t) { return new (t || ShareButtonModule)(); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ShareButtonComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-share-button',
                template: "<button class=\"ngx-share-button\"><ng-content></ng-content></button>\r\n",
                styles: [".ngx-share-button{border:1px solid red}"]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ShareButtonModule, { declarations: [ShareButtonComponent], exports: [ShareButtonComponent] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ShareButtonModule, [{
        type: NgModule,
        args: [{
                declarations: [ShareButtonComponent],
                exports: [ShareButtonComponent]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { ShareButtonComponent, ShareButtonModule };

//# sourceMappingURL=ngx-share-button.js.map