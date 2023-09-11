import { Button, Form } from 'react-bootstrap';

function Contact() {
  return (
    <Form className='mt-4'>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Name</Form.Label>
        <Form.Control required type='text' placeholder='Enter your name' />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Email</Form.Label>
        <Form.Control required type='email' placeholder='Enter your email' />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formBasicPassword'>
        <Form.Label>Message</Form.Label>
        <Form.Control
          required
          as='textarea'
          rows={3}
          placeholder='Enter your message'
        />
      </Form.Group>
      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  );
}

export default Contact;
