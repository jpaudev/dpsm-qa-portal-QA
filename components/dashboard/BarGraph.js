import React from 'react'
import { ResponsiveBar } from '@nivo/bar'

const BarGraph = (props) => {

  return (
    <>
        <div id = "graph" style = {{height: 500}}>
          <ResponsiveBar
            data={props.data}
            keys={[ 'MCSU', 'Chem', 'Physics/Geology' ]}
            indexBy={props.index}
            margin={{ top: 30, right: 130, bottom: 50, left: 60 }}
            padding={0.3}
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            colors={{ scheme: 'spectral' }}
            groupMode="stacked"
            borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 10,
                tickPadding: 5,
                tickRotation: 0,
                legend: props.legend, //label
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