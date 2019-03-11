import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Pokeball from "../pokeball.png";
import { connect } from "react-redux";

class Home extends Component {
  /*
  state = {
    posts: []
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        this.setState({
          posts: res.data.slice(0, 10)
        });
      })
      .catch(e => {
        console.log(e);
      });
  } */

  render() {
    console.log(this.props);
    let { posts } = this.props;
    let postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <img src={Pokeball} alt="Pokeball" />
            <div className="card-content">
              <Link to={"/posts/" + post.id}>
                <span className="card-title red-text">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No posts found</div>
    );

    return (
      <div className="home container">
        <h4 className="center">Home</h4>
        {postList}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps)(Home);
