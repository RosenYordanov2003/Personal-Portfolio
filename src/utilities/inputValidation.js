export const emailInput = {
    name: 'user_email',
    type: 'email',
    placeHolder: 'Your Email',
    validation: {
        required: {
            value: true,
            message: 'required',
        },
        pattern: {
            value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Please enter a valid email',
        },
    },
    multiline: false
}
export const emailMessageInput = {
    name: 'message',
    type: 'text',
    placeHolder: 'Message',
    validation: {
        required:{
            value: true,
            message: 'required'
        }
    },
    cols: 10,
    rows: 25,
    multiline: true
}
export const nameInput = {
    name: 'from_name',
    type: 'text',
    placeHolder: 'Your Name',
    validation: {
        required:{
            value: true,
            message: 'required'
        }
    },
    multiline: false
}