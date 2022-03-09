import React from 'react'
import { Helmet } from 'react-helmet'
import { PapperBlock } from 'dan-components'
import Table from '../../GrobalComponents/Table/Table'

const SamplePage = () => {
  const title = 'Paciente'
  const description = 'Dandelion Pro'

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      <PapperBlock
        title="Consulta de pacientes"
        whiteBg
        icon="ion-ios-people"
        // desc="A simple Tree Collapsed/Expanded Table"
      >
        <Table />
      </PapperBlock>
    </div>
  )
}

export default SamplePage
