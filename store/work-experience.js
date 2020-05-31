export const state = () => ({
  workExperienceData: [
    {
      start: '2017-07',
      end: '',
      title: 'index.workExperience.cafe24.title',
      content: 'index.workExperience.cafe24.content'
    },
    {
      start: '2017-04',
      end: '2017-06',
      title: 'index.workExperience.gShopper.title',
      content: 'index.workExperience.gShopper.content'
    },
    {
      start: '2016-07',
      end: '2017-04',
      title: 'index.workExperience.rocketCrew.title',
      content: 'index.workExperience.rocketCrew.content'
    },
    {
      start: '2015-12',
      end: '2016-12',
      title: 'index.workExperience.wardKraft.title',
      content: 'index.workExperience.wardKraft.content'
    },
    {
      start: '2011-02',
      end: '2013-02',
      title: 'index.workExperience.airForce.title',
      content: 'index.workExperience.airForce.content'
    }
  ]
})

export const getters = {
  getWorkExperienceData(state) {
    return state.workExperienceData
  }
}
