<template>
  <v-row justify="center">
    <v-col lg="9">
      <v-card outlined>
        <v-list-item>
          <v-list-item-content class="py-0">
            <div class="overline">ABOUT</div>
          </v-list-item-content>
        </v-list-item>
        <v-row>
          <v-col lg="6" md="6" sm="12">
            <v-card-title class="pt-0">Name</v-card-title>
            <v-card-text v-text="$t('index.about.name')"></v-card-text>
            <v-card-title>Education</v-card-title>
            <v-card-text>
              STONY BROOK UNIVERSITY, Stony Brook, New York<br />
              B.S. in Computer Science, Dec. 2015
            </v-card-text>
            <v-card-title>Biography</v-card-title>
            <v-card-text>
              뉴욕 스토니브룩 소재의 스토니브룩 대학교 컴퓨터 공학과를 졸업 후
              웹 및 안드로이드 개발자로서 활동하고 있다. 전문적인 프로그래밍은
              2011년 공군 제3훈련비행단 정보체계실에서 시작했다. 정보체계병으로
              근무하며 2년 간 엔터프라이즈 자바빈 기반의 인트라넷 포털, 오라클
              데이터베이스, 그리고 자바 및 C++ 소프트웨어 개발에 힘썼다.
              이후에는 대학에 복학하기 전, 프리랜서 자바 개발자로 활동하며 웹 및
              소프트웨어 개발에 주력했다. 2015년에 대학을 졸업한 뒤에는 미국에서
              웹 개발자로서 커리어를 시작했다. 현재는 한국으로 귀국해 카페24
              개발팀에서 OAuth 2.0 Provider 및 Cafe24 API 관제 서비스의 개발과
              유지보수를 담당하고 있다.
            </v-card-text>
          </v-col>

          <v-col lg="6" md="6" sm="12">
            <radar-chart :chart-data="skillSetRadarChartData"></radar-chart>
          </v-col>
        </v-row>

        <v-divider class="mx-4"></v-divider>

        <v-card-actions>
          <v-list>
            <v-list-item>
              <v-list-item-icon color="grey darken-3">
                <v-icon>mdi-map-marker</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title
                  v-text="$t('index.about.location')"
                ></v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item href="mailto:debugrammer@gmail.com">
              <v-list-item-icon color="grey darken-3">
                <v-icon>mdi-email</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>debugrammer@gmail.com</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import RadarChart from '~/components/widgets/chart/radar-chart'

export default {
  name: 'About',
  components: {
    RadarChart
  },
  data() {
    return {
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
      }
    }
  }
}
</script>
