import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleLogin = async (values) => {
    setLoading(true);

    // Gửi yêu cầu đăng nhập đến máy chủ
    try {
      console.log(values);
      // Xử lý đăng nhập ở đây, ví dụ sử dụng Axios
      // const response = await axios.post('URL_API_LOGIN', values);
      // console.log('Đăng nhập thành công!', response.data);
      // Lưu trạng thái đăng nhập hoặc token vào Redux hoặc Context API
      // dispatch(loginSuccess(response.data));
      // Hiển thị thông báo đăng nhập thành công
      // localStorage.setItem('authToken', response.data.token);
      navigate("/");
      message.success('Đăng nhập thành công!');
    } catch (error) {
      // Hiển thị thông báo đăng nhập thất bại
      message.error('Đăng nhập thất bại!');
      console.error('Đăng nhập thất bại!', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container ant-col ant-col-xs-24 ant-col-md-12 ant-col-lg-8">
      <h2 className='text-2xl p-5 font-bold'>Sign in to Loyal</h2>
      <Form form={form} onFinish={handleLogin} className='sm:w-full md: w-2/4 lg:w-2/4 border border-gray-300 p-10 rounded-xl'>
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please enter userName!' }]}
        >
          <Input placeholder="UserName" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please enter password!' }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item className='text-center'>
          <Button className='bg-blue-400' type="primary" htmlType="submit" loading={loading}>
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
