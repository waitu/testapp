
import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';

const { TextArea } = Input;
const Home = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [textAreaValue, setTextAreaValue] = useState('');
  const handleSubmit = async (values) => {
    setLoading(true);
    //post your data
    try {
      console.log(values);
      message.success('Submit');
    } catch (error) {
      message.error('Error');
      console.error('Error with : ', error);
    } finally {
      setLoading(false);
    }
  };
  //
  //setTextAreaValue(data you want)
  const handleCopy = () => {
    try {
      // Create a temporary input element
      const tempInput = document.createElement('input');
      // Set the value of the temporary input to the text from the state
      tempInput.value = textAreaValue;
      // Append the temporary input to the document
      document.body.appendChild(tempInput);
      // Select the text in the temporary input
      tempInput.select();
      // Execute the copy command
      document.execCommand('copy');
      // Remove the temporary input from the document
      document.body.removeChild(tempInput);
      // Show a success message
      message.success('Text copied to clipboard');
    } catch (error) {
      // Show an error message if copying fails
      message.error('Failed to copy text');
      console.error('Failed to copy text', error);
    }
  };
  return (
    <div className='flex justify-center py-10'>
      <div className='sm:w-full md: w-2/4 lg:w-2/4 border border-gray-300 p-10 rounded-xl'>
        <Form form={form} onFinish={handleSubmit}>
          <Form.Item
            name="textbox"
            rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập!' }]}
          >
            <Input placeholder="Placeholder" />
          </Form.Item>
          <Form.Item className='text-center'>
            <Button className='bg-blue-400' type="primary" htmlType="submit" loading={loading}>
              Submit
            </Button>
          </Form.Item>
        </Form>

        <TextArea
          value={textAreaValue}
          onChange={(e) => setTextAreaValue(e.target.value)}
          rows={4}
          placeholder="Placeholder"
        />
        <div className='flex justify-end pt-5'>
        <Button onClick={handleCopy} className=''>
          Copy
        </Button>
        </div>
        
      </div>
    </div>
  )
}

export default Home