<template>
    <div>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Lp</th>
            <th scope="col">Imię</th>
            <th scope="col">Nazwisko</th>
            <th scope="col">Data urodzenia</th>
            <th scope="col">Data wstąpienia</th>
            <th scope="col">Stopień</th>
            <th scope="col">Akcje</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="user.id">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.birthDate }}</td>
            <td>{{ user.enrollmentDate }}</td>
            <td>{{ user.rank }}</td>
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
            firstName: 'John',
            lastName: 'Doe',
            birthDate: '1990-01-01',
            enrollmentDate: '2020-05-15',
            rank: 'Major',
          },
          {
            id: 2,
            firstName: 'Jane',
            lastName: 'Smith',
            birthDate: '1985-03-12',
            enrollmentDate: '2018-09-20',
            rank: 'Captain',
          },
          {
            id: 3,
            firstName: 'Bob',
            lastName: 'Johnson',
            birthDate: '1978-07-22',
            enrollmentDate: '2015-11-10',
            rank: 'Lieutenant',
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
  