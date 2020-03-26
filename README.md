# TicketsApp

Application for creating tasks. User are able to create/edit task with the following attributes: 
- title
- description
- severity
- status
- assigned to
- notes

The application uses Vue router and has 3 screens (home|stats|new-ticket) one for the table of all tasks, send one for pie chart and last but not the least for creating a new tasks. To store the date application uses vuex.  

## Importing tasks 
To import tasks you need to export them into the /public catalog


## Live demo 
[Link to live demo](#)


## Project dependencies

- [axios](https://github.com/axios/axios) 0.19.2 
- [vue](https://vuejs.org/) 2.6.11
- [vuex](https://vuex.vuejs.org/) 3.1.2
- [vue-router](https://router.vuejs.org/) 3.1.5
- [vuelidate](https://vuelidate.js.org/) 0.7.5
- [vue-select](https://vue-select.org/) 3.9.1
- [vue-chartjs](https://vue-chartjs.org/) 3.5.0


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

## Authors
- Marcin Bawolski

## License
[MIT](https://choosealicense.com/licenses/mit/)