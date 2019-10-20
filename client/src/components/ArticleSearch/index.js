import React from 'react';
import Article from '../Article';

const ArticleSearch = () => {
    return (
        <div>
            <ul class="nav nav-pills nav-fill">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Language</a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">JavaScript</a>
                        <a class="dropdown-item" href="#">HTML</a>
                        <a class="dropdown-item" href="#">CSS</a>
                        <a class="dropdown-item" href="#">PHP</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Topic</a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">React</a>
                        <a class="dropdown-item" href="#">Bootstrap</a>
                        <a class="dropdown-item" href="#">Laravel</a>
                        <a class="dropdown-item" href="#">Express</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Results</a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">5</a>
                        <a class="dropdown-item" href="#">10</a>
                        <a class="dropdown-item" href="#">20</a>
                        <a class="dropdown-item" href="#">100</a>
                    </div>
                </li>
            </ul>
            {/* {
                // Map Articles here
            } */}
            <Article
                image="https://picsum.photos/id/1073/100/100"
                title="JavaScript Variables"
                author="Santiago Enciso"
                handleFavorite="Function"
                isSaved="Function"
                articleLink="Link"
            />
            <Article
                image="https://picsum.photos/id/1073/100/100"
                title="Laravel Installation"
                author="Santiago Enciso"
                handleFavorite="Function"
                isSaved="Function"
                articleLink="Link"
            />
        </div>
    )
}

export default ArticleSearch;   