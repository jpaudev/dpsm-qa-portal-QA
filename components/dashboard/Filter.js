import * as React from 'react'

const Filter = (props) => {
    const [unit, setUnit] = React.useState()
    const [startDate, setStartDate] = React.useState()
    const [endDate, setEndDate] = React.useState()

    // const handleFilter = () =>
  return (
    <>
        <div className="card">
            <div className="card-body">
                <div className='row'>
                    <div className = "col-12 mb-2">
                        <label className = "control-label" htmlFor ="DeptUnit"> Department Unit </label>
                        <div class="input-group">
                            <span class="input-group-text material-icons-sharp">corporate_fare</span>
                            <select className = "form-control" name = "DeptUnit" id="DeptUnit" onChange={ e => setUnit(e.target.value)}>
                                <option value="0">All</option>
                                <option value="1">Chemistry Unit</option>
                                <option value="2">Mathematics and Computing Sciences Unit</option>
                                <option value="3">Physics and Geology Unit</option>
                            </select>
                        </div>
                    </div>
                    <div className = "col-12 mb-2">
                        <label className = "control-label" htmlFor ="StartTimePeriod"> From  </label>
                        <div class="input-group">
                            <span class="input-group-text material-icons-sharp">calendar_today</span>
                            <input className = "form-control" type = "date" name = "StartTimePeriod" id="StartTimePeriod" />
                        </div>
                    </div>

                    <div className = "col-12 mb-3">
                        <label className = "control-label" htmlFor ="EndTimePeriod"> To </label>
                        <div class="input-group">
                            <span class="input-group-text material-icons-sharp">calendar_today</span>
                            <input className = "form-control" type = "date" name = "EndTimePeriod" id="EndTimePeriod"/>
                        </div>
                    </div>
                    <div className = "col-6">
                        <button className='btn customButton yellow w-100' onClick={() => props.handle("TEST")}><span className="material-icons-sharp">filter_alt</span>Filter</button>
                    </div>
                    <div className = "col-6">
                        <button className='btn customButton yellow w-100'><span className="material-icons-sharp">restart_alt</span>Reset</button>
                    </div>
                </div>
                
            </div>      
        </div>
    </>
  )
}

export default Filter