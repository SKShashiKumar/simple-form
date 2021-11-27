import React,{useState} from 'react';
const SimpleForm = () => {

    const [imageupload, setImageupload] = useState(false);
    const [ImageURL, setImageURL] = useState("https://img.icons8.com/doodle/96/000000/test-account.png");

    function imageHandler(e) {
        const imgs = new FileReader()
        imgs.onload = () => {
            if(imgs.readyState === 2)
            {
                setImageURL(imgs.result)
            }
        }
        imgs.readAsDataURL(e.target.files[0]);
      }

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
            <div className="row">
                      <div className="col-md-12">
                        {imageupload ? 
                        <img src={ImageURL} width="50px" height="50px" className="mx-auto d-block" alt="profile"/> : null}
                      </div>
                  </div>
                <div className="row">
                    <div className="form-group col-md-6">
                        <label>First Name</label>
                        <input type="text" className="form-control" id="fname" placeholder="Enter the first name" pattern="[A-Za-z]{3,}" required/>
                    </div>
                    <div className="form-group col-md-6">
                        <label>Last Name</label>
                        <input type="text" className="form-control" id="lname" placeholder="Enter the last name" pattern="[A-Za-z]{1,}" required/>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="form-group col-md-6">
                        <label>Email</label>
                            <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">@</div>
                                </div>
                                <input type="email" className="form-control" id="email" placeholder="some@email.com" required/>
                            </div>
                    </div>
                    <div className="form-group col-md-6">
                        <label>Phone</label>
                            <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">+91</div>
                                </div>
                                <input type="tel" className="form-control" id="phone" placeholder="9876543210" pattern="[6789][0-9]{9}" required/>
                            </div>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="form-group col-md-12">
                        <label>Website</label>
                            <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">http://</div>
                                </div>
                                <input type="text" className="form-control" id="website" placeholder="www.google.com" pattern="[wW]{3}[.]{1}[a-zA-Z0-9]{1,}[.]{1}[com,COM,org,ORG,net,NET]{3}" required/>
                            </div>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="form-group col-md-6">
                        <label>Bank Name</label>
                        <input type="text" className="form-control" id="bankName" placeholder="Enter Bank name" required/>
                    </div>
                    <div className="form-group col-md-6">
                        <label >IFSC Code</label>
                        <input type="text" className="form-control" id="ifscCode" placeholder="Enter 11 the AlphaNumeric IFSC Code" pattern="[A-Za-z0-9]{11}" required/>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-6">
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" id="validatedCustomFile"  accept="image/png, image/jpeg, image/jpg"  onChange={imageHandler} required/>
                            <label className="custom-file-label">Choose Profile pic...</label>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <button type="button" className="btn btn-success" onClick={() => setImageupload(true)}>Upload</button>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="form-group col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <button className="btn btn-primary ml-5" type="submit">Submit</button>
                    </div>
                    <div className="form-group col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <button className="btn btn-danger ml-5" type="reset">Clear</button>
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
