import React from 'react'

const Widget = () => {
  return (
    <>
        <div className="card my-3">
            <div className="card-body">
                Department Accomplishments
                <hr class="bg-danger border-2 border-top border-danger"></hr>
                <div className='row'>
                    <div className='col-4 widget-item-one'>
                        <div className='widget-category'>
                            Physics/Geology
                        </div>
                        <div className='widget-percentage'>
                                28.4 %
                        </div>
                        <div className='widget-count'>
                            1234
                        </div>
                    </div>
                    <div className='col-4 widget-item-two'>
                        <div className='widget-category'>
                            Chemistry
                        </div>
                        <div className='widget-percentage'>
                            28.4 %
                        </div>
                        <div className='widget-count'>
                            1234
                        </div>
                    </div>
                    <div className='col-4 widget-item-three'>
                        <div className='widget-category'>
                            MCSU
                        </div>
                        <div className='widget-percentage'>
                            28.4 %
                        </div>
                        <div className='widget-count'>
                            1234
                        </div>
                    </div>
                </div>
                
                <div class="progress mt-1">
                    <div class="progress-bar widget-progress-one" role="progressbar" aria-label="Segment one" style={{width: `30%`}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                    <div class="progress-bar widget-progress-two" role="progressbar" aria-label="Segment two" style={{width: `30%`}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                    <div class="progress-bar widget-progress-three" role="progressbar" aria-label="Segment three" style={{width: `30%`}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Widget