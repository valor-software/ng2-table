webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var angular2_1 = __webpack_require__(6);
	var ng2_table_config_1 = __webpack_require__(374);
	var w = window;
	if (w && w.__theme === 'bs4') {
	    ng2_table_config_1.Ng2TableConfig.theme = ng2_table_config_1.Ng2TableTheme.BS4;
	}
	var table_section_1 = __webpack_require__(377);
	var gettingStarted = __webpack_require__(369);
	var Demo = (function () {
	    function Demo() {
	        this.isBs3 = ng2_table_config_1.Ng2TableConfig.theme === ng2_table_config_1.Ng2TableTheme.BS3;
	    }
	    Demo = __decorate([
	        angular2_1.Component({
	            selector: 'app'
	        }),
	        angular2_1.View({
	            template: "\n  <!--<demo-header>Loading header</demo-header>-->\n\n  <main class=\"bd-pageheader\">\n    <div class=\"container\">\n      <h1>ng2-table</h1>\n      <p>Native Angular2 directives for Table</p>\n      <a class=\"btn btn-primary\" href=\"https://github.com/valor-software/ng2-table\">View on GitHub</a>\n      <div class=\"row\">\n        <!--<div class=\"col-lg-1\"><iframe src=\"https://ghbtns.com/github-btn.html?user=valor-software&repo=ng2-bootstrap&type=star&count=true\" frameborder=\"0\" scrolling=\"0\" width=\"170px\" height=\"20px\"></iframe></div>\n        <div class=\"col-lg-1\"><iframe src=\"https://ghbtns.com/github-btn.html?user=valor-software&repo=ng2-bootstrap&type=fork&count=true\" frameborder=\"0\" scrolling=\"0\" width=\"170px\" height=\"20px\"></iframe></div>-->\n      </div>\n    </div>\n  </main>\n\n  <div class=\"container\">\n    <div class=\"col-md-12 card card-block panel panel-default\">\n      <selection>\n          <h1>ng2-table available with:\n          <a class=\"btn btn-default btn-secondary btn-lg\" [ng-class]=\"{active: isBs3}\" href=\"./index.html\">Bootstrap 3</a>\n          <a class=\"btn btn-default btn-secondary btn-lg\" [ng-class]=\"{active: !isBs3}\" href=\"./index-bs4.html\">Bootstrap 4</a>\n          </h1>\n      </selection>\n    </div>\n    <br>\n    <section id=\"getting-started\">" + gettingStarted + "</section>\n\n    <table-section class=\"col-md-12\"></table-section>\n  </div>\n\n  </div>\n  <footer class=\"footer\">\n    <div class=\"container\">\n      <p class=\"text-muted text-center\"><a href=\"https://github.com/valor-software/ng2-table\">ng2-table</a> is maintained by <a href=\"https://github.com/valor-software\">valor-software</a>.</p>\n    </div>\n  </footer>\n  ",
	            directives: [
	                angular2_1.NgClass,
	                table_section_1.TableSection
	            ]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Demo);
	    return Demo;
	})();
	exports.Demo = Demo;
	angular2_1.bootstrap(Demo);


/***/ },

/***/ 75:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var angular2_1 = __webpack_require__(6);
	var dropdown_service_1 = __webpack_require__(209);
	var Dropdown = (function () {
	    function Dropdown(el) {
	        this.el = el;
	        this.onToggle = new angular2_1.EventEmitter();
	    }
	    Dropdown.prototype.onInit = function () {
	        this.autoClose = this.autoClose || dropdown_service_1.ALWAYS;
	        this.keyboardNav = typeof this.keyboardNav !== 'undefined';
	        this.dropdownAppendToBody = typeof this.dropdownAppendToBody !== 'undefined';
	        if (this.isOpen) {
	        }
	    };
	    Dropdown.prototype.onDestroy = function () {
	        if (this.dropdownAppendToBody && this.menuEl) {
	            this.menuEl.nativeElement.remove();
	        }
	    };
	    Object.defineProperty(Dropdown.prototype, "dropDownMenu", {
	        set: function (dropdownMenu) {
	            this.menuEl = dropdownMenu.el;
	            if (dropdownMenu.templateUrl) {
	                this.dropdownMenuTemplateUrl = dropdownMenu.templateUrl;
	            }
	            if (this.dropdownAppendToBody) {
	                window.document.body.appendChild(this.menuEl.nativeElement);
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Dropdown.prototype, "dropDownToggle", {
	        set: function (dropdownToggle) {
	            this.toggleEl = dropdownToggle.el;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Dropdown.prototype.toggle = function (open) {
	        return this.isOpen = arguments.length ? !!open : !this.isOpen;
	    };
	    Object.defineProperty(Dropdown.prototype, "isOpen", {
	        get: function () {
	            return this._isOpen;
	        },
	        set: function (value) {
	            this._isOpen = !!value;
	            if (this.dropdownAppendToBody && this.menuEl) {
	            }
	            if (this.isOpen) {
	                if (this.dropdownMenuTemplateUrl) {
	                }
	                this.focusToggleElement();
	                dropdown_service_1.dropdownService.open(this);
	            }
	            else {
	                if (this.dropdownMenuTemplateUrl) {
	                }
	                dropdown_service_1.dropdownService.close(this);
	                this.selectedOption = null;
	            }
	            this.onToggle.next(this.isOpen);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Dropdown.prototype.focusDropdownEntry = function (keyCode) {
	        var hostEl = this.menuEl ?
	            this.menuEl.nativeElement :
	            this.el.nativeElement.getElementsByTagName('ul')[0];
	        if (!hostEl) {
	            return;
	        }
	        var elems = hostEl.getElementsByTagName('a');
	        if (!elems || !elems.length) {
	            return;
	        }
	        switch (keyCode) {
	            case (40):
	                if (typeof this.selectedOption !== 'number') {
	                    this.selectedOption = 0;
	                    break;
	                }
	                if (this.selectedOption === elems.length - 1) {
	                    break;
	                }
	                this.selectedOption++;
	                break;
	            case (38):
	                if (typeof this.selectedOption !== 'number') {
	                    return;
	                }
	                if (this.selectedOption === 0) {
	                    break;
	                }
	                this.selectedOption--;
	                break;
	        }
	        elems[this.selectedOption].focus();
	    };
	    Dropdown.prototype.focusToggleElement = function () {
	        if (this.toggleEl) {
	            this.toggleEl.nativeElement.focus();
	        }
	    };
	    Dropdown = __decorate([
	        angular2_1.Directive({
	            selector: '[dropdown]',
	            properties: ['isOpen', 'autoClose', 'keyboardNav', 'dropdownAppendToBody'],
	            events: ['onToggle'],
	            host: {
	                '[class.dropdown]': 'true',
	                '[class.open]': 'isOpen'
	            }
	        }), 
	        __metadata('design:paramtypes', [angular2_1.ElementRef])
	    ], Dropdown);
	    return Dropdown;
	})();
	exports.Dropdown = Dropdown;


/***/ },

/***/ 124:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var angular2_1 = __webpack_require__(6);
	function setProperty(renderer, elementRef, propName, propValue) {
	    renderer.setElementProperty(elementRef, propName, propValue);
	}
	var Ng2TableFilter = (function () {
	    function Ng2TableFilter(element, renderer) {
	        this.element = element;
	        this.renderer = renderer;
	        this.config = {
	            filterString: '',
	            columnName: 'name'
	        };
	        this.tableChanged = new angular2_1.EventEmitter();
	        setProperty(this.renderer, this.element, 'value', this.config.filterString);
	    }
	    Ng2TableFilter.prototype.onChangeFilter = function (event) {
	        this.config.filterString = event;
	        this.tableChanged.next({ 'filtering': this.config });
	    };
	    Ng2TableFilter = __decorate([
	        angular2_1.Directive({
	            selector: '[ng2-table-filter]',
	            inputs: ['config: ng2TableFilter'],
	            outputs: ['tableChanged'],
	            host: {
	                '(input)': 'onChangeFilter($event.target.value)'
	            }
	        }), 
	        __metadata('design:paramtypes', [angular2_1.ElementRef, angular2_1.Renderer])
	    ], Ng2TableFilter);
	    return Ng2TableFilter;
	})();
	exports.Ng2TableFilter = Ng2TableFilter;


/***/ },

/***/ 125:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var angular2_1 = __webpack_require__(6);
	var Ng2ThSortable = (function () {
	    function Ng2ThSortable() {
	        this.sortChanged = new angular2_1.EventEmitter();
	    }
	    Ng2ThSortable.prototype.onToggleSort = function (event) {
	        if (event) {
	            event.preventDefault();
	        }
	        if (this.config && this.column && this.column.sort !== false) {
	            switch (this.column.sort) {
	                case 'asc':
	                    this.column.sort = 'desc';
	                    break;
	                case 'desc':
	                    this.column.sort = '';
	                    break;
	                default:
	                    this.column.sort = 'asc';
	                    break;
	            }
	            this.sortChanged.next(this.column);
	        }
	    };
	    Ng2ThSortable = __decorate([
	        angular2_1.Directive({
	            selector: '[ng2-th-sortable]',
	            inputs: ['config: ng2ThSortable', 'column'],
	            outputs: ['sortChanged'],
	            host: {
	                '(click)': 'onToggleSort($event, $target)'
	            }
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Ng2ThSortable);
	    return Ng2ThSortable;
	})();
	exports.Ng2ThSortable = Ng2ThSortable;


/***/ },

/***/ 126:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var angular2_1 = __webpack_require__(6);
	var sorting_1 = __webpack_require__(125);
	var Table = (function () {
	    function Table() {
	        this.rows = [];
	        this._columns = [];
	        this.config = {};
	        this.tableChanged = new angular2_1.EventEmitter();
	    }
	    Object.defineProperty(Table.prototype, "columns", {
	        get: function () {
	            return this._columns;
	        },
	        set: function (values) {
	            var _this = this;
	            values.forEach(function (value) {
	                var column = _this._columns.find(function (col) { return col.name === value.name; });
	                if (column) {
	                    Object.assign(column, value);
	                }
	                if (!column) {
	                    _this._columns.push(value);
	                }
	            });
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Table.prototype, "configColumns", {
	        get: function () {
	            var sortColumns = [];
	            this.columns.forEach(function (column) {
	                if (column.sort) {
	                    sortColumns.push(column);
	                }
	            });
	            return { columns: sortColumns };
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Table.prototype.onChangeTable = function (column) {
	        this.columns = [column];
	        this.tableChanged.next({ sorting: this.configColumns });
	    };
	    Table = __decorate([
	        angular2_1.Component({
	            selector: 'ng2-table, [ng2-table]',
	            inputs: ['rows', 'columns', 'config'],
	            outputs: ['tableChanged']
	        }),
	        angular2_1.View({
	            template: "\n<table class=\"table table-striped table-bordered dataTable\"\n       role=\"grid\" style=\"width: 100%;\">\n  <thead>\n  <tr role=\"row\">\n    <th *ng-for=\"#column of columns\" [ng2-th-sortable]=\"config\" [column]=\"column\" (sort-changed)=\"onChangeTable($event)\">\n      {{column.title}}\n      <i *ng-if=\"config && column.sort\" class=\"pull-right glyphicon\"\n        [ng-class]=\"{'glyphicon-chevron-down': column.sort === 'desc', 'glyphicon-chevron-up': column.sort === 'asc'}\"></i>\n    </th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ng-for=\"#row of rows\">\n    <td *ng-for=\"#column of columns\">{{row[column.name]}}</td>\n  </tr>\n  </tbody>\n</table>\n",
	            directives: [sorting_1.Ng2ThSortable, angular2_1.NgClass, angular2_1.CORE_DIRECTIVES, angular2_1.FORM_DIRECTIVES]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Table);
	    return Table;
	})();
	exports.Table = Table;


/***/ },

/***/ 127:
/***/ function(module, exports) {

	(function (Ng2BootstrapTheme) {
	    Ng2BootstrapTheme[Ng2BootstrapTheme["BS3"] = 1] = "BS3";
	    Ng2BootstrapTheme[Ng2BootstrapTheme["BS4"] = 2] = "BS4";
	})(exports.Ng2BootstrapTheme || (exports.Ng2BootstrapTheme = {}));
	var Ng2BootstrapTheme = exports.Ng2BootstrapTheme;
	var Ng2BootstrapConfig = (function () {
	    function Ng2BootstrapConfig() {
	    }
	    Object.defineProperty(Ng2BootstrapConfig, "theme", {
	        get: function () {
	            var w = window;
	            if (w && w.__theme === 'bs4') {
	                return Ng2BootstrapTheme.BS4;
	            }
	            return (this._theme || Ng2BootstrapTheme.BS3);
	        },
	        set: function (v) {
	            this._theme = v;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return Ng2BootstrapConfig;
	})();
	exports.Ng2BootstrapConfig = Ng2BootstrapConfig;


/***/ },

/***/ 128:
/***/ function(module, exports) {

	var PositionService = (function () {
	    function PositionService() {
	    }
	    Object.defineProperty(PositionService.prototype, "window", {
	        get: function () {
	            return window;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(PositionService.prototype, "document", {
	        get: function () {
	            return window.document;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    PositionService.prototype.getStyle = function (nativeEl, cssProp) {
	        if (nativeEl.currentStyle) {
	            return nativeEl.currentStyle[cssProp];
	        }
	        if (this.window.getComputedStyle) {
	            return this.window.getComputedStyle(nativeEl)[cssProp];
	        }
	        return nativeEl.style[cssProp];
	    };
	    PositionService.prototype.isStaticPositioned = function (nativeEl) {
	        return (this.getStyle(nativeEl, 'position') || 'static') === 'static';
	    };
	    PositionService.prototype.parentOffsetEl = function (nativeEl) {
	        var offsetParent = nativeEl.offsetParent || this.document;
	        while (offsetParent && offsetParent !== this.document &&
	            this.isStaticPositioned(offsetParent)) {
	            offsetParent = offsetParent.offsetParent;
	        }
	        return offsetParent || this.document;
	    };
	    ;
	    PositionService.prototype.position = function (nativeEl) {
	        var elBCR = this.offset(nativeEl);
	        var offsetParentBCR = { top: 0, left: 0 };
	        var offsetParentEl = this.parentOffsetEl(nativeEl);
	        if (offsetParentEl !== this.document) {
	            offsetParentBCR = this.offset(offsetParentEl);
	            offsetParentBCR.top += offsetParentEl.clientTop - offsetParentEl.scrollTop;
	            offsetParentBCR.left += offsetParentEl.clientLeft - offsetParentEl.scrollLeft;
	        }
	        var boundingClientRect = nativeEl.getBoundingClientRect();
	        return {
	            width: boundingClientRect.width || nativeEl.offsetWidth,
	            height: boundingClientRect.height || nativeEl.offsetHeight,
	            top: elBCR.top - offsetParentBCR.top,
	            left: elBCR.left - offsetParentBCR.left
	        };
	    };
	    PositionService.prototype.offset = function (nativeEl) {
	        var boundingClientRect = nativeEl.getBoundingClientRect();
	        return {
	            width: boundingClientRect.width || nativeEl.offsetWidth,
	            height: boundingClientRect.height || nativeEl.offsetHeight,
	            top: boundingClientRect.top + (this.window.pageYOffset || this.document.documentElement.scrollTop),
	            left: boundingClientRect.left + (this.window.pageXOffset || this.document.documentElement.scrollLeft)
	        };
	    };
	    PositionService.prototype.positionElements = function (hostEl, targetEl, positionStr, appendToBody) {
	        var positionStrParts = positionStr.split('-');
	        var pos0 = positionStrParts[0];
	        var pos1 = positionStrParts[1] || 'center';
	        var hostElPos = appendToBody ?
	            this.offset(hostEl) :
	            this.position(hostEl);
	        var targetElWidth = targetEl.offsetWidth;
	        var targetElHeight = targetEl.offsetHeight;
	        var shiftWidth = {
	            center: function () {
	                return hostElPos.left + hostElPos.width / 2 - targetElWidth / 2;
	            },
	            left: function () {
	                return hostElPos.left;
	            },
	            right: function () {
	                return hostElPos.left + hostElPos.width;
	            }
	        };
	        var shiftHeight = {
	            center: function () {
	                return hostElPos.top + hostElPos.height / 2 - targetElHeight / 2;
	            },
	            top: function () {
	                return hostElPos.top;
	            },
	            bottom: function () {
	                return hostElPos.top + hostElPos.height;
	            }
	        };
	        var targetElPos;
	        switch (pos0) {
	            case 'right':
	                targetElPos = {
	                    top: shiftHeight[pos1](),
	                    left: shiftWidth[pos0]()
	                };
	                break;
	            case 'left':
	                targetElPos = {
	                    top: shiftHeight[pos1](),
	                    left: hostElPos.left - targetElWidth
	                };
	                break;
	            case 'bottom':
	                targetElPos = {
	                    top: shiftHeight[pos0](),
	                    left: shiftWidth[pos1]()
	                };
	                break;
	            default:
	                targetElPos = {
	                    top: hostElPos.top - targetElHeight,
	                    left: shiftWidth[pos1]()
	                };
	                break;
	        }
	        return targetElPos;
	    };
	    return PositionService;
	})();
	exports.PositionService = PositionService;
	exports.positionService = new PositionService();


/***/ },

/***/ 206:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var angular2_1 = __webpack_require__(6);
	var Collapse = (function () {
	    function Collapse(el) {
	        this.el = el;
	        this.test = 'wtf';
	        this.isExpanded = true;
	        this.isCollapsed = false;
	        this.isCollapse = true;
	        this.isCollapsing = false;
	    }
	    Object.defineProperty(Collapse.prototype, "collapse", {
	        get: function () {
	            return this.isExpanded;
	        },
	        set: function (value) {
	            this.isExpanded = value;
	            this.toggle();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Collapse.prototype.toggle = function () {
	        if (this.isExpanded) {
	            this.hide();
	        }
	        else {
	            this.show();
	        }
	    };
	    Collapse.prototype.hide = function () {
	        var _this = this;
	        this.isCollapse = false;
	        this.isCollapsing = true;
	        this.isExpanded = false;
	        this.isCollapsed = true;
	        setTimeout(function () {
	            _this.height = '0';
	            _this.isCollapse = true;
	            _this.isCollapsing = false;
	        }, 4);
	    };
	    Collapse.prototype.show = function () {
	        var _this = this;
	        this.isCollapse = false;
	        this.isCollapsing = true;
	        this.isExpanded = true;
	        this.isCollapsed = false;
	        setTimeout(function () {
	            _this.height = 'auto';
	            _this.isCollapse = true;
	            _this.isCollapsing = false;
	        }, 4);
	    };
	    Collapse = __decorate([
	        angular2_1.Directive({
	            selector: '[collapse]',
	            properties: ['collapse'],
	            host: {
	                '[class.in]': 'isExpanded',
	                '[class.collapse]': 'isCollapse',
	                '[class.collapsing]': 'isCollapsing',
	                '[attr.aria-expanded]': 'isExpanded',
	                '[attr.aria-hidden]': 'isCollapsed',
	                '[style.height]': 'height'
	            }
	        }), 
	        __metadata('design:paramtypes', [angular2_1.ElementRef])
	    ], Collapse);
	    return Collapse;
	})();
	exports.Collapse = Collapse;


/***/ },

/***/ 207:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var angular2_1 = __webpack_require__(6);
	var NgTransclude = (function () {
	    function NgTransclude(viewRef) {
	        this.viewRef = viewRef;
	    }
	    Object.defineProperty(NgTransclude.prototype, "ngTransclude", {
	        get: function () {
	            return this._ngTransclude;
	        },
	        set: function (templateRef) {
	            this._ngTransclude = templateRef;
	            if (templateRef) {
	                this.viewRef.createEmbeddedView(templateRef);
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    NgTransclude = __decorate([
	        angular2_1.Directive({
	            selector: '[ng-transclude]',
	            properties: ['ngTransclude']
	        }),
	        __param(0, angular2_1.Inject(angular2_1.ViewContainerRef)), 
	        __metadata('design:paramtypes', [angular2_1.ViewContainerRef])
	    ], NgTransclude);
	    return NgTransclude;
	})();
	exports.NgTransclude = NgTransclude;


/***/ },

/***/ 208:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var angular2_1 = __webpack_require__(6);
	var dropdown_1 = __webpack_require__(75);
	var DropdownMenu = (function () {
	    function DropdownMenu(dropdown, el) {
	        this.dropdown = dropdown;
	        this.el = el;
	    }
	    DropdownMenu.prototype.onInit = function () {
	        this.dropdown.dropDownMenu = this;
	    };
	    DropdownMenu = __decorate([
	        angular2_1.Directive({
	            selector: '[dropdown-menu], .dropdown-menu',
	            properties: ['templateUrl']
	        }),
	        __param(0, angular2_1.Host()), 
	        __metadata('design:paramtypes', [dropdown_1.Dropdown, angular2_1.ElementRef])
	    ], DropdownMenu);
	    return DropdownMenu;
	})();
	exports.DropdownMenu = DropdownMenu;


/***/ },

/***/ 209:
/***/ function(module, exports) {

	exports.ALWAYS = 'always';
	exports.DISABLED = 'disabled';
	exports.OUTSIDECLICK = 'outsideClick';
	var DropdownService = (function () {
	    function DropdownService() {
	        this.closeDropdownBind = this.closeDropdown.bind(this);
	        this.keybindFilterBind = this.keybindFilter.bind(this);
	    }
	    DropdownService.prototype.open = function (dropdownScope) {
	        if (!this.openScope) {
	            window.document.addEventListener('click', this.closeDropdownBind);
	            window.document.addEventListener('keydown', this.keybindFilterBind);
	        }
	        if (this.openScope && this.openScope !== this.dropdownScope) {
	            this.openScope.isOpen = false;
	        }
	        this.openScope = dropdownScope;
	    };
	    DropdownService.prototype.close = function (dropdownScope) {
	        if (this.openScope !== dropdownScope) {
	            return;
	        }
	        this.openScope = null;
	        window.document.removeEventListener('click', this.closeDropdownBind);
	        window.document.removeEventListener('keydown', this.keybindFilterBind);
	    };
	    DropdownService.prototype.closeDropdown = function (event) {
	        if (!this.openScope) {
	            return;
	        }
	        if (event && this.openScope.autoClose === exports.DISABLED) {
	            return;
	        }
	        if (event && this.openScope.toggleEl &&
	            this.openScope.toggleEl.nativeElement === event.target) {
	            return;
	        }
	        if (event && this.openScope.autoClose === exports.OUTSIDECLICK &&
	            this.openScope.menuEl &&
	            this.openScope.menuEl.nativeElement === event.target) {
	            return;
	        }
	        this.openScope.isOpen = false;
	    };
	    DropdownService.prototype.keybindFilter = function (event) {
	        if (event.which === 27) {
	            this.openScope.focusToggleElement();
	            this.closeDropdown(null);
	            return;
	        }
	        if (this.openScope.keyboardNav && this.openScope.isOpen &&
	            (event.which === 38 || event.which === 40)) {
	            event.preventDefault();
	            event.stopPropagation();
	            this.openScope.focusDropdownEntry(event.which);
	        }
	    };
	    return DropdownService;
	})();
	exports.DropdownService = DropdownService;
	exports.dropdownService = new DropdownService();


/***/ },

/***/ 210:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var angular2_1 = __webpack_require__(6);
	var dropdown_1 = __webpack_require__(75);
	var DropdownToggle = (function () {
	    function DropdownToggle(dropdown, el) {
	        this.dropdown = dropdown;
	        this.el = el;
	        this.disabled = false;
	    }
	    DropdownToggle.prototype.onInit = function () {
	        this.dropdown.dropDownToggle = this;
	    };
	    Object.defineProperty(DropdownToggle.prototype, "isOpen", {
	        get: function () {
	            return this.dropdown.isOpen;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    DropdownToggle.prototype.toggleDropdown = function (event) {
	        event.preventDefault();
	        event.stopPropagation();
	        if (!this.disabled) {
	            this.dropdown.toggle();
	        }
	    };
	    DropdownToggle = __decorate([
	        angular2_1.Directive({
	            selector: '[dropdown-toggle]',
	            properties: ['disabled'],
	            host: {
	                '(click)': 'toggleDropdown($event)',
	                '[class.dropdown-toggle]': 'true',
	                '[class.disabled]': 'disabled',
	                '[attr.aria-haspopup]': 'true',
	                '[attr.aria-expanded]': 'isOpen'
	            }
	        }),
	        __param(0, angular2_1.Host()), 
	        __metadata('design:paramtypes', [dropdown_1.Dropdown, angular2_1.ElementRef])
	    ], DropdownToggle);
	    return DropdownToggle;
	})();
	exports.DropdownToggle = DropdownToggle;


/***/ },

/***/ 367:
/***/ function(module, exports) {

	module.exports = "<h3 id=\"usage\">Usage</h3>\n<pre class=\"language-typescript\"><code class=\"language-typescript\"><span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span>Ng2Table<span class=\"token punctuation\" >}</span> from <span class=\"token string\" >'ng2-table'</span><span class=\"token punctuation\" >;</span>\n</code></pre>\n<p>or if you want to import specified plugins (Table component is required, the others are optional):</p>\n<pre class=\"language-typescript\"><code class=\"language-typescript\"><span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span>Table<span class=\"token punctuation\" >,</span> Ng2TableFilter<span class=\"token punctuation\" >,</span> Ng2TablePaging<span class=\"token punctuation\" >,</span> pagination<span class=\"token punctuation\" >}</span> from <span class=\"token string\" >'ng2-table'</span><span class=\"token punctuation\" >;</span>\n</code></pre>\n<p>in this case, don&#39;t forget to include all of the imported entities to the option <code>directives</code> in your component</p>\n<h3 id=\"utilisation\">Utilisation</h3>\n<p>There are only simple table with 3 plugins/directives: <code>filtering</code>, <code>paging</code>, <code>sorting</code>. You don&#39;t need special <code>config</code> variable for storing settings for all plugins as is used in demo example. It&#39;s just showing usage sample.</p>\n<h3 id=\"inputs-properties-\">Inputs (Properties)</h3>\n<ul>\n<li><code>page</code> (<code>number</code>) - the default page after the table component loading</li>\n<li><code>itemsPerPage</code> (<code>number</code>) - number of the displaying items (rows) on a page</li>\n<li><code>maxSize</code> (<code>number</code>) - number of the displaying pages before <code>...</code></li>\n<li><code>numPages</code> (<code>number</code>) - total number of the pages</li>\n<li><p><code>length</code> (<code>number</code>) - total number of the items after filtering (of it&#39;s chosen)</p>\n</li>\n<li><p><code>config</code> (<code>?any</code>) - config for setup all plugins (filtering, sorting, paging):</p>\n<ul>\n<li><code>paging</code> (<code>?boolean</code>) - - switch on the paging plugin</li>\n<li><code>sorting</code> (<code>?any</code>) - switch on the sorting plugin<ul>\n<li><code>columns</code> (<code>Array&lt;any&gt;</code>) - only list of the columns for sorting</li>\n</ul>\n</li>\n<li><code>filtering</code> (<code>?any</code>) - switch on the filtering plugin<ul>\n<li><code>filterString</code> (<code>string</code>) - the default value for filter</li>\n<li><code>columnName</code> (<code>string</code>) - the property name in raw data</li>\n</ul>\n</li>\n</ul>\n</li>\n<li><p><code>rows</code> (<code>?Array&lt;any&gt;</code>) - only list of the rows which should be displayed</p>\n</li>\n<li><code>columns</code> (<code>?Array&lt;any&gt;</code>) - config for columns (+ sorting settings if it&#39;s needed)<ul>\n<li><code>title</code> (<code>string</code>) - the title of column header</li>\n<li><code>name</code> (<code>string</code>) - the property name in data</li>\n<li><code>sort</code> (<code>?string|boolean</code>) - config for columns (+ sorting settings if it&#39;s needed), sorting is switched on by default for each column</li>\n</ul>\n</li>\n</ul>\n<h3 id=\"outputs-events-\">Outputs (Events)</h3>\n<ul>\n<li><code>table-changed</code>: onclick event handler</li>\n</ul>\n<h3 id=\"filter\">Filter</h3>\n<p>The responsibility of the filtering issue falls on user. You should choose on which columns the filter would be applied. You could add any number of different filters.\nFilter string - it&#39;s a string for matching values in raw data. Column name refers to the property name in raw data. The rest logic you could organize by yourself (the order of filters, data formats, etc). Even you could use filter for list of data columns.</p>\n<h3 id=\"sorting\">Sorting</h3>\n<p>Data sorting could be in 3 modes: asc, desc and without sorting data (as it comes from backend or somewhere else). If you want to switch off the sorting for some of the columns then you should set it forcibly in columns config (set property sort to false value for each column you want)</p>\n<h3 id=\"paging\">Paging</h3>\n<p>Pagination could be used from <a href=\"https://github.com/valor-software/ng2-bootstrap\">ng2-bootstrap</a> - <a href=\"http://valor-software.github.io/ng2-bootstrap/#pagination\">pagination component</a>. When the page is changed, the pagination component will emit event <code>table-changed</code> with an object {page, itemsPerPage}. Then you can easily subscribe on it and request corresponding raw data.</p>\n";

/***/ },

/***/ 368:
/***/ function(module, exports) {

	module.exports = "";

/***/ },

/***/ 369:
/***/ function(module, exports) {

	module.exports = "<h1 id=\"getting-started\">Getting started</h1>\n<h3 id=\"first-of-all-welcome-\">First of all, Welcome!</h3>\n";

/***/ },

/***/ 370:
/***/ function(module, exports) {

	module.exports = "<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>input</span> <span class=\"token attr-name\" >*ng-if</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>config.filtering<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >placeholder</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Filter<span class=\"token punctuation\" >\"</span></span>\n       <span class=\"token attr-name\" >[ng2-table-filter]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>config.filtering<span class=\"token punctuation\" >\"</span></span>\n       <span class=\"token attr-name\" >(table-changed)</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>onChangeTable(config)<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >/></span></span>\n\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ng2-table</span> <span class=\"token attr-name\" >[config]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>config.sorting<span class=\"token punctuation\" >\"</span></span>\n           <span class=\"token attr-name\" >(table-changed)</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>onChangeTable(config)<span class=\"token punctuation\" >\"</span></span>\n           <span class=\"token attr-name\" >[rows]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>rows<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >[columns]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>columns<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ng2-table</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>pagination</span> <span class=\"token attr-name\" >*ng-if</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>config.paging<span class=\"token punctuation\" >\"</span></span>\n            <span class=\"token attr-name\" >[total-items]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>length<span class=\"token punctuation\" >\"</span></span>\n            <span class=\"token attr-name\" >[items-per-page]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>itemsPerPage<span class=\"token punctuation\" >\"</span></span>\n            <span class=\"token attr-name\" >(page-changed)</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>onChangeTable(config, $event)<span class=\"token punctuation\" >\"</span></span>\n            <span class=\"token attr-name\" >[(ng-model)]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>page<span class=\"token punctuation\" >\"</span></span>\n            <span class=\"token attr-name\" >[max-size]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>maxSize<span class=\"token punctuation\" >\"</span></span>\n            <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>pagination-sm<span class=\"token punctuation\" >\"</span></span>\n            <span class=\"token attr-name\" >[boundary-links]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>true<span class=\"token punctuation\" >\"</span></span>\n            <span class=\"token attr-name\" >[rotate]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>false<span class=\"token punctuation\" >\"</span></span>\n            <span class=\"token attr-name\" >(num-pages)</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>numPages <span class=\"token punctuation\" >=</span> $event<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>pagination</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>pre</span> <span class=\"token attr-name\" >*ng-if</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>config.paging<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>card card-block card-header<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Page: {{page}} / {{numPages}}<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>pre</span><span class=\"token punctuation\" >></span></span>\n"

/***/ },

/***/ 371:
/***/ function(module, exports) {

	module.exports = "<span class=\"token comment\" spellcheck=\"true\">/// &lt;reference path='../../../tsd.d.ts' /></span>\n\n<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span>\n  Component<span class=\"token punctuation\" >,</span> Directive<span class=\"token punctuation\" >,</span> View<span class=\"token punctuation\" >,</span> EventEmitter<span class=\"token punctuation\" >,</span> Host<span class=\"token punctuation\" >,</span>\n  OnInit<span class=\"token punctuation\" >,</span> Self<span class=\"token punctuation\" >,</span> NgIf<span class=\"token punctuation\" >,</span>\n  CORE_DIRECTIVES<span class=\"token punctuation\" >,</span> NgClass<span class=\"token punctuation\" >,</span> FORM_DIRECTIVES\n<span class=\"token punctuation\" >}</span> from <span class=\"token string\" >'angular2/angular2'</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span>Table<span class=\"token punctuation\" >}</span> from <span class=\"token string\" >'../../../components/table/table'</span><span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span>pagination<span class=\"token punctuation\" >}</span> from <span class=\"token string\" >'ng2-bootstrap/ng2-bootstrap'</span><span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span>Ng2TableFilter<span class=\"token punctuation\" >}</span> from <span class=\"token string\" >'../../../components/table/filtering'</span><span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span>TableData<span class=\"token punctuation\" >}</span> from <span class=\"token string\" >'./table-data'</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// webpack html imports</span>\n<span class=\"token keyword\" >let</span> template <span class=\"token operator\" >=</span> <span class=\"token function\" >require</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'./table-demo.html'</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n\n@<span class=\"token function\" >Component</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n  selector<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'table-demo'</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span>\n@<span class=\"token function\" >View</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n  template<span class=\"token punctuation\" >:</span> template<span class=\"token punctuation\" >,</span>\n  directives<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span>Table<span class=\"token punctuation\" >,</span> pagination<span class=\"token punctuation\" >,</span> Ng2TableFilter<span class=\"token punctuation\" >,</span> NgClass<span class=\"token punctuation\" >,</span> NgIf<span class=\"token punctuation\" >,</span> CORE_DIRECTIVES<span class=\"token punctuation\" >,</span> FORM_DIRECTIVES<span class=\"token punctuation\" >]</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span>\n<span class=\"token keyword\" >export</span> <span class=\"token keyword\" >class</span> <span class=\"token class-name\" >TableDemo</span> <span class=\"token keyword\" >implements</span> <span class=\"token class-name\" >OnInit</span> <span class=\"token punctuation\" >{</span>\n  <span class=\"token keyword\" >public</span> rows<span class=\"token punctuation\" >:</span><span class=\"token keyword\" >Array</span><span class=\"token operator\" >&lt;</span><span class=\"token keyword\" >any</span><span class=\"token operator\" >></span> <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token keyword\" >public</span> columns<span class=\"token punctuation\" >:</span><span class=\"token keyword\" >Array</span><span class=\"token operator\" >&lt;</span><span class=\"token keyword\" >any</span><span class=\"token operator\" >></span> <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span>\n    <span class=\"token punctuation\" >{</span>title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Name'</span><span class=\"token punctuation\" >,</span> name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'name'</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >{</span>title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Position'</span><span class=\"token punctuation\" >,</span> name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'position'</span><span class=\"token punctuation\" >,</span> sort<span class=\"token punctuation\" >:</span> <span class=\"token keyword\" >false</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >{</span>title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Office'</span><span class=\"token punctuation\" >,</span> name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'office'</span><span class=\"token punctuation\" >,</span> sort<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'asc'</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >{</span>title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Extn.'</span><span class=\"token punctuation\" >,</span> name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'ext'</span><span class=\"token punctuation\" >,</span> sort<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'desc'</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >{</span>title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Start date'</span><span class=\"token punctuation\" >,</span> name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'startDate'</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >{</span>title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Salary'</span><span class=\"token punctuation\" >,</span> name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'salary'</span><span class=\"token punctuation\" >}</span>\n  <span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token keyword\" >public</span> page<span class=\"token punctuation\" >:</span><span class=\"token keyword\" >number</span> <span class=\"token operator\" >=</span> <span class=\"token number\" >1</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token keyword\" >public</span> itemsPerPage<span class=\"token punctuation\" >:</span><span class=\"token keyword\" >number</span> <span class=\"token operator\" >=</span> <span class=\"token number\" >10</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token keyword\" >public</span> maxSize<span class=\"token punctuation\" >:</span><span class=\"token keyword\" >number</span> <span class=\"token operator\" >=</span> <span class=\"token number\" >5</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token keyword\" >public</span> numPages<span class=\"token punctuation\" >:</span><span class=\"token keyword\" >number</span> <span class=\"token operator\" >=</span> <span class=\"token number\" >1</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token keyword\" >public</span> length<span class=\"token punctuation\" >:</span><span class=\"token keyword\" >number</span> <span class=\"token operator\" >=</span> <span class=\"token number\" >0</span><span class=\"token punctuation\" >;</span>\n\n  <span class=\"token keyword\" >public</span> config<span class=\"token punctuation\" >:</span><span class=\"token keyword\" >any</span> <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >{</span>\n    paging<span class=\"token punctuation\" >:</span> <span class=\"token keyword\" >true</span><span class=\"token punctuation\" >,</span>\n    sorting<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>columns<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n    filtering<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>filterString<span class=\"token punctuation\" >:</span> <span class=\"token string\" >''</span><span class=\"token punctuation\" >,</span> columnName<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'position'</span><span class=\"token punctuation\" >}</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n\n  <span class=\"token keyword\" >private</span> data<span class=\"token punctuation\" >:</span><span class=\"token keyword\" >Array</span><span class=\"token operator\" >&lt;</span><span class=\"token keyword\" >any</span><span class=\"token operator\" >></span> <span class=\"token operator\" >=</span> TableData<span class=\"token punctuation\" >;</span>\n\n  <span class=\"token keyword\" >constructor</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>length <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>data<span class=\"token punctuation\" >.</span>length<span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n\n  <span class=\"token function\" >onInit</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >onChangeTable</span><span class=\"token punctuation\" >(</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>config<span class=\"token punctuation\" >,</span> <span class=\"token keyword\" >null</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n\n  <span class=\"token function\" >changePage</span><span class=\"token punctuation\" >(</span>page<span class=\"token punctuation\" >:</span><span class=\"token keyword\" >any</span><span class=\"token punctuation\" >,</span> data<span class=\"token punctuation\" >:</span><span class=\"token keyword\" >Array</span><span class=\"token operator\" >&lt;</span><span class=\"token keyword\" >any</span><span class=\"token operator\" >></span> <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>data<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >:</span><span class=\"token keyword\" >Array</span><span class=\"token operator\" >&lt;</span><span class=\"token keyword\" >any</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span>\n    console<span class=\"token punctuation\" >.</span><span class=\"token function\" >log</span><span class=\"token punctuation\" >(</span>page<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >let</span> start <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >(</span>page<span class=\"token punctuation\" >.</span>page <span class=\"token operator\" >-</span> <span class=\"token number\" >1</span><span class=\"token punctuation\" >)</span> <span class=\"token operator\" >*</span> page<span class=\"token punctuation\" >.</span>itemsPerPage<span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >let</span> end <span class=\"token operator\" >=</span> page<span class=\"token punctuation\" >.</span>itemsPerPage <span class=\"token operator\" >></span> <span class=\"token operator\" >-</span><span class=\"token number\" >1</span> <span class=\"token operator\" >?</span> <span class=\"token punctuation\" >(</span>start <span class=\"token operator\" >+</span> page<span class=\"token punctuation\" >.</span>itemsPerPage<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >:</span> data<span class=\"token punctuation\" >.</span>length<span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >return</span> data<span class=\"token punctuation\" >.</span><span class=\"token function\" >slice</span><span class=\"token punctuation\" >(</span>start<span class=\"token punctuation\" >,</span> end<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n\n  <span class=\"token function\" >changeSort</span><span class=\"token punctuation\" >(</span>data<span class=\"token punctuation\" >:</span><span class=\"token keyword\" >any</span><span class=\"token punctuation\" >,</span> config<span class=\"token punctuation\" >:</span><span class=\"token keyword\" >any</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span><span class=\"token operator\" >!</span>config<span class=\"token punctuation\" >.</span>sorting<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n      <span class=\"token keyword\" >return</span> data<span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span>\n\n    <span class=\"token comment\" spellcheck=\"true\">// simple sorting</span>\n    <span class=\"token keyword\" >return</span> data<span class=\"token punctuation\" >.</span><span class=\"token function\" >sort</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >(</span>previous<span class=\"token punctuation\" >:</span><span class=\"token keyword\" >any</span><span class=\"token punctuation\" >,</span> current<span class=\"token punctuation\" >:</span><span class=\"token keyword\" >any</span><span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span>\n      <span class=\"token keyword\" >let</span> columns <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>config<span class=\"token punctuation\" >.</span>sorting<span class=\"token punctuation\" >.</span>columns <span class=\"token operator\" >||</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n      <span class=\"token keyword\" >for</span> <span class=\"token punctuation\" >(</span><span class=\"token keyword\" >let</span> i <span class=\"token operator\" >=</span> <span class=\"token number\" >0</span><span class=\"token punctuation\" >;</span> i <span class=\"token operator\" >&lt;</span> columns<span class=\"token punctuation\" >.</span>length<span class=\"token punctuation\" >;</span> i<span class=\"token operator\" >++</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n        <span class=\"token keyword\" >let</span> columnName <span class=\"token operator\" >=</span> columns<span class=\"token punctuation\" >[</span>i<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >.</span>name<span class=\"token punctuation\" >;</span>\n\n        <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span>previous<span class=\"token punctuation\" >[</span>columnName<span class=\"token punctuation\" >]</span> <span class=\"token operator\" >></span> current<span class=\"token punctuation\" >[</span>columnName<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n          <span class=\"token keyword\" >return</span> columns<span class=\"token punctuation\" >[</span>i<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >.</span>sort <span class=\"token operator\" >===</span> <span class=\"token string\" >'desc'</span> <span class=\"token operator\" >?</span> <span class=\"token operator\" >-</span><span class=\"token number\" >1</span> <span class=\"token punctuation\" >:</span> <span class=\"token number\" >1</span><span class=\"token punctuation\" >;</span>\n        <span class=\"token punctuation\" >}</span>\n        <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span>previous<span class=\"token punctuation\" >[</span>columnName<span class=\"token punctuation\" >]</span> <span class=\"token operator\" >&lt;</span> current<span class=\"token punctuation\" >[</span>columnName<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n          <span class=\"token keyword\" >return</span> columns<span class=\"token punctuation\" >[</span>i<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >.</span>sort <span class=\"token operator\" >===</span> <span class=\"token string\" >'asc'</span> <span class=\"token operator\" >?</span> <span class=\"token operator\" >-</span><span class=\"token number\" >1</span> <span class=\"token punctuation\" >:</span> <span class=\"token number\" >1</span><span class=\"token punctuation\" >;</span>\n        <span class=\"token punctuation\" >}</span>\n      <span class=\"token punctuation\" >}</span>\n      <span class=\"token keyword\" >return</span> <span class=\"token number\" >0</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n\n  <span class=\"token function\" >changeFilter</span><span class=\"token punctuation\" >(</span>data<span class=\"token punctuation\" >:</span><span class=\"token keyword\" >any</span><span class=\"token punctuation\" >,</span> config<span class=\"token punctuation\" >:</span><span class=\"token keyword\" >any</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >:</span><span class=\"token keyword\" >any</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span><span class=\"token operator\" >!</span>config<span class=\"token punctuation\" >.</span>filtering<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n      <span class=\"token keyword\" >return</span> data<span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span>\n\n    <span class=\"token keyword\" >let</span> filteredData<span class=\"token punctuation\" >:</span><span class=\"token keyword\" >Array</span><span class=\"token operator\" >&lt;</span><span class=\"token keyword\" >any</span><span class=\"token operator\" >></span> <span class=\"token operator\" >=</span> data<span class=\"token punctuation\" >.</span><span class=\"token function\" >filter</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >(</span>item<span class=\"token punctuation\" >:</span><span class=\"token keyword\" >any</span><span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span>\n      item<span class=\"token punctuation\" >[</span>config<span class=\"token punctuation\" >.</span>filtering<span class=\"token punctuation\" >.</span>columnName<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >match</span><span class=\"token punctuation\" >(</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>config<span class=\"token punctuation\" >.</span>filtering<span class=\"token punctuation\" >.</span>filterString<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n\n    <span class=\"token keyword\" >return</span> filteredData<span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n\n  <span class=\"token function\" >onChangeTable</span><span class=\"token punctuation\" >(</span>config<span class=\"token punctuation\" >:</span><span class=\"token keyword\" >any</span><span class=\"token punctuation\" >,</span> page<span class=\"token punctuation\" >:</span><span class=\"token keyword\" >any</span> <span class=\"token operator\" >=</span> config<span class=\"token punctuation\" >.</span>paging<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span>config<span class=\"token punctuation\" >.</span>filtering<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n      Object<span class=\"token punctuation\" >.</span><span class=\"token function\" >assign</span><span class=\"token punctuation\" >(</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>config<span class=\"token punctuation\" >.</span>filtering<span class=\"token punctuation\" >,</span> config<span class=\"token punctuation\" >.</span>filtering<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span>\n    <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span>config<span class=\"token punctuation\" >.</span>sorting<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n      Object<span class=\"token punctuation\" >.</span><span class=\"token function\" >assign</span><span class=\"token punctuation\" >(</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>config<span class=\"token punctuation\" >.</span>sorting<span class=\"token punctuation\" >,</span> config<span class=\"token punctuation\" >.</span>sorting<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span>\n\n    <span class=\"token keyword\" >let</span> filteredData <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >changeFilter</span><span class=\"token punctuation\" >(</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>data<span class=\"token punctuation\" >,</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>config<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >let</span> sortedData <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >changeSort</span><span class=\"token punctuation\" >(</span>filteredData<span class=\"token punctuation\" >,</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>config<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>rows <span class=\"token operator\" >=</span> page <span class=\"token operator\" >&amp;&amp;</span> config<span class=\"token punctuation\" >.</span>paging <span class=\"token operator\" >?</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >changePage</span><span class=\"token punctuation\" >(</span>page<span class=\"token punctuation\" >,</span> sortedData<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >:</span> sortedData<span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>length <span class=\"token operator\" >=</span> sortedData<span class=\"token punctuation\" >.</span>length<span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n<span class=\"token punctuation\" >}</span>\n"

/***/ },

/***/ 372:
/***/ function(module, exports) {

	module.exports = "<input *ng-if=\"config.filtering\" placeholder=\"Filter\"\n       [ng2-table-filter]=\"config.filtering\"\n       (table-changed)=\"onChangeTable(config)\"/>\n\n<ng2-table [config]=\"config.sorting\"\n           (table-changed)=\"onChangeTable(config)\"\n           [rows]=\"rows\" [columns]=\"columns\">\n</ng2-table>\n<pagination *ng-if=\"config.paging\"\n            [total-items]=\"length\"\n            [items-per-page]=\"itemsPerPage\"\n            (page-changed)=\"onChangeTable(config, $event)\"\n            [(ng-model)]=\"page\"\n            [max-size]=\"maxSize\"\n            class=\"pagination-sm\"\n            [boundary-links]=\"true\"\n            [rotate]=\"false\"\n            (num-pages)=\"numPages = $event\">\n</pagination>\n<pre *ng-if=\"config.paging\" class=\"card card-block card-header\">Page: {{page}} / {{numPages}}</pre>\n"

/***/ },

/***/ 374:
/***/ function(module, exports) {

	(function (Ng2TableTheme) {
	    Ng2TableTheme[Ng2TableTheme["BS3"] = 1] = "BS3";
	    Ng2TableTheme[Ng2TableTheme["BS4"] = 2] = "BS4";
	})(exports.Ng2TableTheme || (exports.Ng2TableTheme = {}));
	var Ng2TableTheme = exports.Ng2TableTheme;
	var Ng2TableConfig = (function () {
	    function Ng2TableConfig() {
	    }
	    Object.defineProperty(Ng2TableConfig, "theme", {
	        get: function () {
	            var w = window;
	            if (w && w.__theme === 'bs4') {
	                return Ng2TableTheme.BS4;
	            }
	            return (this._theme || Ng2TableTheme.BS3);
	        },
	        set: function (v) {
	            this._theme = v;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return Ng2TableConfig;
	})();
	exports.Ng2TableConfig = Ng2TableConfig;


/***/ },

/***/ 377:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var angular2_1 = __webpack_require__(6);
	var table_demo_1 = __webpack_require__(379);
	var name = 'Table';
	var src = 'https://github.com/valor-software/ng2-table/blob/master/components/table/table.ts';
	var doc = __webpack_require__(367);
	var titleDoc = __webpack_require__(368);
	var ts = __webpack_require__(371);
	var html = __webpack_require__(370);
	var TableSection = (function () {
	    function TableSection() {
	    }
	    TableSection = __decorate([
	        angular2_1.Component({
	            selector: 'table-section'
	        }),
	        angular2_1.View({
	            template: "\n  <br>\n  <section id=\"" + name.toLowerCase() + "\">\n    <div class=\"row\"><h1>" + name + "<small>(<a href=\"" + src + "\">src</a>)</small></h1></div>\n\n    <hr>\n\n    <div class=\"row\"><div class=\"col-md-12\">" + titleDoc + "</div></div>\n\n    <div class=\"row\">\n      <h2>Example</h2>\n      <div class=\"card card-block panel panel-default panel-body\">\n        <table-demo></table-demo>\n      </div>\n    </div>\n\n    <br>\n\n    <div class=\"row\">\n      <tabset>\n        <tab heading=\"Markup\">\n          <div class=\"card card-block panel panel-default panel-body\">\n            <pre class=\"language-html\"><code class=\"language-html\">" + html + "</code></pre>\n          </div>\n        </tab>\n        <tab heading=\"TypeScript\">\n          <div class=\"card card-block panel panel-default panel-body\">\n            <pre class=\"language-typescript\"><code class=\"language-typescript\">" + ts + "</code></pre>\n          </div>\n        </tab>\n      </tabset>\n    </div>\n\n    <br>\n\n    <div class=\"row\">\n      <h2>API</h2>\n      <div class=\"card card-block panel panel-default panel-body\">" + doc + "</div>\n    </div>\n  </section>\n  ",
	            directives: [table_demo_1.TableDemo, angular2_1.CORE_DIRECTIVES]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], TableSection);
	    return TableSection;
	})();
	exports.TableSection = TableSection;


/***/ },

/***/ 378:
/***/ function(module, exports) {

	exports.TableData = [
	    {
	        'name': 'Victoria Cantrell',
	        'position': 'Integer Corporation',
	        'office': 'Croatia',
	        'ext': '0839',
	        'startDate': '2015/08/19',
	        'salary': '$208,178'
	    }, {
	        'name': 'Pearl Crosby',
	        'position': 'In PC',
	        'office': 'Cambodia',
	        'ext': '8262',
	        'startDate': '2014/10/08',
	        'salary': '$114,367'
	    }, {
	        'name': 'Colette Foley',
	        'position': 'Lorem Inc.',
	        'office': 'Korea, North',
	        'ext': '8968',
	        'startDate': '2015/07/19',
	        'salary': '$721,473'
	    }, {
	        'name': 'Anastasia Shaffer',
	        'position': 'Dolor Nulla Semper LLC',
	        'office': 'Suriname',
	        'ext': '7980',
	        'startDate': '2015/04/20',
	        'salary': '$264,620'
	    }, {
	        'name': 'Gabriel Castro',
	        'position': 'Sed Limited',
	        'office': 'Bahrain',
	        'ext': '0757',
	        'startDate': '2015/03/04',
	        'salary': '$651,350'
	    }, {
	        'name': 'Cherokee Ware',
	        'position': 'Tincidunt LLC',
	        'office': 'United Kingdom (Great Britain)',
	        'ext': '3995',
	        'startDate': '2015/06/17',
	        'salary': '$666,259'
	    }, {
	        'name': 'Barry Moss',
	        'position': 'Sociis Industries',
	        'office': 'Western Sahara',
	        'ext': '6697',
	        'startDate': '2015/08/13',
	        'salary': '$541,631'
	    }, {
	        'name': 'Maryam Tucker',
	        'position': 'Elit Pede Malesuada Inc.',
	        'office': 'Brazil',
	        'ext': '5203',
	        'startDate': '2014/10/02',
	        'salary': '$182,294'
	    }, {
	        'name': 'Constance Clayton',
	        'position': 'Auctor Velit Aliquam LLP',
	        'office': 'United Arab Emirates',
	        'ext': '4204',
	        'startDate': '2015/08/01',
	        'salary': '$218,597'
	    }, {
	        'name': 'Rogan Tucker',
	        'position': 'Arcu Vestibulum Ante Associates',
	        'office': 'Jersey',
	        'ext': '0885',
	        'startDate': '2015/01/04',
	        'salary': '$861,632'
	    }, {
	        'name': 'Emery Mcdowell',
	        'position': 'Gravida Company',
	        'office': 'New Zealand',
	        'ext': '3951',
	        'startDate': '2015/06/02',
	        'salary': '$413,568'
	    }, {
	        'name': 'Yael Greer',
	        'position': 'Orci Limited',
	        'office': 'Madagascar',
	        'ext': '1416',
	        'startDate': '2014/12/04',
	        'salary': '$121,831'
	    }, {
	        'name': 'Jared Burgess',
	        'position': 'Auctor Incorporated',
	        'office': 'Burundi',
	        'ext': '4673',
	        'startDate': '2015/01/12',
	        'salary': '$62,243'
	    }, {
	        'name': 'Sharon Campbell',
	        'position': 'Elit Curabitur Sed Consulting',
	        'office': 'Comoros',
	        'ext': '6274',
	        'startDate': '2014/09/14',
	        'salary': '$200,854'
	    }, {
	        'name': 'Yeo Church',
	        'position': 'Donec Vitae Erat PC',
	        'office': 'Saudi Arabia',
	        'ext': '0269',
	        'startDate': '2015/06/07',
	        'salary': '$581,193'
	    }, {
	        'name': 'Kylie Barlow',
	        'position': 'Fermentum Risus Corporation',
	        'office': 'Papua New Guinea',
	        'ext': '2010',
	        'startDate': '2014/12/03',
	        'salary': '$418,115'
	    }, {
	        'name': 'Nell Leonard',
	        'position': 'Vestibulum Consulting',
	        'office': 'Saudi Arabia',
	        'ext': '4839',
	        'startDate': '2015/05/29',
	        'salary': '$466,201'
	    }, {
	        'name': 'Brandon Fleming',
	        'position': 'Donec Egestas Associates',
	        'office': 'Poland',
	        'ext': '0622',
	        'startDate': '2015/01/22',
	        'salary': '$800,011'
	    }, {
	        'name': 'Inga Pena',
	        'position': 'Et Magnis Dis Limited',
	        'office': 'Belgium',
	        'ext': '8140',
	        'startDate': '2015/05/18',
	        'salary': '$564,245'
	    }, {
	        'name': 'Arden Russo',
	        'position': 'Est Tempor Bibendum Corp.',
	        'office': 'Dominican Republic',
	        'ext': '6774',
	        'startDate': '2015/07/23',
	        'salary': '$357,222'
	    }, {
	        'name': 'Liberty Gallegos',
	        'position': 'Nec Diam LLC',
	        'office': 'Ghana',
	        'ext': '9266',
	        'startDate': '2015/06/18',
	        'salary': '$554,375'
	    }, {
	        'name': 'Dennis York',
	        'position': 'Nullam Suscipit Foundation',
	        'office': 'Namibia',
	        'ext': '3133',
	        'startDate': '2015/03/20',
	        'salary': '$90,417'
	    }, {
	        'name': 'Petra Chandler',
	        'position': 'Pede Nonummy Inc.',
	        'office': 'Namibia',
	        'ext': '3367',
	        'startDate': '2015/03/26',
	        'salary': '$598,915'
	    }, {
	        'name': 'Aurelia Marshall',
	        'position': 'Donec Consulting',
	        'office': 'Nicaragua',
	        'ext': '2690',
	        'startDate': '2015/08/18',
	        'salary': '$201,680'
	    }, {
	        'name': 'Rose Carter',
	        'position': 'Enim Consequat Purus Industries',
	        'office': 'Morocco',
	        'ext': '0619',
	        'startDate': '2015/03/06',
	        'salary': '$220,187'
	    }, {
	        'name': 'Denton Atkins',
	        'position': 'Non Vestibulum PC',
	        'office': 'Mali',
	        'ext': '5806',
	        'startDate': '2015/04/19',
	        'salary': '$324,588'
	    }, {
	        'name': 'Germaine Osborn',
	        'position': 'Tristique Aliquet PC',
	        'office': 'Lesotho',
	        'ext': '4469',
	        'startDate': '2015/01/19',
	        'salary': '$351,108'
	    }, {
	        'name': 'Nell Butler',
	        'position': 'Sit Amet Dapibus Industries',
	        'office': 'Cuba',
	        'ext': '7860',
	        'startDate': '2015/01/06',
	        'salary': '$230,072'
	    }, {
	        'name': 'Brent Stein',
	        'position': 'Eu Augue Porttitor LLP',
	        'office': 'Cyprus',
	        'ext': '4697',
	        'startDate': '2014/11/02',
	        'salary': '$853,413'
	    }, {
	        'name': 'Alexandra Shaw',
	        'position': 'Aenean Gravida Limited',
	        'office': 'Uruguay',
	        'ext': '1140',
	        'startDate': '2015/05/16',
	        'salary': '$401,970'
	    }, {
	        'name': 'Veronica Allison',
	        'position': 'Aliquet Diam Sed Institute',
	        'office': 'Samoa',
	        'ext': '9966',
	        'startDate': '2015/05/17',
	        'salary': '$79,193'
	    }, {
	        'name': 'Katelyn Gamble',
	        'position': 'Sed Associates',
	        'office': 'Mauritius',
	        'ext': '4767',
	        'startDate': '2015/03/20',
	        'salary': '$484,299'
	    }, {
	        'name': 'James Greer',
	        'position': 'A Dui Incorporated',
	        'office': 'Norway',
	        'ext': '5517',
	        'startDate': '2015/02/21',
	        'salary': '$333,518'
	    }, {
	        'name': 'Cain Vasquez',
	        'position': 'Nulla Facilisis Suspendisse Institute',
	        'office': 'China',
	        'ext': '3179',
	        'startDate': '2015/05/27',
	        'salary': '$651,761'
	    }, {
	        'name': 'Shaeleigh Barr',
	        'position': 'Eleifend Cras Institute',
	        'office': 'Ghana',
	        'ext': '5904',
	        'startDate': '2015/04/01',
	        'salary': '$627,095'
	    }, {
	        'name': 'Baker Mckay',
	        'position': 'Ut Sagittis Associates',
	        'office': 'Isle of Man',
	        'ext': '9840',
	        'startDate': '2015/01/12',
	        'salary': '$742,247'
	    }, {
	        'name': 'Jayme Pace',
	        'position': 'Cras Eu Tellus Associates',
	        'office': 'Bouvet Island',
	        'ext': '4580',
	        'startDate': '2015/08/12',
	        'salary': '$591,588'
	    }, {
	        'name': 'Reuben Albert',
	        'position': 'Lobortis Institute',
	        'office': 'Zambia',
	        'ext': '8725',
	        'startDate': '2015/04/04',
	        'salary': '$791,408'
	    }, {
	        'name': 'Idola Burns',
	        'position': 'Non Industries',
	        'office': 'Myanmar',
	        'ext': '3201',
	        'startDate': '2015/06/24',
	        'salary': '$142,906'
	    }, {
	        'name': 'Laura Macias',
	        'position': 'Phasellus Inc.',
	        'office': 'Mauritania',
	        'ext': '2033',
	        'startDate': '2014/11/21',
	        'salary': '$226,591'
	    }, {
	        'name': 'Nichole Salas',
	        'position': 'Duis PC',
	        'office': 'Madagascar',
	        'ext': '4397',
	        'startDate': '2015/01/18',
	        'salary': '$234,196'
	    }, {
	        'name': 'Hunter Walter',
	        'position': 'Ullamcorper Duis Cursus Foundation',
	        'office': 'Brazil',
	        'ext': '2227',
	        'startDate': '2015/02/28',
	        'salary': '$655,052'
	    }, {
	        'name': 'Asher Rich',
	        'position': 'Mauris Ipsum LLP',
	        'office': 'Paraguay',
	        'ext': '7288',
	        'startDate': '2015/08/08',
	        'salary': '$222,946'
	    }, {
	        'name': 'Angela Carlson',
	        'position': 'Donec Tempor Institute',
	        'office': 'Papua New Guinea',
	        'ext': '5416',
	        'startDate': '2015/02/12',
	        'salary': '$562,194'
	    }, {
	        'name': 'James Dorsey',
	        'position': 'Ipsum Leo Associates',
	        'office': 'Congo (Brazzaville)',
	        'ext': '6019',
	        'startDate': '2015/01/10',
	        'salary': '$629,925'
	    }, {
	        'name': 'Wesley Cobb',
	        'position': 'Nunc Est Incorporated',
	        'office': 'Australia',
	        'ext': '6466',
	        'startDate': '2015/01/30',
	        'salary': '$343,476'
	    }, {
	        'name': 'Meghan Stephens',
	        'position': 'Interdum PC',
	        'office': 'Turkey',
	        'ext': '8001',
	        'startDate': '2014/10/11',
	        'salary': '$469,305'
	    }, {
	        'name': 'Bertha Herrera',
	        'position': 'Amet Limited',
	        'office': 'Kenya',
	        'ext': '4799',
	        'startDate': '2014/11/22',
	        'salary': '$56,606'
	    }, {
	        'name': 'Karina Key',
	        'position': 'Quisque Varius Nam Company',
	        'office': 'France',
	        'ext': '3907',
	        'startDate': '2015/03/26',
	        'salary': '$314,260'
	    }, {
	        'name': 'Uriel Carson',
	        'position': 'Penatibus PC',
	        'office': 'Venezuela',
	        'ext': '5902',
	        'startDate': '2015/01/07',
	        'salary': '$106,335'
	    }, {
	        'name': 'Mira Baird',
	        'position': 'Felis Orci PC',
	        'office': 'Niue',
	        'ext': '4189',
	        'startDate': '2015/08/25',
	        'salary': '$515,671'
	    }, {
	        'name': 'Ursula Parrish',
	        'position': 'Ac Corporation',
	        'office': 'Macao',
	        'ext': '4771',
	        'startDate': '2015/06/30',
	        'salary': '$72,295'
	    }, {
	        'name': 'Josephine Sykes',
	        'position': 'Blandit Congue Limited',
	        'office': 'Holy See (Vatican City State)',
	        'ext': '4684',
	        'startDate': '2014/12/22',
	        'salary': '$694,656'
	    }, {
	        'name': 'Maggie Sims',
	        'position': 'Vulputate Posuere Industries',
	        'office': 'Sudan',
	        'ext': '6482',
	        'startDate': '2014/11/22',
	        'salary': '$363,743'
	    }, {
	        'name': 'Rogan Fuentes',
	        'position': 'Vestibulum Accumsan Neque Company',
	        'office': 'Jersey',
	        'ext': '4837',
	        'startDate': '2015/07/29',
	        'salary': '$606,004'
	    }, {
	        'name': 'Maya Haney',
	        'position': 'Ac Foundation',
	        'office': 'Falkland Islands',
	        'ext': '5752',
	        'startDate': '2015/09/03',
	        'salary': '$745,500'
	    }, {
	        'name': 'Aquila Battle',
	        'position': 'Sociis Natoque Penatibus Foundation',
	        'office': 'Azerbaijan',
	        'ext': '8470',
	        'startDate': '2015/03/06',
	        'salary': '$582,265'
	    }, {
	        'name': 'Connor Coleman',
	        'position': 'Orci Lacus Vestibulum Foundation',
	        'office': 'Croatia',
	        'ext': '6217',
	        'startDate': '2014/10/21',
	        'salary': '$416,958'
	    }, {
	        'name': 'Charity Thomas',
	        'position': 'Convallis Ligula Donec Inc.',
	        'office': 'Benin',
	        'ext': '6240',
	        'startDate': '2015/07/12',
	        'salary': '$540,999'
	    }, {
	        'name': 'Blythe Powers',
	        'position': 'Amet Orci Limited',
	        'office': 'Falkland Islands',
	        'ext': '5608',
	        'startDate': '2015/01/23',
	        'salary': '$480,067'
	    }, {
	        'name': 'Adria Battle',
	        'position': 'Ornare Lectus Incorporated',
	        'office': 'British Indian Ocean Territory',
	        'ext': '7419',
	        'startDate': '2015/05/28',
	        'salary': '$257,937'
	    }, {
	        'name': 'Melanie Mcintyre',
	        'position': 'Nunc Corp.',
	        'office': 'Mongolia',
	        'ext': '4326',
	        'startDate': '2015/01/06',
	        'salary': '$359,737'
	    }, {
	        'name': 'Keely Bauer',
	        'position': 'Nec Tempus Institute',
	        'office': 'Somalia',
	        'ext': '8372',
	        'startDate': '2015/03/09',
	        'salary': '$99,718'
	    }, {
	        'name': 'Noelani Strong',
	        'position': 'Nec LLP',
	        'office': 'Iran',
	        'ext': '0049',
	        'startDate': '2015/08/24',
	        'salary': '$480,718'
	    }, {
	        'name': 'Jeanette Henderson',
	        'position': 'Eu Elit Nulla Corporation',
	        'office': 'Italy',
	        'ext': '7586',
	        'startDate': '2015/06/19',
	        'salary': '$253,772'
	    }, {
	        'name': 'Candace Huber',
	        'position': 'Sed Institute',
	        'office': 'Uganda',
	        'ext': '7183',
	        'startDate': '2015/06/16',
	        'salary': '$388,879'
	    }, {
	        'name': 'Bethany Potter',
	        'position': 'Vivamus Nibh Dolor Incorporated',
	        'office': 'Puerto Rico',
	        'ext': '3354',
	        'startDate': '2014/11/12',
	        'salary': '$747,310'
	    }, {
	        'name': 'Whoopi Burks',
	        'position': 'Justo Inc.',
	        'office': 'Fiji',
	        'ext': '2185',
	        'startDate': '2014/09/24',
	        'salary': '$803,037'
	    }, {
	        'name': 'Sheila Long',
	        'position': 'Diam Associates',
	        'office': 'Sao Tome and Principe',
	        'ext': '7760',
	        'startDate': '2014/12/21',
	        'salary': '$674,379'
	    }, {
	        'name': 'Sonya Church',
	        'position': 'Laoreet Institute',
	        'office': 'Grenada',
	        'ext': '8920',
	        'startDate': '2015/06/03',
	        'salary': '$625,147'
	    }, {
	        'name': 'Shaine Forbes',
	        'position': 'Eu Arcu LLP',
	        'office': 'Cyprus',
	        'ext': '2369',
	        'startDate': '2015/01/18',
	        'salary': '$208,100'
	    }, {
	        'name': 'Alexandra Patrick',
	        'position': 'Ligula Donec Inc.',
	        'office': 'Viet Nam',
	        'ext': '8531',
	        'startDate': '2015/04/09',
	        'salary': '$104,063'
	    }, {
	        'name': 'Patience Vincent',
	        'position': 'Sem Molestie Associates',
	        'office': 'Philippines',
	        'ext': '8888',
	        'startDate': '2015/07/04',
	        'salary': '$673,556'
	    }, {
	        'name': 'Evelyn Smith',
	        'position': 'Fusce Industries',
	        'office': 'Togo',
	        'ext': '5051',
	        'startDate': '2015/08/15',
	        'salary': '$737,284'
	    }, {
	        'name': 'Kieran Gonzalez',
	        'position': 'Non Corp.',
	        'office': 'Equatorial Guinea',
	        'ext': '4834',
	        'startDate': '2015/08/24',
	        'salary': '$90,195'
	    }, {
	        'name': 'Molly Oneil',
	        'position': 'Non Dui Consulting',
	        'office': 'Belize',
	        'ext': '7501',
	        'startDate': '2014/10/28',
	        'salary': '$140,767'
	    }, {
	        'name': 'Nigel Davenport',
	        'position': 'Ullamcorper Velit In Industries',
	        'office': 'Vanuatu',
	        'ext': '0976',
	        'startDate': '2015/03/16',
	        'salary': '$70,536'
	    }, {
	        'name': 'Thor Young',
	        'position': 'Malesuada Consulting',
	        'office': 'French Southern Territories',
	        'ext': '0211',
	        'startDate': '2015/01/28',
	        'salary': '$75,501'
	    }, {
	        'name': 'Finn Delacruz',
	        'position': 'Lorem Industries',
	        'office': 'Cocos (Keeling) Islands',
	        'ext': '2980',
	        'startDate': '2014/12/11',
	        'salary': '$754,967'
	    }, {
	        'name': 'Lane Henderson',
	        'position': 'Pede Foundation',
	        'office': 'Kazakhstan',
	        'ext': '1446',
	        'startDate': '2015/07/02',
	        'salary': '$842,050'
	    }, {
	        'name': 'Shea Potter',
	        'position': 'Curabitur Limited',
	        'office': 'Timor-Leste',
	        'ext': '4654',
	        'startDate': '2015/05/07',
	        'salary': '$263,629'
	    }, {
	        'name': 'Brynn Yang',
	        'position': 'Ut Limited',
	        'office': 'Mayotte',
	        'ext': '4668',
	        'startDate': '2015/01/17',
	        'salary': '$74,292'
	    }, {
	        'name': 'Kylan Fuentes',
	        'position': 'Sapien Aenean Associates',
	        'office': 'Brazil',
	        'ext': '6623',
	        'startDate': '2014/12/28',
	        'salary': '$108,632'
	    }, {
	        'name': 'Lionel Mcbride',
	        'position': 'Ipsum PC',
	        'office': 'Portugal',
	        'ext': '3978',
	        'startDate': '2015/07/11',
	        'salary': '$34,244'
	    }, {
	        'name': 'Paul Lucas',
	        'position': 'Eget LLP',
	        'office': 'Nicaragua',
	        'ext': '8890',
	        'startDate': '2014/09/30',
	        'salary': '$690,834'
	    }, {
	        'name': 'Lareina Williamson',
	        'position': 'Imperdiet Ullamcorper Ltd',
	        'office': 'Cocos (Keeling) Islands',
	        'ext': '9489',
	        'startDate': '2014/12/01',
	        'salary': '$603,498'
	    }, {
	        'name': 'Amy Acevedo',
	        'position': 'Id Institute',
	        'office': 'Cook Islands',
	        'ext': '5592',
	        'startDate': '2015/02/04',
	        'salary': '$125,165'
	    }, {
	        'name': 'Nomlanga Silva',
	        'position': 'Eget LLC',
	        'office': 'Belize',
	        'ext': '3110',
	        'startDate': '2015/01/31',
	        'salary': '$268,509'
	    }, {
	        'name': 'Amena Stone',
	        'position': 'Enim Incorporated',
	        'office': 'Guinea',
	        'ext': '1211',
	        'startDate': '2014/09/23',
	        'salary': '$214,381'
	    }, {
	        'name': 'Danielle Coffey',
	        'position': 'Feugiat Placerat Corp.',
	        'office': 'Sao Tome and Principe',
	        'ext': '8176',
	        'startDate': '2015/06/17',
	        'salary': '$137,423'
	    }, {
	        'name': 'Buffy Russell',
	        'position': 'Lacus Quisque Ltd',
	        'office': 'Ecuador',
	        'ext': '6741',
	        'startDate': '2014/10/17',
	        'salary': '$612,184'
	    }, {
	        'name': 'Kaitlin Lamb',
	        'position': 'Malesuada Fringilla Est Associates',
	        'office': 'Algeria',
	        'ext': '5054',
	        'startDate': '2014/10/18',
	        'salary': '$327,367'
	    }, {
	        'name': 'Leilani Yates',
	        'position': 'Mus Proin LLC',
	        'office': 'South Sudan',
	        'ext': '1550',
	        'startDate': '2015/05/27',
	        'salary': '$743,493'
	    }, {
	        'name': 'Jemima Moon',
	        'position': 'Phasellus Corp.',
	        'office': 'South Georgia and The South Sandwich Islands',
	        'ext': '7582',
	        'startDate': '2015/05/21',
	        'salary': '$496,067'
	    }, {
	        'name': 'Hiroko Schwartz',
	        'position': 'Neque Institute',
	        'office': 'Saint Vincent and The Grenadines',
	        'ext': '9368',
	        'startDate': '2015/03/13',
	        'salary': '$178,782'
	    }, {
	        'name': 'Nathaniel Jensen',
	        'position': 'Mi Tempor Limited',
	        'office': 'Dominica',
	        'ext': '8331',
	        'startDate': '2014/12/05',
	        'salary': '$37,441'
	    }, {
	        'name': 'Silas Sweeney',
	        'position': 'Ultrices Institute',
	        'office': 'Turkmenistan',
	        'ext': '0746',
	        'startDate': '2014/11/13',
	        'salary': '$152,980'
	    }, {
	        'name': 'Jermaine Barry',
	        'position': 'Dapibus Corporation',
	        'office': 'Uzbekistan',
	        'ext': '1545',
	        'startDate': '2015/03/06',
	        'salary': '$409,463'
	    }, {
	        'name': 'Tatiana Nichols',
	        'position': 'Nec Diam Industries',
	        'office': 'Cook Islands',
	        'ext': '4395',
	        'startDate': '2015/05/22',
	        'salary': '$51,155'
	    }, {
	        'name': 'Rama Waller',
	        'position': 'Sem Pellentesque LLC',
	        'office': 'Andorra',
	        'ext': '2973',
	        'startDate': '2014/12/01',
	        'salary': '$223,227'
	    }];


/***/ },

/***/ 379:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var angular2_1 = __webpack_require__(6);
	var table_1 = __webpack_require__(126);
	var ng2_bootstrap_1 = __webpack_require__(394);
	var filtering_1 = __webpack_require__(124);
	var table_data_1 = __webpack_require__(378);
	var template = __webpack_require__(372);
	var TableDemo = (function () {
	    function TableDemo() {
	        this.rows = [];
	        this.columns = [
	            { title: 'Name', name: 'name' },
	            { title: 'Position', name: 'position', sort: false },
	            { title: 'Office', name: 'office', sort: 'asc' },
	            { title: 'Extn.', name: 'ext', sort: 'desc' },
	            { title: 'Start date', name: 'startDate' },
	            { title: 'Salary', name: 'salary' }
	        ];
	        this.page = 1;
	        this.itemsPerPage = 10;
	        this.maxSize = 5;
	        this.numPages = 1;
	        this.length = 0;
	        this.config = {
	            paging: true,
	            sorting: { columns: [] },
	            filtering: { filterString: '', columnName: 'position' }
	        };
	        this.data = table_data_1.TableData;
	        this.length = this.data.length;
	    }
	    TableDemo.prototype.onInit = function () {
	        this.onChangeTable(this.config, null);
	    };
	    TableDemo.prototype.changePage = function (page, data) {
	        if (data === void 0) { data = this.data; }
	        console.log(page);
	        var start = (page.page - 1) * page.itemsPerPage;
	        var end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
	        return data.slice(start, end);
	    };
	    TableDemo.prototype.changeSort = function (data, config) {
	        var _this = this;
	        if (!config.sorting) {
	            return data;
	        }
	        return data.sort(function (previous, current) {
	            var columns = _this.config.sorting.columns || [];
	            for (var i = 0; i < columns.length; i++) {
	                var columnName = columns[i].name;
	                if (previous[columnName] > current[columnName]) {
	                    return columns[i].sort === 'desc' ? -1 : 1;
	                }
	                if (previous[columnName] < current[columnName]) {
	                    return columns[i].sort === 'asc' ? -1 : 1;
	                }
	            }
	            return 0;
	        });
	    };
	    TableDemo.prototype.changeFilter = function (data, config) {
	        var _this = this;
	        if (!config.filtering) {
	            return data;
	        }
	        var filteredData = data.filter(function (item) {
	            return item[config.filtering.columnName].match(_this.config.filtering.filterString);
	        });
	        return filteredData;
	    };
	    TableDemo.prototype.onChangeTable = function (config, page) {
	        if (page === void 0) { page = config.paging; }
	        if (config.filtering) {
	            Object.assign(this.config.filtering, config.filtering);
	        }
	        if (config.sorting) {
	            Object.assign(this.config.sorting, config.sorting);
	        }
	        var filteredData = this.changeFilter(this.data, this.config);
	        var sortedData = this.changeSort(filteredData, this.config);
	        this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
	        this.length = sortedData.length;
	    };
	    TableDemo = __decorate([
	        angular2_1.Component({
	            selector: 'table-demo'
	        }),
	        angular2_1.View({
	            template: template,
	            directives: [table_1.Table, ng2_bootstrap_1.pagination, filtering_1.Ng2TableFilter, angular2_1.NgClass, angular2_1.NgIf, angular2_1.CORE_DIRECTIVES, angular2_1.FORM_DIRECTIVES]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], TableDemo);
	    return TableDemo;
	})();
	exports.TableDemo = TableDemo;


/***/ },

/***/ 381:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var angular2_1 = __webpack_require__(6);
	var Accordion = (function () {
	    function Accordion() {
	        this.groups = [];
	    }
	    Accordion.prototype.closeOtherGroups = function (openGroup) {
	        if (!this.closeOthers) {
	            return;
	        }
	        this.groups.forEach(function (group) {
	            if (group !== openGroup) {
	                group.isOpen = false;
	            }
	        });
	    };
	    Accordion.prototype.addGroup = function (group) {
	        this.groups.push(group);
	    };
	    Accordion.prototype.removeGroup = function (group) {
	        var index = this.groups.indexOf(group);
	        if (index !== -1) {
	            this.groups.slice(index, 1);
	        }
	    };
	    Accordion = __decorate([
	        angular2_1.Component({
	            selector: 'accordion, [accordion]',
	            properties: ['templateUrl', 'closeOthers'],
	            host: {
	                '[class.panel-group]': 'true'
	            }
	        }),
	        angular2_1.View({
	            template: "<ng-content></ng-content>"
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Accordion);
	    return Accordion;
	})();
	exports.Accordion = Accordion;
	var AccordionTransclude = (function () {
	    function AccordionTransclude(viewRef) {
	        this.viewRef = viewRef;
	    }
	    AccordionTransclude.prototype.onInit = function () {
	        if (this.accordionTransclude) {
	            this.viewRef.createEmbeddedView(this.accordionTransclude);
	        }
	    };
	    AccordionTransclude = __decorate([
	        angular2_1.Directive({
	            selector: 'accordion-transclude, [accordion-transclude]',
	            properties: ['accordionTransclude']
	        }),
	        __param(0, angular2_1.Inject(angular2_1.ViewContainerRef)), 
	        __metadata('design:paramtypes', [angular2_1.ViewContainerRef])
	    ], AccordionTransclude);
	    return AccordionTransclude;
	})();
	exports.AccordionTransclude = AccordionTransclude;
	var collapse_1 = __webpack_require__(206);
	var AccordionGroup = (function () {
	    function AccordionGroup(accordion) {
	        this.accordion = accordion;
	    }
	    AccordionGroup.prototype.onInit = function () {
	        this.panelClass = this.panelClass || 'panel-default';
	        this.accordion.addGroup(this);
	    };
	    AccordionGroup.prototype.onDestroy = function () {
	        this.accordion.removeGroup(this);
	    };
	    AccordionGroup.prototype.toggleOpen = function (event) {
	        event.preventDefault();
	        if (!this.isDisabled) {
	            this.isOpen = !this.isOpen;
	        }
	    };
	    Object.defineProperty(AccordionGroup.prototype, "isOpen", {
	        get: function () {
	            return this._isOpen;
	        },
	        set: function (value) {
	            this._isOpen = value;
	            if (value) {
	                this.accordion.closeOtherGroups(this);
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    AccordionGroup = __decorate([
	        angular2_1.Component({
	            selector: 'accordion-group, [accordion-group]',
	            properties: ['templateUrl', 'heading', 'isOpen', 'isDisabled', 'panelClass'],
	            host: {
	                '[class.panel-open]': 'isOpen'
	            }
	        }),
	        angular2_1.View({
	            template: "\n  <div class=\"panel\" [ng-class]=\"panelClass\">\n    <div class=\"panel-heading\" (click)=\"toggleOpen($event)\">\n      <h4 class=\"panel-title\">\n        <a href tabindex=\"0\" class=\"accordion-toggle\">\n          <span [ng-class]=\"{'text-muted': isDisabled}\"\n            [accordion-transclude]=\"headingTemplate\">{{heading}}</span>\n        </a>\n      </h4>\n    </div>\n    <div class=\"panel-collapse collapse\" [collapse]=\"!isOpen\">\n      <div class=\"panel-body\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n  </div>\n  ",
	            directives: [collapse_1.Collapse, AccordionTransclude, angular2_1.NgClass]
	        }), 
	        __metadata('design:paramtypes', [Accordion])
	    ], AccordionGroup);
	    return AccordionGroup;
	})();
	exports.AccordionGroup = AccordionGroup;
	var AccordionHeading = (function () {
	    function AccordionHeading(group, templateRef) {
	        this.group = group;
	        this.templateRef = templateRef;
	        group.headingTemplate = templateRef;
	    }
	    AccordionHeading = __decorate([
	        angular2_1.Directive({
	            selector: 'accordion-heading, [accordion-heading]'
	        }), 
	        __metadata('design:paramtypes', [AccordionGroup, angular2_1.TemplateRef])
	    ], AccordionHeading);
	    return AccordionHeading;
	})();
	exports.AccordionHeading = AccordionHeading;
	exports.accordion = [Accordion, AccordionGroup, AccordionHeading];


/***/ },

/***/ 382:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var angular2_1 = __webpack_require__(6);
	var Alert = (function () {
	    function Alert(el) {
	        this.el = el;
	        this.close = new angular2_1.EventEmitter();
	        this.classes = [];
	        this.closeable = this.closeable || el.nativeElement.getAttribute('(close)');
	    }
	    Object.defineProperty(Alert.prototype, "dismissible", {
	        get: function () {
	            return this.closeable;
	        },
	        set: function (v) {
	            this.closeable = v;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Alert.prototype.onInit = function () {
	        this.type = this.type || 'warning';
	        this.classes[0] = 'alert-' + (this.type || 'warning');
	        if (this.closeable) {
	            this.classes[1] = 'alert-dismissible';
	        }
	        else {
	            this.classes.length = 1;
	        }
	        if (this.dismissOnTimeout) {
	            var close_1 = this.onClose.bind(this);
	            setTimeout(close_1, this.dismissOnTimeout);
	        }
	    };
	    Alert.prototype.onClose = function () {
	        this.close.next(this);
	        this.closed = true;
	    };
	    Alert = __decorate([
	        angular2_1.Component({
	            selector: 'alert',
	            inputs: ['type', 'dismissible', 'dismissOnTimeout'],
	            outputs: ['close']
	        }),
	        angular2_1.View({
	            template: "\n  <div class=\"alert\" role=\"alert\" [ng-class]=\"classes\" *ng-if=\"!closed\">\n    <button *ng-if=\"closeable\" type=\"button\" class=\"close\" (click)=\"onClose($event)\">\n      <span aria-hidden=\"true\">&times;</span>\n      <span class=\"sr-only\">Close</span>\n    </button>\n    <ng-content></ng-content>\n  </div>\n  ",
	            directives: [angular2_1.NgIf, angular2_1.NgClass]
	        }), 
	        __metadata('design:paramtypes', [angular2_1.ElementRef])
	    ], Alert);
	    return Alert;
	})();
	exports.Alert = Alert;


/***/ },

/***/ 383:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var angular2_1 = __webpack_require__(6);
	var ButtonCheckbox = (function () {
	    function ButtonCheckbox(cd) {
	        this.cd = cd;
	        this.state = false;
	        this.onChange = function (_) { };
	        this.onTouched = function () { };
	        cd.valueAccessor = this;
	    }
	    ButtonCheckbox.prototype.onInit = function () {
	        this.toggle(this.trueValue === this.value);
	    };
	    Object.defineProperty(ButtonCheckbox.prototype, "trueValue", {
	        get: function () {
	            return typeof this.btnCheckboxTrue !== 'undefined' ? this.btnCheckboxTrue : true;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ButtonCheckbox.prototype, "falseValue", {
	        get: function () {
	            return typeof this.btnCheckboxFalse !== 'undefined' ? this.btnCheckboxFalse : false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ButtonCheckbox.prototype.toggle = function (state) {
	        this.state = state;
	        this.value = this.state ? this.trueValue : this.falseValue;
	    };
	    ButtonCheckbox.prototype.onClick = function () {
	        this.toggle(!this.state);
	        this.cd.viewToModelUpdate(this.value);
	    };
	    ButtonCheckbox.prototype.writeValue = function (value) {
	        this.state = this.trueValue === value;
	        this.value = value;
	    };
	    ButtonCheckbox.prototype.registerOnChange = function (fn) {
	        this.onChange = fn;
	    };
	    ButtonCheckbox.prototype.registerOnTouched = function (fn) {
	        this.onTouched = fn;
	    };
	    ButtonCheckbox = __decorate([
	        angular2_1.Directive({
	            selector: '[btn-checkbox][ng-model]',
	            properties: ['btnCheckboxTrue', 'btnCheckboxFalse'],
	            host: {
	                '(click)': 'onClick()',
	                '[class.active]': 'state'
	            }
	        }),
	        __param(0, angular2_1.Self()), 
	        __metadata('design:paramtypes', [angular2_1.NgModel])
	    ], ButtonCheckbox);
	    return ButtonCheckbox;
	})();
	exports.ButtonCheckbox = ButtonCheckbox;


/***/ },

/***/ 384:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var angular2_1 = __webpack_require__(6);
	var ButtonRadio = (function () {
	    function ButtonRadio(cd, el) {
	        this.cd = cd;
	        this.el = el;
	        this.onChange = function (_) { };
	        this.onTouched = function () { };
	        cd.valueAccessor = this;
	    }
	    ButtonRadio.prototype.onInit = function () {
	        this.uncheckable = typeof this.uncheckable !== 'undefined';
	    };
	    Object.defineProperty(ButtonRadio.prototype, "isActive", {
	        get: function () {
	            return this.btnRadio === this.value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ButtonRadio.prototype, "value", {
	        get: function () {
	            return this.cd.viewModel;
	        },
	        set: function (value) {
	            this.cd.viewModel = value;
	            if (this.isActive) {
	                this.el.nativeElement.classList.add('active');
	            }
	            else {
	                this.el.nativeElement.classList.remove('active');
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ButtonRadio.prototype.onClick = function () {
	        if (this.uncheckable && this.btnRadio === this.value) {
	            return this.cd.viewToModelUpdate(null);
	        }
	        this.cd.viewToModelUpdate(this.btnRadio);
	    };
	    ButtonRadio.prototype.writeValue = function (value) {
	        this.value = value;
	    };
	    ButtonRadio.prototype.registerOnChange = function (fn) {
	        this.onChange = fn;
	    };
	    ButtonRadio.prototype.registerOnTouched = function (fn) {
	        this.onTouched = fn;
	    };
	    ButtonRadio = __decorate([
	        angular2_1.Directive({
	            selector: '[btn-radio][ng-model]',
	            properties: ['btnRadio', 'uncheckable'],
	            host: {
	                '(click)': 'onClick()',
	                '[class.active]': 'isActive'
	            }
	        }),
	        __param(0, angular2_1.Self()), 
	        __metadata('design:paramtypes', [angular2_1.NgModel, angular2_1.ElementRef])
	    ], ButtonRadio);
	    return ButtonRadio;
	})();
	exports.ButtonRadio = ButtonRadio;


/***/ },

/***/ 385:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var angular2_1 = __webpack_require__(6);
	var ng2_bootstrap_config_1 = __webpack_require__(127);
	(function (Direction) {
	    Direction[Direction["UNKNOWN"] = 0] = "UNKNOWN";
	    Direction[Direction["NEXT"] = 1] = "NEXT";
	    Direction[Direction["PREV"] = 2] = "PREV";
	})(exports.Direction || (exports.Direction = {}));
	var Direction = exports.Direction;
	var NAVIGATION = (_a = {},
	    _a[ng2_bootstrap_config_1.Ng2BootstrapTheme.BS4] = "\n<a class=\"left carousel-control\" (click)=\"prev()\" [hidden]=\"!slides.length\">\n  <span class=\"icon-prev\" aria-hidden=\"true\"></span>\n  <span class=\"sr-only\">Previous</span>\n</a>\n<a class=\"right carousel-control\" (click)=\"next()\" [hidden]=\"!slides.length\">\n  <span class=\"icon-next\" aria-hidden=\"true\"></span>\n  <span class=\"sr-only\">Next</span>\n</a>\n  ",
	    _a[ng2_bootstrap_config_1.Ng2BootstrapTheme.BS3] = "\n<a class=\"left carousel-control\" (click)=\"prev()\" [hidden]=\"!slides.length\">\n  <span class=\"glyphicon glyphicon-chevron-left\"></span>\n</a>\n<a class=\"right carousel-control\" (click)=\"next()\" [hidden]=\"!slides.length\">\n  <span class=\"glyphicon glyphicon-chevron-right\"></span>\n</a>\n  ",
	    _a
	);
	var Carousel = (function () {
	    function Carousel() {
	        this.slides = [];
	        this.destroyed = false;
	    }
	    Carousel.prototype.onDestroy = function () {
	        this.destroyed = true;
	    };
	    Object.defineProperty(Carousel.prototype, "interval", {
	        get: function () {
	            return this._interval;
	        },
	        set: function (value) {
	            this._interval = value;
	            this.restartTimer();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Carousel.prototype.select = function (nextSlide, direction) {
	        if (direction === void 0) { direction = Direction.UNKNOWN; }
	        var nextIndex = nextSlide.index;
	        if (direction === Direction.UNKNOWN) {
	            direction = nextIndex > this.getCurrentIndex() ? Direction.NEXT : Direction.PREV;
	        }
	        if (nextSlide && nextSlide !== this.currentSlide) {
	            this.goNext(nextSlide, direction);
	        }
	    };
	    Carousel.prototype.goNext = function (slide, direction) {
	        if (this.destroyed) {
	            return;
	        }
	        slide.direction = direction;
	        slide.active = true;
	        if (this.currentSlide) {
	            this.currentSlide.direction = direction;
	            this.currentSlide.active = false;
	        }
	        this.currentSlide = slide;
	        this.restartTimer();
	    };
	    Carousel.prototype.getSlideByIndex = function (index) {
	        var len = this.slides.length;
	        for (var i = 0; i < len; ++i) {
	            if (this.slides[i].index === index) {
	                return this.slides[i];
	            }
	        }
	    };
	    Carousel.prototype.getCurrentIndex = function () {
	        return !this.currentSlide ? 0 : this.currentSlide.index;
	    };
	    Carousel.prototype.next = function () {
	        var newIndex = (this.getCurrentIndex() + 1) % this.slides.length;
	        if (newIndex === 0 && this.noWrap) {
	            this.pause();
	            return;
	        }
	        return this.select(this.getSlideByIndex(newIndex), Direction.NEXT);
	    };
	    Carousel.prototype.prev = function () {
	        var newIndex = this.getCurrentIndex() - 1 < 0 ? this.slides.length - 1 : this.getCurrentIndex() - 1;
	        if (this.noWrap && newIndex === this.slides.length - 1) {
	            this.pause();
	            return;
	        }
	        return this.select(this.getSlideByIndex(newIndex), Direction.PREV);
	    };
	    Carousel.prototype.restartTimer = function () {
	        var _this = this;
	        this.resetTimer();
	        var interval = +this.interval;
	        if (!isNaN(interval) && interval > 0) {
	            this.currentInterval = setInterval(function () {
	                var nInterval = +_this.interval;
	                if (_this.isPlaying && !isNaN(_this.interval) && nInterval > 0 && _this.slides.length) {
	                    _this.next();
	                }
	                else {
	                    _this.pause();
	                }
	            }, interval);
	        }
	    };
	    Carousel.prototype.resetTimer = function () {
	        if (this.currentInterval) {
	            clearInterval(this.currentInterval);
	            this.currentInterval = null;
	        }
	    };
	    Carousel.prototype.play = function () {
	        if (!this.isPlaying) {
	            this.isPlaying = true;
	            this.restartTimer();
	        }
	    };
	    Carousel.prototype.pause = function () {
	        if (!this.noPause) {
	            this.isPlaying = false;
	            this.resetTimer();
	        }
	    };
	    Carousel.prototype.addSlide = function (slide) {
	        slide.index = this.slides.length;
	        this.slides.push(slide);
	        if (this.slides.length === 1 || slide.active) {
	            this.select(this.slides[this.slides.length - 1]);
	            if (this.slides.length === 1) {
	                this.play();
	            }
	        }
	        else {
	            slide.active = false;
	        }
	    };
	    Carousel.prototype.removeSlide = function (slide) {
	        this.slides.splice(slide.index, 1);
	        if (this.slides.length === 0) {
	            this.currentSlide = null;
	            return;
	        }
	        for (var i = 0; i < this.slides.length; i++) {
	            this.slides[i].index = i;
	        }
	    };
	    Carousel = __decorate([
	        angular2_1.Component({
	            selector: 'carousel, [carousel]',
	            properties: ['interval', 'noTransition', 'noPause', 'noWrap']
	        }),
	        angular2_1.View({
	            template: "\n<div (mouseenter)=\"pause()\" (mouseleave)=\"play()\" class=\"carousel slide\">\n  <ol class=\"carousel-indicators\" [hidden]=\"slides.length <= 1\">\n     <li *ng-for=\"#slidez of slides\" [ng-class]=\"{active: slidez.active === true}\" (click)=\"select(slidez)\"></li>\n  </ol>\n  <div class=\"carousel-inner\"><ng-content></ng-content></div>\n  " + NAVIGATION[ng2_bootstrap_config_1.Ng2BootstrapConfig.theme] + "\n</div>\n  ",
	            directives: [angular2_1.CORE_DIRECTIVES, angular2_1.NgClass]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Carousel);
	    return Carousel;
	})();
	exports.Carousel = Carousel;
	var Slide = (function () {
	    function Slide(carousel) {
	        this.carousel = carousel;
	    }
	    Slide.prototype.onInit = function () {
	        this.carousel.addSlide(this);
	    };
	    Slide.prototype.onDestroy = function () {
	        this.carousel.removeSlide(this);
	    };
	    Slide = __decorate([
	        angular2_1.Component({
	            selector: 'slide, [slide]',
	            properties: ['direction', 'active', 'index'],
	            host: {
	                '[class.active]': 'active',
	                '[class.item]': 'true',
	                '[class.carousel-item]': 'true'
	            }
	        }),
	        angular2_1.View({
	            template: "\n  <div [ng-class]=\"{active: active}\" class=\"item text-center\">\n    <ng-content></ng-content>\n  </div>\n  ",
	            directives: [angular2_1.NgClass]
	        }), 
	        __metadata('design:paramtypes', [Carousel])
	    ], Slide);
	    return Slide;
	})();
	exports.Slide = Slide;
	exports.carousel = [Carousel, Slide];
	var _a;


/***/ },

/***/ 386:
/***/ function(module, exports, __webpack_require__) {

	var dropdown_1 = __webpack_require__(75);
	var dropdown_menu_1 = __webpack_require__(208);
	var dropdown_toggle_1 = __webpack_require__(210);
	exports.dropdown = [dropdown_1.Dropdown, dropdown_menu_1.DropdownMenu, dropdown_toggle_1.DropdownToggle];


/***/ },

/***/ 387:
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var angular2_1 = __webpack_require__(6);
	var paginationConfig = {
	    maxSize: void 0,
	    itemsPerPage: 10,
	    boundaryLinks: false,
	    directionLinks: true,
	    firstText: 'First',
	    previousText: 'Previous',
	    nextText: 'Next',
	    lastText: 'Last',
	    rotate: true
	};
	var Pagination = (function () {
	    function Pagination(cd, renderer, elementRef) {
	        this.cd = cd;
	        this.renderer = renderer;
	        this.elementRef = elementRef;
	        this.numPages = new angular2_1.EventEmitter();
	        this.pageChanged = new angular2_1.EventEmitter();
	        this.inited = false;
	        this.onChange = function (_) { };
	        this.onTouched = function () { };
	        cd.valueAccessor = this;
	        this.config = this.config || paginationConfig;
	    }
	    Object.defineProperty(Pagination.prototype, "itemsPerPage", {
	        get: function () {
	            return this._itemsPerPage;
	        },
	        set: function (v) {
	            this._itemsPerPage = v;
	            this.totalPages = this.calculateTotalPages();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Pagination.prototype, "totalItems", {
	        get: function () {
	            return this._totalItems;
	        },
	        set: function (v) {
	            this._totalItems = v;
	            this.totalPages = this.calculateTotalPages();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Pagination.prototype, "totalPages", {
	        get: function () {
	            return this._totalPages;
	        },
	        set: function (v) {
	            this._totalPages = v;
	            this.numPages.next(v);
	            if (this.inited) {
	                this.selectPage(this.page);
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Pagination.prototype, "page", {
	        get: function () {
	            return this._page;
	        },
	        set: function (value) {
	            this._page = (value > this.totalPages) ? this.totalPages : (value || 1);
	            this.pageChanged.next({
	                page: this._page,
	                itemsPerPage: this.itemsPerPage
	            });
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Pagination.prototype.onInit = function () {
	        this.classMap = this.elementRef.nativeElement.getAttribute('class') || '';
	        this.maxSize = typeof this.maxSize !== 'undefined' ? this.maxSize : paginationConfig.maxSize;
	        this.rotate = typeof this.rotate !== 'undefined' ? this.rotate : paginationConfig.rotate;
	        this.boundaryLinks = typeof this.boundaryLinks !== 'undefined' ? this.boundaryLinks : paginationConfig.boundaryLinks;
	        this.directionLinks = typeof this.directionLinks !== 'undefined' ? this.directionLinks : paginationConfig.directionLinks;
	        this.itemsPerPage = typeof this.itemsPerPage !== 'undefined' ? this.itemsPerPage : paginationConfig.itemsPerPage;
	        this.totalPages = this.calculateTotalPages();
	        this.pages = this.getPages(this.page, this.totalPages);
	        this.page = this.cd.value;
	        this.inited = true;
	    };
	    Pagination.prototype.writeValue = function (value) {
	        this.page = value;
	        this.pages = this.getPages(this.page, this.totalPages);
	    };
	    Pagination.prototype.selectPage = function (page, event) {
	        if (event) {
	            event.preventDefault();
	        }
	        if (!this.disabled) {
	            if (event && event.target) {
	                var target = event.target;
	                target.blur();
	            }
	            this.writeValue(page);
	            this.cd.viewToModelUpdate(this.page);
	        }
	    };
	    Pagination.prototype.getText = function (key) {
	        return this[key + 'Text'] || paginationConfig[key + 'Text'];
	    };
	    Pagination.prototype.noPrevious = function () {
	        return this.page === 1;
	    };
	    Pagination.prototype.noNext = function () {
	        return this.page === this.totalPages;
	    };
	    Pagination.prototype.makePage = function (number, text, isActive) {
	        return {
	            number: number,
	            text: text,
	            active: isActive
	        };
	    };
	    Pagination.prototype.getPages = function (currentPage, totalPages) {
	        var pages = [];
	        var startPage = 1;
	        var endPage = totalPages;
	        var isMaxSized = typeof this.maxSize !== 'undefined' && this.maxSize < totalPages;
	        if (isMaxSized) {
	            if (this.rotate) {
	                startPage = Math.max(currentPage - Math.floor(this.maxSize / 2), 1);
	                endPage = startPage + this.maxSize - 1;
	                if (endPage > totalPages) {
	                    endPage = totalPages;
	                    startPage = endPage - this.maxSize + 1;
	                }
	            }
	            else {
	                startPage = ((Math.ceil(currentPage / this.maxSize) - 1) * this.maxSize) + 1;
	                endPage = Math.min(startPage + this.maxSize - 1, totalPages);
	            }
	        }
	        for (var number = startPage; number <= endPage; number++) {
	            var page = this.makePage(number, number.toString(), number === currentPage);
	            pages.push(page);
	        }
	        if (isMaxSized && !this.rotate) {
	            if (startPage > 1) {
	                var previousPageSet = this.makePage(startPage - 1, '...', false);
	                pages.unshift(previousPageSet);
	            }
	            if (endPage < totalPages) {
	                var nextPageSet = this.makePage(endPage + 1, '...', false);
	                pages.push(nextPageSet);
	            }
	        }
	        return pages;
	    };
	    Pagination.prototype.calculateTotalPages = function () {
	        var totalPages = this.itemsPerPage < 1 ? 1 : Math.ceil(this.totalItems / this.itemsPerPage);
	        return Math.max(totalPages || 0, 1);
	    };
	    Pagination.prototype.registerOnChange = function (fn) {
	        this.onChange = fn;
	    };
	    Pagination.prototype.registerOnTouched = function (fn) {
	        this.onTouched = fn;
	    };
	    Pagination = __decorate([
	        angular2_1.Component({
	            selector: 'pagination[ng-model], [pagination][ng-model]',
	            properties: [
	                'rotate', 'disabled',
	                'totalItems', 'itemsPerPage', 'maxSize',
	                'boundaryLinks', 'directionLinks',
	                'firstText', 'previousText', 'nextText', 'lastText'
	            ],
	            events: ['numPages', 'pageChanged']
	        }),
	        angular2_1.View({
	            template: "\n  <ul class=\"pagination\" [ng-class]=\"classMap\">\n    <li class=\"pagination-first\"\n        [ng-class]=\"{disabled: noPrevious()||disabled, hidden: !boundaryLinks}\"\n        [hidden]=\"!boundaryLinks\">\n      <a href (click)=\"selectPage(1, $event)\">{{getText('first')}}</a>\n    </li>\n\n    <li class=\"pagination-prev\"\n        [ng-class]=\"{disabled: noPrevious()||disabled, hidden: !directionLinks}\"\n        [hidden]=\"!directionLinks\">\n      <a href (click)=\"selectPage(page - 1, $event)\">{{getText('previous')}}</a>\n      </li>\n\n    <li *ng-for=\"#pg of pages\"\n    [ng-class]=\"{active: pg.active, disabled: disabled&&!pg.active}\"\n    class=\"pagination-page\">\n      <a href (click)=\"selectPage(pg.number, $event)\">{{pg.text}}</a>\n    </li>\n\n    <li class=\"pagination-next\"\n        [ng-class]=\"{disabled: noNext()||disabled, hidden: !directionLinks}\"\n        [hidden]=\"!directionLinks\">\n      <a href (click)=\"selectPage(page + 1, $event)\">{{getText('next')}}</a></li>\n\n    <li class=\"pagination-last\"\n        [ng-class]=\"{disabled: noNext()||disabled, hidden: !boundaryLinks}\"\n        [hidden]=\"!boundaryLinks\">\n      <a href (click)=\"selectPage(totalPages, $event)\">{{getText('last')}}</a></li>\n  </ul>\n  ",
	            directives: [angular2_1.CORE_DIRECTIVES, angular2_1.NgClass],
	            encapsulation: angular2_1.ViewEncapsulation.None
	        }),
	        __param(0, angular2_1.Self()), 
	        __metadata('design:paramtypes', [angular2_1.NgModel, angular2_1.Renderer, angular2_1.ElementRef])
	    ], Pagination);
	    return Pagination;
	})();
	exports.Pagination = Pagination;
	var pagerConfig = {
	    itemsPerPage: 10,
	    previousText: '« Previous',
	    nextText: 'Next »',
	    align: true
	};
	var Pager = (function (_super) {
	    __extends(Pager, _super);
	    function Pager(cd, renderer, elementRef) {
	        _super.call(this, cd, renderer, elementRef);
	        this.align = pagerConfig.align;
	        this.config = pagerConfig;
	    }
	    Pager = __decorate([
	        angular2_1.Component({
	            selector: 'pager[ng-model], [pager][ng-model]',
	            properties: [
	                'align',
	                'totalItems', 'itemsPerPage',
	                'previousText', 'nextText',
	            ]
	        }),
	        angular2_1.View({
	            template: "\n    <ul class=\"pager\">\n      <li [ng-class]=\"{disabled: noPrevious(), previous: align, 'pull-left': align}\"><a href (click)=\"selectPage(page - 1, $event)\">{{getText('previous')}}</a></li>\n      <li [ng-class]=\"{disabled: noNext(), next: align, 'pull-right': align}\"><a href (click)=\"selectPage(page + 1, $event)\">{{getText('next')}}</a></li>\n  </ul>\n  ",
	            directives: [angular2_1.NgClass]
	        }),
	        __param(0, angular2_1.Self()), 
	        __metadata('design:paramtypes', [angular2_1.NgModel, angular2_1.Renderer, angular2_1.ElementRef])
	    ], Pager);
	    return Pager;
	})(Pagination);
	exports.Pager = Pager;
	exports.pagination = [Pagination, Pager];


/***/ },

/***/ 388:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var angular2_1 = __webpack_require__(6);
	var progressConfig = {
	    animate: true,
	    max: 100
	};
	var Progress = (function () {
	    function Progress() {
	        this.bars = [];
	    }
	    Progress.prototype.onInit = function () {
	        this.animate = this.animate !== false;
	        this.max = typeof this.max === 'number' ? this.max : progressConfig.max;
	    };
	    Object.defineProperty(Progress.prototype, "max", {
	        get: function () {
	            return this._max;
	        },
	        set: function (v) {
	            this._max = v;
	            this.bars.forEach(function (bar) {
	                bar.recalculatePercentage();
	            });
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Progress.prototype.addBar = function (bar) {
	        if (!this.animate) {
	            bar.transition = 'none';
	        }
	        this.bars.push(bar);
	    };
	    Progress.prototype.removeBar = function (bar) {
	        this.bars.splice(this.bars.indexOf(bar), 1);
	    };
	    Progress = __decorate([
	        angular2_1.Directive({
	            selector: 'bs-progress, [progress]',
	            properties: ['animate', 'max'],
	            host: {
	                'class': 'progress',
	                '[attr.max]': 'max'
	            }
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Progress);
	    return Progress;
	})();
	exports.Progress = Progress;
	var Bar = (function () {
	    function Bar(progress) {
	        this.progress = progress;
	        this.percent = 0;
	    }
	    Bar.prototype.onInit = function () {
	        this.progress.addBar(this);
	    };
	    Bar.prototype.onDestroy = function () {
	        this.progress.removeBar(this);
	    };
	    Object.defineProperty(Bar.prototype, "value", {
	        get: function () {
	            return this._value;
	        },
	        set: function (v) {
	            if (!v && v !== 0) {
	                return;
	            }
	            this._value = v;
	            this.recalculatePercentage();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Bar.prototype.recalculatePercentage = function () {
	        this.percent = +(100 * this.value / this.progress.max).toFixed(2);
	        var totalPercentage = this.progress.bars.reduce(function (total, bar) {
	            return total + bar.percent;
	        }, 0);
	        if (totalPercentage > 100) {
	            this.percent -= totalPercentage - 100;
	        }
	    };
	    Bar = __decorate([
	        angular2_1.Component({
	            selector: 'bar, [bar]',
	            properties: ['type', 'value']
	        }),
	        angular2_1.View({
	            template: "\n  <div class=\"progress-bar\"\n    style=\"min-width: 0;\"\n    role=\"progressbar\"\n    [ng-class]=\"type && 'progress-bar-' + type\"\n    [ng-style]=\"{width: (percent < 100 ? percent : 100) + '%', transition: transition}\"\n    aria-valuemin=\"0\"\n    [attr.aria-valuenow]=\"value\"\n    [attr.aria-valuetext]=\"percent.toFixed(0) + '%'\"\n    [attr.aria-valuemax]=\"max\"\n    ><ng-content></ng-content></div>\n",
	            directives: [angular2_1.NgStyle, angular2_1.NgClass],
	            encapsulation: angular2_1.ViewEncapsulation.None
	        }),
	        __param(0, angular2_1.Host()), 
	        __metadata('design:paramtypes', [Progress])
	    ], Bar);
	    return Bar;
	})();
	exports.Bar = Bar;
	var Progressbar = (function () {
	    function Progressbar() {
	    }
	    Progressbar = __decorate([
	        angular2_1.Component({
	            selector: 'progressbar, [progressbar]',
	            properties: ['animate', 'max', 'type', 'value']
	        }),
	        angular2_1.View({
	            template: "\n    <div progress [animate]=\"animate\" [max]=\"max\">\n      <bar [type]=\"type\" [value]=\"value\">\n          <ng-content></ng-content>\n      </bar>\n    </div>\n  ",
	            directives: [Progress, Bar]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Progressbar);
	    return Progressbar;
	})();
	exports.Progressbar = Progressbar;
	exports.progressbar = [Progress, Bar, Progressbar];


/***/ },

/***/ 389:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var angular2_1 = __webpack_require__(6);
	var Rating = (function () {
	    function Rating(cd) {
	        this.cd = cd;
	        this.onHover = new angular2_1.EventEmitter();
	        this.onLeave = new angular2_1.EventEmitter();
	        this.onChange = function (_) { };
	        this.onTouched = function () { };
	        cd.valueAccessor = this;
	    }
	    Rating.prototype.onInit = function () {
	        this.max = typeof this.max !== 'undefined' ? this.max : 5;
	        this.readonly = this.readonly === true;
	        this.stateOn = typeof this.stateOn !== 'undefined' ? this.stateOn : 'glyphicon-star';
	        this.stateOff = typeof this.stateOff !== 'undefined' ? this.stateOff : 'glyphicon-star-empty';
	        this.titles = typeof this.titles !== 'undefined' && this.titles.length > 0 ? this.titles : ['one', 'two', 'three', 'four', 'five'];
	        this.range = this.buildTemplateObjects(this.ratingStates, this.max);
	    };
	    Rating.prototype.writeValue = function (value) {
	        if (value % 1 !== value) {
	            this.value = Math.round(value);
	            this.preValue = value;
	            return;
	        }
	        this.preValue = value;
	        this.value = value;
	    };
	    Rating.prototype.buildTemplateObjects = function (ratingStates, max) {
	        ratingStates = ratingStates || [];
	        var count = ratingStates.length || max;
	        var result = [];
	        for (var i = 0; i < count; i++) {
	            result.push(Object.assign({
	                index: i,
	                stateOn: this.stateOn,
	                stateOff: this.stateOff,
	                title: this.titles[i] || i + 1
	            }, ratingStates[i] || {}));
	        }
	        return result;
	    };
	    Rating.prototype.rate = function (value) {
	        if (!this.readonly && value >= 0 && value <= this.range.length) {
	            this.writeValue(value);
	            this.cd.viewToModelUpdate(value);
	        }
	    };
	    Rating.prototype.enter = function (value) {
	        if (!this.readonly) {
	            this.value = value;
	            this.onHover.next(value);
	        }
	    };
	    Rating.prototype.reset = function () {
	        this.value = this.preValue;
	        this.onLeave.next(this.value);
	    };
	    Rating.prototype.onKeydown = function (event) {
	        if ([37, 38, 39, 40].indexOf(event.which) === -1) {
	            return;
	        }
	        event.preventDefault();
	        event.stopPropagation();
	        var sign = event.which === 38 || event.which === 39 ? 1 : -1;
	        this.rate(this.value + sign);
	    };
	    Rating.prototype.registerOnChange = function (fn) {
	        this.onChange = fn;
	    };
	    Rating.prototype.registerOnTouched = function (fn) {
	        this.onTouched = fn;
	    };
	    Rating = __decorate([
	        angular2_1.Component({
	            selector: 'rating[ng-model]',
	            properties: [
	                'max', 'readonly', 'titles',
	                'stateOn', 'stateOff',
	                'ratingStates'
	            ],
	            events: ['onHover', 'onLeave'],
	            host: {
	                '(keydown)': 'onKeydown($event)'
	            }
	        }),
	        angular2_1.View({
	            template: "\n    <span (mouseleave)=\"reset()\" (keydown)=\"onKeydown($event)\" tabindex=\"0\" role=\"slider\" aria-valuemin=\"0\" [attr.aria-valuemax]=\"range.length\" [attr.aria-valuenow]=\"value\">\n      <template ng-for #r [ng-for-of]=\"range\" #index=\"index\">\n        <span class=\"sr-only\">({{ index < value ? '*' : ' ' }})</span>\n        <i (mouseenter)=\"enter(index + 1)\" (click)=\"rate(index + 1)\" class=\"glyphicon\" [ng-class]=\"index < value ? r.stateOn : r.stateOff\" [title]=\"r.title\" ></i>\n      </template>\n    </span>\n  ",
	            directives: [angular2_1.NgClass, angular2_1.NgFor]
	        }),
	        __param(0, angular2_1.Self()), 
	        __metadata('design:paramtypes', [angular2_1.NgModel])
	    ], Rating);
	    return Rating;
	})();
	exports.Rating = Rating;


/***/ },

/***/ 390:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var angular2_1 = __webpack_require__(6);
	var common_1 = __webpack_require__(207);
	var Tabset = (function () {
	    function Tabset() {
	        this.tabs = [];
	    }
	    Object.defineProperty(Tabset.prototype, "classMap", {
	        get: function () {
	            var map = {
	                'nav-stacked': this.vertical,
	                'nav-justified': this.justified
	            };
	            map['nav-' + (this.type || 'tabs')] = true;
	            return map;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Tabset.prototype.onInit = function () {
	        this.type = this.type !== 'undefined' ? this.type : 'tabs';
	    };
	    Tabset.prototype.addTab = function (tab) {
	        this.tabs.push(tab);
	        tab.active = this.tabs.length === 1 && tab.active !== false;
	    };
	    Tabset.prototype.removeTab = function (tab) {
	        var index = this.tabs.indexOf(tab);
	        if (index === -1) {
	            return;
	        }
	        if (tab.active && this.tabs.length > 1) {
	            var newActiveIndex = index === this.tabs.length - 1 ? index - 1 : index + 1;
	            this.tabs[newActiveIndex].active = true;
	        }
	        this.tabs.slice(index, 1);
	    };
	    Tabset = __decorate([
	        angular2_1.Component({
	            selector: 'tabset',
	            properties: ['vertical', 'justified', 'type']
	        }),
	        angular2_1.View({
	            template: "\n    <ul class=\"nav\" [ng-class]=\"classMap\" (click)=\"$event.preventDefault()\">\n        <li *ng-for=\"#tabz of tabs\" class=\"nav-item\" [ng-class]=\"{active: tabz.active, disabled: tabz.disabled}\">\n          <a href class=\"nav-link\" [ng-class]=\"{active: tabz.active, disabled: tabz.disabled}\" (click)=\"tabz.active = true\">\n            <span [ng-transclude]=\"tabz.headingRef\">{{tabz.heading}}</span>\n          </a>\n        </li>\n    </ul>\n    <div class=\"tab-content\">\n      <ng-content></ng-content>\n    </div>\n  ",
	            directives: [angular2_1.CORE_DIRECTIVES, angular2_1.NgClass, common_1.NgTransclude]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Tabset);
	    return Tabset;
	})();
	exports.Tabset = Tabset;
	var Tab = (function () {
	    function Tab(tabset) {
	        this.tabset = tabset;
	        this.select = new angular2_1.EventEmitter();
	        this.deselect = new angular2_1.EventEmitter();
	        this.tabset.addTab(this);
	    }
	    Object.defineProperty(Tab.prototype, "disable", {
	        get: function () {
	            return this.disabled;
	        },
	        set: function (v) {
	            console.warn('DEPRECATED use `disabled` property (not `disable`)');
	            this.disabled = v;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Tab.prototype, "active", {
	        get: function () {
	            return this._active;
	        },
	        set: function (active) {
	            var _this = this;
	            if (this.disabled && active || !active) {
	                if (!active) {
	                    this._active = active;
	                }
	                this.deselect.next(this);
	                return;
	            }
	            this._active = active;
	            this.select.next(this);
	            this.tabset.tabs.forEach(function (tab) {
	                if (tab !== _this) {
	                    tab.active = false;
	                }
	            });
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Tab.prototype.doCheck = function () {
	        return true;
	    };
	    Tab.prototype.onInit = function () {
	    };
	    Tab.prototype.onDestroy = function () {
	        this.tabset.removeTab(this);
	    };
	    Tab = __decorate([
	        angular2_1.Directive({
	            selector: 'tab, [tab]',
	            properties: ['active', 'disable', 'disabled', 'heading'],
	            events: ['select', 'deselect'],
	            host: {
	                '[class.tab-pane]': 'true',
	                '[class.active]': 'active'
	            }
	        }), 
	        __metadata('design:paramtypes', [Tabset])
	    ], Tab);
	    return Tab;
	})();
	exports.Tab = Tab;
	var TabHeading = (function () {
	    function TabHeading(templateRef, tab) {
	        this.templateRef = templateRef;
	        tab.headingRef = templateRef;
	    }
	    TabHeading = __decorate([
	        angular2_1.Directive({ selector: '[tab-heading]' }), 
	        __metadata('design:paramtypes', [angular2_1.TemplateRef, Tab])
	    ], TabHeading);
	    return TabHeading;
	})();
	exports.TabHeading = TabHeading;
	exports.tabs = [Tab, TabHeading, Tabset];


/***/ },

/***/ 391:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var angular2_1 = __webpack_require__(6);
	exports.timepickerConfig = {
	    hourStep: 1,
	    minuteStep: 1,
	    showMeridian: true,
	    meridians: null,
	    readonlyInput: false,
	    mousewheel: true,
	    arrowkeys: true,
	    showSpinners: true,
	    min: void 0,
	    max: void 0
	};
	function isDefined(value) {
	    return typeof value !== 'undefined';
	}
	function def(value, fn, defaultValue) {
	    return fn(value) ? value : defaultValue;
	}
	function addMinutes(date, minutes) {
	    var dt = new Date(date.getTime() + minutes * 60000);
	    var newDate = new Date(date);
	    newDate.setHours(dt.getHours(), dt.getMinutes());
	    return newDate;
	}
	var Timepicker = (function () {
	    function Timepicker(cd) {
	        this.cd = cd;
	        this._selected = new Date();
	        this.meridians = ['AM', 'PM'];
	        this.onChange = function (_) { };
	        this.onTouched = function () { };
	        cd.valueAccessor = this;
	    }
	    Object.defineProperty(Timepicker.prototype, "selected", {
	        get: function () {
	            return this._selected;
	        },
	        set: function (v) {
	            if (v) {
	                this._selected = v;
	                this.updateTemplate();
	                this.cd.viewToModelUpdate(this.selected);
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Timepicker.prototype, "showMeridian", {
	        get: function () {
	            return this._showMeridian;
	        },
	        set: function (value) {
	            this._showMeridian = value;
	            if (true) {
	                this.updateTemplate();
	                return;
	            }
	            var hours = this.getHoursFromTemplate();
	            var minutes = this.getMinutesFromTemplate();
	            if (isDefined(hours) && isDefined(minutes)) {
	                this.selected.setHours(hours);
	                this.refresh();
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Timepicker.prototype.onInit = function () {
	        this.meridians = def(this.meridians, isDefined, exports.timepickerConfig.meridians) || ['AM', 'PM'];
	        this.mousewheel = def(this.mousewheel, isDefined, exports.timepickerConfig.mousewheel);
	        if (this.mousewheel) {
	            this.setupMousewheelEvents();
	        }
	        this.arrowkeys = def(this.arrowkeys, isDefined, exports.timepickerConfig.arrowkeys);
	        if (this.arrowkeys) {
	            this.setupArrowkeyEvents();
	        }
	        this.readonlyInput = def(this.readonlyInput, isDefined, exports.timepickerConfig.readonlyInput);
	        this.setupInputEvents();
	        this.hourStep = def(this.hourStep, isDefined, exports.timepickerConfig.hourStep);
	        this.minuteStep = def(this.minuteStep, isDefined, exports.timepickerConfig.minuteStep);
	        this.min = def(this.min, isDefined, exports.timepickerConfig.min);
	        this.max = def(this.max, isDefined, exports.timepickerConfig.max);
	        this.showMeridian = def(this.showMeridian, isDefined, exports.timepickerConfig.showMeridian);
	        this.showSpinners = def(this.showSpinners, isDefined, exports.timepickerConfig.showSpinners);
	    };
	    Timepicker.prototype.writeValue = function (v) {
	        if (v === this.selected) {
	            return;
	        }
	        if (v && v instanceof Date) {
	            this.selected = v;
	            return;
	        }
	        this.selected = v ? new Date(v) : null;
	    };
	    Timepicker.prototype.refresh = function (type) {
	        this.updateTemplate();
	        this.cd.viewToModelUpdate(this.selected);
	    };
	    Timepicker.prototype.updateTemplate = function (keyboardChange) {
	        var hours = this.selected.getHours();
	        var minutes = this.selected.getMinutes();
	        if (this.showMeridian) {
	            hours = (hours === 0 || hours === 12) ? 12 : hours % 12;
	        }
	        this.hours = this.pad(hours);
	        this.minutes = this.pad(minutes);
	        this.meridian = this.selected.getHours() < 12 ? this.meridians[0] : this.meridians[1];
	    };
	    Timepicker.prototype.getHoursFromTemplate = function () {
	        var hours = parseInt(this.hours, 10);
	        var valid = this.showMeridian ? (hours > 0 && hours < 13) : (hours >= 0 && hours < 24);
	        if (!valid) {
	            return undefined;
	        }
	        if (this.showMeridian) {
	            if (hours === 12) {
	                hours = 0;
	            }
	            if (this.meridian === this.meridians[1]) {
	                hours = hours + 12;
	            }
	        }
	        return hours;
	    };
	    Timepicker.prototype.getMinutesFromTemplate = function () {
	        var minutes = parseInt(this.minutes, 10);
	        return (minutes >= 0 && minutes < 60) ? minutes : undefined;
	    };
	    Timepicker.prototype.pad = function (value) {
	        return (isDefined(value) && value.toString().length < 2) ? '0' + value : value.toString();
	    };
	    Timepicker.prototype.setupMousewheelEvents = function () {
	    };
	    Timepicker.prototype.setupArrowkeyEvents = function () {
	    };
	    Timepicker.prototype.setupInputEvents = function () {
	    };
	    Timepicker.prototype.updateHours = function () {
	        if (this.readonlyInput) {
	            return;
	        }
	        var hours = this.getHoursFromTemplate();
	        var minutes = this.getMinutesFromTemplate();
	        if (!isDefined(hours) || !isDefined(minutes)) {
	        }
	        this.selected.setHours(hours);
	        if (this.selected < this.min || this.selected > this.max) {
	        }
	        else {
	            this.refresh('h');
	        }
	    };
	    Timepicker.prototype.hoursOnBlur = function (event) {
	        if (this.readonlyInput) {
	            return;
	        }
	        if (!this.invalidHours && parseInt(this.hours, 10) < 10) {
	            this.hours = this.pad(this.hours);
	        }
	    };
	    Timepicker.prototype.updateMinutes = function () {
	        if (this.readonlyInput) {
	            return;
	        }
	        var minutes = this.getMinutesFromTemplate();
	        var hours = this.getHoursFromTemplate();
	        if (!isDefined(minutes) || !isDefined(hours)) {
	        }
	        this.selected.setMinutes(minutes);
	        if (this.selected < this.min || this.selected > this.max) {
	        }
	        else {
	            this.refresh('m');
	        }
	    };
	    Timepicker.prototype.minutesOnBlur = function (event) {
	        if (this.readonlyInput) {
	            return;
	        }
	        if (!this.invalidMinutes && parseInt(this.minutes, 10) < 10) {
	            this.minutes = this.pad(this.minutes);
	        }
	    };
	    Timepicker.prototype.noIncrementHours = function () {
	        var incrementedSelected = addMinutes(this.selected, this.hourStep * 60);
	        return incrementedSelected > this.max ||
	            (incrementedSelected < this.selected && incrementedSelected < this.min);
	    };
	    Timepicker.prototype.noDecrementHours = function () {
	        var decrementedSelected = addMinutes(this.selected, -this.hourStep * 60);
	        return decrementedSelected < this.min ||
	            (decrementedSelected > this.selected && decrementedSelected > this.max);
	    };
	    Timepicker.prototype.noIncrementMinutes = function () {
	        var incrementedSelected = addMinutes(this.selected, this.minuteStep);
	        return incrementedSelected > this.max ||
	            (incrementedSelected < this.selected && incrementedSelected < this.min);
	    };
	    Timepicker.prototype.noDecrementMinutes = function () {
	        var decrementedSelected = addMinutes(this.selected, -this.minuteStep);
	        return decrementedSelected < this.min ||
	            (decrementedSelected > this.selected && decrementedSelected > this.max);
	    };
	    Timepicker.prototype.addMinutesToSelected = function (minutes) {
	        this.selected = addMinutes(this.selected, minutes);
	        this.refresh();
	    };
	    Timepicker.prototype.noToggleMeridian = function () {
	        if (this.selected.getHours() < 13) {
	            return addMinutes(this.selected, 12 * 60) > this.max;
	        }
	        else {
	            return addMinutes(this.selected, -12 * 60) < this.min;
	        }
	    };
	    Timepicker.prototype.incrementHours = function () {
	        if (!this.noIncrementHours()) {
	            this.addMinutesToSelected(this.hourStep * 60);
	        }
	    };
	    Timepicker.prototype.decrementHours = function () {
	        if (!this.noDecrementHours()) {
	            this.addMinutesToSelected(-this.hourStep * 60);
	        }
	    };
	    Timepicker.prototype.incrementMinutes = function () {
	        if (!this.noIncrementMinutes()) {
	            this.addMinutesToSelected(this.minuteStep);
	        }
	    };
	    Timepicker.prototype.decrementMinutes = function () {
	        if (!this.noDecrementMinutes()) {
	            this.addMinutesToSelected(-this.minuteStep);
	        }
	    };
	    Timepicker.prototype.toggleMeridian = function () {
	        if (!this.noToggleMeridian()) {
	            var sign = this.selected.getHours() < 12 ? 1 : -1;
	            this.addMinutesToSelected(12 * 60 * sign);
	        }
	    };
	    Timepicker.prototype.registerOnChange = function (fn) {
	        this.onChange = fn;
	    };
	    Timepicker.prototype.registerOnTouched = function (fn) {
	        this.onTouched = fn;
	    };
	    Timepicker = __decorate([
	        angular2_1.Component({
	            selector: 'timepicker[ng-model]',
	            properties: [
	                'hourStep', 'minuteStep',
	                'meridians', 'showMeridian',
	                'readonlyInput',
	                'mousewheel', 'arrowkeys',
	                'showSpinners',
	                'min', 'max'
	            ]
	        }),
	        angular2_1.View({
	            template: "\n    <table>\n      <tbody>\n        <tr class=\"text-center\" [ng-class]=\"{hidden: !showSpinners}\">\n          <td><a (click)=\"incrementHours()\" [ng-class]=\"{disabled: noIncrementHours()}\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a></td>\n          <td>&nbsp;</td>\n          <td><a (click)=\"incrementMinutes()\" [ng-class]=\"{disabled: noIncrementMinutes()}\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a></td>\n          <td [ng-class]=\"{hidden: !showMeridian}\" [hidden]=\"!showMeridian\"></td>\n        </tr>\n        <tr>\n          <td class=\"form-group\" [ng-class]=\"{'has-error': invalidHours}\">\n            <input style=\"width:50px;\" type=\"text\" [(ng-model)]=\"hours\" (change)=\"updateHours()\" class=\"form-control text-center\" [readonly]=\"readonlyInput\" (blur)=\"hoursOnBlur($event)\" maxlength=\"2\">\n          </td>\n          <td>:</td>\n          <td class=\"form-group\" [ng-class]=\"{'has-error': invalidMinutes}\">\n            <input style=\"width:50px;\" type=\"text\" [(ng-model)]=\"minutes\" (change)=\"updateMinutes()\" class=\"form-control text-center\" [readonly]=\"readonlyInput\" (blur)=\"minutesOnBlur($event)\" maxlength=\"2\">\n          </td>\n          <td [ng-class]=\"{hidden: !showMeridian}\" [hidden]=\"!showMeridian\"><button type=\"button\" [ng-class]=\"{disabled: noToggleMeridian()}\" class=\"btn btn-default text-center\" (click)=\"toggleMeridian()\">{{meridian}}</button></td>\n        </tr>\n        <tr class=\"text-center\" [ng-class]=\"{hidden: !showSpinners}\">\n          <td><a (click)=\"decrementHours()\" [ng-class]=\"{disabled: noDecrementHours()}\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a></td>\n          <td>&nbsp;</td>\n          <td><a (click)=\"decrementMinutes()\" [ng-class]=\"{disabled: noDecrementMinutes()}\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a></td>\n          <td [ng-class]=\"{hidden: !showMeridian}\" [hidden]=\"!showMeridian\"></td>\n        </tr>\n      </tbody>\n    </table>\n  ",
	            directives: [angular2_1.FORM_DIRECTIVES, angular2_1.NgClass]
	        }),
	        __param(0, angular2_1.Self()), 
	        __metadata('design:paramtypes', [angular2_1.NgModel])
	    ], Timepicker);
	    return Timepicker;
	})();
	exports.Timepicker = Timepicker;


/***/ },

/***/ 392:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var angular2_1 = __webpack_require__(6);
	var angular2_2 = __webpack_require__(6);
	var position_1 = __webpack_require__(128);
	var TooltipOptions = (function () {
	    function TooltipOptions(options) {
	        Object.assign(this, options);
	    }
	    return TooltipOptions;
	})();
	var TooltipContainer = (function () {
	    function TooltipContainer(element, options) {
	        this.element = element;
	        Object.assign(this, options);
	        this.classMap = { 'in': false };
	        this.classMap[options.placement] = true;
	    }
	    TooltipContainer.prototype.position = function (hostEl) {
	        this.display = 'block';
	        this.top = '0px';
	        this.left = '0px';
	        var p = position_1.positionService
	            .positionElements(hostEl.nativeElement, this.element.nativeElement.children[0], this.placement, this.appendToBody);
	        this.top = p.top + 'px';
	        this.left = p.left + 'px';
	        this.classMap['in'] = true;
	    };
	    TooltipContainer = __decorate([
	        angular2_1.Component({
	            selector: 'tooltip-container'
	        }),
	        angular2_1.View({
	            template: "\n    <div class=\"tooltip\" role=\"tooltip\"\n     [ng-style]=\"{top: top, left: left, display: display}\"\n     [ng-class]=\"classMap\" >\n      <div class=\"tooltip-arrow\"></div>\n      <div class=\"tooltip-inner\">\n        {{content}}\n      </div>\n    </div>",
	            directives: [angular2_1.NgClass, angular2_1.NgStyle],
	            encapsulation: angular2_1.ViewEncapsulation.None
	        }), 
	        __metadata('design:paramtypes', [angular2_1.ElementRef, TooltipOptions])
	    ], TooltipContainer);
	    return TooltipContainer;
	})();
	var Tooltip = (function () {
	    function Tooltip(element, loader) {
	        this.element = element;
	        this.loader = loader;
	        this.visible = false;
	        this.placement = 'top';
	    }
	    Tooltip.prototype.onInit = function () {
	    };
	    Tooltip.prototype.show = function () {
	        var _this = this;
	        if (this.visible) {
	            return;
	        }
	        this.visible = true;
	        var options = new TooltipOptions({
	            content: this.content,
	            placement: this.placement
	        });
	        var binding = angular2_2.Injector.resolve([
	            angular2_2.bind(TooltipOptions).toValue(options)
	        ]);
	        this.tooltip = this.loader
	            .loadNextToLocation(TooltipContainer, this.element, binding)
	            .then(function (componentRef) {
	            componentRef.instance.position(_this.element);
	            return componentRef;
	        });
	    };
	    Tooltip.prototype.hide = function () {
	        if (!this.visible) {
	            return;
	        }
	        this.visible = false;
	        this.tooltip.then(function (componentRef) {
	            componentRef.dispose();
	            return componentRef;
	        });
	    };
	    Tooltip = __decorate([
	        angular2_1.Directive({
	            selector: '[tooltip]',
	            properties: [
	                'content:tooltip',
	                'placement:tooltip-placement',
	                'appendToBody',
	                'isOpen: tooltip-is-open',
	                'enable: tooltip-enable'
	            ],
	            host: {
	                '(mouseenter)': 'show($event, $targe)',
	                '(mouseleave)': 'hide($event, $targe)',
	                '(focusin)': 'show($event, $targe)',
	                '(focusout)': 'hide($event, $targe)'
	            }
	        }), 
	        __metadata('design:paramtypes', [angular2_1.ElementRef, angular2_1.DynamicComponentLoader])
	    ], Tooltip);
	    return Tooltip;
	})();
	exports.Tooltip = Tooltip;
	exports.tooltip = [Tooltip, TooltipContainer];


/***/ },

/***/ 393:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var angular2_1 = __webpack_require__(6);
	function setProperty(renderer, elementRef, propName, propValue) {
	    renderer.setElementProperty(elementRef, propName, propValue);
	}
	var angular2_2 = __webpack_require__(6);
	var ng2_bootstrap_config_1 = __webpack_require__(127);
	var position_1 = __webpack_require__(128);
	var TEMPLATE = (_a = {},
	    _a[ng2_bootstrap_config_1.Ng2BootstrapTheme.BS4] = "\n  <div class=\"dropdown-menu\"\n      [ng-style]=\"{top: top, left: left, display: display}\"\n      style=\"display: block\">\n      <a href=\"#\"\n         *ng-for=\"#match of matches\"\n         (click)=\"selectMatch(match, $event)\"\n         [ng-class]=\"{active: isActive(match) }\"\n         (mouseenter)=\"selectActive(match)\"\n         class=\"dropdown-item\"\n         [inner-html]=\"hightlight(match, query)\"></a>\n  </div>\n  ",
	    _a[ng2_bootstrap_config_1.Ng2BootstrapTheme.BS3] = "\n  <ul class=\"dropdown-menu\"\n      [ng-style]=\"{top: top, left: left, display: display}\"\n      style=\"display: block\">\n    <li *ng-for=\"#match of matches\"\n        [ng-class]=\"{active: isActive(match) }\"\n        (mouseenter)=\"selectActive(match)\">\n        <a href=\"#\" (click)=\"selectMatch(match, $event)\" tabindex=\"-1\" [inner-html]=\"hightlight(match, query)\"></a>\n    </li>\n  </ul>\n  ",
	    _a
	);
	var TypeaheadOptions = (function () {
	    function TypeaheadOptions(options) {
	        Object.assign(this, options);
	    }
	    return TypeaheadOptions;
	})();
	exports.TypeaheadOptions = TypeaheadOptions;
	var TypeaheadContainer = (function () {
	    function TypeaheadContainer(element, options) {
	        this.element = element;
	        this._matches = [];
	        Object.assign(this, options);
	    }
	    Object.defineProperty(TypeaheadContainer.prototype, "matches", {
	        get: function () {
	            return this._matches;
	        },
	        set: function (value) {
	            this._matches = value;
	            if (this._matches.length > 0) {
	                this._active = this._matches[0];
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    TypeaheadContainer.prototype.position = function (hostEl) {
	        this.display = 'block';
	        this.top = '0px';
	        this.left = '0px';
	        var p = position_1.positionService
	            .positionElements(hostEl.nativeElement, this.element.nativeElement.children[0], this.placement, false);
	        this.top = p.top + 'px';
	        this.left = p.left + 'px';
	    };
	    TypeaheadContainer.prototype.selectActiveMatch = function () {
	        this.selectMatch(this._active);
	    };
	    TypeaheadContainer.prototype.prevActiveMatch = function () {
	        var index = this.matches.indexOf(this._active);
	        this._active = this.matches[index - 1 < 0 ? this.matches.length - 1 : index - 1];
	    };
	    TypeaheadContainer.prototype.nextActiveMatch = function () {
	        var index = this.matches.indexOf(this._active);
	        this._active = this.matches[index + 1 > this.matches.length - 1 ? 0 : index + 1];
	    };
	    TypeaheadContainer.prototype.selectActive = function (value) {
	        this._active = value;
	    };
	    TypeaheadContainer.prototype.isActive = function (value) {
	        return this._active === value;
	    };
	    TypeaheadContainer.prototype.selectMatch = function (value, e) {
	        if (e === void 0) { e = null; }
	        if (e) {
	            e.stopPropagation();
	            e.preventDefault();
	        }
	        this.parent.changeModel(value);
	        this.parent.typeaheadOnSelect.next({
	            item: value
	        });
	        return false;
	    };
	    TypeaheadContainer.prototype.escapeRegexp = function (queryToEscape) {
	        return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
	    };
	    TypeaheadContainer.prototype.hightlight = function (item, query) {
	        return query ? item.replace(new RegExp(this.escapeRegexp(query), 'gi'), '<strong>$&</strong>') : item;
	    };
	    ;
	    TypeaheadContainer = __decorate([
	        angular2_1.Component({
	            selector: 'typeahead-container'
	        }),
	        angular2_1.View({
	            template: TEMPLATE[ng2_bootstrap_config_1.Ng2BootstrapConfig.theme],
	            directives: [angular2_1.CORE_DIRECTIVES, angular2_1.NgClass, angular2_1.NgStyle],
	            encapsulation: angular2_1.ViewEncapsulation.None
	        }), 
	        __metadata('design:paramtypes', [angular2_1.ElementRef, TypeaheadOptions])
	    ], TypeaheadContainer);
	    return TypeaheadContainer;
	})();
	exports.TypeaheadContainer = TypeaheadContainer;
	var Typeahead = (function () {
	    function Typeahead(cd, element, renderer, loader) {
	        this.cd = cd;
	        this.element = element;
	        this.renderer = renderer;
	        this.loader = loader;
	        this.typeaheadLoading = new angular2_1.EventEmitter();
	        this.typeaheadNoResults = new angular2_1.EventEmitter();
	        this.typeaheadOnSelect = new angular2_1.EventEmitter();
	        this.async = null;
	        this._matches = [];
	        this.placement = 'bottom-left';
	    }
	    Object.defineProperty(Typeahead.prototype, "matches", {
	        get: function () {
	            return this._matches;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Typeahead.prototype.debounce = function (func, wait) {
	        var timeout;
	        var args;
	        var timestamp;
	        var waitOriginal = wait;
	        return function () {
	            args = [].slice.call(arguments, 0);
	            timestamp = Date.now();
	            wait = this.container ? waitOriginal : this.waitMs;
	            var later = function () {
	                var last = Date.now() - timestamp;
	                if (last < wait) {
	                    timeout = setTimeout(later, wait - last);
	                }
	                else {
	                    timeout = null;
	                    func.apply(this, args);
	                }
	            };
	            if (!timeout) {
	                timeout = setTimeout(later, wait);
	            }
	        };
	    };
	    Typeahead.prototype.processMatches = function () {
	        this._matches = [];
	        if (this.cd.model.toString().length >= this.minLength) {
	            for (var i = 0; i < this.source.length; i++) {
	                var match = void 0;
	                if (typeof this.source[i] === 'object' &&
	                    this.source[i][this.field]) {
	                    match = this.source[i][this.field];
	                }
	                if (typeof this.source[i] === 'string') {
	                    match = this.source[i];
	                }
	                if (!match) {
	                    console.log('Invalid match type', typeof this.source[i], this.field);
	                    continue;
	                }
	                if (match.toLowerCase().indexOf(this.cd.model.toString().toLowerCase()) >= 0) {
	                    this._matches.push(match);
	                    if (this._matches.length > this.optionsLimit - 1) {
	                        break;
	                    }
	                }
	            }
	        }
	    };
	    Typeahead.prototype.finalizeAsyncCall = function () {
	        this.typeaheadLoading.next(false);
	        this.typeaheadNoResults.next(this.cd.model.toString().length >=
	            this.minLength && this.matches.length <= 0);
	        if (this.cd.model.toString().length <= 0 || this._matches.length <= 0) {
	            this.hide();
	            return;
	        }
	        if (this.container && this._matches.length > 0) {
	            this.container.query = this.cd.model;
	            this.container.matches = this._matches;
	        }
	        if (!this.container && this._matches.length > 0) {
	            this.show(this._matches);
	        }
	    };
	    Typeahead.prototype.onInit = function () {
	        var _this = this;
	        this.optionsLimit = this.optionsLimit || 20;
	        this.minLength = this.minLength || 1;
	        this.waitMs = this.waitMs || 0;
	        if (this.async === null && typeof this.source !== 'function') {
	            this.async = false;
	        }
	        if (typeof this.source === 'function') {
	            this.async = true;
	        }
	        if (this.async === true) {
	            this.debouncer = this.debounce(function () {
	                if (typeof _this.source === 'function') {
	                    _this.source().then(function (matches) {
	                        _this._matches = [];
	                        if (_this.cd.model.toString().length >= _this.minLength) {
	                            for (var i = 0; i < matches.length; i++) {
	                                _this._matches.push(matches[i]);
	                                if (_this._matches.length > _this.optionsLimit - 1) {
	                                    break;
	                                }
	                            }
	                        }
	                        _this.finalizeAsyncCall();
	                    });
	                }
	                if (typeof _this.source === 'object' && _this.source.length) {
	                    _this.processMatches();
	                    _this.finalizeAsyncCall();
	                }
	            }, 100);
	        }
	    };
	    Typeahead.prototype.onChange = function (e) {
	        if (this.container) {
	            if (e.keyCode === 27) {
	                this.hide();
	                return;
	            }
	            if (e.keyCode === 38) {
	                this.container.prevActiveMatch();
	                return;
	            }
	            if (e.keyCode === 40) {
	                this.container.nextActiveMatch();
	                return;
	            }
	            if (e.keyCode === 13) {
	                this.container.selectActiveMatch();
	                return;
	            }
	        }
	        this.typeaheadLoading.next(true);
	        if (this.async === true) {
	            this.debouncer();
	        }
	        if (this.async === false) {
	            this.processMatches();
	            this.finalizeAsyncCall();
	        }
	    };
	    Typeahead.prototype.changeModel = function (value) {
	        this.cd.viewToModelUpdate(value);
	        setProperty(this.renderer, this.element, 'value', value);
	        this.hide();
	    };
	    Typeahead.prototype.show = function (matches) {
	        var _this = this;
	        var options = new TypeaheadOptions({
	            placement: this.placement,
	            animation: false
	        });
	        var binding = angular2_2.Injector.resolve([
	            angular2_2.bind(TypeaheadOptions).toValue(options)
	        ]);
	        this.popup = this.loader
	            .loadNextToLocation(TypeaheadContainer, this.element, binding)
	            .then(function (componentRef) {
	            componentRef.instance.position(_this.element);
	            _this.container = componentRef.instance;
	            _this.container.parent = _this;
	            _this.container.query = _this.cd.model;
	            _this.container.matches = matches;
	            _this.element.nativeElement.focus();
	            return componentRef;
	        });
	    };
	    Typeahead.prototype.hide = function () {
	        var _this = this;
	        if (this.container) {
	            this.popup.then(function (componentRef) {
	                componentRef.dispose();
	                _this.container = null;
	                return componentRef;
	            });
	        }
	    };
	    Typeahead = __decorate([
	        angular2_1.Directive({
	            selector: 'typeahead, [typeahead]',
	            properties: [
	                'source:typeahead',
	                'appendToBody:typeaheadAppendToBody',
	                'editable:typeaheadEditable',
	                'focusFirst:typeaheadFocusFirst',
	                'inputFormatter:typeaheadInputFormatter',
	                'minLength:typeaheadMinLength',
	                'selectOnExact:typeaheadSelectOnExact',
	                'templateUrl:typeaheadTemplateUrl',
	                'popupTemplateUrl:typeaheadPopupTemplateUrl',
	                'waitMs:typeaheadWaitMs',
	                'optionsLimit:typeaheadOptionsLimit',
	                'selectOnBlur:typeaheadSelectOnBlur',
	                'focusOnSelect:typeaheadFocusOnSelect',
	                'field:typeaheadOptionField',
	                'async:typeaheadAsync'
	            ],
	            events: ['typeaheadLoading', 'typeaheadNoResults', 'typeaheadOnSelect'],
	            host: {
	                '(keyup)': 'onChange($event)'
	            }
	        }), 
	        __metadata('design:paramtypes', [angular2_1.NgModel, angular2_1.ElementRef, angular2_1.Renderer, angular2_1.DynamicComponentLoader])
	    ], Typeahead);
	    return Typeahead;
	})();
	exports.Typeahead = Typeahead;
	exports.typeahead = [Typeahead];
	var _a;


/***/ },

/***/ 394:
/***/ function(module, exports, __webpack_require__) {

	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(381));
	__export(__webpack_require__(382));
	__export(__webpack_require__(384));
	__export(__webpack_require__(383));
	__export(__webpack_require__(386));
	__export(__webpack_require__(75));
	__export(__webpack_require__(208));
	__export(__webpack_require__(209));
	__export(__webpack_require__(210));
	__export(__webpack_require__(385));
	__export(__webpack_require__(206));
	__export(__webpack_require__(387));
	__export(__webpack_require__(388));
	__export(__webpack_require__(389));
	__export(__webpack_require__(390));
	__export(__webpack_require__(391));
	__export(__webpack_require__(392));
	__export(__webpack_require__(393));
	__export(__webpack_require__(128));
	__export(__webpack_require__(207));
	__export(__webpack_require__(127));


/***/ }

});
//# sourceMappingURL=angular2-table-demo.js.map