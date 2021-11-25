const SimpleForm = () => {

  return (
    <div className="container-fluid main">
      <div className="row">
        <div className="col mainHeading">
          <h3>Doodleblue</h3>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className="card">
            <form action="" className="container">
                <div class="row">
                    <div class="form-group col-md-6">
                        <label for="fname">First Name</label>
                        <input type="text" class="form-control" id="fname" placeholder="Enter the first name" required/>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="lname">Last Name</label>
                        <input type="text" class="form-control" id="lname" placeholder="Enter the last name" required/>
                    </div>
                </div>
                <br />
                <div class="row">
                    <div class="form-group col-md-6">
                        <label for="email">Email</label>
                            <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">@</div>
                                </div>
                                <input type="email" class="form-control" id="email" placeholder="some@email.com" required/>
                            </div>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="phone">Phone</label>
                            <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">+91</div>
                                </div>
                                <input type="tel" class="form-control" id="phone" placeholder="9876543210" pattern="^\d{3}\d{3\d{4}$" required/>
                            </div>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div class="form-group col-md-12">
                        <label for="website">Website</label>
                            <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">http://</div>
                                </div>
                                <input type="text" class="form-control" id="website" placeholder="personalWebsite.com" required/>
                            </div>
                    </div>
                </div>
                <br />
                <div class="row">
                    <div class="form-group col-md-6">
                        <label for="bankName">Bank Name</label>
                        <input type="text" class="form-control" id="bankName" placeholder="Enter Bank name" required/>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="ifscCode">IFSC Code</label>
                        <input type="text" class="form-control" id="ifscCode" placeholder="Enter the IFSC Code" required/>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <div class="custom-file">
                            <input type="file" class="custom-file-input" id="validatedCustomFile" required/>
                            <label class="custom-file-label" for="validatedCustomFile">Choose Profile pic...</label>
                            <div class="invalid-feedback">Example invalid custom file feedback</div>
                        </div>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div class="form-group col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <button class="btn btn-primary ml-5" type="submit">Submit</button>
                    </div>
                    <div class="form-group col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <button class="btn btn-danger ml-5" type="reset">Clear</button>
                    </div>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleForm;
