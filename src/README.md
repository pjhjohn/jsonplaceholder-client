# src

```
src/
  actions/
  assets/         # Asset files including images, fonts, etc.
  components/
  containers/
  reducers/
  index.js
  routes.js
  _variables.scss
  index.scss
  README.md
```

For the project to build, **following files must exist with exact filenames**:

> `index.js` is the JavaScript entry point.

You can delete or rename the other files.

## Code Style

Following Code Styles are recommended.  
This sections will be updated considering [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) 

#### Import
> **Library Path :** `'module_name'` *(e.g. `import React from 'react'`)*  
> **Relative Path :** starts with `'./'` *(e.g. `import { Comment } from './../../components'`)*  
> **Line Separation :** newline between import collections  
> **Import Sequence :** Library Module > Asset > Components&Containers > CSS(Global>Local)  

#### String - Single Quote : `'module_name'` rather than `"module_name"`

#### Indent - 2space

#### Line Ending - LF

#### End of File - Last line must be empty
