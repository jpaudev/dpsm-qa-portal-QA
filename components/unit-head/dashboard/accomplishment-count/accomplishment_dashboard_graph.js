// install (please make sure versions match peerDependencies)
// npm install --save @nivo/bar
import { ResponsiveBar } from '@nivo/bar'
import React from 'react'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.



class AccomplishmentDashboardGraph extends React.Component{
  render(){
    console.log(this.props.data,"default")
	return(
		<div id = "graph" style = {{height: 700}}>
			<ResponsiveBar
        data={this.props.data}
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
            tickSize: 5,
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
		)
	}
}

export default AccomplishmentDashboardGraph
