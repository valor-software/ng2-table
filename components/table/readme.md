## Usage
In order to start using ng2-table you need to include one of the following imports:
```typescript
import {NG_TABLE_DIRECTIVES, NgTableEventBus} from 'ng2-table/ng2-table';
```
or
```typescript
import {NgTable, NgTableFiltering, NgTableSorting, NgTableEventBus} from 'ng2-table/ng2-table';
```
Second alternative will allow you to choose which ng2-table directives should be imported.

Now let's put a closer look at each available directive.

- `NgTable` - this is the heart of the given module. `NgTable` is responsible for rendering tabular data and handling events propagated from sorting, filtering and pagination components. It has following ***inputs***:
`columns` - this property accepts array of objects decribing columns, for example:

	``` typescript
	[
	    {title: 'Name', name: 'name'},
	    {title: 'Position', name: 'position', sort: false},
	    {title: 'Office', name: 'office', sort: 'asc'},
	    {title: 'Extn.', name: 'ext', sort: 'desc'},
	    {title: 'Start date', name: 'startDate'},
	    {title: 'Salary', name: 'salary'}
	]
	```
	`rows` - this property accepts array of objects decribing rows, example:

	```typescript
	[
	    {
	        name: 'Victoria Cantrell',
	        position: 'Integer Corporation',
	        office: 'Croatia',
	        ext: 0839,
	        startDate: '2015/08/19',
	        salary: '$208,178'
	    },
	    {
	        name: 'Pearl Crosby',
	        position: 'In PC',
	        office: 'Cambodia',
	        ext: 8262,
	        startDate: '2014/10/08',
	        salary: '$114,367'
	    }
	]
	```
	`config` - this property accepts object describing configuration of the table. Example given below:
	```typescript
	{
	    filtering: {
	        filterString: "Sed",
	        columnName: "position"
	    },
	    pagination: {
	        page: 1,
	        itemsPerPage: 10,
	    },
	    sorting: [
	        {
	            name: "office",
	            sort: "asc"
	        },
	        {
	            name: "ext",
	            sort: "asc"
	        }
	    ]
	}
	```

	`config` typically consist of the following sections:
	- `pagination` - enables pagination support. This option won't make table to render pagination, but instead it enables `pagination events` handling. In ordered to get pagination rendered you need to use [pagination component](http://valor-software.com/ng2-bootstrap/#pagination) from [ng2-bootstrap](http://valor-software.com/ng2-bootstrap). It also produces events which ng2-table fully understands and is able to handle (for more details please have a look at the [demo](https://github.com/rychkog/ng2-table/tree/master/demo) app). Let's have a look at the properties that we can configure for the `pagination`:
		- `page` (`?number`) - as soon as ng2-table is loaded - this will be used as default page.
		- `itemsPerPage` (`?number`) - number of displayed items (rows) per page.
	- `filtering` - enables filtering support. `Enables filtering` means that ng2-table will be able to understand `filtering events` that are produced by `NgTableFiltering` directive which in turn can be applied on `input` element in your html as it is done in the [demo](https://github.com/rychkog/ng2-table/tree/master/demo) app. Let's have a look at properties that we can configure for `filtering`:
	   - `columnName` (`?any`) - given column's data will be used for filtering whole table, if absent - table will be filtered by all columns' data.
       - `filterString` (`string`) - value that will be matched against given column (or all columns if `columnName` was left empty).
	- `sorting` - enables sorting support. And you'll be able to sort column by clicking on them when this option is enabled. `sorting` section contains array of *column descriptors*. Let's have a look at properties that we can configure per *column descriptor*:
	   - `name` (`string`) - row item property name.
       - `sort` (`?string|boolean`) - `true` - ascending,  `false` - descending. In order to turn sorting on - you need to include sorting property (empty object if you don't want particular columns to be sorted by default) in the config. `NgTableFiltering` is used by ng2-table internally.

### Events produced by ng2-table
`tableChanged` - ng2-table produces events on every change that is happened with its data whether data was filtered, sorted or paginated. Event which is generated and can be passed to handler has the structure that repeats `config` object.

This is how table looks in markup:
```html
<ngTable [config]="config"
         (tableChanged)="onTableChanged($event)"
         [rows]="rows"
         [columns]="columns">
</ngTable>
```
Here, for example, `onTableChanged` method is invoked every time `tableChanged` is produced. `$event` then is passed to the `onTableChanged`. And as I already said `$event` repeats structure of the `config` object by reflects current state of the table:
```typescript
{
    filtering: {
        filterString: "Manager",
        columnName: "position"
    },
    pagination: {
        page: 5,
        itemsPerPage: 10,
    },
    sorting: [
        {
            name: "office",
            sort: "desc"
        },
        {
            name: "ext",
            sort: ""
        }
    ]
}
```

And last but not least - `NgTableEventBus` - this service is used for propagating sorting, filtering and pagination event to ng2-table (again I'm asking you to have a closer look at the [demo](https://github.com/rychkog/ng2-table/tree/master/demo) app - as you know one look is worth thousand words sometimes:) ).

In general you will use this service like at the example below:

```html
<input *ngIf="config.filtering" placeholder="Type to start filtering..." type="text" class="form-control"
       [ngTableFiltering]="config.filtering"
       (tableChanged)="tableEventBus.onFilterChanged($event)"/>
```
You just pass event from produced by `NgTableFiltering` to `tableEventBus.onFilterChanged($event)`

And one important thing - don't forget to register `NgTableEventBus` in angular's `bootstrap` function like this:

```typescript
import {bootstrap} from 'angular2/bootstrap';
import {Component} from 'angular2/core';

import {NG_TABLE_DIRECTIVES, NgTableEventBus} from 'ng2-table/ng2-table';

@Component({
  selector: 'app',
  template: `...`,
  directives: [...]
})
export class YourApp {
	...
}

bootstrap(YourApp, [NgTableEventBus]);
```
