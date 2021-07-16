import React, { useState } from 'react';
import { Form, Icon, Input, Button, Checkbox, notification } from 'antd';
import 'antd/dist/antd.css';
// import { UserOutlined, LockOutlined } from '@ant-design/icons';

import './RegisterForm.scss';
import '../../../App.scss';
import { emailValidation, minLengthVlidation } from '../../../utils/formValidation'
import { signUpApi } from '../../../api/user';

export default function RegisterForm() {

    const [input, setinputs] = useState({
        email: "",
        password: "",
        verifPassword: ""
    });

    const [formValid, setformValid] = useState({
        email: false,
        password: false,
        verifPassword: false
    });

    const changeForm = event => {
        setinputs({
            ...input,
            [event.target.name]: event.target.value
        });
    }

    const inputValidation = event => {
        const { type, name } = event.target;

        if (type == 'email') {
            setformValid({
                ...formValid, [name]: emailValidation(event.target)
            });
        }
        if (type == 'password') {
            setformValid({
                ...formValid, [name]: minLengthVlidation(event.target, 6)
            })
        }
    }

    const register = event => {
        event.preventDefault();

        const { email, password, verifPassword } = formValid;

        const emailValue = input.email;
        const passwordValue = input.password;
        const verifPasswordValue = input.verifPassword;

        if (!emailValue || !passwordValue || !verifPasswordValue) {
            notification['error']({
                message: 'Todos los campos son obligatorios'
            })
        } else {
            if (passwordValue !== verifPasswordValue) {
                notification['error']({
                    message: 'Las contraseñas deben ser iguales.'
                })
            } else {
                const result = signUpApi(input);
            }
        }
    }

    return (
        <Form className="register-form" onSubmitCapture={register} onChange={changeForm}>
            <Form.Item>
                <Input
                    // prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                    type="email"
                    name="email"
                    placeholder="Correo electronico"
                    className="register-form__input"
                    onChange={inputValidation}
                    value={input.email}

                />
            </Form.Item>

            <Form.Item>
                <Input
                    // prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    className="register-form__input"
                    onChange={inputValidation}
                    value={input.password}
                />
            </Form.Item>

            <Form.Item>
                <Input
                    // prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                    type="password"
                    name="verifPassword"
                    placeholder="Verifique la contraseña"
                    className="register-form__input"
                    onChange={inputValidation}
                    value={input.verifPassword}
                />
            </Form.Item>

            <Form.Item>
                <Button htmlType="submit" className="register-form__button">
                    Crear Usuario
                </Button>
            </Form.Item>
        </Form>
    );
}