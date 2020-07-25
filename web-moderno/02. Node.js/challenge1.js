const axios = require('axios');
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const countryFilter = f => f.pais = 'China';
const genderFilter = f => f.genero = 'F';
const lowerWage = (emp, curEmp) => (curEmp.salario < emp.salario) ? curEmp : emp; 
axios.get(url).then((response)=>{
    console.log(response.data.filter(countryFilter).filter(genderFilter).reduce(lowerWage));
});
//console.log(response);

