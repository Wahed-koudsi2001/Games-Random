import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";
import { useState } from 'react';
import { GrFormClose } from "react-icons/gr"
import { AiOutlineMail } from "react-icons/ai"
import { PiLockKeyFill } from "react-icons/pi"
import Modal from 'react-bootstrap/Modal';
import { NavLink, Outlet } from "react-router-dom";
import { AiOutlineBars, AiOutlineQuestionCircle, AiOutlineHome, AiOutlineExclamationCircle } from "react-icons/ai";
import { PiGameControllerDuotone } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";
import "./navbar.css";

export default function Navbar() {

    const [bar, setBar] = useState(true);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const scheme = yup.object().shape({
        email: yup.string().email().required("Please Your Email "),
        password: yup.string().min(4).max(20).required("Please Your asd Password")
    });

    const { register, formState: { errors } } = useForm({
        resolver: yupResolver(scheme),
    });



    return (
        <>
            <div className="wahed-nav-bar">
                <nav className={bar ? "active" : ""}>
                    <ul>
                        <NavLink to="/">
                            <li>
                                <span><AiOutlineHome /></span>
                                <span>Home</span>
                            </li>
                        </NavLink>
                        <NavLink to="error-404">
                            <li>
                                <span><AiOutlineExclamationCircle /></span>
                                <span>404</span>
                            </li>
                        </NavLink>
                        <NavLink to="games-by-tag">
                            <li>
                                <span><PiGameControllerDuotone /></span>
                                <span>Games By Tag</span>
                            </li>
                        </NavLink>
                        <NavLink to="pricing">
                            <li>
                                <span><AiOutlineQuestionCircle /></span>
                                <span>Pricing</span>
                            </li>
                        </NavLink>
                    </ul>
                    <div className="wahed-btn" onClick={handleShow}>
                        <button>Login</button>
                    </div>
                </nav>
                <div className="bars-icons" onClick={() => setBar(!bar)}>
                    {bar ? <IoMdClose /> : <AiOutlineBars />}
                </div>
                <Modal show={show} onHide={handleClose}>
                    <div className='py-3 wahed-modal-bg'>
                        <div className='px-4 py-2 pb-4 d-flex justify-content-between align-items-center border-bottom'>
                            <span className='text-light'>Login</span>
                            <div onClick={handleClose} show={show} className='wahed-close' >
                                <GrFormClose size={22} className='text-light' />
                            </div>
                        </div>
                        <div className='p-4 wahed-col'>
                            <h3 className='text-center text-light mb-3'>Login</h3>
                            <p style={{ color: "rgb(115, 115, 119) " }}>Don't have an account?<span className='wahed-text'> Create Your Account </span> takes less than a minute</p>
                            <form className='d-flex flex-column gap-4 mt-5'>
                                <div className='d-flex align-items-center wahed-border-bottom py-2 px-3'>
                                    <AiOutlineMail size={22} />
                                    <input type="email" className='border-0 w-100 bg-transparent text-light' placeholder='Email' {...register("email")} />
                                </div>
                                <div className='d-flex align-items-center wahed-border-bottom py-2 px-3'>
                                    <PiLockKeyFill size={22} />
                                    <input type="password" className='border-0 w-100 bg-transparent text-light' placeholder='password'  {...register("password")} />
                                </div>
                            </form>
                            <div className='wahed-btn m-auto text-center mt-5' onClick={handleClose}>
                                <button>Login</button>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
            <Outlet />
        </>
    )
}
