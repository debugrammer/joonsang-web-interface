export const state = () => ({
  skillSetRadarChartData: {
    labels: [
      'UI/UX Design',
      'Front-end',
      'Back-end',
      'Database',
      'Server Mgmt.',
      'System Design'
    ],
    datasets: [
      {
        label: 'Skill Level',
        data: [6, 8, 9, 6, 5, 5],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
      }
    ]
  },
  skillSetsData: [
    {
      type: 'Front-end',
      skills: [
        {
          name: 'HTML',
          level: 7
        },
        {
          name: 'CSS',
          level: 6
        },
        {
          name: 'JavaScript',
          level: 7
        },
        {
          name: 'jQuery',
          level: 8
        },
        {
          name: 'Vue.js',
          level: 6
        },
        {
          name: 'Nuxt.js',
          level: 8
        },
        {
          name: 'Bootstrap',
          level: 8
        },
        {
          name: 'Vuetify.js',
          level: 8
        }
      ]
    },
    {
      type: 'Back-end',
      skills: [
        {
          name: 'Java',
          level: 8
        },
        {
          name: 'PHP',
          level: 6
        },
        {
          name: 'Node.js',
          level: 5
        },
        {
          name: 'Spring Boot',
          level: 8
        },
        {
          name: 'Laravel',
          level: 6
        },
        {
          name: 'Express.js',
          level: 6
        }
      ]
    },
    {
      type: 'Database',
      skills: [
        {
          name: 'MariaDB',
          level: 7
        },
        {
          name: 'MySQL',
          level: 5
        },
        {
          name: 'PostgreSQL',
          level: 5
        }
      ]
    },
    {
      type: 'Server Mgmt.',
      skills: [
        {
          name: 'CentOS',
          level: 6
        },
        {
          name: 'Nginx',
          level: 5
        },
        {
          name: 'Apache',
          level: 5
        },
        {
          name: 'PM2',
          level: 6
        },
        {
          name: 'HAProxy',
          level: 3
        },
        {
          name: 'Redis',
          level: 5
        },
        {
          name: 'Graylog',
          level: 5
        }
      ]
    }
  ]
})

export const getters = {
  getSkillSetRadarChartData(state) {
    return state.skillSetRadarChartData
  },
  getSkillSetsData(state) {
    return state.skillSetsData
  }
}
