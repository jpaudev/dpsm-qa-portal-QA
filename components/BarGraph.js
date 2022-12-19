import React from 'react'
import { ResponsiveBar } from '@nivo/bar'

const BarGraph = () => {
    const graphData = [
		{
		  "AccomplishmentType": "Public Service",
		  "MCSU": 3,
		  "MCSUColor": "hsl(88, 20%, 20%)",
		  "Chem": 3,
		  "ChemColor": "hsl(102, 70%, 50%)",
		  "Physics/Geology": 3,
		  "Physics/GeologyColor": "hsl(127, 70%, 50%)",
		},
		{
		  "AccomplishmentType": "Publications",
		  "MCSU": 3,
		  "MCSUColor": "hsl(109, 70%, 50%)",
		  "Chem": 3,
		  "ChemColor": "hsl(151, 70%, 50%)",
		  "Physics/Geology": 3,
		  "Physics/GeologyColor": "hsl(177, 70%, 50%)",
		},
		{
		  "AccomplishmentType": "Research Grants",
		  "MCSU": 3,
		  "hot dogColor": "hsl(67, 70%, 50%)",
		  "Chem": 3,
		  "ChemColor": "hsl(215, 70%, 50%)",
		  "Physics/Geology": 3,
		  "Physics/GeologyColor": "hsl(244, 70%, 50%)",
		},
		{
		  "AccomplishmentType": "Training/Seminars",
		  "MCSU": 3,
		  "hot dogColor": "hsl(234, 70%, 50%)",
		  "Chem": 3,
		  "ChemColor": "hsl(302, 70%, 50%)",
		  "Physics/Geology": 3,
		  "Physics/GeologyColor": "hsl(178, 70%, 50%)",
		}
	  ]
  return (
    <>
        <div id = "graph" style = {{height: 550}}>
			<ResponsiveBar
                data={graphData}
                keys={[ 'MCSU', 'Chem', 'Physics/Geology' ]}
                indexBy='AccomplishmentType'
                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                padding={0.3}
                valueScale={{ type: 'linear' }}
                indexScale={{ type: 'band', round: true }}
                colors={{ scheme: 'nivo' }}
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
                labelTextColor="#737373"
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