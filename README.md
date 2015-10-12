# ng2-table
Simple table extension with sorting, filtering, paging... for Angular2 apps
Directive for [ng2-table](https://github.com/valor-software/ng2-table) component.


# Usage & Demo
[http://valor-software.github.io/ng2-table/](http://valor-software.github.io/ng2-table/)


- - -

## Quick start

1. A recommended way to install ***ng2-table*** is through [npm](https://www.npmjs.com/search?q=ng2-table) package manager using the following command:

  `npm i ng2-table --save`

  Alternatively, you can [download it in a ZIP file](https://github.com/valor-software/ng2-table/archive/master.zip).

2. More information regarding using of ***ng2-table*** is located in
  [demo](http://valor-software.github.io/ng2-table/) and [demo sources](https://github.com/valor-software/ng2-table/tree/master/demo).

## API

### Inputs (Properties)

- `page` (`number`) - the default page after the table component loading
- `itemsPerPage` (`number`) - number of the displaying items (rows) on a page
- `maxSize` (`number`) - number of the displaying pages before `...`
- `numPages` (`number`) - total number of the pages
- `length` (`number`) - total number of the items after filtering (of it's chosen)

- `config` (`?any`) - config for setup all plugins (filtering, sorting, paging):
  - `paging` (`?boolean`) - - switch on the paging plugin
  - `sorting` (`?any`) - switch on the sorting plugin
    - `columns` (`Array<any>`) - only list of the columns for sorting
  - `filtering` (`?any`) - switch on the filtering plugin
    - `filterString` (`string`) - the default value for filter
    - `columnName` (`string`) - the property name in raw data

- `rows` (`?Array<any>`) - only list of the rows which should be displayed
- `columns` (`?Array<any>`) - config for columns (+ sorting settings if it's needed)
    - `title` (`string`) - the title of column header
    - `name` (`string`) - the property name in data
    - `sort` (`?string|boolean`) - config for columns (+ sorting settings if it's needed), sorting is switched on by default for each column

### Outputs (Events)

- `table-changed` - onclick event handler

### Filter

The responsibility of the filtering issue falls on user. You should choose on which columns the filter would be applied. You could add any number of different filters.
Filter string - it's a string for matching values in raw data. Column name refers to the property name in raw data. The rest logic you could organize by yourself (the order of filters, data formats, etc). Even you could use filter for list of data columns.

### Sorting

Data sorting could be in 3 modes: asc, desc and without sorting data (as it comes from backend or somewhere else). If you want to switch off the sorting for some of the columns then you should set it forcibly in columns config (set property sort to false value for each column you want)

### Paging

Pagination could be used from [ng2-bootstrap](https://github.com/valor-software/ng2-bootstrap) - [pagination component](http://valor-software.github.io/ng2-bootstrap/#pagination). When the page is changed, the pagination component will emit event `change-table` with an object {page, itemsPerPage}. Then you can easily subscribe on it and request corresponding raw data.


## Troubleshooting

Please follow this guidelines when reporting bugs and feature requests:

1. Use [GitHub Issues](https://github.com/valor-software/ng2-table/issues) board to report bugs and feature requests (not our email address)
2. Please **always** write steps to reproduce the error. That way we can focus on fixing the bug, not scratching our heads trying to reproduce it.

Thanks for understanding!

### License

The MIT License (see the [LICENSE](https://github.com/valor-software/ng2-table/blob/master/LICENSE) file for the full text)
