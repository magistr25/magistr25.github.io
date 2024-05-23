import {Field, reduxForm} from "redux-form";
import {TextArea} from "../../common/formsControls/formsControls";
import {maxLenghtCreator, required} from "../../../utils/validators/validators";

const AddMessageForm = (props) => {
    let maxLenght50= maxLenghtCreator(50);
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={TextArea} name="newMessageBody"
                    placeholder="Write a message"
                    validate={[required, maxLenght50]} />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export default reduxForm({form: 'dialog-add-message-form'})(AddMessageForm)
