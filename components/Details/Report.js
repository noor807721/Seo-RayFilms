import React,{useState} from 'react'

function Report({data}) {
  const [RepData, setRepData] = useState({
    imdbId:data.imdbId,
    email:"",
    msg:""
})
let name,value;

const handleInput = (e) =>{
  name = e.target.name;
  value = e.target.value;
  setRepData({...RepData,[name]:value})
}

  return (
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title text-truncate" id="exampleModalLabel">Report:- {data.imdbId}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <input hidden type="text" className="form-control" id="imdbId" />
                <label htmlFor="recipient-name" className="col-form-label">Email:</label>
                <input type="email" className="form-control" name="email"  onChange={handleInput} value={RepData.email}/>
              </div>
              <div className="form-group">
                <label htmlFor="message-text" className="col-form-label">Message:</label>
                <textarea className="form-control" name="msg" onChange={handleInput} value={RepData.msg}></textarea>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="submit" className="btn btn-primary">Send message</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Report
