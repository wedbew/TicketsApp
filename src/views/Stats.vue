<template>
  <div class="container stats">
    <Users className="form__field" label="assign" />
    <div v-if="this.$store.state.activePerson !== null">
      <h1>Number of tasks assigned to {{this.$store.state.activePerson}}:
        {{ this.$store.getters.numberOfTickesPerUser(this.$store.state.activePerson) }}
      </h1>
    </div>
    <Table
      v-if="this.$store.getters.numberOfTickesPerUser(this.$store.state.activePerson) > 0"
      :tickets="this.$store.getters.searchByUser(this.$store.state.activePerson)" />
    <h1>Number of tickets {{ this.$store.getters.numberOfTickets }}</h1>
    <PieChart v-if="stats.length > 0" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import Users from '../components/Form/Users.vue';
import Table from '../components/Table.vue';
import PieChart from '../components/PieChart.vue';

export default {
  name: 'Stats',
  components: {
    Users,
    PieChart,
    Table,
  },
  data() {
    return {
      stats: [],
      chartOptions: {
        hoverBorderWidth: 20,
      },
      chartData: {
        hoverBackgroundColor: 'red',
        hoverBorderWidth: 10,
        labels: [],
        datasets: [
          {
            label: 'Users',
            backgroundColor: ['#41B883', '#E46651', '#00D8FF'],
            data: [],
          },
        ],
      },
    };
  },
  created() {
    this.$store.dispatch('getUsers').then(
      () => {
        this.usersWithTickets();
        this.setLabels();
      },
    );
  },
  methods: {
    usersWithTickets() {
      this.$store.state.users.forEach((user) => {
        const numberOfTickets = this.$store.getters.numberOfTickesPerUser(user);
        if (numberOfTickets > 0) {
          const stats = {
            person: user,
            ticket: numberOfTickets,
          };
          this.stats.push(stats);
        }
      });
    },
    setLabels() {
      this.stats.forEach((item) => {
        this.chartData.labels.push(item.person);
        this.chartData.datasets[0].data.push(item.ticket);
      });
    },
  },
};
</script>

<style lang="scss">
  @import '../assets/styles/variables.scss';
  .stats {
    display: flex;
    flex-direction: column;
  }
</style>
