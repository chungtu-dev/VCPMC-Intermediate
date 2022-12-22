import '../App.css'
import { Form, Button, Checkbox, Input } from 'antd'
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, logInWithEmailAndPassword } from '../firebase/config'
import { Link, useNavigate } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'
import { Logo } from '../assets/img'

function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [user, loading] = useAuthState(auth)

    const navigate = useNavigate()

    useEffect(() => {
        if (loading) { return; }
        if (user) navigate('/profile');
    }, [user, loading])

    return (
        <div className="login">
            <div className="login-header">
                <img src={Logo} className="logo-vcpmc" alt="vcpmc" />
                <span>Đăng nhập</span>
                <Form labelCol={{ span: 10 }} wrapperCol={{ span: 14 }}
                    autoComplete="off" // ko cho hoàn thành khi chưa điền hết field
                >

                    <Form.Item name='email' label="Email"
                        className="input-valid"
                        rules={[
                            {
                                type: 'email',
                                required: true,
                                message: 'Vui lòng nhập tên Email'
                            }
                        ]}
                        hasFeedback
                    >
                        <Input className='input_info' placeholder="Email..." value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Form.Item>

                    <Form.Item name='password' label="Password"
                        className="input-valid"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập mật khẩu'
                            },
                            { min: 6, message: 'Mật khẩu phải ít nhất 6 số' },
                        ]}
                        hasFeedback
                    >
                        <Input.Password className='input_info' placeholder="Mật Khẩu..." autoComplete="on" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </Form.Item>

                    <Form.Item name='agreement' wrapperCol={{ span: 24 }} valuePropName="checked">
                        <Checkbox className='login_remember_info'>Ghi nhớ đăng nhập</Checkbox>
                    </Form.Item>

                    <Form.Item wrapperCol={{ span: 24 }}>
                        <Button type="primary" onClick={() => logInWithEmailAndPassword(email, password)} className="login__button">
                            {/* <FiLogIn className='icon__login_button' /> */}
                            <span>Đăng nhập</span></Button>

                        <Button type="primary" className="login__button">
                        <Link to="/dang-ki">Register</Link>
                        </Button>
                    </Form.Item>

                </Form>
            </div>
        </div>
    );
}

export default Login;
