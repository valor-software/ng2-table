### Usage
```typescript
import { Ng2TableModule } from 'ng2-table/ng2-table';
```
or if you want to import specified plugins (Table component is required, the others are optional):
```typescript
import { NgTableComponent, NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective } from 'ng2-table/ng2-table';
```
in this case, don't forget to include all of the imported entities to your module

### Utilisation

There are only simple table with 3 plugins/directives: `filtering`, `paging`, `sorting`. You don't need special `config` variable for storing settings for all plugins as is used in demo example. It's just showing usage sample.

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
  - `className` (`string|Array<string>`) - additional CSS classes that should be added to a <table>

- `rows` (`?Array<any>`) - only list of the rows which should be displayed
- `columns` (`?Array<any>`) - config for columns (+ sorting settings if it's needed)
    - `title` (`string`) - the title of column header
    - `name` (`string`) - the property name in data
    - `sort` (`?string|boolean`) - config for columns (+ sorting settings if it's needed), sorting is switched on by default for each column
    - `className` (`string|Array<string>`) - additional CSS classes that should be added to a column header
    - `filtering` (`?any`) - switch on the filtering plugin
      - `filterString` (`string`) - the default value for filter
      - `columnName` (`string`) - the property name in raw data

### Outputs (Events)

- `tableChanged`: data change event handler
- `cellClicked`: onclick event handler

### Filter

The responsibility of the filtering issue falls on user. You should choose on which columns the filter would be applied. You could add any number of different filters.
Filter string - it's a string for matching values in raw data. Column name refers to the property name in raw data. The rest logic you could organize by yourself (the order of filters, data formats, etc). Even you could use filter for list of data columns.

You can also set up `filtering` param for columns, in this case filter box will appear in first row of the table.

### Sorting

Data sorting could be in 3 modes: asc, desc and without sorting data (as it comes from backend or somewhere else). If you want to switch off the sorting for some of the columns then you should set it forcibly in columns config (set property sort to false value for each column you want)

### Paging

Pagination could be used from [ng2-bootstrap](https://github.com/valor-software/ng2-bootstrap) - [pagination component](http://valor-software.github.io/ng2-bootstrap/#pagination). When the page is changed, the pagination component will emit event `tableChanged` with an object {page, itemsPerPage}. Then you can easily subscribe on it and request corresponding raw data.
