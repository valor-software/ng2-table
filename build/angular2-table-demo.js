webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
	    switch (arguments.length) {
	        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
	        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
	        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
	    }
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	/// <reference path="../tsd.d.ts" />
	var angular2_1 = __webpack_require__(8);
	var index_1 = __webpack_require__(55);
	var w = window;
	if (w && w.__theme === 'bs4') {
	    index_1.Ng2TableConfig.theme = index_1.Ng2TableTheme.BS4;
	}
	var table_section_1 = __webpack_require__(226);
	var gettingStarted = __webpack_require__(221);
	var Demo = (function () {
	    function Demo() {
	        this.isBs3 = index_1.Ng2TableConfig.theme === index_1.Ng2TableTheme.BS3;
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

/***/ 34:
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../tsd.d.ts" />
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
	    switch (arguments.length) {
	        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
	        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
	        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
	    }
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var angular2_1 = __webpack_require__(8);
	var paginationConfig = {
	    maxSize: undefined,
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
	        this.pagechanged = new angular2_1.EventEmitter();
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
	            this.pagechanged.next({
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
	            var page = this.makePage(number, number, number === currentPage);
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
	            inputs: [
	                'rotate', 'disabled',
	                'totalItems', 'itemsPerPage', 'maxSize',
	                'boundaryLinks', 'directionLinks',
	                'firstText', 'previousText', 'nextText', 'lastText'
	            ],
	            outputs: ['numPages', 'pagechanged']
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
	            inputs: [
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

/***/ 35:
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../tsd.d.ts" />
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
	    switch (arguments.length) {
	        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
	        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
	        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
	    }
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var angular2_1 = __webpack_require__(8);
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

/***/ 36:
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../tsd.d.ts" />
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
	    switch (arguments.length) {
	        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
	        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
	        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
	    }
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var angular2_1 = __webpack_require__(8);
	var Ng2TablePaging = (function () {
	    function Ng2TablePaging() {
	        this.config = true;
	        this.tableChanged = new angular2_1.EventEmitter();
	    }
	    Ng2TablePaging.prototype.onChangePage = function (event) {
	        if (this.config) {
	            this.tableChanged.next({ paging: event });
	        }
	    };
	    Ng2TablePaging = __decorate([
	        angular2_1.Directive({
	            selector: '[ng2-table-paging]',
	            inputs: ['config: ng2TablePaging'],
	            outputs: ['tableChanged'],
	            host: {
	                '(pagechanged)': 'onChangePage($event)'
	            }
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Ng2TablePaging);
	    return Ng2TablePaging;
	})();
	exports.Ng2TablePaging = Ng2TablePaging;


/***/ },

/***/ 37:
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../tsd.d.ts" />
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
	    switch (arguments.length) {
	        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
	        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
	        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
	    }
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var angular2_1 = __webpack_require__(8);
	var sorting_1 = __webpack_require__(94);
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

/***/ 55:
/***/ function(module, exports, __webpack_require__) {

	///<reference path="../tsd.d.ts"/>
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	var pagination_1 = __webpack_require__(34);
	var table_1 = __webpack_require__(37);
	var filtering_1 = __webpack_require__(35);
	var paging_1 = __webpack_require__(36);
	__export(__webpack_require__(37));
	__export(__webpack_require__(95));
	__export(__webpack_require__(35));
	__export(__webpack_require__(36));
	__export(__webpack_require__(34));
	exports.Ng2Table = [table_1.Table, filtering_1.Ng2TableFilter, paging_1.Ng2TablePaging, pagination_1.pagination];


/***/ },

/***/ 94:
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../tsd.d.ts" />
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
	    switch (arguments.length) {
	        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
	        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
	        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
	    }
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var angular2_1 = __webpack_require__(8);
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

/***/ 95:
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

/***/ 219:
/***/ function(module, exports) {

	module.exports = "<h3 id=\"usage\">Usage</h3>\n<pre class=\"language-typescript\"><code class=\"language-typescript\"><span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span>Ng2Table<span class=\"token punctuation\" >}</span> from <span class=\"token string\" >'ng2-table'</span><span class=\"token punctuation\" >;</span>\n</code></pre>\n<p>or if you want to import specified plugins (Table component is required, the others are optional):</p>\n<pre class=\"language-typescript\"><code class=\"language-typescript\"><span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span>Table<span class=\"token punctuation\" >,</span> Ng2TableFilter<span class=\"token punctuation\" >,</span> Ng2TablePaging<span class=\"token punctuation\" >,</span> pagination<span class=\"token punctuation\" >}</span> from <span class=\"token string\" >'ng2-table'</span><span class=\"token punctuation\" >;</span>\n</code></pre>\n<p>in this case, don&#39;t forget to include all of the imported entities to the option <code>directives</code> in your component</p>\n<h3 id=\"utilisation\">Utilisation</h3>\n<p>There are only simple table with 3 plugins/directives: <code>filtering</code>, <code>paging</code>, <code>sorting</code>. You don&#39;t need special <code>config</code> variable for storing settings for all plugins as is used in demo example. It&#39;s just showing usage sample.</p>\n<h3 id=\"inputs-properties-\">Inputs (Properties)</h3>\n<ul>\n<li><code>page</code> (<code>number</code>) - the default page after the table component loading</li>\n<li><code>itemsPerPage</code> (<code>number</code>) - number of the displaying items (rows) on a page</li>\n<li><code>maxSize</code> (<code>number</code>) - number of the displaying pages before <code>...</code></li>\n<li><code>numPages</code> (<code>number</code>) - total number of the pages</li>\n<li><p><code>length</code> (<code>number</code>) - total number of the items after filtering (of it&#39;s chosen)</p>\n</li>\n<li><p><code>config</code> (<code>?any</code>) - config for setup all plugins (filtering, sorting, paging):</p>\n<ul>\n<li><code>paging</code> (<code>?boolean</code>) - - switch on the paging plugin</li>\n<li><code>sorting</code> (<code>?any</code>) - switch on the sorting plugin<ul>\n<li><code>columns</code> (<code>Array&lt;any&gt;</code>) - only list of the columns for sorting</li>\n</ul>\n</li>\n<li><code>filtering</code> (<code>?any</code>) - switch on the filtering plugin<ul>\n<li><code>filterString</code> (<code>string</code>) - the default value for filter</li>\n<li><code>columnName</code> (<code>string</code>) - the property name in raw data</li>\n</ul>\n</li>\n</ul>\n</li>\n<li><p><code>rows</code> (<code>?Array&lt;any&gt;</code>) - only list of the rows which should be displayed</p>\n</li>\n<li><code>columns</code> (<code>?Array&lt;any&gt;</code>) - config for columns (+ sorting settings if it&#39;s needed)<ul>\n<li><code>title</code> (<code>string</code>) - the title of column header</li>\n<li><code>name</code> (<code>string</code>) - the property name in data</li>\n<li><code>sort</code> (<code>?string|boolean</code>) - config for columns (+ sorting settings if it&#39;s needed), sorting is switched on by default for each column</li>\n</ul>\n</li>\n</ul>\n<h3 id=\"outputs-events-\">Outputs (Events)</h3>\n<ul>\n<li><code>table-changed</code>: onclick event handler</li>\n</ul>\n<h3 id=\"filter\">Filter</h3>\n<p>The responsibility of the filtering issue falls on user. You should choose on which columns the filter would be applied. You could add any number of different filters.\nFilter string - it&#39;s a string for matching values in raw data. Column name refers to the property name in raw data. The rest logic you could organize by yourself (the order of filters, data formats, etc). Even you could use filter for list of data columns.</p>\n<h3 id=\"sorting\">Sorting</h3>\n<p>Data sorting could be in 3 modes: asc, desc and without sorting data (as it comes from backend or somewhere else). If you want to switch off the sorting for some of the columns then you should set it forcibly in columns config (set property sort to false value for each column you want)</p>\n<h3 id=\"paging\">Paging</h3>\n<p>Pagination could be used from <a href=\"https://github.com/valor-software/ng2-bootstrap\">ng2-bootstrap</a> - <a href=\"http://valor-software.github.io/ng2-bootstrap/#pagination\">pagination component</a>. When the page is changed, the pagination component will emit event <code>table-changed</code> with an object {page, itemsPerPage}. Then you can easily subscribe on it and request corresponding raw data.</p>\n";

/***/ },

/***/ 220:
/***/ function(module, exports) {

	module.exports = "";

/***/ },

/***/ 221:
/***/ function(module, exports) {

	module.exports = "<h1 id=\"getting-started\">Getting started</h1>\n<h3 id=\"first-of-all-welcome-\">First of all, Welcome!</h3>\n";

/***/ },

/***/ 222:
/***/ function(module, exports) {

	module.exports = "<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>input</span> <span class=\"token attr-name\" >*ng-if</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>config.filtering<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >placeholder</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Filter<span class=\"token punctuation\" >\"</span></span>\n       <span class=\"token attr-name\" >[ng2-table-filter]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>config.filtering<span class=\"token punctuation\" >\"</span></span>\n       <span class=\"token attr-name\" >(table-changed)</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>onChangeTable($event)<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >/></span></span>\n\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ng2-table</span> <span class=\"token attr-name\" >[config]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>config.sorting<span class=\"token punctuation\" >\"</span></span>\n           <span class=\"token attr-name\" >[rows]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>rows<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >[columns]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>columns<span class=\"token punctuation\" >\"</span></span>\n           <span class=\"token attr-name\" >(table-changed)</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>onChangeTable($event)<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ng2-table</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>pagination</span> <span class=\"token attr-name\" >*ng-if</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>config.paging<span class=\"token punctuation\" >\"</span></span>\n\n            <span class=\"token attr-name\" >[ng2-table-paging]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>config.paging<span class=\"token punctuation\" >\"</span></span>\n            <span class=\"token attr-name\" >(table-changed)</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>onChangeTable($event)<span class=\"token punctuation\" >\"</span></span>\n\n            <span class=\"token attr-name\" >[total-items]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>length<span class=\"token punctuation\" >\"</span></span>\n            <span class=\"token attr-name\" >[(ng-model)]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>page<span class=\"token punctuation\" >\"</span></span>\n            <span class=\"token attr-name\" >[max-size]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>maxSize<span class=\"token punctuation\" >\"</span></span>\n            <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>pagination-sm<span class=\"token punctuation\" >\"</span></span>\n            <span class=\"token attr-name\" >[boundary-links]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>true<span class=\"token punctuation\" >\"</span></span>\n            <span class=\"token attr-name\" >[rotate]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>false<span class=\"token punctuation\" >\"</span></span>\n            <span class=\"token attr-name\" >(num-pages)</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>numPages <span class=\"token punctuation\" >=</span> $event<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>pagination</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>pre</span> <span class=\"token attr-name\" >*ng-if</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>config.paging<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>card card-block card-header<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Page: {{page}} / {{numPages}}<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>pre</span><span class=\"token punctuation\" >></span></span>\n"

/***/ },

/***/ 223:
/***/ function(module, exports) {

	module.exports = "<span class=\"token comment\" spellcheck=\"true\">/// &lt;reference path='../../../tsd.d.ts' /></span>\n\n<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span>\n  Component<span class=\"token punctuation\" >,</span> Directive<span class=\"token punctuation\" >,</span> View<span class=\"token punctuation\" >,</span> EventEmitter<span class=\"token punctuation\" >,</span> Host<span class=\"token punctuation\" >,</span>\n  OnInit<span class=\"token punctuation\" >,</span> Self<span class=\"token punctuation\" >,</span> NgIf<span class=\"token punctuation\" >,</span>\n  CORE_DIRECTIVES<span class=\"token punctuation\" >,</span> NgClass<span class=\"token punctuation\" >,</span> FORM_DIRECTIVES\n<span class=\"token punctuation\" >}</span> from <span class=\"token string\" >'angular2/angular2'</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span>Ng2Table<span class=\"token punctuation\" >}</span> from <span class=\"token string\" >'../../../components/index'</span><span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span>TableData<span class=\"token punctuation\" >}</span> from <span class=\"token string\" >'./table-data'</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// webpack html imports</span>\n<span class=\"token keyword\" >let</span> template <span class=\"token operator\" >=</span> <span class=\"token function\" >require</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'./table-demo.html'</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n\n@<span class=\"token function\" >Component</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n  selector<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'table-demo'</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span>\n@<span class=\"token function\" >View</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n  template<span class=\"token punctuation\" >:</span> template<span class=\"token punctuation\" >,</span>\n  directives<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span>Ng2Table<span class=\"token punctuation\" >,</span> NgClass<span class=\"token punctuation\" >,</span> NgIf<span class=\"token punctuation\" >,</span> CORE_DIRECTIVES<span class=\"token punctuation\" >,</span> FORM_DIRECTIVES<span class=\"token punctuation\" >]</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span>\n<span class=\"token keyword\" >export</span> <span class=\"token keyword\" >class</span> <span class=\"token class-name\" >TableDemo</span> <span class=\"token keyword\" >implements</span> <span class=\"token class-name\" >OnInit</span> <span class=\"token punctuation\" >{</span>\n  <span class=\"token keyword\" >public</span> rows<span class=\"token punctuation\" >:</span><span class=\"token keyword\" >Array</span><span class=\"token operator\" >&lt;</span><span class=\"token keyword\" >any</span><span class=\"token operator\" >></span> <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token keyword\" >public</span> columns<span class=\"token punctuation\" >:</span><span class=\"token keyword\" >Array</span><span class=\"token operator\" >&lt;</span><span class=\"token keyword\" >any</span><span class=\"token operator\" >></span> <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span>\n    <span class=\"token punctuation\" >{</span>title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Name'</span><span class=\"token punctuation\" >,</span> name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'name'</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >{</span>title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Position'</span><span class=\"token punctuation\" >,</span> name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'position'</span><span class=\"token punctuation\" >,</span> sort<span class=\"token punctuation\" >:</span> <span class=\"token keyword\" >false</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >{</span>title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Office'</span><span class=\"token punctuation\" >,</span> name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'office'</span><span class=\"token punctuation\" >,</span> sort<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'asc'</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >{</span>title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Extn.'</span><span class=\"token punctuation\" >,</span> name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'ext'</span><span class=\"token punctuation\" >,</span> sort<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'desc'</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >{</span>title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Start date'</span><span class=\"token punctuation\" >,</span> name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'startDate'</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >{</span>title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Salary'</span><span class=\"token punctuation\" >,</span> name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'salary'</span><span class=\"token punctuation\" >}</span>\n  <span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token keyword\" >public</span> page<span class=\"token punctuation\" >:</span><span class=\"token keyword\" >number</span> <span class=\"token operator\" >=</span> <span class=\"token number\" >1</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token keyword\" >public</span> itemsPerPage<span class=\"token punctuation\" >:</span><span class=\"token keyword\" >number</span> <span class=\"token operator\" >=</span> <span class=\"token number\" >10</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token keyword\" >public</span> maxSize<span class=\"token punctuation\" >:</span><span class=\"token keyword\" >number</span> <span class=\"token operator\" >=</span> <span class=\"token number\" >5</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token keyword\" >public</span> numPages<span class=\"token punctuation\" >:</span><span class=\"token keyword\" >number</span> <span class=\"token operator\" >=</span> <span class=\"token number\" >1</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token keyword\" >public</span> length<span class=\"token punctuation\" >:</span><span class=\"token keyword\" >number</span> <span class=\"token operator\" >=</span> <span class=\"token number\" >0</span><span class=\"token punctuation\" >;</span>\n\n  <span class=\"token keyword\" >public</span> config<span class=\"token punctuation\" >:</span><span class=\"token keyword\" >any</span> <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >{</span>\n    paging<span class=\"token punctuation\" >:</span> <span class=\"token keyword\" >true</span><span class=\"token punctuation\" >,</span>\n    sorting<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>columns<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n    filtering<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>filterString<span class=\"token punctuation\" >:</span> <span class=\"token string\" >''</span><span class=\"token punctuation\" >,</span> columnName<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'position'</span><span class=\"token punctuation\" >}</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n\n  <span class=\"token keyword\" >private</span> data<span class=\"token punctuation\" >:</span><span class=\"token keyword\" >Array</span><span class=\"token operator\" >&lt;</span><span class=\"token keyword\" >any</span><span class=\"token operator\" >></span> <span class=\"token operator\" >=</span> TableData<span class=\"token punctuation\" >;</span>\n\n  <span class=\"token keyword\" >constructor</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>length <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>data<span class=\"token punctuation\" >.</span>length<span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n\n  <span class=\"token function\" >onInit</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >onChangeTable</span><span class=\"token punctuation\" >(</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>config<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n\n  <span class=\"token function\" >changePage</span><span class=\"token punctuation\" >(</span>data<span class=\"token punctuation\" >,</span> config<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span><span class=\"token operator\" >!</span>config<span class=\"token punctuation\" >.</span>paging<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n      <span class=\"token keyword\" >return</span> data<span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span>\n\n    <span class=\"token keyword\" >let</span> start <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >(</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>page <span class=\"token operator\" >-</span> <span class=\"token number\" >1</span><span class=\"token punctuation\" >)</span> <span class=\"token operator\" >*</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>itemsPerPage<span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >let</span> end <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>itemsPerPage <span class=\"token operator\" >></span> <span class=\"token operator\" >-</span><span class=\"token number\" >1</span> <span class=\"token operator\" >?</span> <span class=\"token punctuation\" >(</span>start <span class=\"token operator\" >+</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>itemsPerPage<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >:</span> data<span class=\"token punctuation\" >.</span>length<span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >return</span> data<span class=\"token punctuation\" >.</span><span class=\"token function\" >slice</span><span class=\"token punctuation\" >(</span>start<span class=\"token punctuation\" >,</span> end<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n\n  <span class=\"token function\" >changeSort</span><span class=\"token punctuation\" >(</span>data<span class=\"token punctuation\" >,</span> config<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span><span class=\"token operator\" >!</span>config<span class=\"token punctuation\" >.</span>sorting<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n      <span class=\"token keyword\" >return</span> data<span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span>\n\n    <span class=\"token comment\" spellcheck=\"true\">// simple sorting</span>\n    <span class=\"token keyword\" >return</span> data<span class=\"token punctuation\" >.</span><span class=\"token function\" >sort</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >(</span>previous<span class=\"token punctuation\" >,</span> current<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span>\n      <span class=\"token keyword\" >let</span> columns <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>config<span class=\"token punctuation\" >.</span>sorting<span class=\"token punctuation\" >.</span>columns <span class=\"token operator\" >||</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n      <span class=\"token keyword\" >for</span> <span class=\"token punctuation\" >(</span><span class=\"token keyword\" >let</span> i <span class=\"token operator\" >=</span> <span class=\"token number\" >0</span><span class=\"token punctuation\" >;</span> i <span class=\"token operator\" >&lt;</span> columns<span class=\"token punctuation\" >.</span>length<span class=\"token punctuation\" >;</span> i<span class=\"token operator\" >++</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n        <span class=\"token keyword\" >let</span> columnName <span class=\"token operator\" >=</span> columns<span class=\"token punctuation\" >[</span>i<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >.</span>name<span class=\"token punctuation\" >;</span>\n\n        <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span>previous<span class=\"token punctuation\" >[</span>columnName<span class=\"token punctuation\" >]</span> <span class=\"token operator\" >></span> current<span class=\"token punctuation\" >[</span>columnName<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n          <span class=\"token keyword\" >return</span> columns<span class=\"token punctuation\" >[</span>i<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >.</span>sort <span class=\"token operator\" >===</span> <span class=\"token string\" >'desc'</span> <span class=\"token operator\" >?</span> <span class=\"token operator\" >-</span><span class=\"token number\" >1</span> <span class=\"token punctuation\" >:</span> <span class=\"token number\" >1</span><span class=\"token punctuation\" >;</span>\n        <span class=\"token punctuation\" >}</span>\n        <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span>previous<span class=\"token punctuation\" >[</span>columnName<span class=\"token punctuation\" >]</span> <span class=\"token operator\" >&lt;</span> current<span class=\"token punctuation\" >[</span>columnName<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n          <span class=\"token keyword\" >return</span> columns<span class=\"token punctuation\" >[</span>i<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >.</span>sort <span class=\"token operator\" >===</span> <span class=\"token string\" >'asc'</span> <span class=\"token operator\" >?</span> <span class=\"token operator\" >-</span><span class=\"token number\" >1</span> <span class=\"token punctuation\" >:</span> <span class=\"token number\" >1</span><span class=\"token punctuation\" >;</span>\n        <span class=\"token punctuation\" >}</span>\n      <span class=\"token punctuation\" >}</span>\n      <span class=\"token keyword\" >return</span> <span class=\"token number\" >0</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n\n  <span class=\"token function\" >changeFilter</span><span class=\"token punctuation\" >(</span>data<span class=\"token punctuation\" >,</span> config<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span><span class=\"token operator\" >!</span>config<span class=\"token punctuation\" >.</span>filtering<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n      <span class=\"token keyword\" >return</span> data<span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span>\n\n    <span class=\"token keyword\" >let</span> filteredData <span class=\"token operator\" >=</span> data<span class=\"token punctuation\" >.</span><span class=\"token function\" >filter</span><span class=\"token punctuation\" >(</span>item <span class=\"token operator\" >=</span><span class=\"token operator\" >></span>\n      item<span class=\"token punctuation\" >[</span>config<span class=\"token punctuation\" >.</span>filtering<span class=\"token punctuation\" >.</span>columnName<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >match</span><span class=\"token punctuation\" >(</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>config<span class=\"token punctuation\" >.</span>filtering<span class=\"token punctuation\" >.</span>filterString<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n\n    <span class=\"token keyword\" >return</span> filteredData<span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n\n  <span class=\"token function\" >onChangeTable</span><span class=\"token punctuation\" >(</span>config<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span>config<span class=\"token punctuation\" >.</span>filtering<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n      Object<span class=\"token punctuation\" >.</span><span class=\"token function\" >assign</span><span class=\"token punctuation\" >(</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>config<span class=\"token punctuation\" >.</span>filtering<span class=\"token punctuation\" >,</span> config<span class=\"token punctuation\" >.</span>filtering<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span>\n    <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span>config<span class=\"token punctuation\" >.</span>sorting<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n      Object<span class=\"token punctuation\" >.</span><span class=\"token function\" >assign</span><span class=\"token punctuation\" >(</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>config<span class=\"token punctuation\" >.</span>sorting<span class=\"token punctuation\" >,</span> config<span class=\"token punctuation\" >.</span>sorting<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span>\n    <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span>config<span class=\"token punctuation\" >.</span>paging<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n      <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>page <span class=\"token operator\" >=</span> config<span class=\"token punctuation\" >.</span>paging<span class=\"token punctuation\" >.</span>page<span class=\"token punctuation\" >;</span>\n      <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>itemsPerPage <span class=\"token operator\" >=</span> config<span class=\"token punctuation\" >.</span>paging<span class=\"token punctuation\" >.</span>itemsPerPage<span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span>\n\n    <span class=\"token keyword\" >let</span> filteredData <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >changeFilter</span><span class=\"token punctuation\" >(</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>data<span class=\"token punctuation\" >,</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>config<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >let</span> sortedData <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >changeSort</span><span class=\"token punctuation\" >(</span>filteredData<span class=\"token punctuation\" >,</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>config<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>rows <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >changePage</span><span class=\"token punctuation\" >(</span>sortedData<span class=\"token punctuation\" >,</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>config<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>length <span class=\"token operator\" >=</span> sortedData<span class=\"token punctuation\" >.</span>length<span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n<span class=\"token punctuation\" >}</span>\n"

/***/ },

/***/ 224:
/***/ function(module, exports) {

	module.exports = "<input *ng-if=\"config.filtering\" placeholder=\"Filter\"\n       [ng2-table-filter]=\"config.filtering\"\n       (table-changed)=\"onChangeTable($event)\"/>\n\n<ng2-table [config]=\"config.sorting\"\n           [rows]=\"rows\" [columns]=\"columns\"\n           (table-changed)=\"onChangeTable($event)\">\n</ng2-table>\n<pagination *ng-if=\"config.paging\"\n\n            [ng2-table-paging]=\"config.paging\"\n            (table-changed)=\"onChangeTable($event)\"\n\n            [total-items]=\"length\"\n            [(ng-model)]=\"page\"\n            [max-size]=\"maxSize\"\n            class=\"pagination-sm\"\n            [boundary-links]=\"true\"\n            [rotate]=\"false\"\n            (num-pages)=\"numPages = $event\">\n</pagination>\n<pre *ng-if=\"config.paging\" class=\"card card-block card-header\">Page: {{page}} / {{numPages}}</pre>\n"

/***/ },

/***/ 226:
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../tsd.d.ts" />
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
	    switch (arguments.length) {
	        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
	        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
	        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
	    }
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var angular2_1 = __webpack_require__(8);
	var table_demo_1 = __webpack_require__(228);
	var name = 'Table';
	var src = 'https://github.com/valor-software/ng2-table/blob/master/components/table/table.ts';
	var doc = __webpack_require__(219);
	var titleDoc = __webpack_require__(220);
	var ts = __webpack_require__(223);
	var html = __webpack_require__(222);
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

/***/ 227:
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

/***/ 228:
/***/ function(module, exports, __webpack_require__) {

	/// <reference path='../../../tsd.d.ts' />
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
	    switch (arguments.length) {
	        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
	        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
	        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
	    }
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var angular2_1 = __webpack_require__(8);
	var index_1 = __webpack_require__(55);
	var table_data_1 = __webpack_require__(227);
	var template = __webpack_require__(224);
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
	        this.onChangeTable(this.config);
	    };
	    TableDemo.prototype.changePage = function (data, config) {
	        if (!config.paging) {
	            return data;
	        }
	        var start = (this.page - 1) * this.itemsPerPage;
	        var end = this.itemsPerPage > -1 ? (start + this.itemsPerPage) : data.length;
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
	    TableDemo.prototype.onChangeTable = function (config) {
	        if (config.filtering) {
	            Object.assign(this.config.filtering, config.filtering);
	        }
	        if (config.sorting) {
	            Object.assign(this.config.sorting, config.sorting);
	        }
	        if (config.paging) {
	            this.page = config.paging.page;
	            this.itemsPerPage = config.paging.itemsPerPage;
	        }
	        var filteredData = this.changeFilter(this.data, this.config);
	        var sortedData = this.changeSort(filteredData, this.config);
	        this.rows = this.changePage(sortedData, this.config);
	        this.length = sortedData.length;
	    };
	    TableDemo = __decorate([
	        angular2_1.Component({
	            selector: 'table-demo'
	        }),
	        angular2_1.View({
	            template: template,
	            directives: [index_1.Ng2Table, angular2_1.NgClass, angular2_1.NgIf, angular2_1.CORE_DIRECTIVES, angular2_1.FORM_DIRECTIVES]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], TableDemo);
	    return TableDemo;
	})();
	exports.TableDemo = TableDemo;


/***/ }

});
//# sourceMappingURL=angular2-table-demo.js.map