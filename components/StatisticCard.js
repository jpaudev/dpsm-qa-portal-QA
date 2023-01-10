import * as React from 'react'
import Moment from 'moment';

const StatisticCard = (props) => {
    
    const [statisticData, setStatisticData] = React.useState([]);

    let data = props.data ? props.data : []
    let statisticList = []; 

    // sort data by updatedAt(desc) to get the latest date
    const getLatestDate = (arr) => {
        return arr && arr.length > 0 ? arr.sort((x1,x2)=> new Date(x2.updatedAt) - new Date(x1.updatedAt))[0].updatedAt : ""
    }

    React.useEffect(()=>{
        //Set inital item in statistic list which is the TOTAL
        statisticList.push({
            count: data.length > 0 ? data.length : 0,
            title: "TOTAL",
            date: Moment(getLatestDate(data)).format('MM/DD/YYYY hh:mm A'),
            bgColor1: "#11799b", 
            bgColor2: "#61cbee",
            icon: "summarize"
        })
        
        props.statistic.forEach((value,index) => {
            //Add statistic card properties to the array
            statisticList.push(value)
            
            //Filter data depending on the statistic category item (eg: for status (Approved, Pending, Reject etc.))
            const filteredData = data.filter((obj)=>{
                if(obj.status.toUpperCase() === value.title) {
                    return true;
                }
            })

            //Get the date and count of the filtered data
            if (filteredData.length > 0) {
                statisticList[index + 1].count = filteredData.length
                statisticList[index + 1].date = Moment(getLatestDate(filteredData)).format('MM/DD/YYYY hh:mm A')
            } else {
                statisticList[index + 1].count = 0
                statisticList[index + 1].date = "N/A"
            }
        })
        setStatisticData(statisticList)
    },[props.data])

  return (
    <>
        {statisticData.length > 0 &&
            <div className="card-group">
                {statisticData.map((statistic, index) =>
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
                                    Last update: <b>{statistic.date}</b>
                                </div>
                            </div>
                        </div>
                    </div> 
                )}
            </div>
        }
    </>
  )
}

export default StatisticCard

// Linear Gradient colors:
//             bgColor1 bgColor2
// Red     ->  #b3133b, #ee6184
// Yellow  ->  #ff8a0e, #ffbe5c
// Green   ->  #408776, #8ac790
// Blue    ->  #11799b, #61cbee
// Purple  ->  #670067, #c900c9