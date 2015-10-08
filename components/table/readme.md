### Usage
```typescript
import {Ng2Table} from 'ng2-table';
```
or if you want to import specified plugins (Table component is required, the others are optional):
```typescript
import {Table, Ng2TableFilter, Ng2TablePaging, pagination} from 'ng2-table';
```
in this case, don't forget to include all of the imported entities to the option `directives` in your component

### Utilisation

There are only simple table with 3 plugins/directives: `filtering`, `paging`, `sorting`. You don't need special `config` variable for storing settings for all plugins as is used in demo example. It's just showing usage sample.

### Properties

- `config` (`?any`) - config for setup all plugins (filtering, sorting, paging):
  - `paging` (`?any`) - - switch on the paging plugin
    - `page` (`number`) - the default page after the component loading
    - `itemsPerPage` (`number`) - number of the displaying items on a page
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

### Events

- `table-changed`: onclick event handler

### Filter

The responsibility of the filtering issue falls on user. You should choose on which columns the filter would be applied. You could add any number of different filters.
Filter string - it's a string for matching values in raw data. Column name refers to the property name in raw data. The rest logic you could organize by yourself (the order of filters, data formats, etc). Even you could use filter for list of data columns.

### Sorting

Data sorting could be in 3 modes: asc, desc and without sorting data (as it comes from backend or somewhere else). If you want to switch off the sorting for some of the columns then you should set it forcibly in columns config (set property sort to false value for each column you want)

### Paging

Pagination could be used from [ng2-bootstrap](https://github.com/valor-software/ng2-bootstrap) - [pagination component](http://valor-software.github.io/ng2-bootstrap/#pagination). When the page is changed, the pagination component will emit event `table-changed` with an object {page, itemsPerPage}. Then you can easily subscribe on it and request corresponding raw data.
