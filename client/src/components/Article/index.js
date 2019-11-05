import React from 'react';
import './Article.css'
import Markdown from 'markdown-to-jsx';

const Article = (props) => {
    return (
        <div className="card book-card">
            <div className="row no-gutters">
                <div className="col-md-12">
                    <div className="card-body">
                        <h4 className="card-title">{props.title}</h4>
                        <hr/>
                        <Markdown>
                            {`${props.body}`}
                        </Markdown>
                        <p className="card-text"><strong>Author: {props.author}</strong></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Article;