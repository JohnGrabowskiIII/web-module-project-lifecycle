
import React from 'react'

class FollowerList extends React.Component {
    constructor(props) {
        super(props);
    }

    followerArrayRenderer = () => {
        if (this.props.info) {
            console.log(this.props.info)
            const arrayInfo = this.props.info.map((data, index) => {
                return this.props.tagCreator(index, data, index);
            })
            return arrayInfo;
        }
    }

    componentDidMount() {
        this.props.follower(this.props.username)
    }

    render() {
        return (
            <>
                {this.props.tagCreator('Number of Followers', this.props.number)}
                {this.followerArrayRenderer()}
            </>
        )

    }

}

export default FollowerList;