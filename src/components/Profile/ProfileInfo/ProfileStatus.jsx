import React from "react";
import s from './ProfileInfo.module.css';


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
    }

    activateEditMode = () => {


        this.setState({editMode: true});


    }
    deActivateEditMode = () => {
        this.setState({editMode: false
        });
        this.props.updateStatus(this.state.status);

    }

    onStatusChange = (e) => {
        this.setState({status: e.target.value});


    }

    render() {
        return (
            <>
                {!this.state.editMode &&
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || "NoStatus"}</span>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={ this.deActivateEditMode} value={this.props.status}/>
                    </div>
                }

            </>

        )
    }


}

export default ProfileStatus

