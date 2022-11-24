import * as React from 'react'

const StatisticCard = () => {
    const statistics = [
        {
            count: 1234,
            title: "TOTAL",
            date: "June 10 2020 3:30 PM PHT",
            bgColor1: "#11799b", 
            bgColor2: "#61cbee",
            icon: "summarize"
        },
        {
            count: 498,
            title: "Approved",
            date: "June 10 2020 3:30 PM PHT",
            bgColor1: "#408776", 
            bgColor2: "#8ac790",
            icon: "fact_check"
        },
        {
            count: 564,
            title: "Pending",
            date: "June 10 2020 3:30 PM PHT",
            bgColor1: "#ff8a0e", 
            bgColor2: "#ffbe5c",
            icon: "pending_actions"
        },
        {
            count: 109,
            title: "Rejected",
            date: "June 10 2020 3:30 PM PHT",
            bgColor1: "#b3133b", 
            bgColor2: "#ee6184",
            icon: "thumb_down_alt"
        }
    ]
  return (
    <>
        <div className="card-group">
        {statistics.map((statistic, index) =>
            <div className="card">
                <div className="card-sub" style={{backgroundImage: `linear-gradient(to right, ${statistic.bgColor1}, ${statistic.bgColor2})`}}>
                    <div className='row px-2'>
                        <div className='card-icon-container col-3'>
                            <span className="material-icons-sharp card-icon">{statistic.icon}</span>
                        </div>
                        <div className='card-title-container col-9'>
                            <div>
                                <div className='card-count'>
                                    {statistic.count}
                                </div>
                                <div className='card-title-text'>
                                    {statistic.title}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className='row'>
                        <div className='col-12 card-date text-center'>
                            <span className="material-icons-sharp">calendar_today</span>
                            Last update : {statistic.date}
                        </div>
                    </div>
                </div>
            </div> 
        )}
        </div>
    </>
  )
}

export default StatisticCard

// Linear Gradient colors:
// Red     ->  #b3133b, #ee6184
// Yellow  ->  #ff8a0e, #ffbe5c
// Green   ->  #408776, #8ac790
// Blue    ->  #11799b, #61cbee