import React from "react";
import axios from "axios";
class App extends React.Component{
    render(){
        return (
            <div>你现在好吗？心情快乐吗？我从远方送你的花收到了吗？</div>
        )
    }
    componentDidMount(){
        axios.get("/api/v2/movie/top250?start=25&count=25")
            .then(({data})=>{
                console.log(data);
        })
    }
}
export default App;