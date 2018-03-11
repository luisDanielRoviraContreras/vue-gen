<p align="center">
    <a href="https://vuejs.org" target="_blank" rel="noopener noreferrer">
        <img width="100" src="https://vuejs.org/images/logo.png" alt="Vue logo">
    </a>
</p>


# VUEGEN

### [Vue.js](https://vuejs.org/) Basic Component Generator 


## Installation

```bash
$ npm i @marcelodeandrade/vuegen
```

## Usage

### Help
```bash
$ vuegen -h
```
### Generate Component multiple file
```bash
vuegen <component name>
```

- Outputs 

```bash
src/
└── components
    └── test
        ├── component.css
        ├── component.js
        ├── component.spec.js
        └── component.vue
```

### Generate Component Single-File

```bash
vuegen -s <component name>
```

- Outputs 

```bash
└── components
    └── test
        ├── component.spec.js
        └── component.vue
```

## TODO

- Change component file name
- Change component property name

