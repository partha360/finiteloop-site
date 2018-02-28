import React from 'react'
import Helmet from 'react-helmet'

import Content from '../components/Content'
import PageHeader from '../components/PageHeader'
import './Home.css'

export default ({ page }) => {
  const { title, subtitle, team } = page
  return (
    <main className='Home'>
      <PageHeader title={title} subtitle={subtitle} />
      <div className='section thin'>
        <div className='container'>
        <h1><Content source={page.section1} /></h1>
          {team
            .map(({ person: person }) => (
              <div>
                <h2>{person.name}</h2>
                <img style={{ width: '100px' }} src={person.avatar} />
                <p>{person.about}</p>
              </div>
            ))}
          <Content source={page.content} />
        </div>
      </div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
    </main>
  )
}
