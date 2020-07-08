import React, { PureComponent } from 'react'

class PureComponentExample extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            val: 1,
        }
    }
    componentDidMount = () => {
        setInterval(() => {
            this.setState(() => {
                return { val: 1 }
            });
        }, 2000)
    }

    // shouldComponentUpdate = (nextProps, nextState) => {
    //   console.log("nextState", nextState);
    //   console.log("State", this.state);
    //   return (this.state.val === nextState.val ? false : true)
    //this is checking if the current state is equal to the incoming state. if the two state are equal, component does not rerender if the two states are not equal, it rerenders

    //you can do this in a better way by simply using pureComponents

    // }
    render() {
        console.log("rendered temp");
        return (
            <div>
                {this.state.val}
            </div>
        )
    }
}

export default PureComponentExample
