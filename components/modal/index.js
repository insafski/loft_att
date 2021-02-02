import React, { useState, useEffect } from "react";
import { Form, Field } from "react-final-form";
// import { TextField } from "final-form-material-ui";
import get from "lodash/get";
import TextField from "@material-ui/core/TextField";

import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import Backdrop from "@material-ui/core/Backdrop";
import Container from "@material-ui/core/Container";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
// import InputMask from "react-input-mask";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    paper: {
        margin: "20px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
}));

export default function ModalForm({ label = "Заказать звонок" }) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [notification, setNotification] = useState({});
    const [openNotification, setOpenNotification] = useState(false);

    const onSubmit = ({ name, phone }) => {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");

        const request = `${process.env.NEXT_PUBLIC_CALL_HOST}/loft/loft_call`;

        setLoading(true);

        fetch(request, {
            headers,
            method: "POST",
            body: JSON.stringify({ name, phone }),
            mode: "cors",
            credentials: "include",
            redirect: "follow",
        })
            .then((res) => {
                setLoading(false);
                if (res.status === 200) {
                    return res.json();
                } else {
                    setNotification({
                        severity: "error",
                        title: "Server error",
                    });
                }
            })
            .then((res) => {
                setLoading(false);
                setOpen(false);
                setNotification({
                    severity: "success",
                    title: get(res, "message", ""),
                });
            })
            .catch(() => {
                setLoading(false);
                setNotification({
                    severity: "error",
                    title:
                        "Ошибка сервера. Обновите страницу и попробуйте еще раз. ",
                });
            });
    };

    //TODO:
    // useEffect(() => {
    //         IMask(document.querySelector("[name=phone]"), {
    //             mask: "+{7}(000)000-00-00",
    //         });
    // }, [])

    useEffect(() => {
        if (notification.title) {
            setOpenNotification(true);
        }
    }, [notification]);

    // const mustBeNumber = (value) => (isNaN(value) ? "Допустимы только номера" : undefined);
    // const minValue = (min) => (value) => {
    //     console.log(value.length);
    // return isNaN(value) || value.length === min ? undefined : `Должно быть ${min} цифр`;}

    // const composeValidators = (...validators) => value =>
    // validators.reduce((error, validator) => error || validator(value), undefined)

    return (
        <>
            <Button
                variant="contained"
                color="primary"
                onClick={() => setOpen(!open)}
            >
                {label}
            </Button>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={() => setOpen(false)}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Container
                    component="main"
                    maxWidth="xs"
                    style={{
                        background: "#fff",
                        outline: "none",
                        borderRadius: "4px",
                    }}
                >
                    <div className={classes.paper}>
                        <Form
                            onSubmit={onSubmit}
                            render={({
                                handleSubmit,
                                form,
                                submitting,
                                pristine,
                            }) => (
                                <form
                                    className={classes.form}
                                    onSubmit={handleSubmit}
                                >
                                    <Field
                                        required
                                        name="name"
                                        variant="outlined"
                                        fullWidth
                                        label="Ваше имя"
                                        component={TextField}
                                        type="text"
                                        placeholder="Ваше имя"
                                    />
                                    <Field
                                        required
                                        name="phone"
                                        variant="outlined"
                                        margin="normal"
                                        fullWidth
                                        label="Телефон"
                                        component={TextField}
                                        type="tel"
                                        placeholder="Телефон"
                                    />
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        disabled={loading}
                                    >
                                        Заказать звонок
                                    </Button>
                                </form>
                            )}
                        />
                    </div>
                </Container>
            </Modal>
            <Snackbar
                open={openNotification}
                autoHideDuration={6000}
                onClose={() => setOpenNotification(false)}
            >
                <MuiAlert
                    elevation={6}
                    variant="filled"
                    severity={notification.severity}
                    onClose={() => setOpenNotification(false)}
                >
                    {notification.title}
                </MuiAlert>
            </Snackbar>
        </>
    );
}
