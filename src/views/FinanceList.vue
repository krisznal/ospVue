<template>
    <div>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Lp</th>
            <th scope="col">Data operacji</th>
            <th scope="col">Data dokumentu</th>
            <th scope="col">Data wprowadzenia</th>
            <th scope="col">Z</th>
            <th scope="col">Kwota:</th>
            <th scope="col">D0:</th>
            <th scope="col">Tytuł:</th>
            <th scope="col">Numer dokumentu:</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="user.id">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ user.DataO }}</td>
            <td>{{ user.DataD }}</td>
            <td>{{ user.DataW }}</td>
            <td>{{ user.za }}</td>
            <td>{{ user.Kwota }}</td>
            <td>{{ user.do }}</td>
            <td>{{ user.Tytul }}</td>
            <td>{{ user.NumerD }}</td>
            <td>
              <button @click="editUser(user.id)" class="btn btn-primary">Edytuj</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        users: [
          {
            id: 1,
            DataO: 'John',
            DataD: 'Doe',
            DataW: '1990-01-01',
            za: '2020-05-15',
            Kwota: 'Major',
            do: 'Major',
            Tytul: 'Major',
            NumerD: 'Major',
          },
          {
            id: 2,
            DataO: 'Jane',
            DataD: 'Smith',
            DataW: '1985-03-12',
            za: '2018-09-20',
            Kwota: 'Captain',
            do: 'Major',
            Tytul: 'Major',
            NumerD: 'Major',
          },
          {
            id: 3,
            DataO: 'Bob',
            DataD: 'Johnson',
            DataW: '1978-07-22',
            za: '2015-11-10',
            Kwota: 'Lieutenant',
            do: 'Major',
            Tytul: 'Major',
            NumerD: 'Major',
          },
        ],
      };
    },
    methods: {
      editUser(userId) {
        if (userId === null) {
          this.$router.push('/finance/list');
        } else {
          this.$router.push(`/finance/list/${userId}`);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  </style>
  