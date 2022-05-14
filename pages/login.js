import React, { useRef, useState } from "react";
import { get, isEmpty, set } from "lodash-es";
import { FormBuilder } from "@jeremyling/react-material-ui-form-builder";
import { Alert, Avatar, Button, IconButton, InputAdornment } from "@mui/material";
import { LockOutlined, Visibility, VisibilityOff } from "@mui/icons-material";
import { red } from "@mui/material/colors";
import PropTypes from "prop-types";
import styles from "../styles/pages/Login.module.css";
import { useRouter } from 'next/router'
import { useAppContext } from "../context/AppContext";

async function validate(refs, form) {
    for (const [attribute, ref] of Object.entries(refs.current)) {
        var errors;
        if (ref.validate) {
            errors = await ref.validate(get(form, attribute));
        }
        if (!isEmpty(errors)) {
            console.log(errors);
            return false;
        }
    }
    return true;
}

export default function Login() {
    const router = useRouter()
    // const { setAuthType } = props;
    const [form, setForm] = useState({});
    const [showPassword, setShowPassword] = useState();
    const [message, setMessage] = useState(null);
    const refs = useRef({});
    const { dispatch } = useAppContext();

    const updateForm = (updates) => {
        const copy = { ...form };
        for (const [key, value] of Object.entries(updates)) {
            set(copy, key, value);
        }
        console.log("form", copy);
        setForm(copy);  
    };

    const passDataSubmit = async (form) => {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        });
        const data = await response.json();

        if (data.success) {
            dispatch({ type: "set_logged_in", value: true });
            dispatch({ type: "set_user", value: data.user });
            router.push("/products")
        } else {
            setMessage(data.message);
        }
    }

    const handleSubmit = async (event) => {
        // console.log("form", form);

        event.preventDefault();
        const ok = await validate(refs, form);
        if (!ok) {
            return;
        }

        passDataSubmit(form);
    };

    const fields = [
        {
            attribute: "username",
            component: "text-field",
            label: "Tên đăng nhập",
            props: {
                required: true,
                autoFocus: true,
            },
            validations: {
                required: true,
            }
        },
        {
            attribute: "password",
            component: "text-field",
            label: "Mật khẩu",
            props: {
                type: showPassword ? "text" : "password",
                InputProps: {
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    ),
                    style: {
                        paddingRight: 0
                    }
                },
                required: true
            },
            validations: {
                required: true,
            }
        },
        {
            attribute: "remember",
            component: "checkbox-group",
            options: [
                {
                    label: "Nhớ tài khoản",
                    value: true
                }
            ],
            optionConfig: {
                key: "label",
                label: "label",
                value: "value"
            }
        }
    ];

    return (
        <div className={styles.wrapper}>
            <div style={{ maxWidth: 500 }}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Avatar style={{ backgroundColor: red[500], color: "white" }}>
                        <LockOutlined />
                    </Avatar>
                </div>

                <h1 className={styles.title}>Đăng Nhập</h1>

                {message ? (
                    <Alert severity="error" sx={{ mb: 3 }}>{message}</Alert>
                ) : ""}


                <form onSubmit={handleSubmit}>
                    <FormBuilder
                        fields={fields}
                        form={form}
                        updateForm={updateForm}
                        refs={refs}
                    />
                    <Button
                        fullWidth
                        type="submit"
                        variant="contained"
                        color="primary"
                        style={{ marginTop: "8px" }}
                    >
                        Đăng Nhập
                    </Button>
                </form>
            </div>
        </div>
    );
}

Login.propTypes = {
    setAuthType: PropTypes.func
};
