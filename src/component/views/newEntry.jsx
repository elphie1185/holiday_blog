import React from 'react';
import Footer from '../views/partials/footer';


function newEntry(){
    return(
        <div class="compose">
            <form action="/compose" method="post">
                <div class="form-group">
                    <label>Date</label>
                    <input class="form-control" type="text" name="postDate" />
                    <label>Journey</label>
                    <input class="form-control" type="text" name="postTitle" />
                    <label>Description</label>
                    <textarea class="form-control" name="postBody" rows="5" cols="30"></textarea>
                </div>
            </form>
            <button class="btn btn-primary btn-lg col-6" type="submit" name="button">Submit</button>
        <Footer />
        </div> 
    )
};


export default newEntry;