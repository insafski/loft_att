import React, { useState, useEffect } from "react";
import { Form, Field } from "react-final-form";
// import { TextField } from "final-form-material-ui";
import get from "lodash/get";
// import TextField from "@material-ui/core/TextField";

import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import Backdrop from "@material-ui/core/Backdrop";
import Container from "@material-ui/core/Container";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
// import InputMask from "react-input-mask";

import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

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

        if (typeof window !== "undefined" && window.ym && process.env.NODE_ENV === "production") {
			// eslint-disable-next-line
            ym(71141620, "reachGoal", "call_me");
        }


        fetch(request, {
            headers,
            method: "POST",
            body: JSON.stringify({ name, phone }),
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
    // return isNaN(value) || value.length === min ? undefined : `Должно быть ${min} цифр`;}

    // const composeValidators = (...validators) => value =>
    // validators.reduce((error, validator) => error || validator(value), undefined)

    return (
        <>
            <Button
                variant="contained"
                onClick={() => setOpen(!open)}
                className={"call-me-btn"}
            >
                {label}
            </Button>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={`${classes.modal} modal-call`}
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
                        background: "#696969",
                        outline: "none",
                        borderRadius: "4px",
                    }}
                >
                    <div className={classes.paper}>
                        <Typography
                            variant={"h4"}
                            align={"justify"}
                            className={"modal-call__title"}
                        >
                            Перезвоните мне
                        </Typography>
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
                                        component={"input"}
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
                                        component={"input"}
                                        type="tel"
                                        placeholder="Телефон"
                                    />
                                    <Button
                                        type="submit"
                                        fullWidth
                                        disabled={loading}
                                        style={{
                                            border: "1px solid #B87FD6",
                                            color: "#fff",
                                        }}
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

export function ModalForm2() {
    const classes = useStyles();
    const [loading, setLoading] = useState(false);
    const [notification, setNotification] = useState({});
    const [openNotification, setOpenNotification] = useState(false);

    const onSubmit = (data) => {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");

        const request = `${process.env.NEXT_PUBLIC_CALL_HOST}/loft/loft_call`;

        setLoading(true);

        if (
            typeof window !== "undefined" &&
            window.ym &&
            process.env.NODE_ENV === "production"
        ) {
            // eslint-disable-next-line
            ym(71141620, "reachGoal", "call_me");
        }

        fetch(request, {
            headers,
            method: "POST",
            body: JSON.stringify(data),
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
    // return isNaN(value) || value.length === min ? undefined : `Должно быть ${min} цифр`;}

    // const composeValidators = (...validators) => value =>
    // validators.reduce((error, validator) => error || validator(value), undefined)

    return (
        <div className={"modal-call"}>
            <Container
                maxWidth="xs"
                style={{
                    outline: "none",
                    borderRadius: "4px",
                }}
            >
                <div className={classes.paper}>
                    <Typography
                        variant={"h4"}
                        align={"justify"}
                        style={{ marginTop: 24 }}
                        className={"modal-call__title"}
                    >
                        Не нашли то что искали?
                    </Typography>
                    <Typography
                        variant={"h6"}
                        align={"center"}
                        style={{ marginTop: 24 }}
                        className={"modal-call__desc"}
                    >
                        Отправьте нам фото желаемой мебели и мы расчитаем его
                        стоимость
                    </Typography>
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
                                    component={"input"}
                                    type="text"
                                    placeholder="Ваше имя"
                                />
                                <Field
                                    required
                                    name="phone"
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    label="Ваш номер телефона"
                                    component={"input"}
                                    type="tel"
                                    placeholder="Ваш номер телефона"
                                />
                                <Field
                                    required
                                    name="comments"
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    component={"textarea"}
                                    placeholder="Ваши пожелания (размер, цвет и т.д.)"
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    disabled={loading}
                                    style={{
                                        marginBottom: 40,
                                        border: "1px solid #B87FD6",
                                        color: "#fff",
                                    }}
                                >
                                    Отправить
                                </Button>
                            </form>
                        )}
                    />
                </div>
            </Container>
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
        </div>
    );
}
