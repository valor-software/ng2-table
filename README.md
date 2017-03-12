# ng2-expanding-table
Simple table extension with sorting, filtering, paging, expandable rows, and infinite scroll for Angular2 apps

# Usage & Demo
[http://reseract.github.io/ng2-expanding-table/](http://valor-software.github.io/ng2-expanding-table/)


- - -

## Installation

1. A recommended way to install ***ng2-expanding-table*** is through [npm](https://www.npmjs.com/search?q=ng2-expanding-table) package manager using the following command:

  ```bash
  npm i ng2-expanding-table --save
  ```
2. More information regarding using of ***ng2-expanding-table*** is located in
  [demo](http://reseract.github.io/ng2-expanding-table/) and [demo sources](https://github.com/reseract/ng2-expanding-table/tree/master/demo).

## Documentation

### Inputs (Properties)

- `page` (`number`) - the default page after the table component loading
- `itemsPerPage` (`number`) - number of the displaying items (rows) on a page
- `maxSize` (`number`) - number of the displaying pages before `...`
- `numPages` (`number`) - total number of the pages
- `length` (`number`) - total number of the items after filtering (of it's chosen)
- `expandable` (`boolean`) - allows expand columns and allows rows to expand after clicked
- `expandedComponent` (`string`) - component to insert into expanding row;
- `rows` (`?Array<any>`) - only list of the rows which should be displayed

---
- `columns` (`?Array<any>`) - config for columns (+ sorting settings if it's needed)
  - `title` (`string`) - the title of column header
  - `name` (`string`) - the property name in data
  - `sort` (`?string|boolean`) - config for columns (+ sorting settings if it's needed), sorting is switched on by default for each column
  - `className` (`string|Array<string>`) - additional CSS classes that should be added to a column header
  - `filtering` (`?any`) - switch on the filtering plugin
    - `filterString` (`string`) - the default value for filter
    - `columnName` (`string`) - the property name in raw data
  - `editable` (`boolean`) - allows values under this column to be changed (note this just facilitates the change, you must use the valueEdit output event to make changes permanent)
  - `options` (`?Array<string>`) - if an array is provided, the editing will be a select dropdown rather than an input
  - `isEditing` (`boolean`) - autoset by the table, however this can be used to customize editing multiple cells in a row

  ---
- `config` (`?any`) - config for setup all plugins (filtering, sorting, paging):
  - `paging` (`?boolean`) - - switch on the paging plugin
  - `sorting` (`?any`) - switch on the sorting plugin
    - `columns` (`Array<any>`) - only list of the columns for sorting
  - `filtering` (`?any`) - switch on the filtering plugin
    - `filterString` (`string`) - the default value for filter
    - `columnName` (`string`) - the property name in raw data
  - `className` (`string|Array<string>`) - additional CSS classes that should be added to a <table>
  - `height` (`string`) - height of the table component
  - `infiniteScroll` (`boolean`) - allows for infinite scroll to work
  - `renderMoreAt` (`number`) - a number between 0.01 and 0.99 representing percentage of scroll to render more data (note this will activate the scrolledDown event, letting you know to render more rows)

### Outputs (Events)

- `tableChanged`: data change event handler
- `cellClicked`: onclick event handler
- `expanderClicked`: onclick for expander event handler
- `scrolledDown`: scrolled down to renderMore at percentage event handler
- `valueEdit` : returns the row, column, row index, column index, original value, and new value in one object after an editable table cell has been submitted 

### Filter

The responsibility of the filtering issue falls on user. You should choose on which columns the filter would be applied. You could add any number of different filters.
Filter string - it's a string for matching values in raw data. Column name refers to the property name in raw data. The rest logic you could organize by yourself (the order of filters, data formats, etc). Even you could use filter for list of data columns.

You can also set up `filtering` param for columns, in this case filter box will appear in first row of the table.

### Sorting

Data sorting could be in 3 modes: asc, desc and without sorting data (as it comes from backend or somewhere else). If you want to switch off the sorting for some of the columns then you should set it forcibly in columns config (set property sort to false value for each column you want)

### Paging

Pagination could be used from [ng2-bootstrap](https://github.com/valor-software/ng2-bootstrap) - [pagination component](http://valor-software.github.io/ng2-bootstrap/#pagination). When the page is changed, the pagination component will emit event `change-table` with an object {page, itemsPerPage}. Then you can easily subscribe on it and request corresponding raw data.


## Troubleshooting

Please follow this guidelines when reporting bugs and feature requests:

1. Use [GitHub Issues](https://github.com/valor-software/ng2-expanding-table/issues) board to report bugs and feature requests (not our email address)
2. Please **always** write steps to reproduce the error. That way we can focus on fixing the bug, not scratching our heads trying to reproduce it.

Thanks for understanding!

### License

The MIT License (see the [LICENSE](https://github.com/valor-software/ng2-expanding-table/blob/master/LICENSE) file for the full text)
