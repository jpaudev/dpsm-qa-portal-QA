import Link from 'next/link'

function Education() {
    return (
        <div>
            <div>
                <table class = "table table-striped table-sm">
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
                    <div class = "form-row">
                        <div class = "col-auto">
                            <button type = "button" class = "btn btn-primary" id = "AddEducationalHistory"> Add Educational History </button>
                        </div>
                        <div class = "col-auto">
                            <button type = "button" class = "btn btn-danger" id = "RemoveEducationalHistory"> Remove a Row </button>
                        </div>
                    </div>
                    <br />
                    <div class = "form-row">
                        <div class = "form-group col-md-2">
                            <label for = "SchoolEducationalHistory[]"> School/Institution </label>
                            <input class = "form-control" type = "text" name = "SchoolEducationalHistory[]" placeholder = "Input school" />
                        </div>
                        <div class = "form-group col-md-2">
                            <label for = "DegreeEducationalHistory[]"> Degree/Certification </label>
                            <input class = "form-control" type = "text" name = "DegreeEducationalHistory[]" placeholder = "Input degree" />
                        </div>
                        <div class = "form-group col-md-2">
                            <label for = "MajorEducationalHistory[]"> Major/Specialization </label>
                            <input class = "form-control" type = "text" name = "MajorEducationalHistory[]" placeholder = "Input major" />
                        </div>
                        <div class = "form-group col-md-2">
                            <label for = "StartDateEducationalHistory[]"> Start Date </label>
                            <input type = "date" class = "form-control" name = "StartDateEducationalHistory[]" />
                        </div>
                        <div class = "form-group col-md-2">
                            <label for = "EndDateEducationalHistory[]"> End Date </label>
                            <input type = "date" class = "form-control" name = "EndDateEducationalHistory[]" />
                        </div>
                        <div class = "form-group col-md-2">
                            <label for = "ProofEducationalHistory[]"> Proof </label>
                            <input type = "file" class = "form-control" name = "ProofEducationalHistory[]" />
                        </div>
                    </div>
                    <div id = "EducationalHistory">
                        {/* <!-- Duplicate fields will appear here --> */}
                    </div>
                    <br />
                    <button type = "submit" class = "btn btn-primary"> Submit </button>
                    <hr />
                    
                    {/* <!-- End of Educational History --> */}
                </form>
            </div>   

            <div class="modal fade" id="ongoing" tabindex="-1" role="dialog" aria-labelledby="ongoingLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="ongoingLabel">Update Education Information</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <hr />
                            <div class = "form-row">
                                <div class = "form-group">
                                    <label for = "EndDate"> End Date </label>
                                    <input type = "date" class = "form-control" name = "EndDate" />
                                </div>
                            </div>
                            <div class = "form-row">
                                <div class = "form-group">
                                    <label for = "Proof"> Proof </label>
                                    <input type = "file" class = "form-control" name = "Proof" />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
            </div>
        
            <div class="modal fade" id="forVerif" tabindex="-1" role="dialog" aria-labelledby="forVerifLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="forVerifLabel">Status</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <hr />
                        <table class = "table table-striped table-sm">
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
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
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