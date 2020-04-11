import { __decorate } from 'tslib';
import { Component, NgModule } from '@angular/core';

let ShareButtonComponent = class ShareButtonComponent {
};
ShareButtonComponent = __decorate([
    Component({
        selector: 'ngx-share-button',
        template: "<button class=\"ngx-share-button\"><ng-content></ng-content></button>\r\n",
        styles: [".ngx-share-button{border:1px solid red}"]
    })
], ShareButtonComponent);

let ShareButtonModule = class ShareButtonModule {
};
ShareButtonModule = __decorate([
    NgModule({
        declarations: [ShareButtonComponent],
        exports: [ShareButtonComponent],
    })
], ShareButtonModule);

/**
 * Generated bundle index. Do not edit.
 */

export { ShareButtonComponent, ShareButtonModule };
//# sourceMappingURL=ngx-share-button.js.map
