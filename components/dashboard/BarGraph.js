import React from 'react'
import { ResponsiveBar } from '@nivo/bar'

const BarGraph = (props) => {
  let accompList = props.data
    
  let chemPSACount = 0
  let chemTSCount = 0
	let chemPubCount = 0
	let chemRGCount = 0
	
	let mcsuPSACount = 0
	let mcsuTSCount = 0
	let mcsuPubCount = 0
	let mcsuRGCount = 0
	
	let p6GeoPSACount = 0
	let p6GeoTSCount = 0
	let p6GeoPubCount = 0
	let p6GeoRGCount = 0

	let tableData = []

	let unitId
	let startDate
	let endDate

	if(accompList != null) {
		Object.keys(accompList).map(key => {
		  if(accompList[key].faculty_unit.unitId == 1) {
			chemPSACount += accompList[key].faculty_public_services.length
			chemTSCount += accompList[key].faculty_training_seminars.length
			chemPubCount += accompList[key].faculty_publishers.length
			chemRGCount += accompList[key].faculty_researchers.length
		  }
		  else if(accompList[key].faculty_unit.unitId == 2) {
			mcsuPSACount += accompList[key].faculty_public_services.length
			mcsuTSCount += accompList[key].faculty_training_seminars.length
			mcsuPubCount += accompList[key].faculty_publishers.length
			mcsuRGCount += accompList[key].faculty_researchers.length
		  }
		  else if(accompList[key].faculty_unit.unitId == 3) {
			p6GeoPSACount += accompList[key].faculty_public_services.length
			p6GeoTSCount += accompList[key].faculty_training_seminars.length
			p6GeoPubCount += accompList[key].faculty_publishers.length
			p6GeoRGCount += accompList[key].faculty_researchers.length
		  }

		  if(accompList[key].faculty_public_services.length > 0) {
			accompList[key].faculty_public_services.forEach(async (i) => {
				await tableData.push({
					col1: accompList[key].lastName + ', ' + accompList[key].firstName,
					col2: i.position + ' - ' + i.organization,
					col3: 'Public Service',
					col4: i.startDate,
					col5: i.endDate
				})
			})
		  }

		  if(accompList[key].faculty_publishers.length > 0) {
			accompList[key].faculty_publishers.forEach(async (i) => {
				await tableData.push({
					col1: accompList[key].lastName + ', ' + accompList[key].firstName,
					col2: i.faculty_publication.title,
					col3: 'Publication',
					col4: i.faculty_publication.publicationDate,
					col5: i.faculty_publication.publicationDate
				})
			})
		  }

		  if(accompList[key].faculty_training_seminars.length > 0) {
			accompList[key].faculty_training_seminars.forEach(async (i) => {
				await tableData.push({
					col1: accompList[key].lastName + ', ' + accompList[key].firstName,
					col2: i.role + ' - ' + i.title,
					col3: 'Training/Seminar',
					col4: i.dateFrom,
					col5: i.dateTo
				})
			})
		  }

		  if(accompList[key].faculty_researchers.length > 0) {
			accompList[key].faculty_researchers.forEach(async (i) => {
				await tableData.push({
					col1: accompList[key].lastName + ', ' + accompList[key].firstName,
					col2: i.faculty_research_grant.researchName,
					col3: 'Research Grant',
					col4: i.faculty_research_grant.actualStart,
					col5: i.faculty_research_grant.actualEnd
				})
			})
		  }
		});
	}

	const graphData = [
		{
		  "AccomplishmentType": "Public Service",
		  "MCSU": mcsuPSACount,
		  "Chem": chemPSACount,
		  "Physics/Geology": p6GeoPSACount,
		},
		{
		  "AccomplishmentType": "Publications",
		  "MCSU": mcsuPubCount,
		  "Chem": chemPubCount,
		  "Physics/Geology": p6GeoPubCount,
		},
		{
		  "AccomplishmentType": "Research Grants",
		  "MCSU": mcsuRGCount,
		  "Chem": chemRGCount,
		  "Physics/Geology": p6GeoRGCount,
		},
		{
		  "AccomplishmentType": "Training/Seminars",
		  "MCSU": mcsuTSCount,
		  "Chem": chemTSCount,
		  "Physics/Geology": p6GeoTSCount,
		}
	  ]

	// if(props.queryList.accomplishment == 1) {
	// 	unitId = props.queryList.unitId
	// 	startDate = props.queryList.startDate
	// 	endDate = props.queryList.endDate
	// }

    
  return (
    <>
        <div id = "graph" style = {{height: 500}}>
          <ResponsiveBar
            data={graphData}
            keys={[ 'MCSU', 'Chem', 'Physics/Geology' ]}
            indexBy='AccomplishmentType'
            margin={{ top: 30, right: 130, bottom: 50, left: 60 }}
            padding={0.3}
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            colors={{ scheme: 'spectral' }}
            groupMode="grouped"
            borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 10,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Accomplishment Type', //label
                legendPosition: 'middle',
                legendOffset: 32
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Count', //label
                legendPosition: 'middle',
                legendOffset: -40,
            format: e => Math.floor(e) === e && e
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor="#FFF"
            legends={[
                {
                    dataFrom: 'keys',
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 120,
                    translateY: 0,
                    itemsSpacing: 2,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: 'left-to-right',
                    itemOpacity: 0.85,
                    symbolSize: 20,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
            animate={true}
            motionStiffness={90}
            motionDamping={15}
        />
	    </div>
    </>
  )
}

export default BarGraph