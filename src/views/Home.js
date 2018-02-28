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
      <blockquote style={{backgroundColor: 'lightgrey'}}>
      <Content source={page.content} />
      </blockquote>
      <div className='section thin'>
        <div className='container'>
        <h1><Content source={page.section1} /></h1>
          {team
            .map(({ person }) => (
              <div>
                <h2>{person.name}</h2>
                <h3>{person.title}</h3>
                <img style={{ width: '100px', height: '100px', borderRadius: '50%' }} alt={person.name} src={person.avatar} />
                <p>{person.about}</p>
              </div>
            ))}
        </div>
      </div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
    </main>
  )
}
