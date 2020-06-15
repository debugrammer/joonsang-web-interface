export const state = () => ({
  skillSetRadarChartData: {
    labels: [
      'UI/UX Design',
      'Front-end',
      'Back-end',
      'Database',
      'Server Management',
      'System Design'
    ],
    datasets: [
      {
        label: 'Skill Level',
        data: [6, 8, 9, 7, 5, 5],
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
          level: 8
        },
        {
          name: 'CSS',
          level: 7
        },
        {
          name: 'JavaScript',
          level: 8
        },
        {
          name: 'jQuery',
          level: 8
        },
        {
          name: 'Vue.js',
          level: 7
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
      type: 'Server Management',
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
