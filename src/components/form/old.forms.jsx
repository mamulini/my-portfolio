import * as React from 'react';
import * as emailjs from 'emailjs-com';
import { Form, Formik } from 'formik';

const Forms = () => {
  // const [emailSent, setEmailSent] = React.useState(false);
  return (
    <Formik
      initialValues={{ firstName: '', email: '', message: '' }}
      onSubmit={(values, actions) => {
        actions.setSubmitting(true);
        setTimeout(() => {
          emailjs
            .send(
              'gmail_service',
              'template_357sgxf',
              {
                user_name: values.firstName,
                user_email: values.email,
                message: values.message
              },
              'user_Ve5i24OLb7eA9MUG3Mw7O'
            )
            .then(() => {
              // setEmailSent(true);
              actions.setSubmitting(false);
              actions.resetForm();
            })
            .catch(() => {
              actions.setSubmitting(false);
              alert('Error sending email...');
            });
        }, 1000);
      }}
      render={({ handleChange, values, errors, handleBlur, touched }) => (
        <Form
          style={{
            background: 'lightgray',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: 'black',
            height: '100%'
          }}
        >
          <div>
            <label htmlFor="text" style={{ display: 'block' }}>
              Name
            </label>
            <input
              id="text"
              type="text"
              name="firstName"
              value={`${values.firstName}`}
              onChange={handleChange}
              onBlur={handleBlur}
              label="Name"
              notifications={`${errors.firstName && touched.firstName ? errors.firstName : ''}`}
              required
            />
            <label htmlFor="email" style={{ display: 'block' }}>
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={`${values.email}`}
              onChange={handleChange}
              onBlur={handleBlur}
              label="Email"
              notifications={`${errors.email && touched.email ? errors.email : ''}`}
              required
            />
          </div>
          <label htmlFor="message" style={{ display: 'block' }}>
            Message
          </label>
          <textarea
            style={{ width: '286px', height: '115px', padding: '5px' }}
            id="message"
            name="message"
            value={`${values.message}`}
            onChange={handleChange}
            onBlur={handleBlur}
            label="Message"
            notifications={`${errors.message && touched.message ? errors.message : ''}`}
            required
          />
          <button
            type="submit"
            loader="Submitting.."
            style={{
              width: '100px',
              height: '40px',
              color: 'red',
              border: '1px solid black',
              marginTop: '20px'
            }}
          >
            Submit
          </button>
        </Form>
      )}
    />
  );
};

export default Forms;
