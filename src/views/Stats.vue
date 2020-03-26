<template>
  <div class="container stats">
    <div v-if="this.$store.state.activePerson !== null">
    </div>
    <h2>Number of tickets {{ this.$store.getters.numberOfTickets }}</h2>
    <PieChart v-if="stats.length > 0" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import PieChart from '../components/PieChart.vue';

export default {
  name: 'Stats',
  components: {
    PieChart,
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
            backgroundColor: ['#feca57', '#070606', '#1dd1a1', 'ff6b6b', '54a0ff', '00d2d3', '222f3e', '8395a7'],
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
  @import '../assets/styles/globals.scss';
  .stats {
    @include rwd('tablet') {
      margin-top: 50px;
    }
    display: flex;
    flex-direction: column;
    max-width: 100%;
    overflow-x: hidden;
  }
</style>
