## String Function

`noHtml()`

```js
import { noHtml } from "@hheinsoee/utility";
const htmltext = "<div>Hi Bro</div>";
noHtml(htmltext);
//output 'Hi Bro'
```

`noMarkDown()`

```js
import { noMarkDown } from "@hheinsoee/utility";

const htmltext = "<div>Hi Bro</div>";
noMarkDown(htmltext);
//output 'Hi Bro'
```

## OOP

`removeDuplicates()`

```js
import { removeDuplicates } from "@hheinsoee/utility";
const duplicatesArray = [
  { id: 1, name: "Hein Soe" },
  { id: 1, name: "Hein Soe" },
  { id: 2, name: "Zin Mar" },
];
removeDuplicates(duplicatesArray);
/* output
[
    {id:1, name:'Hein Soe'},
    {id:2, name:'Zin Mar'},
]
*/
```

Docu later

```js
findDuplicates();
makeUp();
isRequired();
snakeToCamelObject();
makeFresh();
search();
findDuplicates();
removeDuplicates();
noHtml();
noMarkdown();
snakeToTitleCase();
snakeToCamel();
```
