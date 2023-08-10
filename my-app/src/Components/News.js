import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {

  articles =  [];
  constructor() {
    super();
    
    this.state = {

     articles:this.articles,
     loading:true,


    }
  }


  async componentDidMount(){

    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=91ff6fabd49744738016ce37559a4c7c";
    // let url = "https://newsapi.org/v2/top-headlines?q=property&apiKey=91ff6fabd49744738016ce37559a4c7c"; only for real estate property project and nothing more
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles})
  }
  render() {
    return (
      <div className="container my-3">
        <h2>Live News - Top Headlines</h2>
        
        <div className="row">
        {this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
          <NewsItem
            title={element.title?element.title.slice(0,80):""}
            
            description={element.description?element.description.slice(0,80):""}
            newsUrl = {element.url}
            imageUrl={element.urlToImage?element.urlToImage:"https://i.ytimg.com/vi/XTCz401e1eA/mqdefault.jpg"}
          />
        </div>


        })}
          
          
        </div>
      </div>
    );
  }
}
