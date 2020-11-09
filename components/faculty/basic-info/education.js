import Link from 'next/link'

function Education() {
    return (
        <div>
            <div>
                <table className = "table table-striped table-sm">
                    <tbody>
                        <tr>
                            <th>Institution/School</th>
                            <th>Degree/Certification</th>
                            <th>Major/Specialization</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Proof</th>
                            <th>Status</th>
                        </tr>
                        <tr>
                            <td>University of the Philippines Diliman</td>
                            <td>Doctor of Philosophy in Computer Science</td>
                            <td></td>
                            <td>2020-01-26</td>
                            <td></td>
                            <td></td>
                            <td><a className="btn btn-info" data-toggle="modal" data-target="#ongoing">Ongoing</a></td>
                        </tr>
                        <tr>
                            <td>University of the Philippines Diliman</td>
                            <td>MS Computer Science</td>
                            <td>Biostat</td>
                            <td>2017-05-26</td>
                            <td>2020-01-25</td>
                            <td><button>Preview proof here (img/pdf)</button></td>
                            <td><a className="btn btn-info" data-toggle="modal" data-target="#forVerif">For Verification</a></td>
                        </tr>
                        <tr>
                            <td>University of the Philippines Los Banos</td>
                            <td>BS Computer Science</td>
                            <td>Health Informatics</td>
                            <td>2010-09-06</td>
                            <td>2017-05-25</td>
                            <td><button>Preview proof here (img/pdf)</button></td>
                            <td>Verified</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div>
                <form>
                    <hr />
                    <div className = "form-row">
                        <div className = "col-auto">
                            <button type = "button" className = "btn btn-primary" id = "AddEducationalHistory"> Add Educational History </button>
                        </div>
                        <div className = "col-auto">
                            <button type = "button" className = "btn btn-danger" id = "RemoveEducationalHistory"> Remove a Row </button>
                        </div>
                    </div>
                    <br />
                    <div className = "form-row">
                        <div className = "form-group col-md-2">
                            <label htmlFor = "SchoolEducationalHistory[]"> School/Institution </label>
                            <input className = "form-control" type = "text" name = "SchoolEducationalHistory[]" placeholder = "Input school" />
                        </div>
                        <div className = "form-group col-md-2">
                            <label htmlFor = "DegreeEducationalHistory[]"> Degree/Certification </label>
                            <input className = "form-control" type = "text" name = "DegreeEducationalHistory[]" placeholder = "Input degree" />
                        </div>
                        <div className = "form-group col-md-2">
                            <label htmlFor = "MajorEducationalHistory[]"> Major/Specialization </label>
                            <input className = "form-control" type = "text" name = "MajorEducationalHistory[]" placeholder = "Input major" />
                        </div>
                        <div className = "form-group col-md-2">
                            <label htmlFor = "StartDateEducationalHistory[]"> Start Date </label>
                            <input type = "date" className = "form-control" name = "StartDateEducationalHistory[]" />
                        </div>
                        <div className = "form-group col-md-2">
                            <label htmlFor = "EndDateEducationalHistory[]"> End Date </label>
                            <input type = "date" className = "form-control" name = "EndDateEducationalHistory[]" />
                        </div>
                        <div className = "form-group col-md-2">
                            <label htmlFor = "ProofEducationalHistory[]"> Proof </label>
                            <input type = "file" className = "form-control" name = "ProofEducationalHistory[]" />
                        </div>
                    </div>
                    <div id = "EducationalHistory">
                        {/* <!-- Duplicate fields will appear here --> */}
                    </div>
                    <br />
                    <button type = "submit" className = "btn btn-primary"> Submit </button>
                    <hr />
                    
                    {/* <!-- End of Educational History --> */}
                </form>
            </div>   

            <div className="modal fade" id="ongoing" tabindex="-1" role="dialog" aria-labelledby="ongoingLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="ongoingLabel">Update Education Information</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <hr />
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "EndDate"> End Date </label>
                                    <input type = "date" className = "form-control" name = "EndDate" />
                                </div>
                            </div>
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "Proof"> Proof </label>
                                    <input type = "file" className = "form-control" name = "Proof" />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
            </div>
        
            <div className="modal fade" id="forVerif" tabindex="-1" role="dialog" aria-labelledby="forVerifLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="forVerifLabel">Status</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <hr />
                        <table className = "table table-striped table-sm">
                            <tr>
                                <th>Position</th>
                                <th>Name</th>
                                <th>Status</th>
                                <th>Date of Approval</th>
                            </tr>
                            <tr>
                                <td>Unit Head</td>
                                <td>Therese Basco-Uy</td>
                                <td>Approved</td>
                                <td>2020-11-08</td>
                            </tr>
                            <tr>
                                <td>Department Head</td>
                                <td>LOL Dunno</td>
                                <td>For Approval</td>
                                <td></td>
                            </tr>
                            
                        </table>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
            </div>
        
        </div>
        // $(document).ready(function(){
        //     // HTML for duplicate educational history fields
        //     var AdditionalFieldEducationalHistory = '<hr class = "duplicate"><div class = "form-row"><div class = "form-group col-md-2"><label for = "SchoolEducationalHistory[]"> School/Institution </label><input class = "form-control" type = "text" name = "SchoolEducationalHistory[]" placeholder = "Input school" ></div><div class = "form-group col-md-2"><label for = "DegreeEducationalHistory[]"> Degree/Certification </label><input class = "form-control" type = "text" name = "DegreeEducationalHistory[]" placeholder = "Input degree" ></div><div class = "form-group col-md-2"><label for = "MajorEducationalHistory[]"> Major/Specialization </label><input class = "form-control" type = "text" name = "MajorEducationalHistory[]" placeholder = "Input major"></div><div class = "form-group col-md-2"><label for = "StartDateEducationalHistory[]"> Start Date </label><input type = "date" class = "form-control" name = "StartDateEducationalHistory[]" ></div><div class = "form-group col-md-2"><label for = "EndDateEducationalHistory[]"> End Date </label><input type = "date" class = "form-control" name = "EndDateEducationalHistory[]"></div></div>';

        //     // Appends new educational history fields
        //     $("#AddEducationalHistory").click(function(){
        //         $("#EducationalHistory").append(AdditionalFieldEducationalHistory);
        //     });

        //     // Removes last row of duplicate educational history fields
        //     $("#RemoveEducationalHistory").click(function(){
        //         $("#EducationalHistory").children("div").last().remove();
        //         $("#EducationalHistory").children("hr").last().remove();
        //     });

        // });
    )
  }
  
  export default Education
