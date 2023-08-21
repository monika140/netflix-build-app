
const fetecher = async (method, endpoints) => {
    // Method either GET POST PUT DELETE
    // NOTE:= when you need to send the POST request you required some changes in the this function to to send the body.
    try {
        const options = {
            method: method,
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTU2MGVhNjQ2YTRmZjliMGIyMmNlMzU3MDQ4ZjRiOSIsInN1YiI6IjY0Y2NjMmZlNDNjZDU0MDBmZjliNTEyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Pf4qkZyIHZl5Q6tv3WCMSDN4NxiWaavrCncPiqgCJZw'
            }
        };
        // Url also using the wrong api.  => so be careful or focus to with these little things 
        let url = `https://api.themoviedb.org/3${endpoints}`
        // console.log("====>?", url);
        // fetch(url, options).
        //     then(res => res.json()).
        //     then(result => console.log(result))
        console.log("url==>", url);
        let response = await fetch(url, options)
        // // The upcomming response comming in the string or bytes format so here required to parse the data into json!.
        let json = await response.json()
        // here I return the response which I get from the api.        
        return json
    } catch (error) {
        console.log(error);
    }


}

export default fetecher;
