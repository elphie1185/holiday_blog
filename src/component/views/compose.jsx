import React from 'react';
import Footer from '../views/partials/footer';

function Compose(){
    return(
        <div>
            <div class="compose">
                <ul class="nav nav-tabs nav-justified">
                    <li role="presentation" class="active"><a href="#">Create</a></li>
                    <li role="presentation"><a href="#">Edit</a></li>
                    <li role="presentation"><a href="#">Delete</a></li>
                </ul>
                {/* <form action="/compose" method="post">
                    <select class="custom-select col-6" id="inlineFormCustomSelectPref">
                        <option selected>Choose...</option>
                        <option value="1">New Entry</option>
                        <option value="2">Edit Entry</option>
                        <option value="3">Delete Entry</option>
                    </select> */}
                    {/* <div class="form-group">
                        <label>Date</label>
                        <input class="form-control" type="text" name="postDate" />
                        <label>Journey</label>
                        <input class="form-control" type="text" name="postTitle" />
                        <label>Description</label>
                        <textarea class="form-control" name="postBody" rows="5" cols="30"></textarea>
                    </div> */}
                {/* </form> */}
                {/* <button class="btn btn-primary btn-lg col-6" type="submit" name="button">Submit</button> */}
            </div>
            <Footer />
        </div>
    )
};

export default Compose;
