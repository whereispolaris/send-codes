import React from 'react';
import './Article.css'
import Markdown from 'markdown-to-jsx';

const Article = (props) => {
    return (
        <div className="card book-card">
            <div className="row no-gutters">
                <div className="col-md-2">
                    <img src={props.image} className="card-img" alt="" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h4 className="card-title">{props.title}</h4>
                        <p className="card-text">
                            <Markdown>
                                {`${props.body}`}
                            </Markdown>
                        </p>
                        <p className="card-text"><strong>Author: {props.author}</strong></p>
                    </div>
                </div>
                <div className="col-md-1">
                    {/* <button onClick={props.handleFavorite} type="button" className="btn btn-secondary">{props.isSaved ? "Delete Article" : "Save Article"}</button> */}
                    <button type="button" className="btn btn-secondary">{props.isSaved ? "Delete Article" : "Save Article"}</button>
                    <a href="/" className="btn btn-dark">View Article</a>
                </div>
            </div>
        </div>
    )
}

export default Article;