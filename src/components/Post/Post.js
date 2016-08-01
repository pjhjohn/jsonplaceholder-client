/**
 * Created by lanie on 2016-08-01.
 */

import React from 'react';


class Post extends React.Component {
    render() {
        return (
            <div>
                This is Post Component
                {<h2> {this.props.params.id} </h2>}
                {/*<h3> {this.props.title} </h3>*/}
                {/*<h3> {this.props.body} </h3>*/}
            </div>
        )
    }

}

Post.defaultProps = {
        userId: '0',
        id: '0',
        title: 'title',
        body: 'post'
};

export default Post;
