import React from 'react'

class EmploymentDashboardGraph extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ["Full-time", "Part-time", "Temporary", "Tenured"]
        }
      },
      series: [
        {
          name: "Employment Status Count",
          data: [40, 20, 25, 35]
        }
      ]
    }
  }

  render() {
    return (
      <div className="app">
	<br />
        <div className="row">
          <div className="mixed-chart">

          </div>
        </div>
      </div>
    )
  }
}

export default EmploymentDashboardGraph