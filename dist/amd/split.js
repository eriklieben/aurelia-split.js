var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "split.js"], function (require, exports, aurelia_framework_1, Split) {
    "use strict";
    var SplitCustomAttribute = (function () {
        function SplitCustomAttribute(element) {
            this.element = element;
            this.sizes = [];
        }
        SplitCustomAttribute.prototype.attached = function () {
            var _this = this;
            var options = {};
            if (options.sizes) {
                options.sizes = this.sizes;
            }
            if (options.minSize) {
                options.minSize = this.minSize;
            }
            if (options.gutterSize) {
                options.gutterSize = this.gutterSize;
            }
            if (options.snapOffset) {
                options.snapOffset = this.snapOffset;
            }
            if (options.direction) {
                options.direction = this.direction;
            }
            if (options.cursor) {
                options.cursor = this.cursor;
            }
            options.onDrag = function () { return _this.element.dispatchEvent(new CustomEvent("split-on-drag", { bubbles: true })); };
            options.onDragStart = function () { return _this.element.dispatchEvent(new CustomEvent("split-on-drag-start", { bubbles: true })); };
            options.onDragEnd = function () { return _this.element.dispatchEvent(new CustomEvent("split-on-drag-end", { bubbles: true })); };
            var array = [];
            for (var idx = 0; idx < this.element.children.length; idx++) {
                this.element.children[idx].classList.add("split");
                array.push(this.element.children[idx]);
            }
            Split(array, options);
        };
        __decorate([
            aurelia_framework_1.bindable({ bindingMode: aurelia_framework_1.bindingMode.oneTime }), 
            __metadata('design:type', Array)
        ], SplitCustomAttribute.prototype, "sizes", void 0);
        __decorate([
            aurelia_framework_1.bindable({ bindingMode: aurelia_framework_1.bindingMode.oneTime }), 
            __metadata('design:type', Object)
        ], SplitCustomAttribute.prototype, "minSize", void 0);
        __decorate([
            aurelia_framework_1.bindable({ bindingMode: aurelia_framework_1.bindingMode.oneTime }), 
            __metadata('design:type', Number)
        ], SplitCustomAttribute.prototype, "gutterSize", void 0);
        __decorate([
            aurelia_framework_1.bindable({ bindingMode: aurelia_framework_1.bindingMode.oneTime }), 
            __metadata('design:type', Number)
        ], SplitCustomAttribute.prototype, "snapOffset", void 0);
        __decorate([
            aurelia_framework_1.bindable({ bindingMode: aurelia_framework_1.bindingMode.oneTime }), 
            __metadata('design:type', String)
        ], SplitCustomAttribute.prototype, "direction", void 0);
        __decorate([
            aurelia_framework_1.bindable({ bindingMode: aurelia_framework_1.bindingMode.oneTime }), 
            __metadata('design:type', String)
        ], SplitCustomAttribute.prototype, "cursor", void 0);
        SplitCustomAttribute = __decorate([
            aurelia_framework_1.inject(aurelia_framework_1.DOM.Element), 
            __metadata('design:paramtypes', [Element])
        ], SplitCustomAttribute);
        return SplitCustomAttribute;
    }());
    exports.SplitCustomAttribute = SplitCustomAttribute;
});

//# sourceMappingURL=split.js.map
