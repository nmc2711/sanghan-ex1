import React from 'react';
import logo from './logo.svg';
import Customer from './components/Customer'
import './App.css';

const customers = [{
  'id': 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '황상한' ,
  'birthday' : '940519' ,
  'gender' : '남자' ,
  'job' : '회사원'
},
{
  'id': 2,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : '이지선' ,
  'birthday' : '940519' ,
  'gender' : '남자' ,
  'job' : '회사원'
},
{
  'id': 3,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : '지선이' ,
  'birthday' : '940519' ,
  'gender' : '남자' ,
  'job' : '회사원'
}
]
function App() {
  return (
    <div>
      {
        customers.map(c => {
          return (
          <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
          />);
        })
      }
    </div>
  );
}

export default App;
