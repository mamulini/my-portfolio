import React from 'react';
import emailjs from 'emailjs-com';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';

import FormInput from '../form-input/form-input';
import { FormContainer, FormButton, FormTitle } from './form.style';

const Form = () => {
  const { handleSubmit, handleChange, values, errors, handleBlur, touched } = useFormik({
    initialValues: { firstName: '', email: '', message: '' },
    onSubmit: (values, actions) => {
      actions.setSubmitting(true);
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
          alert('Message sent successfully!');
          actions.setSubmitting(false);
          actions.resetForm();
        })
        .catch(() => {
          actions.setSubmitting(false);
          alert('Error sending email...');
        });
    }
  });

  const { t } = useTranslation();

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormTitle>{t('form.title')}</FormTitle>
      <FormInput
        type="text"
        name="firstName"
        value={`${values.firstName}`}
        handleChange={handleChange}
        handleBlur={handleBlur}
        label={t('form.name')}
        notifications={`${errors.firstName && touched.firstName ? errors.firstName : ''}`}
        required
      />
      <FormInput
        type="email"
        name="email"
        value={`${values.email}`}
        handleChange={handleChange}
        handleBlur={handleBlur}
        label={t('form.email')}
        notifications={`${errors.email && touched.email ? errors.email : ''}`}
        required
      />

      <FormInput
        as="textarea"
        name="message"
        value={`${values.message}`}
        handleChange={handleChange}
        handleBlur={handleBlur}
        label={t('form.message')}
        notifications={`${errors.message && touched.message ? errors.message : ''}`}
        required
      />

      <FormButton type="submit" loader="Submitting..">
        {t('form.send')}
      </FormButton>
    </FormContainer>
  );
};

export default Form;
