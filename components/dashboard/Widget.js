import * as React from 'react'

const Widget = (props) => {

    let total = 0
    let initialDepartment = {
        Chem : { count: 0, percentage: 0},
        MCSU : { count: 0, percentage: 0},
        PhysicsGeology : { count: 0, percentage: 0}
    }
    const [departmentData, setDepartmentData] = React.useState(initialDepartment)

    const calculatePercentage = () => {
        
        props.data.forEach(item => {

            initialDepartment["Chem"].count += item["Chem"]
            initialDepartment["MCSU"].count += item["MCSU"]
            initialDepartment["PhysicsGeology"].count += item["Physics/Geology"]
        
        });

        total = initialDepartment["Chem"].count + initialDepartment["MCSU"].count  + initialDepartment["PhysicsGeology"].count

        for (const key in initialDepartment) {
            initialDepartment[key].percentage = ((initialDepartment[key].count * 100 ) / total).toFixed(2)
        }  
        
        setDepartmentData(initialDepartment)
    }

    React.useEffect(() => {
        calculatePercentage()
    }, [props]);

  return (
    <>
        <div className="card my-3">
            <div className="card-body">
                Department Accomplishments
                <hr className="border-2 border-top border-secondary"></hr>
                <div className='row'>
                    <div className='col-4 widget-item-one'>
                        <div className='widget-category'>
                            Physics/Geology
                        </div>
                        <div className='widget-percentage'>
                            {departmentData["PhysicsGeology"].percentage} %
                        </div>
                        <div className='widget-count'>
                            {departmentData["PhysicsGeology"].count}
                        </div>
                    </div>
                    <div className='col-4 widget-item-two'>
                        <div className='widget-category'>
                            Chemistry
                        </div>
                        <div className='widget-percentage'>
                            {departmentData["Chem"].percentage} %
                        </div>
                        <div className='widget-count'>
                            {departmentData["Chem"].count}
                        </div>
                    </div>
                    <div className='col-4 widget-item-three'>
                        <div className='widget-category'>
                            MCSU
                        </div>
                        <div className='widget-percentage'>
                            {departmentData["MCSU"].percentage} %
                        </div>
                        <div className='widget-count'>
                            {departmentData["MCSU"].count}
                        </div>
                    </div>
                </div>
                
                <div className="progress mt-1">
                    <div className="progress-bar widget-progress-one" role="progressbar" aria-label="Segment one" style={{width: `${departmentData["PhysicsGeology"].percentage}%`}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                    <div className="progress-bar widget-progress-two" role="progressbar" aria-label="Segment two" style={{width: `${departmentData["Chem"].percentage}%`}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                    <div className="progress-bar widget-progress-three" role="progressbar" aria-label="Segment three" style={{width: `${departmentData["MCSU"].percentage}%`}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Widget